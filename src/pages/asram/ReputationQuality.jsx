// src/sections/home/ReputationQuality.jsx
import React from "react";
import { T } from "../../theme";
import repImage from "../../assets/asram/reputation.svg";

const ReputationQuality = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#FFF", // exact Figma light-beige background
        padding: "80px 0",          // top & bottom 80px
      }}
    >
      {/* FRAME-141 → 1440px width centered */}
      <div
        className="mx-auto"
        style={{
          width: "1440px",
          padding: "0 120px", // left & right 120px as per Figma
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT COLUMN (TEXT AREA 535.9px) */}
        <div
          style={{
            width: "535.9px",
            marginTop: "0px",
          }}
        >
          {/* TITLE */}
          <h2
            style={{
              fontFamily: "Montserrat",
              fontSize: "32px",
              fontWeight: "700",
              color: "#223F7F",
              lineHeight: "40px",
              marginBottom: "20px",
            }}
          >
            A Reputation Built on Quality
          </h2>

          {/* PARAGRAPH */}
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: "400",
              color: "rgba(25,25,25,0.75)",
              lineHeight: "1.61",
              width: "535.9px",
              height: "116px",
            }}
          >
            ASRAM School of Nursing is widely respected for its high-quality
            teaching, strong clinical training, and excellent student outcomes.
            Our programs continue to earn strong recognition for academic
            standards and hands-on learning.
          </p>

          {/* BUTTON → exact layout & spacing */}
          <button
            style={{
              width: "301px",
              height: "46px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: "10px",
              margin: "40px 234.9px 0 0", // EXACT from Figma
              padding: "12px 24px",
              borderRadius: "8px",
              backgroundColor: "#223f7f",
              color: "#ffffff",
              fontFamily: "Montserrat",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Explore Our Achievements
          </button>
        </div>

        {/* RIGHT IMAGE BLOCK — EXACT 523 × 343 */}
        <div
          style={{
            width: "523px",
            height: "343px",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
          }}
        >
          <img
            src={repImage}
            alt="Reputation Built on Quality"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ReputationQuality;
