import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: '🐙', href: personalInfo.github, label: 'GitHub' },
    { icon: '💼', href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: '𝕏', href: personalInfo.twitter, label: 'X (Twitter)' },
    { icon: '✉️', href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: '🌐', href: personalInfo.website, label: 'Website' },
  ];

  const quickLinks = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="footer">
      <div className="section-wrapper">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          marginBottom: 48,
          textAlign: 'left'
        }}>
          {/* Brand */}
          <div>
            <span className="footer-logo" style={{ textAlign: 'left', display: 'inline-block', marginBottom: 12 }}>VR.</span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 260 }}>
              Full Stack Developer building scalable, performant, and impactful digital experiences.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="footer-social"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: '1rem', fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-purple)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: '1rem', fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '✉️', text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: '𝕏', text: '@RanganiVandan', href: personalInfo.twitter },
                { icon: '📍', text: 'Jamnagar, Gujarat, India', href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16
        }}>
          <p className="footer-copy">
            © {year} <strong style={{ color: 'var(--text-primary)' }}>Vandan Rangani</strong>. Crafted with <span>♥</span> in Gujarat, India
          </p>
          <Link
            to="hero"
            smooth
            duration={800}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-purple)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
