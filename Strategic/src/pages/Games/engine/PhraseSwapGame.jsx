import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS, SwapIcon } from '../icons';
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

// La "ficha" de Lego: la única palabra que cambia. Nunca muestra las opciones
// vecinas, solo la palabra actual entrando/saliendo con una animación corta.
const Piece = ({ word, lang }) => {
  const Icon = word?.icono ? ICONS[word.icono] : null;
  const text = word ? word[lang] : '';

  return (
    <span className={`${styles.piece} ${lang === 'es' ? styles.pieceEs : styles.pieceEn}`}>
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

// Divide la plantilla ("Yo quiero {verbo}") en texto normal + piezas intercambiables.
const renderTemplate = (template, slots, bancos, indices, lang) => {
  const parts = template.split(/(\{[a-zA-Z0-9_]+\})/g);

  return parts.map((part, i) => {
    const match = part.match(/^\{([a-zA-Z0-9_]+)\}$/);
    if (!match) return <React.Fragment key={i}>{part}</React.Fragment>;

    const slot = slots.find((s) => s.id === match[1]);
    if (!slot) return null;

    const bank = bancos[slot.banco] || [];
    const word = bank[indices[slot.id] ?? 0];
    return <Piece key={slot.id} word={word} lang={lang} />;
  });
};

// Motor genérico: recibe la config (plantilla + slots + bancos) y renderiza la
// frase en ambos idiomas con un botón "Alternar" por cada slot activo.
// No sabe nada de verbos, pronombres, ni de ningún tema en particular.
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

  const handleAlternar = (slotId) => {
    const slot = slots.find((s) => s.id === slotId);
    const bank = bancos[slot.banco] || [];
    setIndices((prev) => ({
      ...prev,
      [slotId]: pickRandomIndex(bank.length, prev[slotId]),
    }));
  };

  return (
    <div className={styles.stage}>
      <div className={`${styles.sentenceBlock} ${styles.sentenceEs}`}>
        <span className={styles.langLabel}>Español</span>
        <p className={styles.sentence}>
          {renderTemplate(plantilla.es, slots, bancos, indices, 'es')}
        </p>
      </div>

      <div className={styles.divider} aria-hidden="true" />

      <div className={`${styles.sentenceBlock} ${styles.sentenceEn}`}>
        <span className={styles.langLabel}>English</span>
        <p className={styles.sentence}>
          {renderTemplate(plantilla.en, slots, bancos, indices, 'en')}
        </p>
      </div>

      <div className={styles.actions}>
        {activeSlots.map((slot) => (
          <button
            key={slot.id}
            type="button"
            className={styles.alternarBtn}
            onClick={() => handleAlternar(slot.id)}
          >
            <SwapIcon className={styles.alternarIcon} />
            Alternar
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhraseSwapGame;
