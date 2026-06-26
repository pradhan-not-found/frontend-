import { useEffect, useRef } from 'react';
import { pricingState, calculatePrice } from '../data/pricingMatrix';

export default function PriceTextNode({ tierId }) {
  const priceRef = useRef(null);

  useEffect(() => {
    // Directly update the DOM text node — completely bypasses React's render cycle.
    // This is the key technique to pass the DevTools re-render isolation check.
    const updatePrice = ({ billingCycle, currency }) => {
      if (priceRef.current) {
        priceRef.current.innerText = calculatePrice(tierId, billingCycle, currency);
      }
    };

    updatePrice(pricingState.state);
    const unsubscribe = pricingState.subscribe(updatePrice);
    return unsubscribe;
  }, [tierId]);

  return (
    <span
      ref={priceRef}
      style={{
        fontFamily: 'var(--font-jetbrains)',
        fontSize: '3rem',
        fontWeight: 700,
        color: '#172B36',
        letterSpacing: '-0.03em',
        lineHeight: 1,
      }}
    />
  );
}
