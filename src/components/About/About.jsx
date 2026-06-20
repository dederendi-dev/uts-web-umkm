import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'
import './About.css'

function About() {
  const [aboutData, setAboutData] = useState(null)
  const navigate = useNavigate()

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
          <span className="about-subtitle">☕ Tentang Javacafe</span>

          <h2 className="about-title">
            {aboutData.headline || "Bangun Bisnis Kopi Modern Bersama Kami"}
          </h2>

          <p className="about-desc">
            {aboutData.description}
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-number">50+</span>
              <span className="highlight-label">Mitra Aktif</span>
            </div>

            <div className="highlight-card">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Biji Kopi Lokal</span>
            </div>

            <div className="highlight-card">
              <span className="highlight-number">24/7</span>
              <span className="highlight-label">Dukungan Mitra</span>
            </div>
          </div>

          <div className="about-glass-card">
            <h4>Visi</h4>
            <p>{aboutData.vision}</p>
          </div>

          <div className="about-glass-card">
            <h4>Misi</h4>
            <p>{aboutData.mission}</p>
          </div>

          <button
            className="about-btn"
            onClick={() => navigate('/about')}
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  )
}

export default About