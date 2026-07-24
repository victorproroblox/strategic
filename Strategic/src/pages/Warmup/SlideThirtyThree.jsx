import React, { useState } from 'react';
import styles from './SlideThirtyThree.module.css';

const SlideThirtyThree = () => {
  // step 1: Muestra encabezado (Insignia N_v y título "Afirmar")
  // step 2: Muestra el centro ("You work") y la fórmula abajo ("Subject + Normal Verb")
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
            <span className={styles.circleText}>N</span>
            <span className={styles.littleV}>v</span>
          </div>
          <h1 className={styles.titleText}>Afirmar</h1>
        </div>

        {/* PASO 2: Ejemplo Central ("You work") */}
        <div className={`${styles.middleSection} ${step >= 2 ? styles.visible : styles.hidden}`}>
          <div className={styles.exampleText}>
            You &nbsp;work
          </div>
        </div>

        {/* PASO 2: Fórmula Inferior */}
        <div className={`${styles.bottomFormula} ${step >= 2 ? styles.visible : styles.hidden}`}>
          <span className={styles.subjectText}>Subject</span>
          <span className={styles.plusSign}>+</span>
          <div className={styles.verbStack}>
            <div>
              <span className={styles.yellowLetter}>N</span>ormal
            </div>
            <div>
              <span className={styles.yellowLetter}>V</span>erb
            </div>
          </div>
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

export default SlideThirtyThree;