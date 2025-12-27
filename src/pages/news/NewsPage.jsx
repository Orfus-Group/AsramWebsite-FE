import React, { useState, useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import NewsHerobg from "@/assets/news/asramnewsbanner.png";
import TypedText from "@/components/common/TypedText";

import FeaturedStory from "./sections/FeaturedStory";
import LatestNews from "./sections/LatestNews";


import CampusEventsSection from "./sections/CampusEventsSection";
import MotionSection from "@/components/common/MotionSection";

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
      <MotionSection>
        <CampusEventsSection />
      </MotionSection>
      <MotionSection delay={0.1}>
        <FeaturedStory />
      </MotionSection>
      <MotionSection delay={0.2}>
        <LatestNews
          activeCollege={activeCollege}
          setActiveCollege={setActiveCollege}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </MotionSection>
    </>
  );
};


export default NewsPage;
