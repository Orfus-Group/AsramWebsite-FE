import React, { useEffect, useRef, useState } from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

import Button from "@/components/ui/button";
import { IconArrowRight } from "@/assets/icons";



/* =======================
   CONTACT ICONS (SVG)
======================= */

export const LocationIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19.7367 9.86788C19.7367 14.7952 14.2706 19.9268 12.4351 21.5116C12.2641 21.6402 12.0559 21.7097 11.842 21.7097C11.6281 21.7097 11.4199 21.6402 11.2489 21.5116C9.41338 19.9268 3.94727 14.7952 3.94727 9.86788C3.94727 7.77407 4.77903 5.76601 6.25958 4.28546C7.74013 2.80491 9.74819 1.97314 11.842 1.97314C13.9358 1.97314 15.9439 2.80491 17.4244 4.28546C18.905 5.76601 19.7367 7.77407 19.7367 9.86788Z"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8418 12.828C13.4768 12.828 14.8023 11.5026 14.8023 9.86751C14.8023 8.23246 13.4768 6.90698 11.8418 6.90698C10.2067 6.90698 8.88123 8.23246 8.88123 9.86751C8.88123 11.5026 10.2067 12.828 11.8418 12.828Z"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PhoneIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M13.6493 16.3495C13.8531 16.4431 14.0828 16.4644 14.3004 16.4101C14.5179 16.3557 14.7105 16.2289 14.8464 16.0504L15.1967 15.5916C15.3805 15.3464 15.6189 15.1475 15.893 15.0105C16.1671 14.8734 16.4692 14.8021 16.7757 14.8021H19.7362C20.2596 14.8021 20.7616 15.01 21.1318 15.3802C21.5019 15.7503 21.7099 16.2523 21.7099 16.7758V19.7363C21.7099 20.2598 21.5019 20.7618 21.1318 21.1319C20.7616 21.502 20.2596 21.71 19.7362 21.71C15.0251 21.71 10.507 19.8385 7.17573 16.5073C3.84449 13.176 1.97302 8.65791 1.97302 3.94683C1.97302 3.42338 2.18096 2.92136 2.5511 2.55122C2.92124 2.18109 3.42325 1.97314 3.94671 1.97314H6.90723C7.43069 1.97314 7.9327 2.18109 8.30284 2.55122C8.67298 2.92136 8.88092 3.42338 8.88092 3.94683V6.90736C8.88092 7.21376 8.80958 7.51596 8.67255 7.79001C8.53552 8.06407 8.33657 8.30246 8.09144 8.4863L7.6296 8.83268C7.44843 8.97102 7.32074 9.1678 7.26821 9.38961C7.21568 9.61142 7.24156 9.84457 7.34144 10.0495C8.69014 12.7888 10.9083 15.0042 13.6493 16.3495Z"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EmailIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M21.7097 6.90698L12.837 12.5586C12.536 12.7335 12.194 12.8256 11.8458 12.8256C11.4976 12.8256 11.1556 12.7335 10.8545 12.5586L1.9729 6.90698"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.7361 3.94727H3.94658C2.85655 3.94727 1.9729 4.83091 1.9729 5.92095V17.7631C1.9729 18.8531 2.85655 19.7367 3.94658 19.7367H19.7361C20.8261 19.7367 21.7097 18.8531 21.7097 17.7631V5.92095C21.7097 4.83091 20.8261 3.94727 19.7361 3.94727Z"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



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
          icon={<IconArrowRight
            size={19}
            stroke="white"
            strokeWidth={1}
          /> }
        >
          Start Your Application
        </Button>

        <Button
          customPadding="px-[39.47px] py-[15.79px]"
          bg="#EEF2F7"
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
          bg="#EEF2F7"
          color={T.color.secondary}
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
  icon={<LocationIcon className="w-[23.68px] h-[23.68px] text-white" />}
  title="Visit Campus"
  subtitle1="ASRAM Campus"
  subtitle2="Eluru, Andhra Pradesh"
/>

<ContactCard
  icon={<PhoneIcon className="w-[23.68px] h-[23.68px] text-white" />}
  title="Call Us"
  subtitle1="Admissions Office"
  subtitle2="Contact via asram.in"
/>

<ContactCard
  icon={<EmailIcon className="w-[23.68px] h-[23.68px] text-white" />}
  title="Email Us"
  subtitle1="For admission inquiries"
  subtitle2="See official website"
/>

      </div>

      {/* LINE DIVIDER */}
      <div className="w-full mt-[40px]" style={{ border: "1px solid #19191933" }} />

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
      style={{ backgroundColor: "#EEF2F7" }}
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
 {icon}      </div>

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
        style={{ color: "#191919BF" }}
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
          mb-[10px]
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
          font-regular
        `}
        style={{ color: "#191919BF" }}
      >
        {label}
      </span>
    </div>
  );
}

