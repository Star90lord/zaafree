import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useStore } from '../../context/StoreContext'
import { quickLinks } from '../../data/siteContent'
import { slugify } from '../../utils/format'

function ZaafreeLogo() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 shrink-0"
      role="img"
      aria-label="Zaafree logo"
    >
      <defs>
        <linearGradient id="zaafree-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="50%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="18" fill="#0F172A" />
      <path
        d="M18 19h28L27.5 33h18.5v12H18l18.5-14H18V19Z"
        fill="url(#zaafree-logo-gradient)"
      />
      <path
        d="M42 14 21 49"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.78"
      />
    </svg>
  )
}

function Header({ categories }) {
  const navigate = useNavigate()
  const { cartCount, signOut, user } = useStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCategory, setSearchCategory] = useState('All')

  const handleSearch = (event) => {
    event.preventDefault()

    const params = new URLSearchParams()
    if (searchQuery.trim()) {
      params.set('q', searchQuery.trim())
    }
    if (searchCategory !== 'All') {
      params.set('category', searchCategory)
    }

    navigate(`/search?${params.toString()}`)
  }

  return (
    <header className="bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.28),_transparent_28%),linear-gradient(135deg,#08101d_0%,#112240_52%,#1d4ed8_100%)] text-white shadow-2xl shadow-slate-900/20">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6">
        <div className="flex flex-col gap-3 border-b border-white/10 py-3 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Free shipping on orders over Rs. 499</p>
          <div className="flex flex-wrap items-center gap-4">
            {quickLinks.map((link) => (
              <Link key={link.label} to={link.path} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-5 py-5 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:items-center">
          <Link to="/" className="flex items-center gap-3">
            <ZaafreeLogo />
            <div>
              <span className="block text-2xl font-black tracking-tight">Zaafree</span>
              <span className="block text-sm text-slate-300">
                Smart shopping, elevated
              </span>
            </div>
          </Link>

          <form
            onSubmit={handleSearch}
            className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur xl:grid-cols-[220px_minmax(0,1fr)_auto]"
          >
            <select
              value={searchCategory}
              onChange={(event) => setSearchCategory(event.target.value)}
              aria-label="Select category"
              className="min-h-14 border-0 bg-slate-50 px-4 text-sm text-slate-900 outline-none"
            >
              <option>All</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search for products, brands, and trending deals"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="min-h-14 border-0 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-300"
            />
            <button
              type="submit"
              className="min-h-14 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 px-6 text-sm font-bold text-slate-950 hover:brightness-105"
            >
              Search
            </button>
          </form>

          <div className="flex flex-wrap gap-3">
            {!user && (
              <>
                <Link
                  to="/signin"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-left hover:bg-white/10"
                >
                  <span className="block text-xs text-slate-300">Existing user</span>
                  <span className="block text-sm font-semibold text-white">Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="rounded-2xl border border-amber-300/40 bg-amber-300/15 px-4 py-2 text-left hover:bg-amber-300/20"
                >
                  <span className="block text-xs text-amber-100">New customer</span>
                  <span className="block text-sm font-semibold text-white">Sign Up</span>
                </Link>
              </>
            )}
            {user && (
              <>
                <Link
                  to="/profile"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-left hover:bg-white/10"
                >
                  <span className="block text-xs text-slate-300">{user.name}</span>
                  <span className="block text-sm font-semibold text-white">Profile</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    signOut()
                    navigate('/')
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-left hover:bg-white/10"
                >
                  <span className="block text-xs text-slate-300">Account action</span>
                  <span className="block text-sm font-semibold text-white">Logout</span>
                </button>
              </>
            )}
            <Link
              to="/orders"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-left hover:bg-white/10"
            >
              <span className="block text-xs text-slate-300">Returns</span>
              <span className="block text-sm font-semibold text-white">&amp; Orders</span>
            </Link>
            <Link
              to="/cart"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-left hover:bg-white/10"
            >
              <span className="block text-xs text-slate-300">Cart</span>
              <span className="block text-sm font-semibold text-white">
                {cartCount} item{cartCount === 1 ? '' : 's'}
              </span>
            </Link>
          </div>
        </div>

        <nav
          aria-label="Main categories"
          className="flex flex-wrap gap-x-6 gap-y-3 pb-5 text-sm text-slate-200"
        >
          <NavLink to="/categories" className="font-semibold text-white">
            50 Categories
          </NavLink>
          {categories.slice(0, 10).map((item) => (
            <NavLink
              key={item}
              to={`/category/${slugify(item)}`}
              className="hover:text-white"
            >
              {item}
            </NavLink>
          ))}
          <NavLink to="/categories" className="hover:text-white">
            Browse all
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
