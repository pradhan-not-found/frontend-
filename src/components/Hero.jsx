import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const fadingOutRef = useRef(false);

  // Custom JS Fader (requestAnimationFrame)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fadeDuration = 250;

    const animateFade = (startOpacity, targetOpacity, onComplete) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = now - startTime;
        let progress = elapsed / fadeDuration;
        if (progress > 1) progress = 1;
        
        video.style.opacity = startOpacity + (targetOpacity - startOpacity) * progress;
        
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          if (onComplete) onComplete();
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    // Fade in on initial load
    video.style.opacity = 0;
    
    const onLoadedData = () => {
      animateFade(0, 1);
    };

    const onTimeUpdate = () => {
      // 250ms fade-out when 0.55s remain
      if (video.duration && video.currentTime >= video.duration - 0.55) {
        if (!fadingOutRef.current) {
          fadingOutRef.current = true;
          animateFade(1, 0);
        }
      }
    };

    const onEnded = () => {
      video.style.opacity = 0;
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(e => console.log('Autoplay prevented:', e));
        fadingOutRef.current = false;
        animateFade(0, 1);
      }, 100);
    };

    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    // If already loaded
    if (video.readyState >= 2) onLoadedData();

    return () => {
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Typewriter Effect
  const headlineFull = "Transform Raw Data\nInto Intelligence.";
  const [headlineText, setHeadlineText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeChar = () => {
      if (currentIndex <= headlineFull.length) {
        setHeadlineText(headlineFull.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeChar, 38);
      } else {
        setIsTyping(false);
      }
    };

    const startDelay = setTimeout(typeChar, 600);
    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section style={{ 
      position: 'relative', width: '100%', height: '100vh', 
      backgroundColor: '#172B36', display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden' 
    }}>
      
      {/* Video Background */}
      <video 
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4"
        muted playsInline autoPlay
        style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '115%', height: '115%', objectFit: 'cover', objectPosition: 'top center',
          pointerEvents: 'none', zIndex: 0
        }}
      />
      
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(23,43,54,0.55) 0%, rgba(17,76,90,0.82) 100%)'
      }}></div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px', maxWidth: '800px', width: '100%' }}>
        
        {/* Badge */}
        <div style={{ 
          backgroundColor: 'rgba(17,76,90,0.6)', border: '1px solid rgba(255,200,1,0.3)', 
          borderRadius: '9999px', padding: '4px 12px', display: 'inline-flex', alignItems: 'center', 
          gap: '8px', marginBottom: '24px', boxShadow: '0 0 16px rgba(255,200,1,0.15)',
          animation: 'fadeInUp 400ms ease-out forwards'
        }}>
          <span style={{ color: '#FFC801', fontSize: '13px', fontWeight: 600 }}>⚡ New</span>
          <span style={{ color: 'rgba(241,246,244,0.7)', fontFamily: 'var(--font-body)', fontSize: '13px' }}>AI-Powered Automation, Now Smarter</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline" style={{ 
          fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#F1F6F4', 
          letterSpacing: '-3px', lineHeight: 1.05, margin: '0 0 24px 0', whiteSpace: 'pre-wrap' 
        }}>
          {headlineText}
          <span style={{ 
            animation: 'blink 1s step-end infinite', 
            display: isTyping ? 'inline-block' : 'none' 
          }}>|</span>
        </h1>

        {/* Subheadline */}
        <p style={{ 
          fontFamily: 'var(--font-body)', fontSize: '20px', color: 'rgba(241,246,244,0.65)', 
          maxWidth: '640px', margin: '0 0 40px 0',
          animation: 'fadeInUp 400ms ease-out forwards', animationDelay: '200ms', opacity: 0
        }}>
          Upload your datasets, define your logic, and watch NeuralOps extract, transform, and deliver real-time insights — automatically.
        </p>

        {/* CTA Row */}
        <div style={{ 
          display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center',
          animation: 'fadeInUp 400ms ease-out forwards', animationDelay: '300ms', opacity: 0
        }}>
          <a href="#trial" className="hero-btn-primary">Start Free Trial</a>
          <a href="#demo" className="hero-btn-secondary">Watch Demo ▶</a>
        </div>

        {/* Social Proof Strip */}
        <div style={{ 
          marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
          animation: 'fadeInUp 400ms ease-out forwards', animationDelay: '400ms', opacity: 0
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(241,246,244,0.4)' }}>
            Trusted by 2,400+ teams
          </span>
          <div style={{ display: 'flex', gap: '24px', filter: 'grayscale(100%) opacity(0.5)' }}>
            {/* Grayscale SVG placeholders */}
            {[1, 2, 3, 4].map(i => (
              <svg key={i} width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="80" height="24" rx="4" fill="#D9E8E2"/>
              </svg>
            ))}
          </div>
        </div>

      </div>

      {/* Bouncing Scroll Chevron */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <div style={{ animation: 'bounceScroll 2s infinite', color: '#FFC801', fontSize: '24px' }}>↓</div>
      </div>

      <style>{`
        .hero-headline { font-size: 80px; }
        @media (max-width: 1024px) { .hero-headline { font-size: 48px; letter-spacing: -2px; } }
        @media (max-width: 768px) { .hero-headline { font-size: 32px; letter-spacing: -1px; } }

        .hero-btn-primary {
          background: linear-gradient(135deg, #FFC801, #FF9932);
          color: #172B36;
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 16px;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 150ms ease-out;
          display: inline-block;
        }
        .hero-btn-primary:hover {
          transform: scale(1.03);
          filter: brightness(1.1);
        }

        .hero-btn-secondary {
          background: transparent;
          border: 1px solid rgba(241,246,244,0.2);
          color: #F1F6F4;
          font-family: var(--font-body);
          font-size: 16px;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 150ms ease-out;
          display: inline-block;
        }
        .hero-btn-secondary:hover {
          border-color: #FFC801;
          color: #FFC801;
        }
      `}</style>
    </section>
  );
}
