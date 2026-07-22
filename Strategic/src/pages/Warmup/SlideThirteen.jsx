import React, { useState } from 'react';
// ¡Reutilizamos el CSS de la Diapositiva 10!
import styles from './SlideTen.module.css';

const DATA = [
  {
    id: 1,
    pronounFirst: 'H', pronounRest: 'e',
    verbFirst: 'h', verbRest: 'as',
    trans1: 'El tiene', trans2: 'El ha',
    stepEng: 1, stepT1: 2, stepT2: 3
  },
  {
    id: 2,
    pronounFirst: 'S', pronounRest: 'he',
    verbFirst: 'h', verbRest: 'as',
    trans1: 'Ella tiene', trans2: 'Ella ha',
    stepEng: 4, stepT1: 5, stepT2: 6
  },
  {
    id: 3,
    pronounFirst: 'I', pronounRest: 't',
    verbFirst: 'h', verbRest: 'as',
    trans1: 'Eso tiene', trans2: 'Eso ha',
    stepEng: 7, stepT1: 8, stepT2: 9
  }
];

const SlideThirteen = () => {
  // Estado que controla el clicker (1 a 9)
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 9) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {DATA.map((row) => (
          <div key={row.id} className={styles.row}>
            
            {/* INGLÉS */}
            <div className={`${styles.englishPart} ${step >= row.stepEng ? styles.visible : styles.hidden}`}>
              <span>
                <span className={styles.redLetter}>{row.pronounFirst}</span>{row.pronounRest}
              </span>
              <span>
                <span className={styles.yellowLetter}>{row.verbFirst}</span>{row.verbRest}
              </span>
            </div>

            {/* TRADUCCIONES */}
            <div className={styles.translationPart}>
              {/* Traducción 1 */}
              <span className={step >= row.stepT1 ? styles.visible : styles.hidden}>
                {row.trans1}
              </span>
              
              {/* Separador (Se muestra junto con la segunda traducción) */}
              <span className={step >= row.stepT2 ? styles.visible : styles.hidden}>
                /
              </span>
              
              {/* Traducción 2 */}
              <span className={step >= row.stepT2 ? styles.visible : styles.hidden}>
                {row.trans2}
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* El Clicker para revelar los pasos */}
      {step < 9 && (
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

export default SlideThirteen;