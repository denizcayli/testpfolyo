// src/components/creatie/Certificates.jsx
import React from 'react';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { certificates } from '../../data/content';
import { SectionHead, Pin, Fold, TiltCard } from './Bits';
import { PinkBall, PenNib, BlueWaves, LimeLoop, Asterisk, ZigZag } from './Doodles';
import softitoLogo from '../../assets/logos/softito.png';
import googleLogo from '../../assets/logos/google.png';
import kodluyoruzLogo from '../../assets/logos/kodluyoruz.png';
import bogaziciLogo from '../../assets/logos/bogazici.png';

const LOGOS = { softito: softitoLogo, google: googleLogo, kodluyoruz: kodluyoruzLogo, bogazici: bogaziciLogo };
const TILTS = [-2.5, 2, -1.5, 3, -3, 1.5, -2, 2.5];

const Certificates = () => (
  <section className="section paper" id="sertifikalar">
    <PinkBall style={{ top: 90, left: '14%' }} float={7} />
    <PenNib style={{ top: 180, left: '20%' }} float={5} rotate={10} />
    <BlueWaves style={{ top: 40, right: '7%' }} float={5} />
    <LimeLoop style={{ top: '35%', left: '-2%' }} float={6} />
    <Asterisk style={{ bottom: 60, left: '5%' }} float={5} />
    <ZigZag style={{ bottom: 100, right: '6%' }} float={4} />

    <div className="wrap">
      <SectionHead label="Sertifikalar" icon="award">
        Belgelerle<br />kanıtlanmış emek
      </SectionHead>

      <div className="certs-grid">
        {certificates.map((c, i) => (
          <TiltCard key={c.id} tilt={TILTS[i % TILTS.length]} delay={(i % 3) * 0.06} className="paper-card cert-card">
            <Pin />
            <Fold variant="orange" position="br" />

            <div className="cert-head">
              <span className="cert-logo"><img src={LOGOS[c.logo]} alt="" loading="lazy" /></span>
              <span>
                <strong>{c.issuer.split(' · ')[0]}</strong>
                <small>{c.year || 'Sertifika'}</small>
              </span>
            </div>

            <p className="cert-quote">“{c.name}”</p>

            <p className="cert-verified"><FiCheckCircle /> Doğrulanabilir belge</p>

            <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-link">
              {c.issuer} <FiArrowUpRight />
            </a>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
