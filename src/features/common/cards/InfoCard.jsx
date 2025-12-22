import React from "react";
import { T } from "@/theme";

export default function InfoCard({
    icon,
    title,
    description,
    years,
    seats,
    variant = "program",
    buttonText,
    onClick,
}) {
    const isProgram = variant === "program";

    // -------------------------
    // VARIANT DEFINITIONS (Responsive)
    // -------------------------
    const variants = {
        program: {
            wrapper: `
      w-full             
    max-w-[380px]    
    min-w-0 md:min-w-[340px]       
    h-auto md:h-[422.37px]
    flex flex-col items-start justify-start
    rounded-[12px]
      `,
            wrapperStyle: {
                backgroundColor: "#EEF2F7",   // your card BG
                border: "1px solid #07070733",
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
    w-full                 /* allow responsive width */
    max-w-[380px]    
    min-w-0 md:min-w-[340px]   
    h-auto md:h-[330px]
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
    w-full
    max-w-[304.93px]
    ${T.font.family} text-[16px] leading-[24px] text-left
  `,
        },


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
  `,
        },

        feature: {
            wrapper: `
        w-full
        max-w-[282.2px]
        min-h-[296.1px]
        flex flex-col items-start justify-start
        rounded-[12px]
        bg-[#EEF2F7]
        mx-auto
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
        font-regular
        text-[18px] leading-[24px]
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
    w-full
    max-w-[390px]        /* FIX: Prevents breaking on smaller laptops */
    min-h-[277px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-[#F7F9FC]
  `,
            wrapperStyle: {
                backgroundColor: "#FFF",
                paddingTop: "23.7px",
                paddingLeft: "23.7px",
                paddingRight: "23.7px",
                paddingBottom: "23.7px",
                gap: "16.8px",

                /* ⭐ Only bottom stroke */
                borderBottom: "4px solid #008C8C",

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
    text-[15.79px] leading-[27.6px]
    text-left w-full
  `,
        },

        research: {
            wrapper: `
    w-full
    max-w-[390px]        /* FIX: Prevents breaking on smaller laptops */
    min-h-[220px]
    flex flex-col justify-start items-start
    rounded-[10px]
  `,
            wrapperStyle: {
                backgroundColor: T.color.background.soft,
                border: `1px solid ${T.color.border}`,
                padding: "26px",
                gap: "16px",
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
    text-[18px] leading-[26px]
    text-left
    w-full
  `,
        },

    };

    const v = variants[variant] || variants.program;

    // -------------------------
    // ICON RENDER
    // -------------------------
    const renderIcon = () => {
        const isSvgComponent = typeof icon !== "string";

        // =====================
        // RESEARCH (SVG JSX)
        // =====================
        if (variant === "research") {
            return (
                <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
                    {isSvgComponent ? (
                        icon
                    ) : (
                        <img
                            loading="lazy"
                            decoding="async"
                            src={icon}
                            alt=""
                            className="w-[38px] h-[38px] object-contain"
                        />
                    )}
                </div>
            );
        }

        // =====================
        // KEY STRENGTH
        // =====================
        if (variant === "keystrength") {
            return (
                <div
                    className="w-[55.26px] h-[55.26px] flex items-center justify-center rounded-[9.87px] shrink-0"
                    style={{ backgroundColor: T.color.primary }}
                >
                    {isSvgComponent ? (
                        icon
                    ) : (
                        <img
                            loading="lazy"
                            decoding="async"
                            src={icon}
                            alt=""
                            className="w-[28px] h-[28px] object-contain"
                        />
                    )}
                </div>
            );
        }

        // =====================
        // WHY CHOOSE
        // =====================
        if (variant === "whychoose") {
            return (
                <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                        width: "55.26px",
                        height: "55.26px",
                        borderRadius: "16.18px",
                        backgroundColor: "#223F7F1A",
                    }}
                >
                    {isSvgComponent ? (
                        icon
                    ) : (
                        <img
                            loading="lazy"
                            decoding="async"
                            src={icon}
                            alt=""
                            className="w-[28px] h-[28px] object-contain"
                        />
                    )}
                </div>
            );
        }

        // =====================
        // DEFAULT (program, vmv, feature, featureLeft, etc.)
        // =====================
        return (
            <div
                className="
          w-[55.26px]
          h-[55.26px]
          flex items-center justify-center
          rounded-[9.87px]
          shrink-0
        "
                style={{ backgroundColor: T.color.primary }}
            >
                {isSvgComponent ? (
                    icon
                ) : (
                    <img
                        loading="lazy"
                        decoding="async"
                        src={icon}
                        alt=""
                        className="w-[28px] h-[28px] object-contain"
                    />
                )}
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
            <h6
                className={v.title}
                style={{ color: T.color.text.secondary }}
            >
                {title}
            </h6>

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

                    {/* <span
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
                    </span> */}
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
                                ? "#191919BF" : variant === "program" ? "#6B7280"
                                    : "#6B7280",
                }}
            >
                {description}
            </p>

            {/* BUTTON (Added for Research Variant compatibility) */}
            {buttonText && (
                <button
                    onClick={onClick}
                    className="mt-4 flex items-center gap-2 text-[#008C8C] font-semibold text-[14px] hover:underline"
                >
                    {buttonText} <span>→</span>
                </button>
            )}
        </div>
    );
}
