import { createContext, useContext, useEffect, useState } from 'react'

const StoreContext = createContext(null)

const readStorage = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readStorage('zaafree-cart', []))
  const [user, setUser] = useState(() => readStorage('zaafree-user', null))

  useEffect(() => {
    window.localStorage.setItem('zaafree-cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    window.localStorage.setItem('zaafree-user', JSON.stringify(user))
  }, [user])

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { ...product, quantity }]
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCartItems((current) => current.filter((item) => item.id !== productId))
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  const clearCart = () => setCartItems([])

  const signIn = (details) => {
    setUser({
      name: details.name,
      email: details.email,
    })
  }

  const signOut = () => setUser(null)

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <StoreContext.Provider
      value={{
        addToCart,
        cartCount,
        cartItems,
        cartSubtotal,
        clearCart,
        removeFromCart,
        signIn,
        signOut,
        updateQuantity,
        user,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const value = useContext(StoreContext)

  if (!value) {
    throw new Error('useStore must be used inside StoreProvider')
  }

  return value
}
