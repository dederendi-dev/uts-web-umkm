import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import "./Hero.css";

function Hero() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    const { data, error } = await supabase
      .from("home")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetch home:", error.message);
      return;
    }

    setHomeData(data);
  };

  if (!homeData) {
    return (
      <section id="home" className="hero">
        <div className="hero-container">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-tag">☕ Bisnis Kopi Masa Kini</p>

          <h1>
            {homeData.title} <span>{homeData.highlight_text}</span>
          </h1>

          <p>{homeData.description}</p>

          <div className="hero-buttons">
            <a href={homeData.button_primary_link || "#products"}>
              <button className="btn-primary">
                {homeData.button_primary_text || "Lihat Paket Usaha"}
              </button>
            </a>

            <a href={homeData.button_secondary_link || "#about"}>
              <button className="btn-secondary">
                {homeData.button_secondary_text || "Pelajari Lebih Lanjut"}
              </button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={homeData.hero_image} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;