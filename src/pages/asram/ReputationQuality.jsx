// src/sections/home/ReputationQuality.jsx 
import React from "react";
import { T } from "../../theme";
import repImage from "../../assets/asram/reputation.svg";
import PageSection from "../../features/common/layout/PageContainer";

const ReputationQuality = () => {
  return (
<PageSection 
  bg="bg-white"
  paddingClass="py-[80px]"   // ⭐ Explicit padding
>
      {/* INNER LAYOUT (UNCHANGED DESIGN) */}
      <div
        className="
          w-full
          flex flex-col md:flex-row
          items-start justify-between
          gap-[40px] md:gap-[80px]
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[536px] flex flex-col">
          <h2
            className={`
              
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
          <img loading="lazy" decoding="async"
            src={repImage}
            alt="Reputation Built on Quality"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* END INNER */}
    </PageSection>
  );
};

export default ReputationQuality;
