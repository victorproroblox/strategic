import React from 'react';

// Íconos SVG dibujados a mano, siguiendo el mismo estilo (stroke, sin librería)
// que ya se usa en Navbar/Footer/Warmup.

const IconBase = ({ className, children }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Utensils = (props) => (
  <IconBase {...props}>
    <path d="M6 3v7a3 3 0 0 0 6 0V3" />
    <path d="M9 3v18" />
    <path d="M17 3c-1.2 2-1.2 4.2 0 6.2S18.2 13.4 17 15.4" />
    <path d="M17 3v18" />
  </IconBase>
);

const Gamepad = (props) => (
  <IconBase {...props}>
    <rect x="2" y="7.5" width="20" height="10" rx="4.5" />
    <path d="M7 10.5v4M5 12.5h4" />
    <path d="M15.2 12h.01M17.6 10h.01" />
  </IconBase>
);

const Eye = (props) => (
  <IconBase {...props}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </IconBase>
);

const Book = (props) => (
  <IconBase {...props}>
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5V4.5Z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
  </IconBase>
);

const Footprints = (props) => (
  <IconBase {...props}>
    <ellipse cx="7" cy="14" rx="2.1" ry="3" />
    <circle cx="6" cy="9.6" r="0.9" />
    <circle cx="7.4" cy="9" r="0.9" />
    <circle cx="8.8" cy="9.6" r="0.9" />
    <ellipse cx="17" cy="18" rx="2.1" ry="3" />
    <circle cx="16" cy="13.6" r="0.9" />
    <circle cx="17.4" cy="13" r="0.9" />
    <circle cx="18.8" cy="13.6" r="0.9" />
  </IconBase>
);

const Run = (props) => (
  <IconBase {...props}>
    <circle cx="14.5" cy="4.5" r="1.8" />
    <path d="M8.5 20l1.8-5.5 2.7 1.8 1.8 4.7" />
    <path d="M6 13.5l3-2.7 2.7 1 1.8-2.6 3 1.8" />
  </IconBase>
);

const Bed = (props) => (
  <IconBase {...props}>
    <path d="M3 18v-6.5A2.5 2.5 0 0 1 5.5 9H18a2.5 2.5 0 0 1 2.5 2.5V18" />
    <path d="M3 15.5h18" />
    <path d="M3 18v2.5M21 18v2.5" />
    <circle cx="7.5" cy="12" r="1.3" />
  </IconBase>
);

const Cup = (props) => (
  <IconBase {...props}>
    <path d="M5 3h12l-1 12.5A4 4 0 0 1 12 19h0a4 4 0 0 1-4-3.5L5 3Z" />
    <path d="M16.5 6H18a2.2 2.2 0 0 1 0 4.4h-1.9" />
  </IconBase>
);

const Music = (props) => (
  <IconBase {...props}>
    <path d="M9 18V5.2L19 3v12.8" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="16" cy="15.8" r="3" />
  </IconBase>
);

const Pencil = (props) => (
  <IconBase {...props}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4.2.9L4 15.6 16.5 3.5Z" />
  </IconBase>
);

const Plane = (props) => (
  <IconBase {...props}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
  </IconBase>
);

const Phone = (props) => (
  <IconBase {...props}>
    <path d="M21.9 16.9v3a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3 19.3 19.3 0 0 1-6-6 19.6 19.6 0 0 1-3-8.5 2 2 0 0 1 2-2.2h3a2 2 0 0 1 2 1.7 12.7 12.7 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.2-1.4a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </IconBase>
);

const Smile = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </IconBase>
);

const Car = (props) => (
  <IconBase {...props}>
    <path d="M3 16.5h1l1.4-5A2 2 0 0 1 7.3 10h9.4a2 2 0 0 1 1.9 1.5l1.4 5h1" />
    <path d="M5 16.5v2.2M19 16.5v2.2" />
    <circle cx="7.2" cy="16.5" r="1.4" />
    <circle cx="16.8" cy="16.5" r="1.4" />
  </IconBase>
);

const Dance = (props) => (
  <IconBase {...props}>
    <circle cx="14" cy="4.2" r="1.8" />
    <path d="M14 6.5v5" />
    <path d="M14 8l-4-2.2" />
    <path d="M14 8.5l4.5 2.5" />
    <path d="M14 11.5l-3 6.5" />
    <path d="M14 11.5l4 5" />
  </IconBase>
);

const Swim = (props) => (
  <IconBase {...props}>
    <circle cx="16.5" cy="6.5" r="1.7" />
    <path d="M7 12l3.5-1.3 3 1.8 3-2 2.5 1.3" />
    <path d="M2 16.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    <path d="M2 20.2c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
  </IconBase>
);

const Briefcase = (props) => (
  <IconBase {...props}>
    <rect x="3" y="7.5" width="18" height="11.5" rx="2" />
    <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
    <path d="M3 12.5h18" />
  </IconBase>
);

const Armchair = (props) => (
  <IconBase {...props}>
    <path d="M5 20v-6a7 7 0 0 1 14 0v6" />
    <path d="M3 20h18" />
    <path d="M5 15h14" />
  </IconBase>
);

const Jump = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="4.5" r="1.8" />
    <path d="M12 6.5v3.5" />
    <path d="M12 10l-3.5 3M12 10l3.5 3" />
    <path d="M8.5 13l-1 4.5M15.5 13l1 4.5" />
    <path d="M4 20c1-1 2-1 3 0M17 20c1-1 2-1 3 0" />
  </IconBase>
);

const Broom = (props) => (
  <IconBase {...props}>
    <path d="M20 4 10 14" />
    <path d="M10 14l-1.5 6.5" />
    <path d="M10 14l1 6.5" />
    <path d="M10 14l-6 2" />
    <path d="M10 14l-4.5 4" />
  </IconBase>
);

const Headphones = (props) => (
  <IconBase {...props}>
    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    <rect x="2" y="14" width="4.5" height="6.5" rx="1.6" />
    <rect x="17.5" y="14" width="4.5" height="6.5" rx="1.6" />
  </IconBase>
);

const ShoppingBag = (props) => (
  <IconBase {...props}>
    <path d="M6 8h12l-1 12.5H7L6 8Z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </IconBase>
);

const HelpingHeart = (props) => (
  <IconBase {...props}>
    <path d="M12 20s-7-4.3-7-9.3A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.7C19 15.7 12 20 12 20Z" />
    <path d="M4.5 15c1 .8 2 .8 3 0M19.5 15c-1 .8-2 .8-3 0" />
  </IconBase>
);

const Lightbulb = (props) => (
  <IconBase {...props}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6h5.4c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />
  </IconBase>
);

const ChatBubble = (props) => (
  <IconBase {...props}>
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.9-.9L3 20l1-4.6A8.5 8.5 0 1 1 21 11.5Z" />
  </IconBase>
);

const Palette = (props) => (
  <IconBase {...props}>
    <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H13a1.5 1.5 0 0 1 0-3h2a3 3 0 0 0 3-3 6 6 0 0 0-6-7Z" />
    <circle cx="7.5" cy="10.5" r="1" />
    <circle cx="9.5" cy="7" r="1" />
    <circle cx="14.5" cy="7" r="1" />
  </IconBase>
);

const Bike = (props) => (
  <IconBase {...props}>
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M5.5 17.5 10 8h4l3 4.5" />
    <path d="M10 8l3 5h5.5" />
  </IconBase>
);

const Fish = (props) => (
  <IconBase {...props}>
    <path d="M3 12s4-5 10-5 8 5 8 5-2 5-8 5-10-5-10-5Z" />
    <path d="M17 12h4l-2-2" />
    <path d="M19 12l-2 2" />
    <circle cx="8" cy="11" r="0.7" fill="currentColor" stroke="none" />
  </IconBase>
);

const Hammer = (props) => (
  <IconBase {...props}>
    <path d="M14.5 3.5 21 10l-2 2-6.5-6.5Z" />
    <path d="M13 5.5 3 15.5l3 3L16 8.5" />
  </IconBase>
);

const Compass = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-2 6-4 2 2-6Z" />
  </IconBase>
);

const Moon = (props) => (
  <IconBase {...props}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    <path d="M17 3l.6 1.4L19 5l-1.4.6L17 7l-.6-1.4L15 5l1.4-.6Z" />
  </IconBase>
);

const Hug = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="5" r="2" />
    <path d="M6 20c0-4 2.5-7 6-7s6 3 6 7" />
    <path d="M4 12c1-2 3-3 4-2M20 12c-1-2-3-3-4-2" />
  </IconBase>
);

const Laugh = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M7 13c1 2.5 3 4 5 4s4-1.5 5-4" />
    <path d="M8 9.5l1.3.8M16 9.5l-1.3.8" />
  </IconBase>
);

const Bird = (props) => (
  <IconBase {...props}>
    <path d="M2 16c4-6 8-7 10-7s6 1 10 7c-4-3-7-3-10-1-3-2-6-2-10 1Z" />
  </IconBase>
);

export const ICONS = {
  utensils: Utensils,
  gamepad: Gamepad,
  eye: Eye,
  book: Book,
  footprints: Footprints,
  run: Run,
  bed: Bed,
  cup: Cup,
  music: Music,
  pencil: Pencil,
  plane: Plane,
  phone: Phone,
  smile: Smile,
  car: Car,
  dance: Dance,
  swim: Swim,
  briefcase: Briefcase,
  armchair: Armchair,
  jump: Jump,
  broom: Broom,
  headphones: Headphones,
  shoppingBag: ShoppingBag,
  heart: HelpingHeart,
  lightbulb: Lightbulb,
  chat: ChatBubble,
  palette: Palette,
  bike: Bike,
  fish: Fish,
  hammer: Hammer,
  compass: Compass,
  moon: Moon,
  hug: Hug,
  laugh: Laugh,
  bird: Bird,
};

// Ícono de dos flechas circulares, para el botón "Alternar"
export const SwapIcon = (props) => (
  <IconBase {...props}>
    <path d="M17 2.1 21 6l-4 3.9" />
    <path d="M3 12.5v-1a5 5 0 0 1 5-5h13" />
    <path d="M7 21.9 3 18l4-3.9" />
    <path d="M21 11.5v1a5 5 0 0 1-5 5H3" />
  </IconBase>
);

export const ChevronLeftIcon = (props) => (
  <IconBase {...props}>
    <path d="M15 18l-6-6 6-6" />
  </IconBase>
);
