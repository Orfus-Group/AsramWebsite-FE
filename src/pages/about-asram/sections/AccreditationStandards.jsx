import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const Icons = {
    MCI: (
       <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3466 16.9453L22.3383 28.1541C22.3606 28.2861 22.3421 28.4218 22.2852 28.543C22.2284 28.6641 22.1359 28.7651 22.0201 28.8322C21.9043 28.8994 21.7708 28.9297 21.6373 28.9189C21.5039 28.9081 21.377 28.8569 21.2734 28.772L16.5669 25.2395C16.3397 25.0698 16.0637 24.9781 15.7801 24.9781C15.4965 24.9781 15.2205 25.0698 14.9933 25.2395L10.2789 28.7707C10.1755 28.8554 10.0486 28.9066 9.91538 28.9174C9.78212 28.9281 9.64874 28.898 9.53304 28.831C9.41733 28.764 9.32481 28.6633 9.26781 28.5424C9.21081 28.4215 9.19204 28.286 9.21402 28.1541L11.2044 16.9453" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7762 18.4049C20.1326 18.4049 23.6642 14.8733 23.6642 10.5169C23.6642 6.16048 20.1326 2.62891 15.7762 2.62891C11.4198 2.62891 7.88818 6.16048 7.88818 10.5169C7.88818 14.8733 11.4198 18.4049 15.7762 18.4049Z" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    NAAC: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12L11 14L15 10" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    ISO: (
       <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.152 3.01659C15.2096 2.90019 15.2986 2.80221 15.4089 2.73371C15.5193 2.66521 15.6466 2.62891 15.7765 2.62891C15.9063 2.62891 16.0336 2.66521 16.144 2.73371C16.2543 2.80221 16.3433 2.90019 16.4009 3.01659L19.4378 9.16791C19.6379 9.57278 19.9332 9.92306 20.2984 10.1887C20.6636 10.4543 21.0879 10.6273 21.5347 10.6929L28.3262 11.6868C28.4549 11.7055 28.5758 11.7597 28.6753 11.8435C28.7747 11.9273 28.8487 12.0372 28.8889 12.1609C28.9292 12.2845 28.934 12.417 28.9028 12.5432C28.8717 12.6695 28.8059 12.7845 28.7128 12.8753L23.8012 17.658C23.4773 17.9737 23.2349 18.3633 23.095 18.7934C22.955 19.2235 22.9217 19.6811 22.9979 20.127L24.1574 26.8843C24.1802 27.013 24.1663 27.1454 24.1173 27.2665C24.0684 27.3876 23.9864 27.4925 23.8808 27.5693C23.7751 27.646 23.65 27.6915 23.5197 27.7006C23.3894 27.7097 23.2591 27.6819 23.1438 27.6205L17.0727 24.4285C16.6727 24.2185 16.2276 24.1087 15.7758 24.1087C15.324 24.1087 14.8789 24.2185 14.4789 24.4285L8.40907 27.6205C8.29382 27.6816 8.16375 27.709 8.03367 27.6998C7.90359 27.6905 7.77872 27.6449 7.67325 27.5682C7.56778 27.4915 7.48596 27.3868 7.43708 27.2659C7.38821 27.145 7.37425 27.0128 7.39678 26.8843L8.555 20.1283C8.63151 19.6822 8.59836 19.2243 8.45842 18.7939C8.31848 18.3636 8.07595 17.9737 7.75174 17.658L2.84015 12.8766C2.74628 12.7859 2.67976 12.6707 2.64816 12.5441C2.61657 12.4174 2.62118 12.2845 2.66146 12.1603C2.70175 12.0362 2.77609 11.9259 2.87601 11.8419C2.97594 11.758 3.09744 11.7038 3.22667 11.6855L10.0169 10.6929C10.4642 10.6278 10.889 10.455 11.2548 10.1894C11.6205 9.92373 11.9162 9.57318 12.1164 9.16791L15.152 3.01659Z" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    NABH: (
       <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7751 28.9222C23.0358 28.9222 28.9217 23.0362 28.9217 15.7756C28.9217 8.51486 23.0358 2.62891 15.7751 2.62891C8.51437 2.62891 2.62842 8.51486 2.62842 15.7756C2.62842 23.0362 8.51437 28.9222 15.7751 28.9222Z" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.832 15.7739L14.4614 18.4032L19.72 13.1445" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    Award: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2M12 22a8.18 8.18 0 01-3.235-.649m8.494-2.192A8.18 8.18 0 0112 22m0 0V10M2 10h20" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 17v5" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 21C5 21 5 10 12 10C19 10 19 21 19 21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 21H19" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Trophy: (
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7169 10.5898L13.9617 17.5954C13.9756 17.6779 13.9641 17.7626 13.9285 17.8384C13.893 17.9141 13.8352 17.9772 13.7628 18.0192C13.6904 18.0612 13.607 18.0801 13.5236 18.0733C13.4402 18.0666 13.3608 18.0346 13.2961 17.9815L10.3546 15.7737C10.2126 15.6676 10.0401 15.6103 9.86281 15.6103C9.68555 15.6103 9.51305 15.6676 9.37104 15.7737L6.42455 17.9807C6.3599 18.0337 6.28065 18.0656 6.19736 18.0724C6.11407 18.0791 6.03071 18.0603 5.95839 18.0184C5.88608 17.9765 5.82825 17.9136 5.79263 17.838C5.757 17.7624 5.74527 17.6778 5.759 17.5954L7.00301 10.5898" stroke="#223F7F" stroke-width="1.64333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.85968 11.5006C12.5824 11.5006 14.7897 9.29338 14.7897 6.57062C14.7897 3.84786 12.5824 1.64062 9.85968 1.64062C7.13692 1.64062 4.92969 3.84786 4.92969 6.57062C4.92969 9.29338 7.13692 11.5006 9.85968 11.5006Z" stroke="#223F7F" stroke-width="1.64333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
};

const accreditations = [
    {
        title: "MCI Approved",
        sub: "Recognized by Medical Council of India",
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3466 16.9453L22.3383 28.1541C22.3606 28.2861 22.3421 28.4218 22.2852 28.543C22.2284 28.6641 22.1359 28.7651 22.0201 28.8322C21.9043 28.8994 21.7708 28.9297 21.6373 28.9189C21.5039 28.9081 21.377 28.8569 21.2734 28.772L16.5669 25.2395C16.3397 25.0698 16.0637 24.9781 15.7801 24.9781C15.4965 24.9781 15.2205 25.0698 14.9933 25.2395L10.2789 28.7707C10.1755 28.8554 10.0486 28.9066 9.91538 28.9174C9.78212 28.9281 9.64874 28.898 9.53304 28.831C9.41733 28.764 9.32481 28.6633 9.26781 28.5424C9.21081 28.4215 9.19204 28.286 9.21402 28.1541L11.2044 16.9453" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7762 18.4049C20.1326 18.4049 23.6642 14.8733 23.6642 10.5169C23.6642 6.16048 20.1326 2.62891 15.7762 2.62891C11.4198 2.62891 7.88818 6.16048 7.88818 10.5169C7.88818 14.8733 11.4198 18.4049 15.7762 18.4049Z" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        ) // Ribbon/Medal 
    },
    {
        title: "NAAC Accredited",
        sub: "A+ Grade by National Assessment Council",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ) // Shield
    },
    {
        title: "ISO Certified",
        sub: "ISO 9001:2015 Quality Management",
        icon: Icons.ISO // Star
    },
    {
        title: "NABH Accredited",
        sub: "National Accreditation Board for Hospitals",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1954 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1004 1.98232 16.07 2.85999" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 4L12 14.01L9 11.01" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ) // Check Circle? Actually image showed a check inside a square or circle.
    },
];

const awards = [
    "Best Medical College Award 2023",
    "Excellence in Healthcare Education",
    "Top 50 Medical Institutions in India",
    "Outstanding Research Contribution Award",
    "Best Hospital Infrastructure Award",
    "Patient Safety Excellence Recognition"
];

const AccreditationStandards = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            {/* Accreditation Section */}
            <div className="mb-[40px]">
                <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                    Accreditation Standards
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                    {accreditations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#EEF2F7] p-[20px] rounded-[12px] flex flex-col items-center text-center border border-[#E5E5E5] h-full sm:h-[220px] justify-center"
                        >
                            <div className="w-[63px] h-[63px] bg-white rounded-[8px] flex items-center justify-center mb-4">
                                {index === 0 ? (
                                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3466 16.9453L22.3383 28.1541C22.3606 28.2861 22.3421 28.4218 22.2852 28.543C22.2284 28.6641 22.1359 28.7651 22.0201 28.8322C21.9043 28.8994 21.7708 28.9297 21.6373 28.9189C21.5039 28.9081 21.377 28.8569 21.2734 28.772L16.5669 25.2395C16.3397 25.0698 16.0637 24.9781 15.7801 24.9781C15.4965 24.9781 15.2205 25.0698 14.9933 25.2395L10.2789 28.7707C10.1755 28.8554 10.0486 28.9066 9.91538 28.9174C9.78212 28.9281 9.64874 28.898 9.53304 28.831C9.41733 28.764 9.32481 28.6633 9.26781 28.5424C9.21081 28.4215 9.19204 28.286 9.21402 28.1541L11.2044 16.9453" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7762 18.4049C20.1326 18.4049 23.6642 14.8733 23.6642 10.5169C23.6642 6.16048 20.1326 2.62891 15.7762 2.62891C11.4198 2.62891 7.88818 6.16048 7.88818 10.5169C7.88818 14.8733 11.4198 18.4049 15.7762 18.4049Z" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                ) : index === 1 ? (
                                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.2924 17.0908C26.2924 23.6641 21.6911 26.9508 16.2221 28.8571C15.9357 28.9541 15.6246 28.9495 15.3413 28.8439C9.85914 26.9508 5.25781 23.6641 5.25781 17.0908V7.88816C5.25781 7.53949 5.39632 7.2051 5.64287 6.95855C5.88942 6.712 6.22381 6.57349 6.57248 6.57349C9.20181 6.57349 12.4885 4.99589 14.776 2.9976C15.0545 2.75965 15.4088 2.62891 15.7751 2.62891C16.1415 2.62891 16.4958 2.75965 16.7743 2.9976C19.0749 5.00904 22.3485 6.57349 24.9778 6.57349C25.3265 6.57349 25.6608 6.712 25.9074 6.95855C26.1539 7.2051 26.2924 7.53949 26.2924 7.88816V17.0908Z" stroke="#223F7F" stroke-width="2.62933" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                ) : index === 2 ? (
                                    Icons.ISO
                                ) : (
                                    Icons.NABH
                                )}
                            </div>
                            <h3 className={`${T.font.family} font-medium text-[18px] text-[#191919] mb-2`}>
                                {item.title}
                            </h3>
                            <p className={`${T.font.family} text-[14px] text-[#191919BF] font-regular leading-[20px]`}>
                                {item.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards Section */}
            <div className="bg-[#EEF2F7] rounded-[16px] p-[40px] text-center border border-[#E5E5E5]">
                <h4 className={`${T.font.family} font-semibold text-[28px] md:text-[32px] text-[#223F7F] mb-2`}>
                    Awards & Achievements
                </h4>
                <p className={`${T.font.family} font-regular leading-[26px] text-[18px] text-[#4B5563] mb-[32px]`}>
                    Celebrating milestones in healthcare excellence
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {awards.map((award, index) => (
                        <div key={index} className="bg-white py-[12px] px-[20px] rounded-[8px] border border-[#E5E5E5] flex items-center justify-start gap-[12px] h-[60px] text-left">
                            <div className="flex-shrink-0 text-[#223F7F]">
                                {Icons.Trophy}
                            </div>
                            <span className={`${T.font.family} font-medium text-[#374151] text-[14px] md:text-[15px] leading-tight`}>
                                {award}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default AccreditationStandards;
