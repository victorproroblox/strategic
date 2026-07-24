import React, { useState } from 'react';
import styles from './SlideThirtyFour.module.css';

const SlideThirtyFour = () => {
  // step 1: Encabezado (Insignia N_v y título "Negar")
  // step 2: Ejemplo central ("You don't work") y la fórmula abajo
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
          <h1 className={styles.titleText}>Negar</h1>
        </div>

        {/* PASO 2: Ejemplo Central ("You don't work") */}
        <div className={`${styles.middleSection} ${step >= 2 ? styles.visible : styles.hidden}`}>
          <div className={styles.exampleText}>
            You &nbsp;don’t &nbsp;work
          </div>
        </div>

        {/* PASO 2: Fórmula Inferior */}
        <div className={`${styles.bottomFormula} ${step >= 2 ? styles.visible : styles.hidden}`}>
          <span className={styles.subjectText}>Subject</span>
          
          <span className={styles.plusSign}>+</span>
          
          {/* Bloque Auxiliares Negativos */}
          <div className={styles.auxiliaryStack}>
            <div>
              <span className={styles.yellowLetter}>D</span>on’t / <span className={styles.yellowLetter}>D</span>oesn’t
            </div>
            <div>
              <span className={styles.yellowLetter}>D</span>idn’t
            </div>
          </div>
          
          <span className={styles.plusSign}>+</span>
          
          {/* Bloque Normal Verb */}
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

export default SlideThirtyFour;