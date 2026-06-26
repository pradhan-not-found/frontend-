import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="navbar-header" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, padding: '1.5rem 0', backgroundColor: 'rgba(241, 246, 244, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(217, 232, 226, 0.5)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/SVGs/cube-16-solid.svg" alt="" style={{ width: '1.25rem', height: '1.25rem', filter: 'invert(16%) sepia(21%) saturate(1637%) hue-rotate(159deg) brightness(96%) contrast(89%)' }} />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 700, fontSize: '1.25rem', color: '#172B36' }}>NexAI</span>
          </div>

          {/* Desktop Links */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
            <a href="#features" className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#114C5A', textDecoration: 'none', textTransform: 'lowercase' }}>service</a>
            <a href="#features" className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#114C5A', textDecoration: 'none', textTransform: 'lowercase' }}>resources</a>
            <a href="#about" className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#114C5A', textDecoration: 'none', textTransform: 'lowercase' }}>about us</a>
          </nav>

          {/* Right Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#pricing" className="desktop-nav" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#172B36', textDecoration: 'none', textTransform: 'lowercase' }}>find help</a>
            <a href="#pricing" className="get-started-btn" style={{ padding: '0.625rem 1.25rem', backgroundColor: '#172B36', color: '#fff', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background-color 0.2s ease' }}>
              get started 
              <img src="/SVGs/arrow-trending-up.svg" alt="" style={{ width: '0.75rem', height: '0.75rem', filter: 'invert(1)' }} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '0.5rem' }}>
              <span style={{ width: '1.25rem', height: '2px', backgroundColor: '#172B36', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}></span>
              <span style={{ width: '1.25rem', height: '2px', backgroundColor: '#172B36', transition: '0.3s', opacity: isOpen ? 0 : 1 }}></span>
              <span style={{ width: '1.25rem', height: '2px', backgroundColor: '#172B36', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} style={{ position: 'fixed', top: '4.5rem', left: 0, width: '100%', backgroundColor: '#F1F6F4', borderBottom: '1px solid rgba(217, 232, 226, 0.5)', zIndex: 40, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease', transform: isOpen ? 'translateY(0)' : 'translateY(-100%)', opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}>
        <a href="#features" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: '#114C5A', textDecoration: 'none', textTransform: 'lowercase', padding: '0.5rem 0', borderBottom: '1px solid rgba(217, 232, 226, 0.5)' }}>service</a>
        <a href="#features" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: '#114C5A', textDecoration: 'none', textTransform: 'lowercase', padding: '0.5rem 0', borderBottom: '1px solid rgba(217, 232, 226, 0.5)' }}>resources</a>
        <a href="#about" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: '#114C5A', textDecoration: 'none', textTransform: 'lowercase', padding: '0.5rem 0', borderBottom: '1px solid rgba(217, 232, 226, 0.5)' }}>about us</a>
        <a href="#pricing" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: '#172B36', textDecoration: 'none', textTransform: 'lowercase', padding: '0.5rem 0' }}>find help</a>
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-toggle { display: none !important; }
        .get-started-btn:hover { background-color: #114C5A !important; }
        .nav-link:hover { color: #FF9932 !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
