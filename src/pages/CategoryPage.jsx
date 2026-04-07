import { useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import { slugify } from '../utils/format'

function CategoryPage({ categories, products }) {
  const { categorySlug } = useParams()
  const activeCategory =
    categories.find((item) => slugify(item) === categorySlug) ?? null

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : []

  if (!activeCategory) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Category not found
          </h1>
          <p className="mt-3 text-slate-600">
            The category you opened does not exist in the current Zaafree catalog.
          </p>
        </div>
      </section>
    )
  }

  return (
    <ProductGrid
      products={filteredProducts}
      categories={categories}
      activeCategory={activeCategory}
      title={`${activeCategory} products`}
      subtitle={`Showing products for ${activeCategory}. Use the category chips to jump to related shopping sections.`}
    />
  )
}

export default CategoryPage
