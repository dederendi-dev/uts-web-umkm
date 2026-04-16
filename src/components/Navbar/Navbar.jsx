// Navbar.jsx

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { navLinks } from "./navData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* LEFT - LOGO */}
        <div className="logo">
          <span className="logo-highlight">CV</span> Hasna
        </div>

        {/* CENTER - MENU */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* RIGHT - CTA */}
        <div className="cta">
          <button>Order Now</button>
        </div>

        {/* MOBILE */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;