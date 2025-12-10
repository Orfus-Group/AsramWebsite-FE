// src/sections/home/AsramNewsEventsLat.jsx
import React from "react";

import img1 from "../../assets/asram/newsart1.svg";
import img2 from "../../assets/asram/newsart2.svg";
import img3 from "../../assets/asram/newsart3.svg";
import img4 from "../../assets/asram/newsart4.svg";
import img5 from "../../assets/asram/newsart5.svg";
import usericon from "../../assets/asram/username.svg";
import calicon from "../../assets/asram/cal.svg";
import notificationicon from "../../assets/asram/notific.svg";
import { T } from "../../theme";

const AsramNewsEventsLat = () => {
  return (
    <section className={`w-full bg-[#D8DFEF] py-16`} id="news">

      {/* ⭐ UNIFIED CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px]">

        {/* Heading */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[28px] sm:text-[36px] lg:text-[42px]
            leading-tight
          `}
          style={{ color: T.color.text.secondary }}
        >
          News
        </h2>

        {/* Subtext */}
        <p
          className={`
            ${T.font.family}
            font-medium 
            text-[16px] sm:text-[18px] lg:text-[22px] 
            text-[#191919] 
            mt-4 lg:mt-5 mb-8 lg:mb-10
          `}
        >
          Latest highlights from our campus, hospital, and academic community.
        </p>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-[304.51px_1fr_304.51px]
            gap-4
            mx-auto
          "
        >

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {[{img:img1,text:"Advanced Oncology & Precision Treatment"},
              {img:img2,text:"Comprehensive Healthcare for Every Patient"},
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden group h-[240px] sm:h-[260px] lg:h-[282px]"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <p
                  className={`
                    absolute bottom-4 left-4 
                    text-white font-semibold text-lg leading-6
                    ${T.font.family}
                  `}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER MAIN CARD */}
          <div
            className="
              relative rounded-lg overflow-hidden group mx-auto
              h-[360px] sm:h-[420px] md:h-[500px] lg:h-[576px]
              w-full
            "
          >
            <img
              src={img3}
              className="w-full h-full object-cover group-hover:scale-105 duration-300"
            />

            <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-black/85 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">

              <h3
                className={`
                  text-white font-semibold 
                  text-xl sm:text-2xl leading-snug mb-3
                  ${T.font.family}
                `}
              >
                Leading Excellence in Medical Education & Clinical Training
              </h3>

              {/* meta info */}
              <div
                className={`
                  flex flex-wrap items-center gap-4 
                  text-white/90 text-sm
                  ${T.font.family}
                `}
              >
                <span className="flex items-center gap-1">
                  <img src={usericon} className="w-4 h-4" /> Ganesh Garuda
                </span>
                <span className="flex items-center gap-1">
                  <img src={calicon} className="w-4 h-4" /> 14 Nov 2025
                </span>
                <span className="flex items-center gap-1">
                  <img src={notificationicon} className="w-4 h-4" /> 23
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            {[{img:img4,text:"Shaping Skilled & Compassionate Nurses"},
              {img:img5,text:"Training Professionals for Modern Healthcare"},
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden group h-[240px] sm:h-[260px] lg:h-[282px]"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <p
                  className={`
                    absolute bottom-4 left-4 
                    text-white font-semibold text-lg leading-6
                    ${T.font.family}
                  `}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* BUTTON */}
        <div className="w-full flex justify-center mt-10">
          <button
            className={`
              w-[170px] sm:w-[182px]
              h-[44px] sm:h-[46px]
              bg-[#223F7F]
              text-white
              font-medium
              flex items-center justify-center
              gap-[10px]
              rounded-[9px]
              hover:bg-[#1A336B]
              duration-200
              ${T.font.family}
            `}
          >
            View All News
          </button>
        </div>

      </div>
    </section>
  );
};

export default AsramNewsEventsLat;
