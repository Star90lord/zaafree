import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext'

function SignInPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { signIn } = useStore()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const redirectTo = searchParams.get('redirect') || '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    signIn({
      name: form.name || 'Zaafree Shopper',
      email: form.email,
    })
    navigate(redirectTo)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
          Account access
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
          Sign in to Zaafree
        </h1>
        <p className="mt-3 text-slate-600">
          Access your cart, orders, saved details, and faster checkout.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              Full name
            </span>
            <input
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className="min-h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none ring-0 focus:border-slate-400"
              placeholder="Enter your name"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className="min-h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none ring-0 focus:border-slate-400"
              placeholder="name@example.com"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </span>
            <input
              type="password"
              required
              value={form.password}
              onChange={(event) =>
                setForm((current) => ({ ...current, password: event.target.value }))
              }
              className="min-h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none ring-0 focus:border-slate-400"
              placeholder="Enter password"
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          New to Zaafree?{' '}
          <Link to="/signup" className="font-semibold text-blue-700">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SignInPage
