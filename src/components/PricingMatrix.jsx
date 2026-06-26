import { useState, useEffect, useRef } from 'react';
import { PRICING_MATRIX } from '../data/pricingMatrix';

export default function PricingMatrix() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const starterPriceRef = useRef(null);
  const proPriceRef = useRef(null);
  const enterprisePriceRef = useRef(null);

  const calculatePrice = (basePrice, ann, curr) => {
    let finalPrice = basePrice * PRICING_MATRIX.tariffs[curr];
    if (ann) finalPrice *= PRICING_MATRIX.annual_multiplier;
    return finalPrice.toFixed(PRICING_MATRIX.format[curr]);
  };

  // State Isolation: directly update DOM nodes to avoid React re-renders of the whole component
  useEffect(() => {
    if (starterPriceRef.current) {
      starterPriceRef.current.textContent = `${PRICING_MATRIX.symbols[currency]}${calculatePrice(PRICING_MATRIX.base.starter, isAnnual, currency)}`;
    }
    if (proPriceRef.current) {
      proPriceRef.current.textContent = `${PRICING_MATRIX.symbols[currency]}${calculatePrice(PRICING_MATRIX.base.pro, isAnnual, currency)}`;
    }
    if (enterprisePriceRef.current) {
      enterprisePriceRef.current.textContent = `${PRICING_MATRIX.symbols[currency]}${calculatePrice(PRICING_MATRIX.base.enterprise, isAnnual, currency)}`;
    }
  }, [isAnnual, currency]);

  const plans = [
    { id: 'starter', name: 'Starter', ref: starterPriceRef, features: ['10GB Data Ingestion', 'Standard Support', 'Daily Backups'] },
    { id: 'pro', name: 'Pro', ref: proPriceRef, isPopular: true, features: ['100GB Data Ingestion', 'Priority Support', 'Real-time Backups', 'Custom Webhooks'] },
    { id: 'enterprise', name: 'Enterprise', ref: enterprisePriceRef, features: ['Unlimited Data Ingestion', '24/7 Dedicated Support', 'Real-time Backups', 'Custom Webhooks', 'Advanced Auditing'] }
  ];

  return (
    <section id="pricing" style={{ backgroundColor: '#172B36', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ fontFamily: 'var(--font-heading)', color: '#F1F6F4', fontSize: '32px', textAlign: 'center', marginBottom: '24px' }}>
          Transparent Pricing
        </h2>

        {/* Controls Container */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '64px' }}>
          
          {/* Billing Toggle */}
          <div style={{ 
            backgroundColor: '#114C5A', borderRadius: '999px', padding: '4px', 
            display: 'inline-flex', position: 'relative', cursor: 'pointer' 
          }} onClick={() => setIsAnnual(!isAnnual)}>
            {/* Sliding Pill */}
            <div style={{
              position: 'absolute', top: '4px', bottom: '4px', width: '50%',
              background: 'linear-gradient(135deg, #FFC801, #FF9932)',
              borderRadius: '999px', transition: 'transform 200ms ease-out',
              transform: isAnnual ? 'translateX(100%)' : 'translateX(0)'
            }} />
            <div style={{ 
              position: 'relative', zIndex: 1, padding: '8px 24px', 
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
              color: !isAnnual ? '#172B36' : 'rgba(241,246,244,0.6)', transition: 'color 200ms ease-out'
            }}>Monthly</div>
            <div style={{ 
              position: 'relative', zIndex: 1, padding: '8px 24px', 
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
              color: isAnnual ? '#172B36' : 'rgba(241,246,244,0.6)', transition: 'color 200ms ease-out'
            }}>Annually</div>
          </div>

          {/* Currency Dropdown */}
          <div style={{ position: 'relative' }}>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                backgroundColor: '#114C5A', border: '1px solid rgba(217,232,226,0.2)',
                color: '#F1F6F4', fontFamily: 'var(--font-body)', fontSize: '14px',
                padding: '10px 36px 10px 16px', borderRadius: '8px', appearance: 'none',
                outline: 'none', cursor: 'pointer'
              }}
            >
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="INR">INR ₹</option>
            </select>
            {/* Custom Arrow */}
            <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#FFC801', fontSize: '12px' }}>
              ▼
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {plans.map((plan) => (
            <div key={plan.id} style={{
              backgroundColor: '#114C5A',
              border: plan.isPopular ? '2px solid #FFC801' : '1px solid rgba(217,232,226,0.12)',
              borderRadius: '16px', padding: '32px', position: 'relative',
              boxShadow: plan.isPopular ? '0 0 32px rgba(255,200,1,0.2)' : 'none',
              display: 'flex', flexDirection: 'column'
            }}>
              {plan.isPopular && (
                <div style={{
                  position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #FFC801, #FF9932)',
                  color: '#172B36', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                  padding: '4px 12px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em'
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'rgba(241,246,244,0.7)', margin: '0 0 16px 0', textTransform: 'capitalize' }}>
                {plan.name}
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
                <span ref={plan.ref} style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', fontWeight: 700, color: '#FFC801' }}>
                  {PRICING_MATRIX.symbols[currency]}{calculatePrice(PRICING_MATRIX.base[plan.id], isAnnual, currency)}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(241,246,244,0.4)' }}>
                  / month
                </span>
              </div>

              <a href="#" style={{
                background: plan.isPopular ? 'linear-gradient(135deg, #FFC801, #FF9932)' : 'transparent',
                border: plan.isPopular ? 'none' : '1px solid rgba(241,246,244,0.2)',
                color: plan.isPopular ? '#172B36' : '#F1F6F4',
                fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 500,
                textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none',
                marginBottom: '32px', transition: 'all 150ms ease-out', display: 'block'
              }}
              onMouseEnter={e => {
                if (plan.isPopular) { e.currentTarget.style.filter = 'brightness(1.1)'; }
                else { e.currentTarget.style.borderColor = '#FFC801'; e.currentTarget.style.color = '#FFC801'; }
              }}
              onMouseLeave={e => {
                if (plan.isPopular) { e.currentTarget.style.filter = 'none'; }
                else { e.currentTarget.style.borderColor = 'rgba(241,246,244,0.2)'; e.currentTarget.style.color = '#F1F6F4'; }
              }}
              >
                {plan.isPopular ? 'Get Started' : 'Start Free Trial'}
              </a>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: '#FFC801', fontSize: '14px', marginTop: '2px' }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(241,246,244,0.7)', lineHeight: 1.4 }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
