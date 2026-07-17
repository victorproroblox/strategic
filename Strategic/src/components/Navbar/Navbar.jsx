import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Nuevo estado para el menú móvil

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsMenuOpen(false);

  // Bloquear el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} 
      aria-label="Navegación principal"
    >
      <div className={styles.container}>
        
        {/* Logo */}
        <a href="/" aria-label="Ir al inicio" className={styles.logoContainer}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 2L3 10.5V25.5L18 34L33 25.5V10.5L18 2Z" stroke={isScrolled ? "#EAB308" : "#FFFFFF"} strokeWidth="2.5" strokeLinejoin="round" style={{ transition: 'all 0.3s ease' }}/>
            <path d="M18 13V27M18 13C15.5 11 11.5 10.5 8 12V25C11.5 23.5 15.5 24 18 27M18 13C20.5 11 24.5 10.5 28 12V25C24.5 23.5 20.5 24 18 27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.logoText}>Strategic</span>
        </a>

        {/* Botón Hamburguesa (Solo visible en móvil) */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar menú"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navegación (Se transforma en panel lateral en móvil) */}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`} aria-label="Menú de secciones">
          <a href="#inicio" className={styles.link} onClick={closeMenu}>Inicio</a>
          <Link to="/calentamiento" className={styles.link}>Calentamiento</Link>
          <a href="#planes" className={styles.link} onClick={closeMenu}>Planes</a>
          <a href="#sobre-mi" className={styles.link} onClick={closeMenu}>Sobre Mí</a>
          
          {/* Botón dentro del menú móvil para mejor UX */}
          <button className={`${styles.searchBtn} ${styles.mobileBtn}`} onClick={closeMenu}>
            Empezar
          </button>
        </nav>

        {/* Botón de acción (Visible solo en Desktop) */}
        <button className={`${styles.searchBtn} ${styles.desktopBtn}`}>Empezar</button>
      </div>
      
      {/* Overlay oscuro de fondo al abrir el menú móvil */}
      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ''}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Navbar;