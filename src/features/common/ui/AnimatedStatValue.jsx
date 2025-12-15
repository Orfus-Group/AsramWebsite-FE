import React, { useEffect, useRef, useState } from "react";

// Count-up Animation Component
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
        // Extract number and suffix (e.g., "20+" -> 20, "+")
        const num = parseInt(value.replace(/\D/g, ""), 10);
        const suffix = value.replace(/[0-9]/g, "");

        if (isNaN(num)) {
            setDisplayValue(value);
            return;
        }

        const duration = 1200;
        const start = performance.now();

        const step = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            const current = Math.floor(progress * num);
            setDisplayValue(current + suffix);
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
