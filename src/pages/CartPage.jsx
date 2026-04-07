import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatINR } from '../utils/format'

function CartPage() {
  const navigate = useNavigate()
  const {
    cartItems,
    cartSubtotal,
    clearCart,
    removeFromCart,
    updateQuantity,
    user,
  } = useStore()

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Your cart is empty
          </h1>
          <p className="mt-3 text-slate-600">
            Add products from the catalog to continue shopping.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950">
              Shopping cart
            </h1>
            <p className="mt-2 text-slate-600">
              Review items, update quantities, or continue to checkout.
            </p>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Clear cart
          </button>
        </div>

        <div className="mt-8 space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 rounded-[1.5rem] border border-slate-200 p-4 md:grid-cols-[120px_minmax(0,1fr)_auto]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-28 w-full rounded-2xl object-cover"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {item.category}
                </p>
                <Link
                  to={`/product/${item.slug}`}
                  className="mt-2 block text-lg font-bold text-slate-950"
                >
                  {item.title}
                </Link>
                <p className="mt-2 text-sm text-slate-600">{item.delivery}</p>
                <p className="mt-3 text-base font-semibold text-slate-900">
                  {formatINR(item.price)}
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-lg font-bold text-slate-700"
                  >
                    -
                  </button>
                  <span className="min-w-8 text-center text-sm font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-lg font-bold text-slate-700"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm font-semibold text-rose-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">
          Order summary
        </h2>
        <div className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Items subtotal</span>
            <span>{formatINR(cartSubtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Platform fee</span>
            <span>{formatINR(99)}</span>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-slate-700">Order total</span>
            <span className="text-2xl font-black tracking-tight text-slate-950">
              {formatINR(cartSubtotal + 99)}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            navigate(user ? '/orders' : '/signin?redirect=/orders')
          }
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800"
        >
          Proceed to checkout
        </button>

        <Link
          to="/"
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Continue shopping
        </Link>
      </aside>
    </section>
  )
}

export default CartPage
