import React from "react";
import heroBg from "../../assets/academics/academicsbg.jpg";
import { theme as T } from "../../globalTheme";   // ← Use theme tokens
import PixelsSliderDots from "../PixelSliderDots";

const AcademicsHero = () => {
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

      {/* 30% Black Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.30)" }}
      ></div>

      {/* HERO HEADING */}
      <div className="absolute bottom-[102px] left-[150px]">
        <h1
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]                 /* Figma exact */
            leading-[52px]              /* Figma exact */
            text-white
          `}
          style={{
            maxWidth: "673px",
            color: T.color.text.light,
          }}
        >
          Explore Our Nursing Programs
        </h1>
      </div>

      <PixelsSliderDots total={5} activeIndex={0} />
    </section>
  );
};

export default AcademicsHero;
