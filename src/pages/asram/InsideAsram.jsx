// src/sections/home/InsideASRAM.jsx
import React from "react";
import quoteIcon from "../../assets/academics/leftquote.svg";
import { T } from "../../theme";

const InsideASRAM = ({ title, image, quote }) => {
  return (
    <section className="w-full py-[60px] md:py-[80px]">

      {/* MAIN OUTER CONTAINER — layout only adjusted */}
      <div
        className="
          w-full 
          max-w-[1440px]
          mx-auto 

          /* Figma padding structure */
          px-4 sm:px-6 md:px-10 lg:px-[120px]
        "
      >

        {/* TITLE — unchanged */}
        <h2
          className={`
            ${T.font.family}
            font-bold
            text-[28px] leading-[34px]
            sm:text-[34px] sm:leading-[42px]
            md:text-[38px] md:leading-[48px]
            lg:text-[42px] lg:leading-[52px]
            text-[#223F7F]
            mb-[30px] md:mb-[40px]
          `}
        >
          {title}
        </h2>

        {/* FIXED LAYOUT ON ALL SCREENS */}
        <div
          className="
            flex flex-col lg:flex-row 
            items-start lg:items-center 
            justify-start 
            w-full 
            gap-[30px] md:gap-[40px]
          "
        >
          {/* LEFT IMAGE — original styles preserved */}
          <img
            src={image}
            alt=""
            className="
              rounded-[8px]
              object-cover
              w-full
              max-w-[704.5px]
              h-[260px] sm:h-[320px] md:h-[380px] lg:h-[412px]
              flex-shrink-0
            "
          />

          {/* RIGHT QUOTE BLOCK — original styles preserved */}
          <div
            className="
              relative
              flex flex-col
              items-start
              justify-start
              w-full
              lg:w-[454.8px]
            "
          >
            {/* QUOTE ICON */}
            <img
              src={quoteIcon}
              alt=""
              className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]"
            />

            {/* QUOTE TEXT */}
            <p
              className={`
                ${T.font.family}
                text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                font-medium
              `}
              style={{
                color: "#191919",
                lineHeight: "1.4",
                marginTop: "16px",
                textAlign: "justify",
              }}
            >
              {quote}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InsideASRAM;
