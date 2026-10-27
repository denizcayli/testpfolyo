// src/App.jsx
import React from 'react';
import Hero from './components/creatie/Hero';
import About from './components/creatie/About';
import Projects from './components/creatie/Projects';
import Services from './components/creatie/Services';
import Journey from './components/creatie/Journey';
import Certificates from './components/creatie/Certificates';
import Faq from './components/creatie/Faq';
import Contact from './components/creatie/Contact';
import Dock from './components/creatie/Dock';

/*
   Tek sayfalık düzen (Creatie stili). Eski çok sayfalı rotalar
   kaldırıldı; menü artık alttaki dock'tan bölümlere kaydırır.
*/
function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Journey />
        <Certificates />
        <Faq />
        <Contact />
      </main>
      <Dock />
    </>
  );
}

export default App;
