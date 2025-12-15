import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

const ResearchConferences = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[42px] text-[#223F7F] mb-10`}>
                Conferences & Events
            </h2>

            {/* Row 1: Two Workshop/CME Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-8">

                {/* Card 1 */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-start min-h-[240px] relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.3335 2.08203V6.2487" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.6667 2.08203V6.2487" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.7917 4.16797H5.20833C4.05774 4.16797 3.125 5.10071 3.125 6.2513V20.8346C3.125 21.9852 4.05774 22.918 5.20833 22.918H19.7917C20.9423 22.918 21.875 21.9852 21.875 20.8346V6.2513C21.875 5.10071 20.9423 4.16797 19.7917 4.16797Z" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.125 10.416H21.875" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <h3 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] leading-tight mb-2`}>
                                National Workshop on Research Methodology
                            </h3>
                            <span style={{ backgroundColor: "rgba(0, 140, 140, 0.1)" }} className=" rounded-[30px] text-[#008C8C] text-[14px] px-3 py-1 rounded-full font-medium inline-block">
                                Workshop
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto w-full flex justify-between items-end">
                        <div>
                            <p className="text-[14px] font-regular leading-[20px] text-[#ABABAB] mb-1">Date</p>
                            <p className="text-[18px] text-[#191919] font-regular">December 15-16, 2024</p>
                        </div>
                        <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-5 py-2 rounded-[6px] font-medium text-[18px] transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-start min-h-[240px] relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33301 2.08203V6.2487" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.6663 2.08203V6.2487" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.7912 4.16797H5.20784C4.05725 4.16797 3.12451 5.10071 3.12451 6.2513V20.8346C3.12451 21.9852 4.05725 22.918 5.20784 22.918H19.7912C20.9418 22.918 21.8745 21.9852 21.8745 20.8346V6.2513C21.8745 5.10071 20.9418 4.16797 19.7912 4.16797Z" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.12451 10.416H21.8745" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <h3 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] leading-tight mb-2`}>
                                CME on Clinical Trials: From Protocol to Publication
                            </h3>
                            <span style={{ backgroundColor: "rgba(0, 140, 140, 0.1)" }} className=" rounded-[30px] text-[#008C8C] text-[14px] px-3 py-1 rounded-full font-medium inline-block">
                                CME
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto w-full flex justify-between items-end">
                        <div>
                            <p className="text-[14px] font-regular leading-[20px] text-[#ABABAB] mb-1">Date</p>
                            <p className="text-[18px] text-[#191919] font-regular">January 8, 2025</p>
                        </div>
                        <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-5 py-2 rounded-[6px] font-medium text-[18px] transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>

            </div>

            {/* Row 2: Annual Research Week Banner */}
            <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[30px] flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4961 17.9043L23.6003 29.746C23.6239 29.8854 23.6043 30.0287 23.5442 30.1567C23.4841 30.2847 23.3864 30.3914 23.2641 30.4623C23.1418 30.5333 23.0007 30.5653 22.8598 30.5539C22.7188 30.5425 22.5847 30.4884 22.4753 30.3987L17.5031 26.6668C17.263 26.4875 16.9715 26.3906 16.6718 26.3906C16.3722 26.3906 16.0806 26.4875 15.8406 26.6668L10.86 30.3974C10.7508 30.4868 10.6168 30.5409 10.476 30.5523C10.3352 30.5637 10.1943 30.5318 10.0721 30.4611C9.94983 30.3903 9.85208 30.2839 9.79186 30.1562C9.73164 30.0284 9.71182 29.8853 9.73503 29.746L11.8378 17.9043" stroke="white" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.6668 19.4421C21.2692 19.4421 25.0002 15.7111 25.0002 11.1087C25.0002 6.50635 21.2692 2.77539 16.6668 2.77539C12.0645 2.77539 8.3335 6.50635 8.3335 11.1087C8.3335 15.7111 12.0645 19.4421 16.6668 19.4421Z" stroke="white" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

                <div className="flex flex-col">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
                        Annual Research Week 2025
                    </h3>
                    <p className={`${T.font.family} text-[18px] font-regular text-[#191919] leading-[26px] mb-4`}>
                        Our flagship event celebrating research excellence with 150+ presentations, 15 keynote speakers, 8 workshops, and 25 awards across categories.
                    </p>
                    <p className={`${T.font.family} text-[14px] text-[#191919BF] font-medium`}>
                        March 10-15, 2025   <span className="mx-2 text-[#191919BF]">|</span>   Theme: "Research for Health Equity"
                    </p>
                </div>
            </div>

            {/* Footer Button */}
            <div className="flex justify-center">


                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                    View All Events & Past Highlights
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

export default ResearchConferences;
