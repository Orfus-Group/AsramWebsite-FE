import React, { useState, useEffect } from "react";
import { T } from "@/theme";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const calculateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        // Prevent division by zero
        if (docHeight === 0) return;

        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollProgress(scrollPercent);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    toggleVisibility();
                    calculateScrollProgress();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-8 right-8 z-[999] transition-all duration-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <div
                onClick={scrollToTop}
                className="relative flex items-center justify-center rounded-full cursor-pointer group shadow-lg transition-transform"
                style={{
                    width: 40,
                    height: 40,
                    background: `conic-gradient(${T.color.primary} ${scrollProgress}%, ${T.color.secondary} 0)`
                }}
            >
                {/* Icon */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-10"
                >
                    <path
                        d="M12 19V5M5 12L12 5L19 12"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ScrollToTop;
