import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Page not found</h1>
        <p className="mt-3 text-slate-600">
          The page you tried to open does not exist in this Zaafree demo store.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
