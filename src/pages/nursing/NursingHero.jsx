import React from "react";
import heroBg from "@/assets/nursing/herobgimage.svg";
import { T } from "@/theme";

import CarouselSlideIcon from "@/assets/icons/CarouselSlideIcon";

const NursingHero = () => {


  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        /* HEIGHTS — DESKTOP */
        md:h-[797px]
        lg:h-[797px]

        /* MOBILE HEIGHT */
        h-[520px]
        sm:h-[560px]
      "
    >
      {/* ============================= */}
      {/* BG IMAGE WRAPPER + LOADER     */}
      {/* ============================= */}
      <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.35)]">

        {/* Loader only for background image */}


        {/* Background Image */}
        <img
          src={heroBg}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          alt="Nursing campus"
          className={`
            absolute inset-0
            w-full h-full
            object-cover object-center
          `}
        />
      </div>

      {/* ============================= */}
      {/* DARK OVERLAY (ALWAYS VISIBLE) */}
      {/* ============================= */}
      <div
        className="absolute inset-0"
      ></div>

      {/* ============================= */}
      {/* HERO TEXT (ALWAYS VISIBLE)    */}
      {/* ============================= */}
      <div
        className="
          absolute 
          w-full flex justify-center

          /* DESKTOP SPACING */
          bottom-[120px] md:bottom-[120px]

          /* TABLET */
          sm:bottom-[90px]

          /* MOBILE */
          bottom-[70px]

          px-4
          z-[10]
        "
      >
        <div
          className="
            w-full
            max-w-[1440px]
            mx-auto
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            flex justify-center
          "
        >
          <h1
            className={`
              ${T.font.family}
              ${T.font.weight.bold}

              /* DESKTOP */
              text-[52px] leading-[48px]
              sm:text-[60px] sm:leading-[50px]
              md:text-[72px] md:leading-[54px]

              /* MOBILE */
              text-[34px] leading-[36px]
              sm:text-[48px] sm:leading-[44px]

              text-center
            `}
            style={{
              color: T.color.text.light,
              maxWidth: "886px",
            }}
          >
            Your Career Starts Here
          </h1>
        </div>
      </div>

      {/* ============================= */}
      {/* SLIDER DOTS (ALWAYS VISIBLE) */}
      {/* ============================= */}


      {/* SLIDER DOTS */}
      {/* <div className="hidden md:block">
        <CarouselSlideIcon activeIndex={0} />
      </div> */}
    </section>
  );
};

export default NursingHero;
