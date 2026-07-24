import React, { useState, useRef, useEffect } from 'react';
import styles from './SlideTwentyOne.module.css';

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
  Am: ['I'],
  Are: ['You', 'We', 'They']
};

const SlideTwentyOne = () => {
  const [step, setStep] = useState(1);
  const [activeRoot, setActiveRoot] = useState(null); // 'Am' o 'Are'
  
  const [connections, setConnections] = useState({}); 
  const [linesData, setLinesData] = useState([]);

  const containerRef = useRef(null);
  const rootRefs = useRef({}); 
  const pronounRefs = useRef({});

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleSelectRoot = (word) => {
    if (step === 2) {
      setActiveRoot(prev => prev === word ? null : word);
    }
  };

  const handleConnect = (pronounId) => {
    if (!activeRoot) return;

    const rootWord = activeRoot;
    const isCorrect = CORRECT_RULES[rootWord]?.includes(pronounId);

    setConnections(prev => ({
      ...prev,
      [pronounId]: rootWord
    }));
    setActiveRoot(null);

    // Si la conexión es incorrecta, la línea roja se desvanece y se quita para permitir reintentar
    if (!isCorrect) {
      setTimeout(() => {
        setConnections(prev => {
          if (prev[pronounId] !== rootWord) return prev;
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
      const newLines = [];

      Object.entries(connections).forEach(([pronounId, rootWord]) => {
        const rootRef = rootRefs.current[rootWord];
        const targetRef = pronounRefs.current[pronounId];
        
        if (!rootRef || !targetRef) return;
        
        const rootRect = rootRef.getBoundingClientRect();
        const targetRect = targetRef.getBoundingClientRect();

        const isCorrect = CORRECT_RULES[rootWord]?.includes(pronounId);

        newLines.push({
          id: `${pronounId}-${rootWord}`,
          // Sale del centro inferior de la caja de arriba
          startX: (rootRect.left + rootRect.width / 2) - containerRect.left,
          startY: rootRect.bottom - containerRect.top,
          // Llega al centro superior del pronombre
          endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
          endY: targetRect.top - containerRect.top,
          isCorrect
        });
      });

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

        {/* PASO 1: Fila Superior (Am, Are) */}
        <div className={`${styles.topRow} ${step >= 1 ? styles.visible : styles.hidden}`}>
          {['Am', 'Are'].map(word => (
            <div 
              key={word}
              ref={el => rootRefs.current[word] = el}
              className={`${styles.wordBox} ${activeRoot === word ? styles.selected : ''}`}
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

export default SlideTwentyOne;