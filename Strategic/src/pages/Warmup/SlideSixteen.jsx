import React, { useState } from 'react';
import styles from './SlideSixteen.module.css';

const DATA = [
  {
    id: 1, pronounFirst: 'I', pronounRest: '', verbFirst: 'h', verbRest: 'ad',
    trans1: 'Yo tenía', trans2: 'Yo tuve', trans3: 'Yo había',
    stepEng: 1, stepT1: 2, stepT2: 3, stepT3: 4
  },
  {
    id: 2, pronounFirst: 'Y', pronounRest: 'ou', verbFirst: 'h', verbRest: 'ad',
    trans1: 'Tu tenias', trans2: 'Tu tuviste', trans3: 'Tú habías',
    stepEng: 5, stepT1: 6, stepT2: 7, stepT3: 8
  },
  {
    id: 3, pronounFirst: 'W', pronounRest: 'e', verbFirst: 'h', verbRest: 'ad',
    trans1: 'Nosotros teníamos', trans2: 'Nosotros tuvimos', trans3: 'Nosotros habíamos',
    stepEng: 9, stepT1: 10, stepT2: 11, stepT3: 12
  },
  {
    id: 4, pronounFirst: 'T', pronounRest: 'hey', verbFirst: 'h', verbRest: 'ad',
    trans1: 'Ellos tenían', trans2: 'Ellos tuvieron', trans3: 'Ellos habían',
    stepEng: 13, stepT1: 14, stepT2: 15, stepT3: 16,
    addMargin: true // Para dar el salto visual que tiene la imagen antes de "He"
  },
  {
    id: 5, pronounFirst: 'H', pronounRest: 'e', verbFirst: 'h', verbRest: 'ad',
    trans1: 'El tenía', trans2: 'El tuvo', trans3: 'El había',
    stepEng: 17, stepT1: 18, stepT2: 19, stepT3: 20
  },
  {
    id: 6, pronounFirst: 'S', pronounRest: 'he', verbFirst: 'h', verbRest: 'ad',
    trans1: 'Ella tenía', trans2: 'Ella tuvo', trans3: 'Ella había',
    stepEng: 21, stepT1: 22, stepT2: 23, stepT3: 24
  },
  {
    id: 7, pronounFirst: 'I', pronounRest: 't', verbFirst: 'h', verbRest: 'ad',
    trans1: 'Eso tenía', trans2: 'Eso tuvo', trans3: 'Eso había',
    stepEng: 25, stepT1: 26, stepT2: 27, stepT3: 28
  }
];

const SlideSixteen = () => {
  // Estado que controla el clicker (1 a 28)
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 28) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {DATA.map((row) => (
          <div key={row.id} className={`${styles.row} ${row.addMargin ? styles.rowWithMargin : ''}`}>
            
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
              
              {/* Separador y Traducción 2 */}
              <span className={step >= row.stepT2 ? styles.visible : styles.hidden}>
                / {row.trans2}
              </span>

              {/* Separador y Traducción 3 */}
              <span className={step >= row.stepT3 ? styles.visible : styles.hidden}>
                / {row.trans3}
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* El Clicker para revelar los pasos */}
      {step < 28 && (
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

export default SlideSixteen;