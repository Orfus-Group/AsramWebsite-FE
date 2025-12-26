import React from "react";
import PageSection from "./PageContainer";
import { T } from "@/theme";

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


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[47px] w-full">

        {/* LEFT: Image */}
        <div className="w-full">
          <img loading="lazy" decoding="async"
            src={image}
            alt={title}
            className="w-full h-auto block object-cover rounded-[10px]"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="w-full flex flex-col gap-[24px]">

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
                style={{ color: "#191919BF" }}
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
