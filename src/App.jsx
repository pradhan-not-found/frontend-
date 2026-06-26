import BentoFeatures from './components/BentoFeatures'
import PricingMatrix from './components/PricingMatrix'
import './App.css'

/* ── Inline SVG icon helper ───────────────────────────── */
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
  </svg>
)

/* ── Social proof data ────────────────────────────────── */
const testimonials = [
  { name: 'Sarah K.', role: 'CTO, Lumen AI', quote: 'NexAI cut our inference costs by 62% in the first month. The neural routing alone is worth the price.' },
  { name: 'Marcus R.', role: 'Lead Engineer, Archon', quote: 'The bento grid feature explorer sold me in 30 seconds. Shipped to prod in an afternoon.' },
  { name: 'Priya S.', role: 'Head of Data, Qore Systems', quote: 'Enterprise RAG connected to our Postgres instance flawlessly. The context expansion is a genuine breakthrough.' },
]

const stats = [
  { value: '300+', label: 'Edge Locations' },
  { value: '62%', label: 'Avg Cost Reduction' },
  { value: '1M+', label: 'Token Context Window' },
  { value: '< 12ms', label: 'P99 Latency' },
]

/* ── Main App ─────────────────────────────────────────── */
export default function App() {
  return (
    <>
      {/* ─── Navigation ─────────────────────────────── */}
      <header role="banner" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(241,246,244,0.85)] border-b border-[#D9E8E2]">
        <nav role="navigation" aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" aria-label="NexAI Home" className="flex items-center gap-2">
            <span className="font-jetbrains font-bold text-xl text-[#172B36] tracking-tight">Nex<span className="text-[#FF9932]">AI</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-[#114C5A] hover:text-[#FF9932] transition-colors duration-200">Features</a>
            <a href="#pricing" className="text-sm font-medium text-[#114C5A] hover:text-[#FF9932] transition-colors duration-200">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-[#114C5A] hover:text-[#FF9932] transition-colors duration-200">Customers</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-[#172B36] hidden sm:inline">Sign In</a>
            <a href="#pricing" className="px-4 py-2 bg-[#172B36] text-white text-sm font-medium rounded-lg hover:bg-[#114C5A] transition-colors duration-200 shadow-sm">
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* ─── Main Content ───────────────────────────── */}
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────── */}
        <section aria-labelledby="hero-heading" className="pt-36 pb-24 px-4 text-center relative overflow-hidden">
          {/* Ambient gradient blobs */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#FFC801] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-1/4 w-80 h-80 bg-[#114C5A] opacity-10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#D9E8E2] text-[#114C5A] text-xs font-medium px-4 py-1.5 rounded-full mb-6 border border-[#D9E8E2]/60">
              <span className="w-2 h-2 bg-[#FF9932] rounded-full animate-pulse"></span>
              Now with 1M token context windows
            </div>

            <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-bold font-jetbrains text-[#172B36] mb-6 tracking-tight leading-tight">
              Intelligence at<br className="hidden sm:block" /> the <span className="text-[#FF9932]">Edge</span>.
            </h1>

            <p className="text-lg md:text-xl text-[#114C5A]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Deploy, scale, and optimize your AI infrastructure with zero configuration. The platform built for the next generation of automation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#pricing" className="px-8 py-4 bg-[#172B36] text-white font-medium rounded-xl hover:bg-[#114C5A] transition-colors duration-200 shadow-lg">
                Start Building Free
              </a>
              <a href="#features" className="px-8 py-4 bg-white border border-[#D9E8E2] text-[#172B36] font-medium rounded-xl hover:border-[#FFC801] hover:shadow-md transition-all duration-200">
                Explore Features →
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ─────────────────────────────── */}
        <section aria-label="Platform statistics" className="py-12 border-y border-[#D9E8E2] bg-white">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold font-jetbrains text-[#172B36]">{value}</p>
                <p className="text-sm text-[#114C5A]/70 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features (Bento / Accordion) ─────────── */}
        <section id="features" aria-labelledby="features-heading">
          <BentoFeatures />
        </section>

        {/* ── Pricing ───────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading" className="bg-white">
          <PricingMatrix />
        </section>

        {/* ── Testimonials ─────────────────────────── */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl font-bold font-jetbrains text-[#172B36] mb-4">
              Trusted by Builders
            </h2>
            <p className="text-[#114C5A]/80 max-w-xl mx-auto">
              Teams across the world use NexAI to ship faster and spend less.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {testimonials.map(({ name, role, quote }) => (
              <li key={name} className="bg-white rounded-2xl p-8 border border-[#D9E8E2] shadow-sm hover:border-[#FFC801] hover:shadow-md transition-all duration-300 flex flex-col gap-4">
                <div className="flex gap-1 text-[#FF9932]" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote className="text-[#114C5A]/80 text-sm leading-relaxed flex-grow">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <footer>
                  <p className="font-semibold text-[#172B36]">{name}</p>
                  <p className="text-xs text-[#114C5A]/60">{role}</p>
                </footer>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA Banner ────────────────────────────── */}
        <section aria-label="Call to action" className="py-24 px-4 bg-[#172B36] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-jetbrains text-white mb-4">
              Ready to ship faster?
            </h2>
            <p className="text-[#D9E8E2]/70 mb-8 text-lg">
              Join 10,000+ engineers who trust NexAI to power their AI applications.
            </p>
            <a href="#pricing" className="inline-block px-10 py-4 bg-[#FFC801] text-[#172B36] font-bold rounded-xl hover:bg-[#FF9932] transition-colors duration-200 shadow-lg">
              Get Started for Free
            </a>
          </div>
        </section>

      </main>

      {/* ─── Footer ─────────────────────────────────── */}
      <footer role="contentinfo" className="py-10 border-t border-[#D9E8E2] bg-[#F1F6F4]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-jetbrains font-bold text-[#172B36]">Nex<span className="text-[#FF9932]">AI</span></span>
          <p className="text-xs text-[#114C5A]/60 font-jetbrains">© 2026 NexAI. Built for the Speed Run Competition.</p>
        </div>
      </footer>
    </>
  )
}
