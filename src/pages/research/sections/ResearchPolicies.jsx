import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const policies = [
    {
        title: "Research Policy",
        desc: "Comprehensive framework governing all research activities including proposal submission, approval, and completion.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="white" />
            </svg>
        ) // File/Doc
    },
    {
        title: "Plagiarism Policy",
        desc: "Zero-tolerance policy on academic dishonesty with clear guidelines on originality and proper citation.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="white" />
            </svg>
        ) // Shield with Exclamation
    },
    {
        title: "Authorship & Publication Policy",
        desc: "Clear guidelines on authorship criteria, author sequence, and institutional affiliation requirements.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H11V9H18V20Z" fill="white" />
            </svg>
        ) // Book/Open
    },
    {
        title: "Authorship & Publication Policy", // Keeping duplicate title as per specific user instruction for "pixel to pixel" from image
        desc: "Clear guidelines on authorship criteria, author sequence, and institutional affiliation requirements.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="white" />
            </svg>
        ) // People Group
    },
    {
        title: "Data Management & Sharing Policy",
        desc: "Protocols for research data collection, storage, security, retention, and sharing compliance.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="white" />
                <path d="M12 3C16.97 3 21 5.39 21 8.35C21 9.85 19.64 11.21 17.43 12.16C16.89 11.42 16.21 10.77 15.41 10.23C16.42 9.69 17 9.07 17 8.35C17 6.42 14.76 4.85 12 4.85C9.24 4.85 7 6.42 7 8.35C7 9.07 7.58 9.69 8.59 10.23C7.79 10.77 7.11 11.42 6.57 12.16C4.36 11.21 3 9.85 3 8.35C3 5.39 7.03 3 12 3Z" fill="white" />
            </svg>
        ) // Database/Storage-ish icon
    }
];

const ResearchPolicies = () => {
    return (
        <PageSection bgColor="#DEE4F2" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Research Policies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-12">
                {policies.map((item, index) => (
                    <div key={index} className="bg-white p-[30px] rounded-[12px] flex flex-col items-start gap-4">

                        {/* Icon */}
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center text-white">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <h3 className={`${T.font.family} font-bold text-[20px] text-[#1E3A8A] mb-3`}>
                                {item.title}
                            </h3>
                            <p className={`${T.font.family} text-[15px] text-gray-600 leading-relaxed`}>
                                {item.desc}
                            </p>
                        </div>

                        {/* Link */}
                        <button className="flex items-center gap-2 text-[#008C8C] font-medium text-[14px] hover:underline mt-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor" />
                            </svg>
                            Download PDF
                        </button>

                    </div>
                ))}
            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[16px] flex items-center gap-2 transition-colors">
                    View All Policies & Guidelines
                    <span>→</span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchPolicies;
