import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
      >
        <span className="font-helvetica text-lg text-amber-50 group-hover:text-amber-50 transition-colors">
          {question}
        </span>
        <span className={`shrink-0 text-2xl font-light text-amber-50 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-white/40 font-helvetica leading-relaxed pb-6 pr-10">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const AnimatedText = ({ text, className }) => {
  return (
    <FadeIn className={className}>
      {text}
    </FadeIn>
  );
};

export default function TraceLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // === PRICING MATRIX (Feature 1) ===
  // Multi-dimensional config object — no hardcoded UI values
  const pricingMatrix = {
    USD: { symbol: '$', rate: 1,     tiers: { solo: 0,   pro: 49,   teams: 89  } },
    EUR: { symbol: '€', rate: 0.92,  tiers: { solo: 0,   pro: 45,   teams: 82  } },
    INR: { symbol: '₹', rate: 83,    tiers: { solo: 0,   pro: 4099, teams: 7399 } },
  };
  const pricingState = React.useRef({ currency: 'USD', isAnnual: false });

  const computeAndRender = () => {
    const { currency, isAnnual } = pricingState.current;
    const { symbol, tiers } = pricingMatrix[currency];
    const discount = isAnnual ? 0.8 : 1;

    const soloEl  = document.getElementById('price-solo');
    const proEl   = document.getElementById('price-pro');
    const teamsEl = document.getElementById('price-teams');

    if (soloEl)  soloEl.textContent  = tiers.solo  === 0 ? 'Free' : `${symbol}${Math.round(tiers.solo  * discount)}`;
    if (proEl)   proEl.textContent   = `${symbol}${Math.round(tiers.pro   * discount)}`;
    if (teamsEl) teamsEl.textContent = `${symbol}${Math.round(tiers.teams * discount)}`;

    const monthBtn  = document.getElementById('pricing-monthly-btn');
    const annualBtn = document.getElementById('pricing-annual-btn');
    if (monthBtn && annualBtn) {
      monthBtn.className  = `px-4 py-1.5 rounded-md font-medium cursor-pointer transition-colors ${!isAnnual ? 'bg-white text-zinc-950' : 'text-white/60 hover:text-white'}`;
      annualBtn.className = `px-4 py-1.5 rounded-md flex items-center gap-2 cursor-pointer transition-colors ${isAnnual ? 'bg-white text-zinc-950' : 'text-white/60 hover:text-white'}`;
    }
  };

  const handleCurrencyChange = (e) => {
    pricingState.current.currency = e.target.value;
    computeAndRender();
  };

  const handleBillingToggle = (isAnnual) => {
    pricingState.current.isAnnual = isAnnual;
    computeAndRender();
  };

  return (
    <main className="dark h-full antialiased geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable font-sans inter_b2991b2-module__9mH_6q__variable playfair_display_b7700c01-module__LbZqPq__variable min-h-full bg-zinc-950 relative">
      {/* Noise background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.06] fixed z-[9999]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* Navbar */}
      <header className="w-full fixed top-0 z-50 text-white">
        <div className="flex items-center justify-between px-8 py-2 relative transition-all duration-300" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 100%)', backdropFilter: 'blur(2px)' }}>
          <a className="nav-logo flex flex-row items-end justify-center cursor-pointer select-none" href="/">
            <img alt="Trackify Logo" width="32" height="32" className="mr-2 rounded-md text-shadow-md" src="/images/logo.png" />
            <span className="font-sans font-medium tracking-tighter text-xl text-white text-shadow-lg flex items-center">Trackify<sup className="text-white font-bold ml-0.5 lowercase text-[10px]">ai</sup></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-100 text-shadow-lg">
            <a href="#features" className="micro-link hover:text-amber-600 transition-colors">Features</a>
            <Link to="/login" className="micro text-zinc-100 text-sm text-shadow-lg px-2 py-2 hover:underline cursor-pointer" style={{textDecoration:'none'}}>Sign In</Link>
            <button onClick={(e) => e.preventDefault()} className="micro text-zinc-100 text-sm text-shadow-lg px-2 py-2 hover:underline cursor-default bg-transparent border-none">Download</button>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-zinc-100 hover:text-white transition-colors cursor-pointer z-50" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full border-b border-white/10 flex flex-col items-center gap-6 py-8 md:hidden" style={{ background: 'rgba(9, 9, 11, 0.6)', backdropFilter: 'blur(16px)' }}>
            <a href="#features" className="mobile-nav-item text-lg text-zinc-200 hover:text-white transition-colors py-1">Features</a>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item text-lg text-zinc-200 hover:text-white transition-colors py-1" style={{textDecoration:'none'}}>Sign In</Link>
            <button onClick={(e) => e.preventDefault()} className="mobile-nav-item text-lg text-amber-500 hover:text-amber-400 font-medium transition-colors py-1 bg-transparent border-none cursor-default">Download</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col justify-between px-8 md:px-12 pt-24 pb-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.gif')" }}>
        <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent via-[#171717]/20 to-zinc-950 pointer-events-none"></div>
        <div className="relative z-10 flex items-center flex-col h-full justify-center gap-6 text-center">
          <AnimatedText 
            text="Your AI analytics platform for all your AI tools." 
            className="text-zinc-900 text-shadow-lg text-5xl md:text-6xl lg:text-8xl font-normal max-w-5xl font-serif tracking-tighter" 
          />

          <FadeIn as="div" 
            
            
            
            className="flex flex-col items-center gap-4 mt-12 w-full px-4 mx-auto justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none">
              <button onClick={(e) => e.preventDefault()} className="micro transition-all ease-in-out shadow-2xl hover:scale-105 duration-300 bg-transparent border-none p-0 cursor-default">
                <img alt="Trackify on Product Hunt" width="200" height="44" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1177399&amp;theme=dark&amp;t=1782372206153" />
              </button>
              <button onClick={(e) => e.preventDefault()} className="micro flex items-center justify-center gap-2 text-white text-md px-5 bg-zinc-950 py-2.5 rounded-md shadow-md hover:bg-zinc-800 cursor-default w-full sm:w-auto whitespace-nowrap transition-colors border-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" color="currentColor"><path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                <span>Download for Mac</span>
              </button>
              <button onClick={(e) => e.preventDefault()} className="micro flex items-center justify-center gap-2 text-zinc-900 text-md px-5 bg-white py-2.5 rounded-md shadow-md hover:bg-gray-200 cursor-default w-full sm:w-auto whitespace-nowrap transition-colors border-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor"><path d="M14.0136 3.99538L8.01361 4.99036C5.61912 5.38744 4.42188 5.58597 3.71094 6.421C3 7.25602 3 8.46368 3 10.879L3 13.121C3 15.5363 3 16.744 3.71094 17.579C4.42188 18.414 5.61913 18.6126 8.01361 19.0096L14.0136 20.0046C17.2567 20.5424 18.8782 20.8113 19.9391 19.9171C21 19.023 21 17.3873 21 14.116V9.88402C21 6.6127 21 4.97704 19.9391 4.08286C18.8782 3.18868 17.2567 3.45758 14.0136 3.99538Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M11 4.5V19.5M3 12H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                <span>Download for Windows</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Dashboard Section */}
      <section className="relative bg-zinc-950">
        <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 overflow-hidden">
          <div className="py-10 md:py-40 w-full relative" style={{ perspective: '1000px' }}>
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-amber-50 text-xs uppercase tracking-widest font-helvetica">The Dashboard</span>
              <AnimatedText 
                text="Your whole AI stack, in a single glance." 
                className="font-serif text-4xl md:text-6xl tracking-tighter text-amber-50 font-normal mt-4 leading-tight" 
              />
              <p className="text-white/60 text-lg mt-6">One dashboard for every AI tool you use.</p>
            </div>
            <FadeIn as="div" 
              
              
              
              
              className="max-w-5xl mt-8 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] bg-[#222222] rounded-3xl shadow-2xl"
              style={{
                boxShadow: '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-800 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                <img alt="Trace dashboard" src="/images/demo.png" className="mx-auto rounded-2xl object-cover h-full object-center w-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-zinc-950 px-8 md:px-12 py-28" id="features">
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-14">
            <AnimatedText 
              text="One dashboard for every AI tool you use." 
              className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-amber-50 font-normal mt-4 mb-5 max-w-6xl leading-tight" 
            />
          </div>
          
          <FadeIn as="div" 
            
            
            
            
            className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded shadow overflow-hidden"
          >
            {[
              { title: "Claude Code", desc: "Tracks token usage, session costs, and conversation history from your ~/.claude/ logs in real time.", icon: "claudecode.png" },
              { title: "Cursor", desc: "Monitor AI completions and chat sessions across all your Cursor projects with per-session breakdowns.", icon: "cursor.png" },
              { title: "Codex CLI", desc: "Parse OpenAI Codex sessions from ~/.codex/ to track API consumption and cost per task.", icon: "openai.svg" },
              { title: "OpenCode", desc: "Real-time session monitoring from ~/.local/share/opencode/ — usage, cost, and active state.", icon: "opencode.svg" },
              { title: "Gemini CLI", desc: "Aggregate Gemini CLI usage from ~/.gemini/tmp/ and surface a full cost picture across sessions.", icon: "gemini.svg" },
              { title: "Ollama", desc: "Track local model usage and inference across all your Ollama sessions without any configuration.", icon: "ollama.svg" }
            ].map((feat, i) => (
              <FadeIn as="div" 
                key={i} 
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="feat-card p-8 flex flex-col justify-between min-h-56 border-2 rounded shadow border-white/10 transition-colors"
              >
                <div>
                  <p className="font-helvetica text-lg font-medium text-amber-50 mb-3">{feat.title}</p>
                  <p className="text-amber-50 text-md leading-relaxed font-helvetica">{feat.desc}</p>
                </div>
                <img src={`/logos/${feat.icon}`} alt={feat.title} className="h-8 w-8 object-contain mt-8" />
              </FadeIn>
            ))}
          </FadeIn>

          <FadeIn as="div" 
            
            
            
            
            className="mt-16"
          >
            <p className="text-zinc-500 text-sm font-helvetica mb-6 uppercase tracking-widest">Supported tools & providers</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Claude Code", icon: "claudecode.png" },
                { name: "Cursor", icon: "cursor.png" },
                { name: "OpenAI", icon: "openai.svg" },
                { name: "OpenCode", icon: "opencode.svg" },
                { name: "Gemini", icon: "gemini.svg" },
                { name: "GitHub", icon: "github.svg" },
                { name: "Ollama", icon: "ollama.svg" },
                { name: "Anthropic", icon: "anthropic.svg" },
                { name: "Google", icon: "google.svg" },
                { name: "Perplexity", icon: "perplexity.svg" },
                { name: "Meta", icon: "meta.svg" },
                { name: "HuggingFace", icon: "huggingface.svg" },
                { name: "DeepSeek", icon: "deepseek.svg" },
                { name: "xAI", icon: "xai.svg" },
                { name: "Mistral", icon: "mistral.svg" },
                { name: "Qwen", icon: "qwen.svg" },
                { name: "Kimi", icon: "kimi.png" },
                { name: "Gemma", icon: "gemma.png" },
                { name: "Claude", icon: "claude.png" },
                { name: "Maincode", icon: "maincode.png" },
                { name: "Factory", icon: "factory.png" },
                { name: "Kilo", icon: "kilo.png" },
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors">
                  <img src={`/logos/${tool.icon}`} alt={tool.name} className="w-4 h-4 object-contain" />
                  <span className="text-xs text-zinc-400 font-helvetica whitespace-nowrap">{tool.name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto py-28 px-8 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-xs uppercase tracking-widest font-helvetica mb-4 block">What people say</span>
            <AnimatedText 
              text="Teams that work with Trackify AI, not around it" 
              className="font-serif text-4xl md:text-6xl tracking-tighter text-amber-50 font-normal leading-tight mx-auto max-w-3xl mb-6" 
            />
            <FadeIn as="p" 
              
              
              
              
              className="text-white/40 text-lg md:text-xl font-helvetica max-w-2xl mx-auto leading-relaxed"
            >
              From solo developers to enterprise teams — here's what our users have to say after making Trackify AI their daily partner.
            </FadeIn>
          </div>

          <FadeIn as="div" 
            
            
            
            
            className="relative flex overflow-hidden w-full mt-10"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
          >
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]" style={{ gap: '16px' }}>
              {[
                {
                  text: "Trackify AI is the first AI tool that actually reduces my workload. I stay on top of logs, token costs, and sessions without the usual chaos.",
                  name: "Paul M.",
                  title: "Operations Director, ZingZap"
                },
                {
                  text: "Trackify AI feels like the assistant I always needed. It keeps conversations organized, handles log parsing, and saves me hours every week.",
                  name: "Emily C.",
                  title: "Head of Client Success, Junotwig"
                },
                {
                  text: "Trackify AI does what every other AI tool promised but never delivered — it actually takes things off my plate. My CLI clutter went from chaos to zero, daily.",
                  name: "James R.",
                  title: "CEO, CloudPlex"
                },
                {
                  text: "I was skeptical about yet another dev tool, but Trackify AI legitimately gave me back 10 hours a week and forced me to reconsider how much API cost I had.",
                  name: "Sophie L.",
                  title: "VP Engineering, StackFlow"
                },
                // Duplicated for seamless infinite scroll
                {
                  text: "Trackify AI is the first AI tool that actually reduces my workload. I stay on top of logs, token costs, and sessions without the usual chaos.",
                  name: "Paul M.",
                  title: "Operations Director, ZingZap"
                },
                {
                  text: "Trackify AI feels like the assistant I always needed. It keeps conversations organized, handles log parsing, and saves me hours every week.",
                  name: "Emily C.",
                  title: "Head of Client Success, Junotwig"
                },
                {
                  text: "Trackify AI does what every other AI tool promised but never delivered — it actually takes things off my plate. My CLI clutter went from chaos to zero, daily.",
                  name: "James R.",
                  title: "CEO, CloudPlex"
                },
                {
                  text: "I was skeptical about yet another dev tool, but Trackify AI legitimately gave me back 10 hours a week and forced me to reconsider how much API cost I had.",
                  name: "Sophie L.",
                  title: "VP Engineering, StackFlow"
                }
              ].map((testimonial, i) => (
                <div 
                  key={i} 
                  className="group shrink-0 relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 p-6 flex flex-col justify-between cursor-default"
                  style={{ width: '280px', height: '280px' }}
                >
                  {/* GIF background with dark overlay — fades in on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.gif')" }}></div>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.4) 100%)' }}></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <p className="text-white/60 group-hover:text-white transition-colors duration-300 text-sm font-helvetica leading-relaxed flex-1 line-clamp-5">
                      {testimonial.text}
                    </p>
                    
                    <div className="flex items-end justify-between mt-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-md bg-zinc-800 group-hover:bg-white/10 overflow-hidden shrink-0 border border-white/10 transition-colors duration-300">
                          <img 
                            src={`https://i.pravatar.cc/150?u=${testimonial.name}`} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                          />
                        </div>
                        <div>
                          <p className="text-white/80 group-hover:text-white font-semibold font-helvetica text-xs transition-colors duration-300">{testimonial.name}</p>
                          <p className="text-white/35 group-hover:text-white/70 text-[10px] font-helvetica transition-colors duration-300">{testimonial.title}</p>
                        </div>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href="https://github.com/pradhan-not-found" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded-md hover:bg-black/80 transition-colors whitespace-nowrap">
                          GitHub
                          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative bg-zinc-950 px-8 md:px-12 py-28">
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-amber-500 text-xs uppercase tracking-widest font-helvetica mb-4 block">Pricing</span>
              <AnimatedText 
                text="Simple, transparent pricing. No surprises." 
                className="font-serif text-4xl md:text-6xl tracking-tighter text-amber-50 font-normal leading-tight" 
              />
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-white/40 text-base md:text-lg font-helvetica max-w-sm text-left md:text-right">
                Start free, scale as you grow. Every plan includes core features — upgrade when you need more power or seats.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                {/* Currency Switcher */}
                <select id="currency-select" onChange={handleCurrencyChange} className="bg-zinc-900 border border-white/10 text-white/80 text-sm rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-amber-500 font-helvetica cursor-pointer">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="INR">INR (₹)</option>
                </select>
                {/* Billing Toggle */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-1 flex items-center font-helvetica text-sm">
                  <button id="pricing-monthly-btn" onClick={() => handleBillingToggle(false)} className="bg-white text-zinc-950 px-4 py-1.5 rounded-md font-medium cursor-pointer transition-colors">Monthly</button>
                  <button id="pricing-annual-btn" onClick={() => handleBillingToggle(true)} className="text-white/60 px-4 py-1.5 rounded-md hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                    Annual <span className="bg-amber-500/20 text-amber-400 text-[10px] px-1.5 py-0.5 rounded font-bold">-20%</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Solo Plan */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-serif text-2xl text-white italic mb-2">Solo</h4>
              <div className="mb-2">
                <span id="price-solo" className="text-5xl font-serif text-white">$0</span>
              </div>
              <p className="text-white/40 font-helvetica text-sm mb-6 pb-6 border-b border-white/10 min-h-[100px]">Free forever<br/><br/>Perfect for individuals getting started with AI-powered productivity. No credit card required.</p>
              
              <ul className="space-y-4 font-helvetica text-sm text-white/80 mb-8 flex-1">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>1 connected workspace</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Up to 5 integrations</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>100 AI tasks / month</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Basic memory (30 days)</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Email + calendar workflows</li>
                <li className="flex items-center gap-3 text-white/20"><span className="w-1.5 h-1.5 bg-white/10 shrink-0"></span>Custom workflows</li>
                <li className="flex items-center gap-3 text-white/20"><span className="w-1.5 h-1.5 bg-white/10 shrink-0"></span>Priority support</li>
                <li className="flex items-center gap-3 text-white/20"><span className="w-1.5 h-1.5 bg-white/10 shrink-0"></span>Team features</li>
              </ul>
              
              <button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-white/90 transition-colors cursor-pointer text-sm">
                <span className="bg-amber-500 p-1 rounded-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></span>
                Get started free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-2xl overflow-hidden p-8 flex flex-col h-full border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bg.gif')" }}></div>
              <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[6px] z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h4 className="font-serif text-2xl text-white italic mb-2">Pro</h4>
                <div className="mb-2">
                  <span id="price-pro" className="text-5xl font-serif text-white">$49</span>
                </div>
                <p className="text-white/80 font-helvetica text-sm mb-6 pb-6 border-b border-white/20 min-h-[100px]">per month, billed monthly<br/><br/>The full Trace experience for professionals who want a true AI partner in their work.</p>
                
                <ul className="space-y-4 font-helvetica text-sm text-white mb-8 flex-1">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>1 connected workspace</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Unlimited integrations</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Unlimited AI tasks</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Long-term memory (forever)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>All workflow templates</li>
                  <li className="flex items-center gap-3 text-white/40"><span className="w-1.5 h-1.5 bg-white/20 shrink-0"></span>Custom workflows</li>
                  <li className="flex items-center gap-3 text-white/40"><span className="w-1.5 h-1.5 bg-white/20 shrink-0"></span>Priority support</li>
                  <li className="flex items-center gap-3 text-white/40"><span className="w-1.5 h-1.5 bg-white/20 shrink-0"></span>Team features</li>
                </ul>
                
                <button className="w-full bg-zinc-950 text-white border border-white/10 font-medium py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-zinc-900 transition-colors cursor-pointer text-sm shadow-xl">
                  <span className="bg-amber-500 p-1 rounded-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></span>
                  Get started free
                </button>
              </div>
            </div>

            {/* Teams Plan */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-serif text-2xl text-white italic mb-2">Teams</h4>
              <div className="mb-2">
                <span id="price-teams" className="text-5xl font-serif text-white">$89</span>
              </div>
              <p className="text-white/40 font-helvetica text-sm mb-6 pb-6 border-b border-white/10 min-h-[100px]">per seat / month<br/><br/>For growing teams that want shared intelligence, role-based access, and advanced tools.</p>
              
              <ul className="space-y-4 font-helvetica text-sm text-white/80 mb-8 flex-1">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Unlimited workspaces</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Unlimited integrations</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Unlimited AI tasks</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Shared long-term memory</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>All workflow templates</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Custom workflows & automations</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Priority support</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>Role-based team features</li>
              </ul>
              
              <button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-white/90 transition-colors cursor-pointer text-sm">
                <span className="bg-amber-500 p-1 rounded-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></span>
                Talk to sales
              </button>
            </div>
            
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="relative bg-zinc-950 px-8 md:px-12 py-28">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-50 text-xs uppercase tracking-widest font-helvetica">FAQ</span>
            <AnimatedText 
              text="Questions, answered." 
              className="font-serif text-4xl md:text-6xl tracking-tighter text-amber-50 font-normal mt-4 leading-tight" 
            />
          </div>
          <div className="border-t border-white/10">
            {[
              { q: "Do my API keys or AI data ever leave my device?", a: "No. Your API keys and AI tool logs never leave your machine — they're read and stored locally. The only thing Trackify AI syncs to the cloud is your account data, so your dashboard stays consistent across platforms." },
              { q: "Do I need Python or any runtime installed?", a: "No. The installed app bundles everything it needs, including the local server. Just download, open, and Trackify AI starts watching your logs." },
              { q: "Which AI tools does Trackify AI support?", a: "Claude Code, Cursor, Codex, OpenCode, and Gemini CLI today, with Copilot CLI and Ollama on the way. All log paths are configurable via environment variables." },
              { q: "How does it track usage and cost?", a: "A background watcher scans known CLI log directories every few seconds, parses them (JSON, JSONL, SQLite), and aggregates token counts and estimated costs into a unified dashboard." },
              { q: "What does it cost?", a: "Trackify AI is free and MIT-licensed. Download it for macOS (Apple Silicon) or Windows — Linux support is coming soon." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative flex flex-col justify-between px-8 md:px-16 overflow-hidden bg-zinc-950" style={{ minHeight: '70vh', paddingTop: '80px', paddingBottom: '40px' }}>
        {/* Orange radial glow at bottom */}
        <div className="pointer-events-none absolute inset-0 origin-bottom z-0" style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 130%, #a14409 0%, #3d1908 40%, transparent 68%)' }}></div>

        {/* Giant watermark — anchored to bottom, behind everything */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-0 overflow-hidden leading-none">
          <span className="font-serif font-normal leading-none tracking-tighter whitespace-nowrap" style={{ fontSize: 'clamp(80px, 15vw, 240px)', color: 'rgba(255,255,255,0.07)', letterSpacing: '-0.04em', width: '100%', textAlign: 'center', display: 'block' }}>
            Trackify<sup className="text-amber-500/30" style={{ fontSize: '0.18em', verticalAlign: 'super', fontWeight: '400' }}>ai</sup>
          </span>
        </div>

        {/* Nav links: Download/Changelog/Github LEFT, License/Privacy/Terms RIGHT */}
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between">
          {/* Left column */}
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <a href="https://github.com/Subham12R/Trace/releases" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm font-helvetica transition-colors">Download</a>
            </li>
            <li className="flex items-center gap-2">
              <a href="/changelog" className="text-white/50 hover:text-white text-sm font-helvetica transition-colors">Changelog</a>
              <span className="text-[9px] font-helvetica border border-white/25 text-white/40 px-1.5 py-0.5 rounded-full tracking-wider leading-none">NEW</span>
            </li>
            <li>
              <a href="https://github.com/Subham12R/Trace" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm font-helvetica transition-colors">Github</a>
            </li>
          </ul>

          {/* Right column */}
          <ul className="space-y-4 mt-10 md:mt-0">
            <li>
              <a href="https://github.com/Subham12R/Trace/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm font-helvetica transition-colors">License</a>
            </li>
            <li>
              <a href="/privacy" className="text-white/50 hover:text-white text-sm font-helvetica transition-colors">Privacy</a>
            </li>
            <li>
              <a href="/terms" className="text-white/50 hover:text-white text-sm font-helvetica transition-colors">Terms</a>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6 text-xs font-helvetica mt-auto pt-16">
          <div className="flex flex-col gap-1">
            <p className="text-white/30">© Trackify AI 2026</p>
            <a href="https://souradeep.me" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">Made by souradeep.me</a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white/30">GitHub</p>
            <a href="https://github.com/pradhan-not-found" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">@pradhan-not-found</a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white/30">License</p>
            <p className="text-white/30">MIT Open Source</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white/30">Available On</p>
            <p className="text-white/30">MacOS & Windows</p>
          </div>
        </div>
      </footer>

      {/* Login Modal Overlay */}
      <style>{`
        @keyframes modal-fadein { from { opacity: 0; } to { opacity: 1; } }
        .modal-overlay { animation: modal-fadein 0.2s ease-out forwards; }
      `}</style>

        {loginOpen && (
          <div
            className="modal-overlay fixed inset-0 z-[100] flex bg-zinc-950 font-sans antialiased overflow-y-auto"
          >
            {/* Left Panel */}
            <div className="w-full lg:w-1/2 flex flex-col px-10 md:px-16 py-8 relative min-h-screen">
              {/* Top logo */}
              <div className="flex items-center gap-2 mb-auto z-10">
                <button onClick={() => setLoginOpen(false)} className="flex items-center gap-2 select-none bg-transparent border-none cursor-pointer">
                  <img src="/images/logo.png" alt="Trackify" width="28" height="28" className="rounded-md" />
                  <span className="text-white font-medium text-lg tracking-tight flex items-center">
                    Trackify<sup className="text-white font-bold text-[9px] ml-0.5 lowercase">ai</sup>
                  </span>
                </button>
              </div>

              {/* Form area */}
              <div className="flex flex-col justify-center flex-1 max-w-sm w-full mx-auto py-12 z-10">
                {/* Go back */}
                <button onClick={() => setLoginOpen(false)} className="text-white/40 hover:text-white text-sm font-helvetica mb-8 inline-flex items-center gap-1.5 transition-colors w-fit bg-transparent border-none cursor-pointer p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  Go back
                </button>

                {/* Heading */}
                <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: 'clamp(26px,3vw,32px)', letterSpacing: '-0.025em', color: '#f4f4f5', lineHeight: 1.25, margin: '0 0 32px' }}>
                  Welcome back to{' '}
                  <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#d4d4d8' }}>Trackify.</em>
                </h1>

                {/* OAuth buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button className="flex-1 flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Continue with GitHub
                  </button>
                </div>

                {/* OR divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px bg-white/10"></div>
                  <span className="text-white/30 text-xs font-helvetica tracking-widest uppercase">or</span>
                  <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* Email field */}
                <div className="mb-4">
                  <label className="block text-white/50 text-xs font-helvetica tracking-widest uppercase mb-2">Email</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm font-helvetica placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                {/* Password field */}
                <div className="mb-6">
                  <label className="block text-white/50 text-xs font-helvetica tracking-widest uppercase mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2.5 pr-10 text-white text-sm font-helvetica placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors cursor-pointer bg-transparent border-none p-0"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Sign in button */}
                <button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm py-3 rounded-xl transition-colors cursor-pointer mb-5 border-none" style={{ boxShadow: '0 4px 16px rgba(0,0,0,.18)' }}>
                  Sign in
                </button>

                {/* Sign up link */}
                <p className="text-center text-white/40 text-sm font-helvetica">
                  Don't have an account?{' '}
                  <button className="text-zinc-100 hover:text-white font-semibold transition-colors bg-transparent border-none cursor-pointer p-0 inline">Sign up</button>
                </p>
              </div>

              {/* Bottom links */}
              <div className="flex items-center justify-between mt-auto pt-4 z-10">
                <a href="#" className="text-white/25 hover:text-white/50 text-xs font-helvetica transition-colors">Terms of Service</a>
                <a href="#" className="text-white/25 hover:text-white/50 text-xs font-helvetica transition-colors">Privacy Policy</a>
              </div>
            </div>

            {/* Right Panel — GIF */}
            <div className="hidden lg:flex w-1/2 p-6 sticky top-0 h-screen">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {/* GIF background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/bg.gif')" }}
                />
                {/* Bottom overlay text */}
                <div className="absolute inset-0 flex flex-col justify-end p-12" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)' }}>
                  <h2 className="text-white text-4xl md:text-5xl font-sans font-semibold mb-4 leading-tight tracking-tight">
                    AI Analytics, <br/><em className="font-serif font-normal" style={{ fontStyle: 'italic' }}>simplified.</em>
                  </h2>
                  <p className="text-white/70 text-lg font-helvetica leading-relaxed max-w-md">
                    Trackify AI is your all-in-one AI analytics platform, designed to monitor and control your AI tools with ease. Gain insights, optimize performance, and ensure responsible AI usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      
    </main>
  );
}
