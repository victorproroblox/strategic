import React, { useState } from 'react';
// Reutilizamos el CSS de la diapositiva 27
import styles from './SlideTwentySeven.module.css';

const DATA = [
  {
    id: 1, pronounFirst: 'Y', pronounRest: 'ou', verbFirst: 'w', verbRest: 'ere',
    subject: 'Tu', verb1: 'eras', verb2: 'estabas', verb3: 'estuviste', verb4: 'fuiste',
    stepEng: 2, stepT: 3
  },
  {
    id: 2, pronounFirst: 'W', pronounRest: 'e', verbFirst: 'w', verbRest: 'ere',
    subject: 'Nosotros', verb1: 'éramos', verb2: 'estábamos', verb3: 'estuvimos', verb4: 'fuimos',
    stepEng: 4, stepT: 5
  },
  {
    id: 3, pronounFirst: 'T', pronounRest: 'hey', verbFirst: 'w', verbRest: 'ere',
    subject: 'Ellos', verb1: 'eran', verb2: 'estaban', verb3: 'estuvieron', verb4: 'fueron',
    stepEng: 6, stepT: 7
  }
];

const SlideTwentyNine = () => {
  // step 1: Caja "Were" con su flechita curva
  // step 2 a 7: Van apareciendo las 3 oraciones de abajo una por una (Inglés y Español)
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 7) setStep(step + 1);
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* ================= SECCIÓN SUPERIOR ================= */}
        <div className={styles.topSection}>
          
          {/* PASO 1: Caja Were + Flecha Curva */}
          <div className={`${styles.wasBoxContainer} ${step >= 1 ? styles.visible : styles.hidden}`}>
            <div className={styles.wasBox}>Were</div>
            <div className={styles.curvedArrow}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 10l-5 5 5 5"/>
                <path d="M20 4v4a8 8 0 0 1-8 8H4"/>
              </svg>
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
      {step < 7 && (
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

export default SlideTwentyNine;