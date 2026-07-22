import React, { useState, useRef, useEffect } from 'react';
import styles from './SlideTwentyFive.module.css';

const PRONOUNS = [
  { id: 'I', firstLetter: 'I', rest: '', verb: 'Am' },
  { id: 'You', firstLetter: 'Y', rest: 'ou', verb: 'Are' },
  { id: 'We', firstLetter: 'W', rest: 'e', verb: 'Are' },
  { id: 'They', firstLetter: 'T', rest: 'hey', verb: 'Are' },
  { id: 'He', firstLetter: 'H', rest: 'e', verb: 'Is' },
  { id: 'She', firstLetter: 'S', rest: 'he', verb: 'Is' },
  { id: 'It', firstLetter: 'I', rest: 't', verb: 'Is' },
];

const VERBS = ['Am', 'Are', 'Is'];

const SlideTwentyFive = () => {
  // step 1: Inicio con todo abajo cargado y sus conexiones inferiores
  // step 2: Aparece "Presente" y se dibujan sus conexiones superiores hacia Am, Are, Is
  const [step, setStep] = useState(1);
  const [bottomLines, setBottomLines] = useState([]);
  const [topLines, setTopLines] = useState([]);

  const containerRef = useRef(null);
  const presentRef = useRef(null);
  const verbRefs = useRef({});
  const pronounRefs = useRef({});

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  useEffect(() => {
    const drawAllLines = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      // 1. Dibujar líneas INFERIORES (Verbos -> Pronombres) - Siempre presentes desde el paso 1
      const newBottomLines = PRONOUNS.map(item => {
        const verbRef = verbRefs.current[item.verb];
        const pronounRef = pronounRefs.current[item.id];
        if (!verbRef || !pronounRef) return null;

        const verbRect = verbRef.getBoundingClientRect();
        const pronounRect = pronounRef.getBoundingClientRect();

        return {
          id: `bottom-${item.id}`,
          startX: (verbRect.left + verbRect.width / 2) - containerRect.left,
          startY: verbRect.bottom - containerRect.top,
          endX: (pronounRect.left + pronounRect.width / 2) - containerRect.left,
          endY: pronounRect.top - containerRect.top
        };
      }).filter(Boolean);

      setBottomLines(newBottomLines);

      // 2. Dibujar líneas SUPERIORES (Presente -> Verbos) - Solo en Paso 2
      if (step >= 2 && presentRef.current) {
        const presentRect = presentRef.current.getBoundingClientRect();

        const newTopLines = VERBS.map(verb => {
          const verbRef = verbRefs.current[verb];
          if (!verbRef) return null;

          const verbRect = verbRef.getBoundingClientRect();

          return {
            id: `top-${verb}`,
            startX: (presentRect.left + presentRect.width / 2) - containerRect.left,
            startY: presentRect.bottom - containerRect.top,
            endX: (verbRect.left + verbRect.width / 2) - containerRect.left,
            endY: verbRect.top - containerRect.top
          };
        }).filter(Boolean);

        setTopLines(newTopLines);
      } else {
        setTopLines([]);
      }
    };

    drawAllLines();
    // Delay ligero para asegurar correcto render de referencias en el DOM
    setTimeout(drawAllLines, 50);

    window.addEventListener('resize', drawAllLines);
    return () => window.removeEventListener('resize', drawAllLines);
  }, [step]);

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer} ref={containerRef}>
        
        {/* Lienzo SVG con las conexiones */}
        <svg className={styles.svgCanvas}>
          {/* Líneas inferiores (Am/Are/Is -> Pronombres) */}
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
            />
          ))}

          {/* Líneas superiores (Presente -> Am/Are/Is) - Aparecen en paso 2 */}
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
              className={styles.visible}
            />
          ))}
        </svg>

        {/* PASO 2: Caja Presente */}
        <div 
          ref={presentRef}
          className={`${styles.presentBox} ${step >= 2 ? styles.visible : styles.hidden}`}
        >
          Presente
        </div>

        {/* PASO 1: Verbos Am, Are, Is */}
        <div className={styles.verbsRow}>
          {VERBS.map(verb => (
            <div
              key={verb}
              ref={el => verbRefs.current[verb] = el}
              className={styles.verbBox}
            >
              {verb}
            </div>
          ))}
        </div>

        {/* PASO 1: Pronombres */}
        <div className={styles.pronounsRow}>
          {PRONOUNS.map(pronoun => (
            <div
              key={pronoun.id}
              ref={el => pronounRefs.current[pronoun.id] = el}
              className={styles.pronounItem}
            >
              <span className={styles.redLetter}>{pronoun.firstLetter}</span>
              <span>{pronoun.rest}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Botón Flotante para avanzar pasos */}
      {step < 2 && (
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

export default SlideTwentyFive;