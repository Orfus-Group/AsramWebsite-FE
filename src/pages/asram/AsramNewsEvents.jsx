// src/sections/home/AsramNewsEvents.jsx
import React from "react";
import img1 from "../../assets/asram/newsart1.svg";
import img2 from "../../assets/asram/newsart2.svg";
import img3 from "../../assets/asram/newsart3.svg";
import img4 from "../../assets/asram/newsart4.svg";
import img5 from "../../assets/asram/newsart5.svg";
import usericon from "../../assets/asram/username.svg";
import calicon from "../../assets/asram/cal.svg";
import notificationicon from "../../assets/asram/notific.svg";
import NewsSection from "../../components/news/NewsSection";

const AsramNewsEvents = () => {
  const meta = [
    { icon: usericon, label: "john" },
    { icon: calicon, label: "14 Nov 2025" },
    { icon: notificationicon, label: "23" },
  ];

  return (
    <NewsSection
      featured={{
        image: img3,
        title: "Leading Excellence in Medical Education & Clinical Training",
        meta,
      }}
      leftItems={[
        { image: img1, title: "Advanced Oncology & Precision Treatment" },
        { image: img2, title: "Comprehensive Healthcare for Every Patient" },
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
      ctaText="View All News"
    />
  );
};

export default AsramNewsEvents;
