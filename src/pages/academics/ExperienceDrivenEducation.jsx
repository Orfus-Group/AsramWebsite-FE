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


      {/* ⭐ MAIN FIXED-WIDTH CARD */}
      <div
        className="
          bg-[#EEF2F7]
          rounded-[16.2px]
          flex flex-col lg:flex-row
          items-start
          justify-between
        "
        style={{
          width: "100%", // Adapts to parent 120px padding (1200px on 1440px screen)
          height: "365.1px",
          padding: "39.5px",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          className="flex flex-col"
          style={{
            width: "534.9px",
            // Removed marginRight, now handled by grid's marginLeft
          }}
        >
          {/* TITLE */}
          <h3
            className={`
              ${T.font.family}
              ${T.font.weight.semibold}
              text-[${T.color.secondary}]
            `}
            style={{
              fontSize: "29.6px",
              lineHeight: "41.5px",
              color: "#223F7F", // Explicit color from previous context/theme
              marginBottom: "15px" // Visual estimation or standard
            }}
          >
            Experience-Driven Education
          </h3>

          {/* PARAGRAPH */}
          <p
            className={`${T.font.family}`}
            style={{
              fontSize: "15.8px",
              lineHeight: "27.6px",
              color: "rgba(25, 25, 25, 0.75)", // #191919BF
              marginBottom: "15px"
            }}
          >
            At ASRAM, we believe in learning by doing. Our students don't just
            read about nursing—they practice in real clinical settings, work
            with actual patients, and develop skills that translate immediately
            to professional practice.
          </p>

          {/* BULLETS */}
          <ul className="flex flex-col" style={{ gap: "11.8px" }}>
            {[
              "20+ years of educational excellence in nursing",
              "Graduates serving in top hospitals across India",
              "Strong alumni network and mentorship programs",
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-[10px] ${T.font.family}`}
                style={{
                  fontSize: "13.8px",
                  lineHeight: "19.7px",
                  color: "rgba(25, 25, 25, 0.75)",
                }}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full"
                  style={{ backgroundColor: T.color.secondary, flexShrink: 0 }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT GRID */}
        <div
          className="grid grid-cols-2"
          style={{
            width: "544.7px",
            height: "244.7px",
            gap: "15.8px",
            margin: "20.7px 0 20.7px 0", // Left margin removed, handled by justify-between
          }}
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
              "
              style={{
                width: "264.5px",   // Exact Card Width
                height: "114.5px",  // Exact Card Height
              }}
            >
              <AnimatedStatValue
                value={stat.value}
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[${T.color.secondary}]
                `}
                style={{
                  fontSize: "32px",
                  lineHeight: "39px",
                  color: "#223F7F",
                  marginBottom: "5.5px"
                }}
              />

              <span
                className={`${T.font.family}`}
                style={{
                  fontSize: "18px",     // Corrected to 18px from 13.8px
                  lineHeight: "26px",
                  color: "rgba(25, 25, 25, 0.75)",
                  fontWeight: 400,
                }}
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
