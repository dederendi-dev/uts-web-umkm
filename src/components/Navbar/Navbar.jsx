// src/components/Navbar/Navbar.jsx

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { navLinks } from "./navData";

// Navbar utama
const Navbar = () => {
  // State untuk toggle menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // State untuk efek scroll (shadow + blur)
  const [scrolled, setScrolled] = useState(false);

  // Event scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup biar gak memory leak
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      
      {/* Logo */}
      <div className="navbar-logo">
        <h2>CV Hasna</h2>
      </div>

      {/* Menu Desktop */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="navbar-cta">
        <button>Order Now</button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div 
        className={`hamburger ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
};

export default Navbar;