import React, { useState } from 'react';
import styles from './SlideOne.module.css';

const SlideOne = () => {
  // Estado interno para controlar en qué paso de la diapositiva estamos.
  // 1 = Solo "Do"
  // 2 = "Do" + Círculos
  // 3 = "Do" + Círculos + Textos
  const [step, setStep] = useState(1);

  // Función para avanzar al siguiente elemento
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* PASO 1: El título principal (Siempre visible desde el inicio) */}
        <h1 className={`${styles.mainTitle} ${step >= 1 ? styles.visible : styles.hidden}`}>
          Do
        </h1>

        <div className={styles.contentRow}>
          
          {/* Columna Izquierda (N) */}
          <div className={styles.column}>
            {/* PASO 2: Círculo N */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>N</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción Hacer */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Hacer
            </p>
          </div>

          {/* Columna Derecha (S) */}
          <div className={styles.column}>
            {/* PASO 2: Círculo S */}
            <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
              <span className={styles.circleText}>S</span>
              <span className={styles.littleV}>v</span>
            </div>
            {/* PASO 3: Traducción Especial */}
            <p className={`${styles.translationText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              Preguntar y Negar<br />en Presente
            </p>
          </div>

        </div>
      </div>

      {/* Botón Flotante para avanzar pasos (Se oculta cuando ya se mostró todo) */}
      {step < 3 && (
        <button 
          className={styles.stepBtn} 
          onClick={handleNextStep}
          aria-label="Siguiente elemento"
        >
          {/* Icono de flecha */}
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default SlideOne;