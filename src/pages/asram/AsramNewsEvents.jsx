// src/sections/home/AsramNewsEvents.jsx
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

const AsramNewsEvents = () => {
  return (
    <section className={`w-full ${T.bg.programCard} py-16`} id="news">

      {/* CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px]">

        {/* HEADING */}
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

        <p
          className={`
            ${T.font.family}
            font-medium 
            text-[16px] sm:text-[18px] lg:text-[22px] 
            text-[#191919] 
            mt-2 mb-6 sm:mb-8 lg:mb-10
          `}
        >
          Latest highlights from our campus, hospital, and academic community.
        </p>

        {/* ===================== MOBILE LAYOUT ===================== */}
        <div className="block lg:hidden">

          {/* FEATURED BIG CARD */}
          <div className="relative rounded-xl overflow-hidden mb-4 h-[340px] sm:h-[380px]">
            <img src={img3} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h3
                className={`
                  text-white font-semibold
                  text-lg sm:text-xl leading-snug mb-2
                  ${T.font.family}
                `}
              >
                Leading Excellence in Medical Education & Clinical Training
              </h3>

              <div className="flex items-center gap-4 text-white/90 text-xs sm:text-sm">
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

          {/* 4 SMALL CARDS — 2 COL GRID */}
          <div className="grid grid-cols-2 gap-4">
            {[img1, img2, img4, img5].map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden h-[160px] sm:h-[180px]"
              >
                <img src={img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== DESKTOP LAYOUT (unchanged) ===================== */}
        <div
          className="
            hidden lg:grid 
            grid-cols-[304.51px_1fr_304.51px]
            gap-4 
            mt-4
          "
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {[{img:img1,text:"Advanced Oncology & Precision Treatment"},
              {img:img2,text:"Comprehensive Healthcare for Every Patient"},
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl h-[282px]">
                <img src={item.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER FEATURE */}
          <div className="relative rounded-xl overflow-hidden h-[576px]">
            <img src={img3} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-semibold mb-3">
                Leading Excellence in Medical Education & Clinical Training
              </h3>

              <div className="flex items-center gap-4 text-white/90 text-sm">
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
              <div key={i} className="relative overflow-hidden rounded-xl h-[282px]">
                <img src={item.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
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
              text-white rounded-[9px]
            `}
          >
            View All News
          </button>
        </div>

      </div>
    </section>
  );
};

export default AsramNewsEvents;
