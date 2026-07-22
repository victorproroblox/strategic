import React, { useState } from 'react';
import styles from './SlideThirty.module.css';

const TABLE_DATA = [
  { left: ['Be', 'Am', 'Are', 'Is'], right: ['Work'], isBoxLeft: false, isBoxRight: false },
  { left: ['Do', 'Does', 'Did'], right: ['Eat'], isBoxLeft: true, isBoxRight: false },
  { left: ['Have', 'Has', 'Had'], right: ['Play'], isBoxLeft: true, isBoxRight: false },
  { left: ['Can'], right: ['Do', 'Does', 'Did'], isBoxLeft: false, isBoxRight: true },
  { left: ['Could'], right: ['Have', 'Has', 'Had'], isBoxLeft: false, isBoxRight: true },
  { left: ['Should'], right: ['Drive'], isBoxLeft: false, isBoxRight: false },
  { left: ['Must'], right: ['Study'], isBoxLeft: false, isBoxRight: false },
  { left: ['Would'], right: ['Go'], isBoxLeft: false, isBoxRight: false },
  { left: ['Will'], right: ['Jump'], isBoxLeft: false, isBoxRight: false },
  { left: ['May'], right: ['Run'], isBoxLeft: false, isBoxRight: false },
  { left: ['Might'], right: ['Write'], isBoxLeft: false, isBoxRight: false },
  { left: ['Shall'], right: ['Live'], isBoxLeft: false, isBoxRight: false },
];

const SlideThirty = () => {
  // PASOS:
  // 1: Círculo S
  // 2: Círculo N
  // 3: Columna derecha de la tabla
  // 4: Flecha y texto derecha
  // 5: Columna izquierda de la tabla
  // 6: Recuadros negros enfáticos
  // 7: Flecha y texto izquierda
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 7) setStep(step + 1);
  };

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* ================= COLUMNA IZQUIERDA (S_v) ================= */}
        <div className={styles.sideColumn}>
          {/* PASO 1: Círculo S */}
          <div className={`${styles.circleBadge} ${step >= 1 ? styles.visible : styles.hidden}`}>
            <span className={styles.circleText}>S</span>
            <span className={styles.littleV}>v</span>
          </div>

          {/* PASO 7: Flecha + Texto Izquierda */}
          <div className={`${styles.arrowContainer} ${step >= 7 ? styles.visible : styles.hidden}`}>
            <svg className={`${styles.arrowIcon} ${styles.arrowIconLeft}`} viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <p className={styles.sideText}>
              Estos son los UNICOS<br />verbos especiales que<br />existen
            </p>
          </div>
        </div>

        {/* ================= TABLA CENTRAL ================= */}
        <div className={styles.tableContainer}>
          {TABLE_DATA.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              
              {/* Celda Izquierda (PASO 5: Contenido | PASO 6: Borde negro especial) */}
              <div className={`
                ${styles.cell} ${styles.cellLeft} 
                ${step >= 5 ? styles.visible : styles.hidden}
                ${step >= 6 && row.isBoxLeft ? styles.specialBorderLeft : ''}
              `}>
                {row.left.map((item, i) => (
                  <React.Fragment key={i}>
                    <span className={styles.yellowHighlight}>{item}</span>
                    {i < row.left.length - 1 && ' / '}
                  </React.Fragment>
                ))}
              </div>

              {/* Celda Derecha (PASO 3: Contenido | PASO 6: Borde negro especial) */}
              <div className={`
                ${styles.cell} 
                ${step >= 3 ? styles.visible : styles.hidden}
                ${step >= 6 && row.isBoxRight ? styles.specialBorderRight : ''}
              `}>
                {row.right.map((item, i) => (
                  <React.Fragment key={i}>
                    <span className={styles.yellowHighlight}>{item}</span>
                    {i < row.right.length - 1 && ' / '}
                  </React.Fragment>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* ================= COLUMNA DERECHA (N_v) ================= */}
        <div className={styles.sideColumn}>
          {/* PASO 2: Círculo N */}
          <div className={`${styles.circleBadge} ${step >= 2 ? styles.visible : styles.hidden}`}>
            <span className={styles.circleText}>N</span>
            <span className={styles.littleV}>v</span>
          </div>

          {/* PASO 4: Flecha + Texto Derecha */}
          <div className={`${styles.arrowContainer} ${step >= 4 ? styles.visible : styles.hidden}`}>
            <svg className={`${styles.arrowIcon} ${styles.arrowIconRight}`} viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <p className={styles.sideText}>
              Estos y el resto de verbos<br />que existen en ingles son<br />Normales
            </p>
          </div>
        </div>

      </div>

      {/* Botón Flotante para avanzar los 7 pasos */}
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

export default SlideThirty;