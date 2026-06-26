import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./AboutPage.css";
import Loading from "../components/Loading/Loading";
import ErrorState from "../components/ErrorState/ErrorState";

function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      <section className="about-page-hero">
        <div className="about-page-container">
          <div className="about-page-header">
            <h5>ABOUT US</h5>
            <h2>Tentang Kemitraan Javacafe</h2>
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
                src={aboutData.image_url}
                alt="About Javacafe"
              />
            </div>

            <div className="about-story-content">
              <h5>OUR JOURNEY</h5>
              <h2>Membangun Bisnis Kopi yang Tumbuh Bersama</h2>
              <p>
                Javacafe hadir sebagai peluang usaha kopi kekinian dengan sistem
                kemitraan yang terstruktur, produk berkualitas, dan dukungan
                operasional penuh untuk membantu mitra berkembang lebih cepat.
              </p>

              <p>
                Kami percaya bisnis yang kuat bukan hanya soal jualan, tetapi juga
                tentang sistem yang berjalan, brand yang dipercaya, dan pertumbuhan
                bersama dalam jangka panjang.
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
            <h2>Kenapa Memilih Javacafe?</h2>
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