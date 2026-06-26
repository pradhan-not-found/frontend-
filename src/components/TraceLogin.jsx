import React, { useState } from 'react';

export default function TraceLogin() {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  return (
    <>
      <style>{`
        /* ── local Inter font (guaranteed, no network) ─────── */
        @font-face {
          font-family: 'Inter';
          font-style: normal; font-weight: 400; font-display: block;
          src: url('/fonts/inter-latin-400-normal.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal; font-weight: 500; font-display: block;
          src: url('/fonts/inter-latin-500-normal.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal; font-weight: 600; font-display: block;
          src: url('/fonts/inter-latin-600-normal.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal; font-weight: 300; font-display: block;
          src: url('/fonts/inter-latin-300-normal.woff2') format('woff2');
        }

        /* ── page shell: exact viewport, zero scroll ───────── */
        html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }

        .tl-page {
          display: flex;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #09090b;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* ────────────────────────────────────────────────────
           LEFT — form column
        ──────────────────────────────────────────────────── */
        .tl-left {
          flex: 0 0 44%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 40px 60px;
          overflow: hidden;
        }

        /* logo row */
        .tl-logo {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none; flex-shrink: 0;
        }
        .tl-logo img { border-radius: 7px; display: block; }
        .tl-logo-text {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 15px; font-weight: 500;
          color: #e4e4e7; letter-spacing: -0.015em;
        }
        .tl-logo-sup {
          font-size: 8px; font-weight: 700;
          vertical-align: super; letter-spacing: 0; margin-left: 1px;
        }

        /* center form block */
        .tl-center {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tl-form {
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tl-back {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px; font-weight: 400;
          color: #71717b; text-decoration: none;
          letter-spacing: 0; transition: color .15s;
          width: fit-content;
        }
        .tl-back:hover { color: #d4d4d8; }

        .tl-title {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: #f4f4f5;
          margin: 0;
        }
        .tl-title-em {
          font-style: italic;
          font-weight: 300;
          color: #a1a1aa;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .tl-title-sup {
          font-size: 0.42em;
          font-weight: 600;
          font-style: normal;
          vertical-align: super;
          letter-spacing: 0;
          margin-left: 1px;
          color: #71717b;
        }

        /* social */
        .tl-socials { display: flex; gap: 8px; }
        .tl-social {
          flex: 1; display: flex; align-items: center;
          justify-content: center; gap: 7px;
          padding: 9px 12px;
          background: #18181b; border: 1px solid #27272a;
          border-radius: 9px;
          color: #d4d4d8;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12.5px; font-weight: 500;
          cursor: pointer; white-space: nowrap;
          transition: background .15s, border-color .15s;
        }
        .tl-social:hover { background: #27272a; border-color: #3f3f46; }
        .tl-social svg { flex-shrink: 0; }

        /* divider */
        .tl-divider {
          display: flex; align-items: center; gap: 12px;
        }
        .tl-div-line { flex: 1; height: 1px; background: #27272a; }
        .tl-div-text {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10px; font-weight: 500;
          color: #52525c;
          text-transform: uppercase; letter-spacing: 0.1em;
        }

        /* fields */
        .tl-field { display: flex; flex-direction: column; gap: 6px; }
        .tl-label {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10.5px; font-weight: 500;
          color: #71717b;
          text-transform: uppercase; letter-spacing: 0.08em;
        }
        .tl-input {
          font-family: 'Inter', system-ui, sans-serif;
          width: 100%; background: #0e0e10;
          border: 1px solid #27272a; border-radius: 8px;
          padding: 10px 13px;
          font-size: 13.5px; color: #f4f4f5;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .tl-input::placeholder { color: #3f3f46; }
        .tl-input:focus {
          border-color: #52525c;
          box-shadow: 0 0 0 2px rgba(82,82,92,.15);
        }
        .tl-pw-wrap { position: relative; }
        .tl-pw-wrap .tl-input { padding-right: 40px; }
        .tl-eye {
          position: absolute; right: 11px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; padding: 3px;
          cursor: pointer; color: #52525c;
          display: flex; align-items: center;
          transition: color .15s;
        }
        .tl-eye:hover { color: #a1a1aa; }

        /* CTA */
        .tl-btn {
          font-family: 'Inter', system-ui, sans-serif;
          width: 100%; background: #f4f4f5;
          color: #09090b;
          font-size: 13.5px; font-weight: 600;
          padding: 11px 16px; border: none;
          border-radius: 9px; cursor: pointer;
          transition: background .15s;
          box-shadow: 0 1px 3px rgba(0,0,0,.15);
        }
        .tl-btn:hover { background: #fff; }

        /* sign up hint */
        .tl-hint {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12.5px; color: #52525c;
          text-align: center; margin: 0;
        }
        .tl-hint a {
          color: #e4e4e7; font-weight: 600;
          text-decoration: none; transition: color .15s;
        }
        .tl-hint a:hover { color: #fff; }

        /* footer */
        .tl-footer {
          display: flex; justify-content: space-between;
          flex-shrink: 0; padding-top: 0;
        }
        .tl-ft-link {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11.5px; color: #3f3f46;
          text-decoration: none; transition: color .15s;
        }
        .tl-ft-link:hover { color: #71717b; }

        /* ────────────────────────────────────────────────────
           RIGHT — gif panel
        ──────────────────────────────────────────────────── */
        .tl-right {
          flex: 1;
          height: 100%;
          padding: 14px 14px 14px 0;
          display: none;
        }
        @media (min-width: 860px) {
          .tl-right { display: flex; flex-direction: column; }
        }

        .tl-card {
          position: relative; width: 100%; flex: 1;
          border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(255,255,255,.06);
          display: flex; flex-direction: column; justify-content: flex-end;
        }

        .tl-gif {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
          /* no zoom, no transition — static, cinematic */
        }

        .tl-veil {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,.80) 0%,
            rgba(0,0,0,.22) 45%,
            transparent 100%
          );
        }

        .tl-caption {
          position: relative; z-index: 10;
          padding: 36px 40px;
        }
        .tl-cap-title {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 24px; font-weight: 400;
          letter-spacing: -0.022em; line-height: 1.3;
          color: #fff; margin: 0 0 10px;
        }
        .tl-cap-title em {
          font-style: italic; font-weight: 300;
          color: #c4c4c8;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .tl-cap-desc {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px; line-height: 1.7;
          color: rgba(255,255,255,.52);
          max-width: 380px; margin: 0;
        }

        /* ── mobile: allow scroll only on small screens ───── */
        @media (max-width: 859px) {
          html, body { overflow: auto; }
          .tl-page { height: auto; min-height: 100vh; overflow: visible; }
          .tl-left { height: auto; padding: 36px 28px; }
        }

        /* ── stagger fade-up ───────────────────────────────── */
        @keyframes tl-up {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .a { opacity:0; animation: tl-up .4s cubic-bezier(.22,.68,0,1.2) forwards; }
        .a1 { animation-delay:  0ms; }
        .a2 { animation-delay: 55ms; }
        .a3 { animation-delay:100ms; }
        .a4 { animation-delay:145ms; }
        .a5 { animation-delay:190ms; }
        .a6 { animation-delay:235ms; }
        .a7 { animation-delay:280ms; }
        .a8 { animation-delay:325ms; }
        .a9 { animation-delay:370ms; }

        @keyframes tl-slide {
          from { opacity:0; transform:translateX(16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .tl-right { opacity:0; animation: tl-slide .5s cubic-bezier(.22,.68,0,1.2) 70ms forwards; }
        @media (min-width:860px){ .tl-right { display:flex; } }
      `}</style>

      <div className="tl-page">

        {/* ═══ LEFT ══════════════════════════════════════════ */}
        <div className="tl-left">

          {/* Logo */}
          <a href="/" className="tl-logo a a1">
            <img src="/images/logo.png" alt="Trackify" width="24" height="24" />
            <span className="tl-logo-text">
              Trackify<span className="tl-logo-sup">ai</span>
            </span>
          </a>

          {/* Centered form */}
          <div className="tl-center">
            <div className="tl-form">

              <a href="/" className="tl-back a a2">Go back</a>

              <h1 className="tl-title a a3">
                Welcome back to{' '}
                <span className="tl-title-em">Trackify<span className="tl-title-sup">ai</span>.</span>
              </h1>

              {/* Social */}
              <div className="tl-socials a a4">
                <button type="button" className="tl-social">
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
                <button type="button" className="tl-social">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  Continue with GitHub
                </button>
              </div>

              {/* OR */}
              <div className="tl-divider a a5">
                <div className="tl-div-line" />
                <span className="tl-div-text">or</span>
                <div className="tl-div-line" />
              </div>

              {/* Email */}
              <div className="tl-field a a6">
                <label className="tl-label">Email</label>
                <input className="tl-input" type="email" placeholder="you@example.com"
                  value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
              </div>

              {/* Password */}
              <div className="tl-field a a7">
                <label className="tl-label">Password</label>
                <div className="tl-pw-wrap">
                  <input className="tl-input" type={showPw ? 'text' : 'password'}
                    placeholder="••••••••" value={pw} onChange={e => setPw(e.target.value)}
                    autoComplete="current-password" />
                  <button type="button" className="tl-eye" onClick={() => setShowPw(v => !v)}>
                    {showPw
                      ? <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    }
                  </button>
                </div>
              </div>

              {/* Sign in */}
              <button type="button" className="tl-btn a a8">Sign in</button>

              {/* Signup */}
              <p className="tl-hint a a9">
                Don't have an account?{' '}<a href="/register">Sign up</a>
              </p>

            </div>
          </div>

          {/* Footer */}
          <div className="tl-footer">
            <a href="/terms" className="tl-ft-link">Terms of Service</a>
            <a href="/privacy" className="tl-ft-link">Privacy Policy</a>
          </div>

        </div>

        {/* ═══ RIGHT ═════════════════════════════════════════ */}
        <div className="tl-right">
          <div className="tl-card">
            <img src="/images/bg.gif" alt="Trackify AI" className="tl-gif" />
            <div className="tl-veil" />
            <div className="tl-caption">
              <h2 className="tl-cap-title">
                AI Analytics, <em>simplified.</em>
              </h2>
              <p className="tl-cap-desc">
                Trackify AI monitors and controls all your AI tools in one place —
                gain insights, optimise costs, and ensure responsible usage.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
