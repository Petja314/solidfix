"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header" id="top">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="SolidFix home" onClick={closeMenu}>
            <span className="brand-mark">S</span>
            <span>SOLID<span className="brand-light">FIX</span><small>PROPERTY IMPROVEMENTS</small></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <nav id="site-nav" className={`nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
          </nav>
          <a className="button button-dark header-cta" href="#contact">Request a quote <span>↗</span></a>
        </div>
      </header>
    </>
  );
}
