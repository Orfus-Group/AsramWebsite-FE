// src/sections/home/AsramNewsEvents.jsx
import React from "react";
import { Link } from "react-router";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";
import IconFullArrowRight from "@/assets/icons/IconFullArrow";

// Images
import img1 from "@/assets/asram/newshighlight1.png"; // "College of Nursing..."
import img2 from "@/assets/asram/newshighlight2.png"; // "Medical College Students..."
import img3 from "@/assets/asram/newshighlight3.png"; // "New State-of-the-Art..."
import { IconArrowRight } from "@/assets/icons";

// Icons

const newsData = [
  {
    id: 1,
    image: img1,
    category: "Event",
    date: "November 28, 2024",
    title: "College of Nursing Hosts International Conference on Patient Care Excellence",
    description: "Over 500 delegates from 15 countries participated in the three-day conference featuring renowned speakers and hands-on workshops on advanced nursing practices.",
  },
  {
    id: 2,
    image: img2,
    category: "Event",
    date: "November 28, 2024",
    title: "Medical College Students Secure Top Ranks in NEET PG Examinations",
    description: "15 students from ASRAM College of Medical Sciences achieved All India ranks within top 100, showcasing exceptional academic performance and dedicated preparation.",
  },
  {
    id: 3,
    image: img3,
    category: "Event",
    date: "November 28, 2024",
    title: "New State-of-the-Art Simulation Lab Inaugurated at Paramedical College",
    description: "The advanced simulation laboratory equipped with latest medical technology will provide hands-on training for paramedical students in emergency care and diagnostic procedures.",
  },
];

const AsramNewsEvents = () => {
  return (
    <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="flex flex-col items-start w-full">
        {/* HEADER */}
        <div className="mb-[30px] md:mb-[50px]">
          <h2
            className="
              text-[#223F7F]
              font-bold
              text-[28px] sm:text-[32px] md:text-[42px]
              leading-[1.2]
              mb-[12px]
            "
          >
            News
          </h2>
          <p
            className="
              text-[#6B6B6B]
              text-[16px] sm:text-[18px] md:text-[20px]
              font-medium
            "
          >
            Latest highlights from our campus, hospital, and academic community.
          </p>
        </div>

        {/* NEWS GRID */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-[20px] lg:gap-[30px]
            w-full
            mb-[40px] md:mb-[60px]
          "
        >
          {newsData.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col
                bg-white
                rounded-[12px]
                overflow-hidden
                border border-[#E5E7EB]
                w-full
              "
            >
              {/* IMAGE */}
              <div className="w-full h-[192px] bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-[20px] flex flex-col flex-1">
                {/* META ROW */}
                <div className="flex items-center gap-[12px] mb-[16px]">
                  <span
                    className="
                      bg-[#223F7F1A]
                      text-[#223f7f]
                      text-[12px]
                      font-medium
                      px-[10px] py-[4px]
                      rounded-[33554400px]
                    "
                  >
                    {item.category}
                  </span>
                  <div className="flex items-center gap-[6px] text-[#6B6B6B] text-[12px]">
                    {/* Fallback simple calendar icon if import fails or verify shape */}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_187_475)">
                        <path d="M4 1V3" stroke="#6A7282" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 1V3" stroke="#6A7282" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z" stroke="#6A7282" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.5 5H10.5" stroke="#6A7282" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_475">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="font-regular text-[12px] text-[#6A7282]">{item.date}</span>
                  </div>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[#191919]
                    font-bold
                    text-[18px]
                    leading-[26px]
                    mb-[12px]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[#4A5565]
                    text-[14px]
                    leading-[22px]
                    mb-[20px]
                    flex-1
                  "
                >
                  {item.description}
                </p>

                {/* READ MORE */}
                <div className="w-full pt-[12px] border-t border-[#F3F4F6] mt-auto">
                  <Link
                    to="/news"
                    className="
                      flex items-center gap-[6px]
                      text-[#223F7F]
                      text-[14px] font-medium
                      hover:translate-x-1 transition-transform
                      w-fit
                    "
                  >
                    Read More
                    <IconArrowRight size={16} stroke="#223F7F" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* APPLY BUTTON */}
        <div className="w-full flex justify-center">
          <button
            className="
              bg-[#223F7F]
              text-[#F7F9FC]
              font-medium
              text-[18px]
              px-[32px] py-[12px]
              rounded-[9.3px]
              hover:bg-[#1A3163]
              transition-colors
            "
          >
            Apply Now
          </button>
        </div>
      </div>
    </PageSection>
  );
};

export default AsramNewsEvents;
