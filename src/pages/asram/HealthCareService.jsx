// src/sections/home/HealthcareServices.jsx
import React from "react";
import { Link } from "react-router-dom";

import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";

import IconFullArrowRight from "@/assets/icons/IconFullArrow";


const HeartCareIcon = "/AsramWebsite-FE/assets/icons/HeartCareIcon.svg";
const HospitalIcon = "/AsramWebsite-FE/assets/icons/IconHospital.svg";

const services = [
  {
    id: 1,
    icon: HospitalIcon,
    name: "ASRAM Multispecialty Hospital",
    tagline: "Trusted Healthcare for All",
    description:
      "A 1300-bed NABH-accredited hospital offering complete medical, surgical, emergency care.",
    underline: "#223F7F",
    ctatext: "Visit Hospital Website",
    iconBg: "rgba(34, 63, 127, 0.10)",
    buttonBg: "rgba(34, 63, 127, 0.10)",
    taglineColor: "#223F7F",
    link: "/healthcare",
  },
  {
    id: 2,
    icon: HeartCareIcon,
    name: "ASRAM Cancer Care",
    tagline: "Empowering Compassionate Nurses",
    description:
      "Advanced oncology services with modern radiotherapy and comprehensive cancer care.",
    ctatext: "Visit Cancer Care Website",
    underline: "#6A1B9A",
    iconBg: "rgba(106, 27, 154, 0.10)",
    buttonBg: "rgba(106, 27, 154, 0.10)",
    taglineColor: "#223F7F",
    link: "#",
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
              style={{
                backgroundColor: item.iconBg,
                color: item.underline
              }}
            >
              <div
                className="w-[32px] h-[32px] transition-colors duration-300"
                style={{
                  backgroundColor: "currentColor",
                  maskImage: `url(${item.icon})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: `url(${item.icon})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
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

            {/* CTA BUTTON - Converted to Link */}
            <Link
              to={item.link}
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

              <div>
                <IconFullArrowRight
                  size={18}
                  className="sm:w-[20px] sm:h-[20px]"
                  stroke="#191919"
                  strokeWidth={2}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default HealthcareServices;
