import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

const stats = [
    {
        value: "₹11 Cr+",
        label: "Total Extramural Funding",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.6665 12.502H8.33317C6.03198 12.502 4.1665 14.3674 4.1665 16.6686V33.3353C4.1665 35.6365 6.03198 37.502 8.33317 37.502H41.6665C43.9677 37.502 45.8332 35.6365 45.8332 33.3353V16.6686C45.8332 14.3674 43.9677 12.502 41.6665 12.502Z" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.9997 29.1693C27.3009 29.1693 29.1663 27.3038 29.1663 25.0026C29.1663 22.7014 27.3009 20.8359 24.9997 20.8359C22.6985 20.8359 20.833 22.7014 20.833 25.0026C20.833 27.3038 22.6985 29.1693 24.9997 29.1693Z" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.4998 25H12.5206M37.4998 25H37.5206" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        value: "26",
        label: "Active Funded Projects",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3333 14.584H45.8333V27.084" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M45.8334 14.584L28.1251 32.2923L17.7084 21.8757L4.16675 35.4173" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Trend up
    },
    {
        value: "₹2.5 Cr",
        label: "Internal Research Fund",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4999 45.8346C11.3948 45.8346 10.335 45.3957 9.55364 44.6143C8.77224 43.8329 8.33325 42.773 8.33325 41.668V8.33464C8.33325 7.22957 8.77224 6.16977 9.55364 5.38836C10.335 4.60696 11.3948 4.16798 12.4999 4.16798H29.1666C29.8261 4.16691 30.4793 4.29631 31.0885 4.54874C31.6978 4.80117 32.2511 5.17164 32.7166 5.63881L40.1916 13.1138C40.66 13.5794 41.0315 14.1333 41.2847 14.7433C41.5379 15.3533 41.6677 16.0075 41.6666 16.668V41.668C41.6666 42.773 41.2276 43.8329 40.4462 44.6143C39.6648 45.3957 38.605 45.8346 37.4999 45.8346H12.4999Z" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.1667 4.16797V14.5846C29.1667 15.1372 29.3862 15.6671 29.7769 16.0578C30.1676 16.4485 30.6975 16.668 31.2501 16.668H41.6667" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.8334 18.752H16.6667" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.3334 27.0859H16.6667" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.3334 35.418H16.6667" stroke="#191919" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Document
    }
];

const extramuralFunding = [
    { agency: "ICMR", projects: "8 Active Projects", amount: "₹2.4 Cr" },
    { agency: "DBT", projects: "5 Active Projects", amount: "₹1.8 Cr" },
    { agency: "DST", projects: "6 Active Projects", amount: "₹2.1 Cr" },
    { agency: "WHO", projects: "3 Active Projects", amount: "₹1.2 Cr" },
];

const internalSchemes = [
    { title: "Seed Grant for New Faculty", grant: "Up to ₹5 lakhs" },
    { title: "Student Research Grant", grant: "Up to ₹50,000" },
    { title: "Intramural Research Fund", grant: "Up to ₹10 lakhs" },
    { title: "Conference Travel Grant", grant: "Up to ₹1 lakh" },
];

const ResearchGrantsAndFunds = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[42px] text-[#223F7F] mb-10`}>
                Grants & Funding
            </h2>

            {/* 1. Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-12">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px] flex flex-col items-center text-center">
                        <div className="w-[40px] h-[40px] mb-4 text-[#333] flex items-center justify-center">
                            {/* Rendering icon directly with specific styling if needed */}
                            {stat.icon}
                        </div>
                        <AnimatedStatValue
                            value={stat.value}
                            className={`${T.font.family} font-bold text-[32px] text-[#223F7F] mb-2`}
                        />
                        <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF]`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Detailed Lists Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">

                {/* Extramural Funding */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px]">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        Extramural Funding
                    </h3>

                    <div className="flex flex-col gap-6 mb-8">
                        {extramuralFunding.map((item, index) => (
                            <div key={index} className="flex justify-between items-start border-b border-[#e5e7eb] pb-4 last:border-0 last:pb-0 border-opacity-50">
                                <div>
                                    <h4 className={`${T.font.family} font-medium text-[18px] text-[#191919]`}>
                                        {item.agency}
                                    </h4>
                                    <p className={`${T.font.family} font-medium text-[14px] text-[#191919BF]`}>
                                        {item.projects}
                                    </p>
                                </div>
                                <span className={`${T.font.family} font-medium text-[20px] text-[#008C8C]`}>
                                    {item.amount}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#223F7F] font-regular text-[16.67px] hover:text-[#1E3A8A] transition-colors">
                        View All Funding Sources
                        <span><IconArrowRight
                            size={17}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.3}
                        /></span>
                    </button>
                </div>

                {/* Internal Funding Schemes */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px]">
                    <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-8`}>
                        Internal Funding Schemes
                    </h3>

                    <div className="flex flex-col gap-6 mb-8">
                        {internalSchemes.map((item, index) => (
                            <div key={index} className="border-b border-[#cbd5e1] pb-4 last:border-0 last:pb-0 border-opacity-50">
                                <h4 className={`${T.font.family} font-medium text-[16px] text-[#333] mb-1`}>
                                    {item.title}
                                </h4>
                                <span className={`${T.font.family} text-[14px] text-[#008C8C] font-medium`}>
                                    {item.grant}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#223F7F] font-regular text-[16.67px] hover:text-[#1E3A8A] transition-colors">
                        Apply for Internal Funding
                        <span><IconArrowRight
                            size={17}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.3}
                        /></span>
                    </button>
                </div>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                    View Funding Guidelines & Application Process
                    <span> <IconArrowRight
                        size={21}
                        stroke="white"
                        strokeWidth={1.7}
                    /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchGrantsAndFunds;
