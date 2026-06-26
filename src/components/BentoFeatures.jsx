import { useState } from 'react';

const features = [
  { id: 0, title: 'Neural Routing', desc: 'Intelligently routes requests to the optimal model based on cost and accuracy thresholds.' },
  { id: 1, title: 'Context Window Expansion', desc: 'Seamlessly manages 1M+ token context windows with dynamic compression and memory mapping.' },
  { id: 2, title: 'Zero-Latency Edge', desc: 'Deploys inference models directly to edge nodes across 300+ global locations.' },
  { id: 3, title: 'Enterprise RAG', desc: 'Connects directly to your secure databases with vector similarity search built-in.' }
];

export default function BentoFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl font-bold font-jetbrains text-color-oceanic-noir mb-4">Platform Capabilities</h2>
        <p className="text-lg text-color-nocturnal-expedition/80 max-w-2xl">
          Everything you need to build next-generation AI applications, built natively for scale.
        </p>
      </div>

      {/* 
        This single container acts as a Flex column (Accordion) on mobile 
        and a CSS Grid (Bento) on md: and above. 
        Because it's the exact same DOM structure, the activeIndex state is perfectly preserved on resize.
      */}
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {features.map((feat, index) => {
          const isActive = activeIndex === index;
          
          // Define grid areas for the Bento layout
          let bentoClass = '';
          if (index === 0) bentoClass = 'md:col-span-2 md:row-span-1';
          if (index === 1) bentoClass = 'md:col-span-1 md:row-span-2';
          if (index === 2) bentoClass = 'md:col-span-1 md:row-span-1';
          if (index === 3) bentoClass = 'md:col-span-1 md:row-span-1';

          return (
            <div 
              key={feat.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`
                group relative overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out cursor-pointer
                ${isActive ? 'border-color-forsythia shadow-lg' : 'border-color-mystic-mint hover:border-color-deep-saffron/50'}
                ${bentoClass}
                flex flex-col bg-white
              `}
            >
              {/* Header section (Always visible) */}
              <div className="p-6 md:p-8 flex items-center justify-between z-10 bg-white">
                <h3 className={`text-xl font-bold font-jetbrains transition-colors duration-200 ${isActive ? 'text-color-deep-saffron' : 'text-color-oceanic-noir'}`}>
                  {feat.title}
                </h3>
                
                {/* Mobile accordion indicator (hidden on desktop) */}
                <div className={`md:hidden transform transition-transform duration-300 ${isActive ? 'rotate-180 text-color-forsythia' : 'text-color-mystic-mint'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {/* 
                Body section 
                Desktop: Always visible (handled by flex-grow)
                Mobile: Height animated (Accordion)
              */}
              <div 
                className={`
                  px-6 md:px-8 overflow-hidden transition-all duration-400 ease-in-out
                  ${isActive ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 md:max-h-full md:pb-6 opacity-0 md:opacity-100'}
                  md:flex-grow flex flex-col justify-end
                `}
              >
                <p className="text-color-nocturnal-expedition/80 text-base">{feat.desc}</p>
                
                {/* Visual accent for active state */}
                <div className={`absolute bottom-0 left-0 h-1 bg-color-forsythia transition-all duration-400 ease-out ${isActive ? 'w-full' : 'w-0'}`}></div>
              </div>

              {/* Decorative background element (Desktop only) */}
              <div className={`hidden md:block absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-color-mystic-mint/20 transition-transform duration-500 ease-out ${isActive ? 'scale-150' : 'scale-100'}`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
