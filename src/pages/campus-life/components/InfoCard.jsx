import React from "react";
import { T } from "@/theme";



const InfoCard = ({
    icon,
    title,
    description,
    variant = "vertical-white",
    className = "",
    padding = "p-8",
    borderRadius = "rounded-2xl",
    gap = "mb-6",
    iconContainerClassName = "mb-6 p-4 rounded-xl bg-blue-50 text-blue-900"
}) => {
    // Styles for Vertical White Card (Academic, Hostel)
    if (variant === "vertical-white") {
        return (

            <div
                className={`group relative bg-white ${borderRadius} ${padding} h-full border border-gray-100 hover:border-blue-100 transition-colors shadow-sm ${className}`}
            >
                <div className={`inline-block transition-colors duration-300 ${iconContainerClassName}`}>
                    {icon}
                </div>
                <h6 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] ${gap === "mb-6" ? "mb-3" : "mb-[10px]"} relative z-10`}>
                    {title}
                </h6>
                <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px] relative z-10 
                    ${gap !== "mb-6" ? "mt-[10px]" : ""} 
                `}>
                    {description}
                </p>
            </div>
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
