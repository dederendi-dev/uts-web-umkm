import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import "./Hero.css";
import Loading from "../Loading/Loading";
import ErrorState from "../ErrorState/ErrorState";

function Hero() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    setLoading(true);
    setError(false);

    const { data, error } = await supabase
      .from("home")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetch home:", error.message);
      setError(true);
      setLoading(false);
      return;
    }

    setHomeData(data);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState onRetry={fetchHomeData} />;
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span>PREMIUM COFFEE ECOSYSTEM</span>
          </div>

          <h1 className="hero-title">
            Mitra Bisnis.
            <br />
            Dirancang Lebih Baik.
          </h1>

          <p className="hero-description">
            Sistem kemitraan kopi modern dengan branding premium,
            operasional terstandarisasi, dan dukungan penuh untuk
            membantu mitra bertumbuh secara berkelanjutan.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn-primary">
              Lihat Paket
            </a>

            <a href="#contact" className="btn-secondary">
              Konsultasi
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-orb orb-1"></div>
          <div className="glass-orb orb-2"></div>

          <div className="hero-glass-frame">
            <img
              src={homeData.hero_image}
              alt="Javacafe Premium Partnership"
              loading="lazy"
              decoding="async"
            />

            <div className="floating-card floating-card-top">
              <span>50+ Active Partners</span>
            </div>

            <div className="floating-card floating-card-bottom">
              <span>24/7 Operational Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;