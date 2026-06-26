import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Word reveal animation setup
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.h1 
      className={className}
      variants={sentenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className="inline-block overflow-hidden pb-1">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.h1>
  );
};

export default function TraceLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="dark h-full antialiased geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable font-sans inter_b2991b2-module__9mH_6q__variable playfair_display_b7700c01-module__LbZqPq__variable min-h-full bg-zinc-950 relative">
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
      <div className="w-full fixed top-0 z-50 text-white">
        <div className="flex items-center justify-between px-8 py-2 relative transition-all duration-300" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 100%)', backdropFilter: 'blur(2px)' }}>
          <a className="nav-logo flex flex-row items-end justify-center cursor-pointer select-none" href="/">
            <img alt="Trackify Logo" width="32" height="32" className="mr-2 rounded-md text-shadow-md" src="/images/logo.png" />
            <span className="font-sans font-medium tracking-tighter text-xl text-zinc-100 text-shadow-lg flex items-center">Trackify<sup className="text-amber-500 font-bold ml-0.5 lowercase text-[10px]">ai</sup></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-100 text-shadow-lg">
            <a href="#features" className="micro-link hover:text-amber-600 transition-colors">Features</a>
            <a className="micro text-zinc-100 text-sm text-shadow-lg px-2 py-2 hover:underline cursor-pointer" href="/login">Sign In</a>
            <a href="https://github.com/Subham12R/Trace/releases" className="micro text-zinc-100 text-sm text-shadow-lg px-2 py-2 hover:underline cursor-pointer">Download</a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-zinc-100 hover:text-white transition-colors cursor-pointer z-50" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full border-b border-white/10 flex flex-col items-center gap-6 py-8 md:hidden" style={{ background: 'rgba(9, 9, 11, 0.6)', backdropFilter: 'blur(16px)' }}>
            <a href="#features" className="mobile-nav-item text-lg text-zinc-200 hover:text-white transition-colors py-1">Features</a>
            <a className="mobile-nav-item text-lg text-zinc-200 hover:text-white transition-colors py-1 cursor-pointer text-center" href="/login">Sign In</a>
            <a href="https://github.com/Subham12R/Trace/releases" className="mobile-nav-item text-lg text-amber-500 hover:text-amber-400 font-medium transition-colors py-1">Download</a>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col justify-between px-8 md:px-12 pt-24 pb-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.gif')" }}>
        <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent via-[#171717]/20 to-zinc-950 pointer-events-none"></div>
        <div className="relative z-10 flex items-center flex-col h-full justify-center gap-6 text-center">
          <AnimatedText 
            text="Your AI analytics platform for all your AI tools." 
            className="text-zinc-900 text-shadow-lg text-5xl md:text-6xl lg:text-8xl font-normal max-w-5xl font-serif tracking-tighter" 
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center gap-4 mt-12 w-full px-4 mx-auto justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none">
              <a className="micro transition-all ease-in-out shadow-2xl hover:scale-105 duration-300" href="https://www.producthunt.com/products/trace-28?embed=true" target="_blank" rel="noopener noreferrer">
                <img alt="Trackify on Product Hunt" width="200" height="44" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1177399&amp;theme=dark&amp;t=1782372206153" />
              </a>
              <a href="https://github.com/Subham12R/Trace/releases/download/v0.3.1/Trace-0.3.1-mac.dmg" className="micro flex items-center justify-center gap-2 text-white text-md px-5 bg-zinc-950 py-2.5 rounded-md shadow-md hover:bg-zinc-800 cursor-pointer w-full sm:w-auto whitespace-nowrap transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" color="currentColor"><path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                <span>Download for Mac</span>
              </a>
              <a href="https://github.com/Subham12R/Trace/releases/download/v0.3.0/Trace-Setup.exe" className="micro flex items-center justify-center gap-2 text-zinc-900 text-md px-5 bg-white py-2.5 rounded-md shadow-md hover:bg-gray-200 cursor-pointer w-full sm:w-auto whitespace-nowrap transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor"><path d="M14.0136 3.99538L8.01361 4.99036C5.61912 5.38744 4.42188 5.58597 3.71094 6.421C3 7.25602 3 8.46368 3 10.879L3 13.121C3 15.5363 3 16.744 3.71094 17.579C4.42188 18.414 5.61913 18.6126 8.01361 19.0096L14.0136 20.0046C17.2567 20.5424 18.8782 20.8113 19.9391 19.9171C21 19.023 21 17.3873 21 14.116V9.88402C21 6.6127 21 4.97704 19.9391 4.08286C18.8782 3.18868 17.2567 3.45758 14.0136 3.99538Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M11 4.5V19.5M3 12H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                <span>Download for Windows</span>
              </a>
            </div>
          </motion.div>
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
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
              whileInView={{ opacity: 1, scale: 1.05, rotateX: 20 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-5xl mt-8 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] bg-[#222222] rounded-3xl shadow-2xl"
              style={{
                boxShadow: '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-800 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                <img alt="Trace dashboard" src="/images/demo.png" className="mx-auto rounded-2xl object-cover h-full object-center w-full" />
              </div>
            </motion.div>
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
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
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
              <motion.div 
                key={i} 
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="feat-card p-8 flex flex-col justify-between min-h-56 border-2 rounded shadow border-white/10 transition-colors"
              >
                <div>
                  <p className="font-helvetica text-lg font-medium text-amber-50 mb-3">{feat.title}</p>
                  <p className="text-amber-50 text-md leading-relaxed font-helvetica">{feat.desc}</p>
                </div>
                <img src={`/logos/${feat.icon}`} alt={feat.title} className="h-8 w-8 object-contain mt-8" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
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
          </motion.div>
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
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/40 text-lg md:text-xl font-helvetica max-w-2xl mx-auto leading-relaxed"
            >
              From solo developers to enterprise teams — here's what our users have to say after making Trackify AI their daily partner.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative flex overflow-hidden w-full py-8 mt-8"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <div className="flex w-max animate-scroll gap-6">
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
                  className="w-80 md:w-96 shrink-0 group/card relative overflow-hidden rounded-2xl bg-white p-8 flex flex-col justify-between min-h-72 transition-all duration-500 cursor-default"
                >
                  {/* Hover Glassy Background (Orange gradient) */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-0">
                    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/images/bg.gif')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full overflow-hidden">
                    <p className="text-black transition-colors duration-300 text-base font-helvetica leading-relaxed mb-8 whitespace-normal text-wrap break-words min-w-0 break-keep">
                      {testimonial.text}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-200 flex items-center justify-center shrink-0 border border-zinc-300 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-zinc-900 font-medium font-helvetica text-sm">{testimonial.name}</p>
                          <p className="text-zinc-500 text-xs font-helvetica group-hover/card:text-zinc-800 transition-colors">{testimonial.title}</p>
                        </div>
                      </div>
                      
                      <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        <a href="#" className="flex items-center gap-1.5 bg-zinc-900 text-white text-[10px] font-medium px-2.5 py-1.5 rounded-md hover:bg-black transition-colors">
                          Read on 
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative bg-zinc-950 px-8 md:px-12 py-28">
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
              {/* Toggle */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-1 flex items-center font-helvetica text-sm">
                <button className="bg-white text-zinc-950 px-4 py-1.5 rounded-md font-medium cursor-pointer">Monthly</button>
                <button className="text-white/60 px-4 py-1.5 rounded-md hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  Annual <span className="bg-amber-500/20 text-amber-400 text-[10px] px-1.5 py-0.5 rounded font-bold">-15%</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Solo Plan */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-serif text-2xl text-white italic mb-2">Solo</h4>
              <div className="mb-2">
                <span className="text-5xl font-serif text-white">$0</span>
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
              {/* Background */}
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bg.gif')" }}></div>
              <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[6px] z-0"></div>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h4 className="font-serif text-2xl text-white italic mb-2">Pro</h4>
                <div className="mb-2">
                  <span className="text-5xl font-serif text-white">$49</span>
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
                <span className="text-5xl font-serif text-white">$89</span>
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
      <footer className="relative min-h-[75vh] flex flex-col justify-between px-8 md:px-16 pt-32 pb-10 overflow-hidden bg-zinc-950">
        <div className="pointer-events-none absolute inset-0 origin-bottom" style={{ background: 'radial-gradient(ellipse 120% 90% at 50% 125%, #a14409 0%, #3d1908 42%, transparent 72%)' }}></div>
        <div className="relative flex justify-center gap-16 md:gap-32 w-full mx-auto z-10">
          <div className="mt-2">
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><a href="https://github.com/Subham12R/Trace/releases" target="_blank" rel="noopener noreferrer" className="micro-link text-white/50 hover:text-white text-base font-helvetica transition-colors">Download</a></li>
              <li className="flex items-center gap-2"><a href="/changelog" className="micro-link text-white/50 hover:text-white text-base font-helvetica transition-colors">Changelog</a><span className="text-[10px] font-helvetica border border-white/20 text-white/40 px-1.5 py-0.5 rounded-full tracking-wider">NEW</span></li>
              <li className="flex items-center gap-2"><a href="https://github.com/Subham12R/Trace" target="_blank" rel="noopener noreferrer" className="micro-link text-white/50 hover:text-white text-base font-helvetica transition-colors">Github</a></li>
            </ul>
          </div>
          <div className="mt-2">
            <ul className="space-y-4">
              <li><a href="https://github.com/Subham12R/Trace/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="micro-link text-white/50 hover:text-white text-base font-helvetica transition-colors">License</a></li>
              <li><a href="/privacy" className="micro-link text-white/50 hover:text-white text-base font-helvetica transition-colors">Privacy</a></li>
              <li><a href="/terms" className="micro-link text-white/50 hover:text-white text-base font-helvetica transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <span className="text-white/10 text-[100px] sm:text-[150px] md:text-[220px] lg:text-[280px] font-helvetica font-bold leading-none tracking-tighter whitespace-nowrap">
            Trackify.ai
          </span>
        </div>

        <div className="relative w-full mx-auto grid grid-cols-2 md:flex md:justify-between md:items-center gap-6 pt-32 text-xs text-white/25 font-helvetica z-10">
          <div>
            <p className="text-white/15 mb-1">© Trackify AI 2026</p>
            <a href="https://souradeep.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Made by souradeep.me</a>
          </div>
          <div>
            <p className="text-white/15 mb-1">Github</p>
            <a href="https://github.com/pradhan-not-found" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@pradhan-not-found</a>
          </div>
          <div>
            <p className="text-white/15 mb-1">License</p>
            <p>MIT Open Source</p>
          </div>
          <div>
            <p className="text-white/15 mb-1">Available On</p>
            <p>MacOS & Windows</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
