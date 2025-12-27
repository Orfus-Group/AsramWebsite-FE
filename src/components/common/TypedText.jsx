import React from "react";
import { m } from "framer-motion";

const TypedText = ({ text, className = "", delay = 0, stagger = 0.05 }) => {
    // Split text into characters
    const characters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay * i,
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <m.span
            style={{ overflow: "hidden", display: "inline-block" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {characters.map((char, index) => (
                <m.span variants={child} key={index}>
                    {char === " " ? "\u00A0" : char}
                </m.span>
            ))}
        </m.span>
    );
};

export default TypedText;
