import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import CareImg from "@/assets/healthcare/careatAsram.png";

const CareAtAsram = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px] px-[20px] lg:px-[120px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-center">
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-6`}>
                        Care at ASRAM
                    </h2>
                    <p className={`${T.font.family} text-[16px] md:text-[18px] text-[#191919BF] leading-[26px] mb-6`}>
                        ASRAM operates as a comprehensive multispecialty hospital and teaching institution, providing quality medical care across multiple disciplines while training the next generation of healthcare professionals.
                    </p>
                    <p className={`${T.font.family} text-[16px] md:text-[18px] text-[#191919BF] leading-[26px] mb-6`}>
                        We serve patients with dignity, transparency, and medical expertise, maintaining the highest standards of patient safety, infection control, and compassionate care across all departments and specialties.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <div className="rounded-[16px] overflow-hidden">
                        <img
                            src={CareImg}
                            alt="Doctor with Patient"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default CareAtAsram;
