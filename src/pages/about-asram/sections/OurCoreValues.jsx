import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const IconHeartBlue = "/AsramWebsite-FE/assets/icons/IconHeartBlue.svg";
const IconShieldCheckBlue = "/AsramWebsite-FE/assets/icons/IconShieldCheckBlue.svg";
const IconTargetBlue = "/AsramWebsite-FE/assets/icons/IconTargetBlue.svg";
const IconEyeBlue = "/AsramWebsite-FE/assets/icons/IconEyeBlue.svg";

const values = [
    {
        title: "Compassion",
        description: "Treating every patient and student with empathy and dignity.",
        icon: IconHeartBlue
    },
    {
        title: "Integrity",
        description: "Upholding the highest ethical standards in all our endeavors.",
        icon: IconShieldCheckBlue
    },
    {
        title: "Excellence",
        description: "Striving for continuous improvement in education and care.",
        icon: IconTargetBlue
    },
    {
        title: "Innovation",
        description: "Embracing new technologies and methodologies in healthcare to stay updated.",
        icon: IconEyeBlue
    }
];

const OurCoreValues = () => {
    return (
        <PageSection bg="bg-[#eef2f7]" paddingClass="py-[60px] md:py-[80px]">
            {/* Header */}
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                Our Core Values
            </h1>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mb-[40px]">
                {values.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-[20px] rounded-[12px] border border-[#e5e5e5] flex flex-col items-start gap-[12px] h-full sm:h-[225px]"
                    >
                        <div className="w-[48px] h-[48px] bg-[#223F7F]/10 rounded-[7px] flex items-center justify-center">
                            <img src={item.icon} className="w-[24px] h-[24px]" alt="" />
                        </div>
                        <h6 className={`${T.font.family} font-medium text-[22px] text-[#223F7F]`}>
                            {item.title}
                        </h6>
                        <p className={`${T.font.family} font-regular text-[14px] text-[#191919BF] leading-[20px]`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                {/* Mission */}
                <div className="bg-white p-[30px] rounded-[12px] border border-[#e5e5e5] h-full sm:h-[272px] flex flex-col justify-start gap-[12px]">
                    <div className="w-[48px] h-[48px] bg-[#223F7F]/10 rounded-[7px] flex items-center justify-center">
                        <img src={IconTargetBlue} className="w-[24px] h-[24px]" alt="" />
                    </div>
                    <h5 className={`${T.font.family} font-medium leading-[32px] text-[24px] text-[#223F7F]`}>
                        Our Mission
                    </h5>
                    <p className={`${T.font.family} text-[15px] font-regular sm:text-[18px] text-[#191919BF] leading-[26px]`}>
                        To provide world-class medical education and healthcare services that transform lives and advance the medical profession through innovation, research, and compassionate care.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-white p-[30px] rounded-[12px] border border-[#e5e5e5] h-full sm:h-[272px] flex flex-col justify-start gap-[12px]">
                    <div className="w-[48px] h-[48px] bg-[#223F7F]/10 rounded-[7px] flex items-center justify-center">
                        <img src={IconEyeBlue} className="w-[24px] h-[24px]" alt="" />
                    </div>
                    <h5 className={`${T.font.family} font-medium leading-[32px] text-[24px] text-[#223F7F]`}>
                        Our Vision
                    </h5>
                    <p className={`${T.font.family} text-[15px] font-regular sm:text-[18px] text-[#191919BF] leading-[26px]`}>
                        To be recognized as a premier healthcare institution that sets the standard for medical excellence, producing healthcare professionals who lead with integrity and compassion.
                    </p>
                </div>
            </div>
        </PageSection>
    );
};

export default OurCoreValues;
