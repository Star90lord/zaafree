import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../../context/StoreContext'
import { formatINR } from '../../utils/format'

function RatingStars() {
  return (
    <span className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
      {[...Array(5)].map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5 12.8 7l6 .9-4.4 4.3 1 6.1L10 15.3 4.6 18.3l1-6.1L1.2 7.9l6-.9L10 1.5Z" />
        </svg>
      ))}
    </span>
  )
}

function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useStore()

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/40">
      <div className="relative">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-slate-950">
          {product.badge}
        </span>
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full bg-slate-100 object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </Link>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            {product.category}
          </p>
          <Link to={`/product/${product.slug}`}>
            <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-slate-900">
              {product.title}
            </h3>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-slate-900">{product.rating}/5</span>
          <RatingStars />
          <Link
            to={`/product/${product.slug}`}
            className="text-blue-700 hover:text-blue-800"
          >
            {product.reviews} reviews
          </Link>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-3xl font-black tracking-tight text-slate-950">
            {formatINR(product.price)}
          </span>
          <span className="pb-1 text-sm text-slate-400 line-through">
            {formatINR(product.originalPrice)}
          </span>
        </div>

        <p className="text-sm font-medium text-emerald-700">{product.delivery}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-amber-300 px-4 text-sm font-bold text-slate-950 hover:bg-amber-400"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={() => {
              addToCart(product)
              navigate('/cart')
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Buy now
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
