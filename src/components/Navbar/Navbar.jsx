import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
      <Link to="/" className="logo" onClick={handleLinkClick}>
        <span className="logo-highlight">CV</span> Hasna
      </Link>

      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={handleLinkClick}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={handleLinkClick}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="cta">
        <a
          href="https://javacafe.id"
          target="_blank"
          rel="noopener noreferrer"
        >
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