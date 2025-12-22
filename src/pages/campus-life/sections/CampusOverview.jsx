import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import PlaceholderImg from "@/assets/campuslife/campuslifeatAsram.png";

const CampusOverview = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-[40px]">
                {/* Left: Content */}
                <div className="flex-1 max-w-[620px]">
                    <h3 className={`${T.font.family} font-bold text-[28px] md:text-[32px] text-[#223F7F] mb-6`}>
                        Campus Life at ASRAM
                    </h3>
                    <p className={`${T.font.family} text-[16px] md:text-[18px] text-[#191919BF] leading-[26px] mb-6 font-regular`}>
                        Campus life at ASRAM is structured around academic discipline, clinical exposure, and student wellbeing. The environment encourages focused learning, hands-on practice, and responsible campus living—preparing students for real-world healthcare careers.
                    </p>
                    <p className={`${T.font.family} text-[16px] md:text-[18px] text-[#191919BF] leading-[26px] font-regular`}>
                        Every aspect of campus life—from structured class schedules to supervised practical training—is designed to prepare students for the demanding healthcare profession. We maintain strict standards while providing comprehensive support for academic and personal growth.
                    </p>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-[580px] h-[300px] lg:h-[355px] rounded-[12px] p-[10px] flex-shrink-0">
                    <img
                        src={PlaceholderImg}
                        alt="Campus Life Overview"
                        className="w-full h-full object-cover rounded-[12px]"
                    />
                </div>
            </div>
        </PageSection>
    );
};

export default CampusOverview;
