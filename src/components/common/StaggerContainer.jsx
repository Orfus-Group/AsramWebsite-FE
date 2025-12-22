import React from "react";
import { m } from "framer-motion";

// Container variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Time between each child animation
            delayChildren: 0.1,   // Delay before starting the sequence
        },
    },
};

// Item variants
export const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 },
    },
};

const StaggerContainer = ({ children, className = "" }) => {
    return (
        <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </m.div>
    );
};

export default StaggerContainer;
