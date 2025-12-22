import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { HiOutlineHome, HiOutlineShieldCheck, HiOutlineWifi, HiOutlineSparkles, HiOutlineTruck, HiOutlineUsers } from "react-icons/hi";

const items = [
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7744 12.2014C18.7744 16.895 15.4889 19.2418 11.5838 20.6029C11.3793 20.6722 11.1572 20.6689 10.9549 20.5935C7.04041 19.2418 3.75488 16.895 3.75488 12.2014V5.63031C3.75488 5.38135 3.85378 5.14258 4.02983 4.96653C4.20587 4.79049 4.44464 4.69159 4.69361 4.69159C6.57105 4.69159 8.91786 3.56512 10.5512 2.13826C10.7501 1.96835 11.0031 1.875 11.2647 1.875C11.5262 1.875 11.7792 1.96835 11.9781 2.13826C13.6209 3.57451 15.9583 4.69159 17.8357 4.69159C18.0847 4.69159 18.3235 4.79049 18.4995 4.96653C18.6755 5.14258 18.7744 5.38135 18.7744 5.63031V12.2014Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.44824 11.2642L10.3257 13.1416L14.0806 9.38672" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Safe & Secure",
        description: "24/7 security, CCTV surveillance, and strict entry protocols",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.87793 3.75391V18.7735" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.87793 7.50781H18.7749C19.2729 7.50781 19.7504 7.70561 20.1025 8.0577C20.4546 8.40979 20.6524 8.88733 20.6524 9.38526V18.7725" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.87793 15.957H20.6524" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.63281 7.50781V15.9563" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Clean Facilities",
        description: "Well-maintained rooms with regular housekeeping services",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2646 18.7734H11.2746" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.87793 8.27701C4.45952 5.96796 7.80159 4.69141 11.2652 4.69141C14.7287 4.69141 18.0708 5.96796 20.6524 8.27701" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.69336 12.0701C6.4481 10.3501 8.80728 9.38672 11.2644 9.38672C13.7215 9.38672 16.0807 10.3501 17.8355 12.0701" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.97949 15.4237C8.85686 14.5637 10.0365 14.082 11.265 14.082C12.4936 14.082 13.6732 14.5637 14.5505 15.4237" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Study Resources",
        description: "High-speed internet and dedicated study areas for academic work",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.81641 1.875V8.44606C2.81641 9.47865 3.66126 10.3235 4.69385 10.3235H8.44874C8.94667 10.3235 9.4242 10.1257 9.77629 9.77361C10.1284 9.42152 10.3262 8.94399 10.3262 8.44606V1.875" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.57129 1.875V20.6494" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.7131 14.0784V1.875C18.4683 1.875 17.2745 2.3695 16.3943 3.24973C15.514 4.12995 15.0195 5.32379 15.0195 6.56861V12.2009C15.0195 13.2335 15.8644 14.0784 16.897 14.0784H19.7131ZM19.7131 14.0784V20.6494" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Nutritious Meals",
        description: "Hygienic mess facilities with balanced, health-focused meals",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75488 18.3026V4.22181C3.75488 3.59939 4.00213 3.00247 4.44225 2.56236C4.88236 2.12225 5.47928 1.875 6.10169 1.875H17.8357C18.0847 1.875 18.3235 1.9739 18.4995 2.14995C18.6755 2.32599 18.7744 2.56476 18.7744 2.81372V19.7107C18.7744 19.9597 18.6755 20.1985 18.4995 20.3745C18.3235 20.5505 18.0847 20.6494 17.8357 20.6494H6.10169C5.47928 20.6494 4.88236 20.4022 4.44225 19.9621C4.00213 19.522 3.75488 18.9251 3.75488 18.3026ZM3.75488 18.3026C3.75488 17.6802 4.00213 17.0833 4.44225 16.6432C4.88236 16.2031 5.47928 15.9558 6.10169 15.9558H18.7744" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Library Access",
        description: "Extended library hours for hostel residents",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2646 5.62891V11.2612L15.0195 13.1387" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.2652 20.6494C16.4496 20.6494 20.6524 16.4466 20.6524 11.2622C20.6524 6.0778 16.4496 1.875 11.2652 1.875C6.08073 1.875 1.87793 6.0778 1.87793 11.2622C1.87793 16.4466 6.08073 20.6494 11.2652 20.6494Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Structured Routine",
        description: "Regulated timings promoting discipline and study habits",
    },
];

const HostelAccommodation = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Hostel & Accommodation
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[40px]">
                {items.map((item, index) => (
                    <div style={{ border: "solid 1px #e0e0e0" }} key={index} className="bg-white p-[30px] rounded-[12px] shadow-sm border border-gray-100 flex flex-col items-start">
                        <div className="bg-[#223F7F]/10 p-2.5 rounded-[8px] mb-4">
                            {item.icon}
                        </div>
                        <h6 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-3`}>
                            {item.title}
                        </h6>
                        <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Info Box */}
            {/* Info Box */}
            <div className="bg-white border-l-[5px] border-[#223F7F] p-[30px] rounded-[12px] flex flex-col items-start gap-[12px] shadow-sm">
                <h5 className={`${T.font.family} font-medium text-[22px] text-[#223F7F]`}>
                    Parent-Focused Accommodation Standards
                </h5>
                <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                    We maintain transparent communication with parents regarding hostel rules, student conduct, and safety protocols. Regular updates and open-door policies ensure parents remain informed about their child’s accommodation and wellbeing. Our commitment extends beyond academics to creating a home-away-from-home environment with zero tolerance for any form of misconduct.
                </p>
            </div>
        </PageSection>
    );
};

export default HostelAccommodation;
