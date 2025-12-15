import React, { useState } from "react";
import { T } from "@/theme";
import LogoFull from "@/assets/nursing/asramlogo.svg";
import SearchIcon from "@/assets/nursing/Search.svg";
import ShortcutLinks from "./ShortcutLinks";
import AsramLogo from "@/assets/asram/asramcolredlogo.png";

import { Link, useLocation } from "react-router-dom";


/* =======================
   SEARCH ICON (SVG)
======================= */
const SearchSvgIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.4997 17.5034L13.8831 13.8867"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16728 15.8333C12.8492 15.8333 15.8339 12.8486 15.8339 9.16667C15.8339 5.48477 12.8492 2.5 9.16728 2.5C5.48538 2.5 2.50061 5.48477 2.50061 9.16667C2.50061 12.8486 5.48538 15.8333 9.16728 15.8333Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const AcademicsHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Academics", path: "/academics" },
    { label: "Research", path: "/research" },
    { label: "Global & Community", path: "/community" },
    { label: "News", path: "/news" },
  ];

  return (
    <>
      {/* ================= TOP BLUE BAR ================= */}
      <div style={{ backgroundColor: T.color.text.secondary }}>
        <div
          className="
            w-full 
            max-w-[1440px] 
            mx-auto 
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            flex justify-end items-center
            h-[46px]
          "
        >
          <ShortcutLinks />
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav className="w-full bg-white border-b border-gray-100 relative z-[100]">
        <div
          className="
            w-full max-w-[1440px] mx-auto 
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            h-[66px]
            flex items-center justify-between
          "
        >
          {/* ================= MOBILE LEFT: HAMBURGER ================= */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[4px] mr-[10px] transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`
                block w-[24px] h-[2.5px] bg-[#4A5565] rounded transition-all duration-300
                ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}
              `}
            ></span>
            <span
              className={`
                block w-[24px] h-[2.5px] bg-[#4A5565] rounded transition-all duration-300
                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
            ></span>
            <span
              className={`
                block w-[24px] h-[2.5px] bg-[#4A5565] rounded transition-all duration-300
                ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}
              `}
            ></span>
          </button>

          {/* ================= CENTER LOGO (Mobile) ================= */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              loading="eager"
              decoding="async"
              src={LogoFull}
              alt="Asram Logo"
              className="
                h-[40px] 
                w-auto 
                md:h-[46px] 
                md:w-[191px]
              "
            />
          </div>

          {/* ================= RIGHT SIDE — SEARCH + DESKTOP NAV ================= */}
          <div className="flex items-center gap-[20px]">

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-[32px]">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`
                      ${T.font.family}
                      ${T.font.weight.semibold}
                      text-[15px]
                      leading-[20px]
                      transition whitespace-nowrap
                      ${isActive ? `text-[${T.color.text.secondary}] font-bold` : "text-[#4A5565] hover:text-[#223F7F]"}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* SEARCH ICON */}
            <button className="flex items-center justify-center md:ml-[10px] text-[#4A5565] hover:text-[${T.color.text.secondary}] transition">
              <SearchSvgIcon className="w-[20px] h-[20px]" />
            </button>

          </div>
        </div>

        {/* ================= MOBILE MENU OVERLAY ================= */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* ================= MOBILE SLIDE-IN MENU (LEFT DRAWER) ================= */}
        <div
          className={`
    fixed top-0 left-0 
    h-full w-[78%] max-w-[320px]
    bg-[#223F7F]             /* NEW drawer background */
    shadow-lg 
    z-[90]
    p-[24px]
    flex flex-col gap-[20px]
    transform transition-transform duration-300 ease-out
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
        >

          {/* LOGO SMALL */}
          <div className="flex items-center mb-6 w-full justify-center">
            <img
              src={AsramLogo}
              alt="ASRAM Logo"
              className="
      h-[54px] w-[54px]
      sm:h-[60px] sm:w-[60px]
      object-contain
    "
            />

            <span
              className={`text-white
      text-[36px]
      sm:text-[34px]
      font-semibold
      tracking-wide
      leading-none
      ml-[-2px] ${T.font.family}`}
            >
              Asram
            </span>
          </div>


          {/* NAV LINKS */}
          <div className="flex flex-col gap-[20px] mt-[10px]">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    ${T.font.family}
                    ${T.font.weight.semibold}
                    text-[18px]
                    leading-[24px]
                    ${isActive ? "text-yellow-400 font-bold" : "text-white hover:text-gray-200"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* FOOTER INSIDE DRAWER */}
          <div className="mt-auto pt-[20px] border-t border-white/20">
            <p
              className={`
        ${T.font.family}
        text-[14px]
        leading-[20px]
        text-white/70            /* NEW footer text color */
      `}
            >
              © ASRAM School of Nursing
            </p>
          </div>
        </div>

      </nav>
    </>
  );
};

export default AcademicsHeader;
