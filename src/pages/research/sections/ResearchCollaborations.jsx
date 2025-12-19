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
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.334 16H18.6673" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.334 10.668H18.6673" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6673 27.9987V23.9987C18.6673 23.2915 18.3864 22.6132 17.8863 22.1131C17.3862 21.613 16.7079 21.332 16.0007 21.332C15.2934 21.332 14.6151 21.613 14.115 22.1131C13.6149 22.6132 13.334 23.2915 13.334 23.9987V27.9987" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99935 13.332H5.33268C4.62544 13.332 3.94716 13.613 3.44706 14.1131C2.94697 14.6132 2.66602 15.2915 2.66602 15.9987V25.332C2.66602 26.0393 2.94697 26.7176 3.44706 27.2176C3.94716 27.7177 4.62544 27.9987 5.33268 27.9987H26.666C27.3733 27.9987 28.0515 27.7177 28.5516 27.2176C29.0517 26.7176 29.3327 26.0393 29.3327 25.332V11.9987C29.3327 11.2915 29.0517 10.6132 28.5516 10.1131C28.0515 9.61298 27.3733 9.33203 26.666 9.33203H23.9993" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 28V6.66667C8 5.95942 8.28095 5.28115 8.78105 4.78105C9.28115 4.28095 9.95942 4 10.6667 4H21.3333C22.0406 4 22.7189 4.28095 23.219 4.78105C23.719 5.28115 24 5.95942 24 6.66667V28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        ) // Building
    },
    {
        value: "12",
        label: "International Partners",
        icon: (
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9993 29.3346C23.3631 29.3346 29.3327 23.3651 29.3327 16.0013C29.3327 8.63751 23.3631 2.66797 15.9993 2.66797C8.63555 2.66797 2.66602 8.63751 2.66602 16.0013C2.66602 23.3651 8.63555 29.3346 15.9993 29.3346Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9993 2.66797C12.5757 6.26284 10.666 11.037 10.666 16.0013C10.666 20.9656 12.5757 25.7398 15.9993 29.3346C19.423 25.7398 21.3327 20.9656 21.3327 16.0013C21.3327 11.037 19.423 6.26284 15.9993 2.66797Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.66602 16H29.3327" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        ) // Globe
    },
    {
        value: "18",
        label: "Industry Collaborations",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.666 22.6654L17.3327 25.332C17.5953 25.5947 17.9071 25.803 18.2503 25.9452C18.5935 26.0873 18.9612 26.1605 19.3327 26.1605C19.7041 26.1605 20.0719 26.0873 20.4151 25.9452C20.7582 25.803 21.07 25.5947 21.3327 25.332C21.5953 25.0694 21.8037 24.7576 21.9458 24.4144C22.088 24.0713 22.1611 23.7035 22.1611 23.332C22.1611 22.9606 22.088 22.5928 21.9458 22.2496C21.8037 21.9065 21.5953 21.5947 21.3327 21.332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.667 18.6673L22.0003 22.0007C22.5307 22.5311 23.2502 22.8291 24.0003 22.8291C24.7504 22.8291 25.4699 22.5311 26.0003 22.0007C26.5307 21.4702 26.8287 20.7508 26.8287 20.0007C26.8287 19.2505 26.5307 18.5311 26.0003 18.0007L20.827 12.8273C20.077 12.0783 19.0603 11.6575 18.0003 11.6575C16.9403 11.6575 15.9236 12.0783 15.1736 12.8273L14.0003 14.0007C13.4699 14.5311 12.7504 14.8291 12.0003 14.8291C11.2502 14.8291 10.5307 14.5311 10.0003 14.0007C9.46987 13.4702 9.17188 12.7508 9.17188 12.0007C9.17188 11.2505 9.46987 10.5311 10.0003 10.0007L13.747 6.254C14.9633 5.04086 16.5495 4.26807 18.2545 4.05797C19.9595 3.84786 21.6859 4.21245 23.1603 5.094L23.787 5.46734C24.3547 5.80999 25.0297 5.92883 25.6803 5.80067L28.0003 5.334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.9993 4L29.3327 18.6667H26.666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99935 4L2.66602 18.6667L11.3327 27.3333C11.8631 27.8638 12.5825 28.1618 13.3327 28.1618C14.0828 28.1618 14.8022 27.8638 15.3327 27.3333C15.8631 26.8029 16.1611 26.0835 16.1611 25.3333C16.1611 24.5832 15.8631 23.8638 15.3327 23.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 5.33203H14.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Collaborations & MoUs
            </h2>

            {/* 1. Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
                {stats.map((stat, index) => (
                    <div  style={{ border: "1px solid #07070733" }} key={index} className="bg-white rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-center text-center shadow-sm">
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
                            <div key={index}  style={{ borderBottom: "1px solid #E5E7EB" }} className="flex justify-between items-center pb-4 last:border-0 last:pb-0">
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
                <div style={{ border: "1px solid #07070733" }} className="bg-white rounded-[10px] p-[24px] md:p-[40px] shadow-sm flex flex-col">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        International Collaborations
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                        {internationalCollabs.map((item, index) => (
                            <div  style={{ borderBottom: "1px solid #E5E7EB" }} key={index} className=" pb-4 last:border-0 last:pb-0">
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
