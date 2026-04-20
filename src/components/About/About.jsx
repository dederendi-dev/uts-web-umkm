import { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './About.css'

function About() {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    fetchAboutData()
  }, [])

  const fetchAboutData = async () => {
    const { data, error } = await supabase
      .from('about')
      .select('*')
      .single()

    if (error) {
      console.error('Error fetch about:', error.message)
      return
    }

    setAboutData(data)
  }

  if (!aboutData) {
    return <section id="about"><p>Loading...</p></section>
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image">
            <img
              src={aboutData.image_url}
              alt={aboutData.company_name}
            />
          </div>
        </div>

        <div className="about-right">
          <span className="about-subtitle">Tentang Kami</span>

          <h2 className="about-title">
            {aboutData.headline || "Bangun Bisnis Kopi Modern Bersama Kami"}
          </h2>

          <p className="about-desc">
            {aboutData.description}
          </p>

          <p className="about-desc">
            <strong>Visi:</strong> {aboutData.vision}
          </p>

          <p className="about-desc">
            <strong>Misi:</strong> {aboutData.mission}
          </p>

          <button className="about-btn">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  )
}

export default About