// src/components/creatie/Services.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiLayout, FiMousePointer, FiBox, FiZap, FiCpu } from 'react-icons/fi';
import { services } from '../../data/content';
import { SectionHead } from './Bits';
import { PinkBall, PenNib, ZigZag, Confetti, Asterisk, BlueWaves, LimeLoop, Diamond } from './Doodles';

const ICONS = { layout: FiLayout, cursor: FiMousePointer, box: FiBox, plug: FiZap, bot: FiCpu };

const Services = () => {
  const reduced = useReducedMotion();

  return (
    <section className="section paper" id="hizmetler">
      <PinkBall style={{ top: 60, left: '18%' }} float={7} />
      <PenNib style={{ top: 150, left: '24%' }} float={5} rotate={-20} />
      <BlueWaves style={{ top: 30, right: '8%' }} float={5} />
      <LimeLoop style={{ top: '40%', left: '2%' }} float={6} rotate={30} />
      <ZigZag style={{ bottom: 60, right: '10%' }} float={4} />
      <Confetti style={{ bottom: 90, left: '30%' }} float={6} rotate={12} />
      <Asterisk style={{ bottom: 70, left: '6%' }} float={5} />
      <Diamond style={{ bottom: 40, right: '4%' }} float={6} />

      <div className="wrap wrap--narrow">
        <SectionHead label="Neler yapıyorum" icon="layers">
          Sana nasıl<br />yardımcı olabilirim
        </SectionHead>

        <ul className="stack-list">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.li
                key={s.title}
                className={`stack-row tone-${s.color}`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: i % 2 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={reduced ? undefined : { y: -4, rotate: i % 2 ? 0.6 : -0.6 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: 'spring', stiffness: 170, damping: 20, delay: i * 0.04 }}
              >
                <span className="stack-title">{s.title}</span>
                <span className="stack-text">{s.text}</span>
                <span className="stack-icon"><Icon /></span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
