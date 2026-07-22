import React, { useState } from 'react';
// Reutilizamos el CSS base de la Diapositiva 1
import styles from './SlideOne.module.css';

const SlideTwelve = () => {
  // step 1: Título "Has"
  // step 2: Círculos N y S
  // step 3: Traducciones "Tiene" y "Ha"
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* PASO 1: El título principal "Has" */}
        <h1 className={`${styles.mainTitle} ${step >= 1 ? styles.visible : styles.hidden}`}>
          Has
        </h1>

        <div className={styles.contentRow}>
          
          {/* Columna Izquierda (N) */}
          <div className={styles.column}>
            {/* PASO 2: Círculo */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>N</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción "Tiene" */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Tiene
            </p>
          </div>

          {/* Columna Derecha (S) */}
          <div className={styles.column}>
            {/* PASO 2: Círculo */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>S</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción "Ha" */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Ha
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

export default SlideTwelve;