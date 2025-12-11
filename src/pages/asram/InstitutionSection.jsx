// src/sections/home/InstitutionsSection.jsx
import React from "react";

// Icons
import medicalIcon from "../../assets/asram/medical.svg";
import nursingIcon from "../../assets/asram/nursing.svg";
import paramedIcon from "../../assets/asram/paramedical.svg";
import ArrowRight from "../../assets/asram/arrow-right.svg";

import { Link } from "react-router";
import { T } from "../../theme";

import PageSection from "../../features/common/layout/PageContainer";

const institutions = [
  {
    id: 1,
    icon: medicalIcon,
    name: "ASRAM Medical College",
    tagline: "Shaping Future Doctors",
    description:
      "Recognized medical college with strong academics, clinical training, and research.",
    cta: "Visit Medical College",
  },
  {
    id: 2,
    icon: nursingIcon,
    name: "ASRAM College of Nursing",
    tagline: "Precision-Driven Cancer Care",
    description:
      "B.Sc Nursing & GNM programs with hands-on skill labs and hospital training.",
    cta: "Visit Nursing College Website",
  },
  {
    id: 3,
    icon: paramedIcon,
    name: "ASRAM Paramedical Institute",
    tagline: "Technical Excellence in Healthcare",
    description:
      "Professional programs in allied health sciences supporting modern medical systems.",
    cta: "Visit Paramedical Website",
  },
];

const underlineColors = {
  1: "#C0392B",
  2: "#008C8C",
  3: "#A66E00",
};

const iconBgColors = {
  1: "rgba(192,57,43,0.10)",
  2: "rgba(0,140,140,0.10)",
  3: "rgba(166,110,0,0.10)",
};

const ctaColors = {
  1: "#C0392B1A",
  2: "#EAF5F5",
  3: "#A66E001A",
};

const InstitutionsSection = () => {
  return (
  <PageSection
  bg="bg-[rgba(34,63,127,0.05)]"
  sectionClassName="
    relative
    py-[10px]      /* Mobile reduced */
  "
>

      {/* Decorative floating element */}
      <div className="absolute top-[-60px] lg:top-[-90px] right-8 lg:right-[92px] opacity-30 select-none pointer-events-none" />

      <div className="w-full">
        {/* Section Title */}
        <h2
          className={`
             ${T.font.weight.bold} 
            text-[#223F7F]
            text-[28px] sm:text-[34px] lg:text-[42px]
            leading-[36px] sm:leading-[44px] lg:leading-[52px]
            mb-[6px]
          `}
        >
          Our Institutions
        </h2>

        <p
          className={`
             ${T.font.weight.medium} 
            text-[#191919]
            text-[18px] sm:text-[20px] lg:text-[22px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px]
            mt-[2px] mb-[30px] lg:mb-[45px]
          `}
        >
          Three Institutions. One Vision for Future Healthcare Leaders.
        </p>

        {/* CARD GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-[26px]
          "
        >
          {institutions.map((item) => (
            <div
              key={item.id}
              className="
                group 
                w-full
                min-h-[388px]
                bg-white 
                rounded-[14px] 
                border border-[#E1E6EF] 
                shadow-[0px_12px_28px_rgba(15,23,42,0.06)]
                px-[24px] sm:px-[28px]
                pt-[24px] pb-[24px]
                flex flex-col 
                transition-all duration-200 
                hover:-translate-y-[4px] 
                hover:shadow-[0px_20px_42px_rgba(15,23,42,0.12)]
              "
            >
              {/* ICON */}
              <div
                className="
                  w-[64px] h-[64px] 
                  rounded-full flex items-center justify-center 
                  mb-[22px]
                "
                style={{ backgroundColor: iconBgColors[item.id] }}
              >
                <img src={item.icon} className="w-[32px] h-[32px]" alt="" />
              </div>

              {/* TITLE */}
              <h3
                className={`
                   ${T.font.weight.semibold} 
                  text-[#191919]
                  text-[20px] sm:text-[22px]
                  leading-[30px] sm:leading-[32px]
                  mb-[6px] relative pb-[8px]
                `}
              >
                {item.name}
                <span
                  className="absolute left-0 bottom-0 w-[70px] sm:w-[84px] border-b-[2.5px]"
                  style={{ borderColor: underlineColors[item.id] }}
                />
              </h3>

              {/* TAGLINE */}
              <p
                className={`
                   ${T.font.weight.bold}
                  text-[#223F7F]
                  text-[16px] sm:text-[18px]
                  leading-[26px] sm:leading-[28px]
                  mt-[8px] mb-[10px]
                `}
              >
                {item.tagline}
              </p>

              {/* DESCRIPTION */}
              <p
                className={`
                   ${T.font.weight.normal}
                  text-[#191919]
                  text-[16px] sm:text-[18px]
                  leading-[24px] sm:leading-[26px]
                  mt-[8px] mb-[24px]
                `}
              >
                {item.description}
              </p>

              {/* CTA BUTTON */}
              <Link
                to={item.id === 2 ? "/nursing" : "#"}
                className="
                  mt-auto 
                  w-full h-[46px]
                  rounded-[6px]
                  px-[12px] md:px-[10px] lg:px-[14px]
                  flex items-center justify-between
                  gap-[8px]
                "
                style={{ backgroundColor: ctaColors[item.id] }}
              >
                <span
                  className={`
                     ${T.font.weight.semibold}
                    text-[15px] sm:text-[16px]
                    text-[#191919]
                    whitespace-nowrap
                    flex-shrink-0
                  `}
                >
                  {item.cta}
                </span>

                <img
                  src={ArrowRight}
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] flex-none"
                  alt=""
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default InstitutionsSection;
