import React from "react";
import "./GalleryPage.css";

function GalleryPage() {
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
            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="Gallery 1"
              />
            </div>

            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
                alt="Gallery 2"
              />
            </div>

            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247"
                alt="Gallery 3"
              />
            </div>

            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
                alt="Gallery 4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;