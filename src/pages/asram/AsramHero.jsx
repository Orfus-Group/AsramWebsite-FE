// src/sections/home/AsramHero.jsx
import React from "react";
import { T } from "../../theme";
import heroBg from "../../assets/asram/asramherobanner.svg";
import PixelsSliderDots from "../PixelSliderDots";

const AsramHero = () => {
  return (
    <section className="relative w-full h-[665px] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Asram Campus"
        className="w-full h-full object-cover"
      />

      {/* HERO HEADING */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1440px] mx-auto px-[120px]">

          {/* Blue Highlight Bar */}
          <div className="inline-block px-[20px] py-[8px] rounded-[4px]">
            <h1
              className={`
                ${T.font.family}
                font-bold
                text-[72px]
                leading-[54px]
                tracking-[0px]
                text-white
              `}
            >
              We Make Doctors
            </h1>
          </div>

        </div>
      </div>

      {/* Slider dots */}
      {/* <PixelsSliderDots total={5} activeIndex={0} /> */}
    </section>
  );
};

export default AsramHero;
