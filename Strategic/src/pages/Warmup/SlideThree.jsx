import React, { useState } from 'react';
// ¡Magia de código limpio! Importamos los estilos de la primera diapositiva
// ya que la estructura y la responsividad son exactamente las mismas.
import styles from './SlideOne.module.css';

const SlideThree = () => {
  // Mismo estado para controlar los pasos (Clicker)
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* PASO 1: El título principal cambia a "Does" */}
        <h1 className={`${styles.mainTitle} ${step >= 1 ? styles.visible : styles.hidden}`}>
          Does
        </h1>

        <div className={styles.contentRow}>
          
          {/* Columna Izquierda (N) */}
          <div className={styles.column}>
            {/* PASO 2 */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>N</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción cambia a "Hace" */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Hace
            </p>
          </div>

          {/* Columna Derecha (S) */}
          <div className={styles.column}>
            {/* PASO 2 */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>S</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción se mantiene igual */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Preguntar y Negar<br />en Presente
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

export default SlideThree;