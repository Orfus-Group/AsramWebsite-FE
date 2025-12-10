import React from "react";
import heroBg from "../../assets/nursing/herobgimage.svg";
import { T } from "../../theme";
import PixelsSliderDots from "../PixelSliderDots";

const NursingHero = () => {
  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden

        /* HEIGHTS — DESKTOP UNTOUCHED */
        md:h-[797px]
        lg:h-[797px]

        /* MOBILE HEIGHT OPTIMIZED */
        h-[520px]          /* base mobile height */
        sm:h-[560px]
      `}
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Nursing campus"
        className="
          absolute inset-0 
          w-full h-full 
          object-cover object-center
        "
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.30)" }}
      ></div>

      {/* HERO TEXT */}
      <div
        className="
          absolute 
          bottom-[120px]            /* Desktop */
          md:bottom-[120px]
          sm:bottom-[90px]
          bottom-[70px]             /* Mobile */
          w-full flex justify-center
          px-4
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

              /* DESKTOP — UNTOUCHED */
              text-[52px] leading-[48px]
              sm:text-[60px] sm:leading-[50px]
              md:text-[72px] md:leading-[54px]

              /* MOBILE IMPROVEMENTS */
              text-[34px] leading-[36px]    /* base mobile */
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

      {/* SLIDER DOTS */}
      <div
        className="
          absolute bottom-[20px]
          w-full flex justify-center
          sm:bottom-[30px]
          md:bottom-[40px]
        "
      >
        <PixelsSliderDots total={5} activeIndex={0} />
      </div>

    </section>
  );
};

export default NursingHero;
