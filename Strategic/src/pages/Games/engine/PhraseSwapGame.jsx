import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS, SwapIcon, EyeIcon } from '../icons';
import styles from './PhraseSwapGame.module.css';

// Elige un índice al azar del banco, distinto del actual (nunca se repite la palabra).
const pickRandomIndex = (bankLength, currentIndex) => {
  if (bankLength <= 1) return 0;
  let next = currentIndex;
  while (next === currentIndex) {
    next = Math.floor(Math.random() * bankLength);
  }
  return next;
};

// Estilo de la ficha según su rol gramatical, no según el idioma:
// el sujeto siempre se ve verde, el verbo siempre amarillo, en ambos idiomas.
const ROLE_CLASS = {
  sujeto: 'pieceSujeto',
  verbo: 'pieceVerbo',
};

// La "ficha" de Lego: la única palabra que cambia. Nunca muestra las opciones
// vecinas, solo la palabra actual entrando/saliendo con una animación corta.
const Piece = ({ word, lang, role }) => {
  const Icon = word?.icono ? ICONS[word.icono] : null;
  const text = word ? word[lang] : '';

  return (
    <span className={`${styles.piece} ${styles[ROLE_CLASS[role]] || ''}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={text}
          className={styles.pieceInner}
          initial={{ y: 14, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -14, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
        >
          {Icon && <Icon className={styles.pieceIcon} />}
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// Divide la plantilla en texto fijo + piezas intercambiables.
// "{slot}" renderiza la ficha visual del slot (con su color de rol).
// "{slot.campo}" renderiza texto plano derivado de la palabra actual de ese slot
// (ej. "{sujeto.conjEs}" = la conjugación de "querer" que corresponde al sujeto elegido),
// así la concordancia sujeto-verbo siempre es correcta: no se arma con lógica de
// gramática, se lee directamente del dato curado para ese sujeto.
const renderTemplate = (template, slots, bancos, indices, lang) => {
  const parts = template.split(/(\{[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)?\})/g);

  return parts.map((part, i) => {
    const match = part.match(/^\{([a-zA-Z0-9_]+)(?:\.([a-zA-Z0-9_]+))?\}$/);
    if (!match) return <React.Fragment key={i}>{part}</React.Fragment>;

    const [, slotId, field] = match;
    const slot = slots.find((s) => s.id === slotId);
    if (!slot) return null;

    const bank = bancos[slot.banco] || [];
    const word = bank[indices[slotId] ?? 0];

    if (field) {
      return <React.Fragment key={i}>{word ? word[field] : ''}</React.Fragment>;
    }

    return <Piece key={slotId} word={word} lang={lang} role={slotId} />;
  });
};

// Motor genérico: recibe la config (plantilla + slots + bancos) y renderiza la
// frase a partir de ella. No sabe nada de verbos, pronombres, ni del tema.
//
// Comportamiento: solo el inglés se muestra de entrada. "Alternar" vuelve a
// sortear TODOS los slots activos a la vez (hoy: sujeto + verbo). "Revelar"
// muestra la traducción al español debajo, y se oculta de nuevo en el
// siguiente "Alternar" para no dejar pistas de la frase anterior.
const PhraseSwapGame = ({ config }) => {
  const { plantilla, slots, bancos } = config;
  const activeSlots = slots.filter((s) => s.activo);

  const [indices, setIndices] = useState(() => {
    const initial = {};
    slots.forEach((slot) => {
      const bank = bancos[slot.banco] || [];
      initial[slot.id] = bank.length ? Math.floor(Math.random() * bank.length) : 0;
    });
    return initial;
  });

  const [revealed, setRevealed] = useState(false);

  const handleAlternar = () => {
    setIndices((prev) => {
      const next = { ...prev };
      activeSlots.forEach((slot) => {
        const bank = bancos[slot.banco] || [];
        next[slot.id] = pickRandomIndex(bank.length, prev[slot.id]);
      });
      return next;
    });
    setRevealed(false);
  };

  return (
    <div className={styles.stage}>
      <div className={styles.sentenceBlock}>
        <span className={styles.langLabel}>English</span>
        <p className={styles.sentence}>
          {renderTemplate(plantilla.en, slots, bancos, indices, 'en')}
        </p>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.alternarBtn} onClick={handleAlternar}>
          <SwapIcon className={styles.alternarIcon} />
          Alternar
        </button>

        {!revealed && (
          <button
            type="button"
            className={styles.revelarBtn}
            onClick={() => setRevealed(true)}
          >
            <EyeIcon className={styles.revelarIcon} />
            Revelar
          </button>
        )}
      </div>

      <AnimatePresence>
        {revealed && (
          <motion.div
            className={styles.revealBlock}
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.sentenceBlock}>
              <span className={styles.langLabel}>Español</span>
              <p className={styles.sentence}>
                {renderTemplate(plantilla.es, slots, bancos, indices, 'es')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhraseSwapGame;
