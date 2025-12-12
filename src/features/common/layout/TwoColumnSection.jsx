import React from "react";
import PageSection from "./PageContainer";
import { T } from "../../../theme";

export default function TwoColumnSection({
  title,
  innerHeading,
  image,
  paragraphs = [],
  children,
  bg = "bg-white",
  bgColor,
}) {
  return (
    <PageSection
      bg={bg}
      bgColor={bgColor}
   paddingClass="py-[80px]"
    >
      {/* Top Heading */}
      {title && (
        <h2
          className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[32px] md:text-[36px]
          leading-[42px] md:leading-[48px]
          mb-[40px]
        `}
          style={{ color: T.color.secondary }}
        >
          {title}
        </h2>
      )}

      <div className="flex flex-col lg:flex-row gap-[40px] w-full">

        {/* LEFT: Image */}
        <div className="w-full lg:w-[50%] flex-shrink-0">
          <img loading="lazy" decoding="async"
            src={image}
            alt={title}
            className="w-full h-auto rounded-[10px] object-cover"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="w-full lg:w-[50%] flex flex-col gap-[24px]">

          {/* Sub heading */}
          {innerHeading && (
            <h3
              className={`
              ${T.font.family}
              ${T.font.weight.semibold}
              text-[24px] md:text-[28px]
              leading-[32px] md:leading-[38px]
              max-w-[520px]
            `}
              style={{ color: T.color.secondary }}
            >
              {innerHeading}
            </h3>
          )}

          {/* Paragraphs */}
          <div className="flex flex-col gap-[16px]">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`
                  ${T.font.family}
                  text-[16px] md:text-[17px]
                  leading-[24px] md:leading-[26px]
                `}
                style={{ color: T.color.text.muted }}
              >
                {p}
              </p>
            ))}
          </div>

        </div>
      </div>

      {/* Children → Feature grid */}
      <div className="mt-[40px]">
        {children}
      </div>
    </PageSection>
  );
}
