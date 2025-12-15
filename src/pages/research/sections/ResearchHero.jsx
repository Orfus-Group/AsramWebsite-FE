import React from "react";
import { T } from "@/theme";
import ResearchHerobg from "@/assets/research/researchherobg.svg";


const ResearchHero = () => {

  return (
    <section className="relative w-full overflow-hidden">
      {/* ============================= */}
      {/* BG IMAGE CONTAINER + LOADER */}
      {/* ============================= */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[492px] overflow-hidden">

        {/* Loader (only until image loads) */}


        {/* Background Image */}
        <img
          src={ResearchHerobg}
          alt="Research & Innovation"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="
            absolute inset-0
            w-full h-full
            object-cover
          "
        />

        {/* Dark Overlay (always visible) */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)] z-[2]" />
      </div>

      {/* ============================= */}
      {/* HERO TEXT (always visible) */}
      {/* ============================= */}
      <div className="absolute inset-0 flex items-end lg:items-center z-[10]">
        <div
          className="
            w-full
            max-w-[1440px]
            mx-auto
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            pb-[24px] lg:pb-0
          "
        >
          <h1
            className={`
              absolute
              top-[180px] sm:top-[240px] md:top-[300px] lg:top-[400px]
              ${T.font.family}
              ${T.font.weight.bold}
              text-white
              w-[300px] sm:w-[380px] md:w-[494px]
              text-[28px] leading-[34px]
              sm:text-[34px] sm:leading-[42px]
              md:text-[42px] md:leading-[51px]
              tracking-normal
              text-left
            `}
          >
            Research & Innovation
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ResearchHero;
