import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import styles from './SlideFortyTwo.module.css';

const CONFETTI_COLORS = ['#EAB308', '#FDE047', '#CA8A04', '#22C55E', '#3B82F6', '#DC2626'];

// Dispara confeti desde ambas esquinas inferiores, como un cañón de celebración
const launchConfetti = () => {
  const base = { colors: CONFETTI_COLORS, startVelocity: 55, ticks: 200 };
  confetti({ ...base, particleCount: 60, angle: 60, spread: 65, origin: { x: 0, y: 1 } });
  confetti({ ...base, particleCount: 60, angle: 120, spread: 65, origin: { x: 1, y: 1 } });
};

const SlideFortyTwo = () => {
  useEffect(() => {
    launchConfetti(); // ráfaga inicial al llegar a la diapositiva

    const interval = setInterval(launchConfetti, 3000); // y luego cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.cardContainer}>
        
        {/* Icono de Trofeo Animado */}
        <svg className={styles.trophyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>

        {/* Mensaje de Felicitaciones */}
        <h1 className={styles.mainTitle}>
          ¡Felicidades!
          <span className={styles.highlightText}>Has terminado el Calentamiento</span>
        </h1>

        <p className={styles.subText}>
          Has completado todos los conceptos clave de la estructura básica en inglés.
        </p>

        {/* Badge de completado */}
        <div className={styles.checkmarkBadge}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Warmup Completado
        </div>

      </div>
    </div>
  );
};

export default SlideFortyTwo;