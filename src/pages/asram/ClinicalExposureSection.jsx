import React from "react";
import { T } from "@/theme";

import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";
import PageSection from "@/features/common/layout/PageContainer";

// Icons (react-icons/hi or similar suitable icons)
const clinicalexposure = "/AsramWebsite-FE/assets/asram/clinicalexposure.png"; // Fallback image, user can replace

const ClinicalExposureSection = () => {

    const features = [
        {
            icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V11" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 21V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 9H10" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 11H20C20.5304 11 21.0391 11.2107 21.4142 11.5858C21.7893 11.9609 22 12.4696 22 13V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8H6" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 21V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3H8C7.46957 3 6.96086 3.21071 6.58579 3.58579C6.21071 3.96086 6 4.46957 6 5V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ),
            title: "Hospital Partnerships",
            description: "Tie-ups with 12+ multi-specialty hospitals for comprehensive clinical training",
        },
        {
            icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2V4" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 2V4" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V9C2 10.5913 2.63214 12.1174 3.75736 13.2426C4.88258 14.3679 6.4087 15 8 15C9.5913 15 11.1174 14.3679 12.2426 13.2426C13.3679 12.1174 14 10.5913 14 9V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H11" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 15C8 16.5913 8.63214 18.1174 9.75736 19.2426C10.8826 20.3679 12.4087 21 14 21C15.5913 21 17.1174 20.3679 18.2426 19.2426C19.3679 18.1174 20 16.5913 20 15V12" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ),
            title: "Supervised Practice",
            description: "Guided patient interaction under qualified healthcare professionals",
        },
        {
            icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 14L11 16L15 12" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ),
            title: "Clinical Rotations",
            description: "Structured rotations across multiple departments and specializations",
        },
        {
            icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.12891C16.8578 3.35128 17.6174 3.85217 18.1597 4.55297C18.702 5.25377 18.9962 6.1148 18.9962 7.00091C18.9962 7.88702 18.702 8.74805 18.1597 9.44884C17.6174 10.1496 16.8578 10.6505 16 10.8729" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 20.9989V18.9989C21.9993 18.1126 21.7044 17.2517 21.1614 16.5512C20.6184 15.8508 19.8581 15.3505 19 15.1289" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ),
            title: "Professional Mentorship",
            description: "Direct guidance from experienced clinical practitioners and specialists",
        },
    ];

    const stats = [
        { value: "600+", label: "Clinical Hours per Student" },
        { value: "12+", label: "Partner Hospitals" },
        { value: "100%", label: "Supervised Training" },
    ];

    return (
        <PageSection bg="bg-[#EEF2F7]" sectionClassName="py-[60px] md:py-[80px]">
            {/* TITLE */}
            <h1
                className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[28px] md:text-[42px]
            text-[#223F7F]
            mb-[40px]
          `}
            >
                Clinical Exposure & Hospital Access
            </h1>

            {/* MAIN CONTENT ROW */}
            <div className="flex flex-col lg:flex-row gap-[40px] items-stretch">
                {/* LEFT: FEATURES LIST */}
                <div className="flex-1 flex flex-col justify-start gap-[20px]">
                    {features.map((item, index) => (
                        <div key={index} className="flex gap-[20px] items-start">
                            {/* ICON BOX */}
                            <div
                                className="
                flex-shrink-0
                w-[48px] h-[48px]
                bg-[#DCE4F2]
                text-[#223F7F]
                rounded-[8px]
                flex items-center justify-center
              "
                            >
                                {item.icon}
                            </div>

                            {/* TEXT */}
                            <div className="flex flex-col gap-[4px]">
                                <h3
                                    className={`
                  ${T.font.family}
                  ${T.font.weight.medium}
                  text-[18px] md:text-[18px]
                  text-[#223F7F]
                `}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`
                  ${T.font.family}
                  text-[14px] md:text-[15px]
                  leading-[1.5]
                  text-[#191919BF]
                `}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT: IMAGE */}
                <div className="w-full lg:w-[580px] flex-shrink-0">
                    <img
                        src={clinicalexposure} // Using existing image as placeholder, user can swap
                        alt="Clinical Exposure"
                        className="w-full h-full min-h-[300px] lg:min-h-[355px] object-cover rounded-[12px] shadow-sm"
                    />
                </div>
            </div>

            {/* STATS BAR */}


            <div
                style={{ border: "solid 1px rgba(7, 7, 7, 0.2)" }}
                className="bg-[#FFF] rounded-[12px] p-[20px]   mt-[60px]"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] items-center text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <AnimatedStatValue
                                value={stat.value}
                                className={`
      font-montserrat
        font-semibold
        text-[32px]
        mb-[10px]
        leading-[39px]
        text-[#223F7F]
      `}
                            />
                            <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default ClinicalExposureSection;
