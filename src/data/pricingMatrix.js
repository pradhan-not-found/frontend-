// A simple pub/sub event emitter to isolate state updates
class PricingEmitter {
  constructor() {
    this.listeners = new Set();
    this.state = {
      billingCycle: 'monthly', // 'monthly' | 'annual'
      currency: 'USD' // 'USD' | 'EUR' | 'INR'
    };
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  setBillingCycle(cycle) {
    if (this.state.billingCycle === cycle) return;
    this.state.billingCycle = cycle;
    this.emit();
  }

  setCurrency(currency) {
    if (this.state.currency === currency) return;
    this.state.currency = currency;
    this.emit();
  }

  emit() {
    this.listeners.forEach(fn => fn(this.state));
  }
}

export const pricingState = new PricingEmitter();

export const pricingMatrix = {
  // Base rates are in USD for Monthly
  tiers: {
    starter: { name: 'Starter', baseRate: 19, desc: 'Perfect for individuals and small teams starting out.' },
    pro: { name: 'Pro', baseRate: 79, desc: 'Advanced features and limits for scaling workflows.' },
    enterprise: { name: 'Enterprise', baseRate: 249, desc: 'Custom solutions for large organizations.' }
  },
  multipliers: {
    annual: 0.8, // 20% discount
    monthly: 1.0
  },
  tariffs: {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    INR: { symbol: '₹', rate: 83.0 }
  }
};

export const calculatePrice = (tierId, billingCycle, currency) => {
  const base = pricingMatrix.tiers[tierId].baseRate;
  const cycleMultiplier = pricingMatrix.multipliers[billingCycle];
  const tariff = pricingMatrix.tariffs[currency];
  
  const finalValue = base * cycleMultiplier * tariff.rate;
  
  // Format depending on currency
  if (currency === 'INR') {
    return `${tariff.symbol}${Math.round(finalValue)}`;
  }
  return `${tariff.symbol}${finalValue.toFixed(0)}`;
};
