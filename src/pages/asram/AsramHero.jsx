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
        h-[65vh]
        sm:h-[60vh]
        md:h-[75vh]
        lg:h-[760px]
        overflow-hidden
      "
    >
      {/* ============================= */}
      {/* BACKGROUND IMAGE             */}
      {/* ============================= */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBg}
          alt="Asram Campus"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="
            w-full h-full object-cover
            object-[50%_30%]
            sm:object-center
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute inset-0
          "
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
          <div className="max-w-[700px] text-white">
            <h1
              className="
                text-white
                text-[40px] leading-[1.1]
                md:text-[50px]
                lg:text-[60px] lg:leading-[54px]
                mb-6
              "
            >
              <span className="font-regular">DISCOVER </span>
              <span className="font-bold">ASRAM</span>
            </h1>

            <p className="
              text-[22px] leading-[1.6]
              md:text-[18px] md:leading-[1.6]
              mb-8 opacity-90 font-medium
              max-w-[500px]
            ">
              At Asram, we prepare you to thrive in the ever-evolving world of health sciences.
            </p>

            <button
              className="
                bg-[#191919] 
                hover:bg-[#27272a] 
                text-white 
                px-8 py-3 
                rounded-[8px] 
                text-[22px] font-medium 
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
