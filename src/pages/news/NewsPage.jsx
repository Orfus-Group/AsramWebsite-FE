import React, { useState, useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
const NewsHerobg = "/AsramWebsite-FE/assets/news/asramnewsbanner.png";
import TypedText from "@/components/common/TypedText";

import FeaturedStory from "./sections/FeaturedStory";
import LatestNews from "./sections/LatestNews";


import CampusEventsSection from "./sections/CampusEventsSection";
import { useLocation } from "react-router-dom";


const NewsPage = () => {

  const location = useLocation();

useLayoutEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      // Delay ensures hero + layout finished rendering
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
}, [location]);


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
      <section id="campus-events" className="scroll-mt-[60px]">
      <CampusEventsSection />
    </section>
      <section id="featured-story" className="scroll-mt-[60px]">
      <FeaturedStory />
    </section>
      <section id="latest-news" className="scroll-mt-[60px]">
      <LatestNews
        activeCollege={activeCollege}
        setActiveCollege={setActiveCollege}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </section>
    </>
  );
};


export default NewsPage;
