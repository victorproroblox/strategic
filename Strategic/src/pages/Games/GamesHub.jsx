import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { GAMES } from './gamesConfig';
import styles from './GamesHub.module.css';

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const GamesHub = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Juegos</h1>
          <p className={styles.heroSubtitle}>
            Actividades cortas para practicar en voz alta, pensadas para usarse en clase o en casa.
          </p>
        </section>

        <section className={styles.section}>
          <motion.div
            className={styles.grid}
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {GAMES.map((game) => (
              <motion.article key={game.id} className={styles.card} variants={cardItem}>
                <span className={styles.topicBadge}>{game.topic}</span>
                <h2 className={styles.cardTitle}>{game.title}</h2>
                <p className={styles.cardDescription}>{game.description}</p>
                <Link to={game.path} className={styles.enterBtn}>
                  Entrar
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GamesHub;
