// src/components/creatie/About.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo, stats, technologies } from '../../data/content';
import { SectionHead, Pin, Fold, TiltCard } from './Bits';
import { LimeLoop, BlueWaves, Cloud, PinkBall, ZigZag, Confetti, Diamond, Asterisk, YellowSquiggle, Bulb, ArrowDoodle } from './Doodles';

const TILTS = [-3, 2.5, -2, 3];

const About = () => {
  const reduced = useReducedMotion();

  return (
    <section className="section paper" id="hakkimda">
      <LimeLoop style={{ top: 420, left: '-3%' }} float={6} rotate={-10} />
      <BlueWaves style={{ top: 40, right: '6%' }} float={5} />
      <PinkBall style={{ top: 70, left: '22%' }} float={8} />
      <Cloud style={{ top: 36, right: '30%' }} float={6} />
      <Asterisk style={{ bottom: 120, left: '4%' }} float={5} rotate={12} />
      <YellowSquiggle style={{ bottom: 100, left: '9%' }} />
      <ZigZag style={{ bottom: 140, right: '8%' }} float={4} />
      <Confetti style={{ bottom: 220, right: '20%' }} float={7} rotate={20} />
      <Diamond style={{ bottom: 90, right: '5%' }} float={6} />
      <Bulb style={{ top: '48%', right: '3%' }} float={6} />
      <ArrowDoodle style={{ bottom: 40, left: '46%' }} float={5} />

      <div className="wrap">
        <SectionHead label="Hakkımda" icon="info">
          Hatırlanan arayüzler<br />tasarlıyorum
        </SectionHead>

        <motion.p
          className="about-lead"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Estetik ve işlevsel web arayüzleri geliştiren bir <mark>Frontend Developer</mark>'ım.
          React ile fikirleri net, güvenilir ve <span className="underline-doodle">amacına uygun</span> deneyimlere dönüştürüyorum.
        </motion.p>

        <div className="about-cta">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="paper-btn"
            initial={{ rotate: -4 }}
            whileHover={reduced ? undefined : { rotate: 0, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Pin className="pin--btn" />
            Birlikte çalışalım
          </motion.a>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <TiltCard key={s.label} tilt={TILTS[i % TILTS.length]} delay={i * 0.06} className="paper-card stat-card">
              <Pin />
              <Fold variant="lime" position="tr" />
              <strong className="stat-value">{s.value}</strong>
              <h3 className="stat-label">{s.label}</h3>
              <p>{s.text}</p>
            </TiltCard>
          ))}
        </div>

        <div className="about-bio paper-card">
          <Pin />
          <p>{personalInfo.bio}</p>
          <ul className="tech-chips" aria-label="Kullandığım teknolojiler">
            {technologies.map((t) => <li key={t.name}>{t.name}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
