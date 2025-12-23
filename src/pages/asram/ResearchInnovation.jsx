// src/sections/home/ResearchInnovation.jsx
import React from "react";
import { Link } from "react-router-dom";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";

const ResearchInnovation = ({ title, description1, image }) => {
  return (
    <PageSection bg="bg-[#FFF]" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
      <div
        className="
          w-full
          flex flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-[40px]
          lg:gap-[106px]
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full flex-1 flex flex-col items-start">
          <h2
            className="
              font-bold
              text-[28px] leading-[36px]
              lg:text-[32px] lg:leading-[42px]
              text-[#223F7F]
              mb-[24px]
            "
          >
            {title}
          </h2>

          <p
            className="
              text-[#191919BF]
              font-regular
              text-[16px] leading-[26px]
              lg:text-[18px] lg:leading-[28px]
              mb-[40px]
              text-justify
            "
          >
            {description1}
          </p>

          <Link
            to="/research"
            className="
              px-[32px]
              h-[46px]
              flex items-center justify-center
              rounded-[8px]
              bg-[#223f7f]
              text-white
              font-medium
              text-[18px]
              hover:bg-[#1a3163]
              transition-colors
              w-fit
            "
          >
            Explore Research
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full
            lg:w-[546px]
            lg:h-[330px]
            flex-shrink-0
            rounded-[12px]
            overflow-hidden
            shadow-lg
          "
        >
          <img
            loading="lazy"
            decoding="async"
            src={image}
            alt="Research & Innovation"
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ResearchInnovation;
