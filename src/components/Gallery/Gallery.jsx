

// Gallery.jsx
// Section Gallery untuk menampilkan foto produk / aktivitas CV Hasna

import "./Gallery.css";

// Dummy data gambar (nanti bisa diganti real image dari assets)
const images = [
  "https://source.unsplash.com/400x300/?food",
  "https://source.unsplash.com/400x300/?drink",
  "https://source.unsplash.com/400x300/?restaurant",
  "https://source.unsplash.com/400x300/?coffee",
  "https://source.unsplash.com/400x300/?bakery",
  "https://source.unsplash.com/400x300/?dessert",
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">

      {/* HEADER */}
      <div className="gallery-header">
        <h5>Gallery</h5>
        <h2>Dokumentasi Produk & Aktivitas</h2>
        <p>
          Berikut adalah beberapa dokumentasi produk dan aktivitas dari CV Hasna
          dalam menghadirkan kualitas terbaik.
        </p>
      </div>

      {/* GRID IMAGE */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;