import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./AboutPage.css";

function AboutPage() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    const { data, error } = await supabase
      .from("about")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetch about:", error.message);
      return;
    }

    setAboutData(data);
  };

  if (!aboutData) {
    return (
      <section className="about-page-hero">
        <div className="about-page-container">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* HERO ABOUT */}
      <section className="about-page-hero">
        <div className="about-page-container">
          <div className="about-page-header">
            <h5>ABOUT US</h5>
            <h2>Tentang CV Hasna</h2>
            <p>
              {aboutData.description}
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-story">
        <div className="about-page-container">
          <div className="about-story-wrapper">
            <div className="about-story-image">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="About CV Hasna"
              />
            </div>

            <div className="about-story-content">
              <h5>OUR JOURNEY</h5>
              <h2>Membangun Bisnis yang Bertumbuh Bersama</h2>
              <p>
                CV Hasna hadir untuk membantu para mitra membangun bisnis yang
                berkelanjutan melalui sistem usaha yang terstruktur, produk
                premium, dan dukungan penuh dari tim profesional.
              </p>

              <p>
                Kami percaya bahwa bisnis yang baik bukan hanya soal produk,
                tetapi juga sistem, kepercayaan, dan pertumbuhan bersama dalam
                jangka panjang.
              </p>

              <p>
                <strong>Visi:</strong> {aboutData.vision}
              </p>

              <p>
                <strong>Misi:</strong> {aboutData.mission}
              </p>

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
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-values">
        <div className="about-page-container">
          <div className="about-page-header">
            <h5>WHY CHOOSE US</h5>
            <h2>Kenapa Memilih CV Hasna?</h2>
            <p>
              Kami menghadirkan sistem bisnis yang siap jalan, dukungan penuh,
              dan peluang usaha nyata untuk pertumbuhan jangka panjang.
            </p>
          </div>

          <div className="about-value-grid">
            <div className="about-value-card">
              <h3>Support Penuh</h3>
              <p>
                Training, branding, operasional, dan pendampingan bisnis dari awal.
              </p>
            </div>

            <div className="about-value-card">
              <h3>Kualitas Produk</h3>
              <p>
                Produk premium dengan standar kualitas terpercaya dan konsisten.
              </p>
            </div>

            <div className="about-value-card">
              <h3>Sistem Siap Jalan</h3>
              <p>
                Paket usaha lengkap tanpa ribet memulai semuanya dari nol.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;