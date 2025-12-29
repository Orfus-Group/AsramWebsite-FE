import React from "react";
const img1 = "/AsramWebsite-FE/assets/asram/newsart1.svg";
const img2 = "/AsramWebsite-FE/assets/asram/newsart2.svg";
const img3 = "/AsramWebsite-FE/assets/asram/newsart3.svg";
const img4 = "/AsramWebsite-FE/assets/asram/newsart4.svg";
const img5 = "/AsramWebsite-FE/assets/asram/newsart5.svg";

const IconMetaUser = "/AsramWebsite-FE/assets/icons/IconMetaUser.svg";
const IconMetaCalendar = "/AsramWebsite-FE/assets/icons/IconMetaCalendar.svg";
const IconMetaClock = "/AsramWebsite-FE/assets/icons/IconMetaClock.svg";

import NewsSection from "@/components/news/NewsSection";


const NewsEvents = () => {

  const meta = [
    {
      icon: <img src={IconMetaUser} className="w-[19px] h-[19px]" alt="" />, label: "john"
    },
    {
      icon: <img src={IconMetaCalendar} className="w-[19px] h-[19px]" alt="" />, label: "14 Nov 2025"
    },
    {
      icon: <img src={IconMetaClock} className="w-[19px] h-[19px]" alt="" />, label: "23"
    },
  ];

  return (
    <NewsSection
      bg="bg-white"
      featured={{
        image: img3,
        title: "Leading Excellence in Medical Education & Clinical Training",
        meta,
      }}
      leftItems={[
        { image: img1, title: "Advanced Oncology & Precision Treatment" },
        { image: img2, title: "Comprehensive Healthcare for Every" },
      ]}
      rightItems={[
        { image: img4, title: "Shaping Skilled & Compassionate Nurses" },
        { image: img5, title: "Training Professionals for Modern Healthcare" },
      ]}
      gallery={[
        { image: img1, title: "" },
        { image: img2, title: "" },
        { image: img4, title: "" },
        { image: img5, title: "" },
      ]}
      description="Latest highlights from our campus, hospital, and academic community."
    />
  );
};

export default NewsEvents;
