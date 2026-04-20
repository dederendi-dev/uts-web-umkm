// Footer.jsx
// Section Footer untuk bagian bawah website (informasi + navigasi cepat)

import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2><span>CV</span> Hasna</h2>
          <p>
            Penyedia produk makanan dan minuman berkualitas dengan standar terbaik
            untuk memenuhi kebutuhan konsumen modern.
          </p>

          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h4>Menu</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Kontak</h4>
          <p>Email: cvhasna@email.com</p>
          <p>Phone: +62 812-3456-7890</p>
          <p>Alamat: Indonesia</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CV Hasna. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
