import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

const stats = [
    {
        value: "25+",
        label: "National Institutions",
        icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7742 22.5293H26.2839" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.7742 15.0195H26.2839" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.2839 39.4263V33.794C26.2839 32.7981 25.8883 31.843 25.1842 31.1388C24.48 30.4347 23.5249 30.0391 22.5291 30.0391C21.5332 30.0391 20.5781 30.4347 19.874 31.1388C19.1698 31.843 18.7742 32.7981 18.7742 33.794V39.4263" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.2644 18.7749H7.50953C6.51367 18.7749 5.5586 19.1705 4.85442 19.8747C4.15024 20.5789 3.75464 21.5339 3.75464 22.5298V35.6719C3.75464 36.6678 4.15024 37.6228 4.85442 38.327C5.5586 39.0312 6.51367 39.4268 7.50953 39.4268H37.5486C38.5445 39.4268 39.4996 39.0312 40.2037 38.327C40.9079 37.6228 41.3035 36.6678 41.3035 35.6719V16.8975C41.3035 15.9016 40.9079 14.9465 40.2037 14.2424C39.4996 13.5382 38.5445 13.1426 37.5486 13.1426H33.7938" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.2644 39.4268V9.3877C11.2644 8.39184 11.66 7.43677 12.3642 6.73259C13.0684 6.02842 14.0234 5.63281 15.0193 5.63281H30.0389C31.0347 5.63281 31.9898 6.02842 32.694 6.73259C33.3981 7.43677 33.7937 8.39184 33.7937 9.3877V39.4268" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Building
    },
    {
        value: "12",
        label: "International Partners",
        icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5293 41.3048C32.8982 41.3048 41.3038 32.8991 41.3038 22.5303C41.3038 12.1615 32.8982 3.75586 22.5293 3.75586C12.1605 3.75586 3.75488 12.1615 3.75488 22.5303C3.75488 32.8991 12.1605 41.3048 22.5293 41.3048Z" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.5293 3.75586C17.7085 8.81774 15.0195 15.5401 15.0195 22.5303C15.0195 29.5205 17.7085 36.2429 22.5293 41.3048C27.3501 36.2429 30.0391 29.5205 30.0391 22.5303C30.0391 15.5401 27.3501 8.81774 22.5293 3.75586Z" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.75488 22.5293H41.3038" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Globe
    },
    {
        value: "18",
        label: "Industry Collaborations",
        icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6521 31.9165L24.407 35.6714C24.7768 36.0412 25.2159 36.3346 25.6991 36.5347C26.1823 36.7349 26.7001 36.8379 27.2232 36.8379C27.7462 36.8379 28.2641 36.7349 28.7473 36.5347C29.2305 36.3346 29.6695 36.0412 30.0393 35.6714C30.4091 35.3016 30.7025 34.8625 30.9027 34.3793C31.1028 33.8961 31.2058 33.3782 31.2058 32.8552C31.2058 32.3322 31.1028 31.8143 30.9027 31.3311C30.7025 30.8479 30.4091 30.4089 30.0393 30.0391" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.2842 26.2856L30.9778 30.9793C31.7247 31.7262 32.7377 32.1458 33.794 32.1458C34.8502 32.1458 35.8632 31.7262 36.6101 30.9793C37.357 30.2324 37.7766 29.2194 37.7766 28.1631C37.7766 27.1068 37.357 26.0938 36.6101 25.3469L29.3257 18.0624C28.2696 17.0077 26.838 16.4152 25.3455 16.4152C23.8529 16.4152 22.4214 17.0077 21.3653 18.0624L19.7131 19.7146C18.9662 20.4615 17.9532 20.8811 16.897 20.8811C15.8407 20.8811 14.8277 20.4615 14.0808 19.7146C13.3339 18.9677 12.9143 17.9547 12.9143 16.8984C12.9143 15.8422 13.3339 14.8292 14.0808 14.0823L19.3564 8.80664C21.0691 7.09844 23.3026 6.01028 25.7034 5.71444C28.1042 5.41859 30.535 5.93195 32.6112 7.17326L33.4936 7.69895C34.293 8.18143 35.2434 8.34876 36.1596 8.16831L39.4263 7.5112" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M39.4265 5.63281L41.304 26.2847H37.5491" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.63233 5.63281L3.75488 26.2847L15.9583 38.4881C16.7052 39.235 17.7182 39.6546 18.7744 39.6546C19.8307 39.6546 20.8437 39.235 21.5906 38.4881C22.3375 37.7412 22.7571 36.7282 22.7571 35.6719C22.7571 34.6157 22.3375 33.6027 21.5906 32.8558" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.63232 7.50977H20.6519" stroke="#008C8C" stroke-width="3.75489" stroke-linecap="round" stroke-linejoin="round" />
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
        <PageSection bgColor="#D8DFEF" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Collaborations & MoUs
            </h2>

            {/* 1. Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-center text-center shadow-sm">
                        <div className="w-[48px] h-[48px] mb-4 flex items-center justify-center">
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
                <div className="bg-white rounded-[12px] p-[24px] md:p-[40px] shadow-sm flex flex-col">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        National Collaborations
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                        {nationalCollabs.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
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
                        <span><IconArrowRight
                            size={16}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.25}
                        /></span>
                    </button>
                </div>

                {/* International */}
                <div className="bg-white rounded-[12px] p-[24px] md:p-[40px] shadow-sm flex flex-col">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        International Collaborations
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                        {internationalCollabs.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
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
                        <span><IconArrowRight
                            size={16}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.25}
                        /></span>
                    </button>
                </div>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                    Explore All Collaborations & MoUs
                    <span><IconArrowRight
                        size={21}
                        stroke="white"
                        strokeWidth={1.7}
                    /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchCollaborations;
