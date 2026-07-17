import React, { useState, useRef, useEffect } from 'react';
import styles from './SlideTwo.module.css';

// Lista de pronombres y las opciones correctas para "Do"
const PRONOUNS = [
  { id: 'I', firstLetter: 'I', rest: '' },
  { id: 'You', firstLetter: 'Y', rest: 'ou' },
  { id: 'We', firstLetter: 'W', rest: 'e' },
  { id: 'They', firstLetter: 'T', rest: 'hey' },
  { id: 'He', firstLetter: 'H', rest: 'e' },
  { id: 'She', firstLetter: 'S', rest: 'he' },
  { id: 'It', firstLetter: 'I', rest: 't' },
];

const CORRECT_ANSWERS = ['I', 'You', 'We', 'They'];

const SlideTwo = () => {
  const [step, setStep] = useState(1); // 1: Solo "Do", 2: "Do" + Pronombres
  const [isDoSelected, setIsDoSelected] = useState(false);
  const [connections, setConnections] = useState([]); // Guarda los IDs conectados
  const [linesData, setLinesData] = useState([]); // Guarda las coordenadas exactas de las líneas

  // Referencias para obtener las coordenadas en pantalla y dibujar
  const containerRef = useRef(null);
  const doRef = useRef(null);
  const pronounRefs = useRef({});

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  // Función para seleccionar la palabra raíz
  const handleSelectDo = () => {
    if (step === 2) setIsDoSelected(!isDoSelected);
  };

  // Función para conectar
  const handleConnect = (pronounId) => {
    if (!isDoSelected) return; // Si "Do" no está seleccionado, no hace nada
    if (connections.includes(pronounId)) return; // Si ya está conectado, lo ignoramos

    // Añadimos la conexión y deseleccionamos "Do" para el siguiente turno
    setConnections([...connections, pronounId]);
    setIsDoSelected(false);
  };

  // Efecto poderoso: Calcula matemáticamente dónde dibujar las líneas cada vez que hay una conexión
  useEffect(() => {
    if (!containerRef.current || !doRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const doRect = doRef.current.getBoundingClientRect();

    const newLines = connections.map(id => {
      const targetRect = pronounRefs.current[id].getBoundingClientRect();
      
      return {
        id,
        // Inicio de la línea (Centro inferior de la palabra "Do")
        startX: (doRect.left + doRect.width / 2) - containerRect.left,
        startY: doRect.bottom - containerRect.top,
        // Fin de la línea (Centro superior de la palabra destino)
        endX: (targetRect.left + targetRect.width / 2) - containerRect.left,
        endY: targetRect.top - containerRect.top,
        // Validación en tiempo real
        isCorrect: CORRECT_ANSWERS.includes(id)
      };
    });

    setLinesData(newLines);
  }, [connections, step]);

  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer} ref={containerRef}>
        
        {/* Lienzo SVG para dibujar las líneas */}
        <svg className={styles.svgCanvas}>
          {linesData.map(line => (
            <line
              key={line.id}
              x1={line.startX}
              y1={line.startY}
              x2={line.endX}
              y2={line.endY}
              stroke={line.isCorrect ? '#22C55E' : '#EF4444'} /* Verde si es correcto, Rojo si es incorrecto */
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* PASO 1: Palabra principal */}
        <div 
          ref={doRef}
          className={`${styles.doWord} ${isDoSelected ? styles.selected : ''}`}
          onClick={handleSelectDo}
        >
          Do
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

      {/* El Clicker para revelar los pronombres */}
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

export default SlideTwo;