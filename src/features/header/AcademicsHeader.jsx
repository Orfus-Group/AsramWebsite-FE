// src/components/header/AcademicsHeader.jsx
import React, { useState } from "react";
import { T } from "../../theme";

import LogoFull from "../../assets/nursing/asramlogo.svg";
import SearchIcon from "../../assets/nursing/Search.svg";
import ShortcutLinks from "./ShortcutLinks";
import { Link } from "react-router-dom";

const AcademicsHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Academics", path: "/academics" },
    { label: "Research", path: "/research" },
    { label: "Global & Community", path: "/community" },
    { label: "News", path: "/news" },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* TOP SHORTCUT BAR — PERFECT BASELINE ALIGNMENT            */}
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
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-end">
            <ShortcutLinks />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN NAVBAR — RESPONSIVE FOR ALL DEVICES                */}
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
          {/* INNER 1200px ALIGNMENT */}
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">

            {/* LEFT — LOGO */}
            <div className="flex items-center gap-[10px]">
              <img
                src={LogoFull}
                alt="Asram Logo"
                className="h-[46px] w-[191px] object-contain"
              />
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-[40px]">
              {navItems.map((nav) => (
                <Link
                  key={nav.label}
                  to={nav.path}
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
                  {nav.label}
                </Link>
              ))}

              {/* SEARCH ICON */}
              <button>
                <img src={SearchIcon} alt="Search" className="h-[20px] w-[20px]" />
              </button>
            </div>

            {/* MOBILE: SEARCH + HAMBURGER */}
            <div className="lg:hidden flex items-center gap-[20px]">

              {/* SEARCH */}
              <button>
                <img src={SearchIcon} alt="Search" className="h-[20px] w-[20px]" />
              </button>

              {/* HAMBURGER BUTTON */}
              <button
                className="flex flex-col gap-[4px]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="block w-[22px] h-[2px] bg-[#4A5565]" />
                <span className="block w-[22px] h-[2px] bg-[#4A5565]" />
                <span className="block w-[22px] h-[2px] bg-[#4A5565]" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE DROPDOWN                                           */}
        {/* ========================================================= */}
      {/* ========================================================= */}
{/* MOBILE DROPDOWN (Overlay — does NOT push content)         */}
{/* ========================================================= */}
{menuOpen && (
  <div
    className="
      lg:hidden 
      absolute 
      top-[112px]   /* 46px top bar + 66px navbar */
      left-0 
      w-full 
      bg-white 
      shadow-md 
      px-4 sm:px-6 
      py-[20px]
      flex flex-col 
      gap-[16px]
      z-[999]
    "
  >
    {navItems.map((nav, index) => (
      <Link
        key={index}
        to={nav.path}
        className={`
          ${T.font.family}
          ${T.font.weight.semibold}
          text-[16px]
          leading-[20px]
          text-[#4A5565]
          hover:text-[${T.color.text.secondary}]
          transition
        `}
        onClick={() => setMenuOpen(false)}
      >
        {nav.label}
      </Link>
    ))}
  </div>
)}

      </nav>
    </>
  );
};

export default AcademicsHeader;
