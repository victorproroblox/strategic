import React from 'react';
import styles from './SlideThirtyTwo.module.css';

const SlideThirtyTwo = () => {
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* Título arriba a la derecha */}
        <h1 className={styles.formulasTitle}>Fórmulas</h1>

        {/* Insignia central grande (N_v) */}
        <div className={styles.circleBadge}>
          <span className={styles.circleText}>N</span>
          <span className={styles.littleV}>v</span>
        </div>

      </div>
    </div>
  );
};

export default SlideThirtyTwo;