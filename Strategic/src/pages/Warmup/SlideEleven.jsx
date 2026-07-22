import React, { useState, useRef, useEffect } from 'react';
// ¡Reutilizamos la magia del CSS de la diapositiva 6!
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

const CORRECT_RULES = {
  DoHave: ['I', 'You', 'We', 'They'], // Identificador único para "Do / Have"
  Does: ['He', 'She', 'It'],
  Did: ['I', 'You', 'We', 'They', 'He', 'She', 'It']
};

const SlideEleven = () => {
  const [step, setStep] = useState(1);
  const [activeRoot, setActiveRoot] = useState(null); 
  
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

    setConnections(prev => {
      const isBottom = activeRoot === 'Did';
      return {
        ...prev,
        [pronounId]: {
          ...(prev[pronounId] || {}),
          [isBottom ? 'bottom' : 'top']: activeRoot
        }
      };
    });
    setActiveRoot(null); 
  };

  useEffect(() => {
    const drawLines = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newLines = [];

      Object.entries(connections).forEach(([pronounId, conn]) => {
        const targetRef = pronounRefs.current[pronounId];
        if (!targetRef) return;
        const targetRect = targetRef.getBoundingClientRect();

        // 1. Dibujar línea SUPERIOR (hacia DoHave o Does)
        if (conn.top && rootRefs.current[conn.top]) {
          const rootRef = rootRefs.current[conn.top];
          const rootRect = rootRef.getBoundingClientRect();
          newLines.push({
            id: `${pronounId}-top`,
            startX: (rootRect.left + rootRect.width / 2) - containerRect.left,
            startY: rootRect.bottom - containerRect.top, 
            endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
            endY: targetRect.top - containerRect.top, 
            isCorrect: CORRECT_RULES[conn.top].includes(pronounId)
          });
        }

        // 2. Dibujar línea INFERIOR (hacia Did)
        if (conn.bottom && rootRefs.current[conn.bottom]) {
          const rootRef = rootRefs.current[conn.bottom];
          const rootRect = rootRef.getBoundingClientRect();
          newLines.push({
            id: `${pronounId}-bottom`,
            startX: (rootRect.left + rootRect.width / 2) - containerRect.left,
            startY: rootRect.top - containerRect.top, 
            endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
            endY: targetRect.bottom - containerRect.top,
            isCorrect: CORRECT_RULES[conn.bottom].includes(pronounId)
          });
        }
      });

      setLinesData(newLines);
    };

    drawLines();
    window.addEventListener('resize', drawLines);
    return () => window.removeEventListener('resize', drawLines);
  }, [connections, step]);

  // Función especial para renderizar los textos y detectar si es "DoHave"
  const renderRootWord = (word) => {
    if (word === 'DoHave') {
      return (
        <>
          <span className={styles.yellowLetter}>D</span>o / <span className={styles.yellowLetter}>H</span>ave
        </>
      );
    }
    return (
      <>
        <span className={styles.yellowLetter}>{word[0]}</span>
        {word.slice(1)}
      </>
    );
  };

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
              stroke={line.isCorrect ? '#22C55E' : '#EF4444'}
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* PASO 1: Fila Superior (Do/Have, Does) */}
        <div className={`${styles.topRow} ${step >= 1 ? styles.visible : styles.hidden}`}>
          {['DoHave', 'Does'].map(word => (
            <div 
              key={word}
              ref={el => rootRefs.current[word] = el}
              className={`${styles.rootWord} ${activeRoot === word ? styles.selected : ''}`}
              onClick={() => handleSelectRoot(word)}
              // Aplicamos el borde redondeado amarillo solo si es "DoHave"
              style={word === 'DoHave' ? { border: '3px solid var(--primary-yellow)', borderRadius: '12px' } : {}}
            >
              {renderRootWord(word)}
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

        {/* PASO 1: Fila Inferior (Did) */}
        <div className={`${styles.bottomRow} ${step >= 1 ? styles.visible : styles.hidden}`}>
          <div 
            ref={el => rootRefs.current['Did'] = el}
            className={`${styles.rootWord} ${activeRoot === 'Did' ? styles.selected : ''}`}
            onClick={() => handleSelectRoot('Did')}
          >
            {renderRootWord('Did')}
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

export default SlideEleven;