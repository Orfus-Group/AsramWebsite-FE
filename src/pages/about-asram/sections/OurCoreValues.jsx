import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const Icons = {
    Heart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    ShieldCheck: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    AcademicCap: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    LightBulb: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    MissionIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#223F7F" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" stroke="#223F7F" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill="#223F7F" />
        </svg>
    ),
    VisionIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" stroke="#223F7F" strokeWidth="2" />
        </svg>
    )
};

const values = [
    {
        title: "Compassion",
        description: "Treating every patient and student with empathy and dignity.",
        icon: Icons.Heart
    },
    {
        title: "Integrity",
        description: "Upholding the highest ethical standards in all our endeavors.",
        icon: Icons.ShieldCheck
    },
    {
        title: "Excellence",
        description: "Striving for continuous improvement in education and care.",
        icon: Icons.AcademicCap
    },
    {
        title: "Innovation",
        description: "Embracing new technologies and methodologies in healthcare to stay updated.",
        icon: Icons.LightBulb
    }
];

const OurCoreValues = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            {/* Header */}
            <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-[40px]`}>
                Our Core Values
            </h2>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mb-[40px]">
                {values.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-[20px] rounded-[12px] border border-[#e5e5e5] flex flex-col items-start gap-[12px] h-full sm:h-[225px]"
                    >
                        <div className="w-[48px] h-[48px] bg-[#EEF2F7] rounded-[8px] flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h3 className={`${T.font.family} font-bold text-[20px] text-[#223F7F]`}>
                            {item.title}
                        </h3>
                        <p className={`${T.font.family} text-[14px] text-[#4A5565] leading-[1.5]`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                {/* Mission */}
                <div className="bg-white p-[30px] rounded-[12px] border border-[#e5e5e5] h-full sm:h-[272px] flex flex-col justify-start gap-[12px]">
                    <div className="w-[48px] h-[48px] bg-[#EEF2F7] rounded-[8px] flex items-center justify-center">
                        {Icons.MissionIcon}
                    </div>
                    <h3 className={`${T.font.family} font-bold text-[24px] text-[#223F7F]`}>
                        Our Mission
                    </h3>
                    <p className={`${T.font.family} text-[15px] sm:text-[16px] text-[#4A5565] leading-[1.6]`}>
                        To provide world-class medical education and healthcare services that transform lives and advance the medical profession through innovation, research, and compassionate care.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-white p-[30px] rounded-[12px] border border-[#e5e5e5] h-full sm:h-[272px] flex flex-col justify-start gap-[12px]">
                    <div className="w-[48px] h-[48px] bg-[#EEF2F7] rounded-[8px] flex items-center justify-center">
                        {Icons.VisionIcon}
                    </div>
                    <h3 className={`${T.font.family} font-bold text-[24px] text-[#223F7F]`}>
                        Our Vision
                    </h3>
                    <p className={`${T.font.family} text-[15px] sm:text-[16px] text-[#4A5565] leading-[1.6]`}>
                        To be recognized as a premier healthcare institution that sets the standard for medical excellence, producing healthcare professionals who lead with integrity and compassion.
                    </p>
                </div>
            </div>
        </PageSection>
    );
};

export default OurCoreValues;
