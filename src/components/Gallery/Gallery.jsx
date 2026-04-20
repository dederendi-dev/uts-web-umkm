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
          <h5>GALERI OUTLET & USAHA</h5>
          <h2>Galeri Kemitraan Javacafe</h2>
          <p>
            Dokumentasi outlet mitra, aktivitas operasional, dan kesuksesan bisnis
            Javacafe, bukti nyata dalam membangun usaha kopi kekinian
            yang menjanjikan.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.slice(0, visibleCount).map((item) => (
            <div className="gallery-item" key={item.id}>
              
              <div className="gallery-image">
                <img
                  src={item.image_url || 'https://via.placeholder.com/400x300?text=No+Image'}
                  alt={item.title}
                />
              </div>

              <div className="gallery-content">
                <h3>{item.title}</h3>
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
            Lihat Gallery Lainnya
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery