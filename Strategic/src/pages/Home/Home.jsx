import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Features from '../../components/Features/Features';
import Plans from '../../components/Plans/Plans';
import Footer from '../../components/Footer/Footer'; // <- Nueva Importación
import styles from './Home.module.css';

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

          <div className={styles.centerContent}>
            <div className={styles.framedBox}>
              <h1 id="hero-title" className={styles.title}>
                Domina<br />El Inglés
              </h1>
            </div>
            
            <p className={styles.subtitle}>
              Fluidez garantizada • Clases dinámicas
            </p>
            <p className={styles.subtitle} style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '3rem' }}>
              Un método estructurado diseñado para que pienses y hables en inglés desde el primer día.
            </p>

            <button className={styles.visitBtn}>Comenzar Ahora !</button>
          </div>
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