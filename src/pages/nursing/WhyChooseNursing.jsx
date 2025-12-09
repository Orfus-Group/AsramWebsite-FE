import React from "react";
import checkIcon from "../../assets/nursing/checkicon.svg";
import { T } from "../../theme";

export default function WhyChooseSection() {
  return (
    <section className="w-full flex justify-center bg-white pt-[60px] pb-[60px]">
      {/* Wrapper for 1440px layout */}
      <div
        className="flex flex-col items-center"
        style={{ width: "1440px", padding: "0px 120px 80px" }}
      >
        {/* Outer Figma box - NO TOP PADDING */}
        <div
          className="
            w-[1200px]
            h-[301.11px]
            rounded-[9.87px]
            flex flex-col
            items-center
          "
          style={{
            backgroundColor: "#F7F9FC",
            paddingLeft: "39.47px",
            paddingRight: "39.47px",
            paddingTop: "0px",     // ✅ Removed as you requested
            paddingBottom: "0px",
            gap: "39.47px",
          }}
        >
          {/* Heading */}
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[28px]
              leading-[36px]
              text-center
              mt-[39.47px]     // ✅ offset heading visually like Figma WITHOUT using padding-top
            `}
            style={{ color: "#223F7F" }}
          >
            Why Choose ASRAM Nursing?
          </h2>

          {/* 2 Column Layout */}
          <div
            className="flex w-full"
            style={{
              gap: "31.58px",
              justifyContent: "center",
            }}
          >
            {/* LEFT COLUMN */}
            <div className="flex flex-col w-[50%] gap-[16px]">
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[18px]
                  leading-[26px]
                `}
                style={{ color: "#223F7F" }}
              >
                Educational Excellence
              </h3>

              <ul className="flex flex-col gap-[10px]">
                {[
                  "Integration with comprehensive multispecialty hospital",
                  "Robust infrastructure across 10-acre campus",
                  "Recognized affiliations and regulatory approvals",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-[10px]">
                    <img
                      src={checkIcon}
                      className="w-[16px] h-[16px] mt-[4px]"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(44%) sepia(71%) saturate(406%) hue-rotate(112deg) brightness(93%) contrast(90%)",
                      }}
                      alt=""
                    />
                    <p
                      className={`
                        ${T.font.familyMulish}
                        text-[15px]
                        leading-[23px]
                      `}
                      style={{ color: "#191919BF" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col w-[50%] gap-[16px]">
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[18px]
                  leading-[26px]
                `}
                style={{ color: "#223F7F" }}
              >
                Student Success
              </h3>

              <ul className="flex flex-col gap-[10px]">
                {[
                  "Clear pathways from undergraduate to postgraduate",
                  "Student-centered environment with strong mentoring",
                  "Practical orientation ensuring job readiness",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-[10px]">
                    <img
                      src={checkIcon}
                      className="w-[16px] h-[16px] mt-[4px]"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(44%) sepia(71%) saturate(406%) hue-rotate(112deg) brightness(93%) contrast(90%)",
                      }}
                      alt=""
                    />
                    <p
                      className={`
                        ${T.font.familyMulish}
                        text-[15px]
                        leading-[23px]
                      `}
                      style={{ color: "#191919BF" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
