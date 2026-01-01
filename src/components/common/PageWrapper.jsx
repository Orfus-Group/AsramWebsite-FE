import React from "react";
import { motion } from "framer-motion";

const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const PageWrapper = ({ children }) => {
    return (
        <div className="w-full">
            {children}
        </div>
    );
};

export default PageWrapper;
