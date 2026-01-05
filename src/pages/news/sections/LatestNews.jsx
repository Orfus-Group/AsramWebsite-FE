import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import CustomDropdown from "@/components/common/CustomDropdown";
import { mockNews, colleges, categories } from "../newsData";

const IconFilter = "/AsramWebsite-FE/assets/icons/IconFilter.svg";
const IconCalendar = "/AsramWebsite-FE/assets/icons/IconCalendar.svg";
const IconChevronLeft = "/AsramWebsite-FE/assets/icons/IconChevronLeft.svg";
const IconChevronRight = "/AsramWebsite-FE/assets/icons/IconChevronRight.svg";

import {
    IconArrowRight,
} from "@/assets/icons";

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5005 17.4995L13.8838 13.8828" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FilterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33336 16.6667C8.33329 16.8215 8.37637 16.9733 8.45777 17.1051C8.53917 17.2368 8.65566 17.3433 8.79419 17.4125L10.4609 18.2458C10.5879 18.3093 10.7291 18.3393 10.8711 18.3329C11.013 18.3264 11.1509 18.2838 11.2717 18.2091C11.3925 18.1344 11.4922 18.03 11.5614 17.9059C11.6305 17.7818 11.6668 17.6421 11.6667 17.5V11.6667C11.6669 11.2537 11.8204 10.8554 12.0975 10.5492L18.1167 3.89167C18.2246 3.77213 18.2955 3.6239 18.3209 3.4649C18.3464 3.3059 18.3252 3.14294 18.2599 2.99573C18.1947 2.84851 18.0882 2.72335 17.9534 2.63538C17.8185 2.5474 17.661 2.50038 17.5 2.5H2.50003C2.33886 2.50006 2.18118 2.54685 2.04607 2.6347C1.91096 2.72255 1.80422 2.84769 1.73878 2.99497C1.67334 3.14225 1.65201 3.30534 1.67738 3.46449C1.70274 3.62364 1.77371 3.77203 1.88169 3.89167L7.90252 10.5492C8.17964 10.8554 8.33317 11.2537 8.33336 11.6667V16.6667Z" stroke="#3A3A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.84013 5.95438C2.0511 5.74348 2.33719 5.625 2.6355 5.625C2.93381 5.625 3.21991 5.74348 3.43088 5.95438L8.99963 11.5231L14.5684 5.95438C14.7806 5.74946 15.0647 5.63606 15.3597 5.63863C15.6547 5.64119 15.9368 5.7595 16.1454 5.96809C16.354 6.17667 16.4723 6.45884 16.4749 6.75381C16.4774 7.04878 16.3641 7.33296 16.1591 7.54513L9.795 13.9093C9.58403 14.1202 9.29794 14.2386 8.99963 14.2386C8.70132 14.2386 8.41522 14.1202 8.20425 13.9093L1.84013 7.54513C1.62922 7.33417 1.51074 7.04807 1.51074 6.74976C1.51074 6.45145 1.62922 6.16535 1.84013 5.95438Z" fill="#3A3A3A" />
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#191919" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" stroke="#191919" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const LatestNews = ({
    activeCollege,
    setActiveCollege,
    activeCategory,
    setActiveCategory,
}) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleArticleClick = (articleId) => {
        navigate(`/news/${articleId}`);
    };

    // Filter Logic
    const filteredNews = mockNews.filter((item) => {
        // 1. Search Filter
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
            !query ||
            item.title.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query) ||
            item.tags.some((t) => t.toLowerCase().includes(query));

        // 2. College Filter (checking tags)
        let matchesCollege = true;
        if (activeCollege !== "All" && activeCollege !== "all") {
            const collegeKeyword = activeCollege.toLowerCase(); // medical, nursing, paramedical
            matchesCollege = item.tags.some((t) =>
                t.toLowerCase().includes(collegeKeyword)
            );
        }

        // 3. Category Filter
        let matchesCategory = true;
        if (activeCategory !== "All" && activeCategory !== "all") {
            matchesCategory = item.category === activeCategory;
        }

        return matchesSearch && matchesCollege && matchesCategory;
    });

    return (
        <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
            <div className="flex flex-col w-full">

                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <h2 className={`${T.font.family} font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-[#223F7F] mb-1`}>
                        Latest News
                    </h2>
                </div>

                {/* FILTERS SECTION */}
                <div className="flex flex-col gap-[20px] mb-[40px]">

                    {/* Row 1: Search + Filter Button */}
                    <div className="flex flex-col lg:flex-row gap-[20px] w-full">
                        {/* Search Bar */}
                        {/* Search Bar */}
                        <div className="flex-1 !h-[50px] min-h-[50px] md:!h-[44px] md:min-h-[44px] rounded-[10px] border border-[#07070733] bg-white flex items-center px-[16px] md:px-[20px] gap-[10px] shadow-sm hover:border-[#223F7F] focus-within:border-[#223F7F] transition-all">
                            <div className="flex-shrink-0">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                placeholder="Search news..."
                                className={`flex-1 h-full border-none outline-none bg-transparent ${T.font.family} text-[16px] text-[#191919] placeholder-[#6B7280] font-medium`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center min-w-[32px] min-h-[32px] flex-shrink-0"
                                    aria-label="Clear search"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>


                        {/* Filters Button */}
                        <button className="hidden lg:flex w-[162px] h-[44px] rounded-[9.4px] border border-[#07070733] bg-white items-center justify-center gap-[10px] hover:bg-gray-50 transition-colors">
                            <FilterIcon />
                            <span className={`${T.font.family} font-medium text-[16px] text-[#3A3A3A]`}>Filters</span>
                        </button>
                    </div>

                    {/* Row 2: Dropdowns */}
                    <div className="flex flex-col sm:flex-row gap-[20px] w-full">
                        {/* College Dropdown */}
                        <CustomDropdown
                            options={[{ value: "all", label: "Select College" }, ...colleges]}
                            value={activeCollege}
                            onChange={setActiveCollege}
                            placeholder="Select College"
                            className="w-full sm:w-[380px]"
                        />

                        {/* Category Dropdown */}
                        <CustomDropdown
                            options={[{ value: "all", label: "Select Category" }, ...categories]}
                            value={activeCategory}
                            onChange={setActiveCategory}
                            placeholder="Select Category"
                            className="w-full sm:w-[380px]"
                        />
                    </div>

                </div>

                {/* News Grid */}
                {
                    filteredNews.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px] mb-8 md:mb-12">
                            {filteredNews.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-[#EEF2F7] rounded-[12.5px] border border-[#E5E7EB] overflow-hidden flex flex-col transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="h-[200px] sm:h-[240px] w-full bg-gray-100 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500"
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
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            <p className={`${T.font.family} text-lg`}>No news articles found matching your criteria.</p>
                            <button
                                className="mt-4 text-[#223F7F] underline hover:no-underline cursor-pointer"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCollege("all");
                                    setActiveCategory("all");
                                }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )
                }

                {/* Pagination (Simplified for now - can be logic'd if needed, but per request focusing on filtering) */}
                {
                    filteredNews.length > 0 && (
                        <div className="flex items-center justify-center gap-[8px] sm:gap-[12px] mt-[30px] md:mt-[60px]">
                            <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] sm:rounded-[9.4px] border border-[rgba(7,7,7,0.2)] hover:bg-[#EEF2F7] transition-all">
                                <img src={IconChevronLeft} className="w-[16px] h-[16px]" alt="" />
                            </button>

                            <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] bg-[#223F7F] text-white font-medium text-[14px] sm:text-[15.02px] shadow-sm transform transition-transform">
                                1
                            </button>
                            {/* 
                        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] sm:rounded-[9.4px] border border-[rgba(7,7,7,0.2)] text-[#191919] font-medium text-[14px] sm:text-[15.02px] hover:bg-[#EEF2F7] transition-all shadow-sm">
                            2
                        </button> 
                        */}

                            <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[8px] sm:rounded-[9.4px] border border-[rgba(7,7,7,0.2)] hover:bg-[#EEF2F7] transition-all">
                                <img src={IconChevronRight} className="w-[16px] h-[16px]" alt="" />
                            </button>
                        </div>
                    )
                }
            </div >
        </PageSection >
    );
};

export default LatestNews;
