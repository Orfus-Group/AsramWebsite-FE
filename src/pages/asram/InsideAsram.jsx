import React from "react";
import quoteIcon from "../../assets/asram/quoteicon.svg";
import { T } from "../../theme";

const InsideASRAM = ({ title, image, quote }) => {
  return (
    <section
      className="w-full flex flex-col items-start justify-start"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "120px",
        paddingRight: "120px",
      }}
    >
      {/* Title */}
      <h2
        className="
          font-playfair font-bold
          text-[42px] leading-[52px]
          text-[#223F7F]
          mb-[40px]
        "
      >
        {title}
      </h2>

      {/* Image + Quote Row */}
      <div className="flex items-center justify-start w-full gap-[40px]">
        
        {/* LEFT IMAGE */}
        <img
          src={image}
          alt=""
          className="object-cover rounded-[8px]"
          style={{
            width: "704.5px",
            height: "412px",
          }}
        />

        {/* RIGHT QUOTE BLOCK */}
        <div
          className="relative flex flex-col items-start justify-start"
          style={{
            width: "454.8px",
          }}
        >
          {/* QUOTE ICON */}
          <img
            src={quoteIcon}
            alt=""
            style={{
              width: "30px",
              height: "30px",
              transform: "rotate(-180deg)", // from Figma
            }}
          />

          {/* TEXT */}
          <p
            className={`${T.font.family} text-[24px] font-medium`}
            style={{
              color: "#191919",
              lineHeight: "1.33",
              textAlign: "justify",
              marginTop: "16px", // exact visual spacing from Figma
              width: "454.8px",
            }}
          >
            {quote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsideASRAM;
