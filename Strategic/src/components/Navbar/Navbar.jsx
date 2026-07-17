import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  // Estado para saber si el usuario ha hecho scroll o no
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para escuchar el evento de scroll de la ventana
  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario baja más de 50px, activamos el estado
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpieza del evento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} 
      aria-label="Navegación principal"
    >
      <div className={styles.container}>
        
        {/* Logo */}
        <a href="/" aria-label="Ir al inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 2L3 10.5V25.5L18 34L33 25.5V10.5L18 2Z" stroke={isScrolled ? "#EAB308" : "#FFFFFF"} strokeWidth="2.5" strokeLinejoin="round" style={{ transition: 'all 0.3s ease' }}/>
            <path d="M18 13V27M18 13C15.5 11 11.5 10.5 8 12V25C11.5 23.5 15.5 24 18 27M18 13C20.5 11 24.5 10.5 28 12V25C24.5 23.5 20.5 24 18 27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.logoText}>LinguaPro</span>
        </a>

        {/* Navegación */}
        <nav className={styles.navLinks} aria-label="Menú de secciones">
          <a href="#inicio" className={styles.link}>Inicio</a>
          <a href="#calentamiento" className={styles.link}>Calentamiento</a>
          <a href="#planes" className={styles.link}>Planes</a>
          <a href="#sobre-mi" className={styles.link}>Sobre Mí</a>
        </nav>

        {/* Botón de acción */}
        <button className={styles.searchBtn}>Empezar</button>
      </div>
    </header>
  );
};

export default Navbar;