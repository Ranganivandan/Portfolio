import { useEffect, useState } from 'react';
import './index.css';
import './styles/components.css';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/* ── Loading Screen ── */
const Loader = ({ hidden }) => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      opacity: hidden ? 0 : 1,
      pointerEvents: hidden ? 'none' : 'all',
      transition: 'opacity 0.6s ease',
      padding: '0 20px',
      textAlign: 'center',
    }}
  >
    <div style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'clamp(2.5rem, 15vw, 4rem)',
      fontWeight: 800,
      background: 'linear-gradient(90deg,#6c63ff,#ff6584,#43e97b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: 32,
    }}>
      VR.
    </div>
    <div style={{
      color: 'var(--text-muted)',
      fontSize: 'clamp(0.75rem, 4vw, 0.9rem)',
      marginBottom: 24,
      fontFamily: 'var(--font-code)',
      letterSpacing: '1px',
    }}>
      Building something amazing...
    </div>
    <div style={{
      width: '80%',
      maxWidth: 240,
      height: 4,
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 2,
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        background: 'linear-gradient(90deg,#6c63ff,#ff6584,#43e97b)',
        borderRadius: 2,
        animation: 'load-bar 1.4s ease-in-out forwards',
      }} />
    </div>
  </div>
);

/* ── App ── */
function App() {
  const [loaderHidden, setLoaderHidden] = useState(false);

  useEffect(() => {
    // Start fading out loader after 1.6s (bar animation done)
    const timer = setTimeout(() => setLoaderHidden(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader sits on top and fades out — content always mounted */}
      <Loader hidden={loaderHidden} />

      {/* Main content always rendered — no conditional unmount */}
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
