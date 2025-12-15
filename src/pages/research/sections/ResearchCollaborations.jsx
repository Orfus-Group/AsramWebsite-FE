import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const stats = [
    {
        value: "25+",
        label: "National Institutions",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" fill="#008C8C" />
            </svg>
        ) // Building
    },
    {
        value: "12",
        label: "International Partners",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM19.93 11H17.91C17.84 8.58 17.42 6.54 16.71 4.9C18.41 6.36 19.56 8.54 19.93 11ZM12 4.15C12.72 5.67 13.31 7.82 13.56 11H10.44C10.69 7.82 11.28 5.67 12 4.15ZM4.07 11H6.09C6.16 8.58 6.58 6.54 7.29 4.9C5.59 6.36 4.44 8.54 4.07 11ZM6.09 13H4.07C4.44 15.46 5.59 17.64 7.29 19.1C6.58 17.46 6.16 15.42 6.09 13ZM10.44 13H13.56C13.31 16.18 12.72 18.33 12 19.85C11.28 18.33 10.69 16.18 10.44 13ZM16.71 19.1C17.42 17.46 17.84 15.42 17.91 13H19.93C19.56 15.46 18.41 17.64 16.71 19.1Z" fill="#008C8C" />
            </svg>
        ) // Globe
    },
    {
        value: "18",
        label: "Industry Collaborations",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4C8.64 4 8.13 4.21 7.76 4.59C5.9 6.45 6.45 9.37 6.45 9.37C6.45 9.37 9.37 8.82 11.24 6.96C12.02 6.17 12.02 4.9 11.24 4.12C11.06 3.94 10.84 3.8 10.59 4.59ZM16.24 4.59C15.86 4.21 15.35 4 14.82 4C14.29 4 13.78 4.21 13.41 4.59C13.16 4.84 12.94 4.98 12.76 4.12C11.98 4.9 11.98 6.17 12.76 6.96C14.63 8.82 17.55 9.37 17.55 9.37C17.55 9.37 18.1 6.45 16.24 4.59ZM6 12L2 16L7 21L12.55 15.45C11.66 14.23 11 12.63 11 11C11 10.46 11.08 9.94 11.2 9.44L6 12ZM19.24 16.59L17.83 18L13.41 13.59C13.53 13.08 13.59 12.55 13.61 12H19.24V16.59Z" fill="#008C8C" />
            </svg>
        ) // Handshake
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
        <PageSection bgColor="#DEE4F2" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Collaborations & MoUs
            </h2>

            {/* 1. Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-[12px] p-[30px] flex flex-col items-center text-center shadow-sm">
                        <div className="w-[48px] h-[48px] mb-4 flex items-center justify-center">
                            {stat.icon}
                        </div>
                        <h3 className={`${T.font.family} font-bold text-[32px] text-[#1E3A8A] mb-1`}>
                            {stat.value}
                        </h3>
                        <p className={`${T.font.family} text-[15px] text-gray-500`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Detailed Lists Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">

                {/* National */}
                <div className="bg-white rounded-[12px] p-[40px] shadow-sm flex flex-col">
                    <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-8`}>
                        National Collaborations
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                        {nationalCollabs.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                <span className={`${T.font.family} font-medium text-[15px] text-[#333]`}>
                                    {item.name}
                                </span>
                                <span className={`${T.font.family} text-[14px] text-[#008C8C] font-medium`}>
                                    {item.projects}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#5A6B89] font-medium text-[14px] hover:text-[#1E3A8A] transition-colors mt-auto pt-4">
                        View All National Partners
                        <span>→</span>
                    </button>
                </div>

                {/* International */}
                <div className="bg-white rounded-[12px] p-[40px] shadow-sm flex flex-col">
                    <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-8`}>
                        International Collaborations
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                        {internationalCollabs.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                <h4 className={`${T.font.family} font-medium text-[16px] text-[#333] mb-1`}>
                                    {item.name}
                                </h4>
                                <span className={`${T.font.family} text-[13px] text-gray-500`}>
                                    {item.focus}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#5A6B89] font-medium text-[14px] hover:text-[#1E3A8A] transition-colors mt-auto pt-4">
                        View All International Partners
                        <span>→</span>
                    </button>
                </div>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-semibold text-[16px] flex items-center gap-2 transition-colors">
                    Explore All Collaborations & MoUs
                    <span>→</span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchCollaborations;
