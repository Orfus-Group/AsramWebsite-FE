import React, { useEffect, useRef, useState } from "react";
import { T } from "../../theme";

import PageSection from "../../features/common/layout/PageContainer";

import location from "../../assets/academics/location.svg";
import phoneicon from "../../assets/academics/phoneicon.svg";
import emailicon from "../../assets/academics/emailicon.svg";
import rightarrow from "../../assets/academics/rightarrow.svg";
import Button from "../../components/ui/button";

export default function JoinOurNursingCommunity() {
  return (
    <PageSection
      bg={T.bg.white}
      paddingClass="py-[80px]"
      className="flex flex-col gap-[40px]"
    >
      {/* ---------------- HEADING ---------------- */}
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

      {/* ---------------- BUTTONS ---------------- */}
      <div className="flex flex-wrap justify-center gap-[18px] mt-[40px]">
        <Button
          customPadding="px-[39px] py-[18px]"
          bg={T.color.primary}
          color="white"
          rounded="9.87px"
          textSize="text-[15.79px]"
          leading="leading-[23.68px]"
          height="60px"
          icon={<img src={rightarrow} className="w-[19.74px] h-[19.74px]" />}
        >
          Start Your Application
        </Button>

        <Button
          customPadding="px-[39.47px] py-[15.79px]"
          bg={T.color.background.programCard}
          color={T.color.secondary}
          rounded="9.87px"
          textSize="text-[15.79px]"
          leading="leading-[23.68px]"
          height="59.21px"
        >
          Explore Programs
        </Button>

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

      {/* ---------------- CONTACT CARDS (FIGMA EXACT) ---------------- */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          mt-[40px]
          place-items-center
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

      {/* LINE DIVIDER */}
      <div className="w-full mt-[40px] border-t" style={{ borderColor: "#E5E5E5" }} />

      {/* ---------------- STATISTICS (EXACT SPACING) ---------------- */}
      <div
        className="
          grid
          grid-cols-4
          text-center
          gap-[24px]
          place-items-center
        "
      >
        <StatBlock count="20+" label="Years of Excellence" />
        <StatBlock count="190+" label="Total Seats" />
        <StatBlock count="56+" label="Expert Faculty" />
        <StatBlock count="INC" label="Approved" />
      </div>
    </PageSection>
  );
}

/* =========================================================
   CONTACT CARD EXACT FIGMA STYLE
========================================================= */
function ContactCard({ icon, title, subtitle1, subtitle2 }) {
  return (
    <div
      className="
        flex flex-col
        items-center justify-center
        text-center
        rounded-[9.87px]
        p-[20px]
        w-[321px]
        h-[195px]
      "
      style={{ backgroundColor: "#F7F9FC" }}
    >
      <div
        className="
          w-[55.26px] h-[55.26px]
          rounded-full
          flex items-center justify-center
          mb-[16px]
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
        className="text-[14px] leading-[20px] mt-[6px]"
        style={{ color: T.color.extra.dark80 }}
      >
        {subtitle1}
        <br />
        {subtitle2}
      </p>
    </div>
  );
}

/* =========================================================
   STAT BLOCK — EXACT FIGMA POSITIONING
========================================================= */
/* =========================================================
   STAT BLOCK — FIGMA LAYOUT + ORIGINAL ANIMATION RESTORED
========================================================= */
function StatBlock({ count, label }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const target = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

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
    <div className="flex flex-col items-center text-center" ref={ref}>
      <span
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[35.53px]
          leading-[39.47px]
          text-[${T.color.secondary}]
        `}
      >
        {displayValue}
      </span>

      <span
        className={`
          ${T.font.family}
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

