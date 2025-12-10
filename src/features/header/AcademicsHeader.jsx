// src/components/header/AcademicsHeader.jsx
import React from "react";
import { T } from "../../theme";

import LogoFull from "../../assets/nursing/asramlogo.svg";
import SearchIcon from "../../assets/nursing/Search.svg";
import ShortcutLinks from "./ShortcutLinks";

const AcademicsHeader = () => {
  return (
    <>
      {/* ========================================================= */}
      {/* TOP SHORTCUT BAR — PERFECT 1440px / 1200px ALIGNMENT      */}
      {/* ========================================================= */}
      <div className="w-full" style={{ backgroundColor: T.color.secondary }}>
        <div
          className="
            w-full max-w-[1440px] mx-auto
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            h-[46px]
            flex items-center
          "
        >
          {/* CONTENT WIDTH = 1200px */}
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-end">
            <ShortcutLinks />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN NAVBAR — FOLLOWING EXACT SAME ALIGNMENT STRUCTURE   */}
      {/* ========================================================= */}
      <nav className="w-full bg-white shadow-md">
        <div
          className="
            w-full max-w-[1440px] mx-auto
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            h-[66px]
            flex items-center
          "
        >
          {/* CONTENT WIDTH = 1200px */}
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">

            {/* ------------------------------------------------------ */}
            {/* LEFT LOGO                                              */}
            {/* ------------------------------------------------------ */}
            <div className="flex items-center gap-[10px]">
              <img
                src={LogoFull}
                alt="Asram Logo"
                className="h-[46px] w-[191px] object-contain"
              />
            </div>

            {/* ------------------------------------------------------ */}
            {/* DESKTOP NAVIGATION MENU                                */}
            {/* ------------------------------------------------------ */}
            <div className="hidden lg:flex items-center gap-[40px]">
              {["Academics", "Research", "Global & Community", "News"].map(
                (item) => (
                  <button
                    key={item}
                    className={`
                      ${T.font.family}
                      ${T.font.weight.semibold}
                      text-[16px]
                      leading-[20px]
                      text-[#4A5565]
                      whitespace-nowrap
                      hover:text-[${T.color.text.secondary}]
                      transition
                    `}
                  >
                    {item}
                  </button>
                )
              )}

              {/* SEARCH ICON */}
              <button>
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="h-[20px] w-[20px]"
                />
              </button>
            </div>

            {/* ------------------------------------------------------ */}
            {/* MOBILE ONLY SEARCH ICON                                */}
            {/* ------------------------------------------------------ */}
            <button className="lg:hidden flex items-center justify-center">
              <img
                src={SearchIcon}
                alt="Search"
                className="h-[20px] w-[20px]"
              />
            </button>

          </div>
        </div>
      </nav>
    </>
  );
};

export default AcademicsHeader;
