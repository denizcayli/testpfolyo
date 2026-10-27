// src/components/creatie/Journey.jsx
import React from 'react';
import { experiences } from '../../data/content';
import { SectionHead, Pin, Fold, TiltCard } from './Bits';
import { Cloud, Bulb, YellowSquiggle, ArrowDoodle } from './Doodles';

const TILTS = [-2.5, 2, -1.5, 2.5];

/* Deneyim ve eğitim — yorum kartlarıyla aynı kâğıt dilinde */
const Journey = () => (
  <section className="section paper" id="deneyim">
    <Cloud style={{ top: 80, right: '20%' }} float={6} />
    <Bulb style={{ top: '45%', left: '3%' }} float={6} />
    <YellowSquiggle style={{ bottom: 80, right: '6%' }} />
    <ArrowDoodle style={{ bottom: 40, left: '12%' }} float={5} />

    <div className="wrap">
      <SectionHead label="Deneyim" icon="clock">
        Yolculuğumdan<br />duraklar
      </SectionHead>

      <div className="journey-grid">
        {experiences.map((e, i) => (
          <TiltCard key={e.title} tilt={TILTS[i]} delay={(i % 2) * 0.08} className="paper-card journey-card">
            <Pin />
            <Fold variant="orange" position="br" />
            <span className="journey-period">{e.period}</span>
            <h3>{e.title}</h3>
            <p className="journey-role">{e.role}</p>
            <p>{e.text}</p>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

export default Journey;
