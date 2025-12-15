// src/sections/home/AsramNewsEvents.jsx
import React from "react";
import img1 from "@/assets/asram/newsart1.svg";
import img2 from "@/assets/asram/newsart2.svg";
import img3 from "@/assets/asram/newsart3.svg";
import img4 from "@/assets/asram/newsart4.svg";
import img5 from "@/assets/asram/newsart5.svg";
import usericon from "@/assets/asram/username.svg";
import calicon from "@/assets/asram/cal.svg";
import notificationicon from "@/assets/asram/notific.svg";
import NewsSection from "@/components/news/NewsSection";

const AsramNewsEvents = () => {
  const meta = [
    { icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50016 7.91665C11.2491 7.91665 12.6668 6.49888 12.6668 4.74998C12.6668 3.00108 11.2491 1.58331 9.50016 1.58331C7.75126 1.58331 6.3335 3.00108 6.3335 4.74998C6.3335 6.49888 7.75126 7.91665 9.50016 7.91665Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25"/>
<path d="M15.8334 13.8541C15.8334 15.8214 15.8334 17.4166 9.50008 17.4166C3.16675 17.4166 3.16675 15.8214 3.16675 13.8541C3.16675 11.8868 6.0025 10.2916 9.50008 10.2916C12.9977 10.2916 15.8334 11.8868 15.8334 13.8541Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25"/>
</svg>), label: "john" },
    { icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50016 7.91665C11.2491 7.91665 12.6668 6.49888 12.6668 4.74998C12.6668 3.00108 11.2491 1.58331 9.50016 1.58331C7.75126 1.58331 6.3335 3.00108 6.3335 4.74998C6.3335 6.49888 7.75126 7.91665 9.50016 7.91665Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25"/>
<path d="M15.8334 13.8541C15.8334 15.8214 15.8334 17.4166 9.50008 17.4166C3.16675 17.4166 3.16675 15.8214 3.16675 13.8541C3.16675 11.8868 6.0025 10.2916 9.50008 10.2916C12.9977 10.2916 15.8334 11.8868 15.8334 13.8541Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25"/>
</svg>), label: "14 Nov 2025" },
    { icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50016 7.91665C11.2491 7.91665 12.6668 6.49888 12.6668 4.74998C12.6668 3.00108 11.2491 1.58331 9.50016 1.58331C7.75126 1.58331 6.3335 3.00108 6.3335 4.74998C6.3335 6.49888 7.75126 7.91665 9.50016 7.91665Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25"/>
<path d="M15.8334 13.8541C15.8334 15.8214 15.8334 17.4166 9.50008 17.4166C3.16675 17.4166 3.16675 15.8214 3.16675 13.8541C3.16675 11.8868 6.0025 10.2916 9.50008 10.2916C12.9977 10.2916 15.8334 11.8868 15.8334 13.8541Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.25"/>
</svg>), label: "23" },
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
