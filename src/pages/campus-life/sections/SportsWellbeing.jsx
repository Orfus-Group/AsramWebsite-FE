import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCardGrid from "@/components/common/InfoCardGrid";

const items = [
    {
        icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1526 19.2812V21.4198C13.1477 21.8704 13.027 22.3122 12.8022 22.7028C12.5775 23.0933 12.2561 23.4196 11.869 23.6503C11.0472 24.259 10.3787 25.051 9.91656 25.9633C9.45446 26.8757 9.21152 27.8832 9.20703 28.9059" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4141 19.2812V21.4198C18.419 21.8704 18.5397 22.3122 18.7645 22.7028C18.9892 23.0933 19.3106 23.4196 19.6977 23.6503C20.5195 24.259 21.188 25.051 21.6501 25.9633C22.1122 26.8757 22.3552 27.8832 22.3597 28.9059" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.6738 11.8377H25.6466C26.5187 11.8377 27.355 11.4913 27.9716 10.8747C28.5882 10.2581 28.9346 9.42174 28.9346 8.54971C28.9346 7.67768 28.5882 6.84137 27.9716 6.22475C27.355 5.60813 26.5187 5.26172 25.6466 5.26172H23.6738" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.26172 28.9336H26.3049" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.8916 11.8392C7.8916 13.9321 8.72299 15.9392 10.2029 17.4191C11.6828 18.899 13.6899 19.7304 15.7828 19.7304C17.8757 19.7304 19.8828 18.899 21.3627 17.4191C22.8426 15.9392 23.674 13.9321 23.674 11.8392V3.94801C23.674 3.5992 23.5354 3.26467 23.2888 3.01802C23.0421 2.77138 22.7076 2.63281 22.3588 2.63281H9.2068C8.85799 2.63281 8.52346 2.77138 8.27681 3.01802C8.03017 3.26467 7.8916 3.5992 7.8916 3.94801V11.8392Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.89263 11.8377H5.91983C5.0478 11.8377 4.21149 11.4913 3.59487 10.8747C2.97825 10.2581 2.63184 9.42174 2.63184 8.54971C2.63184 7.67768 2.97825 6.84137 3.59487 6.22475C4.21149 5.60813 5.0478 5.26172 5.91983 5.26172H7.89263" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ),
        title: "Inter-Collegiate Champions",
        description: "15 championships won in the last academic year",
    },
    {
        icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.48324 19.7304L3.49909 9.39293C3.24105 8.94691 3.11969 8.43492 3.15009 7.92054C3.18048 7.40615 3.36129 6.91202 3.67007 6.49949L5.78753 3.68497C6.03255 3.35829 6.35026 3.09313 6.7155 2.91051C7.08075 2.72789 7.48349 2.63281 7.89185 2.63281H23.6742C24.0826 2.63281 24.4853 2.72789 24.8506 2.91051C25.2158 3.09313 25.5335 3.35829 25.7785 3.68497L27.8829 6.49949C28.1937 6.91069 28.3768 7.40414 28.4096 7.91855C28.4423 8.43296 28.3232 8.94565 28.067 9.39293L22.0828 19.7304" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.4687 15.7835L6.73535 2.89453" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.0977 15.7835L24.831 2.89453" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5225 9.20703H21.044" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.782 28.9332C19.4139 28.9332 22.358 25.9891 22.358 22.3572C22.358 18.7254 19.4139 15.7812 15.782 15.7812C12.1502 15.7812 9.20605 18.7254 9.20605 22.3572C9.20605 25.9891 12.1502 28.9332 15.782 28.9332Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.7826 23.6734V21.043H15.125" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ),
        title: "National Representation",
        description: "20+ students selected for national tournaments",
    },
    {
        icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7819 28.9368C23.0455 28.9368 28.9338 23.0484 28.9338 15.7848C28.9338 8.52115 23.0455 2.63281 15.7819 2.63281C8.51822 2.63281 2.62988 8.52115 2.62988 15.7848C2.62988 23.0484 8.51822 28.9368 15.7819 28.9368Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.7818 23.673C20.14 23.673 23.673 20.14 23.673 15.7818C23.673 11.4236 20.14 7.89062 15.7818 7.89062C11.4236 7.89062 7.89062 11.4236 7.89062 15.7818C7.89062 20.14 11.4236 23.673 15.7818 23.673Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.7808 18.4131C17.2335 18.4131 18.4112 17.2355 18.4112 15.7827C18.4112 14.33 17.2335 13.1523 15.7808 13.1523C14.3281 13.1523 13.1504 14.33 13.1504 15.7827C13.1504 17.2355 14.3281 18.4131 15.7808 18.4131Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ),
        title: "Professional Coaching",
        description: "Expert coaches for various sports disciplines",
    },
    {
        icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.4609 17.0224C23.9611 17.5226 24.6395 17.8036 25.3469 17.8036C26.0543 17.8036 26.7327 17.5226 27.2329 17.0224C27.7331 16.5222 28.0141 15.8438 28.0141 15.1364C28.0141 14.429 27.7331 13.7506 27.2329 13.2504L24.8755 10.8944C25.3757 11.3944 26.0541 11.6752 26.7613 11.6751C27.1115 11.6751 27.4583 11.606 27.7818 11.4719C28.1053 11.3379 28.3993 11.1414 28.6469 10.8937C28.8945 10.646 29.0908 10.352 29.2248 10.0285C29.3588 9.70489 29.4277 9.35811 29.4276 9.00791C29.4275 8.65771 29.3585 8.31095 29.2244 7.98743C29.0904 7.66391 28.8939 7.36997 28.6462 7.12238L24.8755 3.35171C24.3755 2.85152 23.6973 2.57044 22.99 2.57031C22.2828 2.57019 21.6044 2.85103 21.1042 3.35105C20.604 3.85107 20.3229 4.52931 20.3228 5.23658C20.3227 5.94384 20.6035 6.62218 21.1035 7.12238L18.7475 4.76505C18.4999 4.51737 18.2058 4.32091 17.8822 4.18687C17.5586 4.05283 17.2118 3.98384 16.8615 3.98384C16.5113 3.98384 16.1644 4.05283 15.8408 4.18687C15.5172 4.32091 15.2232 4.51737 14.9755 4.76505C14.7279 5.01272 14.5314 5.30675 14.3974 5.63035C14.2633 5.95395 14.1943 6.30079 14.1943 6.65105C14.1943 7.00131 14.2633 7.34814 14.3974 7.67174C14.5314 7.99534 14.7279 8.28937 14.9755 8.53705L23.4609 17.0224Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.33301 28.6674L5.19967 26.8008" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.7998 5.1987L28.6665 3.33203" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.12433 28.6472C7.62436 29.1474 8.3026 29.4285 9.00986 29.4286C9.36006 29.4286 9.70685 29.3597 10.0304 29.2258C10.354 29.0918 10.648 28.8954 10.8957 28.6479C11.1433 28.4003 11.3398 28.1063 11.4739 27.7828C11.608 27.4593 11.677 27.1125 11.6771 26.7623C11.6771 26.4121 11.6082 26.0653 11.4743 25.7418C11.3403 25.4182 11.1439 25.1242 10.8963 24.8765L13.2523 27.2339C13.7525 27.734 14.4309 28.0151 15.1383 28.0151C15.8457 28.0151 16.5241 27.734 17.0243 27.2339C17.5245 26.7337 17.8055 26.0552 17.8055 25.3479C17.8055 24.6405 17.5245 23.9621 17.0243 23.4619L8.539 14.9765C8.29133 14.7288 7.9973 14.5324 7.6737 14.3983C7.3501 14.2643 7.00326 14.1953 6.653 14.1953C6.30274 14.1953 5.95591 14.2643 5.63231 14.3983C5.3087 14.5324 5.01467 14.7288 4.767 14.9765C4.51933 15.2242 4.32286 15.5182 4.18882 15.8418C4.05478 16.1654 3.98579 16.5123 3.98579 16.8625C3.98579 17.2128 4.05478 17.5596 4.18882 17.8832C4.32286 18.2068 4.51933 18.5008 4.767 18.7485L7.12433 21.1045C6.62414 20.6045 5.94579 20.3237 5.23853 20.3238C4.53127 20.3239 3.85302 20.605 3.353 21.1052C2.85298 21.6054 2.57214 22.2837 2.57227 22.991C2.57239 23.6983 2.85347 24.3765 3.35367 24.8765L7.12433 28.6472Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.7998 19.2008L19.1998 12.8008" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ),
        title: "Fitness Facilities",
        description: "Well-equipped gymnasium with basic fitness equipment for regular exercise and strength training",
    },
    {
        icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3337 16.0013H26.027C25.4443 16.0001 24.8772 16.1897 24.4125 16.5413C23.9478 16.8928 23.611 17.3869 23.4537 17.948L20.3203 29.0946C20.3001 29.1639 20.258 29.2247 20.2003 29.268C20.1426 29.3112 20.0724 29.3346 20.0003 29.3346C19.9282 29.3346 19.858 29.3112 19.8003 29.268C19.7426 29.2247 19.7005 29.1639 19.6803 29.0946L12.3203 2.90797C12.3001 2.83873 12.258 2.77791 12.2003 2.73464C12.1426 2.69136 12.0724 2.66797 12.0003 2.66797C11.9282 2.66797 11.858 2.69136 11.8003 2.73464C11.7426 2.77791 11.7005 2.83873 11.6803 2.90797L8.54699 14.0546C8.39028 14.6135 8.0555 15.106 7.59348 15.4573C7.13145 15.8086 6.56742 15.9996 5.98699 16.0013H2.66699" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ),
        title: "Indoor & Outdoor Games",
        description: "Courts for badminton, volleyball, and indoor games for recreational physical activity",
    },
    {
        icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66699 12.6674C2.66702 11.1836 3.11712 9.73482 3.95784 8.51226C4.79856 7.2897 5.99035 6.35092 7.3758 5.8199C8.76126 5.28889 10.2752 5.19063 11.7177 5.5381C13.1601 5.88556 14.4633 6.66241 15.455 7.76604C15.5248 7.84072 15.6093 7.90026 15.7031 7.94097C15.7969 7.98168 15.8981 8.00268 16.0003 8.00268C16.1026 8.00268 16.2038 7.98168 16.2976 7.94097C16.3914 7.90026 16.4758 7.84072 16.5457 7.76604C17.5342 6.65524 18.8377 5.87186 20.2825 5.52017C21.7273 5.16849 23.245 5.26517 24.6335 5.79735C26.022 6.32953 27.2155 7.27197 28.0551 8.49924C28.8948 9.72651 29.3407 11.1804 29.3337 12.6674C29.3337 15.7207 27.3337 18.0007 25.3337 20.0007L18.011 27.0847C17.7625 27.37 17.4562 27.5993 17.1124 27.7571C16.7685 27.915 16.395 27.9978 16.0167 28.0002C15.6384 28.0026 15.2639 27.9245 14.918 27.771C14.5722 27.6175 14.263 27.3922 14.011 27.11L6.66699 20.0007C4.66699 18.0007 2.66699 15.734 2.66699 12.6674Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ),
        title: "Stress Management",
        description: "Yoga sessions and wellness programs to help students manage academic stress effectively",
    },
];



const SportsWellbeing = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Sports & Wellbeing
            </h1>

            <InfoCardGrid
                items={items}
                gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[40px]"
                cardClassName="bg-white rounded-[16.2px] p-[30px] border border-[#e5e5e5] h-full flex flex-col items-start transition-shadow"
                iconContainerClassName="w-[63.1px] h-[63.1px] bg-[rgba(34,63,127,0.1)] rounded-[12px] flex items-center justify-center text-[#223F7F] mb-[12px] flex-shrink-0"
                titleClassName="text-[#223F7F] font-medium text-[22px] leading-[1.2] mb-[12px] font-montserrat"
                descriptionClassName="text-[rgba(25,25,25,0.75)] text-[18px] leading-[1.44] font-montserrat flex-1"
            />

            <div className="bg-white border-l-[5px] border-[#223F7F] p-[30px] rounded-[12px] flex flex-col items-start gap-[12px] shadow-sm">

                <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                    Sports and physical activities are scheduled to complement academic routines, not replace them. We encourage healthy lifestyle habits while maintaining focus on healthcare education as the primary objective of campus life.                </p>
            </div>
        </PageSection>
    );
};

export default SportsWellbeing;
