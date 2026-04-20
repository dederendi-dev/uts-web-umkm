import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // efek navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggle menu mobile
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // klik menu auto close (mobile)
  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="logo-highlight">CV</span> Hasna
      </div>

      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#products" onClick={handleLinkClick}>Products</a></li>
        <li><a href="#gallery" onClick={handleLinkClick}>Gallery</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        <li><a href="/order" onClick={handleLinkClick}>Order</a></li>
        <li><a href="/admin-login" onClick={handleLinkClick}>Admin Login</a></li>
      </ul>

      <div className="cta">
        <a href="/order">
          <button>Pesan Sekarang</button>
        </a>
      </div>

      {/* hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;