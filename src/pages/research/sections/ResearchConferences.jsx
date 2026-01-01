import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconCalendarConferences = "/AsramWebsite-FE/assets/icons/IconCalendarConferences.svg";
const IconAward = "/AsramWebsite-FE/assets/icons/IconAward.svg";

const ResearchConferences = ({
    iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
    buttonConfig = { bg: "#008C8C" },
    accentColor = "#008C8C",
}) => {
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
                        <div
                            className={`${iconConfig.sizeClass || "w-[50px] h-[50px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center shrink-0`}
                            style={{ backgroundColor: iconConfig.bg }}
                        >
                            <img src={IconCalendarConferences} className={iconConfig.iconSizeClass || "w-[25px] h-[25px]"} alt="" style={{ filter: iconConfig.iconFilter }} />

                        </div>
                        <div>
                            <h3 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] leading-tight mb-2`}>
                                National Workshop on Research Methodology
                            </h3>
                            <span
                                style={{ backgroundColor: `${accentColor}1A`, color: accentColor }}
                                className=" rounded-[30px] text-[14px] px-3 py-1 rounded-full font-medium inline-block"
                            >
                                Workshop
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto w-full flex justify-between items-end">
                        <div>
                            <p className="text-[14px] font-regular leading-[20px] text-[#ABABAB] mb-1">Date</p>
                            <p className="text-[18px] text-[#191919] font-regular">December 15-16, 2024</p>
                        </div>
                        <button
                            className="hover:opacity-90 text-white px-5 py-2 rounded-[6px] font-medium text-[18px] transition-colors"
                            style={{ backgroundColor: buttonConfig.bg }}
                        >
                            Register Now
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[10.42px] p-[24px] md:p-[30px] flex flex-col items-start min-h-[240px] relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div
                            className={`${iconConfig.sizeClass || "w-[50px] h-[50px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center shrink-0`}
                            style={{ backgroundColor: iconConfig.bg }}
                        >
                            <img src={IconCalendarConferences} className={iconConfig.iconSizeClass || "w-[25px] h-[25px]"} alt="" style={{ filter: iconConfig.iconFilter }} />

                        </div>
                        <div>
                            <h3 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] leading-tight mb-2`}>
                                CME on Clinical Trials: From Protocol to Publication
                            </h3>
                            <span
                                style={{ backgroundColor: `${accentColor}1A`, color: accentColor }}
                                className=" rounded-[30px] text-[14px] px-3 py-1 rounded-full font-medium inline-block"
                            >
                                CME
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto w-full flex justify-between items-end">
                        <div>
                            <p className="text-[14px] font-regular leading-[20px] text-[#ABABAB] mb-1">Date</p>
                            <p className="text-[18px] text-[#191919] font-regular">January 8, 2025</p>
                        </div>
                        <button
                            className="hover:opacity-90 text-white px-5 py-2 rounded-[6px] font-medium text-[18px] transition-colors"
                            style={{ backgroundColor: buttonConfig.bg }}
                        >
                            Register Now
                        </button>
                    </div>
                </div>

            </div>

            {/* Row 2: Annual Research Week Banner */}
            <div className="bg-[#EEF2F7] rounded-[10.42px] p-[24px] md:p-[30px] flex flex-col md:flex-row items-start gap-6 mb-12">
                <div
                    className={`${iconConfig.sizeClass || "w-[64px] h-[64px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center shrink-0`}
                    style={{ backgroundColor: iconConfig.bg }}
                >
                    <img src={IconAward} className={iconConfig.iconSizeClass || "w-[32px] h-[32px]"} alt="" style={{ filter: iconConfig.iconFilter }} />


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


                <button
                    className="hover:opacity-90 text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: buttonConfig.bg }}
                >
                    View All Events & Past Highlights
                    <span><IconArrowRightWhite size={19} /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchConferences;
