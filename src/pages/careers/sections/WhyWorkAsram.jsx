import React from "react";
import { T } from "@/theme";

import InfoCardGrid from "@/components/common/InfoCardGrid";

const benefits = [
    {
        title: "Academic Excellence",
        description: "Work with top-tier faculty and contribute to cutting-edge research in a prestigious academic environment recognized nationally and internationally.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4198 10.9224C21.5988 10.8434 21.7507 10.7136 21.8567 10.5492C21.9627 10.3847 22.0181 10.1927 22.0161 9.99709C22.0141 9.80144 21.9547 9.61068 21.8454 9.44844C21.736 9.2862 21.5814 9.15961 21.4008 9.08436L12.8298 5.18036C12.5692 5.06151 12.2862 5 11.9998 5C11.7134 5 11.4304 5.06151 11.1698 5.18036L2.5998 9.08036C2.42177 9.15833 2.27031 9.28649 2.16396 9.44917C2.05761 9.61185 2.00098 9.802 2.00098 9.99636C2.00098 10.1907 2.05761 10.3809 2.16396 10.5435C2.27031 10.7062 2.42177 10.8344 2.5998 10.9124L11.1698 14.8204C11.4304 14.9392 11.7134 15.0007 11.9998 15.0007C12.2862 15.0007 12.5692 14.9392 12.8298 14.8204L21.4198 10.9224Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 9.99219V15.9922" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.00098 12.5V16C6.00098 16.7956 6.63312 17.5587 7.75834 18.1213C8.88355 18.6839 10.4097 19 12.001 19C13.5923 19 15.1184 18.6839 16.2436 18.1213C17.3688 17.5587 18.001 16.7956 18.001 16V12.5" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
    },
    {
        title: "Competitive Compensation",
        description: "Industry-leading salary packages with annual increments, performance bonuses, and comprehensive benefits",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.00781V22.0078" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.001 5H9.50098C8.57272 5 7.68248 5.36875 7.0261 6.02513C6.36973 6.6815 6.00098 7.57174 6.00098 8.5C6.00098 9.42826 6.36973 10.3185 7.0261 10.9749C7.68248 11.6313 8.57272 12 9.50098 12H14.501C15.4292 12 16.3195 12.3688 16.9759 13.0251C17.6322 13.6815 18.001 14.5717 18.001 15.5C18.001 16.4283 17.6322 17.3185 16.9759 17.9749C16.3195 18.6313 15.4292 19 14.501 19H6.00098" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
    },
    {
        title: "Work-Life Balance",
        description: "Flexible schedules, generous leave policies, and family-friendly workplace culture that values your personal time and well-being.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.00781V6.00781" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 2.00781V6.00781" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 9.99219H21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
    },
    {
        title: "Professional Development",
        description: "Access to conferences, workshops, research funding, and opportunities for higher education to continuously enhance your skills and expertise.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00098 22.0078C5.47054 22.0078 4.96184 21.7971 4.58676 21.422C4.21169 21.047 4.00098 20.5382 4.00098 20.0078V4.00782C4.00098 3.47738 4.21169 2.96867 4.58676 2.5936C4.96184 2.21853 5.47054 2.00782 6.00098 2.00782H14.001C14.3175 2.0073 14.6311 2.06942 14.9235 2.19058C15.216 2.31175 15.4815 2.48958 15.705 2.71382L19.293 6.30182C19.5178 6.52532 19.6962 6.79116 19.8177 7.08398C19.9392 7.37679 20.0015 7.69079 20.001 8.00782V20.0078C20.001 20.5382 19.7903 21.047 19.4152 21.422C19.0401 21.7971 18.5314 22.0078 18.001 22.0078H6.00098Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 2.00781V7.00781C14 7.27303 14.1054 7.52738 14.2929 7.71492C14.4804 7.90246 14.7348 8.00781 15 8.00781H20" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 9.00781H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 13H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 17.0078H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
    },
    {
        title: "State-of-the-Art Facilities",
        description: "Modern teaching hospitals, well-equipped laboratories, digital classrooms, and advanced medical simulation centers for optimal teaching and research.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.001 12H14.001" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.001 8.00781H14.001" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.001 21V18C14.001 17.4696 13.7903 16.9609 13.4152 16.5858C13.0401 16.2107 12.5314 16 12.001 16C11.4705 16 10.9618 16.2107 10.5868 16.5858C10.2117 16.9609 10.001 17.4696 10.001 18V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H18" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.00098 21.0078V5.00781C6.00098 4.47738 6.21169 3.96867 6.58676 3.5936C6.96184 3.21853 7.47054 3.00781 8.00098 3.00781H16.001C16.5314 3.00781 17.0401 3.21853 17.4152 3.5936C17.7903 3.96867 18.001 4.47738 18.001 5.00781V21.0078" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
    },
    {
        title: "Career Growth",
        description: "Clear career progression paths with regular promotions, leadership opportunities, and recognition programs for outstanding contributions.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8006 10.0034C22.2573 12.2447 21.9318 14.5748 20.8785 16.6052C19.8251 18.6356 18.1075 20.2435 16.0121 21.1607C13.9167 22.078 11.5702 22.2492 9.36391 21.6458C7.15758 21.0424 5.2248 19.7008 3.88789 17.8448C2.55097 15.9889 1.89073 13.7306 2.01728 11.4468C2.14382 9.16294 3.04949 6.9915 4.58326 5.29458C6.11703 3.59766 8.18619 2.47784 10.4457 2.12186C12.7052 1.76588 15.0184 2.19527 16.9996 3.33841" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 11L12 14L22 4" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
    },
];

const careersectionone = "/AsramWebsite-FE/assets/careers/careerssectionone.png";
const careersectiontwo = "/AsramWebsite-FE/assets/careers/careerssectiontwo.png";

const WhyWorkAsram = () => {
    return (
        <section className="py-[80px] bg-[#eef2f7] w-full">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className={`${T.font.family} text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[40px]`}>
                    Why Work at ASRAM
                </h2>

                <InfoCardGrid
                    items={benefits}
                    gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]"
                    cardClassName="bg-white rounded-[7.5px] p-[30px] border-[0.9px] border-[#e0e0e0] flex flex-col items-start gap-[12px] group box-border relative z-10"
                    iconContainerClassName="w-[48px] h-[48px] bg-[#EBF1FF] rounded-[8px] flex items-center justify-center text-[#223F7F] flex-shrink-0"
                    titleClassName={`${T.font.family} text-[#223F7F] font-bold text-[20px] leading-[1.2] font-montserrat m-0`}
                    descriptionClassName={`${T.font.family} text-[#666666] text-[15px] leading-[1.6] font-montserrat m-0`}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[40px]">
                    <div className="w-full h-[322px] overflow-hidden rounded-[7.5px]">
                        <img
                            src={careersectionone}
                            alt="Medical Tools"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-full h-[322px] overflow-hidden rounded-[7.5px]">
                        <img
                            src={careersectiontwo}
                            alt="Surgical Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkAsram;
