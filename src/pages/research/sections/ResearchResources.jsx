import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

const resources = [
    {
        title: "Central Research Laboratory",
        desc: "State-of-the-art facility with PCR, flow cytometry, ELISA readers, and cell culture capabilities.",
        icon: (
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.57104 19.7129H15.3325" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.2854 24.0918H22.9986" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.3322 24.0942C17.3654 24.0942 19.3154 23.2865 20.7531 21.8488C22.1908 20.4111 22.9985 18.4612 22.9985 16.428C22.9985 14.3947 22.1908 12.4448 20.7531 11.0071C19.3154 9.56941 17.3654 8.76172 15.3322 8.76172H14.2371" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.85645 15.332H12.0468" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.85637 13.1414C9.27545 13.1414 8.71833 12.9106 8.30755 12.4998C7.89678 12.0891 7.66602 11.5319 7.66602 10.951V6.57031H14.2371V10.951C14.2371 11.5319 14.0063 12.0891 13.5955 12.4998C13.1848 12.9106 12.6276 13.1414 12.0467 13.1414H9.85637Z" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.1422 6.57016V3.28463C13.1422 2.99417 13.0268 2.71561 12.8214 2.51022C12.616 2.30484 12.3375 2.18945 12.047 2.18945H9.85665C9.56619 2.18945 9.28763 2.30484 9.08224 2.51022C8.87686 2.71561 8.76147 2.99417 8.76147 3.28463V6.57016" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Microscope
    },
    {
        title: "Biostatistics Support",
        desc: "Expert consultation for study design, sample size calculation, and statistical analysis.",
        icon: (
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.28564 3.28516V20.808C3.28564 21.3889 3.51641 21.946 3.92718 22.3568C4.33795 22.7676 4.89508 22.9983 5.476 22.9983H22.9988" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.7131 18.6169V9.85547" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.2371 18.6187V5.47656" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.76147 18.6176V15.332" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Chart
    },
    {
        title: "Software & Tools",
        desc: "Access to SPSS, R, Turnitin, Rayyan, NVivo, GraphPad Prism, and reference management tools.",
        icon: (
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7133 5.47656C20.2942 5.47656 20.8513 5.70733 21.2621 6.1181C21.6729 6.52887 21.9036 7.086 21.9036 7.66691V17.0044C21.9035 17.3455 21.983 17.6818 22.1358 17.9868L23.3054 20.3162C23.3899 20.4837 23.4299 20.6702 23.4215 20.8576C23.4132 21.045 23.3569 21.2272 23.2579 21.3866C23.159 21.546 23.0208 21.6773 22.8565 21.768C22.6922 21.8586 22.5074 21.9055 22.3198 21.9042H3.96464C3.77703 21.9055 3.59222 21.8586 3.42794 21.768C3.26367 21.6773 3.12543 21.546 3.02649 21.3866C2.92754 21.2272 2.87121 21.045 2.86289 20.8576C2.85458 20.6702 2.89455 20.4837 2.97898 20.3162L4.14863 17.9868C4.30145 17.6818 4.38096 17.3455 4.38081 17.0044V7.66691C4.38081 7.086 4.61158 6.52887 5.02235 6.1181C5.43312 5.70733 5.99024 5.47656 6.57116 5.47656H19.7133Z" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.9626 17.5098H4.32153" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Laptop
    }
];

const ResearchResources = () => {
    return (
        <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Research Resources
            </h2>

            {/* 1. Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
                {resources.map((item, index) => (
                    <div style={{ border: "1px solid #07070733" }} key={index} className="bg-white rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-start h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 shrink-0">
                            {item.icon}
                        </div>

                        <h3 className={`${T.font.family} font-medium text-[18px] text-[#191919] mb-3 leading-snug`}>
                            {item.title}
                        </h3>

                        <p className={`${T.font.family} text-[14px] text-[#191919BF] font-regular leading-[20px] mb-6 flex-grow`}>
                            {item.desc}
                        </p>

                        <button className="flex items-center gap-2 leading-[24px] text-[#008C8C] font-medium text-[15px] hover:text-[#007A7A] transition-colors mt-auto">
                            Learn More
                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.12915 7.50977H11.8906" stroke="#008C8C" stroke-width="1.25163" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.50952 3.13086L11.8902 7.51156L7.50952 11.8923" stroke="#008C8C" stroke-width="1.25163" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                        </button>
                    </div>
                ))}
            </div>

            {/* 2. Book Resources Card */}
            <div style={{ border: "1px solid #07070733" }} className="bg-white rounded-[12px] p-[24px] md:p-[40px] shadow-sm">
                <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-4`}>
                    Book Resources & Training
                </h3>

                <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] max-w-[900px] mb-8`}>
                    Access our online resource management system to book laboratory equipment, software licenses, and consultation time. Regular training programs available for all tools and facilities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[10.4px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                        Access Resource Portal
                        <span><IconArrowRight
                            size={21}
                            stroke="white"
                            strokeWidth={1.7}
                        /></span>
                    </button>

                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[10.4px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                        View Training Schedule
                        <span><IconArrowRight
                            size={21}
                            stroke="white"
                            strokeWidth={1.7}
                        /></span>
                    </button>
                </div>
            </div>

        </PageSection>
    );
};

export default ResearchResources;
