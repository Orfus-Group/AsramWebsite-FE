import React, { useEffect, useRef, useState } from "react";

export default function AnimatedStatValue({ value, className, style }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.4 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animateValue = () => {
    /**
     * Regex explanation:
     * ^([^\d]*)   -> prefix (₹, $, etc.)
     * ([\d.]+)    -> number (supports decimals)
     * (.*)$       -> suffix (Cr+, %, etc.)
     */
    const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const num = parseFloat(numStr);

    if (isNaN(num)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = (progress * num).toFixed(numStr.includes(".") ? 1 : 0);
      setDisplayValue(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <h3 ref={elementRef} className={className} style={style}>
      {displayValue}
    </h3>
  );
}
