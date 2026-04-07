import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { categories, products } from './data/products'
import CartPage from './pages/CartPage'
import CategoriesPage from './pages/CategoriesPage'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import NotFoundPage from './pages/NotFoundPage'
import OrdersPage from './pages/OrdersPage'
import ProfilePage from './pages/ProfilePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import SearchResultsPage from './pages/SearchResultsPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

function StoreLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <Header categories={categories} />
      <main className="pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route path="/" element={<HomePage products={products} categories={categories} />} />
        <Route
          path="/category/:categorySlug"
          element={<CategoryPage products={products} categories={categories} />}
        />
        <Route
          path="/categories"
          element={<CategoriesPage products={products} categories={categories} />}
        />
        <Route
          path="/search"
          element={<SearchResultsPage products={products} categories={categories} />}
        />
        <Route
          path="/product/:productSlug"
          element={<ProductDetailsPage products={products} />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/info/:pageSlug" element={<InfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
