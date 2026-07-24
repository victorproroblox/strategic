import React, { useState, useRef, useEffect } from 'react';
// Reutilizamos el CSS de la diapositiva 6
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
  DoHave: ['I', 'You', 'We', 'They'], 
  DoesHas: ['He', 'She', 'It'], 
  DidHad: ['I', 'You', 'We', 'They', 'He', 'She', 'It'] // Actualizado para incluir "Did / Had"
};

const SlideSeventeen = () => {
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

    // Ahora validamos con 'DidHad'
    const isBottom = activeRoot === 'DidHad';
    const key = isBottom ? 'bottom' : 'top';
    const rootWord = activeRoot;
    const isCorrect = CORRECT_RULES[rootWord].includes(pronounId);

    setConnections(prev => ({
      ...prev,
      [pronounId]: {
        ...(prev[pronounId] || {}),
        [key]: rootWord
      }
    }));
    setActiveRoot(null);

    if (!isCorrect) {
      setTimeout(() => {
        setConnections(prev => {
          const entry = prev[pronounId];
          if (!entry || entry[key] !== rootWord) return prev;
          const restEntry = { ...entry };
          delete restEntry[key];
          if (Object.keys(restEntry).length === 0) {
            const next = { ...prev };
            delete next[pronounId];
            return next;
          }
          return { ...prev, [pronounId]: restEntry };
        });
      }, 800);
    }
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

        // 1. Dibujar línea SUPERIOR
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

        // 2. Dibujar línea INFERIOR
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

  // Función actualizada para renderizar las 3 combinaciones
  const renderRootWord = (word) => {
    if (word === 'DoHave') {
      return (
        <>
          <span className={styles.yellowLetter}>D</span>o / <span className={styles.yellowLetter}>H</span>ave
        </>
      );
    }
    if (word === 'DoesHas') {
      return (
        <>
          <span className={styles.yellowLetter}>D</span>oes / <span className={styles.yellowLetter}>H</span>as
        </>
      );
    }
    if (word === 'DidHad') {
      return (
        <>
          <span className={styles.yellowLetter}>D</span>id / <span className={styles.yellowLetter}>H</span>ad
        </>
      );
    }
    return word;
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
              stroke={line.isCorrect ? '#22C55E' : '#DC2626'}
              strokeWidth="4"
              strokeLinecap="round"
              className={!line.isCorrect ? styles.lineWrong : ''}
            />
          ))}
        </svg>

        {/* PASO 1: Fila Superior (Do/Have, Does/Has) */}
        <div className={`${styles.topRow} ${step >= 1 ? styles.visible : styles.hidden}`}>
          {['DoHave', 'DoesHas'].map(word => (
            <div 
              key={word}
              ref={el => rootRefs.current[word] = el}
              className={`${styles.rootWord} ${activeRoot === word ? styles.selected : ''}`}
              onClick={() => handleSelectRoot(word)}
              style={{ border: '3px solid var(--primary-yellow)', borderRadius: '12px' }}
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

        {/* PASO 1: Fila Inferior (Did/Had) */}
        <div className={`${styles.bottomRow} ${step >= 1 ? styles.visible : styles.hidden}`}>
          <div
            ref={el => rootRefs.current['DidHad'] = el}
            className={`${styles.rootWord} ${activeRoot === 'DidHad' ? styles.selected : ''}`}
            onClick={() => handleSelectRoot('DidHad')}
            style={{ border: '3px solid var(--primary-yellow)', borderRadius: '12px' }}
          >
            {renderRootWord('DidHad')}
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

export default SlideSeventeen;