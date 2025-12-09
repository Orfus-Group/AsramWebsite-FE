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
      <div className="w-[1200px] mx-auto flex flex-col gap-[40px]">

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

        {/* MAIN CONTENT WRAPPER */}
        <div className="w-[1200px] h-[367px] flex justify-between">

          {/* LEFT IMAGE */}
          <div className="w-[563px] h-[367px] rounded-[8px] overflow-hidden">
            <img
              src={nursingcareer}
              alt="Nursing Career"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT 2x2 STATS GRID */}
          <div className="w-[590px] h-[367px] grid grid-cols-2 grid-rows-2 gap-[10px]">

            {/* CARD 1 */}
            <StatCard
              icon={excellence}
              value="20+"
              label="Years of Excellence"
            />

            {/* CARD 2 */}
            <StatCard
              icon={activestudents}
              value="377+"
              label="Active Students"
            />

            {/* CARD 3 */}
            <StatCard
              icon={performancesuccess}
              value="95%"
              label="Placement Success"
            />

            {/* CARD 4 */}
            <StatCard
              icon={approvedprograms}
              value="INC"
              label="Approved Programs"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------
    REUSABLE STAT CARD WITH ANIMATION
------------------------------------------- */
function StatCard({ icon, value, label }) {
  return (
    <div
      className={`w-[282.16px] h-[171.66px] ${T.bg.white} ${T.radius.md}
      flex flex-col items-center justify-center gap-[6px]`}
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
    const suffix = value.replace(/[0-9]/g, ""); // + or %

    if (isNaN(num)) {
      setDisplayValue(value); // For non-numeric like “INC”
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
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
