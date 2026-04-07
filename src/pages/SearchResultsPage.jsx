import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid/ProductGrid'

function SearchResultsPage({ categories, products }) {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get('q') ?? '').trim().toLowerCase()
  const category = searchParams.get('category') ?? 'All'

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category
    const matchesQuery =
      query.length === 0 ||
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)

    return matchesCategory && matchesQuery
  })

  return (
    <ProductGrid
      products={filteredProducts}
      categories={categories}
      activeCategory={category}
      title={query ? `Search results for "${searchParams.get('q')}"` : 'All search results'}
      subtitle={`${filteredProducts.length} product${filteredProducts.length === 1 ? '' : 's'} found for your current search and category selection.`}
    />
  )
}

export default SearchResultsPage
