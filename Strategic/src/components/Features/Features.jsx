import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.section} id="sobre-mi">
      <div className={styles.container}>
        <span className={styles.label}>Nuestra Metodología</span>
        <h2 className={styles.title}>No solo aprendas inglés. Aprende a pensar en inglés.</h2>
        <p className={styles.description}>
          Olvídate de las listas interminables de vocabulario y las reglas gramaticales aburridas. 
          Nuestro enfoque se basa en inmersión práctica, conversaciones reales y herramientas modernas 
          para que logres fluidez en tiempo récord.
        </p>
      </div>
    </section>
  );
};

export default Features;