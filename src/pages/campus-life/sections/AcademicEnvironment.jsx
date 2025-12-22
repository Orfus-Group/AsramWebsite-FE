import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { HiOutlineBookOpen, HiOutlineDesktopComputer, HiOutlineLibrary, HiOutlineBeaker } from "react-icons/hi";

const items = [
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 7V14L18.6667 16.3333" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9997 25.6654C20.443 25.6654 25.6663 20.442 25.6663 13.9987C25.6663 7.55538 20.443 2.33203 13.9997 2.33203C7.55635 2.33203 2.33301 7.55538 2.33301 13.9987C2.33301 20.442 7.55635 25.6654 13.9997 25.6654Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Structured Schedules",
        description: "Carefully planned timetables ensuring balanced theory, practicals, and clinical exposure with optimal learning hours.        ",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6663 24.5V22.1667C18.6663 20.929 18.1747 19.742 17.2995 18.8668C16.4243 17.9917 15.2374 17.5 13.9997 17.5H6.99967C5.762 17.5 4.57501 17.9917 3.69984 18.8668C2.82467 19.742 2.33301 20.929 2.33301 22.1667V24.5" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.667 3.64844C19.6677 3.90787 20.554 4.49225 21.1866 5.30984C21.8193 6.12744 22.1626 7.13197 22.1626 8.16577C22.1626 9.19957 21.8193 10.2041 21.1866 11.0217C20.554 11.8393 19.6677 12.4237 18.667 12.6831" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.667 24.5007V22.1673C25.6662 21.1334 25.3221 20.1289 24.6886 19.3117C24.0551 18.4945 23.1681 17.9108 22.167 17.6523" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4997 12.8333C13.077 12.8333 15.1663 10.744 15.1663 8.16667C15.1663 5.58934 13.077 3.5 10.4997 3.5C7.92235 3.5 5.83301 5.58934 5.83301 8.16667C5.83301 10.744 7.92235 12.8333 10.4997 12.8333Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Faculty Guidance",
        description: "Experienced healthcare professionals and academicians providing continuous mentorship and subject expertise.",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 8.16797V24.5013" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.49967 21C3.19026 21 2.89351 20.8771 2.67472 20.6583C2.45592 20.4395 2.33301 20.1428 2.33301 19.8333V4.66667C2.33301 4.35725 2.45592 4.0605 2.67472 3.84171C2.89351 3.62292 3.19026 3.5 3.49967 3.5H9.33301C10.5707 3.5 11.7577 3.99167 12.6328 4.86683C13.508 5.742 13.9997 6.92899 13.9997 8.16667C13.9997 6.92899 14.4913 5.742 15.3665 4.86683C16.2417 3.99167 17.4287 3.5 18.6663 3.5H24.4997C24.8091 3.5 25.1058 3.62292 25.3246 3.84171C25.5434 4.0605 25.6663 4.35725 25.6663 4.66667V19.8333C25.6663 20.1428 25.5434 20.4395 25.3246 20.6583C25.1058 20.8771 24.8091 21 24.4997 21H17.4997C16.5714 21 15.6812 21.3687 15.0248 22.0251C14.3684 22.6815 13.9997 23.5717 13.9997 24.5C13.9997 23.5717 13.6309 22.6815 12.9745 22.0251C12.3182 21.3687 11.4279 21 10.4997 21H3.49967Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Focused Learning Culture",
        description: "Disciplined classroom environment emphasizing active participation, regular assessments, and knowledge retention.",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0562 15.0391L19.8237 24.9861C19.8435 25.1032 19.8271 25.2236 19.7766 25.3311C19.7261 25.4386 19.644 25.5282 19.5413 25.5878C19.4386 25.6474 19.3201 25.6743 19.2016 25.6647C19.0832 25.6552 18.9706 25.6097 18.8787 25.5344L14.702 22.3996C14.5004 22.2489 14.2555 22.1675 14.0038 22.1675C13.7521 22.1675 13.5072 22.2489 13.3055 22.3996L9.12188 25.5332C9.03008 25.6084 8.91755 25.6538 8.79929 25.6634C8.68103 25.6729 8.56266 25.6462 8.45998 25.5867C8.35731 25.5273 8.2752 25.4379 8.22462 25.3306C8.17403 25.2233 8.15738 25.1031 8.17688 24.9861L9.94321 15.0391" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 16.332C17.866 16.332 21 13.198 21 9.33203C21 5.46604 17.866 2.33203 14 2.33203C10.134 2.33203 7 5.46604 7 9.33203C7 13.198 10.134 16.332 14 16.332Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Academic Excellence",
        description: "Curriculum aligned with national standards, regular examinations, and continuous performance evaluation systems.",
    },
];

const AcademicEnvironment = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Academic Environment
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                {items.map((item, index) => (
                    <div style={{border: "solid 1px #e0e0e0"
}} key={index} className="bg-white p-[30px] rounded-[12px] flex flex-col items-start shadow-sm ">
<div className="bg-[#223F7F]/10 p-3 rounded-[8px] mb-4">
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
        </PageSection>
    );
};

export default AcademicEnvironment;
