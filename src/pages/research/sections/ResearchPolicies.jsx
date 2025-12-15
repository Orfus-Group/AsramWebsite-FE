import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

const policies = [
    {
        title: "Research Policy",
        desc: "Comprehensive framework governing all research activities including proposal submission, approval, and completion.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.9998 2V7C13.9998 7.26522 14.1051 7.51957 14.2926 7.70711C14.4802 7.89464 14.7345 8 14.9998 8H19.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 9.00195H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 13H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 17.002H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // File/Doc
    },
    {
        title: "Plagiarism Policy",
        desc: "Zero-tolerance policy on academic dishonesty with clear guidelines on originality and proper citation.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 8V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 16H12.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Shield with Exclamation
    },
    {
        title: "Authorship & Publication Policy",
        desc: "Clear guidelines on authorship criteria, author sequence, and institutional affiliation requirements.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9998 7V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.99951 18C2.7343 18 2.47994 17.8946 2.2924 17.7071C2.10487 17.5196 1.99951 17.2652 1.99951 17V4C1.99951 3.73478 2.10487 3.48043 2.2924 3.29289C2.47994 3.10536 2.7343 3 2.99951 3H7.99951C9.06038 3 10.0778 3.42143 10.8279 4.17157C11.5781 4.92172 11.9995 5.93913 11.9995 7C11.9995 5.93913 12.4209 4.92172 13.1711 4.17157C13.9212 3.42143 14.9386 3 15.9995 3H20.9995C21.2647 3 21.5191 3.10536 21.7066 3.29289C21.8942 3.48043 21.9995 3.73478 21.9995 4V17C21.9995 17.2652 21.8942 17.5196 21.7066 17.7071C21.5191 17.8946 21.2647 18 20.9995 18H14.9995C14.2039 18 13.4408 18.3161 12.8782 18.8787C12.3156 19.4413 11.9995 20.2044 11.9995 21C11.9995 20.2044 11.6834 19.4413 11.1208 18.8787C10.5582 18.3161 9.79516 18 8.99951 18H2.99951Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Book/Open
    },
    {
        title: "Authorship & Publication Policy", // Keeping duplicate title as per specific user instruction for "pixel to pixel" from image
        desc: "Clear guidelines on authorship criteria, author sequence, and institutional affiliation requirements.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0002 21V19C16.0002 17.9391 15.5788 16.9217 14.8287 16.1716C14.0785 15.4214 13.0611 15 12.0002 15H6.00024C4.93938 15 3.92196 15.4214 3.17182 16.1716C2.42167 16.9217 2.00024 17.9391 2.00024 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.0002 3.12891C16.858 3.35128 17.6176 3.85217 18.1599 4.55297C18.7022 5.25377 18.9964 6.1148 18.9964 7.00091C18.9964 7.88702 18.7022 8.74805 18.1599 9.44884C17.6176 10.1496 16.858 10.6505 16.0002 10.8729" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.0002 21.0009V19.0009C21.9996 18.1146 21.7046 17.2536 21.1616 16.5532C20.6186 15.8527 19.8584 15.3524 19.0002 15.1309" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.00024 11C11.2094 11 13.0002 9.20914 13.0002 7C13.0002 4.79086 11.2094 3 9.00024 3C6.79111 3 5.00024 4.79086 5.00024 7C5.00024 9.20914 6.79111 11 9.00024 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // People Group
    },
    {
        title: "Data Management & Sharing Policy",
        desc: "Protocols for research data collection, storage, security, retention, and sharing compliance.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9998 8C16.9703 8 20.9998 6.65685 20.9998 5C20.9998 3.34315 16.9703 2 11.9998 2C7.02919 2 2.99976 3.34315 2.99976 5C2.99976 6.65685 7.02919 8 11.9998 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.99976 5V19C2.99976 19.7956 3.94797 20.5587 5.63579 21.1213C7.32362 21.6839 9.61281 22 11.9998 22C14.3867 22 16.6759 21.6839 18.3637 21.1213C20.0515 20.5587 20.9998 19.7956 20.9998 19V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.99976 12C2.99976 12.7956 3.94797 13.5587 5.63579 14.1213C7.32362 14.6839 9.61281 15 11.9998 15C14.3867 15 16.6759 14.6839 18.3637 14.1213C20.0515 13.5587 20.9998 12.7956 20.9998 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Database/Storage-ish icon
    }
];

const ResearchPolicies = () => {
    return (
        <PageSection bgColor="#DEE4F2" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[42px] text-[#1E3A8A] mb-10`}>
                Research Policies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] mb-12">
                {policies.map((item, index) => (
                    <div key={index} className="bg-white p-[24px] md:p-[30px] rounded-[12px] flex flex-col items-start gap-4">

                        {/* Icon */}
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center text-white">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <h3 className={`${T.font.family} font-medium text-[20px] text-[#1E3A8A] mb-3`}>
                                {item.title}
                            </h3>
                            <p className={`${T.font.family} font-regular text-[18px] text-gray-600 leading-[26px]`}>
                                {item.desc}
                            </p>
                        </div>

                        {/* Link */}
                        <button className="flex items-center gap-2 text-[#008C8C] font-medium text-[16px] hover:underline mt-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99976 10V2" stroke="#008C8C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9998 10V12.6667C13.9998 13.0203 13.8593 13.3594 13.6092 13.6095C13.3592 13.8595 13.02 14 12.6664 14H3.33309C2.97947 14 2.64033 13.8595 2.39028 13.6095C2.14023 13.3594 1.99976 13.0203 1.99976 12.6667V10" stroke="#008C8C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.66626 6.66602L7.99959 9.99935L11.3329 6.66602" stroke="#008C8C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
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
                    <span><IconArrowRight
                        size={20}
                        stroke="white"
                        strokeWidth={1.6}
                    /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchPolicies;
