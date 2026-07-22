import React, { useState, useRef, useEffect } from 'react';
import styles from './SlideNineteen.module.css';

const VERBS = ['Am', 'Are', 'Is'];

const SlideNineteen = () => {
  // step 1: Aparece "Be"
  // step 2: Aparecen "Am", "Are", "Is"
  // step 3: Se dibujan las líneas automáticamente
  const [step, setStep] = useState(1);
  const [linesData, setLinesData] = useState([]);

  const containerRef = useRef(null);
  const sourceRef = useRef(null); // Referencia de "Be"
  const targetRefs = useRef({}); // Referencias de "Am", "Are", "Is"

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  useEffect(() => {
    const drawLines = () => {
      // Si no es el paso 3, limpiamos las líneas
      if (step < 3 || !containerRef.current || !sourceRef.current) {
        setLinesData([]);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const sourceRect = sourceRef.current.getBoundingClientRect();

      const newLines = VERBS.map(verb => {
        const targetRef = targetRefs.current[verb];
        if (!targetRef) return null;
        
        const targetRect = targetRef.getBoundingClientRect();

        return {
          id: verb,
          // Inicio: Centro inferior de la caja "Be"
          startX: (sourceRect.left + sourceRect.width / 2) - containerRect.left,
          startY: sourceRect.bottom - containerRect.top,
          // Fin: Centro superior de la caja de abajo
          endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
          endY: targetRect.top - containerRect.top
        };
      }).filter(Boolean);

      setLinesData(newLines);
    };

    drawLines();
    window.addEventListener('resize', drawLines);
    return () => window.removeEventListener('resize', drawLines);
  }, [step]);

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer} ref={containerRef}>
        
        {/* Lienzo de las líneas SVG */}
        <svg className={styles.svgCanvas}>
          {linesData.map(line => (
            <line
              key={line.id}
              x1={line.startX}
              y1={line.startY}
              x2={line.endX}
              y2={line.endY}
              stroke="#000000" // Líneas negras
              strokeWidth="3"
              strokeLinecap="round"
              className={styles.visible} // Animación de aparición
            />
          ))}
        </svg>

        {/* PASO 1: Caja "Be" */}
        <div 
          ref={sourceRef}
          className={`${styles.beBox} ${step >= 1 ? styles.visible : styles.hidden}`}
        >
          Be
        </div>

        {/* PASO 2: Cajas "Am", "Are", "Is" */}
        <div className={`${styles.bottomRow} ${step >= 2 ? styles.visible : styles.hidden}`}>
          {VERBS.map((verb) => (
            <div
              key={verb}
              ref={(el) => targetRefs.current[verb] = el}
              className={styles.verbBox}
            >
              {verb}
            </div>
          ))}
        </div>

      </div>

      {/* Botón Flotante para avanzar pasos */}
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

export default SlideNineteen;