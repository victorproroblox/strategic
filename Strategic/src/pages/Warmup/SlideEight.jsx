import React, { useState } from 'react';
// ¡Reutilizamos el CSS de la diapositiva 7!
import styles from './SlideSeven.module.css';

const SlideEight = () => {
  // step 1: Título superior y "Negar"
  // step 2: Aparece el recuadro "No"
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
            <span className={styles.yellowLetter}>D</span>on't / <span className={styles.yellowLetter}>D</span>oesn't / <span className={styles.yellowLetter}>D</span>idn't
          </div>
          
          <div className={styles.arrowIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Negar
          </div>

          {/* PASO 2: Caja de "No" (Quitamos el uppercase para que respete mayúscula/minúscula) */}
          <div 
            className={`${styles.noTranslateBox} ${step >= 2 ? styles.visible : styles.hidden}`}
            style={{ textTransform: 'none' }}
          >
            No
          </div>
        </div>

        {/* Columnas de oraciones */}
        <div className={styles.columnsContainer}>
          
          {/* Columna 1 */}
          <div className={styles.column}>
            {/* PASO 4: Aparece la traducción en español */}
            <div className={`${styles.spanishText} ${step >= 4 ? styles.visible : styles.hidden}`}>
              <span className={styles.yellowLetter}>N</span>o Quieres
            </div>
            {/* PASO 3: Aparece el inglés */}
            <div className={`${styles.englishText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              You <span className={styles.yellowLetter}>d</span>on't want
            </div>
          </div>

          {/* Columna 2 */}
          <div className={styles.column}>
            {/* PASO 4 */}
            <div className={`${styles.spanishText} ${step >= 4 ? styles.visible : styles.hidden}`}>
              Ella <span className={styles.yellowLetter}>n</span>o sabe
            </div>
            {/* PASO 3 */}
            <div className={`${styles.englishText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              She <span className={styles.yellowLetter}>d</span>oesn't know
            </div>
          </div>

          {/* Columna 3 */}
          <div className={styles.column}>
            {/* PASO 4 */}
            <div className={`${styles.spanishText} ${step >= 4 ? styles.visible : styles.hidden}`}>
              Ellos <span className={styles.yellowLetter}>n</span>o comieron
            </div>
            {/* PASO 3 */}
            <div className={`${styles.englishText} ${step >= 3 ? styles.visible : styles.hidden}`}>
              They <span className={styles.yellowLetter}>d</span>idn't eat
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

export default SlideEight;