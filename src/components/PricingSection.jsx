import React, { useRef, useEffect } from 'react';

// Pure JS Matrix for Pricing
const baseRates = {
  basic: 10,
  pro: 29,
  enterprise: 99
};

const currencyMultipliers = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  INR: { symbol: '₹', rate: 83 }
};

export function PricingSection() {
  const priceRefs = {
    basic: useRef(null),
    pro: useRef(null),
    enterprise: useRef(null)
  };

  const currentSettings = useRef({
    currency: 'USD',
    isAnnual: false
  });

  const updatePrices = () => {
    const { currency, isAnnual } = currentSettings.current;
    const { symbol, rate } = currencyMultipliers[currency];
    const discount = isAnnual ? 0.8 : 1; // 20% discount for annual

    ['basic', 'pro', 'enterprise'].forEach(tier => {
      if (priceRefs[tier].current) {
        const finalPrice = (baseRates[tier] * rate * discount).toFixed(0);
        priceRefs[tier].current.innerText = `${symbol}${finalPrice}`;
      }
    });
  };

  useEffect(() => {
    updatePrices();
  }, []);

  const handleCurrencyChange = (e) => {
    currentSettings.current.currency = e.target.value;
    updatePrices();
  };

  const handleBillingToggle = (isAnnual) => {
    currentSettings.current.isAnnual = isAnnual;
    updatePrices();
    
    // Quick DOM update for the active toggle state without React state
    document.getElementById('monthly-btn').className = `px-4 py-2 rounded-md font-medium transition-colors ${!isAnnual ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'}`;
    document.getElementById('annual-btn').className = `px-4 py-2 rounded-md font-medium transition-colors ${isAnnual ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'}`;
  };

  return (
    <section id="pricing" className="py-24 bg-zinc-950 px-8 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6 tracking-tighter">Simple, transparent pricing.</h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">Scale your AI operations without worrying about unpredictable costs.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex bg-zinc-900 p-1 rounded-lg border border-white/10">
            <button id="monthly-btn" onClick={() => handleBillingToggle(false)} className="px-4 py-2 rounded-md font-medium transition-colors bg-amber-500 text-zinc-950">Monthly</button>
            <button id="annual-btn" onClick={() => handleBillingToggle(true)} className="px-4 py-2 rounded-md font-medium transition-colors text-zinc-400 hover:text-white">Annually (-20%)</button>
          </div>
          <select 
            onChange={handleCurrencyChange}
            className="bg-zinc-900 border border-white/10 text-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic */}
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl flex flex-col">
          <h3 className="text-xl font-medium text-white mb-2">Basic</h3>
          <p className="text-zinc-400 text-sm mb-6">Perfect for side projects.</p>
          <div className="mb-6 flex items-baseline gap-2">
            <span ref={priceRefs.basic} className="text-5xl font-light text-amber-50 tracking-tighter"></span>
            <span className="text-zinc-500">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow text-zinc-300 text-sm">
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Up to 5 AI integrations</li>
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Basic analytics</li>
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Community support</li>
          </ul>
          <button className="w-full py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors font-medium">Get Started</button>
        </div>

        {/* Pro */}
        <div className="bg-zinc-900 border-2 border-amber-500/50 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-amber-900/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
          <h3 className="text-xl font-medium text-white mb-2">Pro</h3>
          <p className="text-zinc-400 text-sm mb-6">For scaling startups.</p>
          <div className="mb-6 flex items-baseline gap-2">
            <span ref={priceRefs.pro} className="text-5xl font-light text-amber-50 tracking-tighter"></span>
            <span className="text-zinc-500">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow text-zinc-300 text-sm">
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited integrations</li>
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Advanced analytics & API</li>
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 24/7 Priority support</li>
          </ul>
          <button className="w-full py-3 rounded-lg bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors font-medium">Get Started</button>
        </div>

        {/* Enterprise */}
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl flex flex-col">
          <h3 className="text-xl font-medium text-white mb-2">Enterprise</h3>
          <p className="text-zinc-400 text-sm mb-6">For large scale operations.</p>
          <div className="mb-6 flex items-baseline gap-2">
            <span ref={priceRefs.enterprise} className="text-5xl font-light text-amber-50 tracking-tighter"></span>
            <span className="text-zinc-500">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow text-zinc-300 text-sm">
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom deployment</li>
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Dedicated account manager</li>
            <li className="flex gap-3 items-center"><svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom SLA</li>
          </ul>
          <button className="w-full py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors font-medium">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
