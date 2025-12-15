import React from "react";


import { Link } from "react-router";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";
import IconFullArrowRight from "@/assets/icons/IconFullArrow";
import MedicalIcon from "@/assets/icons/MedicalIcon";
import HeartCareIcon from "@/assets/icons/HeartCareIcon";





const ParamedicalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6665 2.66675V5.33341" stroke="#A66E00" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66675 2.66675V5.33341" stroke="#A66E00" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66675 4H5.33341C4.62617 4 3.94789 4.28095 3.4478 4.78105C2.9477 5.28115 2.66675 5.95942 2.66675 6.66667V12C2.66675 14.1217 3.5096 16.1566 5.00989 17.6569C6.51018 19.1571 8.54502 20 10.6667 20C12.7885 20 14.8233 19.1571 16.3236 17.6569C17.8239 16.1566 18.6667 14.1217 18.6667 12V6.66667C18.6667 5.95942 18.3858 5.28115 17.8857 4.78105C17.3856 4.28095 16.7073 4 16.0001 4H14.6667" stroke="#A66E00" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 20C10.6667 22.1217 11.5096 24.1566 13.0099 25.6569C14.5102 27.1571 16.545 28 18.6667 28C20.7885 28 22.8233 27.1571 24.3236 25.6569C25.8239 24.1566 26.6667 22.1217 26.6667 20V16" stroke="#A66E00" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6665 16.0001C28.1393 16.0001 29.3332 14.8062 29.3332 13.3334C29.3332 11.8607 28.1393 10.6667 26.6665 10.6667C25.1938 10.6667 23.9999 11.8607 23.9999 13.3334C23.9999 14.8062 25.1938 16.0001 26.6665 16.0001Z" stroke="#A66E00" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);


const institutions = [
  {
    id: 1,
    icon: <MedicalIcon
  size={32}
  color="#C0392B"
  strokeWidth={2.66667}
/>
,
    name: "ASRAM Medical College",
    tagline: "Shaping Future Doctors",
    description:
      "Recognized medical college with strong academics, clinical training, and research.",
    cta: "Visit Medical College",
  },
  {
    id: 2,
    icon: (<HeartCareIcon size={32} color="#008C8C" />),
    name: "ASRAM College of Nursing",
    tagline: "Precision-Driven Cancer Care",
    description:
      "B.Sc Nursing & GNM programs with hands-on skill labs and hospital training.",
    cta: "Visit Nursing College Website",
  },
  {
    id: 3,
    icon: <ParamedicalIcon />,
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
  paddingClass="py-[80px]"   // ⭐ Explicit padding
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
                {item.icon}
                {/* <img loading="lazy" decoding="async" src={item.icon} className="w-[32px] h-[32px]" alt="" /> */}
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
    min-h-[52px]        /* ⭐ force equal height */
    flex items-end      /* ⭐ align text to bottom like Figma */
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
    w-full
    min-h-[46px]                 /* allow growth */
    rounded-[6px]
    px-[12px] sm:px-[14px] lg:px-[16px]
    flex items-center justify-center
    gap-[8px]
    text-center
  "
  style={{ backgroundColor: ctaColors[item.id] }}
>
  <span
    className={`
      ${T.font.weight.bold}
      text-[14px] sm:text-[15px] lg:text-[16px]
      text-[#191919]
      leading-[18px] sm:leading-[20px]
      break-words                /* ✅ allow wrap */
      text-center
    `}
  >
    {item.cta}
  </span>

  <IconFullArrowRight
    size={18}
    className="sm:w-[20px] sm:h-[20px]"
    stroke="#191919"
    strokeWidth={2}
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
