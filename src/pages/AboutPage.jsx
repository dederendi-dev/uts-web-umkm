import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./AboutPage.css";
import Loading from "../components/Loading/Loading";
import ErrorState from "../components/ErrorState/ErrorState";
import useReveal from "../hooks/useReveal";

function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const heroReveal = useReveal({ immediate: true });
  const highlightsReveal = useReveal();
  const storyReveal = useReveal();
  const valuesReveal = useReveal();

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    setLoading(true);
    setError(false);

    const { data, error } = await supabase
      .from("about")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetch about:", error.message);
      setError(true);
      setLoading(false);
      return;
    }

    setAboutData(data);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState onRetry={fetchAboutData} />;
  }

  return (
    <div>
      {/* HERO ABOUT */}
      <section ref={heroReveal} className="about-page-hero reveal">
        <div className="about-page-container">
          <div className="about-page-hero-layout">
            <div className="about-page-hero-visual">
              <div className="hero-glass-stack">
                <div className="hero-glass-card"></div>
                <div className="hero-glass-orb"></div>
                <div className="hero-glass-ring"></div>
              </div>
            </div>
            <div className="about-page-header">
              <h5>ABOUT US</h5>
              <h2>Tentang Kemitraan Javacafe</h2>
              <p>
                {aboutData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={highlightsReveal} className="about-highlights reveal">
        <div className="about-page-container">
          <div className="about-highlight-grid">
            <div className="about-highlight-card">
              <span>18+</span>
              <p>Outlet Berkembang</p>
            </div>
            <div className="about-highlight-card">
              <span>250+</span>
              <p>Mitra Bergabung</p>
            </div>
            <div className="about-highlight-card">
              <span>5+</span>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="about-highlight-card">
              <span>98%</span>
              <p>Kepuasan Mitra</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section ref={storyReveal} className="about-story reveal">
        <div className="about-page-container">
          <div className="about-story-wrapper">
            <div className="about-story-image-wrap">
              <div className="about-story-image">
                <img
                  src={aboutData.image_url}
                  alt="About Javacafe"
                />
                <div className="about-story-image-glow"></div>
              </div>
            </div>
            <div className="about-story-content-wrap">
              <div className="about-story-content">
                <h5>OUR JOURNEY</h5>
                <h2>Membangun Bisnis Kopi yang Tumbuh Bersama</h2>
                <p>
                  Javacafe hadir sebagai peluang usaha kopi kekinian dengan sistem kemitraan yang terstruktur, produk berkualitas, dan dukungan operasional penuh untuk membantu mitra berkembang lebih cepat.
                </p>

                <div className="about-story-glass-info">
                  <div className="about-story-info-card">
                    <h4>Visi</h4>
                    <p>{aboutData.vision}</p>
                  </div>

                  <div className="about-story-info-card">
                    <h4>Misi</h4>
                    <p>{aboutData.mission}</p>
                  </div>
                </div>

                <button
                  className="about-page-btn"
                  onClick={() =>
                    window.open("https://javacafe.id/kemitraan", "_blank")
                  }
                >
                  Konsultasi Kemitraan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={valuesReveal} className="about-values reveal">
        <div className="about-page-container">
          <div className="about-values-shell">
            <div className="about-page-header">
              <h5>WHY CHOOSE US</h5>
              <h2>Kenapa Memilih Javacafe?</h2>
              <p>
                Kami menghadirkan sistem bisnis yang siap jalan, dukungan penuh,
                dan peluang usaha nyata untuk pertumbuhan jangka panjang.
              </p>
            </div>
            <div className="about-values-background"></div>
            <div className="about-value-grid">
              <div className="about-value-card">
                <div className="about-card-glow"></div>
                <h3>Support Penuh</h3>
                <p>
                  Training, branding, operasional, dan pendampingan bisnis dari awal.
                </p>
              </div>

              <div className="about-value-card">
                <div className="about-card-glow"></div>
                <h3>Kualitas Produk</h3>
                <p>
                  Produk premium dengan standar kualitas terpercaya dan konsisten.
                </p>
              </div>

              <div className="about-value-card">
                <div className="about-card-glow"></div>
                <h3>Sistem Siap Jalan</h3>
                <p>
                  Paket usaha lengkap tanpa ribet memulai semuanya dari nol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;