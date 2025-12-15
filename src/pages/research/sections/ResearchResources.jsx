import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const resources = [
    {
        title: "Central Research Laboratory",
        desc: "State-of-the-art facility with PCR, flow cytometry, ELISA readers, and cell culture capabilities.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.75 8C13.75 8.97 12.97 9.75 12 9.75C11.03 9.75 10.25 8.97 10.25 8C10.25 7.03 11.03 6.25 12 6.25C12.97 6.25 13.75 7.03 13.75 8ZM21 9V8C21 6.9 20.1 6 19 6H15.09C15.48 4.79 16.29 3.75 17.34 3.01C16.82 2.39 16.03 2 15.15 2C13.9 2 12.8 2.65 12.18 3.65C12.12 3.64 12.06 3.64 12 3.64C11.94 3.64 11.88 3.64 11.82 3.65C11.2 2.65 10.1 2 8.85 2C7.97 2 7.18 2.39 6.66 3.01C7.71 3.75 8.52 4.79 8.91 6H5C3.9 6 3 6.9 3 8V9H6.5C6.41 9.48 5.76 11.66 5.24 13.27C4.66 15.04 6.01 16.51 7.6 15.98C8.5 15.68 9.27 15.42 10.27 15.42H13.73C14.73 15.42 15.5 15.68 16.4 15.98C17.99 16.51 19.34 15.04 18.76 13.27C18.24 11.66 17.59 9.48 17.5 9H21ZM13 19.13C12.68 19.05 12.35 19 12 19C11.65 19 11.32 19.05 11 19.13V22H13V19.13ZM9 20.83V22H7C7 19.5 8.7 17.29 11 16.64V18.66C10.11 18.99 9.38 19.8 9 20.83ZM15 22H17C17 19.5 15.3 17.29 13 16.64V18.66C13.89 18.99 14.62 19.8 15 20.83V22Z" fill="white" />
            </svg>
        ) // Microscope
    },
    {
        title: "Biostatistics Support",
        desc: "Expert consultation for study design, sample size calculation, and statistical analysis.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="white" />
                <path d="M5 21H19V19H5V21ZM5 17H7V15H5V17ZM9 17H11V10H9V17ZM13 17H15V8H13V17ZM17 17H19V13H17V17Z" fill="white" /> {/* Creating a chart like icon */}
            </svg>
        ) // Chart
    },
    {
        title: "Software & Tools",
        desc: "Access to SPSS, R, Turnitin, Rayyan, NVivo, GraphPad Prism, and reference management tools.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 18C21.1 18 22 17.1 22 16V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill="white" />
            </svg>
        ) // Laptop
    }
];

const ResearchResources = () => {
    return (
        <PageSection bgColor="#DEE4F2" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Research Resources
            </h2>

            {/* 1. Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
                {resources.map((item, index) => (
                    <div key={index} className="bg-white rounded-[12px] p-[30px] flex flex-col items-start h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 shrink-0">
                            {item.icon}
                        </div>

                        <h3 className={`${T.font.family} font-bold text-[18px] text-[#222] mb-3 leading-snug`}>
                            {item.title}
                        </h3>

                        <p className={`${T.font.family} text-[14px] text-gray-600 leading-relaxed mb-6 flex-grow`}>
                            {item.desc}
                        </p>

                        <button className="flex items-center gap-2 text-[#008C8C] font-medium text-[14px] hover:text-[#007A7A] transition-colors mt-auto">
                            Learn More
                            <span>→</span>
                        </button>
                    </div>
                ))}
            </div>

            {/* 2. Book Resources Card */}
            <div className="bg-white rounded-[12px] p-[40px] shadow-sm">
                <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-4`}>
                    Book Resources & Training
                </h3>

                <p className={`${T.font.family} text-[15px] text-gray-600 leading-relaxed max-w-[900px] mb-8`}>
                    Access our online resource management system to book laboratory equipment, software licenses, and consultation time. Regular training programs available for all tools and facilities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[6px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors">
                        Access Resource Portal
                        <span>→</span>
                    </button>

                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[6px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors">
                        View Training Schedule
                        <span>→</span>
                    </button>
                </div>
            </div>

        </PageSection>
    );
};

export default ResearchResources;
