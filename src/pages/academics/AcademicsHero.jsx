import React, { useState } from "react";
import heroBg from "@/assets/academics/academicsbg.svg";
import { theme as T } from "@/globalTheme";


const AcademicsHero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      className="
        relative 
        w-full 
        h-[492px]
        overflow-hidden
      "
    >
      {/* ============================= */}
      {/* BG IMAGE CONTAINER + LOADER */}
      {/* ============================= */}
      <div className="absolute inset-0 w-full h-full">

        {/* Loader visible only until BG loads */}


        {/* Background Image */}
        <img
          src={heroBg}
          alt="Nursing campus"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`
            absolute inset-0 
            w-full h-full 
            object-cover
            transition-opacity duration-500
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>

      {/* ============================= */}
      {/* BLACK OVERLAY (always visible) */}
      {/* ============================= */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.30)" }}
      ></div>

      {/* ============================= */}
      {/* HERO TEXT (always visible) */}
      {/* ============================= */}
      <div className="absolute bottom-[102px] w-full z-[10]">
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
    </section>
  );
};

export default AcademicsHero;
