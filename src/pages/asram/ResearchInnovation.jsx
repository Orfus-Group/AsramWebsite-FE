// src/sections/home/ResearchInnovation.jsx
import React from "react";
import { T } from "../../theme";

const ResearchInnovation = ({ title, description1, description2, image }) => {
  return (
    <section className="w-full py-[80px] bg-white">

      {/* OUTER FIXED LAYOUT WRAPPER — SAME AS FIGMA */}
      <div
        className="
          w-full 
          max-w-[1440px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-[120px]
          flex flex-col
        "
      >
        {/* TITLE — unchanged */}
        <h2
          className={`
            ${T.font.family}
            font-bold
            text-[42px] leading-[52px]
            text-[#223F7F]
            mb-[40px]
            text-left
          `}
        >
          Research & Innovation
        </h2>

        {/* MAIN ROW — Figma accurate spacing */}
        <div
          className="
            w-full
            max-w-[1200px]
            flex flex-col lg:flex-row
            justify-between
            items-start
            gap-[40px] 
            lg:gap-[170px]
            mx-auto
          "
        >
          {/* LEFT TEXT BLOCK — original styles preserved */}
          <div
            className="
              flex flex-col
              gap-[20px]
              w-full
              lg:w-[501.5px]
            "
          >
            <p
              className={T.font.family}
              style={{
                fontSize: "18px",
                lineHeight: "26px",
                textAlign: "justify",
                color: "#191919",
              }}
            >
              {description1}
            </p>

            <p
              className={T.font.family}
              style={{
                fontSize: "18px",
                lineHeight: "26px",
                textAlign: "justify",
                color: "#191919",
              }}
            >
              {description2}
            </p>
          </div>

          {/* RIGHT IMAGE — identical to design */}
          <img
            src={image}
            alt=""
            className="
              rounded-[8px]
              object-cover
              w-full
              max-w-[523px]
              h-[240px] sm:h-[280px] md:h-[300px] lg:h-[343px]
              flex-shrink-0
            "
          />
        </div>

        {/* BUTTON — Figma spacing */}
        <div
          className="
            w-full
            flex justify-center
            mt-[40px]
          "
        >
          <button
            className={T.font.family}
            style={{
              width: "187px",
              height: "46px",
              padding: "12px 24px",
              gap: "10px",
              backgroundColor: "#223F7F",
              color: "white",
              borderRadius: "9.4px",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "20px",
            }}
          >
            View Research
          </button>
        </div>

      </div>
    </section>
  );
};

export default ResearchInnovation;
