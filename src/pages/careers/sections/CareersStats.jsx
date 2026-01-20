import React from "react";
import { T } from "@/theme";

const stats = [
    {
        value: "500+", label: "Faculty Members", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.001 21V19C16.001 17.9391 15.5795 16.9217 14.8294 16.1716C14.0793 15.4214 13.0618 15 12.001 15H6.00098C4.94011 15 3.92269 15.4214 3.17255 16.1716C2.4224 16.9217 2.00098 17.9391 2.00098 19V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.999 3.13281C16.8568 3.35518 17.6164 3.85608 18.1587 4.55687C18.701 5.25767 18.9952 6.1187 18.9952 7.00481C18.9952 7.89092 18.701 8.75195 18.1587 9.45275C17.6164 10.1535 16.8568 10.6544 15.999 10.8768" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 21.0028V19.0028C21.9993 18.1165 21.7044 17.2556 21.1614 16.5551C20.6184 15.8547 19.8581 15.3544 19 15.1328" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    }, // Using emoji as placeholder or icon if provided
    {
        value: "5,000+", label: "Students Annually", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2V4" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 2V4" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.00098 3H4.00098C3.47054 3 2.96184 3.21071 2.58676 3.58579C2.21169 3.96086 2.00098 4.46957 2.00098 5V9C2.00098 10.5913 2.63312 12.1174 3.75834 13.2426C4.88355 14.3679 6.40968 15 8.00098 15C9.59228 15 11.1184 14.3679 12.2436 13.2426C13.3688 12.1174 14.001 10.5913 14.001 9V5C14.001 4.46957 13.7903 3.96086 13.4152 3.58579C13.0401 3.21071 12.5314 3 12.001 3H11.001" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.00098 15C8.00098 16.5913 8.63312 18.1174 9.75834 19.2426C10.8836 20.3679 12.4097 21 14.001 21C15.5923 21 17.1184 20.3679 18.2436 19.2426C19.3688 18.1174 20.001 16.5913 20.001 15V12" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    },
    {
        value: "3", label: "Medical Colleges", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4768 12.8906L16.9918 21.4166C17.0087 21.517 16.9946 21.6202 16.9514 21.7124C16.9081 21.8046 16.8377 21.8813 16.7497 21.9324C16.6616 21.9835 16.56 22.0065 16.4586 21.9983C16.3571 21.9902 16.2605 21.9512 16.1817 21.8866L12.6018 19.1996C12.4289 19.0705 12.219 19.0007 12.0033 19.0007C11.7875 19.0007 11.5776 19.0705 11.4048 19.1996L7.81875 21.8856C7.74007 21.9501 7.64361 21.989 7.54225 21.9972C7.44088 22.0054 7.33942 21.9825 7.25141 21.9315C7.16341 21.8805 7.09303 21.804 7.04967 21.712C7.00631 21.62 6.99204 21.5169 7.00875 21.4166L8.52275 12.8906" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    },
    {
        value: "12", label: "Specializations", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.999 7H21.999V13" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.001 7L13.501 15.5L8.50098 10.5L2.00098 17" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    },
];

const CareersStats = () => {
    return (
        <section className="py-[40px] lg:py-[80px] bg-white relative z-10 w-full">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                gap-[20px]
            ">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="
                            bg-white 
                            border border-[#07070733] 
                            rounded-[12px] 
                            p-[20px] 
                            h-auto lg:h-[193px]
                            flex flex-col 
                            box-border
                        "
                        >
                            <div className="w-[48px] h-[48px] rounded-[6.4px] bg-[rgba(34,63,127,0.1)] flex items-center justify-center text-xl text-[#223F7F] shrink-0">
                                {stat.icon}
                            </div>

                            <h3 className={`${T.font.family} text-[32px] font-semibold text-[#191919] mt-[20px] leading-[39px]`}>
                                {stat.value}
                            </h3>
                            <p className={`${T.font.family} text-[18px] font-normal text-[rgba(25,25,25,0.75)] mt-[20px] leading-[26px]`}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersStats;
