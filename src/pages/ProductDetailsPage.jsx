import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatINR, slugify } from '../utils/format'

function ProductDetailsPage({ products }) {
  const { productSlug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useStore()

  const product = products.find((item) => item.slug === productSlug)

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Product not found
          </h1>
          <p className="mt-3 text-slate-600">
            This product page is not available in the current catalog.
          </p>
        </div>
      </section>
    )
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            {product.category}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            {product.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-black tracking-tight text-slate-950">
              {formatINR(product.price)}
            </span>
            <span className="pb-1 text-lg text-slate-400 line-through">
              {formatINR(product.originalPrice)}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-900">
              {product.badge}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
              Rating {product.rating}/5
            </span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-800">
              {product.delivery}
            </span>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <p>Seller: {product.seller}</p>
            <p className="mt-1">SKU: {product.sku}</p>
            <p className="mt-1">Available stock: {product.stock}</p>
            <p className="mt-1">{product.reviews} verified reviews</p>
          </div>

          <div className="mt-6 space-y-3">
            {product.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-300 px-5 text-sm font-bold text-slate-950 hover:bg-amber-400"
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={() => {
                addToCart(product)
                navigate('/cart')
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white hover:bg-slate-800"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Related products
            </h2>
            <p className="mt-2 text-slate-600">
              More picks from the {product.category} category.
            </p>
          </div>
          <Link
            to={`/category/${slugify(product.category)}`}
            className="text-sm font-semibold text-blue-700"
          >
            Open full category
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.slug}`}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full rounded-2xl object-cover"
              />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                {item.category}
              </p>
              <h3 className="mt-2 text-base font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-700">
                {formatINR(item.price)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsPage
