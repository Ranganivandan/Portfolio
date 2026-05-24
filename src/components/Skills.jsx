import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { skills, skillIcons } from '../data/portfolioData';

const SkillBar = ({ name, level, inView, delay }) => (
  <div className="skill-item" style={{ transitionDelay: `${delay}ms` }}>
    <div className="skill-item-header">
      <span className="skill-name">
        <span className="skill-icon">{skillIcons[name] || '⚡'}</span>
        {name}
      </span>
      <span className="skill-percent">{level}%</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{ width: inView ? `${level}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const allTechs = Object.values(skills).flat().map(s => s.name);

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="section-wrapper">
        <div className={`fade-up ${inView ? 'visible' : ''}`}>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">Technologies I wield to build powerful digital experiences</p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          marginBottom: 48
        }}
          className={`fade-up ${inView ? 'visible' : ''}`}
        >
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              style={{
                background: activeTab === category
                  ? 'linear-gradient(135deg, #6c63ff, #ff6584)'
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeTab === category ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '50px',
                padding: '10px 24px',
                color: activeTab === category ? 'white' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-primary)',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="skills-grid">
          <div
            className={`skill-category-card fade-up ${inView ? 'visible' : ''}`}
            style={{ gridColumn: '1 / -1' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
              {(skills[activeTab] || []).map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  inView={inView}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tech Cloud */}
        <div className={`fade-up ${inView ? 'visible' : ''}`} style={{ marginTop: 64 }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: 24
          }}>
            Complete Tech Stack
          </h3>
          <div className="tech-cloud">
            {allTechs.map((tech, i) => (
              <span className="tech-tag" key={i}>
                {skillIcons[tech] || '⚡'} {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
