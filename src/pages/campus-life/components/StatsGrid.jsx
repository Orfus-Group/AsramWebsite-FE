import React from "react";
import { T } from "@/theme";

const StatsGrid = ({ stats, borderStyle = "solid 1px rgba(7, 7, 7, 0.2)", bg = "bg-[#EEF2F7]" }) => {
    return (
        <div
            style={{ border: borderStyle }}
            className={`${bg} rounded-[11.3px] p-[20px]`}
        >
            <div className={`grid grid-cols-1 md:grid-cols-${stats.length} gap-[30px] items-center text-center`}>
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <h3 className={`${T.font.family} font-semibold text-[32px] md:text-[40px] text-[#223F7F] mb-0`}>
                            {stat.value}
                        </h3>
                        <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsGrid;
