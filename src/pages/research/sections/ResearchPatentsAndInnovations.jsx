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


const IconPrototypeSvg = (props) => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13 21.6641V23.8307" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 2.16406V4.33073" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.417 21.6641V23.8307" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.417 2.16406V4.33073" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.16748 13H4.33415" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.16748 18.4141H4.33415" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.16748 7.58594H4.33415" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.6675 13H23.8341" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.6675 18.4141H23.8341" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.6675 7.58594H23.8341" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5835 21.6641V23.8307" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5835 2.16406V4.33073" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5002 4.33594H6.50016C5.30355 4.33594 4.3335 5.30599 4.3335 6.5026V19.5026C4.3335 20.6992 5.30355 21.6693 6.50016 21.6693H19.5002C20.6968 21.6693 21.6668 20.6992 21.6668 19.5026V6.5026C21.6668 5.30599 20.6968 4.33594 19.5002 4.33594Z" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.2503 8.67188H9.75033C9.15202 8.67188 8.66699 9.1569 8.66699 9.75521V16.2552C8.66699 16.8535 9.15202 17.3385 9.75033 17.3385H16.2503C16.8486 17.3385 17.3337 16.8535 17.3337 16.2552V9.75521C17.3337 9.1569 16.8486 8.67188 16.2503 8.67188Z" stroke="#C0392B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const defaultStats = [
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
        icon: <IconPrototypeSvg className="w-[26px] h-[26px]" />,
    },
];


const defaultPatents = [
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

const defaultInnovations = [
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
    statValueColor = "#223F7F",
    badgeConfig, // Optional: { bg: string, text: string }
    stats,
    patents,
    innovations,
    incubationDesc
}) => {
    const statsToRender = stats || defaultStats;
    const patentsToRender = patents || defaultPatents;
    const innovationsToRender = innovations || defaultInnovations;
    const incubationDescText = incubationDesc || "ASRAM's Innovation Center supports researchers in translating discoveries into market-ready products through mentorship, funding, legal support, and industry connections.";

    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
                Patents & Innovations
            </h2>

            {/* Real Stats Row - Clean Implementation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
                {statsToRender.map((stat, index) => (
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
                            className={`${T.font.family} font-regular text-[43.75px] mb-1`}
                            style={{ color: statValueColor }}
                        />
                        <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>


            {/* 2. Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                {/* Featured Patents */}
                <div style={{ border: "1px solid #07070733" }} className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[40px]">
                    <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-8`}>
                        Featured Patents
                    </h3>

                    <div className="flex flex-col gap-6 mb-8">
                        {patentsToRender.map((item, index) => (
                            <div key={index} className="border-b border-[#cbd5e1] pb-6 last:border-0 last:pb-0 border-opacity-50">
                                <h4 className={`${T.font.family} font-regular text-[19px] text-[#191919] mb-1 leading-snug`}>
                                    {item.title}
                                </h4>
                                <p className={`${T.font.family} text-[14px] font-regular leading-[20px] text-[#191919BF] mb-2`}>
                                    {item.authors}
                                </p>
                                <span
                                    className={`${badgeConfig ? '' : item.statusColor} text-[12.5px] px-3 py-1 rounded-[34952500px] font-regular inline-block`}
                                    style={badgeConfig ? { backgroundColor: badgeConfig.bg, color: badgeConfig.text } : {}}
                                >
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
                        {innovationsToRender.map((item, index) => (
                            <div key={index} className="border-b border-[#cbd5e1] pb-6 last:border-0 last:pb-0 border-opacity-50">
                                <h4 className={`${T.font.family} font-regular text-[19px] text-[#191919] mb-1 leading-snug`}>
                                    {item.title}
                                </h4>
                                <p className={`${T.font.family} text-[14px] font-regular leading-[20px] text-[#191919BF] mb-2`}>
                                    {item.category}
                                </p>
                                <span
                                    className={`${badgeConfig ? '' : 'text-[#008C8C]'} text-[12.5px] px-3 py-1 rounded-[34952500px] font-regular inline-block`}
                                    style={{ backgroundColor: badgeConfig ? badgeConfig.bg : "#008C8C1A", color: badgeConfig ? badgeConfig.text : undefined }}
                                >
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
                    {incubationDescText}
                </p>

                <button
                    className="hover:opacity-90 text-white px-6 py-3 rounded-[10.4px] font-medium text-[18px] flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: "#223F7F" }}
                >
                    Learn About Incubation Support
                    <span><IconArrowRightWhite size={19} /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchPatentsAndInnovations;
