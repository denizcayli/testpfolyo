// src/components/creatie/Doodles.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/*
   Sayfaya serpiştirilen el çizimi süsler. Hepsi dekoratif: ekran
   okuyuculardan gizli, tıklamayı engellemez. `float` verilenler
   hafifçe süzülür; hareket azaltma tercihinde sabit kalır.
*/
const Float = ({ children, style, className = '', float = 0, rotate = 0 }) => {
  const reduced = useReducedMotion();
  const animate = reduced || !float
    ? undefined
    : { y: [0, -float, 0], rotate: [rotate, rotate + 4, rotate] };

  return (
    <motion.span
      aria-hidden="true"
      className={`doodle ${className}`}
      style={{ rotate, ...style }}
      animate={animate}
      transition={{ duration: 5 + float / 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.span>
  );
};

/* Kalın açık yeşil halka — "About" başlığının arkasındaki karalama */
export const LimeLoop = (p) => (
  <Float {...p}>
    <svg width="190" height="150" viewBox="0 0 190 150" fill="none">
      <path
        d="M30 60c20-40 120-55 140-20 15 28-40 60-90 70-40 8-75-8-70-35 6-30 70-40 110-25"
        stroke="#D4F04A" strokeWidth="9" strokeLinecap="round"
      />
    </svg>
  </Float>
);

/* Mavi dalgalı çizgiler */
export const BlueWaves = (p) => (
  <Float {...p}>
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="#7FB0E8" strokeWidth="5" strokeLinecap="round">
      <path d="M6 14c6 8 12 8 18 0" />
      <path d="M34 10c6 8 12 8 18 0" />
      <path d="M62 14c6 8 12 8 18 0" />
      <path d="M20 38c6 8 12 8 18 0" />
      <path d="M50 42c6 8 12 8 18 0" />
      <path d="M86 30c4 10 14 12 22 4" />
      <path d="M40 66c6 8 12 8 18 0" />
    </svg>
  </Float>
);

/* Pembe çizgili daire */
export const PinkBall = (p) => (
  <Float {...p}>
    <svg width="44" height="44" viewBox="0 0 44 44">
      <defs>
        <pattern id="stripe" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="3" height="6" fill="#E25B86" />
        </pattern>
      </defs>
      <circle cx="22" cy="22" r="19" fill="#F7A9C1" stroke="#2A1A1F" strokeWidth="2.5" />
      <circle cx="22" cy="22" r="17" fill="url(#stripe)" />
    </svg>
  </Float>
);

/* Kırmızı yıldız işareti */
export const Asterisk = (p) => (
  <Float {...p}>
    <svg width="34" height="34" viewBox="0 0 34 34" stroke="#E2462C" strokeWidth="6" strokeLinecap="round">
      <path d="M17 3v28M3 17h28M7 7l20 20M27 7 7 27" />
    </svg>
  </Float>
);

/* Pembe zikzak */
export const ZigZag = (p) => (
  <Float {...p}>
    <svg width="70" height="34" viewBox="0 0 70 34" fill="none">
      <path d="M4 28 20 8l12 18L48 6l16 20" stroke="#F4A3A8" strokeWidth="9" strokeLinejoin="round" />
    </svg>
  </Float>
);

/* Yeşil kare konfeti */
export const Confetti = ({ color = '#4CC38A', size = 18, ...p }) => (
  <Float {...p}>
    <span className="doodle-square" style={{ width: size, height: size, background: color }} />
  </Float>
);

/* Mavi elmas */
export const Diamond = (p) => (
  <Float {...p}>
    <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 0 16 8 8 16 0 8z" fill="#3E7BEA" /></svg>
  </Float>
);

/* Lacivert bulut */
export const Cloud = (p) => (
  <Float {...p}>
    <svg width="46" height="30" viewBox="0 0 46 30">
      <path
        d="M10 28h26a9 9 0 0 0 1-18 12 12 0 0 0-22-3A9 9 0 0 0 10 28z"
        fill="#5A6E9C" stroke="#1E2A44" strokeWidth="2.5"
      />
    </svg>
  </Float>
);

/* Mavi ok imleci (dekor — gerçek imleç değişmez) */
export const ArrowDoodle = (p) => (
  <Float {...p}>
    <svg width="34" height="34" viewBox="0 0 34 34">
      <path d="M4 30 28 6M28 6H12M28 6v16" stroke="#1E2A44" strokeWidth="7" strokeLinecap="round" />
      <path d="M4 30 28 6M28 6H12M28 6v16" stroke="#4A8BE8" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  </Float>
);

/* Turuncu ampul + kalem */
export const Bulb = (p) => (
  <Float {...p}>
    <svg width="44" height="44" viewBox="0 0 44 44">
      <circle cx="18" cy="15" r="10" fill="#F5A25D" stroke="#2A1A1F" strokeWidth="2.5" />
      <rect x="13" y="24" width="10" height="7" rx="2" fill="#B9C2D0" stroke="#2A1A1F" strokeWidth="2.5" />
      <path d="M26 40 40 26l3 3-14 14h-3z" fill="#7BC67E" stroke="#2A1A1F" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  </Float>
);

/* Dolma kalem ucu */
export const PenNib = (p) => (
  <Float {...p}>
    <svg width="30" height="36" viewBox="0 0 30 36">
      <path d="M15 2 27 18 15 34 3 18z" fill="#fff" stroke="#1E1E1E" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="15" cy="18" r="3" fill="#1E1E1E" />
      <path d="M15 21v13" stroke="#1E1E1E" strokeWidth="2" />
    </svg>
  </Float>
);

/* Sarı dalgalı tirtil */
export const YellowSquiggle = (p) => (
  <Float {...p}>
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <path d="M2 10c5-8 9 8 14 0s9 8 14 0 9 8 14 0 9 8 14 0 9 8 14 0" stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </Float>
);
