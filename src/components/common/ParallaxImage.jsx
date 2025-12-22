import React, { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";

const ParallaxImage = ({ src, alt, className = "", containerClassName = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Map scroll progress to vertical movement.
    // As the user scrolls down, the image moves slightly up (or slower than scroll).
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={ref}
            className={`overflow-hidden relative ${containerClassName}`}
        >
            <m.img
                style={{ y, scale: 1.1 }} // Scale up slightly to avoid empty edges during parallax
                src={src}
                alt={alt}
                className={`w-full h-full object-cover ${className}`}
                loading="lazy"
                decoding="async"
            />
        </div>
    );
};

export default ParallaxImage;
