import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const EmergencyImg = "/AsramWebsite-FE/assets/healthcare/emergency.png";

const IconClock = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2646 5.63281V11.2651L15.0195 13.1426" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.2652 20.6494C16.4496 20.6494 20.6524 16.4466 20.6524 11.2622C20.6524 6.0778 16.4496 1.875 11.2652 1.875C6.08073 1.875 1.87793 6.0778 1.87793 11.2622C1.87793 16.4466 6.08073 20.6494 11.2652 20.6494Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconAmbulanceService = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.3877 9.38281H5.63281" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.1426 16.8921V5.62744C13.1426 5.12952 12.9448 4.65198 12.5927 4.29989C12.2406 3.9478 11.7631 3.75 11.2652 3.75H3.75537C3.25745 3.75 2.77991 3.9478 2.42782 4.29989C2.07573 4.65198 1.87793 5.12952 1.87793 5.62744V15.9534C1.87793 16.2024 1.97683 16.4411 2.15288 16.6172C2.32892 16.7932 2.56769 16.8921 2.81665 16.8921H4.6941" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.8362 16.895H19.7136C19.9626 16.895 20.2014 16.7961 20.3774 16.6201C20.5535 16.444 20.6524 16.2053 20.6524 15.9563V12.8773C20.6522 12.6804 20.5901 12.4885 20.4749 12.3288C20.3597 12.169 20.1971 12.0496 20.0103 11.9874L18.2051 11.3857C18.0881 11.3466 17.98 11.2849 17.8869 11.204C17.7938 11.1232 17.7176 11.0248 17.6625 10.9144L16.2178 8.02693C16.1399 7.87102 16.0202 7.73988 15.8719 7.6482C15.7237 7.55652 15.5529 7.50791 15.3786 7.50781H13.1426" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.50977 7.50781V11.2627" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.44824 16.8906H14.0806" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.9585 18.7705C16.9954 18.7705 17.8359 17.93 17.8359 16.8931C17.8359 15.8562 16.9954 15.0156 15.9585 15.0156C14.9216 15.0156 14.0811 15.8562 14.0811 16.8931C14.0811 17.93 14.9216 18.7705 15.9585 18.7705Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.5708 18.7705C7.60769 18.7705 8.44825 17.93 8.44825 16.8931C8.44825 15.8562 7.60769 15.0156 6.5708 15.0156C5.53392 15.0156 4.69336 15.8562 4.69336 16.8931C4.69336 17.93 5.53392 18.7705 6.5708 18.7705Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconHeartRate = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.87793 8.92032C1.87795 7.87571 2.19484 6.85568 2.78674 5.99495C3.37864 5.13422 4.21771 4.47328 5.19313 4.09942C6.16855 3.72557 7.23443 3.65639 8.24999 3.90102C9.26555 4.14565 10.183 4.69258 10.8812 5.46958C10.9304 5.52216 10.9898 5.56408 11.0559 5.59274C11.1219 5.6214 11.1932 5.63619 11.2652 5.63619C11.3371 5.63619 11.4084 5.6214 11.4744 5.59274C11.5405 5.56408 11.5999 5.52216 11.6491 5.46958C12.3451 4.68753 13.2628 4.136 14.28 3.8884C15.2972 3.6408 16.3657 3.70886 17.3433 4.08354C18.3208 4.45822 19.1611 5.12174 19.7522 5.98579C20.3434 6.84983 20.6574 7.87342 20.6524 8.92032C20.6524 11.07 19.2443 12.6752 17.8362 14.0833L12.6807 19.0707C12.5058 19.2716 12.2902 19.433 12.0481 19.5441C11.806 19.6553 11.5431 19.7136 11.2767 19.7153C11.0103 19.717 10.7466 19.662 10.5032 19.5539C10.2597 19.4459 10.042 19.2872 9.86458 19.0886L4.6941 14.0833C3.28601 12.6752 1.87793 11.0794 1.87793 8.92032Z" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.02246 12.2074H8.91764L9.387 11.2687L11.2644 15.4929L13.1419 8.92188L14.55 12.2074H19.497" stroke="#223F7F" stroke-width="1.40808" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconPulseSmall = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.56445 7.4323C1.56447 6.56179 1.82854 5.71177 2.32179 4.99449C2.81504 4.27721 3.51427 3.72643 4.32712 3.41488C5.13997 3.10334 6.0282 3.04569 6.8745 3.24955C7.7208 3.4534 8.48536 3.90918 9.06719 4.55668C9.10817 4.6005 9.15772 4.63543 9.21275 4.65932C9.26779 4.6832 9.32714 4.69552 9.38714 4.69552C9.44713 4.69552 9.50649 4.6832 9.56153 4.65932C9.61656 4.63543 9.66611 4.6005 9.70709 4.55668C10.2871 3.90497 11.0518 3.44537 11.8995 3.23903C12.7472 3.03269 13.6376 3.08942 14.4522 3.40165C15.2669 3.71388 15.9671 4.26681 16.4597 4.98685C16.9523 5.70689 17.214 6.55988 17.2098 7.4323C17.2098 9.2237 16.0364 10.5614 14.863 11.7348L10.5668 15.891C10.421 16.0584 10.2413 16.1929 10.0396 16.2855C9.83785 16.3781 9.61872 16.4267 9.39675 16.4281C9.17478 16.4295 8.95505 16.3837 8.75216 16.2936C8.54927 16.2036 8.36787 16.0714 8.21999 15.9058L3.91126 11.7348C2.73786 10.5614 1.56445 9.23152 1.56445 7.4323Z" stroke="#C10007" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.51855 10.1676H7.4312L7.82234 9.38536L9.38687 12.9056L10.9514 7.42969L12.1248 10.1676H16.2474" stroke="#C10007" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const features = [
    {
        icon: <IconClock />,
        title: "24/7 Availability",
        desc: "Emergency physicians and support staff available at all hours, every day"
    },
    {
        icon: <IconAmbulanceService />,
        title: "Ambulance Services",
        desc: "Equipped ambulances with paramedical staff for rapid patient transport"
    },
    {
        icon: <IconHeartRate />,
        title: "ICU & Trauma Care",
        desc: "Intensive care units with ventilator support and continuous monitoring"
    }
];

const EmergencyCriticalCare = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[80px] px-[20px] lg:px-[120px]">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[40px] lg:gap-[130px]">
                {/* Left Content */}
                <div className="w-full lg:max-w-[488px] flex flex-col items-start">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-[10px] px-[12px] py-[8px] bg-[#FFE2E2] rounded-[7.51px] mb-[16px]">
                        <IconPulseSmall />
                        <span className="font-medium text-[14px] text-[#E11D48] leading-[20px]">24/7 Emergency Services</span>
                    </div>

                    {/* Title */}
                    <h2 className={`${T.font.family} font-bold text-[36px] md:text-[32px] leading-[1.2] text-[#223F7F] mb-[40px]`}>
                        Emergency & Critical Care
                    </h2>

                    {/* Features List */}
                    <div className="flex flex-col gap-[12px]">
                        {features.map((item, index) => (
                            <div key={index} className="flex flex-row items-start gap-[12px]">
                                <div className="w-[45.1px] h-[45.1px] bg-[rgba(34,63,127,0.1)] rounded-[7.5px] flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col gap-[4px]">
                                    <h4 className={`${T.font.family} font-medium text-[18px] text-[#223F7F] leading-[1.3]`}>
                                        {item.title}
                                    </h4>
                                    <p className={`${T.font.family} font-regular text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.43]`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:max-w-[580px]">
                    <img
                        src={EmergencyImg}
                        alt="Emergency Ambulance"
                        className="w-full h-auto md:h-[355px] object-cover rounded-[12px]"
                    />
                </div>
            </div>
        </PageSection>
    );
};

export default EmergencyCriticalCare;
