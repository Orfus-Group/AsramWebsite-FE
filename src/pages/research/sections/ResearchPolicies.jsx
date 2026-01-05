import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconDoc = "/AsramWebsite-FE/assets/icons/IconDoc.svg";
const IconShieldExclamation = "/AsramWebsite-FE/assets/icons/IconShieldExclamation.svg";
const IconBookOpenWhite = "/AsramWebsite-FE/assets/icons/IconBookOpenWhite.svg";
const IconPeopleGroup = "/AsramWebsite-FE/assets/icons/IconPeopleGroup.svg";
const IconDatabase = "/AsramWebsite-FE/assets/icons/IconDatabase.svg";
const IconDownloadBlue = "/AsramWebsite-FE/assets/icons/IconDownloadBlue.svg";

const policies = [
    {
        title: "Research Policy",
        desc: "Comprehensive framework governing all research activities including proposal submission, approval, and completion.",
        icon: <img src={IconDoc} className="w-[24px] h-[24px]" alt="" /> // File/Doc
    },
    {
        title: "Plagiarism Policy",
        desc: "Zero-tolerance policy on academic dishonesty with clear guidelines on originality and proper citation.",
        icon: <img src={IconShieldExclamation} className="w-[24px] h-[24px]" alt="" /> // Shield with Exclamation
    },
    {
        title: "Authorship & Publication Policy",
        desc: "Clear guidelines on authorship criteria, author sequence, and institutional affiliation requirements.",
        icon: <img src={IconBookOpenWhite} className="w-[24px] h-[24px]" alt="" /> // Book/Open
    },
    {
        title: "Authorship & Publication Policy", // Keeping duplicate title as per specific user instruction for "pixel to pixel" from image
        desc: "Clear guidelines on authorship criteria, author sequence, and institutional affiliation requirements.",
        icon: <img src={IconPeopleGroup} className="w-[24px] h-[24px]" alt="" /> // People Group
    },
    {
        title: "Data Management & Sharing Policy",
        desc: "Protocols for research data collection, storage, security, retention, and sharing compliance.",
        icon: <img src={IconDatabase} className="w-[24px] h-[24px]" alt="" /> // Database/Storage-ish icon
    }
];

const medicalPolicies = [
    policies[0],
    policies[1],
    policies[2],
    {
        title: "Human Subject Research Policy",
        desc: "Guidelines ensuring ethical conduct of medical research involving human participants and clinical studies.",
        icon: <img src={IconPeopleGroup} className="w-[24px] h-[24px]" alt="" />
    },
    policies[4]
];

const ResearchPolicies = ({
    iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
    buttonConfig = { bg: "#008C8C" },
    linkColor = "#008C8C",
    variant = "default", // 'default' | 'medical'
    gridGap
}) => {
    const displayPolicies = variant === "medical" ? medicalPolicies : policies;
    const isMedical = variant === "medical";

    return (
        <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[42px] text-[#1E3A8A] mb-10`}>
                Research Policies
            </h2>

            <div className={`grid ${gridGap || "gap-5"} mb-12 ${isMedical ? "grid-cols-1 md:grid-cols-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                {displayPolicies.map((item, index) => {
                    // Span Logic for Medical Variant
                    // First 3 items: col-span-2 (in a 6-col grid) -> 3 items per row
                    // Last 2 items: col-span-3 (in a 6-col grid) -> 2 items per row
                    let spanClass = "";
                    if (isMedical) {
                        if (index < 3) spanClass = "md:col-span-2";
                        else spanClass = "md:col-span-3";
                    }

                    return (
                        <div key={index} style={{ border: "1px solid #07070733" }} className={`bg-white p-[24px] md:p-[30px] rounded-[10px] flex flex-col items-start gap-4 ${spanClass}`}>

                            {/* Icon */}
                            <div
                                className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center text-white`}
                                style={{ backgroundColor: iconConfig.bg }}
                            >
                                {React.cloneElement(item.icon, {
                                    style: { filter: iconConfig.iconFilter },
                                    className: iconConfig.iconSizeClass || item.icon.props.className
                                })}
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className={`${T.font.family} font-medium text-[20px] text-[#1E3A8A] mb-3`}>
                                    {item.title}
                                </h3>
                                <p className={`${T.font.family} font-regular text-[18px] text-gray-600 leading-[26px]`}>
                                    {item.desc}
                                </p>
                            </div>

                            {/* Link */}
                            <button
                                className="flex items-center gap-2 font-medium text-[16px] hover:underline mt-2"
                                style={{ color: "#223F7F" }}
                            >
                                <img src={IconDownloadBlue} className="w-[16px] h-[16px]" alt="" style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(37%) saturate(3439%) hue-rotate(210deg) brightness(95%) contrast(93%)" }} />
                                Download PDF
                            </button>

                        </div>
                    );
                })}
            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button
                    className="hover:opacity-90 text-white px-8 py-3 rounded-[6px] font-medium text-[16px] flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: "#223F7F" }}
                >
                    View All Policies & Guidelines
                    <span><img src={IconArrowRight} className="w-[20px] h-[20px] invert brightness-0" alt="" /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchPolicies;
