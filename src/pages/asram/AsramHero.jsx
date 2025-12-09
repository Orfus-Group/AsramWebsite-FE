// src/sections/home/AsramHero.jsx
import React from "react";
import { T } from "../../theme";
import heroBg from "../../assets/asram/asramherobanner.svg";

const AsramHero = () => {
  return (
    <section
      className="
        relative w-full 
        h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-[665px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Asram Campus"
        className="w-full h-full object-cover object-center"
      />

      {/* HERO HEADING */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* UNIFIED CONTAINER */}
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
              font-bold
              text-white
              text-[34px] leading-[38px]
              sm:text-[48px] sm:leading-[46px]
              md:text-[60px] md:leading-[54px]
              lg:text-[72px] lg:leading-[54px]
              text-center
            `}
          >
            We Make Doctors
          </h1>
        </div>

      </div>
    </section>
  );
};

export default AsramHero;
