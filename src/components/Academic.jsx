import React from "react";
import heroBg from "../assets/nursing/herobgimage.svg"; // Reusing existing asset or placeholder
import { T } from "../theme"; // Assuming theme usage based on other files

// Icons as inline SVGs to avoid adding dependencies
const ClockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const UsersIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="#00A9B4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



const ProgramCard = ({ tag, title, duration, seats, description, highlights }) => {
    return (
        <div className="flex flex-col bg-[#E6F4F6] p-8 rounded-lg flex-1 min-w-[300px]">
            {/* Tag */}
            <div className="mb-4">
                <span className="inline-block bg-[#D1D5DB] bg-opacity-30 text-[#4B5563] text-xs font-medium px-3 py-1 rounded-sm">
                    {tag}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-[#223F7F] font-bold text-2xl mb-6 font-montserrat">
                {title}
            </h3>

            {/* Meta Info */}
            <div className="flex items-center gap-6 mb-6 text-[#555555] text-sm">
                <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2">
                    <UsersIcon />
                    <span>{seats}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-[#555555] text-sm leading-relaxed mb-8">
                {description}
            </p>

            {/* Highlights */}
            <div className="mb-8 flex-grow">
                <h4 className="text-[#223F7F] font-bold text-sm mb-4">Program Highlights</h4>
                <ul className="space-y-3">
                    {highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-[#555555]">
                            <span className="mt-1 flex-shrink-0"><CheckIcon /></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action */}
            <div className="mt-auto">
                <a href="#" className="inline-flex items-center gap-2 text-[#223F7F] font-bold text-sm hover:underline">
                    Learn More <ArrowRightIcon />
                </a>
            </div>
        </div>
    );
};

const BadgeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15L8.5 17.5L9.5 12.5L6 9.5L10.5 9.5L12 5L13.5 9.5L18 9.5L14.5 12.5L15.5 17.5L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const GlobeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const HospitalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21V7H19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const StatCard = ({ icon: Icon, value, label }) => (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-[200px] w-full">
        <div className="text-[#223F7F] mb-4">
            <Icon />
        </div>
        <div className="text-[#223F7F] text-3xl font-bold mb-2">{value}</div>
        <div className="text-[#555555] text-sm">{label}</div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, description, tag }) => (
    <div className="bg-[#F8F9FA] p-8 rounded-lg flex flex-col items-start h-full">
        <div className="bg-[#009DA9] text-white p-3 rounded-lg mb-6">
            <Icon />
        </div>
        <h3 className="text-[#223F7F] text-xl font-bold mb-4">{title}</h3>
        <p className="text-[#555555] text-sm leading-relaxed mb-8 flex-grow">
            {description}
        </p>
        <span className="inline-block border border-[#E5E7EB] text-[#009DA9] text-xs font-bold px-4 py-2 rounded-full bg-white">
            {tag}
        </span>
    </div>
);

export default function Academic() {
    const programs = [
        {
            tag: "Undergraduate",
            title: "B.Sc Nursing",
            duration: "4 Years",
            seats: "100 Seats",
            description: "Comprehensive undergraduate program combining theoretical knowledge with extensive clinical practice. Perfect for students seeking a professional nursing career.",
            highlights: [
                "Clinical rotations in multispecialty hospital",
                "Research opportunities",
                "International nursing standards"
            ]
        },
        {
            tag: "Diploma",
            title: "General Nursing & Midwifery",
            duration: "3 Years",
            seats: "60 Seats",
            description: "Intensive diploma program focused on nursing fundamentals and midwifery. Ideal for those wanting to enter the nursing profession quickly.",
            highlights: [
                "Hands-on clinical training",
                "Obstetric & gynecological focus",
                "Community health experience"
            ]
        },
        {
            tag: "Postgraduate",
            title: "M.Sc Nursing",
            duration: "2 Years",
            seats: "30 Seats",
            description: "Advanced nursing education with specializations in Medical-Surgical, Obstetrics, Pediatrics, Community Health, and Psychiatric Nursing.",
            highlights: [
                "Research & thesis work",
                "Leadership development",
                "Academic & clinical roles"
            ]
        }
    ];

    const stats = [
        { icon: BadgeIcon, value: "20+", label: "Years of Excellence" },
        { icon: UsersIcon, value: "377+", label: "Active Students" },
        { icon: ChartIcon, value: "95%", label: "Placement Success" },
        { icon: GlobeIcon, value: "INC", label: "Approved Programs" },
    ];

    const features = [
        {
            icon: HospitalIcon,
            title: "Hospital Training",
            description: "Direct access to ASRAM's comprehensive multispecialty teaching hospital with over 500 beds, providing unmatched clinical exposure across all nursing specialties.",
            tag: "500+ Bed Hospital"
        },
        {
            icon: BookIcon,
            title: "State-of-the-Art Facilities",
            description: "Modern simulation labs, advanced anatomical models, e-library access, and cutting-edge equipment that mirrors real-world healthcare settings.",
            tag: "10 Acre Campus"
        },
        {
            icon: UsersIcon,
            title: "Personalized Mentorship",
            description: "With a student-faculty ratio of approximately 7:1, every student receives individual attention, guidance, and support throughout their educational journey.",
            tag: "7:1 Ratio"
        }
    ];

    return (
        <div className="w-full font-montserrat">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] overflow-hidden">
                {/* Background Image */}
                <img loading="lazy" decoding="async"
                    src={heroBg}
                    alt="Nursing Students"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-end pb-20 justify-center">
                    <h1 className="text-white text-5xl font-bold tracking-wide text-center drop-shadow-md">
                        Explore Our Nursing Programs
                    </h1>
                </div>
            </section>

            {/* Programs Offered Section */}
            <section className="py-20 px-4 md:px-16 lg:px-24 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-[#223F7F] text-4xl font-bold mb-12">
                        Programs Offered
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 justify-between">
                        {programs.map((program, index) => (
                            <ProgramCard key={index} {...program} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Shape Your Career Section */}
            <section className="py-20 px-4 md:px-16 lg:px-24 bg-[#F8F9FA]">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-[#223F7F] text-4xl font-bold mb-12">
                        Shape Your Career in Nursing
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Left Image */}
                        <div className="w-full lg:w-1/2 h-[500px] rounded-lg overflow-hidden relative">
                            {/* Placeholder for student image */}
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                <img loading="lazy" decoding="async" src={heroBg} alt="Student" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Right Stats Grid */}
                        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <StatCard key={index} {...stat} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Nursing School Section */}
            <section className="py-20 px-4 md:px-16 lg:px-24 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-[#223F7F] text-4xl font-bold mb-12">
                        Why Choose Our Nursing School
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
