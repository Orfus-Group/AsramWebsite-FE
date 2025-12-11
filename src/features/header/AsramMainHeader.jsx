// src/components/header/AsramMainHeader.jsx
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/asram/mainasramlogo.svg";

import StudentIcon from "../../assets/asram/studentcentericon.svg";
import LibraryIcon from "../../assets/asram/libraryicon.svg";
import PayIcon from "../../assets/asram/payonlineicon.svg";
import ContactIcon from "../../assets/asram/contacticon.svg";
import { Link } from "react-router-dom";
import { T } from "../../theme";

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
  Academics: academicsContent,
  Admissions: academicsContent,
  Institutes: academicsContent,
  Healthcare: academicsContent,
  "Campus Life": academicsContent,
  About: academicsContent,
};

const AsramMainHeader = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // If mobile menu is active, ignore global clicks intended for desktop dropdown closure
      if (mobileMenuOpen) return;

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    if (openMenu) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu, mobileMenuOpen]);

  // Disable page scroll when mobile menu is open
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
    <div className="asram-font">
      {/* ----------------------- TOP BAR ----------------------- */}
      <div className="w-full" style={{ backgroundColor: T.color.secondary }}>
        <div className="w-full max-w-[1440px] mx-auto h-[40px] flex justify-center px-4 sm:px-6 md:px-10 lg:px-[120px]">
          <div
            className="
              w-full
              max-w-full
              lg:max-w-[1440px]
              h-full
              flex items-center
              justify-center lg:justify-end
              overflow-x-hidden
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
                  <img loading="lazy" decoding="async"
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
      <header className="w-full bg-white relative z-[100] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px] h-[70px] lg:h-[84px] flex items-center justify-between">

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
          <nav className={`${T.font.family} hidden lg:flex items-center gap-[40px]`}>
            <Link
              to="/academics"
              onClick={() => setOpenMenu(null)}
              className={`${T.font.family} ${T.font.weight.medium} text-[18px] leading-[26px]`}
              style={{ color: T.color.dark }}
            >
              Academics
            </Link>

            {["Admissions", "Institutes"].map((label) => (
              <button
                key={label}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu((prev) => (prev === label ? null : label));
                }}
                className={`${T.font.family} ${T.font.weight.medium} text-[18px] leading-[26px]`}
                style={{ color: T.color.dark }}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* LOGO */}
          <img
            loading="eager"
            fetchpriority="high"
            decoding="async"
            src={Logo}
            className="h-[42px] w-[170px] sm:h-[46px] sm:w-[189px] object-contain mx-auto lg:mx-0"
          />

          {/* RIGHT NAV */}
          <nav className={`${T.font.family} hidden lg:flex items-center gap-[40px]`}>
            {["Healthcare", "Campus Life", "About"].map((label) => (
              <button
                key={label}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu((prev) => (prev === label ? null : label));
                }}
                className={`${T.font.family} ${T.font.weight.medium} text-[18px] leading-[26px]`}
                style={{ color: T.color.dark }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {mobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
              onClick={() => {
                setMobileMenuOpen(false);
                setOpenMenu(null);
              }}
            ></div>

            {/* DRAWER */}
            <div
              className={`
        fixed top-0 left-0
        h-full w-[78%] max-w-[320px]
        z-[100]
        bg-[#223F7F]
        text-white
        flex flex-col
        px-5 py-6
        overflow-y-auto
        transform transition-transform duration-300 ease-out
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
            >

              {/* LOGO */}
              <div className="flex items-center justify-start mb-6">
                <img loading="lazy" decoding="async"
                  src={Logo}
                  alt="ASRAM Logo"
                  className="h-[38px] brightness-0 invert"
                />
              </div>

              {/* MAIN MENU */}
              <div className="flex flex-col gap-2">

                {Object.keys(megaMenuContent).map((item) => {

                  // which items have direct navigation?
                  const routeMap = {
                    Academics: "/academics",
                    Admissions: null,
                    Institutes: null,
                    Healthcare: null,
                    "Campus Life": null,
                    About: null,
                  };
                  const hasRoute = routeMap[item] !== null;
                  const isOpen = openMenu === item;

                  return (
                    <div key={item} className="w-full">

                      {/* MAIN MENU BUTTON */}
                      <button
                        className={`
    w-full flex justify-between items-center
    py-3 text-left
    text-[18px] font-semibold
    ${T.font.family}
  `}
                        onClick={() => {
                          if (hasRoute) {
                            // Normal navigation
                            setMobileMenuOpen(false);
                            setOpenMenu(null);
                          } else {
                            // Toggle accordion open/close
                            setOpenMenu(prev => (prev === item ? null : item));
                          }
                        }}
                      >
                        <span>{item}</span>

                        {/* Chevron Icon */}
                        {!hasRoute && (
                          <span
                            className={`
        transition-transform duration-300
        ${openMenu === item ? "rotate-90" : ""}
      `}
                          >
                            ▶
                          </span>
                        )}
                      </button>


                      {/* SUBMENU ACCORDION */}
                      {!hasRoute && isOpen && (
                        <div className="pl-4 py-3 flex flex-col gap-4 bg-[#1C3569] rounded-md animate-slideDown">

                          {/* SECTION TEXT */}
                          <p className="text-white/80 text-[14px] leading-[20px]">
                            {megaMenuContent[item].leftText}
                          </p>

                          {/* CTA BUTTON (mobile drawer) */}
                          <div className="flex justify-center px-2">
                            <button
                              className="
    w-auto
    px-6
    py-2.5
    rounded-md
    bg-white
    text-[#223F7F]
    text-center
    font-semibold
    leading-[20px]
    text-[14px]
    sm:text-[16px]
    whitespace-nowrap
    flex items-center justify-center
    mt-2
  "
                            >
                              {megaMenuContent[item].button}
                            </button>
                          </div>


                          {/* SUBMENU LINKS */}
                          <div className="flex flex-col gap-4">
                            {megaMenuContent[item].columns.map((col) => (
                              <div key={col.heading}>
                                <h3 className="text-[16px] font-bold text-white mb-2">
                                  {col.heading}
                                </h3>

                                <div className="flex flex-col gap-2">
                                  {col.links.map((link) => (
                                    <Link
                                      key={link}
                                      to={link === "College of Nursing" ? "/nursing" : "#"}
                                      className="text-white/90 text-[15px]"
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
              <div className="mt-auto pt-6 border-t border-white/20">
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
          className="absolute left-0 top-[124px] w-full z-[40] border-t border-[#E5E7EB] hidden lg:block"
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
                      className={`${T.font.family} ${T.font.weight.bold} text-[28px] leading-[34px]`}
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
