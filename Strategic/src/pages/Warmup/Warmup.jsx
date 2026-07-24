import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Warmup.module.css';
import SlideOne from './SlideOne'; 
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';
import SlideFive from './SlideFive';
import SlideSix from './SlideSix';
import SlideSeven from './SlideSeven';
import SlideEight from './SlideEight';
import SlideNine from './SlideNine';
import SlideTen from './SlideTen';
import SlideEleven from './SlideEleven';
import SlideTwelve from './SlideTwelve';
import SlideThirteen from './SlideThirteen';
import SlideFourteen from './SlideFourteen';
import SlideFifteen from './SlideFifteen';
import SlideSixteen from './SlideSixteen';
import SlideSeventeen from './SlideSeventeen';
import SlideEighteen from './SlideEighteen';
import SlideNineteen from './SlideNineteen';
import SlideTwenty from './SlideTwenty';
import SlideTwentyOne from './SlideTwentyOne';
import SlideTwentyTwo from './SlideTwentyTwo';
import SlideTwentyThree from './SlideTwentyThree';
import SlideTwentyFour from './SlideTwentyFour';
import SlideTwentyFive from './SlideTwentyFive';
import SlideTwentySix from './SlideTwentySix';
import SlideTwentySeven from './SlideTwentySeven';
import SlideTwentyEight from './SlideTwentyEight';
import SlideTwentyNine from './SlideTwentyNine';
import SlideThirty from './SlideThirty';
import SlideThirtyOne from './SlideThirtyOne';
import SlideThirtyTwo from './SlideThirtyTwo';
import SlideThirtyThree from './SlideThirtyThree';
import SlideThirtyFour from './SlideThirtyFour';
import SlideThirtyFive from './SlideThirtyFive';
import SlideThirtySix from './SlideThirtySix';
import SlideThirtySeven from './SlideThirtySeven';
import SlideThirtyEight from './SlideThirtyEight';
import SlideThirtyNine from './SlideThirtyNine';
import SlideForty from './SlideForty';
import SlideFortyOne from './SlideFortyOne';
import SlideFortyTwo from './SlideFortyTwo';

const TOTAL_SLIDES = 42;

const Warmup = () => {
  // Estado que controla si ya empezamos la presentación
  const [hasStarted, setHasStarted] = useState(false);
  // Estado que controla en qué número de diapositiva estamos
  const [currentSlide, setCurrentSlide] = useState(1);

  // Función para avanzar de diapositiva
  const handleNext = () => {
    if (currentSlide < TOTAL_SLIDES) setCurrentSlide(prev => prev + 1);
  };

  // --- VISTA 1: PANTALLA OSCURA DE INTRODUCCIÓN ---
  if (!hasStarted) {
    return (
      <div className={styles.pageWrapper}>
        <Link to="/" className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Salir
        </Link>
        <main className={styles.content}>
          <div className={styles.animationContainer} aria-hidden="true">
            <div className={styles.pulseRing}></div>
            <div className={styles.pulseRing}></div>
            <div className={styles.iconWrapper}>
               <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2L3 10.5V25.5L18 34L33 25.5V10.5L18 2Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M18 13V27M18 13C15.5 11 11.5 10.5 8 12V25C11.5 23.5 15.5 24 18 27M18 13C20.5 11 24.5 10.5 28 12V25C24.5 23.5 20.5 24 18 27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h1 className={styles.title}>Bienvenido al<br/>Calentamiento</h1>
          <p className={styles.subtitle}>Despierta tu mente. 5 minutos de inmersión total.</p>
          <button className={styles.startBtn} onClick={() => setHasStarted(true)}>
            Empezar
          </button>
        </main>
      </div>
    );
  }

  // --- VISTA 2: MOTOR DE PRESENTACIÓN BLANCO ---
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', color: '#1F2937' }}>
      
      {/* Barra superior de control */}
      <header className={styles.presentationHeader}>
        <Link to="/" className={styles.backButton} style={{ position: 'relative', top: 0, left: 0, color: '#111827' }}>
          Finalizar
        </Link>
        
        <span className={styles.progressText}>Ejercicio {currentSlide}</span>

        {currentSlide < TOTAL_SLIDES && (
          <button className={styles.nextBtn} onClick={handleNext}>
            Siguiente
          </button>
        )}
      </header>

      {/* Renderizado dinámico de diapositivas según el número */}
      {currentSlide === 1 && <SlideOne />}
      {currentSlide === 2 && <SlideTwo />}
      {currentSlide === 3 && <SlideThree />}
      {currentSlide === 4 && <SlideFour />}
      {currentSlide === 5 && <SlideFive />}
      {currentSlide === 6 && <SlideSix />}
      {currentSlide === 7 && <SlideSeven />}
      {currentSlide === 8 && <SlideEight />}
      {currentSlide === 9 && <SlideNine />}
      {currentSlide === 10 && <SlideTen />}
      {currentSlide === 11 && <SlideEleven />}
      {currentSlide === 12 && <SlideTwelve />}
      {currentSlide === 13 && <SlideThirteen />}
      {currentSlide === 14 && <SlideFourteen />}
      {currentSlide === 15 && <SlideFifteen />}
      {currentSlide === 16 && <SlideSixteen />}
      {currentSlide === 17 && <SlideSeventeen />}
      {currentSlide === 18 && <SlideEighteen />}
      {currentSlide === 19 && <SlideNineteen />}
      {currentSlide === 20 && <SlideTwenty />}
      {currentSlide === 21 && <SlideTwentyOne />}
      {currentSlide === 22 && <SlideTwentyTwo />}
      {currentSlide === 23 && <SlideTwentyThree />}
      {currentSlide === 24 && <SlideTwentyFour />}
      {currentSlide === 25 && <SlideTwentyFive />}
      {currentSlide === 26 && <SlideTwentySix />}
      {currentSlide === 27 && <SlideTwentySeven />}
      {currentSlide === 28 && <SlideTwentyEight />}
      {currentSlide === 29 && <SlideTwentyNine />}
      {currentSlide === 30 && <SlideThirty />}
      {currentSlide === 31 && <SlideThirtyOne />}
      {currentSlide === 32 && <SlideThirtyTwo />}
      {currentSlide === 33 && <SlideThirtyThree />}
      {currentSlide === 34 && <SlideThirtyFour />}
      {currentSlide === 35 && <SlideThirtyFive />}
      {currentSlide === 36 && <SlideThirtySix />}
      {currentSlide === 37 && <SlideThirtySeven />}
      {currentSlide === 38 && <SlideThirtyEight />}
      {currentSlide === 39 && <SlideThirtyNine />}
      {currentSlide === 40 && <SlideForty />}
      {currentSlide === 41 && <SlideFortyOne />}
      {currentSlide === 42 && <SlideFortyTwo />}

    </div>
  );
};

export default Warmup;