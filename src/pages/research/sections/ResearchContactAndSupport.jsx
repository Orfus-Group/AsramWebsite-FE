import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

const contactInfo = [
    {
        label: "Phone",
        value: "+91 44 2345 6789",
        icon: (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_27_1157)">
                    <path d="M12.9844 15.5523C13.1783 15.6413 13.3967 15.6616 13.6037 15.6099C13.8107 15.5582 13.9938 15.4376 14.1231 15.2678L14.4563 14.8313C14.6312 14.5981 14.858 14.4089 15.1187 14.2786C15.3794 14.1482 15.6668 14.0803 15.9583 14.0803H18.7744C19.2724 14.0803 19.7499 14.2781 20.102 14.6302C20.4541 14.9823 20.6519 15.4599 20.6519 15.9578V18.774C20.6519 19.2719 20.4541 19.7494 20.102 20.1015C19.7499 20.4536 19.2724 20.6514 18.7744 20.6514C14.2931 20.6514 9.99526 18.8712 6.82646 15.7024C3.65766 12.5336 1.87744 8.23576 1.87744 3.7544C1.87744 3.25647 2.07524 2.77893 2.42733 2.42684C2.77942 2.07475 3.25696 1.87695 3.75489 1.87695H6.57105C7.06898 1.87695 7.54652 2.07475 7.89861 2.42684C8.2507 2.77893 8.4485 3.25647 8.4485 3.7544V6.57056C8.4485 6.86203 8.38064 7.14949 8.25029 7.41018C8.11994 7.67088 7.93069 7.89764 7.69752 8.07252L7.2582 8.40201C7.08586 8.5336 6.9644 8.72079 6.91443 8.93178C6.86446 9.14277 6.88908 9.36456 6.98409 9.55946C8.26702 12.1652 10.377 14.2726 12.9844 15.5523Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_27_1157">
                        <rect width="22.5293" height="22.5293" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        )
    },
    {
        label: "Email",
        value: "research@asram.in",
        icon: (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6519 6.57031L12.2118 11.9464C11.9254 12.1127 11.6001 12.2004 11.2689 12.2004C10.9377 12.2004 10.6124 12.1127 10.3259 11.9464L1.87744 6.57031" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.7744 3.75391H3.75489C2.718 3.75391 1.87744 4.59447 1.87744 5.63135V16.896C1.87744 17.9329 2.718 18.7735 3.75489 18.7735H18.7744C19.8113 18.7735 20.6519 17.9329 20.6519 16.896V5.63135C20.6519 4.59447 19.8113 3.75391 18.7744 3.75391Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        label: "Location",
        value: "Research Wing, 2nd Floor",
        icon: (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_27_1174)">
                    <path d="M18.7744 9.38673C18.7744 14.0738 13.5749 18.9551 11.8288 20.4627C11.6662 20.585 11.4682 20.6512 11.2647 20.6512C11.0611 20.6512 10.8631 20.585 10.7005 20.4627C8.95447 18.9551 3.75488 14.0738 3.75488 9.38673C3.75488 7.39501 4.54609 5.48487 5.95445 4.07652C7.3628 2.66816 9.27294 1.87695 11.2647 1.87695C13.2564 1.87695 15.1665 2.66816 16.5749 4.07652C17.9832 5.48487 18.7744 7.39501 18.7744 9.38673Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.2647 12.2026C12.82 12.2026 14.0808 10.9418 14.0808 9.38648C14.0808 7.83115 12.82 6.57031 11.2647 6.57031C9.70933 6.57031 8.44849 7.83115 8.44849 9.38648C8.44849 10.9418 9.70933 12.2026 11.2647 12.2026Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_27_1174">
                        <rect width="22.5293" height="22.5293" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        )
    },
    {
        label: "Office Hours",
        value: "Mon-Fri: 9 AM - 5 PM",
        icon: (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_27_1183)">
                    <path d="M11.2646 5.63281V11.2651L15.0195 13.1426" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.2647 20.6514C16.4491 20.6514 20.6519 16.4486 20.6519 11.2642C20.6519 6.07976 16.4491 1.87695 11.2647 1.87695C6.08024 1.87695 1.87744 6.07976 1.87744 11.2642C1.87744 16.4486 6.08024 20.6514 11.2647 20.6514Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_27_1183">
                        <rect width="22.5293" height="22.5293" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        )
    }
];

const ResearchContactAndSupport = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Contact & Support
            </h2>

            {/* 1. Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-12">
                {contactInfo.map((item, index) => (
                    <div key={index} className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-center text-center">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-4">
                            {item.icon}
                        </div>
                        <p className={`${T.font.family} font-semibold text-[13px] text-[#ABABAB] mb-1`}>
                            {item.label}
                        </p>
                        <p className={`${T.font.family} font-regular text-[15px] text-[#191919] font-regular leading-[24px]`}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">

                {/* Helpdesk */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px] flex flex-col items-start">
                    <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 text-white">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6519 15.9585C20.6519 16.4564 20.4541 16.934 20.102 17.2861C19.7499 17.6382 19.2724 17.836 18.7744 17.836H6.40959C5.9117 17.8361 5.43425 18.0339 5.08224 18.3861L3.01517 20.4531C2.92196 20.5463 2.80321 20.6098 2.67394 20.6355C2.54466 20.6612 2.41067 20.648 2.28889 20.5976C2.16711 20.5471 2.06303 20.4617 1.98979 20.3521C1.91656 20.2425 1.87746 20.1137 1.87744 19.9819V4.69385C1.87744 4.19592 2.07524 3.71839 2.42733 3.3663C2.77942 3.01421 3.25696 2.81641 3.75489 2.81641H18.7744C19.2724 2.81641 19.7499 3.01421 20.102 3.3663C20.4541 3.71839 20.6519 4.19592 20.6519 4.69385V15.9585Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>

                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
                        Research Helpdesk
                    </h3>

                    <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px] mb-6`}>
                        Get answers to your research queries on proposal submission, funding opportunities, ethics approval, and technical support.
                    </p>

                    <button className={`${T.font.family} text-[15px] font-regular leading-[24px] text-[#223F7F] hover:text-[#1E3A8A] transition-colors flex items-center gap-2 mt-auto`}>
                        Submit Your Query
                        <span><IconArrowRight
                            size={16}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.25}
                        /></span>
                    </button>
                </div>

                {/* Share Feedback */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px] flex flex-col items-start">
                    <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 text-white">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6448 20.357C13.6805 20.4459 13.7425 20.5218 13.8225 20.5744C13.9025 20.627 13.9967 20.6539 14.0925 20.6515C14.1882 20.649 14.2809 20.6173 14.3581 20.5607C14.4353 20.504 14.4934 20.4251 14.5244 20.3345L20.6261 2.49878C20.6562 2.4156 20.6619 2.32559 20.6426 2.23927C20.6234 2.15296 20.58 2.07391 20.5174 2.01137C20.4549 1.94884 20.3758 1.90541 20.2895 1.88616C20.2032 1.86691 20.1132 1.87265 20.03 1.90269L2.1943 8.00439C2.10371 8.03545 2.02479 8.09349 1.96814 8.1707C1.91148 8.24791 1.8798 8.34061 1.87735 8.43635C1.8749 8.53208 1.90179 8.62628 1.95442 8.70629C2.00705 8.78631 2.08289 8.8483 2.17177 8.88397L9.61584 11.8691C9.85117 11.9633 10.065 12.1042 10.2444 12.2833C10.4238 12.4624 10.5651 12.6759 10.6597 12.9111L13.6448 20.357Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.5147 2.01367L10.2451 12.2824" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>

                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
                        Share Feedback
                    </h3>

                    <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px] mb-6`}>
                        Your feedback helps us improve our research support services. Share your suggestions and experiences with our facilities and processes.
                    </p>

                    <button className={`${T.font.family} text-[15px] font-regular leading-[24px] text-[#223F7F] hover:text-[#1E3A8A] transition-colors flex items-center gap-2 mt-auto`}>
                        Submit Feedback
                        <span><IconArrowRight
                            size={16}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.25}
                        /></span>
                    </button>
                </div>

            </div>

            {/* 3. Footer Banner */}
            <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px] text-center">
                <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-4`}>
                    R&D Cell Contact Information
                </h3>
                <p className={`${T.font.family} text-[18px] font-regular text-[#191919BF] leading-[26px] mb-8 max-w-[800px] mx-auto`}>
                    Connect with our dedicated research team for comprehensive support across all aspects of your research activities, from planning to publication.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[9.4px] font-medium text-[18px] transition-colors">
                        Meet Our Team
                    </button>
                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[9.4px] font-medium text-[18px] transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </div>

        </PageSection>
    );
};

export default ResearchContactAndSupport;
