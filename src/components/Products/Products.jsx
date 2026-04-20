import { useEffect, useRef, useState } from 'react'
import { supabase } from '../../supabase'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    fetchProducts()
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  const cardsPerView = width <= 576 ? 1 : width <= 992 ? 2 : 3
  const maxIndex = Math.max(products.length - cardsPerView, 0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

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
        <div className="products-header">
          <h5>PAKET USAHA</h5>
          <h2>Peluang Bisnis & Kemitraan</h2>
          <p>
            Pilihan paket usaha terbaik untuk memulai bisnis kopi modern
            bersama CV Hasna dengan sistem yang siap jalan.
          </p>
        </div>

        <div className="products-slider-wrapper">
          <button className="slider-btn prev" onClick={prevSlide}>
            ←
          </button>

          <div className="products-slider">
            <div
              className="products-grid"
              ref={sliderRef}
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                transition: 'transform 0.6s ease'
              }}
            >
              {products.map((item) => (
                <div className="product-card" key={item.id}>
                  <div className="product-image">
                    <img src={item.image_url} alt={item.name} />
                  </div>

                  <div className="product-content">
                    <h3>{item.name}</h3>
                    <p><strong>Paket:</strong> {item.category}</p>
                    <p>{item.description}</p>
                    <p><strong>Investasi:</strong> Rp {Number(item.price).toLocaleString('id-ID')}</p>
                    <p><strong>Ketersediaan:</strong> {item.stock}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            →
          </button>
        </div>

      </div>
    </section>
  )
}

export default Products