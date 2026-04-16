import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default Home