import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const stats = [
    { value: "50+", label: "Research Projects" },
    { value: "200+", label: "Publications" },
    { value: "15+", label: "Patents Filed" },
    { value: "40", label: "Ongoing Grants" },
];

const ResearchStats = () => {
    return (
        <div className="w-full bg-[#EBF5FF] py-[60px]"> {/* Choosing a light blue bg as per overall theme, screenshot looked white/light but often stats bars are colored */}
            {/* Actually screenshot shows pure white icons on light blue for stats? or the other way?
           Let's look at crop 7/8. "Statistics & Achievements". It looks like icons on top, text below. 
           Wait, there is a section "Statistics & Achievements" which is 4 columns.
           Then there is "Research Resources".
       */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px]">
                <h2 className={`${T.font.family} font-bold text-[32px] text-[#223F7F] mb-10 text-center`}>
                    Research Impact
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px]">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-[12px] shadow-sm text-center">
                            <h3 className={`${T.font.family} font-bold text-[48px] text-[#008C8C]`}>
                                {item.value}
                            </h3>
                            <p className={`${T.font.family} font-medium text-[18px] text-[#223F7F]`}>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchStats;
