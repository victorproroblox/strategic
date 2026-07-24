import React from 'react';
import styles from './SlideThirtyOne.module.css';

const SlideThirtyOne = () => {
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideContainer}>
        
        {/* ================= SECCIÓN SUPERIOR ================= */}
        <div className={styles.topSection}>
          
          {/* COLUMNA IZQUIERDA: VERBOS NORMALES */}
          <div className={styles.colLeft}>
            <h2 className={styles.headingText}>
              En inglés TODOS los verbos<br />son
            </h2>
            
            <div className={styles.badgeTitle}>
              <span className={styles.circleBadge}>N</span>
              <span>ormal</span>
            </div>

            <div className={styles.badgeTitle} style={{ marginTop: '-1rem' }}>
              <span className={styles.yellowText}>V</span>
              <span>erbs</span>
            </div>

            {/* Caja de Lista de Verbos Normales */}
            <div className={styles.normalVerbsBox}>
              Play , Eat , Work , Buy , Make , Read ,<br />
              Go , Jump , Run , Travel , Dance , Try<br />
              Study , Write , Live , Dance , See ,<br />
              Talk , Grow , Pay , Hold , Stay , Hear ,<br />
              Watch , Meet , Visit , Say , Talk<br />
              <span className={styles.yellowText}>D</span>o / Does / <span className={styles.yellowText}>D</span>id , Have / <span className={styles.yellowText}>H</span>as / <span className={styles.yellowText}>H</span>ad<br />
              Know , Cook , Find , Want , Teach , Like ,<br />
              Understand , Help , Forget , Clean , Start , Keep ,<br />
              Listen , Sing , Walk , Laugh , Throw , Remember ,<br />
              Bet , Thank , Get , Open , Talk , Catch , Call , Give<br />
              Enjoy , Promise , Trust , Win , Fix , Shoot
            </div>
          </div>

          {/* COLUMNA DERECHA: VERBOS ESPECIALES */}
          <div className={styles.colRight}>
            <h2 className={styles.headingText}>
              Solamente estos<br />verbos se clasifican como
            </h2>

            <div className={styles.badgeTitle}>
              <span className={styles.circleBadge}>S</span>
              <span>pecial</span>
            </div>

            <div className={styles.badgeTitle} style={{ marginTop: '-1rem', marginLeft: '9rem' }}>
              <span className={styles.yellowText}>V</span>
              <span>erbs</span>
            </div>

            {/* Caja de Lista de Verbos Especiales */}
            <div className={styles.specialVerbsBox}>
              <div>Be / Am / Are / Is</div>
              <div>Was / Were</div>
              <div><span className={styles.yellowText}>D</span>o / Does / <span className={styles.yellowText}>D</span>id</div>
              <div><span className={styles.yellowText}>H</span>ave / <span className={styles.yellowText}>H</span>as / <span className={styles.yellowText}>H</span>ad</div>
              <div>Can</div>
              <div>Could</div>
              <div>Should</div>
              <div>Must</div>
              <div>May</div>
              <div>Might</div>
              <div>Would</div>
              <div>Will</div>
              <div>Shall</div>
            </div>
          </div>

        </div>

        {/* ================= SECCIÓN INFERIOR ================= */}
        <div className={styles.bottomSection}>
          
          {/* Caja Amarilla Izquierda */}
          <div className={styles.yellowBorderBox}>
            <div>Los verbos</div>
            <div>
              <span className={styles.yellowText}>R</span>EGULARES e <span className={styles.yellowText}>IR</span>REGULARES
            </div>
            <div>
              son otros 2 tipos de verbos DENTRO<br />
              de los <span className={styles.yellowText}>V</span>erbos <span className={styles.yellowText}>N</span>ormales
            </div>
          </div>

          {/* Caja Amarilla Derecha */}
          <div className={styles.yellowBorderBox}>
            <div>
              <span className={styles.yellowText}>D</span>o / <span className={styles.yellowText}>D</span>oes / <span className={styles.yellowText}>D</span>id , <span className={styles.yellowText}>H</span>ave / <span className={styles.yellowText}>H</span>as / <span className={styles.yellowText}>H</span>ad
            </div>
            <div>Son los UNICOS 6 verbos que son</div>
            <div>
              <span className={styles.yellowText}>N</span>ormales y <span className={styles.yellowText}>E</span>speciales
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SlideThirtyOne;