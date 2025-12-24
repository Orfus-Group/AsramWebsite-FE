import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import AmbulanceImg from "@/assets/about/globalpartnership.png"; // Placeholder, normally should be ambulance image

const EmergencyCriticalCare = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <div className="relative rounded-[20px] overflow-hidden bg-[#223F7F] text-white flex flex-col md:flex-row min-h-[300px]">
                {/* Content */}
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center z-10 relative">
                    <span className="bg-[#EF4444] text-white text-[12px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                        24/7 Emergency
                    </span>
                    <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] mb-4`}>
                        Emergency & Critical Care
                    </h2>
                    <p className={`${T.font.family} text-[16px] md:text-[18px] opacity-90 leading-relaxed mb-6`}>
                        State-of-the-art trauma center equipped to handle all medical emergencies, accidents, and critical cases with rapid response teams.
                    </p>

                    <div className="space-y-2">
                        <p className="font-semibold flex items-center gap-2">
                            <span>📞</span> <span className="text-[20px]">Ambulance: 108</span>
                        </p>
                        <p className="font-semibold flex items-center gap-2">
                            <span>🏥</span> <span className="text-[20px]">ER Direct: +91 8812 254848</span>
                        </p>
                    </div>
                </div>

                {/* Image Background for Right Side */}
                <div className="md:w-1/2 relative min-h-[200px] md:min-h-full">
                    <img
                        src={AmbulanceImg}
                        alt="Ambulance"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#223F7F] to-transparent md:via-[#223F7F]/50"></div>
                </div>
            </div>
        </PageSection>
    );
};

export default EmergencyCriticalCare;
