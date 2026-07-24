import React, { useState } from 'react';
import styles from './SlideThirtySix.module.css';

const SlideThirtySix = () => {
  // step 1: Encabezado (Insignia N_v y título "Preguntar Negativamente")
  // step 2: Ejemplo central ("Don’t You work ?") y fórmula interrogativa negativa abajo
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
          <h1 className={styles.titleText}>Preguntar Negativamente</h1>
        </div>

        {/* PASO 2: Ejemplo Central ("Don’t You work ?") */}
        <div className={`${styles.middleSection} ${step >= 2 ? styles.visible : styles.hidden}`}>
          <div className={styles.exampleText}>
            Don’t &nbsp;You &nbsp;work &nbsp;?
          </div>
        </div>

        {/* PASO 2: Fórmula Inferior */}
        <div className={`${styles.bottomFormula} ${step >= 2 ? styles.visible : styles.hidden}`}>
          
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
          
          {/* Sujeto */}
          <span className={styles.subjectText}>Subject</span>
          
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

export default SlideThirtySix;