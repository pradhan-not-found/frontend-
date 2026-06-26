import React, { useRef, useEffect } from 'react';
import { FadeIn } from './FadeIn';

const features = [
  {
    title: "Real-time AI monitoring.",
    description: "Watch your models perform in real-time with comprehensive latency and cost tracking.",
    icon: "/SVGs/chart-pie.svg",
    colSpan: "md:col-span-2",
  },
  {
    title: "Auto-scaling infrastructure.",
    description: "Never worry about load spikes again.",
    icon: "/SVGs/arrow-trending-up.svg",
    colSpan: "md:col-span-1",
  },
  {
    title: "One-click integrations.",
    description: "Connect to your favorite tools instantly.",
    icon: "/SVGs/link.svg",
    colSpan: "md:col-span-1",
  },
  {
    title: "Intelligent analytics engine.",
    description: "Uncover deep insights with automated pattern recognition.",
    icon: "/SVGs/cog-8-tooth.svg",
    colSpan: "md:col-span-2",
  }
];

export function BentoFeatures() {
  const activeIndexRef = useRef(0);
  const detailsRefs = useRef([]);

  const handleMouseEnter = (index) => {
    activeIndexRef.current = index;
  };

  useEffect(() => {
    const handleResize = () => {
      // If we cross into mobile breakpoint (< 768px), make sure the active accordion is open
      if (window.innerWidth < 768) {
        detailsRefs.current.forEach((details, idx) => {
          if (details) {
            if (idx === activeIndexRef.current) {
              details.setAttribute('open', '');
            } else {
              details.removeAttribute('open');
            }
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="bento-features" className="py-24 bg-zinc-950 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-amber-50 mb-12 tracking-tighter">Everything you need.</h2>
        </FadeIn>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[250px]">
          {features.map((feature, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className={`bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:bg-zinc-800 transition-all duration-300 group relative overflow-hidden ${feature.colSpan}`}
              style={{}} // FadeIn takes style
            >
              <div 
                className="h-full flex flex-col justify-between"
                onMouseEnter={() => handleMouseEnter(idx)}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-amber-500">
                  <img src={feature.icon} className="w-6 h-6 filter invert sepia saturate-200 hue-rotate-15" alt="icon" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <details 
                ref={el => detailsRefs.current[idx] = el}
                className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden group [&_summary::-webkit-details-marker]:hidden"
                onToggle={(e) => {
                  if (e.target.open) {
                    activeIndexRef.current = idx;
                    // Close others to simulate strict accordion if needed, but native details doesn't require it
                    // However, we can enforce it:
                    detailsRefs.current.forEach((el, i) => {
                      if (i !== idx && el) el.removeAttribute('open');
                    });
                  }
                }}
              >
                <summary className="p-6 cursor-pointer flex items-center justify-between text-lg font-medium text-white outline-none">
                  <div className="flex items-center gap-4">
                    <img src={feature.icon} className="w-5 h-5 filter invert opacity-70" alt="icon" />
                    {feature.title}
                  </div>
                  <span className="text-zinc-500 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-zinc-400">
                  <p>{feature.description}</p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
