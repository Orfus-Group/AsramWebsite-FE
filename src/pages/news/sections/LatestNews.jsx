import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import News1 from "@/assets/news/News1.svg";
import News2 from "@/assets/news/News2.svg";
import News3 from "@/assets/news/News3.svg";
import News4 from "@/assets/news/News4.svg";
import News5 from "@/assets/news/News5.svg";
import News6 from "@/assets/news/News6.svg";
import {
    IconFilter,
    IconCalendar,
    IconArrowRight,
    IconChevronLeft,
    IconChevronRight
} from "@/assets/icons";

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

const LatestNews = ({
    activeCollege,
    setActiveCollege,
    activeCategory,
    setActiveCategory,
    onArticleClick
}) => {

    return (
        <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]">

                {/* ==================== SIDEBAR ==================== */}
                <div className="w-full lg:w-[280px] shrink-0 space-y-6 lg:sticky lg:top-[20px] lg:self-start">
                    {/* Filters Header */}
                    <div className="flex items-center gap-2 rounded-[9.4px] border border-[rgba(7,7,7,0.2)]
 px-6 py-4 bg-white w-full">
                        <IconFilter />
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
                                            : "bg-[#EEF2F7] text-[#191919] hover:bg-[#c0cbe6]"
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
                                        text-left px-4 py-3 rounded-[9.4px] text-[14px] font-regular transition-colors
                                        ${activeCategory === cat.value
                                            ? "bg-[#008C8C] text-white"
                                            : "bg-[#EEF2F7] text-[#191919] hover:bg-[#c0cbe6]"
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
                            <div
                                key={item.id}
                                className="bg-[#EEF2F7] rounded-[12.5px] border border-[#E5E7EB] overflow-hidden flex flex-col transition-shadow duration-300 cursor-pointer"
                                onClick={() => onArticleClick && onArticleClick(item)}
                            >
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
                                    <div style={{ borderTop: "1.3px solid #07070733" }} className="flex items-center justify-between mt-auto pt-5">
                                        <div className="flex items-center gap-2 text-[#ABABAB] text-[14px] font-medium">
                                            <IconCalendar />
                                            <span>{item.date}</span>
                                        </div>
                                        <button
                                            className="flex items-center gap-2 text-[#008C8C] text-[14px] font-medium hover:text-[#008C8C] transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onArticleClick && onArticleClick(item);
                                            }}
                                        >
                                            Read More
                                            <IconArrowRight stroke="#008C8C" />
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
                                <IconChevronLeft />
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
                                <IconChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default LatestNews;
