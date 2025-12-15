import React from "react";
import NewsHero from "./sections/NewsHero";
import FeaturedStory from "./sections/FeaturedStory";
import LatestNews from "./sections/LatestNews";

const NewsPage = () => {
    return (
        <>
            <NewsHero />
            <FeaturedStory />
            <LatestNews />
        </>
    );
};

export default NewsPage;
