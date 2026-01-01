import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconMicroscope = "/AsramWebsite-FE/assets/icons/IconMicroscope.svg";
const IconChartWhite = "/AsramWebsite-FE/assets/icons/IconChartWhite.svg";
const IconLaptop = "/AsramWebsite-FE/assets/icons/IconLaptop.svg";
const IconArrowRightBlue = "/AsramWebsite-FE/assets/icons/IconArrowRightBlue.svg";

const resources = [
    {
        title: "Central Research Laboratory",
        desc: "State-of-the-art facility with PCR, flow cytometry, ELISA readers, and cell culture capabilities.",
        icon: <img src={IconMicroscope} className="w-[27px] h-[27px]" alt="" />
    },
    {
        title: "Biostatistics Support",
        desc: "Expert consultation for study design, sample size calculation, and statistical analysis.",
        icon: <img src={IconChartWhite} className="w-[27px] h-[27px]" alt="" />
    },
    {
        title: "Software & Tools",
        desc: "Access to SPSS, R, Turnitin, Rayyan, NVivo, GraphPad Prism, and reference management tools.",
        icon: <img src={IconLaptop} className="w-[27px] h-[27px]" alt="" />
    }
];

const ResearchResources = ({
    iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
    buttonConfig = { bg: "#008C8C" },
    accentColor = "#008C8C",
}) => {
    return (
        <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Research Resources
            </h2>

            {/* 1. Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
                {resources.map((item, index) => (
                    <div style={{ border: "1px solid #07070733" }} key={index} className="bg-white rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-start h-full shadow-sm transition-shadow">
                        <div
                            className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-5 shrink-0`}
                            style={{ backgroundColor: iconConfig.bg }}
                        >
                            {React.cloneElement(item.icon, {
                                style: { filter: iconConfig.iconFilter },
                                className: iconConfig.iconSizeClass || item.icon.props.className
                            })}
                        </div>

                        <h3 className={`${T.font.family} font-medium text-[18px] text-[#191919] mb-3 leading-snug`}>
                            {item.title}
                        </h3>

                        <p className={`${T.font.family} text-[14px] text-[#191919BF] font-regular leading-[20px] mb-6 flex-grow`}>
                            {item.desc}
                        </p>

                        <button
                            className="flex items-center gap-2 leading-[24px] font-medium text-[15px] hover:opacity-80 transition-colors mt-auto"
                            style={{ color: accentColor }}
                        >
                            Learn More
                            <span><img src={IconArrowRightBlue} className="w-[16px] h-[16px]" alt="" style={{ filter: "inherit" }} />
                            </span>
                        </button>
                    </div>
                ))}
            </div>

            {/* 2. Book Resources Card */}
            <div style={{ border: "1px solid #07070733" }} className="bg-white rounded-[12px] p-[24px] md:p-[40px] shadow-sm">
                <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-4`}>
                    Book Resources & Training
                </h3>

                <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] max-w-[900px] mb-8`}>
                    Access our online resource management system to book laboratory equipment, software licenses, and consultation time. Regular training programs available for all tools and facilities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        className="hover:opacity-90 text-white px-6 py-3 rounded-[10.4px] font-medium text-[18px] flex items-center gap-2 transition-colors"
                        style={{ backgroundColor: buttonConfig.bg }}
                    >
                        Access Resource Portal
                        <span><img src={IconArrowRight} className="w-[21px] h-[21px] invert brightness-0" alt="" /></span>
                    </button>

                    <button
                        className="hover:opacity-90 text-white px-6 py-3 rounded-[10.4px] font-medium text-[18px] flex items-center gap-2 transition-colors"
                        style={{ backgroundColor: buttonConfig.bg }}
                    >
                        View Training Schedule
                        <span><img src={IconArrowRight} className="w-[21px] h-[21px] invert brightness-0" alt="" /></span>
                    </button>
                </div>
            </div>

        </PageSection>
    );
};

export default ResearchResources;
