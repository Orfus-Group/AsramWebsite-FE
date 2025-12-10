import React, { useState } from "react";
import { T } from "../../theme";
import LogoFull from "../../assets/nursing/asramlogo.svg";
import SearchIcon from "../../assets/nursing/Search.svg";
import ShortcutLinks from "./ShortcutLinks";
import { Link } from "react-router-dom";

const NursingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <nav className="w-full bg-white border-b border-gray-100">
        <div
          className="
            w-full 
            max-w-[1440px]
            mx-auto 
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            h-[66px]
            flex items-center justify-between
          "
        >
          {/* LEFT — LOGO */}
          <div className="flex items-center gap-[10px]">
            <img
              src={LogoFull}
              alt="Asram Logo"
              className="h-[46px] w-[191px]"
            />
          </div>

          {/* RIGHT — NAV + SEARCH + MOBILE MENU */}
          <div className="flex items-center gap-[20px]">

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-[32px]">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`
                    ${T.font.family}
                    ${T.font.weight.semibold}
                    text-[15px]
                    leading-[20px]
                    text-[#4A5565]
                    hover:text-[${T.color.text.secondary}]
                    transition
                    whitespace-nowrap
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* SEARCH ICON */}
            <button className="flex items-center justify-center">
              <img
                src={SearchIcon}
                alt="Search"
                className="h-[18px] w-[18px]"
              />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden flex flex-col gap-[4px] ml-[10px]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className="block w-[22px] h-[2px] bg-[#4A5565]"
              ></span>
              <span
                className="block w-[22px] h-[2px] bg-[#4A5565]"
              ></span>
              <span
                className="block w-[22px] h-[2px] bg-[#4A5565]"
              ></span>
            </button>
          </div>
        </div>

        {/* ================= MOBILE DROPDOWN ================= */}
       {/* ================= MOBILE DROPDOWN (Overlay — does NOT push content) ================= */}
{menuOpen && (
  <div
    className="
      md:hidden
      absolute
      top-[112px]    /* 46px top bar + 66px navbar = 112px */
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
    {navItems.map((item, index) => (
      <Link
        key={index}
        to={item.path}
        className={`
          ${T.font.family}
          ${T.font.weight.semibold}
          text-[15px]
          leading-[20px]
          text-[#4A5565]
          hover:text-[${T.color.text.secondary}]
          transition
        `}
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </Link>
    ))}
  </div>
)}

      </nav>
    </>
  );
};

export default NursingHeader;
