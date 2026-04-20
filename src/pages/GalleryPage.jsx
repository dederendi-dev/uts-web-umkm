import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./GalleryPage.css";

function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setGalleryItems(data);
    }
  };

  return (
    <div>
      {/* HERO GALLERY */}
      <section className="gallery-page-hero">
        <div className="gallery-page-container">
          <div className="gallery-page-header">
            <h5>OUR GALLERY</h5>
            <h2>Gallery CV Hasna</h2>
            <p>
              Dokumentasi outlet, aktivitas operasional, serta perjalanan bisnis
              kami dalam membangun peluang usaha modern yang bertumbuh bersama.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GALLERY SECTION */}
      <section className="gallery-featured">
        <div className="gallery-page-container">
          <div className="gallery-featured-wrapper">
            <div className="gallery-featured-left">
              <h5>FEATURED MOMENT</h5>
              <h2>Perjalanan Bisnis & Aktivitas Outlet</h2>
              <p>
                Kami percaya bahwa pertumbuhan bisnis terbaik lahir dari proses,
                konsistensi, dan kemitraan yang berjalan nyata setiap hari.
              </p>
            </div>

            <div className="gallery-featured-right">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Gallery Featured"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-grid-section">
        <div className="gallery-page-container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-card" key={item.id}>
                <img
                  src={item.image_url}
                  alt={item.title || "Gallery"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;