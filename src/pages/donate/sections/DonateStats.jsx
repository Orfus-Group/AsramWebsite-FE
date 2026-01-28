import React from "react";
import { T } from "@/theme";

const stats = [
    {
        value: "500+",
        label: "Scholarships Awarded",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4198 10.9224C21.5988 10.8434 21.7507 10.7136 21.8567 10.5492C21.9627 10.3847 22.0181 10.1927 22.0161 9.99709C22.0141 9.80144 21.9547 9.61068 21.8454 9.44844C21.736 9.2862 21.5814 9.15961 21.4008 9.08436L12.8298 5.18036C12.5692 5.06151 12.2862 5 11.9998 5C11.7134 5 11.4304 5.06151 11.1698 5.18036L2.5998 9.08036C2.42177 9.15833 2.27031 9.28649 2.16396 9.44917C2.05761 9.61185 2.00098 9.802 2.00098 9.99636C2.00098 10.1907 2.05761 10.3809 2.16396 10.5435C2.27031 10.7062 2.42177 10.8344 2.5998 10.9124L11.1698 14.8204C11.4304 14.9392 11.7134 15.0007 11.9998 15.0007C12.2862 15.0007 12.5692 14.9392 12.8298 14.8204L21.4198 10.9224Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10V16" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 12.5V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V12.5" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        )
    },
    {
        value: "₹2.5 Cr",
        label: "Research Funding",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18H14" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 22H21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 22C15.8565 22 17.637 21.2625 18.9497 19.9497C20.2625 18.637 21 16.8565 21 15C21 13.1435 20.2625 11.363 18.9497 10.0503C17.637 8.7375 15.8565 8 14 8H13" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 14H11" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12C8.46957 12 7.96086 11.7893 7.58579 11.4142C7.21071 11.0391 7 10.5304 7 10V6H13V10C13 10.5304 12.7893 11.0391 12.4142 11.4142C12.0391 11.7893 11.5304 12 11 12H9Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H9C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3V6" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        )
    },
    {
        value: "5",
        label: "New Labs Built",
        icon: (
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12H14" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 8H14" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 21V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H18" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21V5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        )
    },
    {
        value: "10,000+",
        label: "Patients Served Free",
        icon: (
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.125C16.8578 3.34737 17.6174 3.84826 18.1597 4.54906C18.702 5.24986 18.9962 6.11089 18.9962 6.997C18.9962 7.88311 18.702 8.74414 18.1597 9.44494C17.6174 10.1457 16.8578 10.6466 16 10.869" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 20.995V18.995C21.9993 18.1087 21.7044 17.2478 21.1614 16.5473C20.6184 15.8469 19.8581 15.3466 19 15.125" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        )
    }
];

const DonateStats = () => {
    return (
        <section className="py-[40px] lg:py-[80px] bg-white relative z-10 w-full font-montserrat hidden md:block">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#07070733] rounded-[12px] p-[20px] h-auto lg:h-[193px] flex flex-col box-border"
                        >
                            <div className="w-[48px] h-[48px] rounded-[6.4px] bg-[rgba(34,63,127,0.1)] flex items-center justify-center text-xl text-[#223F7F] shrink-0">
                                {stat.icon}
                            </div>

                            <h3 className="text-[32px] font-semibold text-[#191919] mt-[20px] leading-[39px]">
                                {stat.value}
                            </h3>
                            <p className="text-[18px] font-normal text-[rgba(25,25,25,0.75)] mt-[20px] leading-[26px]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonateStats;
