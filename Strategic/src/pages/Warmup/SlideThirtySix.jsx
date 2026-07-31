import React from 'react';
// Reutilizamos el CSS de la diapositiva 32
import styles from './SlideThirtyOne.module.css';

const SlideThirtySix = () => {
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* Título arriba a la derecha */}
        <h1 className={styles.formulasTitle}>Fórmulas</h1>

        {/* Insignia central grande (S_v) */}
        <div className={styles.circleBadge}>
          <span className={styles.circleText}>S</span>
          <span className={styles.littleV}>v</span>
        </div>

      </div>
    </div>
  );
};

export default SlideThirtySix;