import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Features from '../../components/Features/Features';
import Plans from '../../components/Plans/Plans';
import Footer from '../../components/Footer/Footer'; // <- Nueva Importación
import styles from './Home.module.css';

// Contenedor con stagger: cada hijo directo se anima 0.15s después del anterior
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Sección Hero */}
        <section className={styles.heroSection} aria-labelledby="hero-title">
          <div className={styles.shapeSquare} aria-hidden="true"></div>
          <div className={styles.shapeCircle} aria-hidden="true"></div>
          <div className={styles.shapeSmallRect} aria-hidden="true"></div>
          <div className={styles.sideTextLeft}>Aprende desde cualquier lugar</div>
          <div className={styles.sideTextRight}>Metodología comprobada</div>

          <motion.div
            className={styles.centerContent}
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.framedBox} variants={heroItem}>
              <h1 id="hero-title" className={styles.title}>
                Domina<br />El Inglés
              </h1>
            </motion.div>

            <motion.p className={styles.subtitle} variants={heroItem}>
              Fluidez garantizada • Clases dinámicas
            </motion.p>
            <motion.p
              className={styles.subtitle}
              variants={heroItem}
              style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '3rem' }}
            >
              Un método estructurado diseñado para que pienses y hables en inglés desde el primer día.
            </motion.p>

            <motion.button
              className={styles.visitBtn}
              variants={heroItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Comenzar Ahora !
            </motion.button>
          </motion.div>
        </section>

        {/* Secciones de Scroll */}
        <Features />
        <Plans />
      </main>

      {/* Footer al final, fuera de <main> por semántica */}
      <Footer />
    </>
  );
};

export default Home;