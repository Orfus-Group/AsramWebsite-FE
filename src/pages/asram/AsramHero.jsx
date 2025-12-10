// src/sections/home/AsramHero.jsx
import React from "react";
import { T } from "../../theme";
import heroBg from "../../assets/asram/asramherobanner.svg";

const AsramHero = () => {
  return (
    <section
      className="
        relative w-full 
        h-[50vh]            /* MOBILE */
        sm:h-[55vh]        /* Slightly taller small phones */
        md:h-[60vh]        /* Tablets */
        lg:h-[665px]       /* Desktop unchanged */
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
        
        {/* Unified Container */}
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
              text-[38px] leading-[32px]   /* MOBILE */
              sm:text-[38px] sm:leading-[40px]
              md:text-[52px] md:leading-[50px]
              lg:text-[72px] lg:leading-[54px]   /* Desktop unchanged */
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
