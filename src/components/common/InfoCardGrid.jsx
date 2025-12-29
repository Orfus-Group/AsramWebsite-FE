import React from "react";
import { T } from "@/theme";

const InfoCardGrid = ({
    items,
    gridClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]",
    cardClassName = "bg-white rounded-[13.1px] p-[20px] border border-[rgba(7,7,7,0.2)] h-full flex flex-col items-start hover:shadow-md transition-shadow",
    iconContainerClassName = "w-[48px] h-[48px] bg-[rgba(34,63,127,0.1)] rounded-[8px] flex items-center justify-center text-[#223F7F] mb-[16px] flex-shrink-0",
    titleClassName = "text-[#223F7F] font-semibold text-[20px] leading-[1.2] mb-[12px] font-montserrat",
    descriptionClassName = "text-[rgba(25,25,25,0.75)] text-[18px] leading-[1.44] font-montserrat flex-1",
}) => {
    return (
        <div className={gridClassName}>
            {items.map((item, index) => (
                <div key={index} className={cardClassName}>
                    {item.icon && (
                        <div className={iconContainerClassName}>
                            {typeof item.icon === "string" ? (
                                <img src={item.icon} className="w-[32px] h-[32px]" alt="" />
                            ) : (
                                item.icon
                            )}
                        </div>
                    )}
                    <h3 className={titleClassName}>{item.title}</h3>
                    <p className={descriptionClassName}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoCardGrid;
