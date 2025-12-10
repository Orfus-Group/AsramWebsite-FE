// src/sections/academics/ProgramsOffered.jsx
import React from "react";
import { T } from "../../theme";

import checkIcon from "../../assets/nursing/checkicon.svg";
import ArrowRight from "../../assets/academics/rightbluearrow.svg";
import timeperiodicon from "../../assets/academics/timeperiodicon.svg";
import seatsicon from "../../assets/academics/seatsicon.svg";

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
    <section className={`${T.bg.white} w-full`}>
      
      {/* ⭐ UNIFIED CONTAINER (Same as Header + Hero) */}
      <div className="
        w-full 
        max-w-[1440px] 
        mx-auto 
        px-4 sm:px-6 md:px-10 lg:px-[120px] 
        py-[80px] 
        flex flex-col 
        gap-[40px]
      ">

        {/* SECTION TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[42px]
            text-[${T.color.secondary}]
          `}
        >
          Programs Offered
        </h2>

        {/* ⭐ RESPONSIVE GRID (Instead of fixed 1200px) */}
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
              `}
            >

              {/* TOP SECTION */}
              <div className="h-[206px] bg-[rgba(0,140,140,0.10)] px-[24px] pt-[18px] pb-[16px] flex flex-col">

                {/* TAG */}
                <span
                  className={`
                    inline-flex
                    items-center justify-center
                    w-[130.12px]
                    h-[27.63px]
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
                  <div className="flex items-center gap-[6px]">
                    <img src={timeperiodicon} className="w-[16px] h-[16px]" />
                    <span
                      className={`${T.font.family}`}
                      style={{ color: T.color.dark + "BF" }}
                    >
                      {program.years}
                    </span>
                  </div>

                  <div className="flex items-center gap-[6px]">
                    <img src={seatsicon} className="w-[16px] h-[16px]" />
                    <span
                      className={`${T.font.family}`}
                      style={{ color: T.color.dark + "BF" }}
                    >
                      {program.seats}
                    </span>
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION */}
              <div className={`h-[413.74px] ${T.bg.programCard} p-[30px] flex flex-col`}>

                {/* DESCRIPTION */}
                <div className="h-[182px]">
                  <p
                    className={`
                      ${T.font.family}
                      text-[18px]
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
                        className="flex gap-[10px] text-[13px]"
                        style={{ color: T.color.text.muted }}
                      >
                        <img src={checkIcon} className="w-[16px] h-[16px]" />
                        <span className={`${T.font.family}`}>{item}</span>
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
                    ${T.font.weight.bold}
                    text-[18px]
                    text-[${T.color.secondary}]
                  `}
                >
                  Learn More
                  <img src={ArrowRight} className="w-[14px] h-[14px]" />
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
