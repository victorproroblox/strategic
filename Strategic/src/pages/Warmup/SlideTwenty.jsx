import React, { useState } from 'react';
import styles from './SlideTwenty.module.css';

const SlideTwenty = () => {
  // step 1: Caja "Am"
  // step 2: Caja "Soy / Estoy"
  // step 3: Texto "I am"
  // step 4: Texto "Yo soy / estoy"
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* PASO 1: Am */}
        <div className={`${styles.amBox} ${step >= 1 ? styles.visible : styles.hidden}`}>
          Am
        </div>

        {/* PASO 2: Traducción */}
        <div className={`${styles.translationBox} ${step >= 2 ? styles.visible : styles.hidden}`}>
          Soy / Estoy
        </div>

        {/* PASOS 3 y 4: Oraciones */}
        <div className={styles.sentenceRow}>
          
          {/* PASO 3: Inglés */}
          <div className={`${styles.englishText} ${step >= 3 ? styles.visible : styles.hidden}`}>
            <span className={styles.redLetter}>I</span>
            <span>
              <span className={styles.yellowLetter}>a</span>m
            </span>
          </div>

          {/* PASO 4: Español */}
          <div className={`${styles.spanishText} ${step >= 4 ? styles.visible : styles.hidden}`}>
            Yo soy / estoy
          </div>

        </div>

      </div>

      {/* Botón Flotante para avanzar pasos */}
      {step < 4 && (
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

export default SlideTwenty;