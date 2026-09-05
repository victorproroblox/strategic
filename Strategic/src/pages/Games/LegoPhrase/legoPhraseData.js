// Nombre y descripción del juego: se leen desde aquí en toda la app
// (tarjeta del hub y encabezado dentro del juego), un solo lugar si cambian.
export const GAME_TITLE = 'Frase de Lego';
export const GAME_DESCRIPTION =
  'Cambia el sujeto y el verbo de la frase y practica decirla en voz alta, en inglés y en español.';

// Config del motor genérico de "frase con piezas intercambiables".
// El componente PhraseSwapGame no sabe nada de verbos ni de pronombres: solo lee esta forma de dato.
//
// Los campos "conjEs"/"conjEn" de cada sujeto son la conjugación de "querer"/"want"
// que le corresponde a ESE sujeto. La plantilla los usa como texto plano
// ("{sujeto.conjEs}"), así la concordancia sujeto-verbo siempre es correcta
// sin necesidad de reglas de gramática en el motor: viene ya resuelta en el dato.
export const legoPhraseConfig = {
  id: 'sujeto-verbo-i-want-to',
  tema: 'Verbos',
  plantilla: {
    es: '{sujeto} {sujeto.conjEs} {verbo}',
    en: '{sujeto} {sujeto.conjEn} to {verbo}',
  },
  slots: [
    { id: 'sujeto', banco: 'sujetos', activo: true },
    { id: 'verbo', banco: 'verbos-infinitivo', activo: true },
  ],
  bancos: {
    sujetos: [
      { es: 'Yo', en: 'I', conjEs: 'quiero', conjEn: 'want' },
      { es: 'Tú', en: 'You', conjEs: 'quieres', conjEn: 'want' },
      { es: 'Él', en: 'He', conjEs: 'quiere', conjEn: 'wants' },
      { es: 'Ella', en: 'She', conjEs: 'quiere', conjEn: 'wants' },
      { es: 'Nosotros', en: 'We', conjEs: 'queremos', conjEn: 'want' },
      { es: 'Ellos', en: 'They', conjEs: 'quieren', conjEn: 'want' },
      { es: 'Ellas', en: 'They', conjEs: 'quieren', conjEn: 'want' },
    ],
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
      { es: 'bailar', en: 'dance', icono: 'dance' },
      { es: 'escribir', en: 'write', icono: 'pencil' },
      { es: 'leer', en: 'read', icono: 'book' },
      { es: 'nadar', en: 'swim', icono: 'swim' },
      { es: 'viajar', en: 'travel', icono: 'plane' },
      { es: 'cocinar', en: 'cook', icono: 'utensils' },
      { es: 'trabajar', en: 'work', icono: 'briefcase' },
      { es: 'descansar', en: 'rest', icono: 'armchair' },
      { es: 'manejar', en: 'drive', icono: 'car' },
      { es: 'llamar', en: 'call', icono: 'phone' },
      { es: 'sonreír', en: 'smile', icono: 'smile' },
      { es: 'saltar', en: 'jump', icono: 'jump' },
      { es: 'limpiar', en: 'clean', icono: 'broom' },
      { es: 'aprender', en: 'learn', icono: 'book' },
      { es: 'escuchar', en: 'listen', icono: 'headphones' },
      { es: 'comprar', en: 'buy', icono: 'shoppingBag' },
      { es: 'ayudar', en: 'help', icono: 'heart' },
      { es: 'pensar', en: 'think', icono: 'lightbulb' },
      { es: 'hablar', en: 'talk', icono: 'chat' },
      { es: 'pintar', en: 'paint', icono: 'palette' },
      { es: 'dibujar', en: 'draw', icono: 'pencil' },
      { es: 'andar en bicicleta', en: 'ride a bike', icono: 'bike' },
      { es: 'pescar', en: 'fish', icono: 'fish' },
      { es: 'construir', en: 'build', icono: 'hammer' },
      { es: 'explorar', en: 'explore', icono: 'compass' },
      { es: 'soñar', en: 'dream', icono: 'moon' },
      { es: 'abrazar', en: 'hug', icono: 'hug' },
      { es: 'reír', en: 'laugh', icono: 'laugh' },
      { es: 'volar', en: 'fly', icono: 'bird' },
    ],
  },
};
