import { useInView } from 'react-intersection-observer';
import { experience, education } from '../data/portfolioData';

const TimelineItem = ({ item, side, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`timeline-item ${side}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.7s ease ${index * 150}ms`
      }}
    >
      {side === 'left' ? (
        <>
          <div className="timeline-content">
            <span
              className="timeline-type-badge"
              style={{
                background: `${item.color}20`,
                color: item.color,
                border: `1px solid ${item.color}40`
              }}
            >
              {item.type === 'work' ? '💼 Work' : '🎓 Education'}
            </span>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
            <div className="timeline-meta">{item.period} • {item.location}</div>
            <ul className="timeline-points">
              {item.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div className="timeline-dot-col">
            <div className="timeline-dot" style={{ background: item.color }} />
          </div>
          <div />
        </>
      ) : (
        <>
          <div />
          <div className="timeline-dot-col">
            <div className="timeline-dot" style={{ background: item.color }} />
          </div>
          <div className="timeline-content">
            <span
              className="timeline-type-badge"
              style={{
                background: `${item.color}20`,
                color: item.color,
                border: `1px solid ${item.color}40`
              }}
            >
              {item.type === 'work' ? '💼 Work' : '🎓 Education'}
            </span>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
            <div className="timeline-meta">{item.period} • {item.location}</div>
            <ul className="timeline-points">
              {item.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: eduRef, inView: eduInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="experience-section" id="experience">
      <div className="section-wrapper">
        {/* Experience */}
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>
          <h2 className="section-title">My <span>Journey</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">Experience & education that shaped who I am</p>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              side={i % 2 === 0 ? 'left' : 'right'}
              index={i}
            />
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: 80 }}>
          <h3
            ref={eduRef}
            style={{
              textAlign: 'center',
              fontFamily: 'var(--font-primary)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 32,
              opacity: eduInView ? 1 : 0,
              transform: eduInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease'
            }}
          >
            🎓 Education
          </h3>

          {education.map((edu) => (
            <div
              key={edu.id}
              className="education-card"
              style={{
                opacity: eduInView ? 1 : 0,
                transform: eduInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s ease 0.2s'
              }}
            >
              <div>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-meta">
                  {edu.period} • {edu.location}
                </div>
              </div>
              <div className="education-gpa">
                <span className="number">{edu.gpa.split('/')[0]}</span>
                <span className="label">GPA / 10.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
