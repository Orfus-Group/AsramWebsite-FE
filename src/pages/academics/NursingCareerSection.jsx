import React, { useEffect, useRef, useState } from "react";
import { T } from "../../theme";

import nursingcareer from "../../assets/academics/nursingcareer.svg";

import excellence from "../../assets/academics/excellence.svg";
import activestudents from "../../assets/academics/activestudents.svg";
import performancesuccess from "../../assets/academics/performancesuccess.svg";
import approvedprograms from "../../assets/academics/approvedprograms.svg";

export default function NursingCareerSection() {
  return (
    <section className={`w-full ${T.bg.programCard} py-[80px]`}>

      {/* ⭐ UNIFIED CONTAINER (Matches Hero/Header/Programs Offered) */}
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-[120px]
          flex flex-col
          gap-[40px]
        "
      >

        {/* SECTION TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[46px]
            text-[${T.color.secondary}]
          `}
        >
          Shape Your Career in Nursing
        </h2>

        {/* ⭐ RESPONSIVE LAYOUT */}
        <div
          className="
            w-full
            flex 
            flex-col lg:flex-row
            justify-between
            gap-[30px]
            lg:gap-[40px]
          "
        >

          {/* LEFT IMAGE */}
          <div
            className="
              w-full 
              lg:w-[563px]
              h-[260px] sm:h-[300px] md:h-[340px] lg:h-[367px]
              rounded-[8px]
              overflow-hidden
            "
          >
            <img
              src={nursingcareer}
              alt="Nursing Career"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT GRID */}
          <div
            className="
              w-full 
              lg:w-[590px]
              grid 
              grid-cols-2 
              grid-rows-2 
              gap-[10px]
            "
          >
            <StatCard icon={excellence} value="20+" label="Years of Excellence" />
            <StatCard icon={activestudents} value="377+" label="Active Students" />
            <StatCard icon={performancesuccess} value="95%" label="Placement Success" />
            <StatCard icon={approvedprograms} value="INC" label="Approved Programs" />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------
    REUSABLE STAT CARD
------------------------------------------- */
function StatCard({ icon, value, label }) {
  return (
    <div
      className={`
        w-full
        h-[171.66px]
        ${T.bg.white} 
        ${T.radius.md}
        flex flex-col items-center justify-center gap-[6px]
      `}
    >
      <img src={icon} className="w-[31.58px] h-[31.58px]" />

      {/* Animated Value */}
      <AnimatedStatValue
        value={value}
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[29.61px]
          leading-[35.53px]
          text-[${T.color.secondary}]
        `}
      />

      <p
        className={`
          ${T.font.family}
          text-[15.79px]
          leading-[23.68px]
        `}
        style={{ color: T.color.text.muted }}
      >
        {label}
      </p>
    </div>
  );
}

/* ------------------------------------------
    COUNT-UP ANIMATION COMPONENT
------------------------------------------- */
function AnimatedStatValue({ value, className, style }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.4 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animateValue = () => {
    const num = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    if (isNaN(num)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * num);
      setDisplayValue(current + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <h3 ref={elementRef} className={className} style={style}>
      {displayValue}
    </h3>
  );
}
