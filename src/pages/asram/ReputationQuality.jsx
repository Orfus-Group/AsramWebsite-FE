// src/sections/home/ReputationQuality.jsx
import React from "react";
import { T } from "@/theme";
import repImage from "@/assets/asram/reputationbuilt.png";
import PageSection from "@/features/common/layout/PageContainer";

const ReputationQuality = () => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">

      {/* INNER LAYOUT */}
      <div
        className="
          w-full
          flex flex-col-reverse
          lg:flex-row
          items-start
          justify-between
          gap-[30px]
          md:gap-[50px]
          lg:gap-[72px]
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full flex flex flex-col justify-center h-full">
          <h3
            className="
              font-bold
              text-[#223F7F]
              text-[28px] leading-[36px]
              sm:text-[30px] sm:leading-[38px]
              md:text-[32px] md:leading-[40px]
              mb-[20px]
            "
          >
            A Reputation Built on Quality
          </h3>

          <p
            className="
              text-[16px] leading-[26px]
              md:text-[18px] md:leading-[29px]
              text-[#191919BF]
              mb-[30px]
            "
          >
            ASRAM School of Nursing is widely respected for its high-quality teaching, strong clinical training, and excellent student outcomes. Our programs continue to earn strong recognition for academic standards and hands-on learning.
          </p>

          <button
            className="
              w-full
              sm:w-[260px]
              md:w-[301px]
              h-[46px]
              flex items-center justify-center
              rounded-[8px]
              text-white
              font-medium
              text-[15px]
              md:text-[18px]
              bg-[#223F7F]
              md:mt-[20px]
            "
          >
            Explore Our Achievements
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full
            lg:w-[580px]
            lg:h-[355px]
            rounded-[12px]
            overflow-hidden
            bg-gray-200
            flex-shrink-0
             border border-[rgba(7,7,7,0.2)]
                 shadow-[0_2px_4px_rgba(0,0,0,0.08),0_6px_6px_rgba(0,0,0,0.02)]

          "
        >
          <img
            loading="lazy"
            decoding="async"
            src={repImage}
            alt="Reputation Built on Quality"
            className="
              w-full
              h-full
              object-cover
              aspect-[3.5/4] md:aspect-[16/9] lg:aspect-auto
            "
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ReputationQuality;
