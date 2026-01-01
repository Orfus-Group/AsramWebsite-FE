import { m } from "framer-motion";

const MotionSection = ({ children, className = "", delay = 0 }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default MotionSection;
