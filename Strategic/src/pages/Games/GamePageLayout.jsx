import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from './icons';
import styles from './GamePageLayout.module.css';

// Cabecera mínima compartida por todas las pantallas de juego:
// enlace de regreso al hub + título + tema. El contenido del juego va como children.
const GamePageLayout = ({ title, topic, children }) => {
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

      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default GamePageLayout;
