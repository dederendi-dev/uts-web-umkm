import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import Loading from "../components/Loading/Loading";
import ErrorState from "../components/ErrorState/ErrorState";
import "./ProductPage.css";

function ProductPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(false);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetch products:", error.message);
      setError(true);
      setLoading(false);
      return;
    }

    setProducts(data || []);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState onRetry={fetchProducts} />;
  }

  return (
    <div>
      {/* HERO SECTION */}
      <section className="product-page-hero">
        <div className="products-container">
          <div className="product-hero-layout">
            <div className="products-header">
              <h5>PAKET USAHA</h5>
              <h2>Peluang Bisnis Minuman Modern</h2>
              <p>
                Temukan berbagai pilihan minuman unggulan dan paket kemitraan Javacafe
                yang dirancang untuk membantu membangun usaha kopi modern dengan sistem
                yang siap jalan dan dukungan penuh.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="featured-hero-product">
        <div className="products-container">
          {products.length > 0 && (
            <div className="featured-hero-layout">
              <div className="featured-hero-image">
                <img
                  src={products[0].image_url}
                  alt={products[0].name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
                  }}
                />
              </div>

              <div className="featured-hero-content">
                <span className="hero-badge">SIGNATURE PRODUCT</span>
                <h2>{products[0].name}</h2>
                <p>{products[0].description}</p>
                <button
                  className="product-btn"
                  onClick={() => navigate('/contact')}
                >
                  Konsultasi Sekarang
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCT SHOWCASE SECTION */}
      <section className="featured-product">
        <div className="products-container">
          <div className="section-heading">
            <span>OUR PRODUCTS</span>
            <h2>Produk Unggulan Javacafe</h2>
            <p>Pilihan produk premium dengan konsep modern untuk mendukung bisnis minuman Anda.</p>
          </div>
          <div className="product-grid">
            {products.map((item) => (
              <div key={item.id} className="product-grid-card">
                <div className="product-grid-image">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
                    }}
                  />
                </div>
                <div className="product-grid-content">
                  <h3>{item.name}</h3>
                  <span className="product-chip">Premium</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="products-more">
        <div className="products-more-glass">
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
        </div>
      </section>
    </div>
  );
}

export default ProductPage;