import React, { useState, useRef, useEffect } from 'react';
import styles from './SlideSix.module.css';

const PRONOUNS = [
  { id: 'I', firstLetter: 'I', rest: '' },
  { id: 'You', firstLetter: 'Y', rest: 'ou' },
  { id: 'We', firstLetter: 'W', rest: 'e' },
  { id: 'They', firstLetter: 'T', rest: 'hey' },
  { id: 'He', firstLetter: 'H', rest: 'e' },
  { id: 'She', firstLetter: 'S', rest: 'he' },
  { id: 'It', firstLetter: 'I', rest: 't' },
];

const SlideTwentyEight = () => {
  // Step 1: Muestra Was conectado arriba
  // Step 2: Dibuja las conexiones inferiores de Were
  const [step, setStep] = useState(1);
  const [topLines, setTopLines] = useState([]);
  const [bottomLines, setBottomLines] = useState([]);

  const containerRef = useRef(null);
  const wasRef = useRef(null);
  const wereRef = useRef(null);
  const pronounRefs = useRef({});

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  useEffect(() => {
    const drawLines = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      // 1. Líneas de Was (I, He, She, It) -> Siempre visibles desde Paso 1
      if (wasRef.current) {
        const wasRect = wasRef.current.getBoundingClientRect();
        const wasTargets = ['I', 'He', 'She', 'It'];

        const lines = wasTargets.map(id => {
          const targetRef = pronounRefs.current[id];
          if (!targetRef) return null;
          const targetRect = targetRef.getBoundingClientRect();

          return {
            id: `was-${id}`,
            startX: (wasRect.left + wasRect.width / 2) - containerRect.left,
            startY: wasRect.bottom - containerRect.top,
            endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
            endY: targetRect.top - containerRect.top,
          };
        }).filter(Boolean);

        setTopLines(lines);
      }

      // 2. Líneas de Were (You, We, They) -> Visibles en Paso 2
      if (step >= 2 && wereRef.current) {
        const wereRect = wereRef.current.getBoundingClientRect();
        const wereTargets = ['You', 'We', 'They'];

        const lines = wereTargets.map(id => {
          const targetRef = pronounRefs.current[id];
          if (!targetRef) return null;
          const targetRect = targetRef.getBoundingClientRect();

          return {
            id: `were-${id}`,
            startX: (wereRect.left + wereRect.width / 2) - containerRect.left,
            startY: wereRect.top - containerRect.top,
            endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
            endY: targetRect.bottom - containerRect.top,
          };
        }).filter(Boolean);

        setBottomLines(lines);
      } else {
        setBottomLines([]);
      }
    };

    drawLines();
    setTimeout(drawLines, 50);

    window.addEventListener('resize', drawLines);
    return () => window.removeEventListener('resize', drawLines);
  }, [step]);

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer} ref={containerRef}>
        
        <svg className={styles.svgCanvas}>
          {/* Líneas superiores (Was) */}
          {topLines.map(line => (
            <line
              key={line.id}
              x1={line.startX}
              y1={line.startY}
              x2={line.endX}
              y2={line.endY}
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}

          {/* Líneas inferiores (Were) */}
          {bottomLines.map(line => (
            <line
              key={line.id}
              x1={line.startX}
              y1={line.startY}
              x2={line.endX}
              y2={line.endY}
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              className={styles.visible}
            />
          ))}
        </svg>

        {/* PASO 1: Fila Superior (Was) */}
        <div className={`${styles.topRow} ${styles.visible}`}>
          <div 
            ref={wasRef}
            className={styles.rootWord}
            style={{ border: '3px solid var(--primary-yellow)', borderRadius: '12px' }}
          >
            Was
          </div>
        </div>

        {/* PASO 1: Fila de Pronombres */}
        <div className={`${styles.pronounsRow} ${styles.visible}`}>
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

        {/* PASO 1: Fila Inferior (Were) */}
        <div className={`${styles.bottomRow} ${styles.visible}`}>
          <div 
            ref={wereRef}
            className={styles.rootWord}
            style={{ border: '3px solid var(--primary-yellow)', borderRadius: '12px' }}
          >
            Were
          </div>
        </div>

      </div>

      {step < 2 && (
        <button className={styles.stepBtn} onClick={handleNextStep}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default SlideTwentyEight;