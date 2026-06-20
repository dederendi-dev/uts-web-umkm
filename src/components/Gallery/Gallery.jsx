import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'
import './Gallery.css'

function Gallery() {
  const [gallery, setGallery] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const navigate = useNavigate()

  useEffect(() => {
    fetchGallery()
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const defaultCount = width <= 576 ? 1 : 3
  const visibleCount = isExpanded ? Math.max(gallery.length, 4) : defaultCount

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('id', { ascending: true })

    if (error) {
      console.error('Error fetch gallery:', error.message)
      return
    }

    setGallery(data)
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-badge">
            📸 Galeri Premium Javacafe
          </div>

          <h5>GALERI OUTLET & USAHA</h5>

          <h2>
            Perjalanan Sukses
            <span> Mitra Javacafe</span>
          </h2>

          <p>
            Dokumentasi outlet modern, aktivitas operasional, dan kisah sukses
            mitra Javacafe yang berkembang bersama sistem bisnis kopi kekinian.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.slice(0, visibleCount).map((item) => (
            <div className="gallery-item" key={item.id}>
              <div className="gallery-glow"></div>
              <div className="gallery-image">
                <img
                  src={item.image_url || 'https://via.placeholder.com/400x300?text=No+Image'}
                  alt={item.title}
                />
              </div>

              <div className="gallery-content">
                <h3>{item.title}</h3>
                <div className="gallery-divider"></div>
                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>
        <div className="gallery-more">
          <button
            className="btn-more"
            onClick={() => {
              navigate('/gallery')
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
          >
            Jelajahi Semua Galeri
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery