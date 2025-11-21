// NavBar.jsx
import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <Link to="/" className={styles.navbarLogo}>
            <Heart className={styles.logoIcon} />
            <span className={styles.logoText}>Relações Interpessoais</span>
            <span className={styles.logoTextShort}>RI</span>
          </Link>

          {/* Desktop Menu */}
          <div className={styles.navbarLinks}>
            <Link to="/trabalhos/seminario" className={styles.navLink}>
              Seminário
            </Link>
            <Link to="/trabalhos/podcast" className={styles.navLink}>
              Podcast
            </Link>
            <Link to="/trabalhos/storytelling" className={styles.navLink}>
              Storytelling
            </Link>
            <Link to="/trabalhos/video" className={styles.navLink}>
              Vídeo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.hamburger}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className={styles.hamburgerIcon} />
            ) : (
              <Menu className={styles.hamburgerIcon} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuContent}>
          <Link
            to="/trabalhos/seminario"
            onClick={closeMenu}
            className={styles.mobileLink}
          >
            Seminário
          </Link>
          <Link
            to="/trabalhos/podcast"
            onClick={closeMenu}
            className={styles.mobileLink}
          >
            Podcast
          </Link>
          <Link
            to="/trabalhos/storytelling"
            onClick={closeMenu}
            className={styles.mobileLink}
          >
            Storytelling
          </Link>
          <Link
            to="/trabalhos/video"
            onClick={closeMenu}
            className={styles.mobileLink}
          >
            Vídeo - Cases
          </Link>
        </div>
      </div>
    </>
  );
}
