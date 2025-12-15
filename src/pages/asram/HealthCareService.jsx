// src/sections/home/HealthcareServices.jsx
import React from "react";
import { T } from "@/theme";

import IconFullArrowRight from "@/assets/icons/IconFullArrow";

import PageSection from "@/features/common/layout/PageContainer";
import HeartCareIcon from "@/assets/icons/HeartCareIcon";


const HospitalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 6V8M16 8V10M16 8H18M16 8H14" stroke="#223F7F" stroke-width="2.5" stroke-linecap="round"/>
<path d="M11.4478 3.44767C10.6667 4.22872 10.6667 5.4858 10.6667 7.99996C10.6667 10.5141 10.6667 11.7712 11.4478 12.5522C12.2288 13.3333 13.4859 13.3333 16.0001 13.3333C18.5142 13.3333 19.7713 13.3333 20.5524 12.5522C21.3334 11.7712 21.3334 10.5141 21.3334 7.99996C21.3334 5.4858 21.3334 4.22872 20.5524 3.44767C19.7713 2.66663 18.5142 2.66663 16.0001 2.66663C13.4859 2.66663 12.2288 2.66663 11.4478 3.44767Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33325 29.3333V15.9609C5.33325 11.5483 5.33325 9.34194 6.70009 7.97111C7.56879 7.09986 8.77399 6.78234 10.6666 6.66663M26.6666 29.3333V15.9609C26.6666 11.5483 26.6666 9.34194 25.2998 7.97111C24.431 7.09986 23.2258 6.78234 21.3333 6.66663" stroke="#223F7F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 29.3334H28" stroke="#223F7F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 29.3333V26C12.6667 24.7538 12.6667 24.1307 12.9347 23.6666C13.1102 23.3626 13.3627 23.1101 13.6667 22.9346C14.1308 22.6666 14.7539 22.6666 16.0001 22.6666C17.2462 22.6666 17.8693 22.6666 18.3334 22.9346C18.6375 23.1101 18.8899 23.3626 19.0655 23.6666C19.3334 24.1307 19.3334 24.7538 19.3334 26V29.3333" stroke="#223F7F" stroke-width="2.5" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6787 17.3334H10.6667H10.6787Z" fill="#223F7F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 17.3334H15.9881H16.0001Z" fill="#223F7F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3349 17.3334H21.323H21.3349Z" fill="#223F7F"/>
<path d="M10.6787 17.3334H10.6667M16.0001 17.3334H15.9881M21.3349 17.3334H21.323" stroke="#223F7F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      paddingClass="py-[80px]"   // ⭐ Padding fully controlled here
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
               {item.icon}

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

                <IconFullArrowRight
                  size={18}
                  className="sm:w-[20px] sm:h-[20px]"
                  stroke="#191919"
                  strokeWidth={2}
                />
            </button>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default HealthcareServices;
