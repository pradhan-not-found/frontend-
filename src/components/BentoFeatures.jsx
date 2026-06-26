import { useState, useRef, useEffect } from 'react';

const BENTO_DATA = [
  {
    id: 'pipeline',
    title: 'Real-Time Pipeline',
    desc: 'Stream gigabytes of data with zero-latency transformation protocols built directly into the core engine.',
    gridClass: 'col-span-12 lg:col-span-4 lg:row-start-1 lg:col-start-1',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 12H20M12 4L20 12L12 20" stroke="#114C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="12" r="3" fill="#FFC801"/>
      </svg>
    )
  },
  {
    id: 'inference',
    title: 'Schema Inference',
    desc: 'Automatically detect and adapt to incoming JSON structures without manual mapping.',
    gridClass: 'col-span-12 lg:col-span-2 lg:row-start-1 lg:col-start-5',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#114C5A" strokeWidth="2"/>
        <path d="M8 12H16" stroke="#FFC801" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'cleansing',
    title: 'Auto-Cleansing',
    desc: 'Drop nulls, standardize dates, and sanitize inputs before they ever reach your warehouse.',
    gridClass: 'col-span-12 lg:col-span-2 lg:row-start-2 lg:col-start-1',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#114C5A" strokeWidth="2"/>
        <path d="M8 12L11 15L16 9" stroke="#FFC801" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'webhooks',
    title: 'Webhook Triggers',
    desc: 'Fire custom payloads to external services the millisecond a threshold is breached.',
    gridClass: 'col-span-12 lg:col-span-2 lg:row-start-2 lg:col-start-3',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#FFC801" stroke="#114C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'builder',
    title: 'Visual Query Builder',
    desc: 'Construct complex joins without writing a single line of SQL.',
    gridClass: 'col-span-12 lg:col-span-2 lg:row-start-2 lg:col-start-5',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#114C5A" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" fill="#FFC801"/>
      </svg>
    )
  },
  {
    id: 'audit',
    title: 'Audit Logs',
    desc: 'Immutable, cryptographically verifiable records of every data mutation for compliance.',
    gridClass: 'col-span-12 lg:col-span-6 lg:row-start-3 lg:col-start-1',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="#114C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 3V9H19" stroke="#FFC801" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function BentoFeatures() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
  const hoveredIndexRef = useRef(-1);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      if (desktop !== isDesktop) {
        if (!desktop && hoveredIndexRef.current !== -1) {
          setOpenAccordionIndex(hoveredIndexRef.current);
        }
        setIsDesktop(desktop);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  return (
    <section id="features" style={{ backgroundColor: '#F1F6F4', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ fontFamily: 'var(--font-heading)', color: '#114C5A', fontSize: '32px', textAlign: 'center', marginBottom: '64px' }}>
          NeuralOps Core Architecture
        </h2>

        {isDesktop ? (
          /* Bento Grid Desktop */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'auto', gap: '24px' }}>
            {BENTO_DATA.map((item, index) => (
              <div 
                key={item.id} 
                className={`bento-card ${item.gridClass}`}
                onMouseEnter={() => hoveredIndexRef.current = index}
                onMouseLeave={() => hoveredIndexRef.current = -1}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D9E8E2',
                  borderRadius: '16px',
                  padding: '28px',
                  transition: 'all 150ms ease-out',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#114C5A', margin: 0 }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(23,43,54,0.7)', margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Accordion Mobile */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {BENTO_DATA.map((item, index) => {
              const isOpen = openAccordionIndex === index;
              return (
                <div key={item.id} style={{ border: '1px solid #D9E8E2', borderRadius: '8px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)}
                    style={{ 
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                      backgroundColor: '#F1F6F4', padding: '16px 20px', border: 'none', 
                      borderBottom: isOpen ? '1px solid #D9E8E2' : 'none', cursor: 'pointer', textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {item.icon}
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#114C5A', fontWeight: 600 }}>{item.title}</span>
                    </div>
                    <span style={{ color: '#FFC801', fontSize: '24px', fontWeight: 300 }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  <div style={{ 
                    backgroundColor: '#FFFFFF', 
                    maxHeight: isOpen ? '200px' : '0', 
                    transition: 'max-height 300ms ease-in-out', 
                    overflow: 'hidden' 
                  }}>
                    <p style={{ 
                      fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(23,43,54,0.7)', 
                      margin: 0, padding: '20px', lineHeight: 1.5 
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        .bento-card:hover {
          border-color: #FFC801 !important;
          box-shadow: 0 0 24px rgba(255,200,1,0.15) !important;
          background: linear-gradient(135deg, rgba(255,200,1,0.04), rgba(255,153,50,0.04)) !important;
        }
      `}</style>
    </section>
  );
}
