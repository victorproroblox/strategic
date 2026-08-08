import LegoPhrasePage from './LegoPhrase/LegoPhrasePage';
import { GAME_TITLE, GAME_DESCRIPTION, legoPhraseConfig } from './LegoPhrase/legoPhraseData';

// Registro de juegos: el hub (/juegos) y las rutas de App.jsx se generan
// leyendo este array. Agregar un juego nuevo es agregar un objeto aquí.
export const GAMES = [
  {
    id: legoPhraseConfig.id,
    path: '/juegos/frase-de-lego',
    title: GAME_TITLE,
    description: GAME_DESCRIPTION,
    topic: legoPhraseConfig.tema,
    component: LegoPhrasePage,
  },
];
