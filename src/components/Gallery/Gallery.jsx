import { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './Gallery.css'

function Gallery() {
  const [gallery, setGallery] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

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
        <h2>Gallery</h2>

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

export default Gallery