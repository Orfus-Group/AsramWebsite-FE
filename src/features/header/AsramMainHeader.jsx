// src/components/header/AsramMainHeader.jsx
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/asram/mainasramlogo.svg";
import AsramLogo from "@/assets/asram/asramcolredlogo.png";

import StudentIcon from "@/assets/asram/studentcentericon.svg";
import LibraryIcon from "@/assets/asram/libraryicon.svg";
import PayIcon from "@/assets/asram/payonlineicon.svg";
import ContactIcon from "@/assets/asram/contacticon.svg";
import { Link, useLocation } from "react-router-dom";
import { T } from "@/theme";

const utilityLinks = [
  { label: "Student Center", icon: StudentIcon },
  { label: "Library", icon: LibraryIcon },
  { label: "Pay Online", icon: PayIcon },
  { label: "Contact", icon: ContactIcon },
];

const academicsContent = {
  leftText: `ASRAM School of Nursing is widely respected for its high-quality teaching,
strong clinical training, and excellent student outcomes. Our programs continue
to earn strong learning.`,

  button: "Explore Our Achievements",
  columns: [
    {
      heading: "Colleges",
      links: [
        "College of Health Sciences",
        "College of Nursing",
        "College of Medical College",
      ],
    },
    {
      heading: "Quick Links",
      links: [
        "Education at Asram",
        "Graduate Medical Education",
        "Academic Affairs",
      ],
    },
  ],
};

const megaMenuContent = {
  About: academicsContent,
  Academics: academicsContent,
  Research: academicsContent,
  Healthcare: academicsContent,
  "Campus Life": academicsContent,
  News: academicsContent,
};

const NavItem = ({ label, to, isActive, hasMegaMenu, onClick, onHover }) => {
  const baseClasses = `${T.font.family} text-[18px] leading-[26px] transition-all duration-300 relative group cursor-pointer h-full flex items-center select-none`;
  const activeClasses = `text-[#223F7F] ${T.font.weight.medium}`;
  const inactiveClasses = `${T.font.weight.regular} text-[#191919] hover:text-[#223F7F]`;

  return (
    <>
      {to ? (
        <Link
          to={to}
          onClick={onClick}
          onMouseEnter={onHover}
          className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          style={{ color: isActive ? T.color.secondary : undefined }}
        >
          <span className="relative py-1">
            {label}
            <span
              className={`
                absolute bottom-0 left-0 h-[2px] bg-[#223F7F] transition-all duration-300 ease-out
                w-0 group-hover:w-full
              `}
            />
          </span>
        </Link>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick && onClick(e);
          }}
          onMouseEnter={onHover}
          className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          style={{ color: isActive ? T.color.secondary : undefined }}
        >
          <span className="relative py-1">
            {label}
            <span
              className={`
                absolute bottom-0 left-0 h-[2px] bg-[#223F7F] transition-all duration-300 ease-out
                w-0 group-hover:w-full
              `}
            />
          </span>
        </button>
      )}
    </>
  );
};

const AsramMainHeader = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuOpen) return;
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    if (openMenu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu, mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="sticky -top-[40px] z-[100] asram-font w-full">
      {/* ----------------------- TOP BAR ----------------------- */}
      <div className="w-full" style={{ backgroundColor: T.color.secondary }}>
        <div className="w-full max-w-[1440px] mx-auto h-[40px] flex justify-center px-5 sm:px-6 md:px-10 lg:px-[120px]">
          <div
            className="
              w-full
              max-w-full
              lg:max-w-full
              h-full
              flex items-center
              justify-center lg:justify-end
              gap-[20px]
              scrollbar-none
            "
          >
            <div
              className={`
                flex items-center
                gap-[12px] sm:gap-[20px]
                text-white
                ${T.font.family}
                ${T.font.weight.medium}
                text-[10px] sm:text-[14px]
              `}
            >
              {utilityLinks.map((item) => (
                <button
                  key={item.label}
                  className={`
                    flex items-center gap-[4px] 
                    hover:opacity-80 transition whitespace-nowrap
                    ${T.font.family}
                  `}
                >
                  <img loading="eager" decoding="async"
                    src={item.icon}
                    className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]"
                  />
                  <span className={T.font.family}>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- MAIN HEADER ----------------------- */}
      <header className="w-full bg-white relative z-[100] shadow-[0_4px_20px_rgba(0,0,0,0.1)] sticky top-0">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px] h-[66px] py-[10px] flex items-center justify-between relative">

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-7 h-[3px] bg-black rounded transition-all ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`w-7 h-[3px] bg-black rounded transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-7 h-[3px] bg-black rounded transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>

          {/* LEFT NAV */}
          <nav className={`${T.font.family} hidden lg:flex flex-1 items-center justify-between gap-[40px] mr-[84px] h-full`}>
            <NavItem
              label="About"
              to="/about-asram"
              isActive={location.pathname.startsWith("/about-asram")}
              onClick={() => setOpenMenu(null)}
            />
            <NavItem
              label="Academics"
              isActive={location.pathname.startsWith("/academics")}
              onClick={() => setOpenMenu((prev) => (prev === "Academics" ? null : "Academics"))}
              hasMegaMenu
            />
            <NavItem
              label="Research"
              isActive={location.pathname.startsWith("/research")}
              onClick={() => setOpenMenu((prev) => (prev === "Research" ? null : "Research"))}
              hasMegaMenu
            />
          </nav>

          {/* LOGO */}
          <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:mx-0 z-[101]">
            <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
              src={Logo}
              className="h-[42px] w-[170px] sm:h-[46px] sm:w-[189px] object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </Link>

          {/* RIGHT NAV */}
          <nav className={`${T.font.family} hidden lg:flex flex-1 items-center justify-between gap-[40px] ml-[84px] h-full`}>
            <NavItem
              label="Healthcare"
              to="/healthcare"
              isActive={location.pathname.startsWith("/healthcare")}
              onClick={() => setOpenMenu(null)}
            />
            <NavItem
              label="Campus Life"
              to="/campus-life"
              isActive={location.pathname.startsWith("/campus-life")}
              onClick={() => setOpenMenu(null)}
            />
            <NavItem
              label="News"
              to="/news"
              isActive={location.pathname.startsWith("/news")}
              onClick={() => setOpenMenu(null)}
            />
          </nav>
        </div>

        {mobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
              onClick={() => {
                setMobileMenuOpen(false);
                setOpenMenu(null);
              }}
            ></div>

            {/* DRAWER */}
            <div
              className={`
        fixed top-0 left-0
        h-full w-[85%] max-w-[320px]
        z-[120]
        flex flex-col
        px-6 py-8
        overflow-y-auto
        transform transition-transform duration-300 ease-out
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
              style={{
                backgroundColor: T.color.surface.drawer,
                color: T.color.text.light,
              }}
            >


              <Link
                to="/"
                className="flex items-center mb-6 w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenMenu(null);
                }}
              >
                <img loading="lazy" decoding="async"
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
              </Link>
              {/* MAIN MENU */}
              <div className="flex flex-col gap-4">

                {Object.keys(megaMenuContent).map((item) => {
                  // Configuration based on screenshot observation
                  // About: Link, No Arrow
                  // Academics: Accordion, Arrow
                  // Research: Accordion, Arrow
                  // Healthcare: Accordion, Arrow
                  // Campus Life: Accordion, Arrow
                  // News: Link, No Arrow

                  const routeMap = {
                    About: "/about-asram",
                    Academics: null,
                    Research: null,
                    Healthcare: null,
                    "Campus Life": "/campus-life",
                    News: "/news",
                  };
                  const hasRoute = routeMap[item] !== null;
                  const isOpen = openMenu === item;

                  return (
                    <div key={item} className="w-full border-b border-white/10 pb-2 last:border-0">

                      {/* MAIN MENU BUTTON / LINK */}
                      {hasRoute ? (
                        <Link
                          to={routeMap[item]}
                          className={`
                            w-full flex justify-between items-center
                            py-2 text-left
                            text-[18px] font-bold text-white
                            ${T.font.family}
                          `}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenMenu(null);
                          }}
                        >
                          <span>{item}</span>
                        </Link>
                      ) : (
                        <button
                          className={`
                            w-full flex justify-between items-center
                            py-2 text-left
                            text-[18px] font-bold text-white
                            ${T.font.family}
                          `}
                          onClick={() => {
                            setOpenMenu(prev => (prev === item ? null : item));
                          }}
                        >
                          <span>{item}</span>
                          {/* Triangle Arrow */}
                          <svg
                            width="10" height="10"
                            viewBox="0 0 10 10"
                            fill="currentColor"
                            className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                          >
                            <path d="M0 0L10 5L0 10V0Z" />
                          </svg>
                        </button>
                      )}


                      {/* SUBMENU ACCORDION */}
                      {!hasRoute && isOpen && (
                        <div
                          className="pl-4 py-3 flex flex-col gap-4 animate-slideDown border-l border-white/20 ml-2 mt-2"
                        >
                          {/* SECTION TEXT */}
                          <p className="text-white/80 text-[14px] leading-[20px]">
                            {megaMenuContent[item].leftText}
                          </p>

                          {/* SUBMENU LINKS */}
                          <div className="flex flex-col gap-4">
                            {megaMenuContent[item].columns.map((col) => (
                              <div key={col.heading}>
                                <h3 className="text-[15px] font-bold text-white/90 mb-2 uppercase tracking-wide opacity-80">
                                  {col.heading}
                                </h3>
                                <div className="flex flex-col gap-2">
                                  {col.links.map((link) => (
                                    <Link
                                      key={link}
                                      to={link === "College of Nursing" ? "/nursing" : "#"}
                                      className="text-white text-[15px] font-medium hover:underline"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu(null);
                                      }}
                                    >
                                      {link}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* FOOTER INSIDE DRAWER */}
              <div className="mt-auto pt-8 border-t border-white/20">
                <p className="text-white/70 text-[14px]">
                  © ASRAM School of Nursing
                </p>
              </div>
            </div>
          </>
        )}



      </header>

      {/* ----------------------- DESKTOP MEGA MENU ----------------------- */}
      {openMenu && megaMenuContent[openMenu] && (
        <div
          ref={menuRef}
          className="absolute left-0 top-[106px] w-full z-[40] border-t border-[#E5E7EB] hidden lg:block"
          style={{ backgroundColor: T.color.background.section }}
        >
          <div
            className="absolute right-0 top-0 h-full w-[70%]"
            style={{ backgroundColor: T.color.background.white }}
          />

          <div className="w-full max-w-[1440px] mx-auto flex relative">

            {/* LEFT PANEL */}
            <div
              className="flex-none flex flex-col"
              style={{
                width: "579px",
                paddingTop: "24px",
                paddingBottom: "28px",
                paddingLeft: "120px",
                paddingRight: "78px",
                backgroundColor: T.color.background.programCard,
              }}
            >
              <p
                className={`${T.font.family} text-[16px] leading-[29px]`}
                style={{
                  color: T.color.extra.dark80,
                  width: "381px",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {megaMenuContent[openMenu].leftText}
              </p>

              <button
                className={`${T.font.family} ${T.font.weight.semibold} text-[18px] text-white flex items-center justify-center rounded-[8px]`}
                style={{
                  width: "301px",
                  height: "46px",
                  backgroundColor: T.color.secondary,
                }}
              >
                {megaMenuContent[openMenu].button}
              </button>
            </div>

            {/* RIGHT PANEL */}
            <div
              className="flex-1 relative"
              style={{
                paddingTop: "24px",
                paddingBottom: "28px",
                paddingLeft: "78px",
                paddingRight: "120px",
              }}
            >
              <div className="grid grid-cols-2 gap-[120px] relative">
                {megaMenuContent[openMenu].columns.map((col) => (
                  <div
                    key={col.heading}
                    className="flex flex-col"
                    style={{ width: col.heading === "Colleges" ? "286px" : "301px" }}
                  >
                    <h3
                      className={`${T.font.family} ${T.font.weight.bold} text-[22px] leading-[34px]`}
                      style={{
                        color: T.color.extra.dark75,
                        marginBottom: "20px",
                        marginTop: "-4px",
                      }}
                    >
                      {col.heading}
                    </h3>

                    <ul className="space-y-[16px]">
                      {col.links.map((link) => (
                        <Link
                          key={link}
                          to={link === "College of Nursing" ? "/nursing" : "#"}
                          className={`${T.font.family} ${T.font.weight.semibold} text-[18px] leading-[22px] block`}
                          style={{
                            color: T.color.secondary,
                            letterSpacing: "-0.2px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {link}
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default AsramMainHeader;
