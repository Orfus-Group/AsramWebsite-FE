import { m } from "framer-motion";

const MotionSection = ({ children, className = "", delay = 0 }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </m.div>
    );
};

export default MotionSection;
