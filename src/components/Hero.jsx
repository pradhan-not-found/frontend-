export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: 'var(--color-arctic-powder)', paddingTop: '6rem' }}>
      
      {/* Background Video Wrapper */}
      <div style={{ position: 'absolute', top: '15vh', left: 0, width: '100%', height: '85vh', zIndex: 0, pointerEvents: 'none' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4" type="video/mp4" />
        </video>
        {/* Gradient Mask to blend top into Arctic Powder */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '8rem', background: 'linear-gradient(to bottom, #F1F6F4, transparent)' }}></div>
      </div>

      {/* Hero Content Alignment */}
      <div className="hero-content-wrapper" style={{ maxWidth: '80rem', width: '100%', margin: '0 auto', position: 'relative', zIndex: 10, padding: '4rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '10vh' }}>
        
        {/* Native CSS Slide Up Fade applied via 'hero-animate' class */}
        <h1 className="hero-animate" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', fontFamily: 'var(--font-inter)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0, textShadow: '0 4px 12px rgba(241, 246, 244, 0.4)' }}>
          <span style={{ color: '#172B36' }}>NexAI offers</span><br />
          <span style={{ color: 'rgba(23, 43, 54, 0.75)' }}>information</span><br />
          <span style={{ color: 'rgba(23, 43, 54, 0.75)' }}>and resources to scale</span><br />
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
            <span style={{ color: 'rgba(23, 43, 54, 0.75)' }}>your</span>
            {/* The Eye/Pill Inline Visual Element */}
            <span style={{ width: 'clamp(3rem, 5vw, 4.5rem)', height: 'clamp(1.6rem, 3vw, 2.25rem)', border: '2.5px solid #172B36', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(241, 246, 244, 0.3)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
              <span style={{ width: '0.6rem', height: '0.6rem', backgroundColor: '#172B36', borderRadius: '50%' }}></span>
            </span>
            <span style={{ color: 'rgba(23, 43, 54, 0.75)' }}>AI infrastructure.</span>
          </div>
        </h1>

        {/* Search Pill Component */}
        <div className="hero-animate" style={{ animationDelay: '150ms', marginTop: '3.5rem', backgroundColor: '#fff', borderRadius: '9999px', border: '1px solid rgba(23,43,54,0.1)', padding: '0.4rem 0.4rem 0.4rem 1.5rem', display: 'inline-flex', alignItems: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', maxWidth: '100%' }}>
          <input 
            type="text" 
            placeholder="Ask me anything..." 
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: '#172B36', fontSize: '1.05rem', width: '260px', maxWidth: '60vw', fontFamily: 'var(--font-inter)' }} 
          />
          <button className="search-btn" style={{ backgroundColor: '#172B36', color: '#fff', width: '2.75rem', height: '2.75rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', flexShrink: 0, transition: 'background-color 0.2s, transform 0.2s', boxShadow: '0 4px 10px rgba(23,43,54,0.2)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src="/SVGs/chevron-right.svg" alt="" style={{ width: '1.25rem', height: '1.25rem', filter: 'invert(1)' }} />
          </button>
        </div>

      </div>

      {/* Architectural Edge Anchors */}
      <div className="edge-anchor right-middle" style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, color: '#172B36', zIndex: 10, border: '1px solid rgba(23,43,54,0.1)' }}>
        pl — en
      </div>
      
      <div className="edge-anchor left-bottom" style={{ position: 'absolute', left: '2rem', bottom: '2rem', fontSize: '0.75rem', fontWeight: 600, color: '#172B36', zIndex: 10 }}>
        2026
      </div>
      
      <div className="edge-anchor right-bottom" style={{ position: 'absolute', right: '2rem', bottom: '2rem', fontSize: '0.75rem', fontWeight: 600, color: '#172B36', zIndex: 10 }}>
        mental health tools
      </div>

      <style>{`
        .search-btn:hover { background-color: #114C5A !important; }
        .hero-text-container { margin-left: 8.33%; width: 83.33%; }
        
        @media (max-width: 768px) {
          .hero-text-container { margin-left: 0; width: 100%; }
          .edge-anchor.right-middle { display: none; }
          .edge-anchor.left-bottom { bottom: 1rem; left: 1.5rem; }
          .edge-anchor.right-bottom { bottom: 1rem; right: 1.5rem; }
        }
      `}</style>
    </section>
  )
}
