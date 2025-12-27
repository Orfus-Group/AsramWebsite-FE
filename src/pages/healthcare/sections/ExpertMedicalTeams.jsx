import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import TeamImg from "@/assets/healthcare/experienceddoctors.png";

const IconQualified = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0195 10.3228L16.897 12.2002L20.6519 8.44531" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.02 19.7105V17.833C15.02 16.8372 14.6244 15.8821 13.9203 15.1779C13.2161 14.4737 12.261 14.0781 11.2652 14.0781H5.63282C4.63696 14.0781 3.68189 14.4737 2.97771 15.1779C2.27353 15.8821 1.87793 16.8372 1.87793 17.833V19.7105" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.44825 10.3301C10.522 10.3301 12.2031 8.64897 12.2031 6.5752C12.2031 4.50143 10.522 2.82031 8.44825 2.82031C6.37448 2.82031 4.69336 4.50143 4.69336 6.5752C4.69336 8.64897 6.37448 10.3301 8.44825 10.3301Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconFaculty = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.1078 10.2469C20.2758 10.1728 20.4184 10.051 20.5179 9.89662C20.6174 9.74223 20.6695 9.56205 20.6676 9.37838C20.6657 9.19472 20.6099 9.01565 20.5073 8.86335C20.4046 8.71105 20.2595 8.59222 20.0899 8.52158L12.0442 4.85681C11.7996 4.74524 11.5339 4.6875 11.265 4.6875C10.9962 4.6875 10.7305 4.74524 10.4859 4.85681L2.44103 8.51782C2.27391 8.59102 2.13174 8.71133 2.03191 8.86404C1.93207 9.01675 1.87891 9.19524 1.87891 9.37769C1.87891 9.56014 1.93207 9.73863 2.03191 9.89135C2.13174 10.0441 2.27391 10.1644 2.44103 10.2376L10.4859 13.9061C10.7305 14.0177 10.9962 14.0754 11.265 14.0754C11.5339 14.0754 11.7996 14.0177 12.0442 13.9061L20.1078 10.2469Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.6523 9.38281V15.0151" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.63281 11.7344V15.0199C5.63281 15.7668 6.22622 16.4831 7.28249 17.0112C8.33875 17.5394 9.77136 17.8361 11.2651 17.8361C12.7589 17.8361 14.1915 17.5394 15.2478 17.0112C16.3041 16.4831 16.8975 15.7668 16.8975 15.0199V11.7344" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconContinuous = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5287 12.1016L15.9509 20.1051C15.9668 20.1994 15.9536 20.2962 15.913 20.3827C15.8724 20.4693 15.8063 20.5413 15.7237 20.5893C15.641 20.6373 15.5456 20.6589 15.4504 20.6512C15.3551 20.6435 15.2644 20.6069 15.1905 20.5463L11.8299 18.024C11.6677 17.9028 11.4706 17.8373 11.2681 17.8373C11.0656 17.8373 10.8685 17.9028 10.7062 18.024L7.33999 20.5454C7.26613 20.6059 7.17558 20.6424 7.08043 20.6501C6.98527 20.6578 6.89003 20.6363 6.80742 20.5884C6.7248 20.5406 6.65874 20.4687 6.61804 20.3823C6.57734 20.296 6.56394 20.1993 6.57962 20.1051L8.00085 12.1016" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.2651 13.1475C14.3758 13.1475 16.8975 10.6258 16.8975 7.51515C16.8975 4.40449 14.3758 1.88281 11.2651 1.88281C8.15449 1.88281 5.63281 4.40449 5.63281 7.51515C5.63281 10.6258 8.15449 13.1475 11.2651 13.1475Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconMulti = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.02 19.7105V17.833C15.02 16.8372 14.6244 15.8821 13.9203 15.1779C13.2161 14.4737 12.261 14.0781 11.2652 14.0781H5.63282C4.63696 14.0781 3.68189 14.4737 2.97771 15.1779C2.27353 15.8821 1.87793 16.8372 1.87793 17.833V19.7105" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.0195 2.92969C15.8247 3.13843 16.5378 3.60863 17.0469 4.26649C17.5559 4.92434 17.8321 5.73261 17.8321 6.56442C17.8321 7.39623 17.5559 8.2045 17.0469 8.86235C16.5378 9.52021 15.8247 9.99041 15.0195 10.1992" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.6521 19.7134V17.836C20.6515 17.004 20.3746 16.1958 19.8649 15.5383C19.3551 14.8807 18.6415 14.4111 17.8359 14.2031" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.44825 10.3223C10.522 10.3223 12.2031 8.64116 12.2031 6.56739C12.2031 4.49362 10.522 2.8125 8.44825 2.8125C6.37448 2.8125 4.69336 4.49362 4.69336 6.56739C4.69336 8.64116 6.37448 10.3223 8.44825 10.3223Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);


const features = [
    {
        title: "Qualified Specialists",
        desc: "Board-certified doctors across multiple specialties with proven expertise",
        icon: <IconQualified />
    },
    {
        title: "Faculty & Consultants",
        desc: "Senior doctors who also mentor medical students ensuring quality supervision",
        icon: <IconFaculty />
    },
    {
        title: "Continuous Excellence",
        desc: "Regular training, conferences, and updates on latest medical protocols",
        icon: <IconContinuous />
    },
    {
        title: "Multidisciplinary Approach",
        desc: "Team-based care with specialists collaborating for patient outcomes",
        icon: <IconMulti />
    }
];

const ExperiencedDoctors = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[80px] px-8 lg:px-[120px]">
            {/* Main Flex Wrapper: Pixel-perfect layout matching Figma design */}
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[160px]">

                {/* Left Column: Heading and List (Width: 460px) */}
                <div className="w-full lg:w-[460px] flex-shrink-0 flex flex-col items-start bg-white">
                    <h2 className="font-montserrat font-bold text-[32px] sm:text-[36px] lg:text-[42px] text-[#223F7F] mb-[40px] leading-[1.1]">
                        Experienced Doctors
                    </h2>

                    {/* List Items Container: 12px gap as per Figma Parent (Flex) */}
                    <div className="flex flex-col gap-[12px] w-full">
                        {features.map((item, index) => (
                            // List Item Row
                            <div key={index} className="flex items-start gap-[12px] w-full">
                                {/* Icon Box: 45.1px square with 7.5px radius */}
                                <div className="w-[45.1px] h-[45.1px] rounded-[7.5px] bg-[#223F7F1A] flex items-center justify-center flex-shrink-0 text-[#223F7F]">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col gap-[4px] w-full">
                                    {/* Title: 18px, 500 weight, #223f7f */}
                                    <h4 className="font-montserrat font-medium text-[18px] text-[#223F7F] leading-snug">
                                        {item.title}
                                    </h4>
                                    {/* Desc: 14px, 1.43 line-height, rgba(25, 25, 25, 0.75) */}
                                    <p className="font-montserrat font-normal text-[14px] text-[#191919]/75 leading-[1.43] w-full">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image (Width: 580px, Height: 386.7px) */}
                {/* Updated lg:mt-[12px] for precise visual top alignment with the heading's cap height */}
                <div className="w-full lg:w-[580px] h-auto lg:h-[386.7px] flex-shrink-0 lg:mt-[12px]">
                    <img
                        src={TeamImg}
                        alt="Experienced Doctors"
                        className="w-full h-full object-cover rounded-[10.7px] shadow-sm"
                    />
                </div>
            </div>
        </PageSection>
    );
};

export default ExperiencedDoctors;
