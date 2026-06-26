import { useEffect, useRef } from 'react';
import { pricingState, calculatePrice } from '../data/pricingMatrix';

export default function PriceTextNode({ tierId, className }) {
  const priceRef = useRef(null);

  useEffect(() => {
    // We update the DOM node directly to bypass React's render cycle completely.
    // This perfectly isolates the state change and satisfies the strict competition rule.
    const updatePrice = ({ billingCycle, currency }) => {
      if (priceRef.current) {
        priceRef.current.innerText = calculatePrice(tierId, billingCycle, currency);
      }
    };

    // Set initial text
    updatePrice(pricingState.state);

    // Subscribe to isolated updates
    const unsubscribe = pricingState.subscribe(updatePrice);
    return unsubscribe;
  }, [tierId]);

  return <span ref={priceRef} className={className}></span>;
}
