import { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './Hero.css'

function Hero() {
  const [homeData, setHomeData] = useState(null)

  useEffect(() => {
    fetchHomeData()
  }, [])

  const fetchHomeData = async () => {
    const { data, error } = await supabase
      .from('home')
      .select('*')
      .single()

    if (error) {
      console.error('Error fetch home:', error.message)
      return
    }

    setHomeData(data)
  }

  if (!homeData) {
    return <section id="home"><p>Loading...</p></section>
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          {homeData.title}{' '}
          <span>{homeData.highlight_text}</span>
        </h1>
        <p>{homeData.description}</p>

        <div className="hero-buttons">
          <a href={homeData.button_primary_link}>
            <button className="btn-primary">
              {homeData.button_primary_text}
            </button>
          </a>

          <a href={homeData.button_secondary_link}>
            <button className="btn-secondary">
              {homeData.button_secondary_text}
            </button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={homeData.hero_image} alt="Hero" />
      </div>
    </section>
  )
}

export default Hero