import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconMoney = "/AsramWebsite-FE/assets/icons/IconMoney.svg";
const IconTrendUp = "/AsramWebsite-FE/assets/icons/IconTrendUp.svg";
const IconDocGrants = "/AsramWebsite-FE/assets/icons/IconDocGrants.svg";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";

const stats = [
    {
        value: "₹11 Cr+",
        label: "Total Extramural Funding",
        icon: <img src={IconMoney} className="w-[50px] h-[50px]" alt="" />
    },
    {
        value: "26",
        label: "Active Funded Projects",
        icon: <img src={IconTrendUp} className="w-[50px] h-[50px]" alt="" /> // Trend up
    },
    {
        value: "₹2.5 Cr",
        label: "Internal Research Fund",
        icon: <img src={IconDocGrants} className="w-[50px] h-[50px]" alt="" /> // Document
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
                    <div style={{ border: "1px solid #07070733" }} key={index} className="bg-[#EEF2F7] rounded-[10.42px] p-[24px] md:p-[40px] flex flex-col items-center text-center">
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
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[40px]">
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
                        <span><IconArrowRightWhite size={19} /></span>
                    </button>
                </div>

                {/* Internal Funding Schemes */}
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[40px]">
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
                        <span><img src={IconArrowRight} className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] invert brightness-0" alt="" /></span>
                    </button>
                </div>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                    View Funding Guidelines & Application Process
                    <span><img src={IconArrowRight} className="w-[21px] h-[21px] invert brightness-0" alt="" /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchGrantsAndFunds;
