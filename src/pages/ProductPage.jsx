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
            <h5>OUR PRODUCTS</h5>
            <h2>Explore CV Hasna Products</h2>
            <p>
              Discover our premium coffee business packages, herbal products,
              and partnership opportunities designed to support modern
              entrepreneurship with trusted quality and strong business systems.
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
                  src={item.image}
                  alt={item.name}
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
        <h2>Need More Product Information?</h2>
        <p>
          Explore our full catalog and discover the best business opportunity
          for your next successful investment.
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