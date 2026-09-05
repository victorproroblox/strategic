import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from './icons';
import styles from './GamePageLayout.module.css';

// Cabecera mínima compartida por todas las pantallas de juego:
// enlace de regreso al hub + título + tema. El contenido del juego va como children.
// "contentClassName" es opcional: cada juego puede pasar su propia clase para
// darle un fondo/estilo particular al área de contenido (ej. la textura de
// Lego), sin que este layout genérico sepa nada de eso.
const GamePageLayout = ({ title, topic, children, contentClassName = '' }) => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <Link to="/juegos" className={styles.backLink}>
          <ChevronLeftIcon className={styles.backIcon} />
          Juegos
        </Link>
        <div className={styles.titleBlock}>
          <span className={styles.title}>{title}</span>
          {topic && <span className={styles.topicBadge}>{topic}</span>}
        </div>
      </header>

      <main className={`${styles.content} ${contentClassName}`}>{children}</main>
    </div>
  );
};

export default GamePageLayout;
