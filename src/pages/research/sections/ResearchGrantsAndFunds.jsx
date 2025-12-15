import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const stats = [
    {
        value: "₹11 Cr+",
        label: "Total Extramural Funding",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 11C13.66 11 15 9.66 15 8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8C9 9.66 10.34 11 12 11ZM16 13H8V14C8 16.21 11.5 17 12 17C12.5 17 16 16.21 16 14V13Z" fill="#333" fillOpacity="0" stroke="#333" />
                {/* Note: The icon in image looks like a bill/money note. Using a generic money/bill icon path */}
                <path d="M21 7H3C1.9 7 1 7.9 1 9V17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V9C23 7.9 22.1 7 21 7ZM12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.66 10 15 11.34 15 13C15 14.66 13.66 16 12 16ZM20 10H18V9H20V10ZM4 10H6V9H4V10Z" fill="#333" />
            </svg>
        )
    },
    {
        value: "26",
        label: "Active Funded Projects",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#1E3A8A" />
            </svg>
        ) // Trend up
    },
    {
        value: "₹2.5 Cr",
        label: "Internal Research Fund",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#333" />
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
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Grants & Funding
            </h2>

            {/* 1. Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-12">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#DEE4F2] rounded-[12px] p-[40px] flex flex-col items-center text-center">
                        <div className="w-[40px] h-[40px] mb-4 text-[#333] flex items-center justify-center">
                            {/* Rendering icon directly with specific styling if needed */}
                            {React.cloneElement(stat.icon, { fill: "#333" })}
                        </div>
                        <h3 className={`${T.font.family} font-bold text-[32px] text-[#1E3A8A] mb-2`}>
                            {stat.value}
                        </h3>
                        <p className={`${T.font.family} text-[15px] text-gray-600`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Detailed Lists Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">

                {/* Extramural Funding */}
                <div className="bg-[#DEE4F2] rounded-[12px] p-[40px]">
                    <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-8`}>
                        Extramural Funding
                    </h3>

                    <div className="flex flex-col gap-6 mb-8">
                        {extramuralFunding.map((item, index) => (
                            <div key={index} className="flex justify-between items-start border-b border-[#cbd5e1] pb-4 last:border-0 last:pb-0 border-opacity-50">
                                <div>
                                    <h4 className={`${T.font.family} font-semibold text-[16px] text-[#333]`}>
                                        {item.agency}
                                    </h4>
                                    <p className={`${T.font.family} text-[13px] text-gray-500`}>
                                        {item.projects}
                                    </p>
                                </div>
                                <span className={`${T.font.family} font-bold text-[18px] text-[#008C8C]`}>
                                    {item.amount}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#5A6B89] font-medium text-[15px] hover:text-[#1E3A8A] transition-colors">
                        View All Funding Sources
                        <span>→</span>
                    </button>
                </div>

                {/* Internal Funding Schemes */}
                <div className="bg-[#DEE4F2] rounded-[12px] p-[40px]">
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

                    <button className="flex items-center gap-2 text-[#5A6B89] font-medium text-[15px] hover:text-[#1E3A8A] transition-colors">
                        Apply for Internal Funding
                        <span>→</span>
                    </button>
                </div>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-semibold text-[16px] flex items-center gap-2 transition-colors">
                    View Funding Guidelines & Application Process
                    <span>→</span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchGrantsAndFunds;
