import React, { useState } from "react";
import { T } from "@/theme";
const AsramLogoFull = "/AsramWebsite-FE/assets/asram/ASymbol.png";
const AsramBlueLogo = "/AsramWebsite-FE/assets/asram/asrambluelogo.png";

const AsramLogo = "/AsramWebsite-FE/assets/asram/asramcolredlogo.png";
import ShortcutLinks from "./ShortcutLinks";
import ModernHamburger from "@/features/common/ui/ModernHamburger";

import { Link, useLocation } from "react-router-dom";

import { useCollegeContext } from "@/context/CollegeContext";

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


/* =======================
   NAV ITEM COMPONENT
======================= */
const NavItem = ({ label, to, isActive, onClick }) => {
  const baseClasses = `${T.font.family} text-[16px] leading-[20px] transition-all duration-300 relative group cursor-pointer h-full flex items-center select-none`;
  const activeClasses = `text-[#223F7F] ${T.font.weight.semibold}`;
  const inactiveClasses = `${T.font.weight.semibold} text-[#4A5565] hover:text-[#223F7F]`;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <span className="relative py-1">
        {label}
        <span
          className={`
            absolute bottom-0 left-0 h-[2px] bg-[#223F7F] transition-all duration-300 ease-out
            w-0 group-hover:w-3/4
          `}
        />
      </span>
    </Link>
  );
};


const AcademicsHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { activeCollege, setActiveCollege } = useCollegeContext();

  // Sync context if current path is explicit
  React.useEffect(() => {
    if (location.pathname.startsWith("/medical")) setActiveCollege("medical");
    else if (location.pathname.startsWith("/paramedical")) setActiveCollege("paramedical");
    else if (location.pathname.startsWith("/nursing")) setActiveCollege("nursing");
  }, [location.pathname, setActiveCollege]);

  const isMedical = activeCollege === "medical";
  const isParamedical = activeCollege === "paramedical";

  const navItems = isMedical ? [
    { label: "Academics", path: "/medical-academics" },
    { label: "Research", path: "/medical-research" },
    { label: "Global & Community", path: "/community-health" },
    { label: "News", path: "/news" },
  ] : isParamedical ? [
    { label: "Academics", path: "/paramedical-academics" },
    { label: "Research", path: "/paramedical-research" },
    { label: "Global & Community", path: "/community-health" },
    { label: "News", path: "/news" },
  ] : [
    { label: "Academics", path: "/nursing-academics" },
    { label: "Research", path: "/nursing-research" },
    { label: "Global & Community", path: "/community-health" },
    { label: "News", path: "/news" },
  ];

  return (
    <div className="sticky top-0 z-[100] w-full">
      {/* ================= TOP BLUE BAR ================= */}
      <div className="w-full" style={{ backgroundColor: T.color.text.secondary }}>
        <div
          className="
            w-full
            max-w-[1440px]
            mx-auto
            px-5 sm:px-6 md:px-10 lg:px-[120px]
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
            w-full
            max-w-[1440px]
            mx-auto
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            h-[70px] md:h-[84px]
            flex items-center justify-between
          "
        >
          {/* ================= MOBILE LEFT: HAMBURGER ================= */}
          <div className="md:hidden flex items-center mr-[10px]">
            <ModernHamburger
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* ================= CENTER LOGO (Mobile) ================= */}
          <div className="flex-1 flex justify-center md:justify-start overflow-hidden">
            <Link to={isMedical ? "/medical" : isParamedical ? "/paramedical" : "/nursing"}>
              <div className="flex items-center gap-[4px] md:gap-[5.6px]">
                <img
                  loading="eager"
                  decoding="async"
                  src={AsramLogoFull}
                  alt="Asram Icon"
                  className="w-[38px] h-[38px] md:w-[46.43px] md:h-[46px] object-contain flex-shrink-0 transition-all duration-300"
                />
                <div className="flex flex-col items-start justify-center">
                  <span className={`${T.font.family} ${T.font.weight.medium} text-[12px] md:text-[14px] text-[#223F7F] leading-normal mb-[1px] md:mb-[1.2px] transition-all duration-300`}>
                    Asram
                  </span>
                  <span className={`${T.font.family} ${T.font.weight.bold} text-[12.5px] md:text-[14.9px] text-[#223F7F] leading-[1.2] md:leading-[1.25] mt-[1px] md:mt-[1.2px] whitespace-nowrap transition-all duration-300`}>
                    {isMedical ? "College of Medicine" : isParamedical ? "College of Paramedical" : "School of Nursing"}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* ================= RIGHT SIDE — SEARCH + DESKTOP NAV ================= */}
          <div className="flex items-center gap-[20px]">

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-[40px] h-full">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  label={item.label}
                  to={item.path}
                  isActive={location.pathname === item.path}
                />
              ))}
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
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
    z-[120]
    p-[24px]
    flex flex-col gap-[20px]
    transform transition-transform duration-300 ease-out
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
        >

          {/* LOGO SMALL */}
          <Link
            to="/"
            className="flex items-center mb-6 w-full justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-[4px] justify-center md:w-[189.4px]">
              <img
                loading="eager"
                fetchPriority="high"
                decoding="async"
                src={AsramBlueLogo}
                alt="Asram Latest Logo"
                className="h-[46px] object-contain flex-shrink-0 transition-all duration-300 rounded-[8px]"
              />
            </div>
          </Link>


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
              © ASRAM {isMedical ? "College of Medicine" : isParamedical ? "College of Paramedical" : "School of Nursing"}
            </p>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default AcademicsHeader;
