import React from "react";
import "./ProductPage.css";

function ProductPage() {
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

          {/* ITEM 1 */}
          <div className="featured-product-wrapper">
            <div className="featured-product-image">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Caffe Latte"
              />
            </div>

            <div className="featured-product-content">
              <h5>MINUMAN</h5>
              <h2>Caffe Latte - Signature Premium Coffee</h2>
              <p>
                Kopi susu premium dengan cita rasa khas, dibuat dari biji kopi
                pilihan dan susu berkualitas tinggi untuk pengalaman rasa yang
                konsisten dan profesional.
              </p>

              <button className="product-btn">Learn More</button>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="featured-product-wrapper reverse">
            <div className="featured-product-image">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
                alt="Roti Coklat"
              />
            </div>

            <div className="featured-product-content">
              <h5>MAKANAN</h5>
              <h2>Roti Coklat - Fresh Bakery Selection</h2>
              <p>
                Roti lembut premium dengan isian coklat berkualitas, cocok
                sebagai pairing terbaik untuk bisnis coffee shop modern dan
                kebutuhan pelanggan harian.
              </p>

              <button className="product-btn">Learn More</button>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="featured-product-wrapper">
            <div className="featured-product-image">
              <img
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
                alt="Teh Lemon Fresh"
              />
            </div>

            <div className="featured-product-content">
              <h5>MINUMAN</h5>
              <h2>Teh Lemon Fresh - Refresh Your Business</h2>
              <p>
                Minuman teh lemon segar dengan rasa ringan dan menyegarkan,
                cocok untuk melengkapi variasi menu usaha dan meningkatkan daya
                tarik customer.
              </p>

              <button className="product-btn">Learn More</button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="products-more">
        <h2>Need More Product Information?</h2>
        <p>
          Explore our full catalog and discover the best business opportunity
          for your next successful investment.
        </p>
        <button className="product-btn">Hubungi Kami</button>
      </section>
    </div>
  );
}

export default ProductPage;