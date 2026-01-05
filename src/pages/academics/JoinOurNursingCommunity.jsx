import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "190+", label: "Total Seats" },
    { value: "56+", label: "Expert Faculty" },
    { value: "INC", label: "Approved" },
];

const IconLocationFillWhite = "/AsramWebsite-FE/assets/icons/IconLocationFillWhite.svg";
const IconPhoneFillWhite = "/AsramWebsite-FE/assets/icons/IconPhoneFillWhite.svg";
const IconEmailFillWhite = "/AsramWebsite-FE/assets/icons/IconEmailFillWhite.svg";

const contactCards = [
    {
        title: "Visit Campus",
        desc: "ASRAM Campus",
        sub: "Eluru, Andhra Pradesh",
        icon: IconLocationFillWhite,
    },
    {
        title: "Call Us",
        desc: "Admissions Office",
        sub: "Contact via asram.in",
        icon: IconPhoneFillWhite,
    },
    {
        title: "Email Us",
        desc: "For admission inquiries",
        sub: "See official website",
        icon: IconEmailFillWhite,
    },
];

const JoinOurNursingCommunity = ({ theme }) => {
    // Colors from theme or Figma defaults
    const secondaryColor = theme?.secondary || "#1E3A8A"; // Dark Blue
    const primaryButtonBg = "#1E3A8A"; // Dark Blue for primary action
    const secondaryButtonBg = "#EEF2F7"; // Light gray-blue for secondary actions

    return (
        <PageSection bg={T.bg.white} paddingClass="py-[40px]">
            {/* 
                Structure:
                1. Title (Centered)
                2. Buttons (Centered, gap-4) -- 40px gap below
                3. Cards (Grid, gap-6) -- 40px gap below
                4. Divider -- 40px gap below (or integrated)
                5. Stats (Centered)
             */}

            <div className="flex flex-col items-center">

                {/* 1. Header Section */}
                <h2
                    className={`
                        ${T.font.family} 
                        font-bold 
                        text-[40px] 
                        leading-tight 
                        text-center 
                        mb-[40px]
                    `}
                    style={{ color: secondaryColor }}
                >
                    Join Our Medical Community
                </h2>

                {/* 2. Buttons Row */}
                <div className="flex flex-wrap justify-center gap-[16px] mb-[40px]">
                    <button
                        className="
                            text-white 
                            px-[24px] py-[12px] 
                            rounded-[8px] 
                            font-bold 
                            text-[14px] 
                            flex items-center gap-2 
                            transition-colors
                        "
                        style={{ backgroundColor: primaryButtonBg }}
                    >
                        Start Your Application
                        <span className="text-[16px]">→</span>
                    </button>

                    <button
                        className="
                            text-[#1E3A8A] 
                            px-[24px] py-[12px] 
                            rounded-[8px] 
                            font-medium 
                            text-[14px] 
                            transition-colors
                        "
                        style={{ backgroundColor: secondaryButtonBg }}
                    >
                        Explore Programs
                    </button>

                    <button
                        className="
                             text-[#1E3A8A]  
                            px-[24px] py-[12px] 
                            rounded-[8px] 
                            font-medium 
                            text-[14px] 
                            transition-colors
                        "
                        style={{ backgroundColor: secondaryButtonBg }}
                    >
                        Visit Website
                    </button>
                </div>

                {/* 3. Contact Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[40px]">
                    {contactCards.map((card, index) => (
                        <div
                            key={index}
                            className="
                                flex flex-col items-center text-center
                                p-[24px]
                                rounded-[8px]
                                gap-[12px]
                            "
                            style={{
                                backgroundColor: "#F7F9FC",
                                border: "0.99px solid rgba(7, 7, 7, 0.2)"
                            }}
                        >
                            <div
                                className="
                                    w-[48px] h-[48px] 
                                    rounded-full 
                                    flex items-center justify-center 
                                    shrink-0
                                "
                                style={{ backgroundColor: secondaryColor }}
                            >
                                <img src={card.icon} className="w-[20px] h-[20px]" alt="" />
                            </div>

                            <h3
                                className={`
                                    ${T.font.family} 
                                    font-bold 
                                    text-[18px] 
                                `}
                                style={{ color: secondaryColor }}
                            >
                                {card.title}
                            </h3>

                            <div className="flex flex-col gap-[2px]">
                                <p className={`${T.font.family} text-[14px] text-gray-600`}>
                                    {card.desc}
                                </p>

                                <p className={`${T.font.family} text-[14px] text-gray-500`}>
                                    {card.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Divider */}
                <div className="h-[1px] w-full bg-gray-200 mb-[40px]"></div>

                {/* 5. Stats Row */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <h4
                                className={`
                                    ${T.font.family} 
                                    font-bold 
                                    text-[36px] 
                                    mb-1
                                `}
                                style={{ color: secondaryColor }}
                            >
                                {stat.value}
                            </h4>
                            <p className={`${T.font.family} text-[14px] text-gray-500`}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </PageSection>
    );
};

export default JoinOurNursingCommunity;
