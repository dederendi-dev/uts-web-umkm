import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import Gallery from '../components/Gallery/Gallery'

function Home() {
  return (
    <main className="home-shell">
      <div className="home-layer hero-layer">
        <Hero />
      </div>

      <div className="home-layer about-layer">
        <About />
      </div>

      <div className="home-layer products-layer">
        <Products />
      </div>

      <div className="home-layer gallery-layer">
        <Gallery />
      </div>
    </main>
  )
}

export default Home