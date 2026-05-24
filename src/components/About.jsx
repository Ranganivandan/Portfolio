import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="orb" style={{
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(255,101,132,0.12), transparent)',
        filter: 'blur(80px)',
        position: 'absolute',
        right: 0,
        top: 0,
        pointerEvents: 'none'
      }} />

      <div className="section-wrapper">
        <div className={`fade-up ${inView ? 'visible' : ''}`}>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">The story behind the code</p>
        </div>

        <div className="about-grid">
          {/* Image */}
          <div className={`about-image-wrapper fade-left ${inView ? 'visible' : ''}`}>
            <div className="about-image-box">
              <span style={{ position: 'relative', zIndex: 1, fontSize: '6rem' }}>🧑‍💻</span>
              <div className="about-glow" />
            </div>
            <div className="about-experience-badge">
              <span className="number">3+</span>
              <span className="label">Years Coding</span>
            </div>
          </div>

          {/* Text */}
          <div className={`about-text fade-right ${inView ? 'visible' : ''}`}>
            <h3>
              Building Digital Experiences that{' '}
              <span className="gradient-text">Inspire & Perform</span>
            </h3>

            <p>
              I'm <strong style={{ color: 'var(--text-primary)' }}>Vandan Rangani</strong>, a passionate Full Stack Developer from Jamnagar, Gujarat, India. Currently pursuing my B.Tech in Information Technology at G H Patel College of Engineering & Technology (GPA: 8.54/10).
            </p>

            <p>
              My expertise spans the entire MERN stack with deep exposure to DevOps practices — from containerizing applications with Docker to deploying on GCP with CI/CD pipelines. I'm obsessed with performance optimization and have achieved an <strong style={{ color: 'var(--accent-green)' }}>87% rendering speed improvement</strong> in production apps.
            </p>

            <p>
              As a hackathon competitor and open-source contributor, I thrive in challenging environments. I've competed against 2,000+ teams at IIT Gandhinagar, contributed 1,000+ lines of production code to real-world apps, and currently contribute to <strong style={{ color: 'var(--accent-cyan)' }}>Aden</strong> — a <strong style={{ color: 'var(--accent-gold)' }}>Y Combinator-backed</strong> company.
            </p>

            <div className="about-info-grid">
              {[
                { label: 'Location', value: '📍 Jamnagar, Gujarat' },
                { label: 'Email', value: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a> },
                { label: 'X (Twitter)', value: <a href={personalInfo.twitter} target="_blank" rel="noreferrer">@RanganiVandan ↗</a> },
                { label: 'Website', value: <a href={personalInfo.website} target="_blank" rel="noreferrer">vandan.zeat.in ↗</a> },
                { label: 'Status', value: <span style={{ color: 'var(--accent-green)' }}>● Available for Work</span> },
                { label: 'Degree', value: 'B.Tech IT (2023-2027)' },
                { label: 'GPA', value: <span style={{ color: 'var(--accent-gold)' }}>8.54 / 10.0</span> },
              ].map((item, i) => (
                <div className="about-info-item" key={i}>
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary">
                GitHub ↗
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="btn-secondary">
                𝕏 Twitter ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
