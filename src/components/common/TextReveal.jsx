import { m } from "framer-motion";

const TextReveal = ({ children, className = "", delay = 0 }) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <m.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }} // Cubic bezier for "magazine" feel
            >
                {children}
            </m.div>
        </div>
    );
};

export default TextReveal;
