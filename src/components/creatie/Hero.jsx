// src/components/creatie/Hero.jsx
import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../../data/content';
import { Sticker } from './Bits';
import avatar from '../../assets/deniz.jpg';
import meadow from '../../assets/meadow.avif';

/* Bulutlu yeşil tepe — hero, projeler ve iletişim kartında ortak arka plan */
export const HERO_IMAGE = meadow;

const LINES = ['Akılda kalan', 'arayüzler', 'kodluyorum'];

const Hero = () => {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  /* Arka plan yavaş kayar, başlık biraz daha hızlı — hafif derinlik */
  const bgY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 160]);
  const titleY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : -80]);

  return (
    <section className="hero" id="top">
      <motion.div className="hero-bg" style={{ y: bgY, backgroundImage: `url(${HERO_IMAGE})` }} aria-hidden="true" />
      <div className="hero-sky" aria-hidden="true" />

      <a href="#top" className="brand">DENİZ ÇAYLI<sup>®</sup></a>

      <motion.div className="hero-inner" style={{ y: titleY }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 18, delay: 0.15 }}
        >
          <img src={avatar} alt="" />
          <span>
            <strong>{personalInfo.name.toUpperCase()} — {personalInfo.title.toUpperCase()}</strong>
            <small><i className="live-dot" /> Yeni fırsatlara açık</small>
          </span>
        </motion.div>

        <h1 className="hero-title" aria-label="Akılda kalan arayüzler kodluyorum">
          {LINES.map((line, i) => (
            <span className="hero-line" key={line}>
              <motion.span
                initial={reduced ? { opacity: 0 } : { y: '110%' }}
                animate={reduced ? { opacity: 1 } : { y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.3 + i * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}

          <Sticker color="#B455F0" rotate={8} className="hero-sticker hero-sticker--a">React</Sticker>
          <Sticker color="#7AC70C" rotate={-14} className="hero-sticker hero-sticker--b">UI/UX Tasarım</Sticker>
          <Sticker color="#3E7BEA" rotate={-6} className="hero-sticker hero-sticker--c">Frontend</Sticker>
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
