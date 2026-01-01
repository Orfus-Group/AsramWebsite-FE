import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconPatentGranted = "/AsramWebsite-FE/assets/icons/IconPatentGranted.svg";
const IconPatentFiled = "/AsramWebsite-FE/assets/icons/IconPatentFiled.svg";
const IconInnovation = "/AsramWebsite-FE/assets/icons/IconInnovation.svg";
const IconPrototype = "/AsramWebsite-FE/assets/icons/IconPrototype.svg";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";

const stats = [
    {
        value: "8",
        label: "Patents Granted",
        icon: <img src={IconPatentGranted} className="w-[26px] h-[26px]" alt="" />,
    },
    {
        value: "12",
        label: "Patents Filed",
        icon: <img src={IconPatentFiled} className="w-[26px] h-[26px]" alt="" />,
    },
    {
        value: "15+",
        label: "Active Innovations",
        icon: <img src={IconInnovation} className="w-[26px] h-[26px]" alt="" />,
    },
    {
        value: "5",
        label: "Prototypes",
        icon: <img src={IconPrototype} className="w-[26px] h-[26px]" alt="" />,
    },
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

const ResearchPatentsAndInnovations = ({
    iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
    buttonConfig = { bg: "#008C8C" },
}) => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Patents & Innovations
            </h2>



            {/* Real Stats Row - Clean Implementation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-12">
                {stats.map((stat, index) => (
                    <div style={{ border: "1px solid #07070733" }} key={index} className="bg-[#EEF2F7] rounded-[10.4px] p-[24px] md:p-[30px] flex flex-col items-center text-center">
                        <div
                            className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} mb-4 ${iconConfig.radiusClass || "rounded-[12px]"} flex items-center justify-center`}
                            style={{ backgroundColor: iconConfig.bg }}
                        >
                            {React.cloneElement(stat.icon, {
                                style: { filter: iconConfig.iconFilter },
                                className: iconConfig.iconSizeClass || stat.icon.props.className
                            })}
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
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[40px]">
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
                        <span><img src={IconArrowRight} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" alt="" /></span>
                    </button>
                </div>

                {/* Innovations & Prototypes */}
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[40px]">
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
                                <span className="text-[#008C8C] text-[12.5px] px-3 py-1 rounded-[34952500px] font-regular inline-block" style={{ backgroundColor: "#008C8C1A" }}>
                                    {item.badge}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[#223F7F] font-medium text-[14px] hover:text-[#1E3A8A] transition-colors">
                        View All Innovations
                        <span><img src={IconArrowRight} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" alt="" /></span>
                    </button>
                </div>

            </div>

            {/* 3. Incubation Box */}
            <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[40px]">
                <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-4`}>
                    Innovation Incubation & Commercialization
                </h3>
                <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] mb-8 max-w-[900px]`}>
                    ASRAM's Innovation Center supports researchers in translating discoveries into market-ready products through mentorship, funding, legal support, and industry connections.
                </p>

                <button
                    className="hover:opacity-90 text-white px-6 py-3 rounded-[10.4px] font-medium text-[18px] flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: buttonConfig.bg }}
                >
                    Learn About Incubation Support
                    <span><IconArrowRightWhite size={19} /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchPatentsAndInnovations;
