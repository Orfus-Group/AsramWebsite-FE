import React from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { mockNews, colleges, categories } from "../newsData";
const IconFilter = "/AsramWebsite-FE/assets/icons/IconFilter.svg";
const IconCalendar = "/AsramWebsite-FE/assets/icons/IconCalendar.svg";
const IconChevronLeft = "/AsramWebsite-FE/assets/icons/IconChevronLeft.svg";
const IconChevronRight = "/AsramWebsite-FE/assets/icons/IconChevronRight.svg";

import {
    IconArrowRight,
   
} from "@/assets/icons";

const LatestNews = ({
    activeCollege,
    setActiveCollege,
    activeCategory,
    setActiveCategory,
}) => {
    const navigate = useNavigate();

    const handleArticleClick = (articleId) => {
        navigate(`/news/${articleId}`);
    };

    return (
        <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]">

                {/* ==================== SIDEBAR ==================== */}
                {/* ==================== SIDEBAR / FILTERS ==================== */}
                <div className="w-full lg:w-[280px] shrink-0 space-y-4 sm:space-y-6 lg:sticky lg:top-[20px] lg:self-start flex flex-col sm:flex-row lg:flex-col gap-0 sm:gap-4 lg:gap-6">
                    {/* Filters Header (Hidden on Mobile) */}
                    <div className="hidden lg:flex items-center gap-2 rounded-[9.4px] border border-[rgba(7,7,7,0.2)] px-6 py-4 bg-white w-full">
                        <img src={IconFilter} className="w-[22px] h-[22px]" alt="" />
                        <span className={`${T.font.family} font-medium text-[18px] text-[#191919]`}>Filters</span>
                    </div>

                    {/* College Filter Group */}
                    <div className="flex-1 rounded-[9.4px] border border-[rgba(7,7,7,0.2)] p-4 sm:p-5 bg-white">
                        <h4 className={`${T.font.family} font-medium text-[16px] sm:text-[18px] text-[#191919] mb-3 sm:mb-4`}>
                            College
                        </h4>
                        <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-2 lg:pb-0 scrollbar-hide">
                            {colleges.map((col) => (
                                <button
                                    key={col.value}
                                    onClick={() => setActiveCollege(col.value)}
                                    className={`
                                        whitespace-normal text-left px-4 py-2 sm:py-3 rounded-[8px] sm:rounded-[9.4px] text-[13px] sm:text-[14px] font-regular transition-all leading-tight
                                        ${activeCollege === col.value
                                            ? "bg-[#223F7F] text-white"
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
                    <div className="flex-1 rounded-[9.4px] border border-[rgba(7,7,7,0.2)] p-4 sm:p-5 bg-white">
                        <h4 className={`${T.font.family} font-medium text-[16px] sm:text-[18px] text-[#191919] mb-3 sm:mb-4`}>
                            Category
                        </h4>
                        <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-2 lg:pb-0 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    className={`
                                        whitespace-normal text-left px-4 py-2 sm:py-3 rounded-[8px] sm:rounded-[9.4px] text-[13px] sm:text-[14px] font-regular transition-all leading-tight
                                        ${activeCategory === cat.value
                                            ? "bg-[#223F7F] text-white"
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
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="mb-6 md:mb-8">
                        <h2 className={`${T.font.family} font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-[#223F7F] mb-1`}>
                            Latest News
                        </h2>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px] mb-8 md:mb-12">
                        {mockNews.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-[#EEF2F7] rounded-[12.5px] border border-[#E5E7EB] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:bg-[#e8edff] hover:border-[#223F7F33]"
                            >
                                {/* Image */}
                                <div className="h-[200px] sm:h-[240px] w-full bg-gray-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Body */}
                                <div className="p-[20px] sm:p-[24px] flex flex-col flex-1">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className={`
                                                    text-[11px] sm:text-[12px] font-regular px-2.5 py-0.5 rounded-full
                                                    ${idx === 0 ? "bg-[#008C8C1A] text-[#008C8C]" : "bg-[#D8DFEF] text-[#191919BF]"}
                                                `}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className={`${T.font.family} font-semibold text-[18px] sm:text-[22px] text-[#223F7F] mb-3 leading-[1.4] line-clamp-3`}>
                                        {item.title}
                                    </h3>

                                    {/* Description (Hidden on mobile if needed, but keeping for now) */}
                                    <p className={`${T.font.family} font-regular text-[15px] sm:text-[18px] text-[#191919BF] leading-[22px] sm:leading-[26px] mb-6 line-clamp-3 sm:line-clamp-5 text-ellipsis`}>
                                        {item.desc}
                                    </p>

                                    {/* Footer (Date + Read More) */}
                                    <div style={{ borderTop: "1.3px solid #07070733" }} className="flex items-center justify-between mt-auto pt-5">
                                        <div className="flex items-center gap-2 text-[#ABABAB] text-[12px] sm:text-[14px] font-medium">
                                            <img src={IconCalendar} className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" alt="" />
                                            <span>{item.date}</span>
                                        </div>
                                        <button
                                            className="flex items-center gap-1 sm:gap-2 text-[#008C8C] text-[12px] sm:text-[14px] font-semibold hover:translate-x-1 transition-transform cursor-pointer"
                                            onClick={() => handleArticleClick(item.id)}
                                        >
                                            Read More
                                            <IconArrowRight size={14} className="sm:w-[16px] sm:h-[16px]" stroke="#008C8C" strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-[8px] sm:gap-[12px] mt-[30px] md:mt-[60px]">
                        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] sm:rounded-[9.4px] border border-[rgba(7,7,7,0.2)] hover:bg-[#EEF2F7] transition-all">
                            <img src={IconChevronLeft} className="w-[16px] h-[16px]" alt="" />
                        </button>

                        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] bg-[#223F7F] text-white font-medium text-[14px] sm:text-[15.02px] shadow-sm transform hover:scale-105 transition-transform">
                            1
                        </button>
                        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] sm:rounded-[9.4px] border border-[rgba(7,7,7,0.2)] text-[#191919] font-medium text-[14px] sm:text-[15.02px] hover:bg-[#EEF2F7] transition-all shadow-sm">
                            2
                        </button>

                        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] sm:rounded-[9.4px] border border-[rgba(7,7,7,0.2)] hover:bg-[#EEF2F7] transition-all">
                            <img src={IconChevronRight} className="w-[16px] h-[16px]" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default LatestNews;
