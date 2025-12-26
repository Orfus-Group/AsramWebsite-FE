// src/sections/academics/ExperienceDrivenEducation.jsx
import React, { useEffect, useRef, useState } from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

export default function ExperienceDrivenEducation() {
  return (
    <PageSection
      bg="transparent"
      sectionClassName="flex justify-center"
      paddingClass="pb-[80px]"
    >


      {/* ⭐ MAIN CARD */}
      <div
        className="
          bg-[#EEF2F7]
          rounded-[16.2px]
          flex flex-col lg:flex-row
          items-center lg:items-start
          justify-between
          w-full
          p-[24px] md:p-[39.5px]
          gap-[40px] lg:gap-[30px]
          min-h-[365px]
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col w-full lg:w-[48%] max-w-[535px]">
          {/* TITLE */}
          <h3
            className={`
              ${T.font.family}
              ${T.font.weight.semibold}
              text-[#223F7F]
              text-[24px] md:text-[29.6px]
              leading-[32px] md:leading-[41.5px]
              mb-[15px]
            `}
          >
            Experience-Driven Education
          </h3>

          {/* PARAGRAPH */}
          <p
            className={`
              ${T.font.family}
              text-[14px] md:text-[15.8px]
              lineHeight-[22px] md:lineHeight-[27.6px]
              text-[rgba(25,25,25,0.75)]
              mb-[15px]
            `}
          >
            At ASRAM, we believe in learning by doing. Our students don't just
            read about nursing—they practice in real clinical settings, work
            with actual patients, and develop skills that translate immediately
            to professional practice.
          </p>

          {/* BULLETS */}
          <ul className="flex flex-col gap-[11.8px]">
            {[
              "20+ years of educational excellence in nursing",
              "Graduates serving in top hospitals across India",
              "Strong alumni network and mentorship programs",
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-[10px] ${T.font.family} text-[13.8px] leading-[19.7px] text-[rgba(25,25,25,0.75)]`}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full shrink-0"
                  style={{ backgroundColor: T.color.secondary }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT GRID */}
        <div
          className="
            grid 
            grid-cols-2 
            gap-[12px] md:gap-[15.8px]
            w-full
            lg:w-[50%]
            max-w-[545px]
            my-auto
          "
        >
          {[
            { value: "100+", label: "B.Sc Seats" },
            { value: "60+", label: "GNM Seats" },
            { value: "30+", label: "M.Sc Seats" },
            { value: "56+", label: "Faculty Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[8px]
                flex flex-col items-center justify-center
                p-[20px]
                aspect-[264.5/114.5]
                w-full
              "
            >
              <AnimatedStatValue
                value={stat.value}
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[#223F7F]
                  text-[24px] md:text-[32px]
                  leading-[1.2]
                  mb-[5.5px]
                `}
              />

              <span
                className={`
                  ${T.font.family}
                  text-[14px] md:text-[18px]
                  leading-[1.4]
                  text-[rgba(25,25,25,0.75)]
                  font-normal
                `}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

/* ------------------------------------------
    ANIMATED STAT VALUE COMPONENT
------------------------------------------- */
function AnimatedStatValue({ value, className, style }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.4 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animateValue = () => {
    const number = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    if (isNaN(number)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * number);

      setDisplayValue(current + suffix);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <span ref={ref} className={className} style={style}>
      {displayValue}
    </span>
  );
}
