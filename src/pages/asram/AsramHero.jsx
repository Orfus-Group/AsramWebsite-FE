import React from "react";
// import heroBg from "@/assets/asram/asramherobanner.svg";
import heroBg from "@/assets/asram/asramherobanner.png";

import PageSection from "@/features/common/layout/PageContainer";
import CarouselSlideIcon from "@/assets/icons/CarouselSlideIcon";

const AsramHero = () => {
  return (
    <section
      className="
        relative w-full
        h-[335px]
        sm:h-[450px]
        md:h-[75vh]
        lg:h-[760px]
        overflow-hidden
      "
    >
      {/* ============================= */}
      {/* BACKGROUND IMAGE             */}
      {/* ============================= */}
      <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.35)]">
        <img
          src={heroBg}
          alt="Asram Campus"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="
            w-full h-full object-cover
            object-[50%_15%]
            sm:object-center
          "
        />

        {/* Gradient Overlay */}
        {/* Mobile Gradient Overlay */}
        <div
          className="absolute inset-0 block md:hidden"
          style={{
            background: "linear-gradient(90deg, #223F7F 0%, rgba(34, 63, 127, 0.85) 35%, rgba(34, 63, 127, 0.1) 100%)"
          }}
        />

        {/* Desktop Gradient Overlay */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: "linear-gradient(289deg, rgba(255, 255, 255, 0) 100%, rgba(210, 212, 221, 0.33) 59%, #223f7f 30%)"
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center z-[10]">
        <PageSection
          sectionClassName="absolute inset-0 flex items-center"
          className="!py-0 !lg:pl-[120px] !lg:pr-[120px]"
          bg="transparent"
        >
          <div className="w-full md:max-w-[700px] text-white flex flex-col items-center text-center md:block md:text-left">
            <h1
              className="
                text-white
                text-[28px] sm:text-[40px] leading-[1.1]
                md:text-[50px]
                lg:text-[60px] lg:leading-[54px]
                mb-6
              "
            >
              <span className="font-regular">DISCOVER </span>
              <span className="font-bold">ASRAM</span>
            </h1>

            <p className="
              text-[16px] sm:text-[18px] leading-[1.5]
              md:text-[18px] md:leading-[1.6]
              lg:text-[22px]
              mb-6 opacity-90 font-medium
              max-w-[320px] sm:max-w-[500px]
            ">
              At Asram, we prepare you to thrive in the ever-evolving world of health sciences.
            </p>

            <button
              className="
                bg-[#191919] 
                hover:bg-[#27272a] 
                text-white 
                px-6 py-2 md:px-8 md:py-3
                rounded-[8px] 
                text-[16px] md:text-[22px] font-medium 
                transition-colors
              "
            >
              Explore Programs
            </button>
          </div>
        </PageSection>
      </div>
      <div className="hidden md:block">
        <CarouselSlideIcon activeIndex={0} />
      </div>
    </section>
  );
};

export default AsramHero;
