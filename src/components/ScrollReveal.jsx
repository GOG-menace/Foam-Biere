import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Smoothly reveals child elements as they enter the viewport during scrolling.
 * Supports fade-up, scale-up, and configurable stagger delays.
 */
export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up' | 'fade-in' | 'scale-up'
  delay = 0,             // Delay in milliseconds
  duration = 650,        // Duration in milliseconds
  threshold = 0.08,      // % of element visible before triggering
  once = true,           // If true, stays visible once triggered
  as: Component = 'div',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // If reduced motion is preferred, reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // If element is already in the viewport upon mount (e.g., above the fold), show with gentle delay
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => setIsVisible(true), 40 + delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, delay]);

  const getAnimationClass = () => {
    if (isVisible) {
      return 'opacity-100 translate-y-0 scale-100';
    }
    switch (animation) {
      case 'scale-up':
        return 'opacity-0 scale-95 translate-y-4';
      case 'fade-in':
        return 'opacity-0';
      case 'fade-up':
      default:
        return 'opacity-0 translate-y-7';
    }
  };

  return (
    <Component
      ref={domRef}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform',
        ...rest.style
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
