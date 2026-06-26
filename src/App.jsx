import BentoFeatures from './components/BentoFeatures'
import PricingMatrix from './components/PricingMatrix'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#FF9932" aria-hidden="true">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
  </svg>
)

const testimonials = [
  { name: 'Sarah K.',  role: 'CTO, Lumen AI',      quote: 'NexAI cut our inference costs by 62% in the first month. The neural routing alone is worth the price.' },
  { name: 'Marcus R.', role: 'Lead Engineer, Archon', quote: 'The bento grid feature explorer sold me in 30 seconds. Shipped to prod in an afternoon.' },
  { name: 'Priya S.', role: 'Head of Data, Qore',   quote: 'Enterprise RAG connected to our Postgres instance flawlessly. The context expansion is a genuine breakthrough.' },
]

const stats = [
  { value: '300+',  label: 'Edge Locations' },
  { value: '62%',   label: 'Avg Cost Reduction' },
  { value: '1M+',   label: 'Token Context Window' },
  { value: '<12ms', label: 'P99 Latency' },
]

export default function App() {
  return (
    <>
      {/* ── Navigation ── */}
      <Navbar />

      <main id="main-content">

        {/* ── Hero ── */}
        <Hero />

        {/* ── Stats Bar ── */}
        <section aria-label="Platform statistics" style={{ borderTop: '1px solid #D9E8E2', borderBottom: '1px solid #D9E8E2', backgroundColor: '#fff', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="stats-grid">
            {stats.map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2rem', fontWeight: 700, color: '#172B36' }}>{value}</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(17,76,90,0.7)', marginTop: '0.25rem' }}>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" aria-labelledby="features-heading">
          <BentoFeatures />
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading" style={{ backgroundColor: '#fff' }}>
          <PricingMatrix />
        </section>

        {/* ── Testimonials ── */}
        <section id="testimonials" aria-labelledby="testimonials-heading" style={{ padding: '6rem 1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 id="testimonials-heading" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.25rem', fontWeight: 700, color: '#172B36', marginBottom: '1rem' }}>
              Trusted by Builders
            </h2>
            <p style={{ color: 'rgba(17,76,90,0.8)', maxWidth: '28rem', margin: '0 auto' }}>
              Teams across the world use NexAI to ship faster and spend less.
            </p>
          </div>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', listStyle: 'none' }}>
            {testimonials.map(({ name, role, quote }) => (
              <li key={name} className="card-hover" style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '2rem', border: '1px solid #D9E8E2', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem' }} aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote style={{ color: 'rgba(17,76,90,0.8)', fontSize: '0.9rem', lineHeight: 1.7, flexGrow: 1 }}>
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <footer>
                  <p style={{ fontWeight: 600, color: '#172B36', fontSize: '0.9rem' }}>{name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(17,76,90,0.6)' }}>{role}</p>
                </footer>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA Banner ── */}
        <section aria-label="Call to action" style={{ backgroundColor: '#172B36', padding: '6rem 1.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Ready to ship faster?
            </h2>
            <p style={{ color: 'rgba(217,232,226,0.7)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Join 10,000+ engineers who trust NexAI to power their AI applications.
            </p>
            <a href="#pricing" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: '#FFC801', color: '#172B36', fontWeight: 700, borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem', transition: 'background-color 0.2s ease-out' }}
              onMouseEnter={e => e.target.style.backgroundColor = '#FF9932'}
              onMouseLeave={e => e.target.style.backgroundColor = '#FFC801'}
            >
              Get Started for Free
            </a>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer role="contentinfo" style={{ borderTop: '1px solid #D9E8E2', backgroundColor: '#F1F6F4', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 700, color: '#172B36' }}>
            Nex<span style={{ color: '#FF9932' }}>AI</span>
          </span>
          <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.75rem', color: 'rgba(17,76,90,0.6)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <img src="/SVGs/link.svg" alt="" style={{ width: '0.875rem', height: '0.875rem', opacity: 0.6 }} />
            <span>Built for the Speed Run Competition. Made by <a href="https://souradeep.me" target="_blank" rel="noopener noreferrer" style={{ color: '#114C5A', textDecoration: 'underline', fontWeight: 600 }}>souradeep.me</a>.</span>
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .btn-primary {
          padding: 0.875rem 2rem;
          background-color: #172B36;
          color: #fff;
          font-weight: 600;
          border-radius: 0.75rem;
          text-decoration: none;
          font-size: 1rem;
          transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
          box-shadow: 0 4px 14px rgba(23,43,54,0.25);
        }
        .btn-primary:hover { background-color: #114C5A; box-shadow: 0 6px 20px rgba(23,43,54,0.35); }
        .btn-secondary {
          padding: 0.875rem 2rem;
          background-color: #fff;
          color: #172B36;
          font-weight: 600;
          border-radius: 0.75rem;
          text-decoration: none;
          font-size: 1rem;
          border: 1.5px solid #D9E8E2;
          transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out;
        }
        .btn-secondary:hover { border-color: #FFC801; box-shadow: 0 4px 14px rgba(255,200,1,0.15); }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: #114C5A;
          text-decoration: none;
          transition: color 0.15s ease-out;
        }
        .nav-link:hover { color: #FF9932; }
        .card-hover {
          transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out;
        }
        .card-hover:hover { border-color: #FFC801; box-shadow: 0 8px 30px rgba(255,200,1,0.1); }
        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
