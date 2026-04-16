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
      <div className="about-image">
        <img src={aboutData.image_url} alt={aboutData.company_name} />
      </div>

      <div className="about-content">
        <h2>{aboutData.headline}</h2>
        <h3>{aboutData.company_name}</h3>
        <p>{aboutData.description}</p>
        <p><strong>Visi:</strong> {aboutData.vision}</p>
        <p><strong>Misi:</strong> {aboutData.mission}</p>
      </div>
    </section>
  )
}

export default About