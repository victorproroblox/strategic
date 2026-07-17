import React from 'react';
import styles from './Plans.module.css';

// Componente reutilizable para el icono de check (chulita)
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Plans = () => {
  return (
    <section className={styles.section} id="planes">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Planes de Estudio</h2>
          <p style={{ color: '#4B5563' }}>Invierte en tu futuro. Cancela cuando quieras.</p>
        </div>

        <div className={styles.grid}>
          {/* Plan Básico */}
          <div className={styles.card}>
            <h3 className={styles.planName}>Para Empezar</h3>
            <div className={styles.price}>$19<span>/mes</span></div>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}><CheckIcon /> Acceso a plataforma 24/7</li>
              <li className={styles.featureItem}><CheckIcon /> Ejercicios de gramática</li>
              <li className={styles.featureItem}><CheckIcon /> Soporte por email</li>
            </ul>
            <button className={styles.btn}>Elegir Básico</button>
          </div>

          {/* Plan Pro (Destacado) */}
          <div className={`${styles.card} ${styles.cardPopular}`}>
            <span className={styles.badge}>Más Popular</span>
            <h3 className={styles.planName}>Pro Conversacional</h3>
            <div className={styles.price}>$49<span>/mes</span></div>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}><CheckIcon /> Todo lo del plan Básico</li>
              <li className={styles.featureItem}><CheckIcon /> 4 Clases en vivo al mes</li>
              <li className={styles.featureItem}><CheckIcon /> Revisión de pronunciación (IA)</li>
              <li className={styles.featureItem}><CheckIcon /> Acceso a club de conversación</li>
            </ul>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Empezar Ahora</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;