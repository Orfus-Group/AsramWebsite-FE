// src/sections/home/ReputationQuality.jsx 
import React from "react";
import { T } from "../../theme";
import repImage from "../../assets/asram/reputation.svg";

const ReputationQuality = () => {
  return (
    <section
      className="w-full bg-white py-[60px] md:py-[80px]"
    >
      {/* FIXED DESKTOP LAYOUT WIDTH — EXACT FIGMA 1440 + 120px PADDINGS */}
      <div
        className="
          w-full 
          max-w-[1440px]
          mx-auto
          flex flex-col md:flex-row
          items-start justify-between

          /* RESPONSIVE PADDING */
          px-4 sm:px-6 md:px-10 lg:px-[120px]

          /* GAP SHOULD BE STRICT AS PER FIGMA */
          gap-[40px] md:gap-[80px]
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[536px] flex flex-col">
          <h2
            className={`
              ${T.font.family}
              font-bold
              text-[#223F7F]
              text-[32px] leading-[38px]
              md:text-[32px] md:leading-[40px]
              mb-[20px]
            `}
          >
            A Reputation Built on Quality
          </h2>

          <p
            className={`
              ${T.font.family}
              text-[16px] leading-[26px]
              md:text-[18px] md:leading-[29px]
              text-[rgba(25,25,25,0.75)]
              mb-[30px]
            `}
          >
            ASRAM School of Nursing is widely respected for its high-quality
            teaching, strong clinical training, and excellent student outcomes.
            Our programs continue to earn strong recognition for academic
            standards and hands-on learning.
          </p>

          <button
            className={`
              w-full md:w-[301px] 
              h-[46px]
              flex items-center justify-center
              rounded-[8px]
              text-white
              ${T.font.family}
              font-semibold
              text-[15px] md:text-[16px]
              bg-[#223F7F]
              md:mt-[40px]
            `}
          >
            Explore Our Achievements
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full md:w-[523px]
            h-[240px] sm:h-[280px] md:h-[343px]
            rounded-[8px] overflow-hidden
            bg-[#D9D9D9]
            flex-shrink-0
          "
        >
          <img
            src={repImage}
            alt="Reputation Built on Quality"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ReputationQuality;
