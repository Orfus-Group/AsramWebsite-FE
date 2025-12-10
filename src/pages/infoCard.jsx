import React from "react";
import { T } from "../theme";

export default function InfoCard({
  icon,
  title,
  description,
  years,
  seats,
  variant = "program",
}) {
  const isProgram = variant === "program";

  // -------------------------
  // VARIANT DEFINITIONS (Responsive)
  // -------------------------
  const variants = {
 program: {
      wrapper: `
        w-[378.95px]
        h-[422.37px]
        flex flex-col items-start justify-start
        rounded-[9.87px]
      `,
    wrapperStyle: {
  backgroundColor: "#F7F9FC",   // your card BG
  border: "none",               // remove default border
  paddingTop: "23.7px",
  paddingLeft: "23.7px",
  paddingRight: "23.7px",
  paddingBottom: "23.7px",
  gap: "16.8px",

  /* 🔹 Figma bottom curved stroke */
  borderRadius: "9.87px",

  /* 🔹 Create the curved bottom effect */
},

      title: `
        ${T.font.family}
        ${T.font.weight.semibold}
        text-[26px] leading-[34px]
        text-left
      `,
      paragraph: `
        w-[293.1px] h-[144px]
        ${T.font.family} text-[16px] leading-[24px] text-left
      `,
    },


    vmv: {
      wrapper: `
        w-[378.95px]
        h-[330px]
        flex flex-col items-start justify-start
        rounded-[9.87px]
        bg-white
      `,
      wrapperStyle: {
        border: `1px solid ${T.color.border}`,
        padding: "33px",
        gap: "20px",
      },
      title: `
        ${T.font.family}
        ${T.font.weight.bold}
        text-[20px] leading-[28px] text-left
      `,
      paragraph: `
        w-[304.93px] h-[144px]
        ${T.font.family} text-[16px] leading-[24px] text-left
      `,
    },

   // ⭐ ADD THIS NEW VARIANT INSIDE variants = { ... }

    whychoose: {
      wrapper: `
        w-full max-w-[380px]
        flex flex-col items-start justify-start
        rounded-[8px]
        bg-white
      `,
  wrapperStyle: {
    padding: "30px",
    border: `1px solid ${T.color.border}`,
    borderRadius: "8px",
    gap: "18px",
  },
       title: `
    ${T.font.family}
    ${T.font.weight.semibold}
    text-[20px]
    leading-[28px]
    text-left
    text-[#191919]
  `,
  paragraph: `
    ${T.font.family}
    font-normal
    text-[18px]
    leading-[26px]
    text-justify
  `,
    },

       feature: {
       wrapper: `
    w-[282.2px]
    h-[296.1px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-white
  `,
  wrapperStyle: {
    paddingTop: "23.7px",
    paddingLeft: "23.7px",
    paddingRight: "23.7px",
    paddingBottom: "23.7px",
    border: `1px solid ${T.color.border}`,
    boxShadow:
      "0px 8px 16px rgba(0, 140, 140, 0.04), 0px 4px 8px rgba(0, 140, 140, 0.08)",
    gap: "16.8px",
  },
  title: `
    ${T.font.family}
    ${T.font.weight.semibold}
    text-[20px] leading-[28px]
    text-left
    w-full
  `,
  paragraph: `
    ${T.font.family}
    text-[16px] leading-[24px]
    text-left
    w-full
  `,
    },

 featureLeft: {
  wrapper: `
    w-[259.2px]
    h-[270.1px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-white
  `,
  wrapperStyle: {
    paddingTop: "23.7px",
    paddingLeft: "23.7px",
    paddingRight: "23.7px",
    paddingBottom: "23.7px",
    border: `1px solid ${T.color.border}`,
    boxShadow:
      "0px 8px 16px rgba(0, 140, 140, 0.04), 0px 4px 8px rgba(0, 140, 140, 0.08)",
    gap: "16.8px",
  },
  title: `
    ${T.font.family}
    ${T.font.weight.semibold}
    text-[20px] leading-[28px]
    text-left
    w-full
  `,
  paragraph: `
    ${T.font.family}
    text-[16px] leading-[24px]
    text-left
    w-full
  `,
},

keystrength: {
  wrapper: `
    w-[378.95px]
    h-[277.89px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-[#F7F9FC]
  `,
  wrapperStyle: {
    backgroundColor: "#F7F9FC",
    paddingTop: "23.7px",
    paddingLeft: "23.7px",
    paddingRight: "23.7px",
    paddingBottom: "23.7px",
    gap: "16.8px",

    /* ⭐ Only bottom stroke */
    borderBottom: "3.95px solid #223F7F",

    /* ⭐ Ensure NO borders anywhere else */
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",

    /* ⭐ Smooth rounded inner look like Figma */
    borderRadius: "9.87px",
    // boxShadow: "0px 4px 0px -2px #223F7F inset"
  },

  title: `
    ${T.font.family}
    ${T.font.weight.semibold}
    text-[23.68px] leading-[33.2px]
    text-left w-full
  `,

  paragraph: `
    ${T.font.family}
    text-[15.79px] leading-[27px]
    text-left w-full
  `,
}

,

 research: {
      wrapper: `
        w-[378.95px]
        h-[223px]
        flex flex-col justify-start items-start
        rounded-[9.87px]
      `,
      wrapperStyle: {
        backgroundColor: T.color.background.soft,
        border: `1px solid ${T.color.border}`,
        paddingTop: "24.67px",
        paddingLeft: "24.67px",
        paddingRight: "24.7px",
        paddingBottom: "0.99px",
        gap: "15.79px",
      },
      title: `
        ${T.font.family}
        ${T.font.weight.semibold}
        text-[20px] leading-[28px]
        text-left
      `,
      paragraph: `
        ${T.font.family}
        ${T.font.weight.regular}
        text-[15.8px] leading-[1.6]
        w-[295.1px] h-[76px]
        text-left
      `,
    },
  };

  const v = variants[variant];

  // -------------------------
  // ICON RENDER
  // -------------------------
  const renderIcon = () => {
    if (variant === "research") {
      return (
        <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
          <img src={icon} alt="" className="w-[38px] h-[38px] object-contain" />
        </div>
      );
    }

    if (variant === "keystrength") {
      return (
        <div
      className="w-[55.26px] h-[55.26px] flex items-center justify-center rounded-[9.87px] shrink-0"
          style={{ backgroundColor: T.color.primary }}
        >
          <img src={icon} alt="" className="w-[28px] h-[28px] object-contain" />
        </div>
      );
    }

    if (variant === "whychoose") {
      return (
       <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: "55.26px",
        height: "55.26px",
        borderRadius: "16.18px",
        backgroundColor: "rgba(34,63,127,0.10)", // Primary Blue @ 10%
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
  <img
        src={icon}
        alt=""
        className="w-[28px] h-[28px] object-contain"
      />
              </div>
      );
    }
    

  // 3️⃣ ALL OTHER EXISTING VARIANTS (program, vmv, feature, featureLeft)
  const iconWrapper = `
    w-[55.26px]
    h-[55.26px]
    flex items-center justify-center
    rounded-[9.87px]
    shrink-0
  `;

    return (
      <div
      className={`${iconWrapper} `}
        style={{ backgroundColor: T.color.primary }}
      >
        <img src={icon} alt="" className="w-[28px] h-[28px] object-contain" />
      </div>
    );
  };

  // -------------------------
  // RENDER COMPONENT
  // -------------------------
  return (
    <div className={v.wrapper} style={v.wrapperStyle}>
            {/* ICON */}
      {renderIcon()}

 {/* TITLE */}
      <h3
        className={v.title}
        style={{ color: T.color.text.secondary }}
      >
        {title}
      </h3>

      {/* BADGES FOR PROGRAM VARIANT */}
      {isProgram && (
        <div className="flex items-center gap-[10px] mb-[26px]">
          <span
             className="
              flex items-center justify-center
              w-[141.26px] h-[29.61px]
              rounded-[3.95px]
              font-montserrat text-[13.8px] leading-[1.43]
            "
            style={{ backgroundColor: T.color.primary, color: "#FFFFFF" }}
          >
            {years}
          </span>

          <span
            className="
              flex items-center justify-center
              w-[97.4px] h-[29.61px]
              bg-white border rounded-[3.95px]
              font-montserrat text-[13.8px] leading-[1.43]
            "
            style={{
              borderColor: T.color.text.secondary,
              color: T.color.text.secondary,
            }}
          >
            {seats}
          </span>
        </div>
      )}

      {/* DESCRIPTION */}
      <p
        className={v.paragraph}
        style={{
          color:
            variant === "whychoose"
              ? "rgba(25, 25, 25, 0.75)"
              : variant === "research"
              ? T.color.text.researchMuted
              : T.color.text.muted,
        }}
      >
        {description}
      </p>
    </div>
  );
}
