// src/sections/home/ResearchInnovation.jsx
import React from "react";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";

const ResearchInnovation = ({ title, description1, image }) => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[80px]">

      {/* TITLE — preserved exactly */}
      <h2
        className={`
          
          font-bold
          text-[42px] leading-[52px]
          text-[#223F7F]
          mb-[40px]
          text-left
        `}
      >
        Research & Innovation
      </h2>

      {/* MAIN ROW — perfectly centered inside 1440px & responsive */}
      <div
        className="
          w-full
          max-w-[1200px]
          mx-auto
          flex flex-col lg:flex-row
          justify-between
          items-start
          gap-[24px] sm:gap-[32px] md:gap-[48px] lg:gap-[80px] xl:gap-[120px] 2xl:gap-[170px]
        "
      >
        {/* LEFT TEXT BLOCK */}
        <div className="flex flex-col gap-[20px] w-full lg:w-[501.5px]">
          <p
            className={T.font.family}
            style={{
              fontSize: "18px",
              lineHeight: "26px",
              textAlign: "justify",
              color: "#191919",
            }}
          >
            {description1}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-[8px] bg-gray-200 w-full max-w-[523px] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[343px] flex-shrink-0">
          <img loading="lazy" decoding="async"
            src={image}
            alt=""
            className="
              rounded-[8px]
              object-cover
              w-full
              h-full
            "
          />
        </div>
      </div>

      {/* BUTTON — unchanged design */}
      <div className="w-full flex justify-center mt-[40px]">
        <button
          className={T.font.family}
          style={{
            width: "187px",
            height: "46px",
            padding: "12px 24px",
            gap: "10px",
            backgroundColor: "#223F7F",
            color: "white",
            borderRadius: "9.4px",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "20px",
          }}
        >
          View Research
        </button>
      </div>

    </PageSection>
  );
};

export default ResearchInnovation;
