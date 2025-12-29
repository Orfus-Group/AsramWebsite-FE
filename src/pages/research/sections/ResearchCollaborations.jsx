import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconBuilding = "/AsramWebsite-FE/assets/icons/IconBuilding.svg";
const IconGlobe = "/AsramWebsite-FE/assets/icons/IconGlobe.svg";
const IconHandshake = "/AsramWebsite-FE/assets/icons/IconHandshake.svg";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";

const stats = [
    {
        value: "25+",
        label: "National Institutions",
        icon: <img src={IconBuilding} className="w-[32px] h-[32px]" alt="" /> // Building
    },
    {
        value: "12",
        label: "International Partners",
        icon: <img src={IconGlobe} className="w-[32px] h-[32px]" alt="" /> // Globe
    },
    {
        value: "18",
        label: "Industry Collaborations",
        icon: <img src={IconHandshake} className="w-[32px] h-[32px]" alt="" /> // Handshake
    }
];

const nationalCollabs = [
    { name: "IIT Madras", projects: "3 Projects" },
    { name: "AIIMS Delhi", projects: "5 Projects" },
    { name: "CSIR-IGIB", projects: "2 Projects" },
    { name: "CMC Vellore", projects: "4 Projects" },
];

const internationalCollabs = [
    { name: "Stanford University, USA", focus: "Cardiovascular Research" },
    { name: "Johns Hopkins University, USA", focus: "Nursing Education & Research" },
    { name: "University of Oxford, UK", focus: "Clinical Trials" },
    { name: "National University of Singapore", focus: "Digital Health" },
];

const ResearchCollaborations = () => {
    return (
        <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Collaborations & MoUs
            </h2>

            {/* 1. Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
                {stats.map((stat, index) => (
                    <div style={{ border: "1px solid #07070733" }} key={index} className="bg-white rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-center text-center shadow-sm">
                        <div className="w-[56px] h-[56px] mb-4 bg-[#008C8C] rounded-[8px] text-[#FFF] flex items-center justify-center">
                            {stat.icon}
                        </div>
                        <AnimatedStatValue
                            value={stat.value}
                            className={`${T.font.family} font-bold text-[28px] text-[#223F7F] mb-1`}
                        />
                        <p className={`${T.font.family} font-regular text-[18px] leading-[26px] text-[#191919BF]`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Detailed Lists Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">

                {/* National */}
                <div style={{ border: "1px solid #07070733" }} className="bg-white rounded-[10px] p-[24px] md:p-[40px] shadow-sm flex flex-col">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        National Collaborations
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                        {nationalCollabs.map((item, index) => (
                            <div key={index} style={{ borderBottom: "1px solid #E5E7EB" }} className="flex justify-between items-center pb-4 last:border-0 last:pb-0">
                                <span className={`${T.font.family} font-medium text-[14px] text-[#191919]`}>
                                    {item.name}
                                </span>
                                <span className={`${T.font.family} text-[14px] leading-[20px] text-[#008C8C] font-regular`}>
                                    {item.projects}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#223F7F] leading-[24px] font-regular text-[15px] hover:text-[#1E3A8A] transition-colors mt-auto pt-4">
                        View All National Partners
                        <span><img src={IconArrowRight} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" alt="" /></span>
                    </button>
                </div>

                {/* International */}
                <div style={{ border: "1px solid #07070733" }} className="bg-white rounded-[10px] p-[24px] md:p-[40px] shadow-sm flex flex-col">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        International Collaborations
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                        {internationalCollabs.map((item, index) => (
                            <div style={{ borderBottom: "1px solid #E5E7EB" }} key={index} className=" pb-4 last:border-0 last:pb-0">
                                <h4 className={`${T.font.family} font-medium text-[18px] text-[#191919] mb-1`}>
                                    {item.name}
                                </h4>
                                <span className={`${T.font.family} leading-[20px] text-[14px] text-[#191919BF]`}>
                                    {item.focus}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#223F7F] leading-[24px] font-regular text-[15px] hover:text-[#1E3A8A] transition-colors mt-auto pt-4">
                        View All International Partners
                          <span><img src={IconArrowRight} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" alt="" /></span>
                    </button>
                </div>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                    Explore All Collaborations & MoUs
                    <span><img src={IconArrowRight} className="w-[21px] h-[21px] invert brightness-0" alt="" /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchCollaborations;
