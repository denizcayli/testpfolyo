// src/components/creatie/Projects.jsx
import React from 'react';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/content';
import { SectionHead, TiltCard } from './Bits';
import { HERO_IMAGE } from './Hero';

const TILTS = [-3, 3, -2.5, 2, -3.5, 2.5];

/* Ataç */
const Clip = () => (
  <svg className="clip" width="34" height="46" viewBox="0 0 34 46" fill="none" aria-hidden="true">
    <path
      d="M22 14 9 34a6 6 0 0 0 10 6l15-23a10 10 0 0 0-16-11L4 27"
      stroke="#3B55E6" strokeWidth="3.5" strokeLinecap="round"
    />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const year = '2026';
  const link = project.liveUrl || project.githubUrl;

  return (
    <TiltCard tilt={TILTS[index % TILTS.length]} delay={(index % 2) * 0.08} className="window-card">
      <Clip />
      <div className="window-bar" aria-hidden="true">
        <i className="shape shape--circle" />
        <i className="shape shape--square" />
        <i className="shape shape--triangle" />
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer" className="window-media" aria-label={`${project.title} projesini aç`}>
        <img src={project.imageUrl} alt={`${project.title} ekran görüntüsü`} loading="lazy" />
        <span className="window-overlay">
          <span>{project.context}</span>
          <span className="window-overlay-cta">İncele <FiArrowUpRight /></span>
        </span>
      </a>

      <div className="window-foot">
        <h3>{project.title}</h3>
        <p className="window-meta">
          <span>{project.subtitle}</span>
          <span>{project.technologies[0]}</span>
          <span>{year}</span>
        </p>
      </div>

      <div className="window-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FiGithub /> Kod</a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><FiArrowUpRight /> Canlı</a>
        )}
      </div>
    </TiltCard>
  );
};

const Projects = () => (
  <section className="section sky" id="projeler" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>

    <div className="wrap">
      <SectionHead label="Projeler" icon="folder">
        Hikâye anlatan<br />projeler
      </SectionHead>

      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </div>
  </section>
);

export default Projects;
