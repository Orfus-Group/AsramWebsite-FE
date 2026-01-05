import React, { useEffect, useRef, useState } from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

import Button from "@/components/ui/button";

const IconFullArrow = "/AsramWebsite-FE/assets/icons/IconFullArrow.svg";
const IconLocationWhite = "/AsramWebsite-FE/assets/icons/IconLocationWhite.svg";
const IconPhoneWhite = "/AsramWebsite-FE/assets/icons/IconPhoneWhite.svg";
const IconEmailWhite = "/AsramWebsite-FE/assets/icons/IconEmailWhite.svg";



/* ICONS REMOVED - NOW USING PUBLIC SVG PATHS */



export default function JoinOurNursingCommunity({ theme, title = "Join Our Nursing Community", titleClassName = "" }) {
  const primaryColor = theme?.primary || T.color.primary;
  const secondaryColor = theme?.secondary || T.color.secondary;
  const ctaButtonBg = theme?.ctaButtonBg || primaryColor;

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
          text-center w-full
          ${titleClassName}
        `}
        style={{ color: secondaryColor }}
      >
        {title}
      </h2>

      {/* ---------------- BUTTONS ---------------- */}
      <div className="flex flex-wrap justify-center gap-[16px]">
        <Button
          customPadding="px-[39px] py-[18px]"
          bg={ctaButtonBg}
          color="white"
          rounded="9.87px"
          textSize="text-[15.79px]"
          leading="leading-[23.68px]"
          height="60px"
          icon={<img
            src={IconFullArrow}
            className="w-[19px] h-[19px]"
            style={{ filter: "brightness(0) invert(1)" }}
            alt=""
          />}
        >
          Start Your Application
        </Button>

        <Button
          customPadding="px-[39.47px] py-[15.79px]"
          bg="#EEF2F7"
          color={secondaryColor}
          rounded="9.87px"
          textSize="text-[15.79px]"
          leading="leading-[23.68px]"
          height="59.21px"
        >
          Explore Programs
        </Button>

        <Button
          customPadding="px-[39.47px] py-[15.79px]"
          bg="#EEF2F7"
          color={secondaryColor}
          rounded="9.87px"
          // borderColor={T.color.extra.dark10}
          // borderWidth="2px"
          textSize="text-[15.79px]"
          leading="leading-[23.68px]"
          height="59.21px"
        >
          Visit Website
        </Button>
      </div>

      {/* ---------------- CONTACT CARDS ---------------- */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          place-items-center
        "
      >
        <ContactCard
          icon={<img src={IconLocationWhite} className="w-[23.68px] h-[23.68px]" alt="" />}
          title="Visit Campus"
          subtitle1="ASRAM Campus"
          subtitle2="Eluru, Andhra Pradesh"
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />

        <ContactCard
          icon={<img src={IconPhoneWhite} className="w-[23.68px] h-[23.68px]" alt="" />}
          title="Call Us"
          subtitle1="Admissions Office"
          subtitle2="Contact via asram.in"
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />

        <ContactCard
          icon={<img src={IconEmailWhite} className="w-[23.68px] h-[23.68px]" alt="" />}
          title="Email Us"
          subtitle1="For admission inquiries"
          subtitle2="See official website"
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />

      </div>

      {/* LINE DIVIDER */}
      <div className="w-full" style={{ border: "1px solid #19191933" }} />

      {/* ---------------- STATISTICS (EXACT SPACING) ---------------- */}
      <div
        className="
          grid
          grid-cols-4
          text-center
          gap-5
          place-items-center
        "
      >
        <StatBlock count="20+" label="Years of Excellence" color={secondaryColor} />
        <StatBlock count="190+" label="Total Seats" color={secondaryColor} />
        <StatBlock count="56+" label="Expert Faculty" color={secondaryColor} />
        <StatBlock count="INC" label="Approved" color={secondaryColor} />
      </div>
    </PageSection>
  );
}

/* =========================================================
   CONTACT CARD EXACT FIGMA STYLE
========================================================= */
function ContactCard({ icon, title, subtitle1, subtitle2, primaryColor = T.color.primary, secondaryColor = T.color.secondary }) {
  return (
    <div
      className="
        flex flex-col
        items-center justify-center
        text-center
        rounded-[8px]
        p-[24px]
        gap-[12px]
        w-[321px]
        h-[196px]
      "
      style={{
        backgroundColor: "#F7F9FC",
        border: "0.99px solid rgba(7, 7, 7, 0.2)"
      }}
    >
      <div
        className="
          w-[55.26px] h-[55.26px]
          rounded-full
          flex items-center justify-center
          shrink-0
        "
        style={{ backgroundColor: primaryColor }}
      >
        {icon}      </div>

      <h3
        className={`
          ${T.font.family}
          ${T.font.weight.semibold}
          text-[19.74px]
          leading-[29.61px]
        `}
        style={{ color: secondaryColor }}
      >
        {title}
      </h3>

      <div className="flex flex-col gap-[2px]">
        <p
          className="text-[14px] leading-[20px]"
          style={{ color: "#191919BF" }}
        >
          {subtitle1}
        </p>
        <p
          className="text-[14px] leading-[20px]"
          style={{ color: "#191919BF" }}
        >
          {subtitle2}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STAT BLOCK — EXACT FIGMA POSITIONING
========================================================= */
/* =========================================================
   STAT BLOCK — FIGMA LAYOUT + ORIGINAL ANIMATION RESTORED
========================================================= */
function StatBlock({ count, label, color = T.color.secondary }) {
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
          mb-[10px]
        `}
        style={{ color: color }}
      >
        {displayValue}
      </span>

      <span
        className={`
          ${T.font.family}
          text-[15.79px]
          leading-[23.68px]
          font-regular
        `}
        style={{ color: "#191919BF" }}
      >
        {label}
      </span>
    </div>
  );
}

