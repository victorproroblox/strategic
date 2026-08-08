// Nombre y descripción del juego: se leen desde aquí en toda la app
// (tarjeta del hub y encabezado dentro del juego), un solo lugar si cambian.
export const GAME_TITLE = 'Frase de Lego';
export const GAME_DESCRIPTION =
  'Cambia una sola pieza de la frase y practica decirla en voz alta, en español y en inglés.';

// Config del motor genérico de "frase con pieza intercambiable".
// El componente PhraseSwapGame no sabe nada de verbos: solo lee esta forma de dato.
export const legoPhraseConfig = {
  id: 'verbos-i-want-to',
  tema: 'Verbos',
  plantilla: {
    es: 'Yo quiero {verbo}',
    en: 'I want to {verbo}',
  },
  slots: [
    { id: 'verbo', banco: 'verbos-infinitivo', activo: true },
  ],
  bancos: {
    'verbos-infinitivo': [
      { es: 'comer', en: 'eat', icono: 'utensils' },
      { es: 'jugar', en: 'play', icono: 'gamepad' },
      { es: 'ver', en: 'see', icono: 'eye' },
      { es: 'estudiar', en: 'study', icono: 'book' },
      { es: 'caminar', en: 'walk', icono: 'footprints' },
      { es: 'correr', en: 'run', icono: 'run' },
      { es: 'dormir', en: 'sleep', icono: 'bed' },
      { es: 'beber', en: 'drink', icono: 'cup' },
      { es: 'cantar', en: 'sing', icono: 'music' },
      { es: 'bailar', en: 'dance' },
      { es: 'escribir', en: 'write', icono: 'pencil' },
      { es: 'leer', en: 'read', icono: 'book' },
      { es: 'nadar', en: 'swim' },
      { es: 'viajar', en: 'travel', icono: 'plane' },
      { es: 'cocinar', en: 'cook', icono: 'utensils' },
      { es: 'trabajar', en: 'work' },
      { es: 'descansar', en: 'rest' },
      { es: 'manejar', en: 'drive', icono: 'car' },
      { es: 'llamar', en: 'call', icono: 'phone' },
      { es: 'sonreír', en: 'smile', icono: 'smile' },
      { es: 'saltar', en: 'jump' },
      { es: 'limpiar', en: 'clean' },
      { es: 'aprender', en: 'learn', icono: 'book' },
      { es: 'escuchar', en: 'listen' },
    ],
  },
};
