// src/components/creatie/Faq.jsx
import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { faqs } from '../../data/content';
import { SectionHead } from './Bits';
import { LimeLoop, Cloud, Bulb, ArrowDoodle, Confetti, ZigZag, Diamond } from './Doodles';

const TONES = ['pink', 'lime', 'yellow', 'blue', 'mint'];

const Faq = () => {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section className="section paper" id="sss">
      <LimeLoop style={{ top: '50%', left: '6%' }} float={6} rotate={-20} />
      <Cloud style={{ top: 60, right: '24%' }} float={6} />
      <Bulb style={{ bottom: 120, right: '8%' }} float={6} />
      <ArrowDoodle style={{ bottom: 60, left: '40%' }} float={5} />
      <Confetti style={{ bottom: 40, right: '30%' }} float={6} />
      <ZigZag style={{ bottom: 30, right: '12%' }} float={4} />
      <Diamond style={{ top: 140, left: '10%' }} float={6} />

      <div className="wrap wrap--narrow">
        <SectionHead label="SSS" icon="help">
          Başlamadan önce<br />cevaplar
        </SectionHead>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                className={`faq-item tone-${TONES[i % TONES.length]} ${isOpen ? 'is-open' : ''}`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: 'spring', stiffness: 170, damping: 20, delay: i * 0.04 }}
              >
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                    <FiPlus />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
