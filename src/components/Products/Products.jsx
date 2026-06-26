import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'
import Loading from '../Loading/Loading'
import ErrorState from '../ErrorState/ErrorState'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts()
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  // Desktop tampilkan 3 card agar slider bisa benar-benar bergeser
  // Tablet 2 card, mobile 1 card
  const cardsPerView = width <= 576 ? 1 : width <= 992 ? 2 : 3
  const maxIndex = Math.max(products.length - cardsPerView, 0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const fetchProducts = async () => {
    setLoading(true)
    setError(false)

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true })

    if (error) {
      console.error('Error fetch products:', error.message)
      setError(true)
      setLoading(false)
      return
    }

    setProducts(data)
    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorState onRetry={fetchProducts} />
  }

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="products-header">
          <div className="products-badge">
            ☕ Kemitraan Premium Javacafe
          </div>

          <h5>PAKET KEMITRAAN</h5>

          <h2>
            Bangun Bisnis
            <span> Kopi Modern</span>
          </h2>

          <p>
            Mulai usaha kopi kekinian dengan sistem kemitraan terpercaya,
            dukungan operasional lengkap, dan brand yang terus berkembang
            bersama Javacafe.
          </p>

          <div className="products-stats">
            <div className="products-stat">
              <strong>50+</strong>
              <span>Mitra Aktif</span>
            </div>

            <div className="products-stat">
              <strong>100%</strong>
              <span>Support Operasional</span>
            </div>

            <div className="products-stat">
              <strong>24/7</strong>
              <span>Konsultasi Bisnis</span>
            </div>
          </div>
        </div>

        <div className="products-slider-wrapper">
          <div className="slider-floating-nav">
            <button className="slider-btn prev" onClick={prevSlide}>
              ←
            </button>

            <button className="slider-btn next" onClick={nextSlide}>
              →
            </button>
          </div>

          <div className="products-slider">
            <div
              className="products-grid"
              ref={sliderRef}
              style={{
                transform: `translateX(-${currentIndex * 344}px)`,
                transition: 'transform 0.6s ease'
              }}
            >
              {products.map((item) => (
                <div className="product-card" key={item.id}>
                  <div className="product-glow"></div>
                  <div className="product-image">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="product-content">
                    <span className="product-badge">{item.category}</span>

                    <h3>{item.name}</h3>
                    <div className="product-divider"></div>

                    <p>{item.description}</p>
                    <button
                      type="button"
                      className="product-btn"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        navigate('/products')
                      }}
                    >
                      Jelajahi Paket →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Products