import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import Featuredimg from "@/assets/news/featuredimg.svg";
import { IconCalendar, IconArrowRight } from "@/assets/icons";

const FeaturedStory = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]" sectionClassName="border-b border-[rgba(7,7,7,0.2)]">
            {/* Section Heading */}
            <h2 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-6 md:mb-10`}>
                Featured Story
            </h2>

            {/* Card Container */}
            <div className="bg-[#D8DFEF] rounded-[8px] border-[0.9px] border-[rgba(7,7,7,0.2)] overflow-hidden flex flex-col lg:flex-row shadow-sm min-h-[400px]">

                {/* Image Side - Left */}
                <div className="w-full lg:w-[40%] relative bg-gray-200">
                    <img
                        src={Featuredimg}
                        alt="Featured"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Side - Right */}
                <div className="flex-1 w-full lg:w-[60%] p-[30px] md:p-[60px] flex flex-col justify-center">

                    {/* Tags */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-[#008C8C] text-white text-[14px] leading-[20px] font-regular px-4 py-1.5 rounded-[31498264px]">
                            Achievement
                        </span>
                        <span className="bg-[#223F7F1A] text-[#223F7F] text-[14px] leading-[20px] font-regular px-4 py-1.5 rounded-[31498264px]">
                            All Colleges
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className={`${T.font.family} font-semibold text-[22px] md:text-[32px] text-[#223F7F] mb-4 leading-tight`}>
                        ASRAM Achieves NAAC A+ Accreditation for Academic Excellence
                    </h3>

                    {/* Description */}
                    <p className={`${T.font.family} text-[18px] text-[#191919BF] mb-8 leading-[26px] font-regular `}>
                        The National Assessment and Accreditation Council (NAAC) has awarded ASRAM the prestigious A+ grade, recognizing our commitment to quality education, research excellence, and recognizing our commitment to quality education, research excellence comprehensive healthcare services.
                    </p>

                    {/* Divider LINE */}
                    <div className="w-full h-[1px] bg-[#19191933] mb-6"></div>

                    {/* Footer Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                        {/* Date & Read Time */}
                        <div className="flex items-center gap-4 text-[16px] text-[#555555] font-regular">
                            {/* Calendar Icon */}
                            <div className="flex items-center gap-2">
                                <IconCalendar size={16} />
                                <span className="text-[#191919BF] text-[14px] font-regular">December 1, 2024</span>
                            </div>
                            <span className="w-[4px] h-[4px] rounded-full bg-[#555555]"></span>
                            <span className="text-[#191919BF] text-[14px] font-regular">5 min read</span>
                        </div>

                        {/* Button */}
                        <button className="bg-[#223F7F] hover:bg-[#1a3163] text-white px-8 py-3 rounded-[8px] font-regular text-[18px] transition-colors flex items-center leading-[26px] gap-2">
                            Read Full Story
                            <IconArrowRight size={19} color="white" />
                        </button>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default FeaturedStory;
