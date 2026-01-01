import React, { useState, useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
const NewsHerobg = "/AsramWebsite-FE/assets/news/asramnewsbanner.png";
import TypedText from "@/components/common/TypedText";

import FeaturedStory from "./sections/FeaturedStory";
import LatestNews from "./sections/LatestNews";


import CampusEventsSection from "./sections/CampusEventsSection";


const NewsPage = () => {
  const [activeCollege, setActiveCollege] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const { setHero, hideHero } = useHero();

  useLayoutEffect(() => {
    setHero({
      title: (
        <TypedText
          text="ASRAM News"
          className="font-montserrat font-bold text-[40px] leading-[1.35] text-white"
        />
      ),
      bgImage: NewsHerobg,
      children: (
        <>
          <p className="font-montserrat font-medium text-[22px] leading-[1.36] text-white max-w-[520px] mb-6">
            Updates and announcements from across academics, healthcare, and campus life.
          </p>
        </>
      ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);

  return (
    <>
      <CampusEventsSection />
      <FeaturedStory />
      <LatestNews
        activeCollege={activeCollege}
        setActiveCollege={setActiveCollege}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </>
  );
};


export default NewsPage;
