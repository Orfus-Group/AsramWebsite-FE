// src/sections/home/AsramHero.jsx
import React from "react";
import { T } from "../../theme";
import heroBg from "../../assets/asram/asramherobanner.svg";
import PageSection from "../../features/common/layout/PageContainer";

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

        {/* Unified Layout Wrapper */}
        <PageSection
          sectionClassName="absolute inset-0 flex justify-center items-center"
          className="!py-0"      // override vertical padding inside hero
          bg="transparent"
        >
          <h1
            className={`
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
        </PageSection>

      </div>
    </section>
  );
};

export default AsramHero;
