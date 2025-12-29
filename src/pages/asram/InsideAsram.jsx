// src/sections/home/InsideASRAM.jsx
import React from "react";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";
import ParallaxImage from "@/components/common/ParallaxImage";

/* ----------------------------------
   Quote Icon
---------------------------------- */
const QuoteIcon = "/AsramWebsite-FE/assets/icons/IconQuote.svg";

/* ----------------------------------
   Inside ASRAM Section
---------------------------------- */
const InsideASRAM = ({ title, image, quote }) => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
      {/* TITLE */}
      <h2
        className="
          font-bold
          text-[28px] leading-[34px]
          sm:text-[34px] sm:leading-[42px]
          md:text-[38px] md:leading-[48px]
          lg:text-[42px] lg:leading-[52px]
          text-[#223F7F]
          mb-[30px] md:mb-[40px]
        "
      >
        {title}
      </h2>

      {/* CONTENT */}
      <div
        className="
          flex flex-col
          lg:flex-row
          items-start
          lg:items-center
          gap-[30px]
          md:gap-[80px]
          w-full
        "
      >
        {/* IMAGE — Fixed Dimensions on Desktop */}
        <div
          className="
            w-full
            lg:w-[600px]
            lg:h-[411.5px]
            flex-shrink-0
            rounded-[12px]
            overflow-hidden
            bg-gray-200
            aspect-[3/2]
            lg:aspect-auto
            relative
          "
        >
          <ParallaxImage
            src={image}
            alt="Inside ASRAM"
            className="w-full h-full object-cover"
          />
        </div>

        {/* QUOTE */}
        <div
          className="
            w-full
            flex-1
            flex flex-col
            items-start
            justify-center
            h-full
          "
        >
          <img src={QuoteIcon} className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]" alt="" />

          <h5
            className="
              mt-[24px]
              text-[18px]
              sm:text-[20px]
              md:text-[22px]
              lg:text-[24px]
              font-medium
              text-[#191919]
              leading-[1.4]
              text-left
            "
          >
            {quote}
          </h5>
        </div>
      </div>
    </PageSection >
  );
};

export default InsideASRAM;
