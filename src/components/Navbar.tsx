import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Lock body scrolling when the mobile menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        Harshita Tiwary
        <span className="logo-sub"></span>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links desktop">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Button - Transforms 3 stacks into a cross */}
      <button 
        className={`hamburger-trigger ${menuOpen ? "is-active" : ""}`} 
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Flowy Mobile Overlay Menu */}
      <div className={`mobile-overlay ${menuOpen ? "is-open" : ""}`}>
        <ul className="mobile-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;