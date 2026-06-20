// Footer.jsx
// Section Footer untuk bagian bawah website (informasi + navigasi cepat)

import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-badge">
            ☕ Premium Coffee Partnership
          </div>
          <h2><span>Java</span>Cafe</h2>
          <p>
            Membangun ekosistem bisnis kopi modern melalui kemitraan yang terpercaya, inovatif, dan berkelanjutan di seluruh Indonesia.
          </p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/haznaberkahindonesia?igsh=eXdjOWo1bnphbnZr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1GkUZc14DE/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/@hazna.berkah.indo?_r=1&_t=ZS-95iBd2EARfT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>

          <div className="footer-stats">
            <div className="footer-stat">
              <strong>50+</strong>
              <span>Mitra</span>
            </div>

            <div className="footer-stat">
              <strong>100%</strong>
              <span>Support</span>
            </div>

            <div className="footer-stat">
              <strong>24/7</strong>
              <span>Consulting</span>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h4>Quick Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Center</h4>
          <p>Email: haznaberkahindonesia@gmail.com</p>
          <p>Phone: 0858-7833-7725</p>
          <p>
            Alamat: Jl. Raya Pengalusan No.6, Kompas, Pengalusan,
            Kec. Mrebet, Kabupaten Purbalingga,
            Jawa Tengah 53352
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Javacafe Partnership Ecosystem. Crafted with modern web technology.</p>
      </div>

    </footer>
  );
};

export default Footer;
