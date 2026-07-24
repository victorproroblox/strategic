import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      aria-label="Pie de página corporativo"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.container}>
        
        {/* Columna Principal: Marca */}
        <div className={styles.brandColumn}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Hexágono con Libro adaptado al color amarillo del tema actual */}
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 2L3 10.5V25.5L18 34L33 25.5V10.5L18 2Z" stroke="#EAB308" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M18 13V27M18 13C15.5 11 11.5 10.5 8 12V25C11.5 23.5 15.5 24 18 27M18 13C20.5 11 24.5 10.5 28 12V25C24.5 23.5 20.5 24 18 27" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.logoText}>Strategic</span>
          </div>
          <p className={styles.description}>
            Plataforma educativa de alto rendimiento diseñada para profesionales que buscan dominar el inglés global.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className={styles.columnTitle}>Plataforma</h4>
          <ul className={styles.linksList}>
            <li><a href="#inicio" className={styles.link}>Inicio</a></li>
            <li><a href="#calentamiento" className={styles.link}>Calentamiento</a></li>
            <li><a href="#planes" className={styles.link}>Planes y Precios</a></li>
          </ul>
        </div>

        {/* Columna 3: Tutor */}
        <div>
          <h4 className={styles.columnTitle}>Profesor</h4>
          <ul className={styles.linksList}>
            <li><a href="#sobre-mi" className={styles.link}>Sobre Mí</a></li>
            <li><a href="#metodo" className={styles.link}>Mi Metodología</a></li>
            <li><a href="#testimonios" className={styles.link}>Casos de Éxito</a></li>
          </ul>
        </div>

        {/* Columna 4: Soporte */}
        <div>
          <h4 className={styles.columnTitle}>Contacto</h4>
          <ul className={styles.linksList}>
            <li><a href="#ayuda" className={styles.link}>Centro de Ayuda</a></li>
            <li><a href="#soporte" className={styles.link}>Soporte Estudiantil</a></li>
            <li><a href="mailto:info@linguapro.com" className={styles.link}>info@linguapro.com</a></li>
          </ul>
        </div>

      </div>

      {/* Barra de Copyright e Legales */}
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          &copy; {currentYear} Stretegic. Todos los derechos reservados.
        </span>
        <div className={styles.legalLinks}>
          <a href="#privacidad" className={styles.link} style={{ fontSize: '0.85rem' }}>Privacidad</a>
          <a href="#terminos" className={styles.link} style={{ fontSize: '0.85rem' }}>Términos de Servicio</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;