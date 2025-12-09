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
        h-[797px]
        overflow-hidden
      `}
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Nursing campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 30% black overlay (like Zeplin) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.30)" }}
      ></div>

      {/* Heading – keep the same layout that was working, only change sizes */}
    <div className="absolute bottom-[102px] left-1/2 -translate-x-1/2">
  <h1
    className={`
      ${T.font.family}
      ${T.font.weight.bold}
      text-[72px]
      leading-[54px]
      text-center
    `}
    style={{
      color: T.color.text.light,
      width: "886px",        // prevents wrap
      whiteSpace: "nowrap",  // ensures single line
    }}
  >
    Your Career Starts Here
  </h1>
</div>


      <PixelsSliderDots total={5} activeIndex={0} />
    </section>
  );
};

export default NursingHero;
