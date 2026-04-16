

// About.jsx
// Section About untuk menampilkan profil singkat CV Hasna

import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      
      {/* LEFT - IMAGE / VISUAL */}
      <div className="about-left">
        <div className="about-image"></div>
      </div>

      {/* RIGHT - CONTENT */}
      <div className="about-right">
        <h5 className="about-subtitle">Tentang Kami</h5>

        <h2 className="about-title">
          CV Hasna sebagai Penyedia Produk F&amp;B Berkualitas
        </h2>

        <p className="about-desc">
          CV Hasna merupakan perusahaan yang bergerak di bidang makanan dan minuman
          (F&amp;B) yang berkomitmen untuk menghadirkan produk berkualitas tinggi,
          higienis, dan sesuai dengan kebutuhan pasar modern.
        </p>

        <p className="about-desc">
          Dengan pengalaman dan inovasi yang terus berkembang, kami berupaya
          memberikan solusi terbaik bagi konsumen serta mendukung pertumbuhan
          bisnis kuliner di Indonesia.
        </p>

        {/* BUTTON */}
        <button className="about-btn">Pelajari Lebih Lanjut</button>
      </div>

    </section>
  );
};

export default About;