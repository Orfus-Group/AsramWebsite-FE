import React from "react";
import heroBg from "../../assets/academics/academicsbg.jpg";
import { theme as T } from "../../globalTheme";
import PixelsSliderDots from "../PixelSliderDots";

const AcademicsHero = () => {
  return (
    <section
      className="
        relative 
        w-full 
        h-[492px]
        overflow-hidden
      "
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

      {/* =============================================================== */}
      {/* RESPONSIVE HERO TEXT CONTAINER (Matches 1440/1200 baseline)     */}
      {/* =============================================================== */}
      <div
        className="
          absolute bottom-[102px] w-full
        "
      >
        <div
          className="
            w-full 
            max-w-[1440px] 
            mx-auto 
            px-4 sm:px-6 md:px-10 lg:px-[120px]
          "
        >
          <div className="max-w-[1200px]">
            <h1
              className={`
                ${T.font.family}
                ${T.font.weight.bold}
                text-[42px]
                leading-[52px]
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
        </div>
      </div>

      {/* <PixelsSliderDots total={5} activeIndex={0} /> */}
    </section>
  );
};

export default AcademicsHero;
