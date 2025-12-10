// src/sections/home/HealthcareServices.jsx
import React from "react";
import { T } from "../../theme";

import hospitalIcon from "../../assets/asram/multispec.svg";
import cancerIcon from "../../assets/asram/care.svg";
import ArrowRight from "../../assets/asram/arrow-right.svg";

import PageSection from "../../features/common/layout/PageContainer";

const services = [
  {
    id: 1,
    icon: hospitalIcon,
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
    icon: cancerIcon,
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
    <PageSection bg="transparent">
      {/* SECTION TITLE */}
      <h2
        className="
          font-semibold text-[#223F7F]
          text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]
          leading-[36px] sm:leading-[44px] lg:leading-[52px]
          mb-[6px]
        "
      >
        Our Healthcare Services
      </h2>

      {/* SUBTITLE */}
      <p
        className="
          font-medium text-[#191919]
          text-[18px] sm:text-[20px] lg:text-[22px]
          leading-[28px] sm:leading-[30px] lg:leading-[32px]
          mb-[30px] lg:mb-[40px]
        "
      >
        World-Class Care Backed by Cutting-Edge Technology.
      </p>

      {/* CARD GRID */}
      <div
        className="
          grid 
          grid-cols-1
          md:grid-cols-2
          gap-[30px] md:gap-[40px]
        "
      >
        {services.map((item) => (
          <div
            key={item.id}
            className="
              bg-white 
              rounded-[8px]
              flex flex-col
              px-[24px] sm:px-[28px] pt-[24px] pb-[28px]
              shadow-[0px_12px_28px_rgba(15,23,42,0.06)]
              border
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
                rounded-full 
                flex items-center justify-center 
                mb-[30px]
              "
              style={{ backgroundColor: item.iconBg }}
            >
              <img
                src={item.icon}
                alt=""
                className="w-[24px] h-[24px]"
              />
            </div>

            {/* TITLE */}
            <h3
              className="
                font-semibold text-[#191919]
                text-[20px] sm:text-[22px]
                leading-[26px] sm:leading-[27px]
                mb-[6px] relative pb-[8px]
              "
            >
              {item.name}
              <span
                className="absolute left-0 bottom-0 border-b-[2.5px]"
                style={{ width: "84px", borderColor: item.underline }}
              />
            </h3>

            {/* TAGLINE */}
            <p
              className="
                font-semibold 
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
                  font-semibold text-[16px] sm:text-[18px]
                  text-[#191919]
                "
              >
                {item.ctatext}
              </span>

              <img
                src={ArrowRight}
                alt=""
                className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]"
              />
            </button>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default HealthcareServices;
