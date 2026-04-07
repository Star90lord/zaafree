import { Link } from 'react-router-dom'
import { formatINR, slugify } from '../../utils/format'

const topDeals = [
  {
    title: 'Mega Electronics Sale',
    subtitle: 'Upgrade phones, laptops, audio, and monitors',
    action: 'Explore electronics',
    category: 'Mobiles',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Home Refresh Picks',
    subtitle: 'Decor, furniture, lighting, and appliances',
    action: 'Shop home essentials',
    category: 'Home Decor',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Fashion & Lifestyle',
    subtitle: 'Trending outfits, watches, and bags',
    action: 'Browse fashion',
    category: "Women's Fashion",
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
  },
]

const serviceItems = [
  { label: 'Super saver zone', value: 'Under Rs. 999' },
  { label: 'Fast delivery', value: '24-hour dispatch' },
  { label: 'Verified ratings', value: '4.2+ average score' },
  { label: 'Easy payments', value: 'UPI, card, wallet' },
]

const getCategoryLabel = (category) =>
  category
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

function HeroBanner({ categories, products }) {
  const shortcutCategories = categories.slice(0, 10)
  const spotlightProducts = products.slice(0, 4)

  return (
    <section className="px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10">
            {shortcutCategories.map((category) => (
              <Link
                key={category}
                to={`/category/${slugify(category)}`}
                className="flex flex-col items-center rounded-[1.5rem] px-3 py-4 text-center transition hover:bg-slate-50"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-black text-white shadow-md shadow-blue-200/70">
                  {getCategoryLabel(category)}
                </span>
                <span className="mt-3 text-sm font-semibold leading-5 text-slate-700">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_360px]">
          <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.28),_transparent_28%),linear-gradient(150deg,_#0f172a_0%,_#13284a_55%,_#1d4ed8_100%)] p-8 text-white shadow-xl shadow-slate-300/30 sm:p-10">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
              Shopping homepage
            </span>
            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-none tracking-tight sm:text-5xl">
              Big deals, fast browsing, and app-style discovery for Zaafree.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
              Find daily offers, popular categories, and trusted product shelves
              designed to feel like a real shopping application instead of a
              promotional landing page.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/info/daily-deals"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-6 text-sm font-bold text-slate-950 hover:brightness-105"
              >
                View today&apos;s deals
              </Link>
              <Link
                to="/categories"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                Open all categories
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black">200+</p>
                <p className="mt-1 text-sm text-slate-200">catalog products live</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black">50</p>
                <p className="mt-1 text-sm text-slate-200">shopping categories</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black">4.8/5</p>
                <p className="mt-1 text-sm text-slate-200">store satisfaction score</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {topDeals.slice(1).map((tile) => (
              <Link
                key={tile.title}
                to={`/category/${slugify(tile.category)}`}
                className="group relative overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-lg shadow-slate-300/20"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="text-lg font-bold text-white">{tile.title}</p>
                  <p className="mt-1 max-w-xs text-sm text-slate-200">{tile.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <Link
            to={`/category/${slugify(topDeals[0].category)}`}
            className="group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="p-8">
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-amber-700">
                Featured mega offer
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {topDeals[0].title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                {topDeals[0].subtitle}. Grab shopper-favorite models and value
                upgrades from the most active catalog sections.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700">
                  Up to 60% off
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  No-cost EMI available
                </span>
              </div>
              <span className="mt-8 inline-flex text-sm font-bold text-blue-700">
                {topDeals[0].action}
              </span>
            </div>
            <div className="relative">
              <img
                src={topDeals[0].image}
                alt={topDeals[0].title}
                className="h-full min-h-[280px] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  Quick buys
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  Popular now
                </h2>
              </div>
              <Link to="/search" className="text-sm font-semibold text-blue-700">
                View all
              </Link>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {spotlightProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-28 w-full rounded-2xl object-cover"
                  />
                  <p className="mt-3 line-clamp-2 text-sm font-bold leading-6 text-slate-900">
                    {product.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {formatINR(product.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-500">{item.label}</p>
              <p className="mt-1 text-lg font-bold text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
