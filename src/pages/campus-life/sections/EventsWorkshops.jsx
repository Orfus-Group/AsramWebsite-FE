import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { HiOutlineBeaker, HiOutlineHeart, HiOutlineBookOpen, HiOutlineCalendar } from "react-icons/hi";

const items = [
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.63281 16.8945H13.1426" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.81641 20.6523H19.7134" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.1428 20.6499C14.8856 20.6499 16.5569 19.9576 17.7893 18.7253C19.0216 17.493 19.7139 15.8216 19.7139 14.0789C19.7139 12.3361 19.0216 10.6647 17.7893 9.43243C16.5569 8.20012 14.8856 7.50781 13.1428 7.50781H12.2041" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.44922 13.1406H10.3267" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.44873 11.2651C7.9508 11.2651 7.47327 11.0673 7.12118 10.7153C6.76909 10.3632 6.57129 9.88563 6.57129 9.3877V5.63281H12.2036V9.3877C12.2036 9.88563 12.0058 10.3632 11.6537 10.7153C11.3016 11.0673 10.8241 11.2651 10.3262 11.2651H8.44873Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2647 5.62989V2.81372C11.2647 2.56476 11.1658 2.32599 10.9897 2.14995C10.8137 1.9739 10.5749 1.875 10.3259 1.875H8.44849C8.19952 1.875 7.96076 1.9739 7.78471 2.14995C7.60867 2.32599 7.50977 2.56476 7.50977 2.81372V5.62989" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Clinical Skill Workshops",
        description: "Regular hands-on workshops covering advanced clinical procedures, diagnostic techniques, and patient care protocols conducted by industry experts.",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.87793 8.91642C1.87795 7.87181 2.19484 6.85178 2.78674 5.99104C3.37864 5.13031 4.21771 4.46937 5.19313 4.09551C6.16855 3.72166 7.23443 3.65248 8.24999 3.89711C9.26555 4.14174 10.183 4.68868 10.8812 5.46567C10.9304 5.51826 10.9898 5.56018 11.0559 5.58883C11.1219 5.61749 11.1932 5.63228 11.2652 5.63228C11.3371 5.63228 11.4084 5.61749 11.4744 5.58883C11.5405 5.56018 11.5999 5.51826 11.6491 5.46567C12.3451 4.68362 13.2628 4.13209 14.28 3.88449C15.2972 3.63689 16.3657 3.70496 17.3433 4.07964C18.3208 4.45431 19.1611 5.11783 19.7522 5.98188C20.3434 6.84593 20.6574 7.86952 20.6524 8.91642C20.6524 11.0661 19.2443 12.6713 17.8362 14.0794L12.6807 19.0668C12.5058 19.2677 12.2902 19.4291 12.0481 19.5402C11.806 19.6514 11.5431 19.7097 11.2767 19.7114C11.0103 19.7131 10.7466 19.6581 10.5032 19.55C10.2597 19.4419 10.042 19.2833 9.86458 19.0847L4.6941 14.0794C3.28601 12.6713 1.87793 11.0755 1.87793 8.91642Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ),
        title: "Health Awareness Camps",
        description: "Community outreach programs where students organize health screening camps, awareness drives, and preventive healthcare initiatives in local areas.",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2646 6.57422V19.7163" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.81665 16.8972C2.56769 16.8972 2.32892 16.7983 2.15288 16.6223C1.97683 16.4463 1.87793 16.2075 1.87793 15.9585V3.75513C1.87793 3.50616 1.97683 3.2674 2.15288 3.09135C2.32892 2.91531 2.56769 2.81641 2.81665 2.81641H7.51026C8.50612 2.81641 9.46119 3.21201 10.1654 3.91619C10.8695 4.62037 11.2652 5.57544 11.2652 6.5713C11.2652 5.57544 11.6608 4.62037 12.3649 3.91619C13.0691 3.21201 14.0242 2.81641 15.02 2.81641H19.7137C19.9626 2.81641 20.2014 2.91531 20.3774 3.09135C20.5535 3.2674 20.6524 3.50616 20.6524 3.75513V15.9585C20.6524 16.2075 20.5535 16.4463 20.3774 16.6223C20.2014 16.7983 19.9626 16.8972 19.7137 16.8972H14.0813C13.3344 16.8972 12.6181 17.1939 12.09 17.7221C11.5619 18.2502 11.2652 18.9665 11.2652 19.7134C11.2652 18.9665 10.9685 18.2502 10.4403 17.7221C9.91218 17.1939 9.19588 16.8972 8.44899 16.8972H2.81665Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ),
        title: "Guest Lectures & Seminars",
        description: "Expert sessions by healthcare professionals, researchers, and specialists sharing insights on medical advancements and industry practices.",
    },
    {
        icon: (<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50977 1.87891V5.6338" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0195 1.87891V5.6338" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.836 3.75781H4.69385C3.65697 3.75781 2.81641 4.59837 2.81641 5.63526V18.7774C2.81641 19.8143 3.65697 20.6548 4.69385 20.6548H17.836C18.8728 20.6548 19.7134 19.8143 19.7134 18.7774V5.63526C19.7134 4.59837 18.8728 3.75781 17.836 3.75781Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.81641 9.39062H19.7134" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ),
        title: "Medical Conferences",
        description: "Annual symposiums and conferences bringing together students, faculty, and healthcare practitioners for knowledge exchange and networking.",
    },
];

const stats = [
    { value: "24+", label: "Annual Workshops" },
    { value: "15+", label: "Health Camps per Year" },
    { value: "50+", label: "Expert Guest Lectures" },
]

const EventsWorkshops = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Events, Workshops & Health Initiatives
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{ border: "solid 0.9px rgba(7, 7, 7, 0.2)" }}
                        className="bg-[#EEF2F7] md:h-[192px] p-[30px] rounded-[11.3px] flex items-start gap-4"
                    >
                        <div className="bg-white px-[11px] py-[10px] rounded-[8px] flex-shrink-0 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className={`${T.font.family} font-medium text-[20px] text-[#223F7F] mb-1`}>
                                {item.title}
                            </h3>
                            <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px]`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Bar */}
            <div
                style={{ border: "solid 1px rgba(7, 7, 7, 0.2)" }}
                className="bg-[#EEF2F7] rounded-[11.3px] p-[20px]"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] items-center text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <h3 className={`${T.font.family} font-semibold text-[32px] md:text-[40px] text-[#223F7F] mb-0`}>
                                {stat.value}
                            </h3>
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

export default EventsWorkshops;
