import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { HiOutlineUserGroup, HiOutlineChatAlt2, HiOutlineHeart, HiOutlineGlobe } from "react-icons/hi";

const items = [
    {
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.12891C16.8578 3.35128 17.6174 3.85217 18.1597 4.55297C18.702 5.25377 18.9962 6.1148 18.9962 7.00091C18.9962 7.88702 18.702 8.74805 18.1597 9.44884C17.6174 10.1496 16.8578 10.6505 16 10.8729" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 20.9989V18.9989C21.9993 18.1126 21.7044 17.2517 21.1614 16.5512C20.6184 15.8508 19.8581 15.3505 19 15.1289" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Peer Learning Groups",
        description: "Collaborative study groups and discussion forums facilitate knowledge sharing and academic support.",
    },
    {
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5ZM4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11H16" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 7H14" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Academic Collaboration",
        description: "Team-based projects and case studies promote professional teamwork essential in healthcare settings.",
    },
    {
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.50053C2.00002 8.38773 2.33759 7.30111 2.96813 6.38419C3.59867 5.46727 4.49252 4.76319 5.53161 4.36493C6.5707 3.96667 7.70616 3.89297 8.78801 4.15357C9.86987 4.41417 10.8472 4.99681 11.591 5.82453C11.6434 5.88054 11.7067 5.9252 11.7771 5.95573C11.8474 5.98626 11.9233 6.00201 12 6.00201C12.0767 6.00201 12.1526 5.98626 12.2229 5.95573C12.2933 5.9252 12.3566 5.88054 12.409 5.82453C13.1504 4.99143 14.128 4.4039 15.2116 4.14013C16.2952 3.87636 17.4335 3.94887 18.4749 4.34801C19.5163 4.74715 20.4114 5.45398 21.0411 6.37443C21.6708 7.29488 22.0053 8.38529 22 9.50053C22 11.7905 20.5 13.5005 19 15.0005L13.508 20.3135C13.3217 20.5275 13.0919 20.6994 12.834 20.8178C12.5762 20.9362 12.296 20.9984 12.0123 21.0002C11.7285 21.002 11.4476 20.9434 11.1883 20.8283C10.9289 20.7131 10.697 20.5442 10.508 20.3325L5 15.0005C3.5 13.5005 2 11.8005 2 9.50053Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.21973 13H9.49973L9.99973 12L11.9997 16.5L13.9997 9.5L15.4997 13H20.7697" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Health Awareness Initiatives",
        description: "Student-led health camps, awareness drives, and community service programs in surrounding areas.",
    },
    {
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V5" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.598 6.50013C17.8281 6.10162 17.9635 5.65551 17.9936 5.19633C18.0237 4.73714 17.9478 4.27718 17.7717 3.85203C17.5956 3.42687 17.324 3.04793 16.9781 2.74451C16.6321 2.44109 16.221 2.22133 15.7765 2.10223C15.332 1.98312 14.866 1.96787 14.4147 2.05765C13.9634 2.14743 13.5387 2.33983 13.1737 2.61998C12.8086 2.90012 12.5129 3.2605 12.3093 3.67322C12.1058 4.08595 12 4.53996 12 5.00013C12 4.53996 11.8942 4.08595 11.6907 3.67322C11.4871 3.2605 11.1914 2.90012 10.8263 2.61998C10.4613 2.33983 10.0366 2.14743 9.5853 2.05765C9.13396 1.96787 8.66803 1.98312 8.22353 2.10223C7.77904 2.22133 7.3679 2.44109 7.02193 2.74451C6.67596 3.04793 6.40442 3.42687 6.22833 3.85203C6.05224 4.27718 5.97632 4.73714 6.00643 5.19633C6.03655 5.65551 6.17189 6.10162 6.402 6.50013" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9971 5.125C18.5849 5.27614 19.1306 5.55905 19.5928 5.95231C20.0551 6.34557 20.4218 6.83887 20.6652 7.39485C20.9086 7.95082 21.0223 8.55489 20.9977 9.16131C20.9731 9.76773 20.8108 10.3606 20.5231 10.895" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 17.9992C18.8805 17.9991 19.7364 17.7086 20.4349 17.1725C21.1335 16.6365 21.6356 15.8849 21.8635 15.0344C22.0914 14.1839 22.0323 13.282 21.6954 12.4685C21.3585 11.655 20.7625 10.9754 20 10.5352" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.967 17.4844C20.0371 18.0266 19.9953 18.5775 19.8441 19.1029C19.693 19.6283 19.4357 20.1172 19.0882 20.5393C18.7407 20.9614 18.3104 21.3078 17.8238 21.5571C17.3372 21.8064 16.8046 21.9533 16.259 21.9887C15.7134 22.0241 15.1664 21.9473 14.6516 21.763C14.1369 21.5787 13.6654 21.2908 13.2662 20.9171C12.8671 20.5435 12.5488 20.0919 12.331 19.5904C12.1132 19.0889 12.0006 18.5481 12 18.0014C11.9994 18.5481 11.8867 19.0889 11.669 19.5904C11.4512 20.0919 11.1329 20.5435 10.7338 20.9171C10.3346 21.2908 9.86313 21.5787 9.34838 21.763C8.83364 21.9473 8.28657 22.0241 7.74097 21.9887C7.19537 21.9533 6.66283 21.8064 6.17622 21.5571C5.68961 21.3078 5.25927 20.9614 4.91178 20.5393C4.56429 20.1172 4.30703 19.6283 4.15589 19.1029C4.00474 18.5775 3.96291 18.0266 4.033 17.4844" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99983 17.9992C5.11932 17.9991 4.26343 17.7086 3.56489 17.1725C2.86635 16.6365 2.3642 15.8849 2.1363 15.0344C1.90841 14.1839 1.96751 13.282 2.30444 12.4685C2.64137 11.655 3.23731 10.9754 3.99983 10.5352" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.00293 5.125C5.41513 5.27614 4.86943 5.55905 4.40716 5.95231C3.94489 6.34557 3.57817 6.83887 3.33477 7.39485C3.09138 7.95082 2.97769 8.55489 3.00232 9.16131C3.02695 9.76773 3.18925 10.3606 3.47693 10.895" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
        title: "Professional Development",
        description: "Regular seminars, journal clubs, and skill-building workshops to enhance clinical competencies.",
    },
];

const StudentLifeCommunity = () => { 
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Student Life & Community
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {items.map((item, index) => (
                    <div style={{border: "solid 1px #e0e0e0"
}} key={index} className="bg-[#FFF] p-[30px] rounded-[12px] flex items-start gap-5">
                        <div className="bg-[#223F7F]/10 p-3 rounded-[8px] flex-shrink-0">
                            {item.icon}
                        </div>
                        <div>
                           <h6 className={`${T.font.family} font-medium text-[22px] text-[#223F7F] mb-3`}>
                                {item.title}
                            </h6>
                        <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default StudentLifeCommunity;
