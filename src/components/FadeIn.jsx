import React, { useEffect, useRef, useState } from 'react';

export function FadeIn({ children, className, delay = 0, style, as = 'div' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '50px' });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Component = as;

  return (
    <Component 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'} ${className || ''}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </Component>
  );
}
