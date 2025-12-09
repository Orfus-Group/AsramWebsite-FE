import React from "react";
import { T } from "../../../theme";

export default function TwoColumnSection({
  title,
  subtitle,
  innerHeading,             // NEW → H3 heading inside right column
  image,
  reverse = false,
  paragraphs = [],
  children,                 // Extra items like cards, buttons, lists
  pt = "pt-[80px]",
  pb = "pb-[80px]",
}) {
  return (
    <section className={`w-full ${T.bg.section} flex justify-center`}>
      <div
        className={`
          w-[1440px] max-w-full
          flex flex-col
          gap-[40px]
          px-[120px]
          ${pt} ${pb}
        `}
      >

        {/* ────────────── MAIN TITLE + SUBTITLE (Top Area) ────────────── */}
        <div className="flex flex-col gap-[8px] w-full">
          {/* Main Title */}
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[36px] leading-[48px]
            `}
            style={{ color: T.color.text.secondary }}
          >
            {title}
          </h2>

          {/* Optional subtitle (small paragraph under title) */}
          {subtitle && (
            <p
              className={`
                ${T.font.family}
                ${T.font.weight.regular}
                text-[18px] leading-[28px]
                w-[650px]
              `}
              style={{ color: T.color.text.muted }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* ────────────── TWO-COLUMN LAYOUT ────────────── */}
        <div
          className={`
            flex items-start justify-between gap-[40px] w-full
            ${reverse ? "flex-row-reverse" : ""}
          `}
        >

          {/* LEFT IMAGE */}
          <img
            src={image}
            alt=""
            className="w-[576px] h-[384px] object-cover rounded-[8px]"
          />

          {/* RIGHT TEXT BLOCK */}
          <div className="flex flex-col gap-[24px] w-[550px] h-[130px]">

            {/* NEW → Inner H3 Heading */}
            {innerHeading && (
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[32px] leading-[42px]
                  w-[461px]
                `}
                style={{ color: T.color.text.secondary }}
              >
                {innerHeading}
              </h3>
            )}

            {/* Paragraph list */}
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`
                  ${T.font.family}
                  ${T.font.weight.regular}
                  text-[18px] leading-[26px]
                `}
                style={{ color: T.color.text.muted }}
              >
                {p}
              </p>
            ))}

          </div>
        </div>

        {/* ────────────── EXTRA CHILDREN (cards, buttons, lists) ────────────── */}
        {children}
      </div>
    </section>
  );
}
