// src/sections/home/HealthcareServices.jsx
import React from "react";
import { motion } from "framer-motion";
import { T } from "@/theme";
import StaggerContainer, { itemVariants } from "@/components/common/StaggerContainer";
import HoverCard from "@/components/common/HoverCard";

import IconFullArrowRight from "@/assets/icons/IconFullArrow";

import PageSection from "@/features/common/layout/PageContainer";
import HeartCareIcon from "@/assets/icons/HeartCareIcon";


const HospitalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6V8M16 8V10M16 8H18M16 8H14" stroke="#223F7F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M11.448 3.44706C10.667 4.22811 10.667 5.48519 10.667 7.99935C10.667 10.5135 10.667 11.7706 11.448 12.5516C12.2291 13.3327 13.4862 13.3327 16.0003 13.3327C18.5145 13.3327 19.7716 13.3327 20.5526 12.5516C21.3337 11.7706 21.3337 10.5135 21.3337 7.99935C21.3337 5.48519 21.3337 4.22811 20.5526 3.44706C19.7716 2.66602 18.5145 2.66602 16.0003 2.66602C13.4862 2.66602 12.2291 2.66602 11.448 3.44706Z" stroke="#223F7F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.33301 29.3327V15.9603C5.33301 11.5477 5.33301 9.34133 6.69984 7.9705C7.56855 7.09925 8.77375 6.78173 10.6663 6.66602M26.6663 29.3327V15.9603C26.6663 11.5477 26.6663 9.34133 25.2995 7.9705C24.4308 7.09925 23.2256 6.78173 21.333 6.66602" stroke="#223F7F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 29.332H28" stroke="#223F7F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.667 29.3327V25.9993C12.667 24.7532 12.667 24.1301 12.9349 23.666C13.1105 23.362 13.363 23.1095 13.667 22.934C14.1311 22.666 14.7542 22.666 16.0003 22.666C17.2465 22.666 17.8696 22.666 18.3337 22.934C18.6377 23.1095 18.8902 23.362 19.0657 23.666C19.3337 24.1301 19.3337 24.7532 19.3337 25.9993V29.3327" stroke="#223F7F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10.6789 17.332H10.667M16.0003 17.332H15.9884M21.3352 17.332H21.3232" stroke="#223F7F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>


);



const services = [
  {
    id: 1,
    icon: <HospitalIcon />,
    name: "ASRAM Multispecialty Hospital",
    tagline: "Trusted Healthcare for All",
    description:
      "A 1300-bed NABH-accredited hospital offering complete medical, surgical, emergency care.",
    underline: "#223F7F",
    ctatext: "Visit Hospital Website",
    iconBg: "rgba(34, 63, 127, 0.10)",
    buttonBg: "rgba(34, 63, 127, 0.10)",
    taglineColor: "#223F7F",
  },
  {
    id: 2,
    icon: (<HeartCareIcon size={32} color="#6A1B9A" />),
    name: "ASRAM Cancer Care",
    tagline: "Empowering Compassionate Nurses",
    description:
      "Advanced oncology services with modern radiotherapy and comprehensive cancer care.",
    ctatext: "Visit Cancer Care Website",
    underline: "#6A1B9A",
    iconBg: "rgba(106, 27, 154, 0.10)",
    buttonBg: "rgba(106, 27, 154, 0.10)",
    taglineColor: "#223F7F",
  },
];

const CARD_BORDER = "rgba(26, 24, 24, 0.10)";

const HealthcareServices = () => {
  return (
    <PageSection
      bg="transparent"
      paddingClass="py-[40px] md:py-[60px] lg:py-[80px]"   // ⭐ Padding fully controlled here
    >

      {/* SECTION TITLE */}
      <h1
        className="
          font-bold text-[#223F7F]
          text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]
          leading-[36px] sm:leading-[44px] lg:leading-[52px]
          mb-[6px]
        "
      >
        Our Healthcare Services
      </h1>

      {/* SUBTITLE */}
      <h6
        className="
          font-medium text-[#6B6B6B]
          text-[18px] sm:text-[20px] lg:text-[22px]
          leading-[28px] sm:leading-[30px] lg:leading-[32px]
          mb-[30px] lg:mb-[40px]
        "
      >
        World-Class Care Backed by Cutting-Edge Technology.
      </h6>

      {/* CARD GRID */}
      <StaggerContainer
        className="
          grid 
          grid-cols-1
          md:grid-cols-2
          gap-[30px] md:gap-[40px]
        "
      >
        {services.map((item) => (
          <HoverCard
            variants={itemVariants}
            key={item.id}
            className="
              bg-[#EEF2F7] 
              rounded-[8px]
              flex flex-col
              px-[24px] sm:px-[28px] pt-[24px] pb-[28px]
              shadow-[0px_12px_28px_rgba(15,23,42,0.06)]
              border border-[#B8C2D1]
            "
            style={{
              borderColor: CARD_BORDER,
              width: "100%",
              maxWidth: "585px",
            }}
          >
            {/* ICON CIRCLE */}
            <div
              className="
                w-[64px] h-[64px] 
                rounded-[12px]
                flex items-center justify-center 
                mb-[30px]
              "
              style={{ backgroundColor: item.iconBg }}
            >
              {item.icon}

            </div>

            {/* TITLE */}
            <h6
              className="
                font-semibold text-[#191919]
                text-[20px] sm:text-[22px]
                leading-[26px] sm:leading-[27px]
                mb-[14px] relative pb-[8px]
              "
            >
              {item.name}
              <span
                className="absolute left-0 bottom-0 border-b-[2.5px]"
                style={{ width: "84px", borderColor: item.underline }}
              />
            </h6>

            {/* TAGLINE */}
            <p
              className="
                font-mwedium 
                text-[16px] sm:text-[18px]
                leading-[22px] sm:leading-[24px]
                mb-[16px]
              "
              style={{ color: item.taglineColor }}
            >
              {item.tagline}
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                font-normal text-[#191919]
                text-[15px] sm:text-[16px]
                leading-[23px] sm:leading-[24px]
                mb-[24px]
              "
            >
              {item.description}
            </p>

            {/* CTA BUTTON */}
            <button
              className="
                flex items-center justify-center gap-[6px]
                rounded-[6px]
                h-[46px]
                w-full
              "
              style={{ backgroundColor: item.buttonBg }}
            >
              <span
                className="
                  font-medium text-[16px] sm:text-[18px]
                  text-[#191919]
                "
              >
                {item.ctatext}
              </span>

              <IconFullArrowRight
                size={18}
                className="sm:w-[20px] sm:h-[20px]"
                stroke="#191919"
                strokeWidth={2}
              />
            </button>
          </HoverCard>
        ))}
      </StaggerContainer>
    </PageSection>
  );
};

export default HealthcareServices;
