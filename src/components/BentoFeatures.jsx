import { useState } from 'react';

const features = [
  { id: 0, title: 'Neural Routing',          icon: 'arrow-path.svg', desc: 'Intelligently routes requests to the optimal model based on cost and accuracy thresholds in real time.' },
  { id: 1, title: 'Context Window Expansion', icon: 'cube-16-solid.svg', desc: 'Seamlessly manages 1M+ token context windows with dynamic compression and memory mapping.' },
  { id: 2, title: 'Zero-Latency Edge',        icon: 'arrow-trending-up.svg', desc: 'Deploys inference models directly to edge nodes across 300+ global locations for sub-12ms response.' },
  { id: 3, title: 'Enterprise RAG',           icon: 'cog-8-tooth.svg', desc: 'Connects directly to your secure databases with vector similarity search and retrieval built-in.' },
]

const bentoConfig = [
  { col: 'col-span-2', row: 'row-span-1' },
  { col: 'col-span-1', row: 'row-span-2' },
  { col: 'col-span-1', row: 'row-span-1' },
  { col: 'col-span-1', row: 'row-span-1' },
]

export default function BentoFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section style={{ padding: '6rem 1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 id="features-heading" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.25rem', fontWeight: 700, color: '#172B36', marginBottom: '1rem' }}>
          Platform Capabilities
        </h2>
        <p style={{ color: 'rgba(17,76,90,0.8)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
          Everything you need to build next-generation AI applications, architected for scale.
        </p>
      </div>

      {/* 
        CONTEXT LOCK: Single activeIndex state shared between both layouts.
        On desktop it becomes a CSS Grid (Bento). On mobile, the same 
        elements stack as an Accordion — state persists on resize automatically.
      */}
      <div className="bento-wrapper">
        {features.map((feat, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={feat.id}
              className={`bento-item bento-${index}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              style={{
                backgroundColor: '#fff',
                borderRadius: '1.25rem',
                border: isActive ? '1.5px solid #FFC801' : '1.5px solid #D9E8E2',
                boxShadow: isActive ? '0 8px 30px rgba(255,200,1,0.12)' : '0 2px 8px rgba(23,43,54,0.05)',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
                transition: 'border-color 0.25s ease-out, box-shadow 0.25s ease-out',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Active indicator bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '3px',
                width: isActive ? '100%' : '0%',
                backgroundColor: '#FFC801',
                transition: 'width 0.35s ease-in-out',
              }} />

              {/* Header */}
              <div style={{ padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={`/SVGs/${feat.icon}`} alt="" style={{ width: '1.5rem', height: '1.5rem', filter: isActive ? 'invert(66%) sepia(85%) saturate(1759%) hue-rotate(345deg) brightness(101%) contrast(104%)' : 'invert(16%) sepia(21%) saturate(1637%) hue-rotate(159deg) brightness(96%) contrast(89%)', transition: 'filter 0.2s ease-out' }} aria-hidden="true" />
                  <h3 style={{
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: isActive ? '#FF9932' : '#172B36',
                    transition: 'color 0.2s ease-out',
                  }}>
                    {feat.title}
                  </h3>
                </div>
                {/* Accordion chevron (mobile only) */}
                <img
                  src="/SVGs/chevron-down.svg"
                  className="accordion-chevron"
                  alt="Toggle"
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease-in-out, filter 0.2s ease-out',
                    flexShrink: 0,
                    filter: isActive ? 'invert(84%) sepia(89%) saturate(2250%) hue-rotate(352deg) brightness(101%) contrast(104%)' : 'invert(96%) sepia(6%) saturate(632%) hue-rotate(106deg) brightness(93%) contrast(89%)'
                  }}
                />
              </div>

              {/* Body — Accordion on mobile, always visible on desktop */}
              <div className={`bento-body ${isActive ? 'bento-body-open' : ''}`}>
                <p style={{ color: 'rgba(17,76,90,0.8)', lineHeight: 1.7, fontSize: '0.95rem', padding: '0 2rem 1.75rem' }}>
                  {feat.desc}
                </p>
              </div>

              {/* Decorative circle */}
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-2rem',
                width: '8rem',
                height: '8rem',
                backgroundColor: '#D9E8E2',
                opacity: isActive ? 0.3 : 0.15,
                borderRadius: '50%',
                transform: isActive ? 'scale(1.5)' : 'scale(1)',
                transition: 'transform 0.5s ease-out, opacity 0.3s ease-out',
                pointerEvents: 'none',
              }} />
            </div>
          );
        })}
      </div>

      <style>{`
        .bento-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* ── Mobile: accordion body ── */
        .bento-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease-in-out, opacity 0.3s ease-out;
          opacity: 0;
        }
        .bento-body-open {
          max-height: 200px;
          opacity: 1;
        }

        /* ── Desktop: Bento grid ── */
        @media (min-width: 768px) {
          .accordion-chevron { display: none; }
          .bento-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 18rem);
            gap: 1rem;
          }
          .bento-0 { grid-column: span 2; grid-row: span 1; }
          .bento-1 { grid-column: span 1; grid-row: span 2; }
          .bento-2 { grid-column: span 1; grid-row: span 1; }
          .bento-3 { grid-column: span 1; grid-row: span 1; }
          .bento-body {
            max-height: none !important;
            opacity: 1 !important;
            overflow: visible !important;
            flex-grow: 1;
          }
        }
      `}</style>
    </section>
  )
}
