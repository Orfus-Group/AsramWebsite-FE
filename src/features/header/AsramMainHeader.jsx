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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    if (openMenu) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

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
    <>
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
                  <img
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

        {/* ----------------------- MOBILE NAV ----------------------- */}
        {mobileMenuOpen && (
          <div
            className="
              lg:hidden fixed
              top-[110px] left-0
              w-full
              bg-white
              shadow-lg
              z-[100]
              max-h-[80vh]
              overflow-y-auto
              border-t
            "
          >
            <div className={`flex flex-col px-4 py-4 gap-4 text-[16px] font-medium ${T.font.family}`}>
              {Object.keys(megaMenuContent).map((item) => (
                <button
                  key={item}
                  className={`${T.font.family} text-left py-3 border-b`}
                  onClick={() => setOpenMenu(openMenu === item ? null : item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {openMenu && (
              <div className="bg-gray-50 px-4 py-4 border-t animate-slideDown">
                <p className={`${T.font.family} text-[14px] leading-[20px] text-gray-700 mb-4`}>
                  {megaMenuContent[openMenu].leftText}
                </p>

                <button
                  className={`
                    ${T.font.family} 
                    ${T.font.weight.semibold} 
                    w-full text-[16px] text-white py-3 rounded-[8px] mb-6
                  `}
                  style={{ backgroundColor: T.color.secondary }}
                >
                  {megaMenuContent[openMenu].button}
                </button>

                <div className="flex flex-col gap-6">
                  {megaMenuContent[openMenu].columns.map((col) => (
                    <div key={col.heading}>
                      <h3
                        className={`${T.font.family} ${T.font.weight.bold} text-[18px] leading-[24px] mb-2`}
                        style={{ color: T.color.extra.dark75 }}
                      >
                        {col.heading}
                      </h3>

                      <div className="flex flex-col gap-2">
                        {col.links.map((link) => (
                          <Link
                            key={link}
                            to={link === "College of Nursing" ? "/nursing" : "#"}
                            className={`${T.font.family} ${T.font.weight.medium} text-[15px] leading-[20px]`}
                            style={{ color: T.color.secondary }}
                            onClick={() => setMobileMenuOpen(false)}
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
                className={`${T.font.family} text-[18px] leading-[29px]`}
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
                          className={`${T.font.family} ${T.font.weight.semibold} text-[22px] leading-[27px] block`}
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
    </>
  );
};

export default AsramMainHeader;
