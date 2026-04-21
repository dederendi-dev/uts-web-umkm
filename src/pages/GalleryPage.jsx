import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./GalleryPage.css";

function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetchGallery();
    fetchHomeImage();
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

  const fetchHomeImage = async () => {
    const { data, error } = await supabase
      .from("home")
      .select("*")
      .limit(1)
      .single();

    if (!error && data) {
      setHomeData(data);
    }
  };

  return (
    <div>
      {/* HERO GALLERY */}
      <section className="gallery-page-hero">
        <div className="gallery-page-container">
          <div className="gallery-page-header">
            <h5>OUTLET & BUKTI BISNIS</h5>
            <h2>Gallery Outlet & Aktivitas Usaha</h2>
            <p>
              Dokumentasi outlet, aktivitas operasional, dan bukti nyata
              perkembangan bisnis bersama CV Hasna dalam membangun usaha
              kopi modern yang terus bertumbuh.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GALLERY SECTION */}
      <section className="gallery-featured">
        <div className="gallery-page-container">
          <div className="gallery-featured-wrapper">
            <div className="gallery-featured-left">
              <h5>PERJALANAN BISNIS</h5>
              <h2>Aktivitas Outlet & Perkembangan Mitra</h2>
              <p>
                Setiap outlet yang berjalan adalah bukti nyata dari proses,
                konsistensi, dan dukungan kemitraan yang terus berkembang
                bersama Javacafe Indonesia.
              </p>
            </div>

            <div className="gallery-featured-right">
              <img
                src={homeData?.hero_image || ""}
                alt={homeData?.title || "Home Featured"}
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