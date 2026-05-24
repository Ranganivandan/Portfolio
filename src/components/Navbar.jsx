import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="hero" smooth duration={600} className="navbar-logo" style={{ cursor: 'pointer' }}>
            VR.
          </Link>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  spy
                  onSetActive={() => setActive(link.to)}
                  className={active === link.to ? 'active' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:vandanrangani21@gmail.com"
                className="navbar-cta"
                style={{ textDecoration: 'none', cursor: 'pointer', display: 'block', padding: '8px 20px', borderRadius: '50px', background: 'linear-gradient(135deg,#6c63ff,#ff6584,#43e97b)', color: 'white', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Hire Me ✦
              </a>
            </li>
          </ul>

          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={600}
            style={{ cursor: 'pointer' }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="mailto:vandanrangani21@gmail.com"
          style={{ marginTop: 16, background: 'linear-gradient(135deg,#6c63ff,#ff6584)', padding: '14px 20px', borderRadius: 16, color: 'white', fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}
        >
          Hire Me ✦
        </a>
      </div>
    </>
  );
};

export default Navbar;
