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

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <>
      {/* ─────────────── TOP UTILITY BAR ─────────────── */}
      <div
        className="w-full"
        style={{ backgroundColor: T.color.text.secondary }}
      >
        <div className="w-full max-w-[1440px] mx-auto h-[40px] flex justify-center px-[120px]">
          <div className="w-[1200px] h-full flex items-center justify-end pr-[1px]">
            <div
              className={`flex items-center gap-[20px] text-white ${T.font.family} ${T.font.weight.medium} text-[14px] leading-[16px]`}
            >
              {utilityLinks.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-[4px] hover:opacity-80 transition"
                >
                  <img
                    src={item.icon}
                    className="w-[16px] h-[16px] object-contain"
                    alt={item.label}
                  />
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────── MAIN HEADER (WITH SHADOW) ─────────────── */}
      <header className="w-full bg-white relative z-[60] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
        <div className="w-full max-w-[1440px] mx-auto px-[120px] h-[84px] flex items-center justify-center">
          <div className="w-[1200px] h-[50px] flex items-center justify-between">
            {/* LEFT NAV */}
           <nav className={`${T.font.family} flex items-center gap-[40px]`}>

  {/* ✅ Academics = Proper Route Navigation */}
  <Link
    to="/academics"
    className={`${T.font.family} text-[#191919] text-[18px] leading-[26px] hover:text-[#223F7F]`}
    onClick={() => setOpenMenu(null)} 
  >
    Academics
  </Link>

  {/* ✅ Admissions = Mega Menu */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      setOpenMenu(openMenu === "Admissions" ? null : "Admissions");
    }}
    className={`${T.font.family} text-[#191919] text-[18px] leading-[26px] hover:text-[#223F7F]`}
  >
    Admissions
  </button>

  {/* ✅ Institutes = Mega Menu */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      setOpenMenu(openMenu === "Institutes" ? null : "Institutes");
    }}
    className={`${T.font.family} text-[#191919] text-[18px] leading-[26px] hover:text-[#223F7F]`}
  >
    Institutes
  </button>

</nav>


            {/* LOGO */}
            <img
              src={Logo}
              alt="Asram Logo"
              className="h-[46px] w-[189px] object-contain"
              draggable="false"
            />

            {/* RIGHT NAV */}
            <nav className={`${T.font.family} flex items-center gap-[40px]`}>
              {["Healthcare", "Campus Life", "About"].map((label) => (
                <button
                  key={label}
                  onClick={() => setOpenMenu(openMenu === label ? null : label)}
                  className="
                    text-[#191919]
                    text-[18px]
                    leading-[26px]
                    hover:text-[#223F7F]
                    transition
                  "
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* ─────────────── MEGA MENU ─────────────── */}
      {/* ─────────────── MEGA MENU (OVERLAY, NO PAGE SHIFT) ─────────────── */}
      {openMenu && megaMenuContent[openMenu] && (
        <div
          ref={menuRef}
          onClick={(e) => e.stopPropagation()}
          className="
      absolute left-0 top-[124px] 
      w-full 
      bg-[#F5F6FA]
      z-[40]
      border-t border-[#E5E7EB]
    "
        >
          {/* WHITE BACKGROUND FOR RIGHT SIDE */}
          <div className="absolute right-0 top-0 h-full w-[70%] bg-white"></div>

          {/* MAIN CONTENT */}
          <div className="w-full max-w-[1440px] mx-auto flex relative">
            {/* LEFT FIXED PANEL */}
            {/* LEFT FIXED PANEL */}
            <div
              className="flex-none bg-[#F4F5F8] flex flex-col"
              style={{
                width: "579px",
                paddingTop: "24px", // reduced from 48px
                paddingBottom: "28px", // reduced from 49px
                paddingLeft: "120px",
                paddingRight: "78px",
              }}
            >
              <p
                className="
    font-montserrat 
    text-[18px]
    leading-[29px]
    text-justify
  "
                style={{
                  width: "381px",
                  color: "rgba(25,25,25,0.75)",
                  marginBottom: "20px",
                }}
              >
                {megaMenuContent[openMenu].leftText}
              </p>

              <button
                className="
    font-montserrat
    text-[18px]
    font-semibold
    text-white
    flex items-center justify-center
    rounded-[8px]
  "
                style={{
                  width: "301px",
                  height: "46px",
                  padding: "12px 24px",
                  gap: "10px",
                  marginTop: "20px",
                  marginRight: "80px",
                  backgroundColor: "#223F7F",
                }}
              >
                {megaMenuContent[openMenu].button}
              </button>
            </div>

            {/* RIGHT CONTENT PANEL */}
            {/* RIGHT CONTENT PANEL */}
            <div
              className="flex-1 relative"
              style={{
                paddingTop: "24px", // reduced from 48px
                paddingBottom: "28px", // reduced from 48px
                paddingLeft: "78px",
                paddingRight: "120px",
              }}
            >
              <div className="grid grid-cols-2 gap-[120px] relative">
                {megaMenuContent[openMenu].columns.map((col) => (
                  <div
                    key={col.heading}
                    className="flex flex-col"
                    style={{
                      width: "125px",
                      marginRight: "161px",
                      marginBottom: "32.4px",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontStretch: "normal",
                      letterSpacing: "normal",
                      textAlign: "justify",
                      color: "rgba(25, 25, 25, 0.75)",
                    }}
                  >
                    {/* Heading */}
                    <h3
                      style={{
                        width: "172px",
                        height: "34px",
                        fontFamily: "Montserrat",
                        fontSize: "28px",
                        fontWeight: 700,
                        lineHeight: "34px",
                        letterSpacing: "0px",
                        textAlign: "justify",
                        color: "rgba(25, 25, 25, 0.75)",
                        marginBottom: "32px", // spacing below heading (matches figma vertical spacing)
                      }}
                    >
                      {col.heading}
                    </h3>

                    {/* Links */}
                    <ul className="mt-[1px] space-y-[20px]">
                      {col.links.map((link) => (
                        <Link
                          key={link}
                          to={link === "College of Nursing" ? "/nursing" : "#"} // <-- route mapping
                          style={{
                            width: "286px",
                            height: "27px",
                            fontFamily: "Inter",
                            fontSize: "22px",
                            fontWeight: 600,
                            lineHeight: "27px",
                            letterSpacing: "0px",
                            textAlign: "justify",
                            color: "#223F7F",
                            marginBottom: "27px",
                            cursor: "pointer",
                            textDecoration: "none",
                            display: "block", // so spacing remains identical
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
