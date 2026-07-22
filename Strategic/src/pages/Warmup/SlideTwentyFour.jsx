import React, { useState } from 'react';
// Reutilizamos el CSS de la diapositiva 22
import styles from './SlideTwentyTwo.module.css';

const DATA = [
  {
    id: 1, pronounFirst: 'H', pronounRest: 'e', verbFirst: 'i', verbRest: 's',
    trans: 'El es / está',
    stepEng: 2, stepT: 3
  },
  {
    id: 2, pronounFirst: 'S', pronounRest: 'he', verbFirst: 'i', verbRest: 's',
    trans: 'Ella es / está',
    stepEng: 4, stepT: 5
  },
  {
    id: 3, pronounFirst: 'I', pronounRest: 't', verbFirst: 'i', verbRest: 's',
    trans: 'Eso es / está',
    stepEng: 6, stepT: 7
  }
];

const SlideTwentyFour = () => {
  // step 1: Caja "Is"
  // step 2 a 7: Van apareciendo las oraciones de abajo una por una
  // step 8: Finalmente aparece el cuadro grande de arriba "Es / Está"
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 8) setStep(step + 1);
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* ================= SECCIÓN SUPERIOR ================= */}
        <div className={styles.topSection}>
          
          {/* PASO 1: Caja Is */}
          <div className={`${styles.areBox} ${step >= 1 ? styles.visible : styles.hidden}`}>
            Is
          </div>

          {/* PASO 8: Caja grande de traducción "Es / Está" (Aparece hasta el final) */}
          <div className={`${styles.bigTranslationBox} ${step >= 8 ? styles.visible : styles.hidden}`}>
            <div className={styles.transLine} style={{ gridTemplateColumns: 'auto' }}>
              <span>Es / Está</span>
            </div>
          </div>
          
        </div>

        {/* ================= SECCIÓN DE ORACIONES ================= */}
        <div className={styles.sentencesSection}>
          {DATA.map((row) => (
            <div key={row.id} className={styles.sentenceRow}>
              
              {/* Parte en Inglés */}
              <div className={`${styles.englishPart} ${step >= row.stepEng ? styles.visible : styles.hidden}`}>
                <span>
                  <span className={styles.redLetter}>{row.pronounFirst}</span>{row.pronounRest}
                </span>
                <span>
                  <span className={styles.yellowLetter}>{row.verbFirst}</span>{row.verbRest}
                </span>
              </div>

              {/* Parte en Español */}
              <div className={`${styles.spanishPart} ${step >= row.stepT ? styles.visible : styles.hidden}`}>
                {row.trans}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Botón Flotante para avanzar pasos */}
      {step < 8 && (
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

export default SlideTwentyFour;