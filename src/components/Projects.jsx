import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      <div
        className="project-card-glow"
        style={{ background: project.color }}
      />

      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <span className="project-period">{project.period}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>

      <ul className="project-highlights">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {project.achievement && (
        <div className="project-achievement">
          🏆 {project.achievement}
        </div>
      )}

      <div className="project-tags">
        {project.techStack.map((tech, i) => (
          <span className="project-tag" key={i}>{tech}</span>
        ))}
      </div>

      <div className="project-footer">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          background: 'rgba(255,255,255,0.05)',
          padding: '4px 12px',
          borderRadius: '50px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          View Project →
        </span>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="projects-section" id="projects">
      <div className="orb" style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(108,99,255,0.1), transparent)',
        filter: 'blur(80px)',
        position: 'absolute',
        left: '-100px',
        top: '20%',
        pointerEvents: 'none'
      }} />

      <div className="section-wrapper">
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Real-world applications built with performance, scalability, and impact in mind
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="https://github.com/ranganivandan"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
