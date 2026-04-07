import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import { formatINR, slugify } from '../utils/format'

function HomePage({ products, categories }) {
  const featuredProducts = products.slice(0, 18)
  const newArrivals = products.slice(24, 36)
  const topCategories = categories.slice(10, 16).map((category, index) => ({
    name: category,
    path: `/category/${slugify(category)}`,
    startingPrice: products.find((product) => product.category === category)?.price ?? 999,
    image: products[index + 8]?.image,
  }))

  return (
    <>
      <HeroBanner categories={categories} products={products} />

      <section className="px-4 py-2 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Browse collections
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                Shop by shopping zone
              </h2>
            </div>
            <Link to="/categories" className="text-sm font-semibold text-blue-700">
              View all category zones
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {topCategories.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-base font-bold text-slate-950">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    From {formatINR(item.startingPrice)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductGrid
        products={featuredProducts}
        categories={categories}
        activeCategory="All"
        title="Featured products"
        subtitle="Explore top picks from the Zaafree catalog, now with clickable categories, rupee pricing, and real product detail pages."
      />

      <ProductGrid
        products={newArrivals}
        categories={categories}
        activeCategory="All"
        title="Fresh arrivals for shoppers"
        subtitle="Another marketplace-style shelf with recently added picks across lifestyle, tech, home, and wellness categories."
      />
    </>
  )
}

export default HomePage
