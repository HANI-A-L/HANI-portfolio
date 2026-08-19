import { useState } from "react";
import useLanguage from "../context/useLanguage";

function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}

        <a href="#home" className="logo" onClick={closeMenu}>
          Hani
        </a>

        {/* Desktop Navigation */}

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            {t.nav.home}
          </a>

          <a href="#about" onClick={closeMenu}>
            {t.nav.about}
          </a>

          <a href="#skills" onClick={closeMenu}>
            {t.nav.skills}
          </a>

          <a href="#projects" onClick={closeMenu}>
            {t.nav.projects}
          </a>

          <a href="#experience" onClick={closeMenu}>
            {t.nav.experience}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {t.nav.contact}
          </a>
        </nav>

        {/* Actions */}

        <div className="nav-actions">
          <button
            type="button"
            className="language-button"
            onClick={toggleLanguage}
          >
            {language === "en" ? "FA" : "EN"}
          </button>

          <a href="#contact" className="nav-button" onClick={closeMenu}>
            {t.nav.letsTalk}
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
