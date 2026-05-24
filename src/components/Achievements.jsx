import { useInView } from 'react-intersection-observer';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="achievements-section" id="achievements">
      <div className="orb" style={{
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(250,130,49,0.08), transparent)',
        filter: 'blur(80px)',
        position: 'absolute',
        right: '-100px',
        bottom: 0,
        pointerEvents: 'none'
      }} />

      <div className="section-wrapper">
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span>Achievements</span> & Recognition
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Competing, winning, and making an impact on the national stage
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`achievement-card fade-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="achievement-icon">{item.icon}</span>
              <div
                className="achievement-title"
                style={{ color: item.color }}
              >
                {item.title}
              </div>
              <div className="achievement-event" style={{ color: 'var(--text-primary)' }}>
                {item.event}
              </div>
              <div className="achievement-detail">{item.detail}</div>
              <span className="achievement-metric">{item.metric}</span>
            </div>
          ))}
        </div>

        {/* Open Source Programs Banner */}
        <div
          className={`fade-up ${inView ? 'visible' : ''}`}
          style={{
            marginTop: 48,
            background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(67,233,123,0.08))',
            border: '1px solid rgba(108,99,255,0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
            transitionDelay: '0.4s'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-primary)', fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>
              🌟 Open Source Programs
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Selected for <strong style={{ color: 'var(--accent-green)' }}>SSOC'25</strong> and{' '}
              <strong style={{ color: 'var(--accent-purple)' }}>GSSOC'25</strong> from 7,000+ applicants
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center'
          }}>
            <div style={{
              background: 'rgba(108,99,255,0.15)',
              border: '1px solid rgba(108,99,255,0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 24px',
              textAlign: 'center'
            }}>
              <div style={{ fontFamily: 'var(--font-primary)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-purple)' }}>SSOC'25</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Selected</div>
            </div>
            <div style={{
              background: 'rgba(67,233,123,0.1)',
              border: '1px solid rgba(67,233,123,0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 24px',
              textAlign: 'center'
            }}>
              <div style={{ fontFamily: 'var(--font-primary)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-green)' }}>GSSOC'25</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Selected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
