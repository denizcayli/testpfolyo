// src/components/creatie/Contact.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../../data/content';
import { Sticker } from './Bits';
import { HERO_IMAGE } from './Hero';

const FOOTER_LINKS = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#projeler', label: 'Projeler' },
  { href: '#sertifikalar', label: 'Sertifikalar' },
  { href: '#sss', label: 'SSS' },
];

const SOCIALS = [
  { href: personalInfo.github, label: 'GitHub', Icon: FiGithub, external: true },
  { href: personalInfo.linkedin, label: 'LinkedIn', Icon: FiLinkedin, external: true },
  { href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, label: 'Telefon', Icon: FiPhone },
  { href: `mailto:${personalInfo.email}`, label: 'E-posta', Icon: FiMail },
];

/*
   Son bölüm: sarı zemin üzerinde çerçeveli manzara kartı.
   Sol üstte sosyal ikonlar, sağ üstte davet cümlesi, sol altta dev
   başlık, sağ altta buton; kartın altında marka ve menü satırı.
*/
const Contact = () => {
  const reduced = useReducedMotion();

  return (
    <section className="contact" id="iletisim">
      {/* Zemindeki silik tekrar eden yazı */}
      <div className="contact-pattern" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => <span key={i}>hadi konuşalım · hadi konuşalım · hadi konuşalım ·</span>)}
      </div>

      <motion.div
        className="contact-card"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 110, damping: 20 }}
      >
        <div className="contact-row">
          <ul className="contact-socials" aria-label="Sosyal bağlantılar">
            {SOCIALS.map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>

          <p className="contact-invite">
            <span className="dash" />Aklında bir fikir mi var?<br />
            Onu net bir dijital deneyime dönüştürelim.
          </p>
        </div>

        <div className="contact-row contact-row--bottom">
          <h2 className="contact-title">
            Birlikte akılda<br />kalan bir şey<br />üretelim
            <Sticker color="#E05AD8" rotate={-8} className="contact-sticker contact-sticker--a">UI/UX Tasarım</Sticker>
            <Sticker color="#7AC70C" rotate={8} className="contact-sticker contact-sticker--b">React</Sticker>
            <Sticker color="#8A6CF0" rotate={-6} className="contact-sticker contact-sticker--c">Frontend</Sticker>
          </h2>

          <a href={`mailto:${personalInfo.email}`} className="pill-btn">Hadi konuşalım</a>
        </div>
      </motion.div>

      <footer className="footer">
        <a href="#top" className="footer-brand">DENİZ ÇAYLI<sup>®</sup></a>

        <nav className="footer-links" aria-label="Alt menü">
          {FOOTER_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label.toLocaleUpperCase('tr')}</a>)}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        </nav>
      </footer>
    </section>
  );
};

export default Contact;
