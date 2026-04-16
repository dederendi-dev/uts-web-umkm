// Products.jsx
// Section Products untuk menampilkan daftar produk CV Hasna

import "./Products.css";

// Dummy data produk (nanti bisa diganti dari database / assets lokal)
const products = [
  {
    id: 1,
    name: "Minuman Segar",
    desc: "Minuman berkualitas dengan bahan pilihan",
    image: "https://source.unsplash.com/400x300/?drink",
  },
  {
    id: 2,
    name: "Makanan Ringan",
    desc: "Snack lezat dan cocok untuk semua kalangan",
    image: "https://source.unsplash.com/400x300/?snack",
  },
  {
    id: 3,
    name: "Dessert Premium",
    desc: "Hidangan penutup dengan cita rasa istimewa",
    image: "https://source.unsplash.com/400x300/?dessert",
  },
];

const Products = () => {
  return (
    <section className="products" id="products">

      {/* HEADER */}
      <div className="products-header">
        <h5>Produk Kami</h5>
        <h2>Pilihan Produk Terbaik dari CV Hasna</h2>
        <p>
          Kami menyediakan berbagai produk makanan dan minuman dengan kualitas terbaik
          untuk memenuhi kebutuhan konsumen.
        </p>
      </div>

      {/* GRID */}
      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>

            {/* IMAGE */}
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>

            {/* CONTENT */}
            <div className="product-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <button className="product-btn">Lihat Detail</button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Products;
