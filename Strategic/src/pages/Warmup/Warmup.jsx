import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para navegación sin recarga
import styles from './Warmup.module.css';

const Warmup = () => {
  return (
    <div className={styles.pageWrapper}>
      
      {/* Botón para volver al Inicio */}
      <Link to="/" className={styles.backButton}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Volver
      </Link>

      <main className={styles.content}>
        
        {/* Animación Visual */}
        <div className={styles.animationContainer} aria-hidden="true">
          <div className={styles.pulseRing}></div>
          <div className={styles.pulseRing}></div>
          <div className={styles.iconWrapper}>
             {/* Logo Hexágono pequeño en el centro */}
             <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2L3 10.5V25.5L18 34L33 25.5V10.5L18 2Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M18 13V27M18 13C15.5 11 11.5 10.5 8 12V25C11.5 23.5 15.5 24 18 27M18 13C20.5 11 24.5 10.5 28 12V25C24.5 23.5 20.5 24 18 27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Textos */}
        <h1 className={styles.title}>Bienvenido al<br/>Calentamiento</h1>
        <p className={styles.subtitle}>
          Despierta tu mente. 5 minutos de inmersión total en inglés antes de comenzar tu sesión.
        </p>

        {/* Call to Action */}
        <button className={styles.startBtn}>
          Empezar
        </button>

      </main>
    </div>
  );
};

export default Warmup;