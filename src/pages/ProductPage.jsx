import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import "./ProductPage.css";

function ProductPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (!error) {
      setProducts(data || []);
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="product-page-hero">
        <div className="products-container">
          <div className="products-header">
            <h5>PAKET USAHA</h5>
            <h2>Peluang Bisnis Minuman Modern</h2>
            <p>
              Temukan berbagai pilihan minuman unggulan dan paket kemitraan
              Javacafe yang dirancang untuk membantu membangun usaha kopi
              modern dengan sistem yang siap jalan dan dukungan penuh.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE SECTION */}
      <section className="featured-product">
        <div className="products-container">

          {products.map((item, index) => (
            <div
              key={item.id}
              className={`featured-product-wrapper ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >
              <div className="featured-product-image">
                <img
  src={item.image_url}
  alt={item.name}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
  }}
/>
              </div>

              <div className="featured-product-content">
                <h5>{item.category}</h5>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="products-more">
        <h2>Butuh Informasi Produk Lebih Lengkap?</h2>
        <p>
          Temukan pilihan minuman terbaik dan peluang kemitraan yang
          sesuai untuk memulai usaha bersama CV Hasna Berkah Indonesia
          dengan sistem yang siap jalan.
        </p>
        <button
          className="product-btn"
          onClick={() => navigate("/contact")}
        >
          Hubungi Kami
        </button>
      </section>
    </div>
  );
}

export default ProductPage;