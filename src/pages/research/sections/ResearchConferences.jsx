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
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[10.42px] p-[24px] md:p-[30px] flex flex-col items-start min-h-[240px] relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-[50px] h-[50px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
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
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[10.42px] p-[24px] md:p-[30px] flex flex-col items-start min-h-[240px] relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-[50px] h-[50px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
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
            <div className="bg-[#EEF2F7] rounded-[10.42px] p-[24px] md:p-[30px] flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="w-[64px] h-[64px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6357 17.1875L22.6557 28.5555C22.6783 28.6894 22.6595 28.8269 22.6018 28.9498C22.5442 29.0727 22.4503 29.1751 22.3329 29.2432C22.2155 29.3114 22.0801 29.342 21.9447 29.3311C21.8094 29.3202 21.6807 29.2682 21.5757 29.1822L16.8023 25.5995C16.5719 25.4273 16.292 25.3343 16.0043 25.3343C15.7167 25.3343 15.4368 25.4273 15.2063 25.5995L10.425 29.1808C10.3201 29.2667 10.1915 29.3186 10.0563 29.3296C9.92117 29.3405 9.7859 29.3099 9.66855 29.242C9.55121 29.174 9.45737 29.0719 9.39956 28.9493C9.34175 28.8266 9.32272 28.6893 9.345 28.5555L11.3637 17.1875" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 18.6641C20.4183 18.6641 24 15.0823 24 10.6641C24 6.24578 20.4183 2.66406 16 2.66406C11.5817 2.66406 8 6.24578 8 10.6641C8 15.0823 11.5817 18.6641 16 18.6641Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
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
