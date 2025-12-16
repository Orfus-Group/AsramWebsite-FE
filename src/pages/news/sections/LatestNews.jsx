import React, { useState } from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import News1 from "@/assets/news/News1.svg";
import News2 from "@/assets/news/News2.svg";
import News3 from "@/assets/news/News3.svg";
import News4 from "@/assets/news/News4.svg";
import News5 from "@/assets/news/News5.svg";
import News6 from "@/assets/news/News6.svg";

// Icons (Inline for simplicity given they are specific to this component logic)
const FilterIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16686 18.3333C9.16679 18.5037 9.21417 18.6707 9.30371 18.8156C9.39325 18.9605 9.5214 19.0776 9.67378 19.1538L11.5071 20.0704C11.6469 20.1403 11.8022 20.1732 11.9583 20.1662C12.1144 20.1591 12.2662 20.1122 12.3991 20.03C12.532 19.9478 12.6416 19.833 12.7177 19.6965C12.7937 19.56 12.8336 19.4063 12.8335 19.25V12.8333C12.8337 12.379 13.0026 11.941 13.3074 11.6041L19.9285 4.28083C20.0472 4.14935 20.1252 3.98629 20.1532 3.81139C20.1812 3.63649 20.1579 3.45724 20.0861 3.2953C20.0144 3.13337 19.8972 2.99569 19.7489 2.89891C19.6005 2.80214 19.4273 2.75042 19.2502 2.75H2.7502C2.57292 2.75006 2.39947 2.80153 2.25084 2.89817C2.10222 2.9948 1.98481 3.13246 1.91283 3.29447C1.84085 3.45647 1.81739 3.63587 1.84529 3.81094C1.87319 3.98601 1.95126 4.14923 2.07003 4.28083L8.69295 11.6041C8.99777 11.941 9.16666 12.379 9.16686 12.8333V18.3333Z" stroke="#223F7F" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66663 1.66797V5.0013" stroke="#191919" stroke-opacity="0.75" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.3331 1.66797V5.0013" stroke="#191919" stroke-opacity="0.75" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.8335 3.33203H4.16685C3.24638 3.33203 2.50018 4.07822 2.50018 4.9987V16.6654C2.50018 17.5858 3.24638 18.332 4.16685 18.332H15.8335C16.754 18.332 17.5002 17.5858 17.5002 16.6654V4.9987C17.5002 4.07822 16.754 3.33203 15.8335 3.33203Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.50018 8.33398H17.5002" stroke="#191919" stroke-opacity="0.75" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16656 10H15.8332" stroke="#008C8C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.0001 4.16797L15.8335 10.0013L10.0001 15.8346" stroke="#008C8C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const ChevronLeft = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7341 14.0806L7.04053 9.38697L11.7341 4.69336" stroke="#191919" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const ChevronRight = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.04028 14.0806L11.7339 9.38697L7.04028 4.69336" stroke="#191919" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);


const colleges = [
    { label: "All Colleges", value: "All" },
    { label: "College of Medical Sciences", value: "Medical" },
    { label: "College of Nursing", value: "Nursing" },
    { label: "College of Paramedical Sciences", value: "Paramedical" },
];

const categories = [
    { label: "All Categories", value: "All" },
    { label: "Achievements", value: "Achievements" },
    { label: "Events", value: "Events" },
    { label: "Admissions", value: "Admissions" },
    { label: "Research", value: "Research" },
    { label: "Placements", value: "Placements" },
    { label: "Announcements", value: "Announcements" },
];

const mockNews = [
    {
        id: 1,
        image: News1,
        tags: ["Nursing", "Event"],
        title: "College of Nursing Hosts International Conference on Patient Care Excellence",
        desc: "Over 500 delegates from 15 countries participated in the three-day conference featuring renowned speakers and hands-on workshops on advanced nursing practices.",
        date: "November 28, 2024",
    },
    {
        id: 2,
        image: News2,
        tags: ["Medical Sciences", "Achievement"],
        title: "Medical College Students Secure Top Ranks in NEET PG Examinations",
        desc: "15 students from ASRAM College of Medical Sciences achieved All India ranks within top 100, showcasing exceptional academic performance and dedicated preparation.",
        date: "November 25, 2024",
    },
    {
        id: 3,
        image: News3,
        tags: ["Paramedical Sciences", "Announcement"],
        title: "New State-of-the-Art Simulation Lab Inaugurated at Paramedical College",
        desc: "The advanced simulation laboratory equipped with latest medical technology will provide hands-on training for paramedical students in emergency care and diagnostic procedures.",
        date: "November 22, 2024",
    },
    {
        id: 4,
        image: News4,
        tags: ["Nursing", "Research"],
        title: "ASRAM Nursing Faculty Publishes Groundbreaking Research in Lancet",
        desc: "Dr. Meera Krishnan's research on nurse-led community health interventions featured in prestigious medical journal, highlighting innovative approaches to rural healthcare.",
        date: "November 22, 2024",
    },
    {
        id: 5,
        image: News5,
        tags: ["Paramedical Sciences", "Placement"],
        title: "100% Placement Record for Medical Lab Technology Batch 2024",
        desc: "All graduating students of MLT program secured positions in leading hospitals and diagnostic centers across India and abroad, with average salary package of ₹4.5 lakhs.",
        date: "November 18, 2024",
    },
    {
        id: 6,
        image: News6,
        tags: ["Medical Sciences", "Admission"],
        title: "Admissions Open for MBBS Program 2025-26 Academic Year",
        desc: "ASRAM announces 150 MBBS seats for upcoming academic year. Application process begins December 1st. Merit-based selection with reservation as per government norms.",
        date: "November 15, 2024",
    },
];

const LatestNews = () => {
    const [activeCollege, setActiveCollege] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]">

                {/* ==================== SIDEBAR ==================== */}
                <div className="w-full lg:w-[280px] shrink-0 space-y-6">
                    {/* Filters Header */}
                    <div className="flex items-center gap-2 rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 px-6 py-4 bg-white w-full">
                        <FilterIcon />
                        <span className={`${T.font.family} font-medium text-[18px] text-[#191919]`}>Filters</span>
                    </div>

                    {/* College Filter Group */}
                    <div className="rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 p-5 bg-white">
                        <h4 className={`${T.font.family}  font-medium text-[18px] text-[#191919] mb-4`}>
                            College
                        </h4>
                        <div className="flex flex-col gap-3">
                            {colleges.map((col) => (
                                <button
                                    key={col.value}
                                    onClick={() => setActiveCollege(col.value)}
                                    className={`
                                        text-left px-4 py-3 rounded-[9.4px] text-[14px] font-regular transition-colors
                                        ${activeCollege === col.value
                                            ? "bg-[#008C8C] text-white"
                                            : "bg-[#D8DFEF] text-[#191919] hover:bg-[#c0cbe6]"
                                        }
                                    `}
                                >
                                    {col.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filter Group */}
                    <div className="rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 p-5 bg-white">
                        <h4 className={`${T.font.family}  font-medium text-[18px] text-[#191919] mb-4`}>
                            Category
                        </h4>
                        <div className="flex flex-col gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    className={`
                                        text-left px-4 py-3 rounded-[8px] text-[15px] font-medium transition-colors
                                        ${activeCategory === cat.value
                                            ? "bg-[#008C8C] text-white"
                                            : "bg-[#D8DFEF] text-[#344054] hover:bg-[#c0cbe6]"
                                        }
                                    `}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ==================== MAIN CONTENT ==================== */}
                <div className="flex-1">
                    {/* Header */}
                    <div className="mb-6 md:mb-8">
                        <h2 className={`${T.font.family} font-bold text-[28px] lg:text-[32px] text-[#223F7F] mb-1`}>
                            Latest News
                        </h2>
                        <p className={`${T.font.family} font-regular text-[20px] text-[#191919BF]`}>
                            Showing 9 articles
                        </p>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] mb-8 md:mb-12">
                        {mockNews.map((item) => (
                            <div key={item.id} className="bg-white rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                                {/* Image */}
                                <div className="h-[240px] w-full bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content Body */}
                                <div className="p-[24px] flex flex-col flex-1">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className={`
                                                    text-[12px] font-regular px-2.5 py-0.5 rounded-[41943000px]
                                                    ${idx === 0 ? "bg-[#008C8C1A] text-[#008C8C]" : "bg-[#D8DFEF] text-[#191919BF]"}
                                                `}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-3 leading-[1.4] line-clamp-3`}>
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] mb-6 line-clamp-5 text-ellipsis`}>
                                        {item.desc}
                                    </p>

                                    {/* Footer (Date + Read More) */}
                                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#EAECF0]">
                                        <div className="flex items-center gap-2 text-[#475467] text-[14px] font-medium">
                                            <CalendarIcon />
                                            <span>{item.date}</span>
                                        </div>
                                        <button className="flex items-center gap-2 text-[#008C8C] text-[14px] font-medium hover:text-[#008C8C] transition-colors">
                                            Read More
                                            <ArrowRightIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] mt-[30px] md:mt-[60px]">
                        <div className="flex items-center justify-center gap-[12px]">
                            <button className="w-10 h-10 flex items-center justify-center rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 hover:bg-gray-50 transition-colors">
                                <ChevronLeft />
                            </button>

                            <button className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-[#223F7F] text-white font-regular text-[15.02px] shadow-sm">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 text-[#191919] font-regular text-[15.02px] hover:bg-gray-50 transition-colors shadow-sm">
                                2
                            </button>

                            <button className="w-10 h-10 flex items-center justify-center rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 hover:bg-gray-50 transition-colors">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default LatestNews;
