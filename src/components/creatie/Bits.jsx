// src/components/creatie/Bits.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiInfo, FiFolder, FiLayers, FiAward, FiHelpCircle, FiClock, FiStar,
} from 'react-icons/fi';

const LABEL_ICONS = {
  info: FiInfo,
  folder: FiFolder,
  layers: FiLayers,
  award: FiAward,
  help: FiHelpCircle,
  clock: FiClock,
  star: FiStar,
};

/*
   Sürüklenebilir etiket — başlıkların ve hero yazısının üstüne
   yapıştırılmış küçük kâğıt notlar. Bırakınca yerine yaylanarak döner.
*/
export const Sticker = ({ children, color = '#B455F0', rotate = -8, className = '', style }) => {
  const reduced = useReducedMotion();

  return (
    <motion.span
      className={`sticker ${className}`}
      style={{ rotate, ...style }}
      drag={!reduced}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 380, bounceDamping: 18 }}
      whileHover={reduced ? undefined : { scale: 1.06, rotate: rotate + 4 }}
      whileDrag={{ scale: 1.12, cursor: 'grabbing' }}
    >
      <span className="sticker-dot" style={{ background: color }}>
        <FiStar size={10} />
      </span>
      {children}
      <span className="sticker-pin" style={{ background: color }} />
    </motion.span>
  );
};

/* Bölüm başlığı: eğik etiket + kalın büyük harfli başlık */
export const SectionHead = ({ label, icon = 'info', children, light = false }) => {
  const Icon = LABEL_ICONS[icon] || FiInfo;
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`section-head ${light ? 'section-head--light' : ''}`}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: 'spring', stiffness: 160, damping: 20 }}
    >
      <span className="section-label">
        <span className="section-label-icon"><Icon size={11} /></span>
        {label}
        <span className="section-label-clip" />
      </span>
      <h2 className="display-title">{children}</h2>
    </motion.div>
  );
};

/* Kırmızı raptiye */
export const Pin = ({ className = '' }) => <span aria-hidden="true" className={`pin ${className}`} />;

/* Kâğıdın kıvrık köşesi */
export const Fold = ({ variant = 'lime', position = 'tr' }) => (
  <span aria-hidden="true" className={`fold fold--${variant} fold--${position}`} />
);

/*
   Görünür olunca hafif eğimle yerine oturan kart sarmalayıcısı.
   `tilt` kartın durduğu açıdır; hover'da düzleşir.
*/
export const TiltCard = ({ children, tilt = 0, className = '', delay = 0, as = 'div', ...rest }) => {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 60, rotate: tilt * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={reduced ? undefined : { rotate: 0, y: -6 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
};
