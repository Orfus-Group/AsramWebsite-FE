import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import Featuredimg from "@/assets/news/featuredimg.svg";

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
                            {/* Calendar Icon Placeholder */}
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_27_1337)">
<path d="M5.00684 1.25195V3.75521" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25163" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0131 1.25195V3.75521" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25163" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8907 2.50195H3.12925C2.438 2.50195 1.87762 3.06233 1.87762 3.75358V12.515C1.87762 13.2062 2.438 13.7666 3.12925 13.7666H11.8907C12.5819 13.7666 13.1423 13.2062 13.1423 12.515V3.75358C13.1423 3.06233 12.5819 2.50195 11.8907 2.50195Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25163" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.87762 6.25781H13.1423" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25163" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_27_1337">
<rect width="15.0196" height="15.0196" fill="white"/>
</clipPath>
</defs>
</svg>

                                <span className="text-[#191919BF] text-[14px] font-regular">December 1, 2024</span>
                            </div>
                            <span className="w-[4px] h-[4px] rounded-full bg-[#555555]"></span>
                             <span className="text-[#191919BF] text-[14px] font-regular">5 min read</span>
                        </div>

                        {/* Button */}
                        <button className="bg-[#223F7F] hover:bg-[#1a3163] text-white px-8 py-3 rounded-[8px] font-regular text-[18px] transition-colors flex items-center leading-[26px] gap-2">
                            Read Full Story
                           <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91124 9.38672H14.863" stroke="white" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.38727 3.91016L14.8631 9.38604L9.38727 14.8619" stroke="white" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </button>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default FeaturedStory;
