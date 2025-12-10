import React from "react";
import PageSection from "./PageContainer";

export default function TwoColumnSection({
  title,
  innerHeading,
  image,
  paragraphs = [],
  children,
  pt = "pt-[80px]",
  pb = "pb-[80px]",
  bg = "bg-white",
}) {
  return (
    <PageSection
      bg={bg}
      className={`${pt} ${pb}`}
    >
      {/* Top Heading */}
      {title && (
        <h2 className="
          font-montserrat font-bold
          text-[32px] md:text-[36px]
          leading-[42px] md:leading-[48px]
          text-[#223F7F] mb-[40px]
        ">
          {title}
        </h2>
      )}

      <div className="flex flex-col lg:flex-row gap-[40px] w-full">
        
        {/* LEFT: Image */}
        <div className="w-full lg:w-[50%] flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-[10px] object-cover"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="w-full lg:w-[50%] flex flex-col gap-[24px]">

          {/* Sub heading */}
          {innerHeading && (
            <h3 className="
              font-montserrat font-semibold
              text-[24px] md:text-[28px]
              leading-[32px] md:leading-[38px]
              text-[#223F7F]
              max-w-[520px]
            ">
              {innerHeading}
            </h3>
          )}

          {/* Paragraphs */}
          <div className="flex flex-col gap-[16px]">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="
                  font-montserrat
                  text-[16px] md:text-[17px]
                  leading-[24px] md:leading-[26px]
                  text-[#6B7280]
                "
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
