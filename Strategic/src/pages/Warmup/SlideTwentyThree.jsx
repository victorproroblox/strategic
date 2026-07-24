import React, { useState, useRef, useEffect } from 'react';
// ¡Reutilizamos el CSS de la Diapositiva 21!
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

// Conexiones que ya vienen hechas por defecto
const PREFILLED_CONNECTIONS = {
  I: 'Am',
  You: 'Are',
  We: 'Are',
  They: 'Are'
};

// Reglas de validación para las conexiones interactivas
const CORRECT_RULES = {
  Am: ['I'],
  Are: ['You', 'We', 'They'],
  Is: ['He', 'She', 'It']
};

const SlideTwentyThree = () => {
  const [step, setStep] = useState(1);
  const [activeRoot, setActiveRoot] = useState(null); 
  
  // Inicializamos el estado con las conexiones pre-hechas
  const [connections, setConnections] = useState(PREFILLED_CONNECTIONS); 
  const [linesData, setLinesData] = useState([]);

  const containerRef = useRef(null);
  const rootRefs = useRef({}); 
  const pronounRefs = useRef({});

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleSelectRoot = (word) => {
    // Solo permitimos seleccionar "Is"
    if (step === 2 && word === 'Is') {
      setActiveRoot(prev => prev === word ? null : word);
    }
  };

  const handleConnect = (pronounId) => {
    if (!activeRoot) return;
    // Si el pronombre ya tiene una conexión pre-hecha, no hacemos nada
    if (PREFILLED_CONNECTIONS[pronounId]) return;

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
      // Las líneas se dibujan hasta que aparecen los pronombres (Paso 2)
      if (step < 2 || !containerRef.current) {
        setLinesData([]);
        return;
      }
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const newLines = [];

      Object.entries(connections).forEach(([pronounId, rootWord]) => {
        const rootRef = rootRefs.current[rootWord];
        const targetRef = pronounRefs.current[pronounId];
        
        if (!rootRef || !targetRef) return;
        
        const rootRect = rootRef.getBoundingClientRect();
        const targetRect = targetRef.getBoundingClientRect();

        const isPrefilled = PREFILLED_CONNECTIONS[pronounId] === rootWord;
        const isCorrect = CORRECT_RULES[rootWord]?.includes(pronounId);

        newLines.push({
          id: `${pronounId}-${rootWord}`,
          startX: (rootRect.left + rootRect.width / 2) - containerRect.left,
          startY: rootRect.bottom - containerRect.top,
          endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
          endY: targetRect.top - containerRect.top,
          isPrefilled,
          isCorrect
        });
      });

      setLinesData(newLines);
    };

    drawLines();
    // Agregamos un pequeño delay para que las Refs terminen de cargar en el DOM al pasar al paso 2
    setTimeout(drawLines, 50); 
    
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
              // Si es pre-hecha es negra, si es nueva evalúa si es verde (correcta) o roja (incorrecta)
              stroke={line.isPrefilled ? '#000000' : (line.isCorrect ? '#22C55E' : '#DC2626')}
              strokeWidth="4"
              strokeLinecap="round"
              className={!line.isPrefilled && !line.isCorrect ? styles.lineWrong : ''}
            />
          ))}
        </svg>

        {/* PASO 1: Fila Superior (Am, Are, Is) */}
        <div className={`${styles.topRow} ${step >= 1 ? styles.visible : styles.hidden}`}>
          {['Am', 'Are', 'Is'].map(word => (
            <div 
              key={word}
              ref={el => rootRefs.current[word] = el}
              className={`${styles.wordBox} ${activeRoot === word ? styles.selected : ''}`}
              onClick={() => handleSelectRoot(word)}
              // Solo aplicamos el cursor pointer al interactivo. Empujamos "Is" a la derecha.
              style={{
                cursor: word === 'Is' ? 'pointer' : 'default',
                ...(word === 'Is' && { marginLeft: 'auto', marginRight: '5%' })
              }}
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

export default SlideTwentyThree;