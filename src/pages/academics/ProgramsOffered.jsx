// src/sections/academics/ProgramsOffered.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";
import IconTimePeriod from "@/assets/icons/IconTimePeriod";
import IconCheckMark from "@/assets/icons/IconCheckMark";

const ArrowRight = "/AsramWebsite-FE/assets/academics/rightbluearrow.svg";
const seatsicon = "/AsramWebsite-FE/assets/academics/seatsicon.svg";
const IconFullArrow = "/AsramWebsite-FE/assets/icons/IconFullArrow.svg";


const programs = [
  {
    tag: "Undergraduate",
    title: "B.Sc Nursing",
    years: "4 Years",
    seats: "100 Seats",
    description:
      "Comprehensive undergraduate program combining theoretical knowledge with extensive clinical practice. Perfect for students seeking a professional nursing career.",
    highlights: [
      "Clinical rotations in multispeciality hospital",
      "Research opportunities",
      "International nursing standards",
    ],
  },
  {
    tag: "Diploma",
    title: "General Nursing & Midwifery",
    years: "3 Years",
    seats: "60 Seats",
    description:
      "Intensive diploma program focused on nursing fundamentals and midwifery. Ideal for those wanting to enter the nursing profession quickly.",
    highlights: [
      "Hands-on clinical training",
      "Obstetrics & gynecological focus",
      "Community health experience",
    ],
  },
  {
    tag: "Postgraduate",
    title: "M.Sc Nursing",
    years: "2 Years",
    seats: "30 Seats",
    description:
      "Advanced nursing education with specializations in Medical-Surgical, Obstetrics, Pediatrics, Community Health, and Psychiatric Nursing.",
    highlights: [
      "Research & thesis work",
      "Leadership development",
      "Academic & clinical roles",
    ],
  },
];

export default function ProgramsOffered() {
  return (
    <PageSection bg={T.bg.white} paddingClass="py-[80px]">
      {/* TITLE */}
      <h2
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[42px]
          leading-[42px]
          text-[${T.color.secondary}]
          mb-[40px]
        `}
      >
        Programs Offered
      </h2>

      {/* PROGRAMS GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-[40px]
          w-full
        "
      >
        {programs.map((program, idx) => (
          <div
            key={idx}
            className={`
              w-full
              h-[619.74px]
              ${T.radius.lg}
              overflow-hidden
              ${T.bg.white}
              flex flex-col
              border border-[#1A18181A]
            `}
          >
            {/* TOP SECTION */}
            <div
              className="
                h-[206px]
                bg-[#008C8C33]
                px-[24px] pt-[18px] pb-[16px]
                flex flex-col
              "
            >
              {/* TAG */}
              <span
                className={`
                  inline-flex items-center justify-center
                  w-[130px] h-[28px]
                  ${T.radius.sm}
                  ${T.font.family}
                  ${T.font.weight.regular}
                  text-[14px]
                `}
                style={{
                  backgroundColor: "rgba(25, 25, 25, 0.10)",
                  color: T.color.dark,
                }}
              >
                {program.tag}
              </span>

              {/* TITLE */}
              <div className="mt-[10px] h-[64px] overflow-hidden">
                <h3
                  className={`
                    ${T.font.family}
                    ${T.font.weight.semibold}
                    text-[24px]
                    leading-[32px]
                    text-[${T.color.secondary}]
                  `}
                >
                  {program.title}
                </h3>
              </div>

              {/* YEARS + SEATS */}
              <div
                className="mt-auto flex gap-[18px] items-center text-[14px]"
                style={{ color: T.color.text.muted }}
              >
                <div className="flex items-center gap-[6px] leading-none">
                  <IconTimePeriod
                    size={16}
                    className="flex-shrink-0 align-middle"
                  />
                  <span
                    className={`${T.font.family} flex items-center`}
                    style={{
                      color: "#191919BF",
                      lineHeight: "16px", // match icon size
                    }}
                  >
                    {program.years}
                  </span>
                </div>


                {/* <div className="flex items-center gap-[6px]">
                  <img loading="lazy" decoding="async" src={seatsicon} className="w-[16px] h-[16px]" />
                  <span
                    className={`${T.font.family}`}
                    style={{ color: T.color.dark + "BF" }}
                  >
                    {program.seats}
                  </span>
                </div> */}
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div
              className={`
                h-[413px]
                ${T.bg.sectionCard}
                p-[30px]
                flex flex-col
              `}
            >
              {/* DESCRIPTION */}
              <div className="h-[182px]">
                <p
                  className={`
                    ${T.font.family}
                    font-regular
                    text-[18px]
                    text-[#6B7280]
                    leading-[26px]
                    w-full
                  `}
                  style={{ color: T.color.text.muted }}
                >
                  {program.description}
                </p>
              </div>

              {/* HIGHLIGHTS */}
              <div className="mt-auto flex flex-col gap-[16px]">
                <h4
                  className={`
                    ${T.font.family}
                    ${T.font.weight.semibold}
                    text-[18px]
                    text-[${T.color.secondary}]
                  `}
                >
                  Program Highlights
                </h4>

                <ul className="flex flex-col gap-[10px]">
                  {program.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="
      flex items-start gap-[10px]
      text-[13px]
      whitespace-nowrap
    "
                      style={{ color: "#191919BF" }}
                    >
                      <IconCheckMark size={11} className="shrink-0 mt-[2px]" />
                      <span className={`${T.font.family} leading-[18px]`}>
                        {item}
                      </span>
                    </li>
                  ))}

                </ul>
              </div>

              {/* BUTTON */}
              <button
                className={`
                  mt-[24px]
                  flex items-center gap-[6px]
                  ${T.font.family}
                  ${T.font.weight.medium}
                  text-[18px]
                  text-[${T.color.secondary}]
                `}
              >
                Learn More
                <img
                  src={IconFullArrow}
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                  alt=""
                />

              </button>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
