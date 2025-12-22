import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import CarouselSlideIcon from "@/assets/icons/CarouselSlideIcon";

const CommonHero = ({ title, bgImage, children }) => {
    return (
        <section
            className="
        relative w-full
        relative w-full
        min-h-[335px] h-auto
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
                    src={bgImage}
                    alt="Hero Background"
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
                            {title}
                        </h1>

                        {children}
                    </div>
                </PageSection>
            </div>

            {/* Optional: Only show carousel icon if specifically needed or just keep it? 
          User said "use the same...". AsramHero had it. 
          But for generic pages (News/Faculty), a slide icon implies multiple slides which don't exist.
          I'll leave it here as it was in AsramHero. If needed I can hide it via CSS or prop later.
      */}
            <div className="hidden md:block">
                <CarouselSlideIcon activeIndex={0} />
            </div>
        </section>
    );
};

export default CommonHero;
