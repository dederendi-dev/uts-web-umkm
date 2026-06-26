import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef(null);

  // efek navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // toggle menu mobile
  const toggleMenu = () => {
    if (menuActive && !isClosing) {
      setIsClosing(true);

      closeTimeoutRef.current = setTimeout(() => {
        setMenuActive(false);
        setIsClosing(false);
      }, 500);

      return;
    }

    if (!menuActive) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      setIsClosing(false);
      setMenuActive(true);
    }
  };

  // klik menu auto close (mobile)
  const handleLinkClick = () => {
    if (!menuActive || isClosing) return;

    setIsClosing(true);

    closeTimeoutRef.current = setTimeout(() => {
      setMenuActive(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo" onClick={handleLinkClick}>
        <img
          src="https://mlycwggvkcajomydywlg.supabase.co/storage/v1/object/public/home/logo.jpg"
          alt="CV Hasna Logo"
          className="logo-image"
        />
        <span>
          <span className="logo-highlight">CV</span> Hasna
        </span>
      </Link>

      {/* hamburger */}
      <div
        className={`hamburger ${menuActive && !isClosing ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuActive ? "active" : ""} ${isClosing ? "closing" : ""}`}>
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
          <NavLink to="/careers" onClick={handleLinkClick}>
            Careers
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
    </nav>
  );
}

export default Navbar;