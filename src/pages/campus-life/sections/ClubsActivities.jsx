import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCardGrid from "@/components/common/InfoCardGrid";

const items = [
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3564 20.7151V5.75472L24.166 3.45312V18.4135" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.90357 24.1665C8.81027 24.1665 10.356 22.6208 10.356 20.7141C10.356 18.8074 8.81027 17.2617 6.90357 17.2617C4.99686 17.2617 3.45117 18.8074 3.45117 20.7141C3.45117 22.6208 4.99686 24.1665 6.90357 24.1665Z" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.7141 21.8657C22.6208 21.8657 24.1665 20.32 24.1665 18.4133C24.1665 16.5066 22.6208 14.9609 20.7141 14.9609C18.8074 14.9609 17.2617 16.5066 17.2617 18.4133C17.2617 20.32 18.8074 21.8657 20.7141 21.8657Z" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Music Society",
        description: "Explore your musical talents through performances and workshops.",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8088 25.3167C10.7567 25.3167 7.82955 24.1043 5.67139 21.9461C3.51323 19.788 2.30078 16.8609 2.30078 13.8088C2.30078 10.7567 3.51323 7.82955 5.67139 5.67139C7.82955 3.51323 10.7567 2.30078 13.8088 2.30078C16.8609 2.30078 19.788 3.39198 21.9461 5.33433C24.1043 7.27668 25.3167 9.91107 25.3167 12.658C25.3167 14.184 24.7105 15.6476 23.6314 16.7266C22.5524 17.8057 21.0888 18.412 19.5627 18.412H16.9735C16.5994 18.412 16.2328 18.5161 15.9147 18.7127C15.5965 18.9093 15.3394 19.1907 15.1722 19.5252C15.0049 19.8597 14.9341 20.2342 14.9677 20.6067C15.0013 20.9792 15.1379 21.335 15.3623 21.6342L15.7076 22.0945C15.932 22.3937 16.0686 22.7495 16.1022 23.122C16.1358 23.4945 16.065 23.869 15.8977 24.2035C15.7305 24.538 15.4734 24.8193 15.1552 25.016C14.8371 25.2126 14.4705 25.3167 14.0965 25.3167H13.8088Z" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.5354 8.05705C15.8531 8.05705 16.1108 7.79943 16.1108 7.48165C16.1108 7.16386 15.8531 6.90625 15.5354 6.90625C15.2176 6.90625 14.96 7.16386 14.96 7.48165C14.96 7.79943 15.2176 8.05705 15.5354 8.05705Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.1379 12.6586C20.4557 12.6586 20.7133 12.401 20.7133 12.0832C20.7133 11.7654 20.4557 11.5078 20.1379 11.5078C19.8201 11.5078 19.5625 11.7654 19.5625 12.0832C19.5625 12.401 19.8201 12.6586 20.1379 12.6586Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.47872 14.9594C7.7965 14.9594 8.05412 14.7018 8.05412 14.384C8.05412 14.0662 7.7965 13.8086 7.47872 13.8086C7.16094 13.8086 6.90332 14.0662 6.90332 14.384C6.90332 14.7018 7.16094 14.9594 7.47872 14.9594Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.78048 9.20549C10.0983 9.20549 10.3559 8.94787 10.3559 8.63009C10.3559 8.3123 10.0983 8.05469 9.78048 8.05469C9.46269 8.05469 9.20508 8.3123 9.20508 8.63009C9.20508 8.94787 9.46269 9.20549 9.78048 9.20549Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Arts Club",
        description: "Express creativity through painting, sculpture, and exhibitions.",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5078 12.6602H11.5195" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.1104 6.90625H16.122" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.7139 6.90625H20.7255" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.47949 15.0742H7.49116" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.3174 5.75318C25.3174 16.1104 20.7142 19.5628 18.4126 19.5628C16.111 19.5628 11.5078 16.1104 11.5078 5.75318C11.5078 3.45158 13.8094 2.30078 18.4126 2.30078C23.0158 2.30078 25.3174 3.45158 25.3174 5.75318Z" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.023 11.3945C19.1024 12.3152 17.7214 12.3152 16.8008 11.3945" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.624 8.17188C10.3582 8.28695 8.86212 8.86235 6.90577 9.89807C2.87797 12.1997 1.49701 14.3862 2.64781 16.3425C7.8264 25.3188 13.5804 26.0092 15.5367 24.8584C16.5725 24.283 17.7233 22.4418 17.7233 19.4497" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.4717 18.9887C10.8169 17.7229 12.0828 17.0324 13.2336 17.3776" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Theater Group",
        description: "Participate in drama productions and theatrical performances to increase mood.",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1059 4.60547C16.5211 4.60546 16.9286 4.71777 17.2852 4.9305C17.6417 5.14322 17.9341 5.44844 18.1313 5.81381L18.6906 6.84952C18.8878 7.21489 19.1802 7.52011 19.5368 7.73284C19.8934 7.94556 20.3008 8.05787 20.716 8.05786H23.0142C23.6246 8.05786 24.21 8.30035 24.6416 8.73198C25.0733 9.16362 25.3158 9.74904 25.3158 10.3595V20.7166C25.3158 21.3271 25.0733 21.9125 24.6416 22.3441C24.21 22.7757 23.6246 23.0182 23.0142 23.0182H4.6014C3.99098 23.0182 3.40556 22.7757 2.97393 22.3441C2.54229 21.9125 2.2998 21.3271 2.2998 20.7166V10.3595C2.2998 9.74904 2.54229 9.16362 2.97393 8.73198C3.40556 8.30035 3.99098 8.05786 4.6014 8.05786H6.89954C7.31432 8.05788 7.72139 7.94582 8.07771 7.73353C8.43403 7.52123 8.72637 7.2166 8.9238 6.85183L9.48654 5.8115C9.68397 5.44674 9.9763 5.1421 10.3326 4.9298C10.6889 4.71751 11.096 4.60545 11.5108 4.60547H16.1059Z" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8088 18.4126C15.7155 18.4126 17.2612 16.8669 17.2612 14.9602C17.2612 13.0535 15.7155 11.5078 13.8088 11.5078C11.9021 11.5078 10.3564 13.0535 10.3564 14.9602C10.3564 16.8669 11.9021 18.4126 13.8088 18.4126Z" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Photography Club",
        description: "Capture moments and develop photography skills.",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.787 17.2617H19.5623C18.9519 17.2617 18.3665 17.5042 17.9349 17.9358C17.5032 18.3675 17.2607 18.9529 17.2607 19.5633V24.7879" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.05469 3.84375V5.75407C8.05469 6.66971 8.41842 7.54784 9.06587 8.19529C9.71332 8.84273 10.5914 9.20647 11.5071 9.20647C12.1175 9.20647 12.7029 9.44896 13.1346 9.88059C13.5662 10.3122 13.8087 10.8976 13.8087 11.5081C13.8087 12.7739 14.8444 13.8097 16.1103 13.8097C16.7207 13.8097 17.3061 13.5672 17.7377 13.1355C18.1694 12.7039 18.4119 12.1185 18.4119 11.5081C18.4119 10.2422 19.4476 9.20647 20.7135 9.20647H24.3615" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.6571 25.2614V20.7157C12.6571 20.1053 12.4146 19.5199 11.9829 19.0883C11.5513 18.6566 10.9659 18.4141 10.3555 18.4141C9.74505 18.4141 9.15963 18.1717 8.72799 17.74C8.29636 17.3084 8.05387 16.723 8.05387 16.1126V14.9618C8.05387 14.3513 7.81138 13.7659 7.37975 13.3343C6.94812 12.9026 6.3627 12.6602 5.75228 12.6602H2.35742" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8088 25.3167C20.1644 25.3167 25.3167 20.1644 25.3167 13.8088C25.3167 7.45308 20.1644 2.30078 13.8088 2.30078C7.45308 2.30078 2.30078 7.45308 2.30078 13.8088C2.30078 20.1644 7.45308 25.3167 13.8088 25.3167Z" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Cultural Society",
        description: "Celebrate diversity through cultural festivals and events.",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4131 20.7158L25.3179 13.811L18.4131 6.90625" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.20654 6.90625L2.30176 13.811L9.20654 20.7158" stroke="#223F7F" stroke-width="2.3016" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Tech Club",
        description: "Explore coding, robotics, and technological innovations.",
    },
];

const ClubsActivities = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:pt-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Clubs & Activities
            </h1>

            <InfoCardGrid
                items={items}
                gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
                cardClassName="bg-[#EEF2F7] rounded-[12px] p-[30px] border border-[rgba(7,7,7,0.2)] h-full flex flex-col items-start hover:shadow-md transition-shadow"
                iconContainerClassName="w-[55.2px] h-[55.2px] bg-white rounded-[12px] flex items-center justify-center text-[#223F7F] mb-[12px] flex-shrink-0"
                titleClassName="text-[#223F7F] font-medium text-[22px] leading-[1.2] mb-[12px] font-montserrat"
                descriptionClassName="text-[#4B5563] text-[18px] leading-[1.44] font-montserrat flex-1"
            />
        </PageSection>
    );
};

export default ClubsActivities;
