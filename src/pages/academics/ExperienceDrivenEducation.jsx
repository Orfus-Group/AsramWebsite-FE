import React, { useEffect, useRef, useState } from "react";
import { T } from "../../theme";

export default function ExperienceDrivenEducation() {
  return (
    <section className="w-full bg-transparent py-[60px] flex justify-center">
      <div className="w-[1200px]">

        {/* BLUE CARD */}
        <div
          className="
            w-[1200px]
            h-[365.13px]
            bg-[#F7F9FC]
            rounded-[16.18px]
            px-[39.47px]
            py-[39.47px]
            flex
            gap-[32px]
          "
        >

          {/* LEFT CONTENT */}
          <div className="w-[544.74px] flex flex-col gap-[18px]">

            {/* TITLE */}
            <h3
              className={`
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[29.61px]
                leading-[41.45px]
                text-[${T.color.secondary}]
              `}
            >
              Experience-Driven Education
            </h3>

            {/* PARAGRAPH */}
            <p
              className={`
                ${T.font.family}
                text-[15.79px]
                leading-[27.63px]
                w-[534.87px]
              `}
              style={{ color: T.color.dark + "BF" }}
            >
              At ASRAM, we believe in learning by doing. Our students don't just
              read about nursing—they practice in real clinical settings, work
              with actual patients, and develop skills that translate immediately
              to professional practice.
            </p>

            {/* BULLETS */}
            <ul className="flex flex-col gap-[10px] mt-[6px]">
              {[
                "20+ years of educational excellence in nursing",
                "Graduates serving in top hospitals across India",
                "Strong alumni network and mentorship programs",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`
                    flex items-center gap-[10px]
                    ${T.font.family}
                    text-[13.82px]
                    leading-[19.74px]
                  `}
                  style={{ color: T.color.dark + "BF" }}
                >
                  <span
                    className="w-[6px] h-[6px] rounded-full"
                    style={{ backgroundColor: T.color.secondary }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT GRID */}
          <div className="w-[544.74px] grid grid-cols-2 grid-rows-2 gap-[15.79px]">

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
                  p-[20px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-[8px]
                "
              >

                {/* VALUE WITH ANIMATION */}
                <AnimatedStatValue
                  value={stat.value}
                  className={`
                    ${T.font.family}
                    ${T.font.weight.bold}
                    text-[32px]
                    leading-[35.53px]
                  `}
                  style={{ color: T.color.dark }}
                />

                {/* LABEL */}
                <span
                  className={`
                    ${T.font.family}
                    text-[13.82px]
                    leading-[19.74px]
                    text-[${T.color.secondary}]
                  `}
                >
                  {stat.label}
                </span>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
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

    // If it's non-numeric like "INC"
    if (isNaN(number)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
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
