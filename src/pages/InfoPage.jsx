import { Link, useParams } from 'react-router-dom'
import { infoPages } from '../data/siteContent'

function InfoPage() {
  const { pageSlug } = useParams()
  const page = infoPages[pageSlug]

  if (!page) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Page not found
          </h1>
          <p className="mt-3 text-slate-600">
            The page you opened is not available right now.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
          Zaafree information
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
          {page.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
          {page.subtitle}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {page.bullets.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800"
          >
            Go to homepage
          </Link>
          <Link
            to="/categories"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Browse categories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InfoPage
