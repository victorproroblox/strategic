import React, { useState, useRef, useEffect } from 'react';
import styles from './SlideFour.module.css';

const PRONOUNS = [
  { id: 'I', firstLetter: 'I', rest: '' },
  { id: 'You', firstLetter: 'Y', rest: 'ou' },
  { id: 'We', firstLetter: 'W', rest: 'e' },
  { id: 'They', firstLetter: 'T', rest: 'hey' },
  { id: 'He', firstLetter: 'H', rest: 'e' },
  { id: 'She', firstLetter: 'S', rest: 'he' },
  { id: 'It', firstLetter: 'I', rest: 't' },
];

const CORRECT_RULES = {
  Do: ['I', 'You', 'We', 'They'],
  Does: ['He', 'She', 'It']
};

const SlideFour = () => {
  const [step, setStep] = useState(1); 
  const [activeRoot, setActiveRoot] = useState(null); // Puede ser 'Do', 'Does', o null
  
  // Usamos un objeto en lugar de un arreglo. Ej: { I: 'Do', He: 'Does' }
  // Esto permite que si te equivocas y conectas 'I' con 'Does', al conectarlo a 'Do' se sobreescriba.
  const [connections, setConnections] = useState({}); 
  const [linesData, setLinesData] = useState([]);

  const containerRef = useRef(null);
  const rootRefs = useRef({}); // Guardará las referencias tanto de "Do" como de "Does"
  const pronounRefs = useRef({});

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleSelectRoot = (word) => {
    if (step === 2) {
      // Si haces clic en el mismo, se deselecciona. Si haces clic en el otro, cambia.
      setActiveRoot(prev => prev === word ? null : word);
    }
  };

  const handleConnect = (pronounId) => {
    if (!activeRoot) return; // Obligamos a seleccionar "Do" o "Does" primero

    const rootWord = activeRoot;
    const isCorrect = CORRECT_RULES[rootWord].includes(pronounId);

    setConnections(prev => ({
      ...prev,
      [pronounId]: rootWord // Asigna o sobreescribe la conexión
    }));
    setActiveRoot(null); // Deseleccionamos para el siguiente turno

    // Si la conexión es incorrecta, la línea roja se desvanece y se quita para permitir reintentar
    if (!isCorrect) {
      setTimeout(() => {
        setConnections(prev => {
          if (prev[pronounId] !== rootWord) return prev; // ya se corrigió mientras tanto
          const next = { ...prev };
          delete next[pronounId];
          return next;
        });
      }, 800);
    }
  };

  useEffect(() => {
    const drawLines = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      // Convertimos el objeto de conexiones en un arreglo de líneas para el SVG
      const newLines = Object.entries(connections).map(([pronounId, rootWord]) => {
        const rootRef = rootRefs.current[rootWord];
        const targetRef = pronounRefs.current[pronounId];

        if (!rootRef || !targetRef) return null;

        const rootRect = rootRef.getBoundingClientRect();
        const targetRect = targetRef.getBoundingClientRect();

        const isCorrect = CORRECT_RULES[rootWord].includes(pronounId);

        return {
          id: pronounId, // Usamos el pronombre como ID único de la línea
          startX: (rootRect.left + rootRect.width / 2) - containerRect.left,
          startY: rootRect.bottom - containerRect.top,
          endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
          endY: targetRect.top - containerRect.top,
          isCorrect
        };
      }).filter(Boolean); // Quitamos nulos si los hay

      setLinesData(newLines);
    };

    drawLines();
    window.addEventListener('resize', drawLines);
    return () => window.removeEventListener('resize', drawLines);
  }, [connections, step]);

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer} ref={containerRef}>
        
        <svg className={styles.svgCanvas}>
          {linesData.map(line => (
            <line
              key={line.id}
              x1={line.startX}
              y1={line.startY}
              x2={line.endX}
              y2={line.endY}
              stroke={line.isCorrect ? '#22C55E' : '#DC2626'}
              strokeWidth="4"
              strokeLinecap="round"
              className={!line.isCorrect ? styles.lineWrong : ''}
            />
          ))}
        </svg>

        {/* PASO 1: Fila con "Do" y "Does" */}
        <div className={styles.topRow}>
          {['Do', 'Does'].map(word => (
            <div 
              key={word}
              ref={el => rootRefs.current[word] = el}
              className={`${styles.rootWord} ${activeRoot === word ? styles.selected : ''}`}
              onClick={() => handleSelectRoot(word)}
            >
              {word}
            </div>
          ))}
        </div>

        {/* PASO 2: Fila de pronombres */}
        <div className={`${styles.pronounsRow} ${step >= 2 ? styles.visible : styles.hidden}`}>
          {PRONOUNS.map((pronoun) => (
            <div
              key={pronoun.id}
              ref={(el) => pronounRefs.current[pronoun.id] = el}
              className={styles.pronounItem}
              onClick={() => handleConnect(pronoun.id)}
            >
              <span className={styles.redLetter}>{pronoun.firstLetter}</span>
              <span>{pronoun.rest}</span>
            </div>
          ))}
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

export default SlideFour;