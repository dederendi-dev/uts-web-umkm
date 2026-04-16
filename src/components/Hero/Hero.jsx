// components/Hero/Hero.jsx

import "./Hero.css";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-left">
        <h1>
          Solusi F&B <span>Modern</span> untuk Bisnis Anda
        </h1>

        <p>
          CV Hasna menghadirkan produk makanan dan minuman berkualitas
          dengan standar terbaik untuk memenuhi kebutuhan konsumen masa kini.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Lihat Produk</button>
          <button className="btn-secondary">Hubungi Kami</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Hero" />
      </div>

    </section>
  );
};

export default Hero;