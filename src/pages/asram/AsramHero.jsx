import React, { useState } from "react";
import heroBg from "@/assets/asram/asramherobanner.svg";
import PageSection from "@/features/common/layout/PageContainer";


const AsramHero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      className="
        relative w-full
        h-[65vh]
        sm:h-[60vh]
        md:h-[75vh]
        lg:h-[665px]
        overflow-hidden
      "
    >
      {/* ============================= */}
      {/* BG CONTAINER WITH LOADER ONLY */}
      {/* ============================= */}
      <div className="absolute inset-0 w-full h-full">

        {/* LOADER ONLY FOR BG IMAGE */}


        {/* BACKGROUND IMAGE */}
        <img
          src={heroBg}
          alt="Asram Campus"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`
            w-full h-full object-cover
            object-[50%_30%]
            sm:object-center
            transition-opacity duration-500
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-[10]">
        <PageSection
          sectionClassName="absolute inset-0 flex justify-center items-center"
          className="!py-0"
          bg="transparent"
        >
          <h1
            className="
              font-bold text-white text-center
              text-[38px] leading-[34px]
              sm:text-[48px] sm:leading-[46px]
              md:text-[60px] md:leading-[54px]
              lg:text-[72px] lg:leading-[54px]
            "
          >
            We Make Doctors
          </h1>
        </PageSection>
      </div>
    </section>
  );
};

export default AsramHero;
