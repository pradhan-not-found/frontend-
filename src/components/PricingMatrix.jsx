import { useState } from 'react';
import PriceTextNode from './PriceTextNode';
import { pricingState, pricingMatrix } from '../data/pricingMatrix';

export default function PricingMatrix() {
  // We use local state JUST for the UI of the toggles themselves, so they appear active.
  // We DO NOT pass these down to the pricing tiers.
  const [activeCycle, setActiveCycle] = useState(pricingState.state.billingCycle);
  const [activeCurrency, setActiveCurrency] = useState(pricingState.state.currency);

  const handleCycleChange = (cycle) => {
    setActiveCycle(cycle);
    pricingState.setBillingCycle(cycle); // Broadcasts to isolated nodes
  };

  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setActiveCurrency(currency);
    pricingState.setCurrency(currency); // Broadcasts to isolated nodes
  };

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-jetbrains mb-4 text-color-oceanic-noir">Simple, Transparent Pricing</h2>
        <p className="text-lg text-color-nocturnal-expedition/80 max-w-2xl mx-auto mb-8">
          Unlock the full power of AI automation with a plan tailored to your needs.
        </p>

        {/* Controls Row - These are the only things that re-render here */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <div className="flex bg-color-mystic-mint/30 p-1 rounded-full border border-color-mystic-mint">
            <button 
              onClick={() => handleCycleChange('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCycle === 'monthly' ? 'bg-color-oceanic-noir text-white shadow-md' : 'text-color-oceanic-noir hover:bg-color-mystic-mint/50'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => handleCycleChange('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCycle === 'annual' ? 'bg-color-oceanic-noir text-white shadow-md' : 'text-color-oceanic-noir hover:bg-color-mystic-mint/50'}`}
            >
              Annual (Save 20%)
            </button>
          </div>

          <div className="relative">
            <select 
              value={activeCurrency}
              onChange={handleCurrencyChange}
              className="appearance-none bg-color-arctic-powder border border-color-mystic-mint text-color-oceanic-noir py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-forsythia font-jetbrains font-medium cursor-pointer transition-all duration-200"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-color-oceanic-noir">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(pricingMatrix.tiers).map(([tierId, tier]) => (
          <div key={tierId} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-color-mystic-mint hover:border-color-forsythia hover:shadow-[0_8px_30px_rgba(255,200,1,0.15)] transition-all duration-400 flex flex-col group relative overflow-hidden">
            
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-color-mystic-mint group-hover:bg-color-forsythia transition-colors duration-400"></div>

            <h3 className="text-2xl font-bold text-color-oceanic-noir mb-2">{tier.name}</h3>
            <p className="text-color-nocturnal-expedition/70 text-sm mb-6 h-10">{tier.desc}</p>
            
            <div className="mb-8 flex items-baseline">
              {/* THIS IS THE ISOLATED TEXT NODE */}
              <PriceTextNode tierId={tierId} className="text-5xl font-jetbrains font-bold text-color-oceanic-noir tracking-tight" />
              <span className="text-color-nocturnal-expedition/60 ml-2 font-medium">/mo</span>
            </div>

            <button className="mt-auto w-full py-3 rounded-lg font-medium text-center transition-all duration-200 border-2 border-color-oceanic-noir text-color-oceanic-noir hover:bg-color-oceanic-noir hover:text-white">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
