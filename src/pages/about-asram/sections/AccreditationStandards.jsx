import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const Icons = {
    BadgeCheck: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    AcademicCap: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14L22 9L12 4L2 9L12 14ZM12 14V20M6 11V18" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    CheckCircle: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L11 13L15 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Trophy: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 21H16M12 17V21M17 4H7M7 4C4.79086 4 3 5.79086 3 8C3 10.2091 4.79086 12 7 12H17C19.2091 12 21 10.2091 21 8C21 5.79086 19.2091 4 17 4M7 4V12M17 4V12M12 12V17" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};

const accreditations = [
    { title: "NMC Approved", sub: "Recognized by National Medical Commission", icon: Icons.BadgeCheck },
    { title: "NAAC Accredited", sub: "A+ Grade Institution", icon: Icons.AcademicCap },
    { title: "ISO Certified", sub: "ISO 9001:2015 Standards", icon: Icons.CheckCircle },
    { title: "NABH Accredited", sub: "National Accreditation Board for Hospitals", icon: Icons.BadgeCheck },
];

const awards = [
    "Best Medical College Award 2023",
    "Excellence in Rural Health Care",
    "Top Clinical Research Institute",
    "National Research Center Award",
    "Best Student Campus Life 2022",
    "Green Campus Initiative Award 2021"
];

const AccreditationStandards = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            {/* Accreditation Section */}
            <div className="mb-16">
                <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-10`}>
                    Accreditation Standards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accreditations.map((item, index) => (
                        <div key={index} className="bg-[#F7F9FC] p-6 rounded-[12px] flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className={`${T.font.family} font-bold text-[18px] text-[#223F7F] mb-2`}>
                                {item.title}
                            </h3>
                            <p className={`${T.font.family} text-[14px] text-[#4A5565]`}>
                                {item.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards Section */}
            <div className="bg-[#EEF2F7] rounded-[20px] p-8 md:p-12 text-center">
                <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-10`}>
                    Awards & Achievements
                </h2>
                <p className={`${T.font.family} text-[16px] text-[#4A5565] mb-10 max-w-2xl mx-auto`}>
                    Celebrating our commitment to excellence and our contributions to the healthcare community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award, index) => (
                        <div key={index} className="bg-white py-4 px-6 rounded-full shadow-sm flex items-center justify-center gap-3">
                            {Icons.Trophy}
                            <span className={`${T.font.family} font-medium text-[#191919] text-[15px]`}>{award}</span>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default AccreditationStandards;
