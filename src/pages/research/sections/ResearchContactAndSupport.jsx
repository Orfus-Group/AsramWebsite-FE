import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconPhoneWhite = "/AsramWebsite-FE/assets/icons/IconPhoneWhite.svg";
const IconEmailWhite = "/AsramWebsite-FE/assets/icons/IconEmailWhite.svg";
const IconLocationWhite = "/AsramWebsite-FE/assets/icons/IconLocationWhite.svg";
const IconClockWhite = "/AsramWebsite-FE/assets/icons/IconClockWhite.svg";
const IconHelpdesk = "/AsramWebsite-FE/assets/icons/IconHelpdesk.svg";
const IconFeedback = "/AsramWebsite-FE/assets/icons/IconFeedback.svg";

const contactInfo = [
    {
        label: "Phone",
        value: "+91 44 2345 6789",
        icon: <img src={IconPhoneWhite} className="w-[23px] h-[23px]" alt="" />
    },
    {
        label: "Email",
        value: "research@asram.in",
        icon: <img src={IconEmailWhite} className="w-[23px] h-[23px]" alt="" />
    },
    {
        label: "Location",
        value: "Research Wing, 2nd Floor",
        icon: <img src={IconLocationWhite} className="w-[23px] h-[23px]" alt="" />
    },
    {
        label: "Office Hours",
        value: "Mon-Fri: 9 AM - 5 PM",
        icon: <img src={IconClockWhite} className="w-[23px] h-[23px]" alt="" />
    }
];

const ResearchContactAndSupport = ({
    iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
    buttonConfig = { bg: "#008C8C" },
}) => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Contact & Support
            </h2>

            {/* 1. Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                {contactInfo.map((item, index) => (
                    <div key={index} style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[9.3px] p-[24px] md:p-[30px] flex flex-col items-center text-center">
                        <div
                            className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-4`}
                            style={{ backgroundColor: iconConfig.bg }}
                        >
                            <img src={item.icon.props.src} className={iconConfig.iconSizeClass || "w-[23px] h-[23px]"} alt="" style={{ filter: iconConfig.iconFilter }} />
                        </div>
                        <p className={`${T.font.family} font-medium text-[22px] text-[#223F7F] mb-1`}>
                            {item.label}
                        </p>
                        <p className={`${T.font.family} font-regular text-[15px] text-[#191919] font-regular leading-[24px]`}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                {/* Helpdesk */}
                <div className="bg-[#EEF2F7] rounded-[9.3px] p-[24px] md:p-[40px] flex flex-col items-start">
                    <div
                        className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-5 text-white`}
                        style={{ backgroundColor: iconConfig.bg }}
                    >
                        <img src={IconHelpdesk} className={iconConfig.iconSizeClass || "w-[23px] h-[23px]"} alt="" style={{ filter: iconConfig.iconFilter }} />
                    </div>

                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
                        Research Helpdesk
                    </h3>

                    <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px] mb-6`}>
                        Get answers to your research queries on proposal submission, funding opportunities, ethics approval, and technical support.
                    </p>

                    <button className={`${T.font.family} text-[15px] font-regular leading-[24px] text-[#223F7F] hover:text-[#1E3A8A] transition-colors flex items-center gap-2 mt-auto`}>
                        Submit Your Query
                        <span><img src={IconArrowRight} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" alt="" /></span>
                    </button>
                </div>

                {/* Share Feedback */}
                <div className="bg-[#EEF2F7] rounded-[9.3px] p-[24px] md:p-[40px] flex flex-col items-start">
                    <div
                        className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-5 text-white`}
                        style={{ backgroundColor: iconConfig.bg }}
                    >
                        <img src={IconFeedback} className={iconConfig.iconSizeClass || "w-[23px] h-[23px]"} alt="" style={{ filter: iconConfig.iconFilter }} />
                    </div>

                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
                        Share Feedback
                    </h3>

                    <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px] mb-6`}>
                        Your feedback helps us improve our research support services. Share your suggestions and experiences with our facilities and processes.
                    </p>

                    <button className={`${T.font.family} text-[15px] font-regular leading-[24px] text-[#223F7F] hover:text-[#1E3A8A] transition-colors flex items-center gap-2 mt-auto`}>
                        Submit Feedback
                        <span><img src={IconArrowRight} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" alt="" /></span>
                    </button>
                </div>

            </div>

            {/* 3. Footer Banner */}
            {/* 3. Footer Banner */}
            <div className="bg-[#EEF2F7] rounded-[9.3px] p-[30px] flex flex-col items-center justify-center gap-[30px] text-center">
                <div className="flex flex-col items-center justify-center gap-[20px]">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F]`}>
                        R&D Cell Contact Information
                    </h3>
                    <p className={`${T.font.family} text-[18px] font-regular text-[rgba(25,25,25,0.75)] leading-[1.44]`}>
                        Connect with our dedicated research team for comprehensive support across all aspects of your research activities, from planning to publication.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-[20px]">
                    <button
                        className="hover:opacity-90 text-white px-6 py-3 rounded-[9.4px] font-medium text-[18px] transition-colors"
                        style={{ backgroundColor: buttonConfig.bg }}
                    >
                        Meet Our Team
                    </button>
                    <button
                        className="hover:opacity-90 text-white px-6 py-3 rounded-[9.4px] font-medium text-[18px] transition-colors"
                        style={{ backgroundColor: buttonConfig.bg }}
                    >
                        Schedule Consultation
                    </button>
                </div>
            </div>

        </PageSection>
    );
};

export default ResearchContactAndSupport;
