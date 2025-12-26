import React from "react";
import { T } from "@/theme";

import { motion } from "framer-motion";

const InfoCard = ({ icon, title, description, variant = "vertical-white", className = "" }) => {
    // Styles for Vertical White Card (Academic, Hostel)
    if (variant === "vertical-white") {
        return (
            <motion.div
                whileHover={{
                    scale: 1.03,
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(255, 255, 255, 0.8)",
                    transition: { duration: 0.3 }
                }}
                style={{ border: "solid 1px #e0e0e0" }}
                className={`bg-white p-[30px] rounded-[16px] flex flex-col items-start shadow-sm border border-gray-100 relative overflow-hidden cursor-pointer group ${className}`}
            >
                {/* Glass Shine Effect on Hover */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                <div className="bg-[#223F7F]/10 p-2.5 rounded-[8px] mb-4 flex items-center justify-center relative z-10 transition-colors duration-300 group-hover:bg-[#223F7F]/20">
                    {icon}
                </div>
                <h6 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-3 relative z-10`}>
                    {title}
                </h6>
                <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px] relative z-10`}>
                    {description}
                </p>
            </motion.div>
        );
    }

    // Styles for Horizontal Gray Card (Events)
    if (variant === "horizontal-gray") {
        return (
            <div
                style={{ border: "solid 0.9px rgba(7, 7, 7, 0.2)" }}
                className={`bg-[#EEF2F7] md:h-[192px] p-[30px] rounded-[11.3px] flex items-start gap-4 ${className}`}
            >
                <div className="bg-white px-[11px] py-[10px] rounded-[8px] flex-shrink-0 flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h3 className={`${T.font.family} font-medium text-[20px] text-[#223F7F] mb-1`}>
                        {title}
                    </h3>
                    <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px]`}>
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    return null;
};

export default InfoCard;
