import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const Features = () => {
  return (
    <section className={styles.section} id="sobre-mi">
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.span className={styles.label} variants={item}>Nuestra Metodología</motion.span>
        <motion.h2 className={styles.title} variants={item}>No solo aprendas inglés. Aprende a pensar en inglés.</motion.h2>
        <motion.p className={styles.description} variants={item}>
          Olvídate de las listas interminables de vocabulario y las reglas gramaticales aburridas.
          Nuestro enfoque se basa en inmersión práctica, conversaciones reales y herramientas modernas
          para que logres fluidez en tiempo récord.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Features;