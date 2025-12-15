import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const programs = [
    {
        title: "ICMR-STS Program",
        desc: "Short-term studentship for MBBS students with ₹10,000 stipend and ICMR certificate.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="white" />
            </svg>
        ) // Badge
    },
    {
        title: "UG Dissertation Research",
        desc: "Mandatory research projects for final year students with faculty mentorship.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H11V9H18V20Z" fill="white" />
            </svg>
        ) // Book/Open
    },
    {
        title: "PG Thesis Support",
        desc: "Comprehensive support for MD/MS/MSc thesis with funding up to ₹50,000.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="white" />
            </svg>
        ) // Graduation Cap
    },
    {
        title: "Research Mentorship Program",
        desc: "One-on-one pairing with experienced faculty for research guidance.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="white" />
            </svg>
        ) // People/Mentorship
    }
];

const ResearchStudentResearch = () => {
    return (
        <PageSection bgColor="#DEE4F2" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Student Research
            </h2>

            {/* Row 1: Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-10">
                {programs.map((item, index) => (
                    <div key={index} className="bg-white rounded-[12px] p-[30px] flex flex-col items-start h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 shrink-0">
                            {item.icon}
                        </div>

                        <h3 className={`${T.font.family} font-bold text-[18px] text-[#1E3A8A] mb-3 leading-snug`}>
                            {item.title}
                        </h3>

                        <p className={`${T.font.family} text-[14px] text-gray-600 leading-relaxed`}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Row 2: Student Research Forum Banner */}
            <div className="bg-white rounded-[12px] p-[40px] shadow-sm mb-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
                    <div className="max-w-[700px]">
                        <h3 className={`${T.font.family} font-bold text-[24px] text-[#1E3A8A] mb-3`}>
                            ASRAM Student Research Forum
                        </h3>
                        <p className={`${T.font.family} text-[16px] text-gray-600 leading-relaxed`}>
                            Join 250+ active members in our vibrant research community. Participate in monthly journal clubs, quarterly workshops, and annual symposiums.
                        </p>
                    </div>

                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-semibold text-[16px] transition-colors shrink-0">
                        Join Forum
                    </button>
                </div>

                {/* Stats in Banner */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className={`${T.font.family} font-bold text-[24px] text-[#333] mb-1`}>250+</h4>
                        <p className="text-[14px] text-gray-600">Active Members</p>
                    </div>
                    <div>
                        <h4 className={`${T.font.family} font-bold text-[24px] text-[#333] mb-1`}>12+</h4>
                        <p className="text-[14px] text-gray-600">Annual Workshops</p>
                    </div>
                    <div>
                        <h4 className={`${T.font.family} font-bold text-[24px] text-[#333] mb-1`}>Monthly</h4>
                        <p className="text-[14px] text-gray-600">Journal Clubs</p>
                    </div>
                </div>
            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-semibold text-[16px] flex items-center gap-2 transition-colors">
                    Explore Student Research Opportunities
                    <span>→</span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchStudentResearch;
