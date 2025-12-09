// src/sections/home/ResearchInnovation.jsx
import React from "react";
import { T } from "../../theme";

const ResearchInnovation = ({ title, description1, description2, image }) => {
  return (
    <section className="w-full py-[80px]">

      {/* ⭐ UNIFIED CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px]">

        {/* Title */}
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

        {/* ROW — RESPONSIVE */}
        <div
          className="
            flex 
            flex-col lg:flex-row
            items-start 
            lg:items-start
            gap-[40px] lg:gap-[170.5px]
            w-full
          "
        >
          {/* LEFT TEXT BLOCK */}
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
              ASRAM drives research and innovation through collaborative projects,
              clinical studies, and evidence-based exploration. Students and faculty
              work together to develop new ideas, strengthen healthcare practices,
              and contribute meaningful advancements to the medical and nursing
              community.
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
              ASRAM drives research and innovation through collaborative projects,
              clinical studies, and evidence-based exploration. Students and faculty
              work together to develop new ideas, improve treatment practices, and
              advance healthcare knowledge. With access to modern labs, skilled
              mentors, real clinical data, ASRAM fosters a culture of inquiry
              that shapes future-ready healthcare professionals.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src={image}
            alt=""
            className="
              rounded-[8px]
              object-cover
              w-full
              max-w-[523px]
              h-[240px] sm:h-[280px] md:h-[300px] lg:h-[343px]
            "
          />
        </div>

        {/* BUTTON */}
        <div
          className="
            flex 
            justify-center
            w-full
            mt-[46px]
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
