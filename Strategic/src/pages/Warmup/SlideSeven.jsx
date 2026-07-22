import React, { useState } from 'react';
import styles from './SlideSeven.module.css';

const SlideSeven = () => {
  // step 1: Solo "Do / Does / Did -> ?"
  // step 2: Aparece "NO SE TRADUCE"
  // step 3: Aparecen las oraciones en Inglés
  // step 4: Aparecen las traducciones en Español
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* Encabezado */}
        <div className={`${styles.headerRow} ${step >= 1 ? styles.visible : styles.hidden}`}>
          {/* PASO 1: Textos principales y flecha */}
          <div className={styles.mainTitle}>
            <span className={styles.yellowLetter}>D</span>o / <span className={styles.yellowLetter}>D</span>oes / <span className={styles.yellowLetter}>D</span>id
          </div>
          
          <div className={styles.arrowIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            ?
          </div>

          {/* PASO 2: Caja de "NO SE TRADUCE" */}
          <div className={`${styles.noTranslateBox} ${step >= 2 ? styles.visible : styles.hidden}`}>
            NO SE TRADUCE
          </div>
        </div>

        {/* Columnas de oraciones */}
        <div className={styles.columnsContainer}>
          
          {/* Columna 1 */}
          <div className={styles.column}>
            {/* PASO 4: Aparece la traducción en español */}
            <div className={`${styles.spanishText} ${step >= 4 ? styles.visible : styles.hidden}`}>
              Quieres ?
            </div>
            {/* PASO 3: Aparece el inglés */}
            <div className={`${styles.englishText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              <span className={styles.yellowLetter}>D</span>o you want ?
            </div>
          </div>

          {/* Columna 2 */}
          <div className={styles.column}>
            {/* PASO 4 */}
            <div className={`${styles.spanishText} ${step >= 4 ? styles.visible : styles.hidden}`}>
              Ella sabe ?
            </div>
            {/* PASO 3 */}
            <div className={`${styles.englishText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              <span className={styles.yellowLetter}>D</span>oes she know ?
            </div>
          </div>

          {/* Columna 3 */}
          <div className={styles.column}>
            {/* PASO 4 */}
            <div className={`${styles.spanishText} ${step >= 4 ? styles.visible : styles.hidden}`}>
              Ellos comieron ?
            </div>
            {/* PASO 3 */}
            <div className={`${styles.englishText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              <span className={styles.yellowLetter}>D</span>id they eat ?
            </div>
          </div>

        </div>

      </div>

      {/* El Clicker para revelar los pasos */}
      {step < 4 && (
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

export default SlideSeven;