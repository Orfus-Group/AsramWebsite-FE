import React from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { mockNews, colleges, categories } from "../newsData";
import {
    IconFilter,
    IconCalendar,
    IconArrowRight,
    IconChevronLeft,
    IconChevronRight
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
                <div className="w-full lg:w-[280px] shrink-0 space-y-6 lg:sticky lg:top-[20px] lg:self-start flex flex-col md:flex-row lg:flex-col gap-4 md:gap-6">
                    {/* Filters Header */}
                    <div className="flex items-center gap-2 rounded-[9.4px] border border-[rgba(7,7,7,0.2)] px-6 py-4 bg-white w-full">
                        <IconFilter />
                        <span className={`${T.font.family} font-medium text-[18px] text-[#191919]`}>Filters</span>
                    </div>

                    {/* College Filter Group */}
                    <div className="rounded-[9.4px] border border-[rgba(7,7,7,0.2)] p-5 bg-white">
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
                    <div className="rounded-[9.4px] border border-[rgba(7,7,7,0.2)] p-5 bg-white">
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
                <div className="flex-1">
                    {/* Header */}
                    <div className="mb-6 md:mb-8">
                        <h2 className={`${T.font.family} font-bold text-[28px] lg:text-[32px] text-[#223F7F] mb-1`}>
                            Latest News
                        </h2>

                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[30px] mb-8 md:mb-12">
                        {mockNews.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#EEF2F7] rounded-[12.5px] border border-[#E5E7EB] overflow-hidden flex flex-col transition-shadow duration-300 cursor-pointer"
                                onClick={() => handleArticleClick(item.id)}
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
                                                handleArticleClick(item.id);
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
