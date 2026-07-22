import React, { useState } from 'react';
// Reutilizamos el CSS base de la Diapositiva 1
import styles from './SlideOne.module.css';

const SlideNine = () => {
  // step 1: Título "Have"
  // step 2: Círculos N y S
  // step 3: Traducciones "Tener" y "Haber"
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* PASO 1: El título principal "Have" */}
        <h1 className={`${styles.mainTitle} ${step >= 1 ? styles.visible : styles.hidden}`}>
          Have
        </h1>

        <div className={styles.contentRow}>
          
          {/* Columna Izquierda (N) */}
          <div className={styles.column}>
            {/* PASO 2 */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>N</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción Tener */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Tener
            </p>
          </div>

          {/* Columna Derecha (S) */}
          <div className={styles.column}>
            {/* PASO 2 */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>S</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción Haber */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Haber
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

export default SlideNine;