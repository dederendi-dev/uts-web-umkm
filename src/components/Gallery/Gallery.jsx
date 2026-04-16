import { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './Gallery.css'

function Gallery() {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    fetchGallery()
  }, [])

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
      <h2>Gallery</h2>

      <div className="gallery-container">
        {gallery.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery