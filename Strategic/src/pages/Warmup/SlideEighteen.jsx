import React, { useState, useRef, useEffect } from 'react';
import styles from './SlideEighteen.module.css';

const PRONOUNS = [
  { id: 'I', firstLetter: 'I', rest: '' },
  { id: 'You', firstLetter: 'Y', rest: 'ou' },
  { id: 'We', firstLetter: 'W', rest: 'e' },
  { id: 'They', firstLetter: 'T', rest: 'hey' },
  { id: 'He', firstLetter: 'H', rest: 'e' },
  { id: 'She', firstLetter: 'S', rest: 'he' },
  { id: 'It', firstLetter: 'I', rest: 't' },
];

const SlideEighteen = () => {
  // step 1: Aparece "Be"
  // step 2: Aparece "Ser / Estar"
  // step 3: Aparecen los pronombres
  // step 4: Las líneas se dibujan solas
  const [step, setStep] = useState(1);
  const [linesData, setLinesData] = useState([]);

  const containerRef = useRef(null);
  const sourceRef = useRef(null); // Referencia de la caja "Ser / Estar"
  const pronounRefs = useRef({}); // Referencias de los pronombres

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  // Efecto que dibuja las líneas automáticamente cuando llegamos al paso 4
  useEffect(() => {
    const drawLines = () => {
      // Si aún no es el paso 4, no dibujamos nada
      if (step < 4 || !containerRef.current || !sourceRef.current) {
        setLinesData([]);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const sourceRect = sourceRef.current.getBoundingClientRect();

      const newLines = PRONOUNS.map(pronoun => {
        const targetRef = pronounRefs.current[pronoun.id];
        if (!targetRef) return null;
        
        const targetRect = targetRef.getBoundingClientRect();

        return {
          id: pronoun.id,
          // Inicio: Centro inferior de la caja "Ser / Estar"
          startX: (sourceRect.left + sourceRect.width / 2) - containerRect.left,
          startY: sourceRect.bottom - containerRect.top,
          // Fin: Centro superior del pronombre
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
        
        {/* Lienzo de las líneas (solo se ven si existen en el estado) */}
        <svg className={styles.svgCanvas}>
          {linesData.map(line => (
            <line
              key={line.id}
              x1={line.startX}
              y1={line.startY}
              x2={line.endX}
              y2={line.endY}
              stroke="#000000" // Líneas negras como en la imagen
              strokeWidth="3"
              strokeLinecap="round"
              className={styles.visible} // Animación de aparición
            />
          ))}
        </svg>

        {/* Sección Superior: Textos Principales */}
        <div className={styles.topSection}>
          {/* PASO 1 */}
          <div className={`${styles.beBox} ${step >= 1 ? styles.visible : styles.hidden}`}>
            Be
          </div>
          
          {/* PASO 2 */}
          <div 
            ref={sourceRef}
            className={`${styles.serEstarBox} ${step >= 2 ? styles.visible : styles.hidden}`}
          >
            Ser / Estar
          </div>
        </div>

        {/* Sección Inferior: Pronombres */}
        {/* PASO 3 */}
        <div className={`${styles.pronounsRow} ${step >= 3 ? styles.visible : styles.hidden}`}>
          {PRONOUNS.map((pronoun) => (
            <div
              key={pronoun.id}
              ref={(el) => pronounRefs.current[pronoun.id] = el}
              className={styles.pronounItem}
            >
              <span className={styles.redLetter}>{pronoun.firstLetter}</span>
              <span>{pronoun.rest}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Botón Flotante para avanzar pasos */}
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

export default SlideEighteen;