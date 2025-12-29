import React from "react";
import { T } from "@/theme";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import PageSection from "@/features/common/layout/PageContainer";
const campusEvents = "/AsramWebsite-FE/assets/news/campusevents.png"; // Fallback placeholder

const CampusEventsSection = () => {
    const upcomingEvents = [
        {
            title: "Annual Cultural Fest",
            date: "March 15-17, 2024",
            location: "Main Auditorium",
            description: "Three days of music, dance, drama, and cultural celebrations.",
        },
        {
            title: "Medical Symposium",
            date: "March 25, 2024",
            location: "Conference Hall",
            description: "International speakers discussing latest medical advancements.",
        },
        {
            title: "Sports Week",
            date: "April 1-7, 2024",
            location: "Sports Complex",
            description: "Inter-departmental competitions across various sports.",
        },
    ];

    return (
        <PageSection bg="bg-white" sectionClassName="py-[60px] md:py-[80px]">

            {/* HEADLINE */}
            <h2
                className={`
                        ${T.font.family}
                        ${T.font.weight.bold}
                        text-[28px] md:text-[42px]
                        text-[#223F7F]
                        mb-[40px]
                    `}
            >
                Campus Events
            </h2>

            {/* FEATURED EVENT CARD */}
            <div className="flex flex-col lg:flex-row w-full mb-[40px] rounded-[12px] overflow-hidden border border-[rgba(7,7,7,0.2)]">
                {/* LEFT: IMAGE */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-auto lg:min-h-[430px]">
                    <img
                        src={campusEvents}
                        alt="Featured Event"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT: CONTENT */}
                <div className="w-full lg:w-1/2 bg-[#EEF2F7] p-[24px] sm:p-[30px] lg:p-[40px] flex flex-col justify-between items-start lg:min-h-[430px]">
                    {/* TOP CONTENT GROUP */}
                    <div className="w-full">
                        {/* BADGE */}
                        <span
                            className={`
                                    w-fit px-[20px] h-[36px]
                                    bg-[rgba(255,255,255,0.8)]
                                    rounded-[12px] 
                                    flex justify-center items-center
                                    text-[13px] sm:text-[14px] 
                                    font-regular
                                    text-[#191919] 
                                    ${T.font.family} 
                                    mb-[16px] sm:mb-[20px]
                                `}
                        >
                            Featured Event
                        </span>

                        {/* TITLE */}
                        <h3
                            className={`
                                    ${T.font.family}
                                    ${T.font.weight.semibold}
                                    text-[20px] sm:text-[24px] lg:text-[32px]
                                    text-[#223F7F]
                                    leading-[1.3]
                                    mb-[12px] sm:mb-[16px]
                                `}
                        >
                            Annual Convocation Ceremony
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                            className={`
                                    ${T.font.family}
                                    font-regular
                                    text-[15px] sm:text-[18px]
                                    leading-[1.5] sm:leading-[1.6]
                                    text-[#4A5565]
                                    mb-[16px] sm:mb-[20px] lg:mb-[30px]
                                `}
                        >
                            Join us for the prestigious annual convocation ceremony where we celebrate the achievements of our graduating students and welcome distinguished guests.
                        </p>
                    </div>

                    {/* BOTTOM ACTIONS GROUP */}
                    <div className="w-full">
                        {/* DETAILS */}
                        <div className="flex flex-col gap-[10px] sm:gap-[12px] mb-[20px]">
                            <div className="flex items-center gap-[10px] text-[#4A5565]">
                                <HiOutlineCalendar className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
                                <span className={`${T.font.family} font-regular text-[#191919BF] text-[13px] sm:text-[14px]`}>February 28, 2024</span>
                            </div>
                            <div className="flex items-center gap-[10px] text-[#4A5565]">
                                <HiOutlineLocationMarker className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
                                <span className={`${T.font.family} font-regular text-[#191919BF] text-[13px] sm:text-[14px]`}>Main Campus Grounds</span>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <button
                            className={`
                                    w-full sm:w-fit h-[44px] sm:h-[47.3px]
                                    bg-[#223F7F]
                                    text-white
                                    rounded-[8px] sm:rounded-[9.9px]
                                    flex items-center justify-center
                                    px-[23.5px]
                                    font-regular
                                    text-[14px] sm:text-[15.8px]
                                    hover:bg-[#1a3163]
                                    transition-all
                                `}
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>

            {/* UPCOMING EVENTS CONTAINER */}
            <div className="w-full bg-[#EEF2F7] rounded-[12px] p-[20px] sm:p-[30px] border border-[rgba(7,7,7,0.2)]">
                <h4
                    className={`
                            ${T.font.family}
                            ${T.font.weight.semibold}
                            text-[24px] sm:text-[28px] lg:text-[32px]
                            text-[#223F7F]
                            text-center
                            mb-[30px] sm:mb-[40px]
                        `}
                >
                    Upcoming Events
                </h4>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px]">
                    {upcomingEvents.map((event, index) => (
                        <div key={index} className="bg-white rounded-[12px] p-[20px] flex flex-col items-start min-h-[180px] sm:min-h-[193px] justify-center border border-[rgba(7,7,7,0.2)]">
                            <h6
                                className={`
                                        ${T.font.family}
                                        ${T.font.weight.medium}
                                        text-[18px] sm:text-[20px] lg:text-[22px]
                                        text-[#223F7F]
                                        mb-[10px] sm:mb-[14px]
                                    `}
                            >
                                {event.title}
                            </h6>

                            {/* META */}
                            <div className="flex font-montserrat flex-col gap-[6px] sm:gap-[8px] mb-[12px] sm:mb-[14px]">
                                <div className="flex font-regular items-center gap-[8px] text-[#191919BF] text-[13px] sm:text-[14px]">
                                    <HiOutlineCalendar className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                                    <span className="">{event.date}</span>
                                </div>
                                <div className="flex font-regular items-center gap-[8px] text-[#191919BF] text-[13px] sm:text-[14px]">
                                    <HiOutlineLocationMarker className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                                    <span className="">{event.location}</span>
                                </div>
                            </div>

                            <p className={`
                                    ${T.font.family}
                                    text-[#191919BF]
                                    text-[14px] sm:text-[15px]
                                    leading-[1.4]
                                    line-clamp-2
                                `}>
                                {event.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </PageSection>
    );
};

export default CampusEventsSection;
