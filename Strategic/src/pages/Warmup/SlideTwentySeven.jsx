import React, { useState } from 'react';
import styles from './SlideTwentySeven.module.css';

const DATA = [
  {
    id: 1, pronounFirst: 'I', pronounRest: '', verbFirst: 'w', verbRest: 'as',
    subject: 'Yo', verb1: 'era', verb2: 'estaba', verb3: 'estuve', verb4: 'fui',
    stepEng: 2, stepT: 3
  },
  {
    id: 2, pronounFirst: 'H', pronounRest: 'e', verbFirst: 'w', verbRest: 'as',
    subject: 'El', verb1: 'era', verb2: 'estaba', verb3: 'estuvo', verb4: 'fue',
    stepEng: 4, stepT: 5
  },
  {
    id: 3, pronounFirst: 'S', pronounRest: 'he', verbFirst: 'w', verbRest: 'as',
    subject: 'Ella', verb1: 'era', verb2: 'estaba', verb3: 'estuvo', verb4: 'fue',
    stepEng: 6, stepT: 7
  },
  {
    id: 4, pronounFirst: 'I', pronounRest: 't', verbFirst: 'w', verbRest: 'as',
    subject: 'Eso', verb1: 'era', verb2: 'estaba', verb3: 'estuvo', verb4: 'fue',
    stepEng: 8, stepT: 9
  }
];

const SlideTwentySeven = () => {
  // step 1: Caja "Was" con su flechita curva
  // step 2 a 9: Van apareciendo las oraciones de abajo una por una (Inglés y Español)
  // step 10: Aparece la caja superior derecha con la definición general
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 10) setStep(step + 1);
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* ================= SECCIÓN SUPERIOR ================= */}
        <div className={styles.topSection}>
          
          {/* PASO 1: Caja Was + Flecha Curva */}
          <div className={`${styles.wasBoxContainer} ${step >= 1 ? styles.visible : styles.hidden}`}>
            <div className={styles.wasBox}>Was</div>
            <div className={styles.curvedArrow}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 10l-5 5 5 5"/>
                <path d="M20 4v4a8 8 0 0 1-8 8H4"/>
              </svg>
            </div>
          </div>

          {/* PASO 10: Caja grande de traducción (Aparece al final de la secuencia) */}
          <div className={`${styles.bigTranslationBox} ${step >= 10 ? styles.visible : styles.hidden}`}>
            <div className={styles.transLine}>Era / Estaba /</div>
            <div className={styles.transLine}>Estuvo / Estuve /</div>
            <div className={styles.transLine}>Fue / Fui</div>
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
                <span>{row.subject}</span>
                <span>{row.verb1}</span>
                <span>/</span>
                <span>{row.verb2}</span>
                <span>/</span>
                <span>{row.verb3}</span>
                <span>/</span>
                <span>{row.verb4}</span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Botón Flotante para avanzar pasos */}
      {step < 10 && (
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

export default SlideTwentySeven;