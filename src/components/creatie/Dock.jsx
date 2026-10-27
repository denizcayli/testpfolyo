// src/components/creatie/Dock.jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/*
   Alt ortadaki macOS tarzı uygulama dock'u — sitenin ana menüsü.
   İkonlar fareye yaklaştıkça büyür. Simgeler beyaz kare zemin üzerinde
   yumuşak, hafif bulanık ve parlak 3B görünümde; tamamen SVG.
*/

/* Kenarları yumuşatan ortak filtre — ikonlara "buzlu cam" hissi verir */
const Soft = ({ id, blur = 0.6 }) => (
  <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation={blur} />
  </filter>
);

const IconUser = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <radialGradient id="du-bg" cx="50%" cy="30%" r="75%">
        <stop offset="0" stopColor="#8FA8FF" />
        <stop offset="0.55" stopColor="#4B4BE0" />
        <stop offset="1" stopColor="#8A2BE2" />
      </radialGradient>
      <linearGradient id="du-fig" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F2F4FF" />
        <stop offset="1" stopColor="#C9CCF5" />
      </linearGradient>
      <radialGradient id="du-shine" cx="50%" cy="15%" r="60%">
        <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <clipPath id="du-clip"><circle cx="50" cy="50" r="38" /></clipPath>
      <Soft id="du-soft" blur={0.8} />
    </defs>
    <circle cx="50" cy="50" r="38" fill="url(#du-bg)" filter="url(#du-soft)" />
    <g clipPath="url(#du-clip)" filter="url(#du-soft)">
      <circle cx="50" cy="40" r="12" fill="url(#du-fig)" />
      <ellipse cx="50" cy="84" rx="27" ry="22" fill="url(#du-fig)" />
    </g>
    <circle cx="50" cy="50" r="38" fill="url(#du-shine)" />
  </svg>
);

const IconCamera = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="dc-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#B6B9EC" />
        <stop offset="0.5" stopColor="#6E78C8" />
        <stop offset="1" stopColor="#2F3E99" />
      </linearGradient>
      <radialGradient id="dc-lens" cx="45%" cy="40%" r="60%">
        <stop offset="0" stopColor="#EEF2FF" />
        <stop offset="0.6" stopColor="#A9B6F5" />
        <stop offset="1" stopColor="#6F7FD9" />
      </radialGradient>
      <Soft id="dc-soft" blur={0.7} />
    </defs>
    <g filter="url(#dc-soft)">
      <rect x="18" y="20" width="12" height="5" rx="2" fill="#3F4DA8" />
      <path d="M38 22h24l4 7H34z" fill="#7C86D2" />
      <rect x="12" y="27" width="76" height="52" rx="12" fill="url(#dc-body)" />
      <circle cx="50" cy="53" r="21" fill="#E3E7FF" opacity="0.55" />
      <circle cx="50" cy="53" r="16" fill="url(#dc-lens)" />
    </g>
    <ellipse cx="44" cy="46" rx="6" ry="4" fill="#fff" opacity="0.7" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="ds-fill" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0" stopColor="#FFC24A" />
        <stop offset="0.55" stopColor="#FF7A3D" />
        <stop offset="1" stopColor="#F2246A" />
      </linearGradient>
      <radialGradient id="ds-glow" cx="50%" cy="60%" r="50%">
        <stop offset="0" stopColor="#FF4F7B" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FF4F7B" stopOpacity="0" />
      </radialGradient>
      <Soft id="ds-soft" blur={1.4} />
    </defs>
    <path
      d="M50 12c2 0 3.4 1.2 4.3 3l8.6 17.4 19.2 2.8c4 .6 5.5 5.4 2.6 8.2L70.8 57l3.3 19.1c.7 4-3.5 7-7.1 5.1L50 72.3l-17 8.9c-3.6 1.9-7.8-1.1-7.1-5.1L29.2 57 15.3 43.4c-2.9-2.8-1.3-7.6 2.6-8.2l19.2-2.8L45.7 15c.9-1.8 2.3-3 4.3-3z"
      fill="url(#ds-fill)" filter="url(#ds-soft)"
    />
    <circle cx="52" cy="58" r="20" fill="url(#ds-glow)" />
  </svg>
);

const IconChat = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <radialGradient id="dm-fill" cx="35%" cy="30%" r="80%">
        <stop offset="0" stopColor="#7FF0F5" />
        <stop offset="0.5" stopColor="#4FB8F5" />
        <stop offset="1" stopColor="#3D6CF0" />
      </radialGradient>
      <linearGradient id="dm-badge" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FF8A8A" />
        <stop offset="1" stopColor="#E8243C" />
      </linearGradient>
      <Soft id="dm-soft" blur={0.9} />
    </defs>
    <path
      d="M50 16c19.3 0 34 13.4 34 31S69.3 78 50 78c-4 0-7.8-.6-11.3-1.7L22 84l4.2-14.5C19.8 63.7 16 56 16 47c0-17.6 14.7-31 34-31z"
      fill="url(#dm-fill)" filter="url(#dm-soft)"
    />
    <ellipse cx="40" cy="30" rx="12" ry="6" fill="#fff" opacity="0.35" />
    <circle cx="76" cy="22" r="12" fill="url(#dm-badge)" />
    <text x="76" y="27.5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="system-ui, sans-serif">1</text>
  </svg>
);

const ITEMS = [
  { href: '#hakkimda', label: 'Hakkımda', Icon: IconUser },
  { href: '#projeler', label: 'Projeler', Icon: IconCamera },
  { href: '#sertifikalar', label: 'Sertifikalar', Icon: IconStar },
  { href: '#iletisim', label: 'İletişim', Icon: IconChat },
];

const DockItem = ({ item, mouseX }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const distance = useTransform(mouseX, (x) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || x === Infinity) return Infinity;
    return x - (r.left + r.width / 2);
  });
  const sizeRaw = useTransform(distance, [-140, 0, 140], [56, reduced ? 56 : 76, 56]);
  const size = useSpring(sizeRaw, { stiffness: 320, damping: 22, mass: 0.4 });

  const { Icon } = item;

  return (
    <motion.a
      ref={ref}
      href={item.href}
      className="dock-item"
      style={{ width: size, height: size }}
      aria-label={item.label}
      whileTap={{ scale: 0.9 }}
    >
      <Icon />
      <span className="dock-tip">{item.label}</span>
    </motion.a>
  );
};

const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      className="dock"
      aria-label="Ana menü"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ y: 120, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.6 }}
    >
      {ITEMS.map((item) => <DockItem key={item.href} item={item} mouseX={mouseX} />)}
    </motion.nav>
  );
};

export default Dock;
