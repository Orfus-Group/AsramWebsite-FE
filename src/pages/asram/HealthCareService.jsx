// src/sections/home/HealthcareServices.jsx
import React from "react";
import { T } from "../../theme";

import hospitalIcon from "../../assets/asram/multispec.svg";
import cancerIcon from "../../assets/asram/care.svg";
import ArrowRight from "../../assets/asram/arrow-right.svg";

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

const CARD_BORDER = "rgba(26, 24, 24, 0.10)"; // Figma Card Strokes - dark

const HealthcareServices = () => {
  return (
    <section
      className={`${T.font.family} w-full`}
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "transparent",
      }}
    >
      {/* FIXED 1440 WIDTH WRAPPER */}
      <div
        className="mx-auto"
        style={{
          width: "1440px",
          paddingLeft: "120px",
          paddingRight: "120px",
        }}
      >
        {/* SECTION TITLE */}
        <h2 className="font-semibold text-[#223F7F] text-[42px] leading-[52px] mb-[6px]">
          Our Healthcare Services
        </h2>

        {/* SUBTITLE */}
        <p className="font-medium text-[#191919] text-[22px] leading-[32px] mb-[40px]">
          World-Class Care Backed by Cutting-Edge Technology.
        </p>

        {/* 2 CARD LAYOUT */}
        <div className="flex flex-row gap-[40px]">
          {services.map((item) => (
            <div
              key={item.id}
              className="
                bg-white 
                rounded-[8px]
                flex flex-col
                px-[30px] pt-[30px] pb-[30px]
              "
              style={{
                width: "585px",
                height: "385px",
                border: `1px solid ${CARD_BORDER}`,
              }}
            >
              {/* ICON CIRCLE */}
              <div
                className="flex items-center justify-center mb-[30px]"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "49px",
                  backgroundColor: item.iconBg,
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-[#191919] text-[22px] leading-[27px] mb-[6px] relative pb-[8px]">
                {item.name}
                <span
                  className="absolute left-0 bottom-0 border-b-[2.5px]"
                  style={{
                    width: "84px",
                    borderColor: item.underline,
                  }}
                />
              </h3>

              {/* TAGLINE */}
              <p
                className="font-semibold text-[18px] leading-[24px] mb-[18px]"
                style={{ color: item.taglineColor }}
              >
                {item.tagline}
              </p>

              {/* DESCRIPTION */}
              <p className="font-normal text-[#191919] text-[16px] leading-[24px] mb-[24px]">
                {item.description}
              </p>

              {/* CTA BUTTON */}
              <button
                className="
                  flex items-center justify-center gap-[6px]
                  rounded-[6px]
                "
                style={{
                  width: "525px",
                  height: "46px",
                  backgroundColor: item.buttonBg,
                }}
              >
                <span className="font-semibold text-[18px] leading-none text-[#191919]">
                  {item.ctatext}
                </span>

                <img
                  src={ArrowRight}
                  alt=""
                  className="w-[22px] h-[22px] translate-y-[1px]"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareServices;
