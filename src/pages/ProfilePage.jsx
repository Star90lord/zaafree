import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'

function ProfilePage() {
  const navigate = useNavigate()
  const { cartCount, signOut, user } = useStore()

  if (!user) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Login required
          </h1>
          <p className="mt-3 text-slate-600">
            Sign in to open your profile, saved details, and account actions.
          </p>
          <Link
            to="/signin?redirect=/profile"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800"
          >
            Go to login
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
            Account profile
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            Welcome back, {user.name}
          </h1>
          <p className="mt-3 text-slate-600">
            This profile page gives you a clean account area from the homepage
            with separate profile and logout actions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">Full name</p>
              <p className="mt-2 text-xl font-bold text-slate-950">{user.name}</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">Email address</p>
              <p className="mt-2 text-xl font-bold text-slate-950">{user.email}</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">Cart items</p>
              <p className="mt-2 text-xl font-bold text-slate-950">{cartCount}</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">Account status</p>
              <p className="mt-2 text-xl font-bold text-emerald-700">Active</p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tight text-slate-950">
            Quick actions
          </h2>
          <div className="mt-6 grid gap-3">
            <Link
              to="/orders"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Open orders
            </Link>
            <Link
              to="/cart"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Open cart
            </Link>
            <button
              type="button"
              onClick={() => {
                signOut()
                navigate('/')
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white hover:bg-slate-800"
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ProfilePage
