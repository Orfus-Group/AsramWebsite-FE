import React, { useState } from "react";
import NewsHero from "./sections/NewsHero";
import FeaturedStory from "./sections/FeaturedStory";
import LatestNews from "./sections/LatestNews";
import NewsArticleDetail from "./sections/NewsArticleDetail";

const NewsPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [activeCollege, setActiveCollege] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleBackToNews = () => {
        setSelectedArticle(null);
    };

    return (
        <>
            <NewsHero />
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
