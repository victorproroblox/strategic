import React, { useState } from 'react';
import styles from './SlideOne.module.css';

const SlideFive = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* PASO 1: "Did" junto con la flecha y la etiqueta "Pasado" */}
        <div className={`${styles.titleWrapper} ${step >= 1 ? styles.visible : styles.hidden}`}>
          {/* Quitamos el margin inferior aquí porque ya lo tiene el wrapper */}
          <h1 className={styles.mainTitle} style={{ marginBottom: 0 }}>Did</h1>
          
          <div className={styles.pastTagContainer}>
            {/* Icono de flecha curva (SVG dibujado a mano) */}
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 10l-5 5 5 5"/>
              <path d="M20 4v4a8 8 0 0 1-8 8H4"/>
            </svg>
            <div className={styles.tagBox}>Pasado</div>
          </div>
        </div>

        <div className={styles.contentRow}>
          
          {/* Columna Izquierda (N) */}
          <div className={styles.column}>
            {/* PASO 2 */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>N</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3 */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Hacer en<br />Pasado<br />Hice / Hacia
            </p>
          </div>

          {/* Columna Derecha (S) */}
          <div className={styles.column}>
            {/* PASO 2 */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>S</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3 */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Preguntar y Negar<br />en Pasado
            </p>
          </div>

        </div>
      </div>

      {/* Botón Flotante para avanzar pasos */}
      {step < 3 && (
        <button 
          className={styles.stepBtn} 
          onClick={handleNextStep}
          aria-label="Siguiente elemento"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default SlideFive;