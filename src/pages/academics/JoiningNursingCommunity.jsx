import React, { useEffect, useRef, useState } from "react";
import { T } from "../../theme";

import location from "../../assets/academics/location.svg";
import phoneicon from "../../assets/academics/phoneicon.svg";
import emailicon from "../../assets/academics/emailicon.svg";
import rightarrow from "../../assets/academics/rightarrow.svg";
import Button from "../../components/ui/button";

export default function JoinOurNursingCommunity() {
  return (
    <section className={`w-full ${T.bg.white} py-[60px] ${T.font.family} flex justify-center`}>
      
      {/* ⭐ UNIFIED BASELINE CONTAINER (Matches Hero + Header) */}
      <div 
        className="
          w-full 
          max-w-[1440px] 
          mx-auto 
          px-4 sm:px-6 md:px-10 lg:px-[120px]
          flex flex-col
        "
      >

        {/* HEADING */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[52px]
            text-[${T.color.secondary}]
          `}
        >
          Join Our Nursing Community
        </h2>

        {/* ⭐ BUTTON ROW — FULLY RESPONSIVE */}
        <div
          className="
            mt-[35px]
            flex flex-wrap justify-center
            gap-[18px]
            w-full
          "
        >
          {/* PRIMARY BUTTON */}
          <Button
            customPadding="px-[39px] py-[18px]"
            bg={T.color.primary}
            color="white"
            font={T.font.family}
            rounded="9.87px"
            textSize="text-[15.79px]"
            leading="leading-[23.68px]"
            gap="12px"
            height="60px"
            icon={<img src={rightarrow} className="w-[19.74px] h-[19.74px]" />}
          >
            Start Your Application
          </Button>

          {/* SECONDARY BUTTON */}
          <Button
            customPadding="px-[39.47px] py-[15.79px]"
            bg={T.color.background.programCard}
            font={T.font.family}
            color={T.color.secondary}
            rounded="9.87px"
            textSize="text-[15.79px]"
            leading="leading-[23.68px]"
            height="59.21px"
          >
            Explore Programs
          </Button>

          {/* OUTLINED BUTTON */}
          <Button
            customPadding="px-[39.47px] py-[15.79px]"
            bg={T.color.extra.dark10}
            color={T.color.dark}
            rounded="9.87px"
            borderColor={T.color.extra.dark10}
            borderWidth="2px"
            textSize="text-[15.79px]"
            leading="leading-[23.68px]"
            height="59.21px"
          >
            Visit Website
          </Button>
        </div>

        {/* ⭐ CONTACT CARDS — RESPONSIVE GRID */}
        <div
          className="
            mt-[50px]
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-[23.68px]
            w-full
          "
        >
          <ContactCard
            icon={location}
            title="Visit Campus"
            subtitle1="ASRAM Campus"
            subtitle2="Eluru, Andhra Pradesh"
          />

          <ContactCard
            icon={phoneicon}
            title="Call Us"
            subtitle1="Admissions Office"
            subtitle2="Contact via asram.in"
          />

          <ContactCard
            icon={emailicon}
            title="Email Us"
            subtitle1="For admission inquiries"
            subtitle2="See official website"
          />
        </div>

        {/* ⭐ STATISTICS ROW — RESPONSIVE */}
        <div
          className="
            mt-[60px]
            grid grid-cols-2 sm:grid-cols-4
            text-center
            w-full
          "
        >
          <StatBlock count="20+" label="Years of Excellence" />
          <StatBlock count="190+" label="Total Seats" />
          <StatBlock count="56+" label="Expert Faculty" />
          <StatBlock count="INC" label="Approved" />
        </div>

      </div>
    </section>
  );
}

/* ---------------- CONTACT CARD ---------------- */
function ContactCard({ icon, title, subtitle1, subtitle2 }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        rounded-[9.87px] p-[20px]
        h-[195.39px]
      "
      style={{ backgroundColor: T.color.background.programCard }}
    >
      <div
        className="
          w-[55.26px] h-[55.26px] rounded-full
          flex items-center justify-center mb-[16px]
        "
        style={{ backgroundColor: T.color.primary }}
      >
        <img src={icon} className="w-[23.68px] h-[23.68px]" />
      </div>

      <h3
        className={`
          ${T.font.family}
          ${T.font.weight.semibold}
          text-[19.74px]
          leading-[29.61px]
          text-[${T.color.secondary}]
        `}
      >
        {title}
      </h3>

      <p
        className="text-[14px] leading-[20px] mt-[6px] text-center"
        style={{ color: T.color.extra.dark80 }}
      >
        {subtitle1}
        <br />
        {subtitle2}
      </p>
    </div>
  );
}

/* ---------------- STAT BLOCK ---------------- */
function StatBlock({ count, label }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const target = ref.current;

    const run = (entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animate();
      }
    };

    const observer = new IntersectionObserver(run, { threshold: 0.4 });
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const number = parseInt(count.replace(/\D/g, ""), 10);
    const suffix = count.replace(/[0-9]/g, "");

    if (isNaN(number)) {
      setDisplayValue(count);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * number);

      setDisplayValue(current + suffix);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <span
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[35.53px]
          leading-[39.47px]
          mb-[5px]
          text-[${T.color.secondary}]
        `}
      >
        {displayValue}
      </span>

      <span
        className={`
          ${T.font.family}
          ${T.font.weight.regular}
          text-[15.79px]
          leading-[23.68px]
        `}
        style={{ color: T.color.extra.dark80 }}
      >
        {label}
      </span>
    </div>
  );
}
