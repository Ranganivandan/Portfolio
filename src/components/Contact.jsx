import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Toaster, toast } from 'react-hot-toast';
import { personalInfo } from '../data/portfolioData';

const contactLinks = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: '✉️',
    bg: 'rgba(108,99,255,0.15)',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vandanrangani',
    href: personalInfo.linkedin,
    icon: '💼',
    bg: 'rgba(56,189,248,0.12)',
  },
  {
    label: 'GitHub',
    value: 'github.com/ranganivandan',
    href: personalInfo.github,
    icon: '🐙',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    label: 'X (Twitter)',
    value: '@RanganiVandan',
    href: personalInfo.twitter,
    icon: '𝕏',
    bg: 'rgba(255,255,255,0.08)',
  },
  {
    label: 'Website',
    value: 'vandan.zeat.in',
    href: personalInfo.website,
    icon: '🌐',
    bg: 'rgba(67,233,123,0.12)',
  },
];

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSending(true);

    // Simulate form submission (replace with EmailJS or API)
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);

    toast.success('Message sent! I\'ll get back to you soon 🚀', {
      duration: 4000,
      style: {
        background: 'rgba(9,13,31,0.95)',
        color: '#fff',
        border: '1px solid rgba(108,99,255,0.3)',
        borderRadius: '12px',
        backdropFilter: 'blur(20px)',
      },
    });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <Toaster position="bottom-right" />

      <div className="orb" style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(108,99,255,0.12), transparent)',
        filter: 'blur(80px)',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none'
      }} />

      <div className="section-wrapper">
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info */}
          <div className={`contact-info fade-left ${inView ? 'visible' : ''}`}>
            <h3>
              Let's <span className="gradient-text">Collaborate</span>
            </h3>
            <p>
              I'm currently open to freelance projects, internships, and full-time opportunities.
              Whether you need a full-stack web app, a performance-optimized frontend, or DevOps
              infrastructure — let's make it happen.
            </p>

            <div className="contact-links">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-link-item"
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: link.bg }}
                  >
                    {link.icon}
                  </div>
                  <div className="contact-link-text">
                    <div className="contact-link-label">{link.label}</div>
                    <div className="contact-link-value">{link.value}</div>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className={`fade-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h4 style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: 28
              }}>
                Send a Message 💬
              </h4>

              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry / Collaboration / Job Opportunity"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary form-submit"
                disabled={sending}
                style={{ opacity: sending ? 0.7 : 1 }}
              >
                {sending ? (
                  <>⏳ Sending...</>
                ) : (
                  <>Send Message 🚀</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
