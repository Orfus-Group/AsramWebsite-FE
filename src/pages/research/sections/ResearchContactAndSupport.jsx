import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const contactInfo = [
    {
        label: "Phone",
        value: "+91 44 2345 6789",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
            </svg>
        )
    },
    {
        label: "Email",
        value: "research@asram.in",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
            </svg>
        )
    },
    {
        label: "Location",
        value: "Research Wing, 2nd Floor",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white" />
            </svg>
        )
    },
    {
        label: "Office Hours",
        value: "Mon-Fri: 9 AM - 5 PM",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="white" />
            </svg>
        )
    }
];

const ResearchContactAndSupport = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Contact & Support
            </h2>

            {/* 1. Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-12">
                {contactInfo.map((item, index) => (
                    <div key={index} className="bg-[#DEE4F2] rounded-[12px] p-[30px] flex flex-col items-center text-center">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-4">
                            {item.icon}
                        </div>
                        <p className={`${T.font.family} text-[14px] text-gray-500 mb-1`}>
                            {item.label}
                        </p>
                        <p className={`${T.font.family} text-[16px] text-[#333] font-medium`}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">

                {/* Helpdesk */}
                <div className="bg-[#DEE4F2] rounded-[12px] p-[40px] flex flex-col items-start">
                    <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="white" />
                        </svg>
                    </div>

                    <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-3`}>
                        Research Helpdesk
                    </h3>

                    <p className={`${T.font.family} text-[15px] text-gray-600 leading-relaxed mb-6`}>
                        Get answers to your research queries on proposal submission, funding opportunities, ethics approval, and technical support.
                    </p>

                    <button className={`${T.font.family} text-[14px] font-medium text-[#5A6B89] hover:text-[#1E3A8A] transition-colors flex items-center gap-2 mt-auto`}>
                        Submit Your Query
                        <span>→</span>
                    </button>
                </div>

                {/* Share Feedback */}
                <div className="bg-[#DEE4F2] rounded-[12px] p-[40px] flex flex-col items-start">
                    <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white" />
                        </svg>
                    </div>

                    <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-3`}>
                        Share Feedback
                    </h3>

                    <p className={`${T.font.family} text-[15px] text-gray-600 leading-relaxed mb-6`}>
                        Your feedback helps us improve our research support services. Share your suggestions and experiences with our facilities and processes.
                    </p>

                    <button className={`${T.font.family} text-[14px] font-medium text-[#5A6B89] hover:text-[#1E3A8A] transition-colors flex items-center gap-2 mt-auto`}>
                        Submit Feedback
                        <span>→</span>
                    </button>
                </div>

            </div>

            {/* 3. Footer Banner */}
            <div className="bg-[#DEE4F2] rounded-[12px] p-[40px] text-center">
                <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-4`}>
                    R&D Cell Contact Information
                </h3>
                <p className={`${T.font.family} text-[15px] text-gray-600 leading-relaxed mb-8 max-w-[800px] mx-auto`}>
                    Connect with our dedicated research team for comprehensive support across all aspects of your research activities, from planning to publication.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[6px] font-medium text-[15px] transition-colors">
                        Meet Our Team
                    </button>
                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[6px] font-medium text-[15px] transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </div>

        </PageSection>
    );
};

export default ResearchContactAndSupport;
