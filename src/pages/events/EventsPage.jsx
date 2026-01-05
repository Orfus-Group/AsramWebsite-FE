import React, { useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { useHero } from "@/context/HeroContext";
import { eventDetails } from "./eventsData";
import { IconCalendar, IconShare } from "@/assets/icons";
import EventOverview from "./eventOverview";

// Placeholder Images (Mapping to generic assets for now)
const OverviewImage = "/AsramWebsite-FE/assets/events/eventoverview.png";
const AboutImage = "/AsramWebsite-FE/assets/events/aboutevent.png";
const VenueImage = "/AsramWebsite-FE/assets/events/venueimage.png";

const speakerImage = "/AsramWebsite-FE/assets/events/principal.png";
// Custom Icons for this page
const IconLocation = ({ className = "" }) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M15 7.5C15 12.75 9 16.5 9 16.5C9 16.5 3 12.75 3 7.5C3 5.9087 3.63214 4.38258 4.75736 3.25736C5.88258 2.13214 7.4087 1.5 9 1.5C10.5913 1.5 12.1174 2.13214 13.2426 3.25736C14.3679 4.38258 15 5.9087 15 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EventsPage = () => {
    const navigate = useNavigate();
    const { hideHero } = useHero();

    useLayoutEffect(() => {
        hideHero();
    }, [hideHero]); // Ensure we don't show the common hero

    const {
        title, date, location, badges, overview,
        about, venue, speakers, registration, gallery
    } = eventDetails;

    return (
        <div className="bg-white">
            {/* BREADCRUMB SECTION */}
            <div className="w-full bg-[#EEF2F7]">
                <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px] h-[49px] flex items-center gap-1">
                    <Link to="/" className={`${T.font.family} text-[14px] font-medium text-[#191919BF] hover:text-[#223F7F] transition-colors`}>
                        Home
                    </Link>
                    <span className="text-[#191919BF] text-[14px] font-medium">/</span>
                    <span className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>
                        Campus Events
                    </span>
                    <span className="text-[#191919BF] text-[14px] font-medium">/</span>
                    <span className={`${T.font.family} text-[14px] font-medium text-[#223F7F]`}>
                        Event Details
                    </span>
                </div>
            </div>

            <PageSection paddingClass="pt-[40px] md:pt-[80px] pb-0">

                {/* HEADER SECTION */}
                <div className="flex flex-col gap-6">
                    {/* BADGES */}
                    <div className="flex gap-[10px]">
                        {badges.map((badge, idx) => (
                            <span key={idx} className={`${idx === 0 ? "bg-[#223F7F] text-white" : "bg-[#F3F4F6] text-[#364153]"} flex items-center justify-center font-montserrat font-normal text-[13.14px] leading-[18.8px] px-[24px] py-[7px] rounded-[9.39px]`}>
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* TITLE */}
                    <h1 className={`${T.font.family} font-bold text-[32px] md:text-[42px] text-[#223F7F] leading-tight`}>
                        {title}
                    </h1>

                    {/* META (Date, Location, Share) */}
                    <div className="flex flex-wrap items-center gap-6 md:gap-8">
                        <div className="flex items-center gap-2 text-[#191919BF]">
                            <IconCalendar size={17} />
                            <span className="text-[14px] font-medium">{date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#4A5565]">
                            <IconLocation size={17} />
                            <span className="text-[14px] font-medium">{location}</span>
                        </div>
                        <div className="flex items-center gap-3 ml-auto mr-auto md:mr-0 md:ml-0">
                            <span className="text-[14px] text-[#4A5565] font-medium">Share:</span>
                            <button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: title,
                                            url: window.location.href,
                                        });
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Link copied to clipboard!");
                                    }
                                }}
                                className="flex items-center gap-[4px] bg-[#223F7F] text-white px-[16px] py-[8px] rounded-[9.39px] text-[14px] font-medium hover:bg-[#1a3163] transition-colors"
                            >
                                <IconShare size={17} className="text-white" />
                                Share
                            </button>
                        </div>
                    </div>
                </div>

                {/* 1. OVERVIEW SECTION (Text Left, Image Right) */}
            </PageSection>
            <EventOverview />

            {/* 2. ABOUT EVENT SECTION (Image Left, Text Right) - Light Blue/Gray Bg */}
            <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[54px] items-center">
                    <div className="h-[300px] lg:h-[380px] w-full lg:max-w-[552px] rounded-[12px] overflow-hidden order-last lg:order-first">
                        <img src={AboutImage} alt="About Event" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <h4 className={`${T.font.family} font-semibold text-[28px] text-[#223F7F] mb-[20px]`}>
                            About Event
                        </h4>
                        <p className={`${T.font.family} text-[18px] leading-[26px] text-[#191919BF] mb-[22px] text-justify`}>
                            {about.description}
                        </p>

                        <h6 className={`${T.font.family} font-semibold text-[22px] text-[#3A3A3A] mb-[10px]`}>Key Topics</h6>
                        <ul className="space-y-3">
                            {about.keyTopics.map((topic, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="mt-[10px] w-[7.51px] h-[7.51px] rounded-full bg-[#223F7F] flex-shrink-0"></span>
                                    <span className={`${T.font.family} text-[18px] leading-[26px] text-[#191919BF]`}>{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </PageSection>

            {/* 3. VENUE & LOCATION (Card Left, Image Right) */}
            <PageSection paddingClass="py-[60px] md:py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[78px] items-center">
                    <div className="bg-white border border-[#E0E0E0] rounded-[12px] p-8 lg:p-[30px] h-full lg:h-[380px] flex flex-col justify-start">
                        <h4 className={`${T.font.family} font-semibold text-[28px] text-[#223F7F] mb-[22.5px]`}>
                            Venue & Location
                        </h4>
                        <div className="flex items-start gap-[11px]">
                            <IconLocation className="w-[22px] h-[22px] text-[#223F7F] mt-1 flex-shrink-0" />
                            <div>
                                <h6 className="text-[22px] font-medium text-[#191919] mb-[7.5px]">{venue.name}</h6>
                                <p className="text-[18px] text-[#191919BF] leading-[26px] max-w-[430px]">
                                    {venue.address}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[300px] lg:h-[380px] w-full rounded-[12px] overflow-hidden">
                        <img src={VenueImage} alt="Venue" className="w-full h-full object-cover" />
                    </div>
                </div>
            </PageSection>

            {/* 4. SPEAKERS - Light Blue Bg */}
            <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
                <h4 className={`${T.font.family} font-semibold text-[28px] text-[#223F7F] mb-[24px]`}>
                    Speakers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
                    {[1, 2, 3].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[9.69px] border border-[#07070733] overflow-hidden flex flex-col">
                            <div className="h-[310.17px] w-full">
                                <img src={speakerImage} alt="Dr. Sanjay Malhotra" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="p-[27.13px] flex flex-col items-start bg-white">
                                <h4 className={`${T.font.family} font-semibold text-[25.3px] text-[#223F7F] mb-[10.9px]`}>Dr. Sanjay Malhotra</h4>
                                <p className={`${T.font.family} text-[16.28px] leading-[23.5px] text-[#223F7F] font-normal`}>Principal</p>
                            </div>
                        </div>
                    ))}
                </div>
            </PageSection>

            {/* 5. REGISTRATION */}
            <PageSection paddingClass="py-[60px] md:py-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    <div className="w-full lg:max-w-[590px] flex flex-col justify-start gap-[20px] h-full lg:h-[311.71px]">
                        <h4 className={`${T.font.family} font-semibold text-[28px] text-[#223F7F]`}>
                            Registration
                        </h4>

                        <div className="flex flex-col gap-[20px]">
                            <div className="flex items-start gap-[12px]">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
                                    <path d="M19.9992 13.9961V17.9961" stroke="#223F7F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.9984 13.9961V17.9961" stroke="#223F7F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30.9988 16.0039H16.9988C15.8943 16.0039 14.9988 16.8993 14.9988 18.0039V32.0039C14.9988 33.1085 15.8943 34.0039 16.9988 34.0039H30.9988C32.1034 34.0039 32.9988 33.1085 32.9988 32.0039V18.0039C32.9988 16.8993 32.1034 16.0039 30.9988 16.0039Z" stroke="#223F7F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.9988 21.9941H32.9988" stroke="#223F7F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                                <div>
                                    <p className="text-[14px] text-[#191919BF] font-medium mb-[8px]">Registration Start Date</p>
                                    <p className="text-[18px] leading-[26px] text-[#191919]">{registration.startDate}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-[12px]">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
                                    <path d="M23.9988 18V24L27.9988 26" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.9992 33.9961C29.5221 33.9961 33.9992 29.5189 33.9992 23.9961C33.9992 18.4732 29.5221 13.9961 23.9992 13.9961C18.4764 13.9961 13.9992 18.4732 13.9992 23.9961C13.9992 29.5189 18.4764 33.9961 23.9992 33.9961Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                                <div>
                                    <p className="text-[14px] text-[#191919BF] font-medium mb-[8px]">Registration End Date</p>
                                    <p className="text-[18px] leading-[26px] text-[#191919]">{registration.endDate}</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
                                    <path d="M33.8002 21.9995C34.2569 24.2408 33.9314 26.5709 32.8781 28.6013C31.8247 30.6317 30.1071 32.2396 28.0117 33.1568C25.9163 34.0741 23.5698 34.2453 21.3635 33.6419C19.1572 33.0385 17.2244 31.6969 15.8875 29.8409C14.5506 27.9849 13.8903 25.7267 14.0169 23.4429C14.1434 21.159 15.0491 18.9876 16.5829 17.2907C18.1166 15.5938 20.1858 14.4739 22.4453 14.118C24.7048 13.762 27.018 14.1914 28.9992 15.3345" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.9988 22.9941L23.9988 25.9941L33.9988 15.9941" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                                <div>
                                    <p className="text-[14px] text-[#191919BF] font-medium mb-2">What's Included:</p>
                                    <ul className="space-y-2">
                                        {registration.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-[8px] leading-[26px] text-[18px] text-[#191919]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#223F7F]"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registration Fee Card */}
                    <div className="border border-gray-200 rounded-[16px] p-8 flex flex-col justify-center bg-white shadow-sm lg:max-w-[590px] lg:h-[311.71px]">
                        <h6 className="text-[22px] font-semibold text-[#191919] mb-[20px]">Registration Fee</h6>
                        <p className="text-[14px] font-medium text-[#191919BF] mb-[8px]">FEE Amount</p>
                        <h3 className="text-[32px] font-semibold text-[#223F7F] mb-[8px]">{registration.fee}</h3>
                        <p className="text-[14px] text-[#191919BF] leading-[20px] mb-[20px]">Per participant</p>
                        <button className="w-full bg-[#223F7F] text-white text-[18px] leading-[26px] font-regular py-[8px] rounded-[8px] hover:bg-[#1a3163] transition-colors mb-[20px] flex items-center justify-center gap-[8px]">
                            Register Now
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16669 10H15.8334" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <p className="text-[14px] text-[#191919BF] leading-[20px] text-center">Limited seats available. Early registration recommended.</p>
                    </div>
                </div>
            </PageSection>

            {/* 6. EVENT GALLERY */}
            <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
                <h4 className={`${T.font.family} font-semibold text-[28px] text-[#223F7F] mb-[40px]`}>
                    Event Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {gallery.map((img, idx) => (
                        <div key={idx} className="h-[250px] rounded-[12px] overflow-hidden">
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </PageSection>

        </div>
    );
};

export default EventsPage;
