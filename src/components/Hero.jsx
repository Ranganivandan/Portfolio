import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import ParticleCanvas from './ParticleCanvas';
import { personalInfo, stats } from '../data/portfolioData';
import { useTypewriter, useCountUp } from '../hooks/useAnimations';

/* ── Stat Card with native count-up ── */
const StatCard = ({ stat, started }) => {
  const raw = useCountUp(stat.value, 2200, started);
  const isFloat = stat.value % 1 !== 0;
  const display = isFloat ? raw.toFixed(2) : Math.floor(raw).toString();

  return (
    <div className="hero-stat">
      <div className="hero-stat-value">
        {display}{stat.suffix}
      </div>
      <div className="hero-stat-label">{stat.label}</div>
    </div>
  );
};

/* ── Hero Section ── */
const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'DevOps Engineer',
    'Hackathon Winner',
    'Open Source Contributor',
    'Freelancer',
  ];

  const typed = useTypewriter(roles, 80, 1800);

  const fadeStyle = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section className="hero-section" id="hero">
      <ParticleCanvas />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-content" ref={ref}>
        {/* ── Left ── */}
        <div>
          {/* Available badge */}
          <div className="hero-badge" style={fadeStyle(0)}>
            <span className="dot" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="hero-name" style={fadeStyle(0.1)}>
            <span className="line-1">Hi, I'm</span>
            <br />
            <span className="line-2">{personalInfo.name}</span>
          </h1>

          {/* Typewriter */}
          <div className="hero-typewriter" style={fadeStyle(0.2)}>
            {typed}
            <span style={{
              display: 'inline-block',
              width: 2,
              height: '1.1em',
              background: 'var(--accent-purple)',
              marginLeft: 3,
              verticalAlign: 'text-bottom',
              animation: 'blink 1s step-end infinite',
            }} />
          </div>

          {/* Summary */}
          <p className="hero-description" style={fadeStyle(0.3)}>
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns" style={fadeStyle(0.4)}>
            <Link to="projects" smooth duration={700} className="btn-primary" style={{ cursor: 'pointer' }}>
              View My Work ↓
            </Link>
            <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
              Let's Talk →
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={fadeStyle(0.5)}>
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} started={inView} />
            ))}
          </div>
        </div>

        {/* ── Right Avatar ── */}
        <div className="hero-avatar-wrapper">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div className="hero-avatar-ring">
              <div className="hero-avatar-inner">
                👨‍💻
              </div>
            </div>

            {/* Floating tech chips */}
            {[
              { text: '⚛️ React.js', style: { top: '5%', left: '-22%' } },
              { text: '🟩 Node.js', style: { top: '25%', right: '-27%' } },
              { text: '🐳 Docker',  style: { bottom: '25%', left: '-22%' } },
              { text: '☁️ GCP',    style: { bottom: '5%', right: '-20%' } },
            ].map((chip, i) => (
              <div
                key={i}
                className="hero-chip"
                style={{
                  position: 'absolute',
                  animationDelay: `${i * 0.8}s`,
                  ...chip.style,
                }}
              >
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 8, opacity: 0.45,
        pointerEvents: 'none',
      }}>
        <span style={{
          fontSize: '0.7rem', letterSpacing: '2px',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>
          Scroll
        </span>
        <div style={{
          width: 22, height: 38,
          border: '2px solid rgba(255,255,255,0.15)',
          borderRadius: 11, display: 'flex',
          justifyContent: 'center', paddingTop: 5,
        }}>
          <div style={{
            width: 3, height: 7,
            background: 'var(--accent-purple)',
            borderRadius: 2,
            animation: 'float 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
