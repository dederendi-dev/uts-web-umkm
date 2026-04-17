import { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    fetchProducts()
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const defaultCount = width <= 576 ? 1 : 3
  const visibleCount = isExpanded ? Math.max(products.length, 4) : defaultCount

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true })

    if (error) {
      console.error('Error fetch products:', error.message)
      return
    }

    setProducts(data)
  }

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2>Produk Kami</h2>

        <div className="products-grid">
          {products.slice(0, visibleCount).map((item) => (
            <div className="product-card" key={item.id}>
              
              <div className="product-image">
                <img src={item.image_url} alt={item.name} />
              </div>

              <div className="product-content">
                <h3>{item.name}</h3>
                <p><strong>Kategori:</strong> {item.category}</p>
                <p>{item.description}</p>
                <p><strong>Harga:</strong> Rp {Number(item.price).toLocaleString('id-ID')}</p>
                <p><strong>Stok:</strong> {item.stock}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="products-more">
          {!isExpanded ? (
            <button
              className="btn-more"
              onClick={() => setIsExpanded(true)}
            >
              Lihat Selengkapnya
            </button>
          ) : (
            <button
              className="btn-more"
              onClick={() => setIsExpanded(false)}
            >
              Tutup
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Products