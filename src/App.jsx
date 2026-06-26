import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import PricingMatrix from './components/PricingMatrix';

function AnimatedCounter({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let startTimestamp = null;
        const duration = 1500;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid #D9E8E2', borderRadius: '16px', padding: '32px' }}>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '56px', fontWeight: 700, color: '#114C5A', margin: 0 }}>
        {count}{suffix}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(23,43,54,0.7)', margin: 0 }}>
        {label}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      
      <main role="main">
        <Hero />
        <BentoFeatures />
        <PricingMatrix />
        
        {/* Metrics & Social Proof */}
        <section id="metrics" aria-label="Metrics and Social Proof" style={{ backgroundColor: '#F1F6F4', padding: '100px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#114C5A', fontSize: '32px', textAlign: 'center', marginBottom: '64px' }}>
              Built for Unprecedented Scale
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
              <AnimatedCounter target={2.4} suffix="M+" label="Datasets Processed" />
              <AnimatedCounter target={99.98} suffix="%" label="Uptime SLA" />
              <AnimatedCounter target={80} suffix="ms" label="Avg Latency (max)" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {/* Testimonial 1 */}
              <article style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9E8E2', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="#FFC801">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '16px', color: '#172B36', margin: '0 0 24px 0', lineHeight: 1.6 }}>
                  "NeuralOps replaced three separate ETL tools and dropped our ingestion latency down to milliseconds. Absolute game-changer."
                </blockquote>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: '#114C5A' }}>Sarah Jenkins</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(23,43,54,0.55)' }}>VP Engineering, DataFlow</div>
                </div>
              </article>
              
              {/* Testimonial 2 */}
              <article style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9E8E2', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="#FFC801">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '16px', color: '#172B36', margin: '0 0 24px 0', lineHeight: 1.6 }}>
                  "The zero-latency pipeline is exactly as advertised. We've routed billions of events with zero configuration headaches."
                </blockquote>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: '#114C5A' }}>David Chen</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(23,43,54,0.55)' }}>CTO, SyncNode</div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#172B36', borderTop: '1px solid rgba(217,232,226,0.1)', padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '24px', color: '#FFC801', marginBottom: '24px' }}>NeuralOps</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(241,246,244,0.6)', lineHeight: 1.6 }}>
                Transforming raw data into operational intelligence at the speed of thought.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#F1F6F4', margin: '0 0 8px 0' }}>Platform</h3>
              {['Features', 'Integrations', 'Pricing', 'Changelog'].map(link => (
                <a key={link} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(241,246,244,0.6)', textDecoration: 'none', transition: 'color 150ms ease-out' }} onMouseEnter={e => e.currentTarget.style.color = '#F1F6F4'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(241,246,244,0.6)'}>{link}</a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#F1F6F4', margin: '0 0 8px 0' }}>Resources</h3>
              {['Documentation', 'API Reference', 'Community', 'Blog'].map(link => (
                <a key={link} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(241,246,244,0.6)', textDecoration: 'none', transition: 'color 150ms ease-out' }} onMouseEnter={e => e.currentTarget.style.color = '#F1F6F4'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(241,246,244,0.6)'}>{link}</a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#F1F6F4', margin: '0 0 8px 0' }}>Company</h3>
              {['About', 'Careers', 'Legal', 'Contact'].map(link => (
                <a key={link} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(241,246,244,0.6)', textDecoration: 'none', transition: 'color 150ms ease-out' }} onMouseEnter={e => e.currentTarget.style.color = '#F1F6F4'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(241,246,244,0.6)'}>{link}</a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(217,232,226,0.1)', paddingTop: '32px', gap: '24px' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(241,246,244,0.35)' }}>
              © 2026 NeuralOps Inc. All rights reserved. Built for Speed Run.
            </span>
            <div style={{ display: 'flex', gap: '16px' }}>
              {/* GitHub */}
              <a href="#" style={{ display: 'inline-flex' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(241,246,244,0.5)" aria-hidden="true" style={{ transition: 'fill 150ms ease-out' }} onMouseEnter={e => e.currentTarget.style.fill = '#FFC801'} onMouseLeave={e => e.currentTarget.style.fill = 'rgba(241,246,244,0.5)'}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" style={{ display: 'inline-flex' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(241,246,244,0.5)" aria-hidden="true" style={{ transition: 'fill 150ms ease-out' }} onMouseEnter={e => e.currentTarget.style.fill = '#FFC801'} onMouseLeave={e => e.currentTarget.style.fill = 'rgba(241,246,244,0.5)'}>
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" style={{ display: 'inline-flex' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(241,246,244,0.5)" aria-hidden="true" style={{ transition: 'fill 150ms ease-out' }} onMouseEnter={e => e.currentTarget.style.fill = '#FFC801'} onMouseLeave={e => e.currentTarget.style.fill = 'rgba(241,246,244,0.5)'}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
