import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const IconMedalBlue = "/AsramWebsite-FE/assets/icons/IconMedalBlue.svg";
const IconShieldBlue = "/AsramWebsite-FE/assets/icons/IconShieldBlue.svg";
const IconStarBlue = "/AsramWebsite-FE/assets/icons/IconStarBlue.svg";
const IconCheckCircleBlue = "/AsramWebsite-FE/assets/icons/IconCheckCircleBlue.svg";
const IconTrophyBlue = "/AsramWebsite-FE/assets/icons/IconTrophyBlue.svg";

const accreditations = [
    {
        title: "MCI Approved",
        sub: "Recognized by Medical Council of India",
        icon: IconMedalBlue
    },
    {
        title: "NAAC Accredited",
        sub: "A+ Grade by National Assessment Council",
        icon: IconShieldBlue
    },
    {
        title: "ISO Certified",
        sub: "ISO 9001:2015 Quality Management",
        icon: IconStarBlue
    },
    {
        title: "NABH Accredited",
        sub: "National Accreditation Board for Hospitals",
        icon: IconCheckCircleBlue
    },
];

const awards = [
    "Best Medical College Award 2023",
    "Excellence in Healthcare Education",
    "Top 50 Medical Institutions in India",
    "Outstanding Research Contribution Award",
    "Best Hospital Infrastructure Award",
    "Patient Safety Excellence Recognition"
];

const AccreditationStandards = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            {/* Accreditation Section */}
            <div className="mb-[40px]">
                <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                    Accreditation Standards
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                    {accreditations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#EEF2F7] p-[20px] rounded-[12px] flex flex-col items-center text-center border border-[#E5E5E5] h-full sm:h-[220px] justify-center"
                        >
                            <div className="w-[63px] h-[63px] bg-white rounded-[8px] flex items-center justify-center mb-4">
                                <img src={item.icon} className="w-[32px] h-[32px]" alt="" />
                            </div>
                            <h3 className={`${T.font.family} font-medium text-[18px] text-[#191919] mb-2`}>
                                {item.title}
                            </h3>
                            <p className={`${T.font.family} text-[14px] text-[#191919BF] font-regular leading-[20px]`}>
                                {item.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards Section */}
            <div className="bg-[#EEF2F7] rounded-[16px] p-[40px] text-center border border-[#E5E5E5]">
                <h4 className={`${T.font.family} font-semibold text-[28px] md:text-[32px] text-[#223F7F] mb-2`}>
                    Awards & Achievements
                </h4>
                <p className={`${T.font.family} font-regular leading-[26px] text-[18px] text-[#4B5563] mb-[32px]`}>
                    Celebrating milestones in healthcare excellence
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {awards.map((award, index) => (
                        <div key={index} className="bg-white py-[12px] px-[20px] rounded-[8px] border border-[#E5E5E5] flex items-center justify-start gap-[12px] h-[60px] text-left">
                            <div className="flex-shrink-0 text-[#223F7F]">
                                <img src={IconTrophyBlue} className="w-[20px] h-[20px]" alt="" />
                            </div>
                            <span className={`${T.font.family} font-medium text-[#374151] text-[14px] md:text-[15px] leading-tight`}>
                                {award}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default AccreditationStandards;
