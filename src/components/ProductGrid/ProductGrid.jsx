import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import { slugify } from '../../utils/format'

function ProductGrid({
  products,
  categories,
  activeCategory = 'All',
  title,
  subtitle,
}) {
  const categoryFilters = ['All', ...categories.slice(0, 11)]
  if (activeCategory !== 'All' && !categoryFilters.includes(activeCategory)) {
    categoryFilters.push(activeCategory)
  }

  return (
    <section className="px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
              Recommended for you
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              {subtitle}
            </p>
          </div>

          <Link
            to="/categories"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            Browse 50 categories
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categoryFilters.map((filter) => (
            <Link
              key={filter}
              to={filter === 'All' ? '/' : `/category/${slugify(filter)}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                filter === activeCategory
                  ? 'bg-slate-950 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {filter}
            </Link>
          ))}
          <Link
            to="/categories"
            className="rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white"
          >
            More categories
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">
              No products matched this selection.
            </p>
            <p className="mt-2 text-slate-600">
              Try another category or search term.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid
