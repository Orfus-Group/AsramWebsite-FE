import React from "react";
import { T } from "../../theme";
import researchinnov from "../../assets/asram/researchinnov.svg"

const ResearchInnovation = ({ title, description1, description2, image }) => {
  return (
  <section
  className="w-full flex flex-col"
  style={{
    padding: "80px 130px",
  }}
>
  {/* Title */}
  <h2
    className="font-playfair font-bold text-[42px] leading-[52px] text-[#223F7F] mb-[40px]"
  >
    Research & Innovation
  </h2>

  {/* Row with EXACT GAP */}
  <div
    className="flex items-start"
    style={{
      width: "1195px",
      height: "372px",
      gap: "170.5px", // ⭐ EXACT calculated gap
    }}
  >
    {/* LEFT TEXT COLUMN */}
    <div
      style={{
        width: "501.5px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p
        style={{
          fontFamily: "Montserrat",
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
        style={{
          fontFamily: "Montserrat",
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
        mentors, and real clinical data, ASRAM fosters a culture of inquiry
        that shapes future-ready healthcare professionals.
      </p>
    </div>

    {/* RIGHT IMAGE BLOCK */}
    <img
      src={researchinnov}
      alt=""
      style={{
        width: "523px",
        height: "343px",
        borderRadius: "8px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* BUTTON */}
  <button
    style={{
      marginTop: "32px",
      backgroundColor: "#223F7F",
      color: "white",
      fontFamily: "Montserrat",
      width: "150px",
      height: "40px",
      borderRadius: "8px",
    }}
  >
    View Research
  </button>
</section>

  );
};

export default ResearchInnovation;
