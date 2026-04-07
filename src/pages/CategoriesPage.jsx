import { Link } from 'react-router-dom'
import { slugify } from '../utils/format'

function CategoriesPage({ categories, products }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
          Browse all categories
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
          50 shopping categories
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Every category button now opens a dedicated product page with related
          products instead of redirecting back to the homepage.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const count = products.filter((product) => product.category === category).length

            return (
              <Link
                key={category}
                to={`/category/${slugify(category)}`}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md"
              >
                <p className="text-lg font-bold text-slate-950">{category}</p>
                <p className="mt-2 text-sm text-slate-500">{count} product available</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-blue-700">
                  Open category page
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoriesPage
