import React, { useState, useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import NewsHerobg from "@/assets/news/asramnewsbanner.png";

import FeaturedStory from "./sections/FeaturedStory";
import LatestNews from "./sections/LatestNews";
import NewsArticleDetail from "./sections/NewsArticleDetail";

import CampusEventsSection from "./sections/CampusEventsSection";

const NewsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCollege, setActiveCollege] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const { setHero, hideHero } = useHero();



  useLayoutEffect(() => {
    setHero({
      title: (
        <span className="font-montserrat font-bold text-[40px] leading-[1.35] text-white">
          ASRAM News
        </span>
      ),
      bgImage: NewsHerobg,
      children: (
        <>
          <p className="font-montserrat font-medium text-[22px] leading-[1.36] text-white max-w-[520px] mb-6">
            Updates and announcements from across academics, healthcare, and campus life.
          </p>

          <button
            className="
                    bg-[#191919] 
                    hover:bg-[#27272a] 
                    text-white 
                    px-6 py-2 md:px-8 md:py-3
                    rounded-[8px] 
                    text-[16px] md:text-[22px] font-medium 
                    transition-colors
                "
          >
            Explore News
          </button>
        </>
      ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToNews = () => {
    setSelectedArticle(null);
  };

  return (
    <>

      <CampusEventsSection />
      <FeaturedStory />

      {/* Main News Section with Shared Filters */}
      {selectedArticle ? (
        <NewsArticleDetail
          article={selectedArticle}
          activeCollege={activeCollege}
          setActiveCollege={setActiveCollege}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onBackToNews={handleBackToNews}
        />
      ) : (
        <LatestNews
          activeCollege={activeCollege}
          setActiveCollege={setActiveCollege}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onArticleClick={handleArticleClick}
        />
      )}
    </>
  );
};

export default NewsPage;
