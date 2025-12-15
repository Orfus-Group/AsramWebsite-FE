import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

const stats = [
    {
        value: "8",
        label: "Patents Granted",
        icon: (
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8699 22.377L29.5001 37.179C29.5296 37.3533 29.5051 37.5325 29.43 37.6925C29.3549 37.8525 29.2328 37.9858 29.0799 38.0745C28.927 38.1632 28.7506 38.2032 28.5745 38.1889C28.3983 38.1747 28.2306 38.1071 28.0939 37.995L21.8786 33.3301C21.5786 33.1059 21.2141 32.9848 20.8395 32.9848C20.465 32.9848 20.1005 33.1059 19.8005 33.3301L13.5748 37.9933C13.4382 38.1051 13.2707 38.1727 13.0947 38.1869C12.9188 38.2011 12.7426 38.1614 12.5898 38.0729C12.437 37.9844 12.3149 37.8515 12.2396 37.6918C12.1643 37.5321 12.1395 37.3532 12.1685 37.179L14.797 22.377" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.8332 24.3079C26.5861 24.3079 31.2498 19.6442 31.2498 13.8913C31.2498 8.13831 26.5861 3.47461 20.8332 3.47461C15.0802 3.47461 10.4165 8.13831 10.4165 13.8913C10.4165 19.6442 15.0802 24.3079 20.8332 24.3079Z" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Ribbon
    },
    {
        value: "12",
        label: "Patents Filed",
        icon: (
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.0415 24.3079C26.3887 22.5718 27.2568 21.3566 28.6457 19.9677C30.3818 18.4052 31.2498 16.1482 31.2498 13.8913C31.2498 11.1286 30.1524 8.47908 28.1989 6.52558C26.2454 4.57208 23.5958 3.47461 20.8332 3.47461C18.0705 3.47461 15.421 4.57208 13.4675 6.52558C11.514 8.47908 10.4165 11.1286 10.4165 13.8913C10.4165 15.6274 10.7637 17.7107 13.0207 19.9677C14.2359 21.1829 15.2776 22.5718 15.6248 24.3079" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.625 31.25H26.0417" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.3608 38.1953H24.3053" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Bulb
    },
    {
        value: "15+",
        label: "Active Innovations",
        icon: (
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.81226 5.20898H33.8539" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.4165 5.20898V32.9868C10.4165 33.9077 10.7823 34.7908 11.4335 35.442C12.0847 36.0932 12.9678 36.459 13.8887 36.459H27.7776C28.6985 36.459 29.5817 36.0932 30.2328 35.442C30.884 34.7908 31.2498 33.9077 31.2498 32.9868V5.20898" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.4165 24.3066H31.2498" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Box/Product
    },
    {
        value: "5",
        label: "Prototypes",
        icon: (
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8333 34.7227V38.1949" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.8333 3.47461V6.94683" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.5139 34.7227V38.1949" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.5139 3.47461V6.94683" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.47241 20.834H6.94463" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.47241 29.5137H6.94463" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.47241 12.1523H6.94463" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34.7222 20.834H38.1944" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34.7222 29.5137H38.1944" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34.7222 12.1523H38.1944" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.1526 34.7227V38.1949" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.1526 3.47461V6.94683" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.2496 6.94336H10.4163C8.49866 6.94336 6.94409 8.49793 6.94409 10.4156V31.2489C6.94409 33.1666 8.49866 34.7211 10.4163 34.7211H31.2496C33.1673 34.7211 34.7219 33.1666 34.7219 31.2489V10.4156C34.7219 8.49793 33.1673 6.94336 31.2496 6.94336Z" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.0417 13.8906H15.625C14.6662 13.8906 13.8889 14.6679 13.8889 15.6267V26.0434C13.8889 27.0022 14.6662 27.7795 15.625 27.7795H26.0417C27.0005 27.7795 27.7778 27.0022 27.7778 26.0434V15.6267C27.7778 14.6679 27.0005 13.8906 26.0417 13.8906Z" stroke="#191919" stroke-width="3.47222" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ) // Chip
    }
];

const patents = [
    {
        title: "AI-Powered Diabetic Retinopathy Screening Device",
        authors: "Dr. Rajesh Patel, Dr. Suresh Kumar, Dr. Anjali Verma",
        status: "Granted - IN 398745",
        statusColor: "bg-[#DCFCE7] text-[#008236]" // Greenish
    },
    {
        title: "Novel Biomarker Panel for Early Sepsis Detection",
        authors: "Dr. Ramesh Babu, Dr. Neha Singh",
        status: "Granted - IN 402158",
        statusColor: "bg-[#DCFCE7] text-[#008236]"
    },
    {
        title: "Smart Infusion Pump with AI Error Prevention",
        authors: "Dr. Meera Krishnan, Dr. Priya Sharma",
        status: "Filed - 2024",
        statusColor: "bg-[#DBEAFE] text-[#1447E6]" // Blueish
    }
];

const innovations = [
    {
        title: "Mobile Health Platform for Maternal Care",
        category: "Digital Health Solution",
        badge: "Pilot Testing"
    },
    {
        title: "Low-Cost Ventilator for Resource-Limited Settings",
        category: "Medical Device",
        badge: "Clinical Validation"
    },
    {
        title: "Point-of-Care Diagnostic Kit",
        category: "Diagnostic Tool",
        badge: "Prototype Development"
    }
];

const ResearchPatentsAndInnovations = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Patents & Innovations
            </h2>



            {/* Real Stats Row - Clean Implementation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-12">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-center text-center">
                        <div className="w-[40px] h-[40px] text-[#333] flex items-center justify-center mb-4">
                            {stat.icon}
                        </div>
                        <AnimatedStatValue
                            value={stat.value}
                            className={`${T.font.family} font-regular text-[43.75px] text-[#191919] mb-1`}
                        />
                        <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>


            {/* 2. Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">

                {/* Featured Patents */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px]">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        Featured Patents
                    </h3>

                    <div className="flex flex-col gap-6 mb-8">
                        {patents.map((item, index) => (
                            <div key={index} className="border-b border-[#cbd5e1] pb-6 last:border-0 last:pb-0 border-opacity-50">
                                <h4 className={`${T.font.family} font-regular text-[19px] text-[#191919] mb-1 leading-snug`}>
                                    {item.title}
                                </h4>
                                <p className={`${T.font.family} text-[14px] font-regular leading-[20px] text-[#191919BF] mb-2`}>
                                    {item.authors}
                                </p>
                                <span className={`${item.statusColor} text-[12.5px] px-3 py-1 rounded-[34952500px] font-regular inline-block`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#223F7F] font-medium text-[14px] hover:text-[#1E3A8A] transition-colors">
                        View All Patents
                        <span><IconArrowRight
                            size={16}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.25}
                        /></span>
                    </button>
                </div>

                {/* Innovations & Prototypes */}
                <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px]">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        Innovations & Prototypes
                    </h3>

                    <div className="flex flex-col gap-6 mb-[20px]">
                        {innovations.map((item, index) => (
                            <div key={index} className="border-b border-[#cbd5e1] pb-6 last:border-0 last:pb-0 border-opacity-50">
                                <h4 className={`${T.font.family} font-regular text-[19px] text-[#191919] mb-1 leading-snug`}>
                                    {item.title}
                                </h4>
                                <p className={`${T.font.family} text-[14px] font-regular leading-[20px] text-[#191919BF] mb-2`}>
                                    {item.category}
                                </p>
                                <span className="bg-[#008C8C1A] text-[#008C8C] text-[12.5px] px-3 py-1 rounded-[34952500px] font-regular inline-block">
                                    {item.badge}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#223F7F] font-medium text-[14px] hover:text-[#1E3A8A] transition-colors">
                        View All Innovations
                        <span><IconArrowRight
                            size={16}
                            className="sm:w-[20px] sm:h-[20px]"
                            stroke="#223F7F"
                            strokeWidth={1.25}
                        /></span>
                    </button>
                </div>

            </div>

            {/* 3. Incubation Box */}
            <div className="bg-[#D8DFEF] rounded-[12px] p-[24px] md:p-[40px]">
                <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-4`}>
                    Innovation Incubation & Commercialization
                </h3>
                <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] mb-8 max-w-[900px]`}>
                    ASRAM's Innovation Center supports researchers in translating discoveries into market-ready products through mentorship, funding, legal support, and industry connections.
                </p>

                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[10.4px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                    Learn About Incubation Support
                    <span><IconArrowRight
                        size={21}
                        stroke="white"
                        strokeWidth={1.7}
                    /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchPatentsAndInnovations;
