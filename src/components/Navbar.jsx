import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = ['Platform', 'Features', 'Pricing', 'Docs', 'Blog'];

  return (
    <>
      <header style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        backgroundColor: 'rgba(23,43,54,0.82)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(217,232,226,0.12)'
      }}>
        <div className="navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 auto', maxWidth: '1440px' }}>
          
          {/* Left - Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#FFC801', animation: 'pulse 2s ease-in-out infinite', fontSize: '18px' }}>&#x25B8;</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', color: '#FFC801' }}>NeuralOps</span>
          </a>

          {/* Center - Nav Links */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '24px' }}>
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="nav-link-desktop">
                {link}
              </a>
            ))}
          </nav>

          {/* Right - Buttons */}
          <div className="desktop-buttons" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="#signin" className="btn-signin">Sign In</a>
            <a href="#getstarted" className="btn-getstarted">Get Started</a>
          </div>

          {/* Mobile Hamburger */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', zIndex: 51, display: 'none', flexDirection: 'column', gap: '5px' }}>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#F1F6F4', transition: 'all 300ms ease-in-out', transformOrigin: 'left center', transform: isOpen ? 'rotate(45deg) translate(0px, -2px)' : 'none' }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#F1F6F4', transition: 'all 300ms ease-in-out', opacity: isOpen ? 0 : 1 }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#F1F6F4', transition: 'all 300ms ease-in-out', transformOrigin: 'left center', transform: isOpen ? 'rotate(-45deg) translate(0px, 2px)' : 'none' }}></span>
          </button>

        </div>
      </header>

      {/* Mobile Overlay */}
      <div style={{ 
        position: 'fixed', inset: 0, zIndex: 40, backgroundColor: '#172B36',
        opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 300ms ease-in-out', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '24px'
      }}>
        {navLinks.map((link, idx) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{
            fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '24px', textDecoration: 'none',
            color: idx === 1 ? '#FFC801' : '#F1F6F4', // Active link logic placeholder
          }}>
            {link}
          </a>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px', width: '80%', alignItems: 'center' }}>
          <a href="#signin" onClick={() => setIsOpen(false)} className="btn-signin" style={{ width: '100%', textAlign: 'center' }}>Sign In</a>
          <a href="#getstarted" onClick={() => setIsOpen(false)} className="btn-getstarted" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
        </div>
      </div>

      <style>{`
        .navbar-container {
          padding: 16px 120px;
        }
        .nav-link-desktop {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 15px;
          color: rgba(241,246,244,0.7);
          text-decoration: none;
          transition: color 150ms ease-out;
        }
        .nav-link-desktop:hover {
          color: #F1F6F4;
        }
        .btn-signin {
          font-family: var(--font-body);
          font-size: 15px;
          color: #F1F6F4;
          background: transparent;
          border: 1px solid rgba(217,232,226,0.25);
          border-radius: 6px;
          padding: 8px 16px;
          text-decoration: none;
          transition: border-color 150ms ease-out;
        }
        .btn-signin:hover {
          border-color: #FFC801;
        }
        .btn-getstarted {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 15px;
          color: #172B36;
          background: linear-gradient(135deg, #FFC801, #FF9932);
          border-radius: 6px;
          padding: 8px 16px;
          text-decoration: none;
          transition: all 150ms ease-out;
          display: inline-block;
        }
        .btn-getstarted:hover {
          filter: brightness(1.1);
          transform: scale(1.02);
        }

        @media (max-width: 1024px) {
          .navbar-container { padding: 16px 24px; }
          .desktop-nav { display: none !important; }
          .desktop-buttons { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
