import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const Featuredimg = "/AsramWebsite-FE/assets/news/featuredimg.svg";
const IconCalendar = "/AsramWebsite-FE/assets/icons/IconCalendar.svg";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
// Note: Using brightness filter for white arrows if needed, or separate SVG

const FeaturedStory = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]" sectionClassName="border-b border-[rgba(7,7,7,0.2)]">
            {/* Section Heading */}
            <h2 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-6 md:mb-10`}>
                Featured Story
            </h2>

            {/* Card Container */}
            <div className="flex flex-col lg:flex-row shadow-sm rounded-[8px] overflow-hidden border border-[rgba(7,7,7,0.2)]">

                {/* Image Side - Left */}
                <div className="w-full lg:flex-1 relative bg-gray-200 min-h-[300px] lg:min-h-full">
                    <img
                        src={Featuredimg}
                        alt="Featured"
                        className="w-full h-full object-cover absolute inset-0"
                    />
                </div>

                {/* Content Side - Right */}
                <div className="w-full lg:w-[730.6px] bg-[#EEF2F7] p-[24px] sm:p-[30px] flex flex-col justify-between lg:border-l border-[rgba(7,7,7,0.2)] lg:min-h-[377.9px]">
                    <div className="flex-1 flex flex-col justify-start">
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="bg-[#223F7F1A] text-[#223F7F] text-[12px] sm:text-[14px] leading-[20px] font-regular px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                                Achievement
                            </span>
                            <span className="bg-[#223F7F1A] text-[#223F7F] text-[12px] sm:text-[14px] leading-[20px] font-regular px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                                All Colleges
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className={`${T.font.family} font-semibold text-[20px] sm:text-[28px] lg:text-[32px] text-[#223F7F] mb-3 sm:mb-4 leading-tight`}>
                            ASRAM Achieves NAAC A+ Accreditation for Academic Excellence
                        </h3>

                        {/* Description */}
                        <p className={`${T.font.family} text-[15px] sm:text-[18px] text-[#191919BF] mb-6 sm:mb-0 leading-[22px] sm:leading-[26px] font-regular line-clamp-4 lg:line-clamp-3`}>
                            The National Assessment and Accreditation Council (NAAC) has awarded ASRAM the prestigious A+ grade, recognizing our commitment to quality education, research excellence, and comprehensive healthcare services.
                        </p>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-5 border-t-[0.9px] border-[rgba(7,7,7,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                        {/* Date & Read Time */}
                        <div className="flex items-center gap-3 sm:gap-4 text-[13px] sm:text-[16px] text-[#555555] font-regular">
                            {/* Calendar Icon */}
                            <div className="flex items-center gap-2">
                                <img src={IconCalendar} className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" alt="" />
                                <span className="text-[#191919BF] text-[13px] sm:text-[14px] font-regular">Dec 1, 2024</span>
                            </div>
                            <span className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] rounded-full bg-[#555555]"></span>
                            <span className="text-[#191919BF] text-[13px] sm:text-[14px] font-regular">5 min read</span>
                        </div>

                        {/* Button */}
                        <button className="w-full sm:w-fit bg-[#223F7F] hover:bg-[#1a3163] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[8px] font-regular text-[15px] sm:text-[18px] transition-colors flex items-center justify-center leading-[26px] gap-2">
                            Read Full Story
                            <img src={IconArrowRight} className="w-[18px] h-[18px] invert brightness-0" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default FeaturedStory;
