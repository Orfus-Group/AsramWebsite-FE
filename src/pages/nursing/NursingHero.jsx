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
        h-[797px]            /* Desktop */
        md:h-[797px]
        sm:h-[560px]
        h-[480px]            /* Mobile */
        overflow-hidden
      `}
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Nursing campus"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.30)" }}
      ></div>

      {/* HERO TEXT */}
      <div
        className="
          absolute 
          bottom-[120px] 
          sm:bottom-[90px]
          md:bottom-[102px]
          w-full 
          flex justify-center
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
              text-[52px] leading-[48px]
              sm:text-[60px] sm:leading-[50px]
              md:text-[72px] md:leading-[54px]
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

           <PixelsSliderDots total={5} activeIndex={0} />

    </section>
  );
};

export default NursingHero;
