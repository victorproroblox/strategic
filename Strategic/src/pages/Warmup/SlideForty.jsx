import React, { useState } from 'react';
// Reutilizamos el CSS de la diapositiva 38
import styles from './SlideThirtyEight.module.css';

const SlideForty = () => {
  // step 1: Encabezado (Insignia S_v y título "Preguntar")
  // step 2: Ejemplo central ("Can you ?") y fórmula abajo ("Special Verb + Subject")
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* PASO 1: Encabezado Superior */}
        <div className={`${styles.topHeader} ${step >= 1 ? styles.visible : styles.hidden}`}>
          <div className={styles.circleBadge}>
            <span className={styles.circleText}>S</span>
            <span className={styles.littleV}>v</span>
          </div>
          <h1 className={styles.titleText}>Preguntar</h1>
        </div>

        {/* PASO 2: Ejemplo Central ("Can you ?") */}
        <div className={`${styles.middleSection} ${step >= 2 ? styles.visible : styles.hidden}`}>
          <div className={styles.exampleText}>
            Can &nbsp;you &nbsp;?
          </div>
        </div>

        {/* PASO 2: Fórmula Inferior */}
        <div className={`${styles.bottomFormula} ${step >= 2 ? styles.visible : styles.hidden}`}>
          {/* Bloque Special Verb */}
          <div className={styles.verbStack}>
            <div>
              <span className={styles.yellowLetter}>S</span>pecial
            </div>
            <div>
              <span className={styles.yellowLetter}>V</span>erb
            </div>
          </div>

          <span className={styles.plusSign}>+</span>

          {/* Sujeto */}
          <span className={styles.subjectText}>Subject</span>
        </div>

      </div>

      {/* Botón Flotante para revelar el paso 2 */}
      {step < 2 && (
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

export default SlideForty;