import React, { useEffect, useRef, useState } from "react";
import { T } from "@/theme";

// Count-up Animation Component
function AnimatedStatValue({ value, className, style }) {
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

const StatCard = ({ icon: Icon, value, label }) => (
    <div className={`
        bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-[200px] w-full
        border border-gray-100
    `}>
        <div className="text-[#223F7F] mb-4">
            {Icon && <Icon className="w-[32px] h-[32px] text-[#008C8C]" />}
        </div>

        <AnimatedStatValue
            value={value}
            className="text-[#223F7F] text-3xl font-bold mb-2 font-montserrat"
        />

        <div className="text-[#555555] text-sm font-montserrat">{label}</div>
    </div>
);

export default StatCard;
