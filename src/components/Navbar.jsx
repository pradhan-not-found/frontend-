import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Container to center the top-attached tab */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        
        <header className="navbar-header" style={{ width: '92%', maxWidth: '1200px', backgroundColor: '#172B36', borderBottomLeftRadius: '1.5rem', borderBottomRightRadius: '1.5rem', padding: '1.25rem 2.5rem', pointerEvents: 'auto', boxShadow: '0 10px 30px rgba(23,43,54,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s ease' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/SVGs/cube-16-solid.svg" alt="" style={{ width: '1.5rem', height: '1.5rem', filter: 'invert(1)' }} />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 700, fontSize: '1.25rem', color: '#fff', letterSpacing: '0.05em' }}>NEXAI</span>
          </div>

          {/* Desktop Links */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#features" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#F1F6F4', textDecoration: 'none' }}>Features</a>
            <a href="#testimonials" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#F1F6F4', textDecoration: 'none' }}>Customers</a>
            <a href="#pricing" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#F1F6F4', textDecoration: 'none' }}>Pricing</a>
            <a href="#pricing" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>Login</a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '0.5rem' }}>
            <span style={{ width: '1.25rem', height: '2px', backgroundColor: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}></span>
            <span style={{ width: '1.25rem', height: '2px', backgroundColor: '#fff', transition: '0.3s', opacity: isOpen ? 0 : 1 }}></span>
            <span style={{ width: '1.25rem', height: '2px', backgroundColor: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}></span>
          </button>

        </header>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} style={{ position: 'fixed', top: '5rem', left: '50%', transform: isOpen ? 'translate(-50%, 0)' : 'translate(-50%, -150%)', width: '92%', maxWidth: '1200px', backgroundColor: '#172B36', borderRadius: '1.5rem', zIndex: 40, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease', opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none', boxShadow: '0 10px 30px rgba(23,43,54,0.2)' }}>
        <a href="#features" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: '#F1F6F4', textDecoration: 'none', padding: '0.5rem 1rem', borderBottom: '1px solid rgba(241, 246, 244, 0.1)' }}>Features</a>
        <a href="#testimonials" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: '#F1F6F4', textDecoration: 'none', padding: '0.5rem 1rem', borderBottom: '1px solid rgba(241, 246, 244, 0.1)' }}>Customers</a>
        <a href="#pricing" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: '#F1F6F4', textDecoration: 'none', padding: '0.5rem 1rem', borderBottom: '1px solid rgba(241, 246, 244, 0.1)' }}>Pricing</a>
        <a href="#pricing" onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '0.5rem 1rem' }}>Login</a>
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-toggle { display: none !important; }
        .nav-link { transition: color 0.2s ease, opacity 0.2s ease; opacity: 0.8; }
        .nav-link:hover { opacity: 1; color: #FFC801 !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .navbar-header { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </>
  )
}
