import React from "react";
import ContentImageSection from "@/components/common/ContentImageSection";
import PageSection from "@/features/common/layout/PageContainer";
const ConferenceImg = "/AsramWebsite-FE/assets/departments/conferences.png";

const ConferencesSection = () => {
    return (
        <>
            <ContentImageSection
                title="Conferences & Workshops"
                description="The department regularly organizes Continuing Medical Education (CME) programs, surgical workshops, and academic seminars to keep faculty and students updated on advances in surgical practice and medical science."
                description2="These activities include journal clubs, mortality and morbidity conferences, grand rounds, guest lectures by visiting surgeons, and hands-on training workshops for surgical skills. Students and residents actively participate in case presentations and scientific discussions."
                image={ConferenceImg}
                showButton={false}
                reverse={false}
                gapClass="gap-[40px] lg:gap-[77px]"
                bg="bg-white"
                paddingClass="py-[40px] md:pt-[80px] md:pb-[40px]"
                imageClassName="!border-none !shadow-none !bg-transparent rounded-[12px]"
            />

            <PageSection bg="bg-white" paddingClass="pt-0 pb-[40px] md:pb-[80px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[56px]">
                    <div className="bg-[#EEF2F7] rounded-[12px] p-[20px] border-l-[4px] border-[#223F7F] flex flex-col gap-[8px]">
                        <h3 className="text-[#223F7F] font-normal text-[28px] font-montserrat leading-tight">Weekly</h3>
                        <p className="text-[#191919BF] text-[14px] leading-[1.43] font-montserrat">Grand Rounds</p>
                    </div>
                    <div className="bg-[#EEF2F7] rounded-[12px] p-[20px] border-l-[4px] border-[#223F7F] flex flex-col gap-[8px]">
                        <h3 className="text-[#223F7F] font-normal text-[28px] font-montserrat leading-tight">Monthly</h3>
                        <p className="text-[#191919BF] text-[14px] leading-[1.43] font-montserrat">Journal Clubs</p>
                    </div>
                    <div className="bg-[#EEF2F7] rounded-[12px] p-[20px] border-l-[4px] border-[#223F7F] flex flex-col gap-[8px]">
                        <h3 className="text-[#223F7F] font-normal text-[28px] font-montserrat leading-tight">Quarterly</h3>
                        <p className="text-[#191919BF] text-[14px] leading-[1.43] font-montserrat">CME Programs</p>
                    </div>
                </div>
            </PageSection>
        </>
    );
};

export default ConferencesSection;
