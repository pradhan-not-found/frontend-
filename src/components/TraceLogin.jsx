import React, { useState, useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────
   Noise overlay (SVG fractal noise, 6% opacity, fixed position)
───────────────────────────────────────────────────────────────*/
const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function TraceLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,300;1,400&display=swap');

        .tl-root * { box-sizing: border-box; }

        /* Staggered fade-up animation */
        @keyframes tl-fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .tl-a1 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 0ms   forwards; }
        .tl-a2 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 60ms  forwards; }
        .tl-a3 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 100ms forwards; }
        .tl-a4 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 140ms forwards; }
        .tl-a5 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 180ms forwards; }
        .tl-a6 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 220ms forwards; }
        .tl-a7 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 260ms forwards; }
        .tl-a8 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 300ms forwards; }
        .tl-a9 { opacity:0; animation: tl-fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) 340ms forwards; }

        /* micro press */
        .micro:active { transform: scale(0.97); }

        /* visual column slide-in */
        @keyframes tl-slideIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .tl-visual { opacity:0; animation: tl-slideIn 0.55s cubic-bezier(.22,.68,0,1.2) 0.15s forwards; }

        /* noise overlay */
        .tl-noise {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 9999;
          opacity: 0.06;
          background-image: ${noiseSvg};
          background-repeat: repeat;
          background-size: 128px 128px;
        }

        /* Input autofill */
        .tl-input:-webkit-autofill,
        .tl-input:-webkit-autofill:hover,
        .tl-input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #09090b inset !important;
          -webkit-text-fill-color: #f4f4f5 !important;
          caret-color: #f4f4f5;
          transition: background-color 5000s ease-in-out 0s;
        }

        /* Social buttons */
        .tl-social-btn {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #27272a;
          background: rgba(24,24,27,0.4);
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: #e4e4e7;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          white-space: nowrap;
        }
        .tl-social-btn:hover {
          background: rgba(24,24,27,0.8);
          border-color: #3f3f46;
        }

        /* Form input */
        .tl-input {
          width: 100%;
          background: rgba(9,9,11,0.6);
          border: 1px solid rgba(39,39,42,0.8);
          outline: none;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          color: #f4f4f5;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .tl-input::placeholder { color: #52525b; }
        .tl-input:focus {
          border-color: #a1a1aa;
          box-shadow: 0 0 0 1px rgba(161,161,170,0.2);
        }

        /* Submit button */
        .tl-submit {
          width: 100%;
          background: #f4f4f5;
          color: #09090b;
          font-weight: 600;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          padding: 12px 16px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          margin-top: 8px;
          transition: background 0.15s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
        .tl-submit:hover { background: #ffffff; }

        /* Go back / links */
        .tl-link {
          color: #a1a1aa;
          text-decoration: none;
          transition: color 0.15s, text-decoration 0.15s;
        }
        .tl-link:hover { color: #f4f4f5; text-decoration: underline; }
        .tl-link-bold {
          color: #f4f4f5;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s;
        }
        .tl-link-bold:hover { color: #fff; text-decoration: underline; }

        /* Responsive two-column grid */
        .tl-grid {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 100vh;
          width: 100%;
          background: #09090b;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .tl-grid { grid-template-columns: 1fr 1fr; }
          .tl-right-col { display: flex !important; }
        }

        /* Gif hover zoom */
        .tl-gif-wrap:hover .tl-canvas {
          transform: scale(1.03);
        }
      `}</style>

      {/* ── Noise overlay ── */}
      <div className="tl-noise" />

      {/* ── Page root ── */}
      <div className="tl-root tl-grid" style={{ fontFamily: "'Inter', 'Geist', system-ui, sans-serif" }}>

        {/* ══════════════════════════════════════════
            LEFT COLUMN — login form
        ══════════════════════════════════════════*/}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px',
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
        }}>

          {/* Logo */}
          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '32px' }}>
            <div className="tl-a1" style={{ alignSelf: 'flex-start' }}>
              <a href="/" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: 8, cursor: 'pointer', userSelect: 'none', textDecoration: 'none' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 6,
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3v10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ fontWeight: 500, letterSpacing: '-0.02em', fontSize: 18, color: '#f4f4f5' }}>Trace</span>
              </a>
            </div>
          </div>

          {/* ── Center form area ── */}
          <div style={{ width: '100%', maxWidth: 448, display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Go back */}
            <div className="tl-a2" style={{ alignSelf: 'flex-start' }}>
              <a href="/" className="tl-link" style={{ fontSize: 14 }}>Go back</a>
            </div>

            {/* Heading */}
            <div className="tl-a3" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h1 style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '-0.025em',
                color: '#f4f4f5',
                lineHeight: 1.25,
                margin: 0,
              }}>
                Welcome back to{' '}
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 300, color: '#d4d4d8' }}>
                  Trace.
                </span>
              </h1>
            </div>

            {/* Social buttons */}
            <div className="tl-a4" style={{ display: 'flex', flexDirection: 'row', gap: 12, width: '100%', flexWrap: 'wrap' }}>
              <button type="button" className="tl-social-btn micro">
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>
              <button type="button" className="tl-social-btn micro">
                <GitHubIcon />
                <span>Continue with GitHub</span>
              </button>
            </div>

            {/* OR divider */}
            <div className="tl-a5" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ flexGrow: 1, borderTop: '1px solid rgba(39,39,42,0.8)' }} />
              <span style={{ flexShrink: 0, margin: '0 16px', fontSize: 11, fontWeight: 600, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                OR
              </span>
              <div style={{ flexGrow: 1, borderTop: '1px solid rgba(39,39,42,0.8)' }} />
            </div>

            {/* Form */}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }} onSubmit={e => e.preventDefault()}>

              {/* Email */}
              <div className="tl-a6" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 11, fontWeight: 500, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Email
                </label>
                <input
                  className="tl-input"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="tl-a7" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 11, fontWeight: 500, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    className="tl-input"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ paddingRight: 44 }}
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowPassword(v => !v)}
                    style={{
                      position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                      background: 'none', border: 'none', padding: 4, cursor: 'pointer',
                      color: '#71717a', display: 'flex', alignItems: 'center', transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#d4d4d8'}
                    onMouseLeave={e => e.currentTarget.style.color = '#71717a'}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="tl-a8 tl-submit micro">Sign in</button>
            </form>

            {/* Sign up */}
            <p className="tl-a9" style={{ fontSize: 14, color: '#a1a1aa', textAlign: 'center', margin: 0 }}>
              Don't have an account?{' '}
              <a href="/register" className="tl-link-bold">Sign up</a>
            </p>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
            <a href="/terms" className="tl-link">Terms of Service</a>
            <a href="/privacy" className="tl-link">Privacy Policy</a>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            RIGHT COLUMN — visual panel
        ══════════════════════════════════════════*/}
        <div
          className="tl-right-col"
          style={{ display: 'none', padding: '16px', width: '100%', height: '100%', flexDirection: 'column' }}
        >
          <div
            className="tl-visual tl-gif-wrap"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '48px',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(39,39,42,0.4)',
              background: 'rgba(24,24,27,0.1)',
              userSelect: 'none',
              minHeight: 'calc(100vh - 32px)',
            }}
          >
            {/* Animated canvas bg */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 16, border: '2px solid rgba(39,39,42,0.4)' }}>
              <AnimatedBackground />
            </div>

            {/* Bottom gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.3) 50%, transparent 100%)',
              pointerEvents: 'none', borderRadius: 16,
            }} />

            {/* Text */}
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h2 style={{
                fontSize: 30,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                margin: 0,
                textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              }}>
                AI Analytics,{' '}
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 300, color: '#d4d4d8' }}>
                  simplified.
                </span>
              </h2>
              <p style={{ color: '#e4e4e7', fontSize: 14, lineHeight: 1.65, maxWidth: 480, margin: 0 }}>
                Trace is your all-in-one AI analytics platform, designed to monitor and control your AI tools with ease. Gain insights, optimize performance, and ensure responsible AI usage.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Animated canvas background
───────────────────────────────────────────────────────────────*/
function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw() {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // Dark gradient
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#0d0d14');
      grad.addColorStop(0.5, '#09090b');
      grad.addColorStop(1, '#0a0a0f');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = 'rgba(63,63,70,0.18)';
      ctx.lineWidth = 1;
      const gs = 48;
      for (let x = 0; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

      // Glow orb
      const cx = w * 0.5 + Math.sin(t * 0.0008) * w * 0.12;
      const cy = h * 0.45 + Math.cos(t * 0.0006) * h * 0.08;
      const orb = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.55);
      orb.addColorStop(0, 'rgba(99,60,199,0.18)');
      orb.addColorStop(0.45, 'rgba(79,70,229,0.09)');
      orb.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = orb;
      ctx.fillRect(0, 0, w, h);

      // Particles
      particles.forEach(p => {
        p.x = (p.x + p.vx + 1) % 1;
        p.y = (p.y + p.vy + 1) % 1;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,160,255,${p.alpha})`;
        ctx.fill();
      });

      // Scan line
      const scanY = (h - (t * 0.04) % h + h) % h;
      const sg = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 80);
      sg.addColorStop(0, 'rgba(139,92,246,0)');
      sg.addColorStop(0.5, 'rgba(139,92,246,0.06)');
      sg.addColorStop(1, 'rgba(139,92,246,0)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 80, w, 160);

      t++;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="tl-canvas"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transition: 'transform 0.7s ease', display: 'block' }}
    />
  );
}

/* ─── Icons ─────────────────────────────────────────────────*/
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}
