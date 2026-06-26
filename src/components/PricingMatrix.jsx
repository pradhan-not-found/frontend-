import { useState } from 'react';
import PriceTextNode from './PriceTextNode';
import { pricingState, pricingMatrix } from '../data/pricingMatrix';

export default function PricingMatrix() {
  const [activeCycle, setActiveCycle] = useState(pricingState.state.billingCycle);
  const [activeCurrency, setActiveCurrency] = useState(pricingState.state.currency);

  const handleCycleChange = (cycle) => {
    setActiveCycle(cycle);
    pricingState.setBillingCycle(cycle);
  };

  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setActiveCurrency(currency);
    pricingState.setCurrency(currency);
  };

  return (
    <section style={{ padding: '6rem 1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 id="pricing-heading" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.25rem', fontWeight: 700, color: '#172B36', marginBottom: '1rem' }}>
          Simple, Transparent Pricing
        </h2>
        <p style={{ color: 'rgba(17,76,90,0.8)', maxWidth: '32rem', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Unlock the full power of AI automation. No hidden fees.
        </p>

        {/* Controls — these are the only things that re-render in this component */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          {/* Billing toggle */}
          <div style={{ display: 'flex', backgroundColor: '#F1F6F4', border: '1.5px solid #D9E8E2', borderRadius: '9999px', padding: '0.25rem' }}>
            {['monthly', 'annual'].map(cycle => (
              <button
                key={cycle}
                onClick={() => handleCycleChange(cycle)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.18s ease-out, color 0.18s ease-out, box-shadow 0.18s ease-out',
                  backgroundColor: activeCycle === cycle ? '#172B36' : 'transparent',
                  color: activeCycle === cycle ? '#fff' : '#114C5A',
                  boxShadow: activeCycle === cycle ? '0 2px 8px rgba(23,43,54,0.2)' : 'none',
                }}
              >
                {cycle === 'monthly' ? 'Monthly' : 'Annual  (−20%)'}
              </button>
            ))}
          </div>

          {/* Currency select */}
          <div style={{ position: 'relative' }}>
            <select
              value={activeCurrency}
              onChange={handleCurrencyChange}
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundColor: '#fff',
                border: '1.5px solid #D9E8E2',
                color: '#172B36',
                padding: '0.55rem 2.5rem 0.55rem 1rem',
                borderRadius: '0.625rem',
                fontFamily: 'var(--font-jetbrains)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                outline: 'none',
                transition: 'border-color 0.18s ease-out',
              }}
              onFocus={e => e.target.style.borderColor = '#FFC801'}
              onBlur={e => e.target.style.borderColor = '#D9E8E2'}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
            <div style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#114C5A' }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 11L2 5h12z"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tier cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {Object.entries(pricingMatrix.tiers).map(([tierId, tier]) => (
          <div
            key={tierId}
            className="pricing-card"
            style={{
              backgroundColor: '#fff',
              borderRadius: '1.25rem',
              padding: '2rem',
              border: '1.5px solid #D9E8E2',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.25s ease-out, box-shadow 0.25s ease-out',
            }}
          >
            {/* Top accent line */}
            <div className="card-accent-line" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '3px',
              backgroundColor: '#D9E8E2',
              transition: 'background-color 0.25s ease-out',
            }} />

            <h3 style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '1.25rem', fontWeight: 700, color: '#172B36', marginBottom: '0.5rem' }}>
              {tier.name}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(17,76,90,0.7)', marginBottom: '1.5rem', lineHeight: 1.6, minHeight: '2.5rem' }}>
              {tier.desc}
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
              {/* ISOLATED TEXT NODE — zero React re-render */}
              <PriceTextNode tierId={tierId} />
              <span style={{ color: 'rgba(17,76,90,0.6)', marginLeft: '0.375rem', fontWeight: 500, fontSize: '0.9rem' }}>/mo</span>
            </div>

            <button
              className="tier-btn"
              style={{
                marginTop: 'auto',
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.625rem',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: '1.5px solid #172B36',
                color: '#172B36',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.18s ease-out, color 0.18s ease-out',
              }}
              onMouseEnter={e => { e.target.style.backgroundColor = '#172B36'; e.target.style.color = '#fff'; }}
              onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#172B36'; }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .pricing-card:hover { border-color: #FFC801; box-shadow: 0 8px 30px rgba(255,200,1,0.12); }
        .pricing-card:hover .card-accent-line { background-color: #FFC801; }
      `}</style>
    </section>
  );
}
