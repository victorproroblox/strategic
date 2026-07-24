import React, { useState } from 'react';
import styles from './SlideFortyOne.module.css';

const SlideFortyOne = () => {
  // step 1: Encabezado (Insignia S_v y título "Preguntar Negativamente")
  // step 2: Ejemplo principal ("Can’t you ?") y fórmula ("Special Verb + Not + Subject")
  // step 3: Caja de Forma Alterna ("Can you not ?") abajo a la izquierda
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
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
          <h1 className={styles.titleText}>Preguntar Negativamente</h1>
        </div>

        {/* PASO 2: Ejemplo Central ("Can’t you ?") */}
        <div className={`${styles.middleSection} ${step >= 2 ? styles.visible : styles.hidden}`}>
          <div className={styles.exampleText}>
            Can’t &nbsp;you &nbsp;?
          </div>
        </div>

        {/* ÁREA INFERIOR */}
        <div className={styles.bottomArea}>
          
          {/* PASO 3: Caja Forma Alterna (Abajo Izquierda) */}
          <div className={`${styles.alternateBox} ${step >= 3 ? styles.visible : styles.hidden}`}>
            <div className={styles.alternateLabel}>
              Forma Alterna que<br />también es Correcta
            </div>
            <div className={styles.alternateExample}>
              Can you not ?
            </div>
          </div>

          {/* PASO 2: Fórmula Inferior */}
          <div className={`${styles.bottomFormula} ${step >= 2 ? styles.visible : styles.hidden}`}>
            <div className={styles.verbStack}>
              <div>
                <span className={styles.yellowLetter}>S</span>pecial
              </div>
              <div>
                <span className={styles.yellowLetter}>V</span>erb
              </div>
            </div>

            <span className={styles.plusSign}>+</span>

            <span>Not</span>

            <span className={styles.plusSign}>+</span>

            <span className={styles.subjectText}>Subject</span>
          </div>

        </div>

      </div>

      {/* Botón Flotante para revelar pasos 2 y 3 */}
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

export default SlideFortyOne;