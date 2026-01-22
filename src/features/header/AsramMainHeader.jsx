// src/components/header/AsramMainHeader.jsx
import React, { useEffect, useRef, useState } from "react";
const Logo = "/AsramWebsite-FE/assets/asram/mainasramlogo.svg";
const AsramLogo = "/AsramWebsite-FE/assets/asram/asramcolredlogo.png";
const AsramLogoFull = "/AsramWebsite-FE/assets/asram/ASymbol.png";
const AsramBlueLogo = "/AsramWebsite-FE/assets/asram/asrambluelogo.png";
const AsramLatestLogo = "/AsramWebsite-FE/assets/asram/latestlogo.png";
const StudentIcon = "/AsramWebsite-FE/assets/asram/studentcentericon.svg";
const LibraryIcon = "/AsramWebsite-FE/assets/asram/libraryicon.svg";
const PayIcon = "/AsramWebsite-FE/assets/asram/payonlineicon.svg";
const ContactIcon = "/AsramWebsite-FE/assets/asram/contacticon.svg";
import { Link, useLocation } from "react-router-dom";
import { T } from "@/theme";
import ModernHamburger from "@/features/common/ui/ModernHamburger";
import { useCollegeContext } from "@/context/CollegeContext";

const utilityLinks = [
  { label: "Library", to: "https://asramopac.2cqrkoha.com/" },
  { label: "Pay", to: import.meta.env.VITE_PAY_URL || "http://pay.asram.in/" },
  { label: "Alumni", to: "/asram-alumni" },
  { label: "Careers", to: "/careers" },
  { label: "Login", to: "/login" },
];


const academicsContent = {
  leftText: `Outcome-driven programs built to create thinkers, not note-takers. Learn from structured curricula designed for real-world impact.`,

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
        "Departments",
        "Skill Lab",
        "Faculty",
      ],
    },
  ],
};

const newsContent = {
  leftText: `Updates and announcements from across academics, healthcare, and campus life.`,

  button: "Explore News & Events",
  columns: [
    {
      heading: "Quick Links",
      links: [
        "Campus Events",
        "Featured Story",
        "Latest News",
      ],
    },

  ],
};

const researchContent = {
  leftText: `Focused research initiatives driven by innovation, problem-solving, and real-world relevance. Faculty and students collaborate to turn ideas into impactful outcomes for industry and society.`,

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
        "Departments",
        "Skill Lab",
        "Faculty",
      ],
    },
  ],
};

const campusLifeContent = {
  leftText: `A well-structured campus environment that supports academic focus, personal growth, and student well-being.`,

  button: "Explore Campus Life",
  columns: [
    {
      heading: "Quick Links",
      links: [
        "Academic Environment",
        "Student Life & Community",
        "Hostel & Accommodation",
      ],
    },
    {
      heading: null,
      links: [
        "Clubs & Activities",
        "Sports & Wellbeing",
        "Campus Events",
      ],
    },
  ],
};

const aboutContent = {
  leftText: `A premier academic and healthcare institution integrating medical education, research, and advanced clinical care since 2000.`,

  button: "Explore About Us",
  columns: [
    {
      heading: "Quick Links",
      links: [
        "Who We Are",
        "Our Core Values",
        "Accreditation Standards",
      ],
    },
    {
      heading: null,
      links: [
        "Leadership & Governance",
        "Global Partnerships",
      ],
    },
  ],
};

const healthCareContent = {
  leftText: `A well-structured campus environment that supports academic focus, personal growth, and student well-being.`,

  button: "Explore Healthcare",
  columns: [
    {
      heading: "Quick Links",
      links: [
        "Specialties & Departments",
        "Experienced Doctors",
        "Patient Care & Facilities",
      ],
    },
    {
      heading: null,
      links: [
        "Diagnostic Services",
        "Safety Accreditation",
        "Patient Support Services"
      ],
    },
  ],
};

const megaMenuContent = {
  About: aboutContent,
  Academics: academicsContent,
  Research: researchContent,
  Healthcare: healthCareContent,
  "Campus Life": campusLifeContent,
  News: newsContent,
};

const NavItem = ({ label, to, isActive, hasMegaMenu, onClick, onHover }) => {
  const baseClasses = `${T.font.family} text-[18px] leading-[26px] transition-all duration-300 relative group cursor-pointer h-full flex items-center select-none outline-none focus:outline-none`;
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
                w-0 group-hover:w-3/4
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
                w-0 group-hover:w-3/4
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
  const { setActiveCollege } = useCollegeContext();

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
    <div className="sticky top-0 z-[100] asram-font w-full">
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
              {utilityLinks.map((item) => {
                const isExternal = item.to?.startsWith("http");
                const Tag = isExternal ? "a" : item.to ? Link : "button";
                const props = isExternal
                  ? { href: item.to, target: "_blank", rel: "noopener noreferrer" }
                  : item.to
                    ? { to: item.to }
                    : {};

                return (
                  <Tag
                    key={item.label}
                    {...props}
                    className={`
                      flex items-center gap-[4px] 
                      hover:opacity-80 transition whitespace-nowrap
                      ${T.font.family}
                    `}
                  >
                    <span className={T.font.family}>{item.label}</span>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- MAIN HEADER ----------------------- */}
      <header className="w-full bg-white relative z-[100] shadow-[0_4px_20px_rgba(0,0,0,0.1)] sticky top-0">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px] h-[66px] py-[10px] flex items-center justify-between relative">


          {/* Hamburger */}
          <div className="lg:hidden flex items-center absolute left-5 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-[102]">
            <ModernHamburger
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>

          {/* LEFT NAV */}
          <nav className={`${T.font.family} hidden lg:flex flex-1 items-center justify-between gap-[40px] mr-[84px] h-full`}>
            <NavItem
              label="About"
              isActive={location.pathname.startsWith("/about-asram")}
              onClick={() => setOpenMenu((prev) => (prev === "About" ? null : "About"))}
              hasMegaMenu
            />
            <NavItem
              label="Academics"
              isActive={location.pathname.startsWith("/nursing-academics")}
              onClick={() => setOpenMenu((prev) => (prev === "Academics" ? null : "Academics"))}
              hasMegaMenu
            />
            <NavItem
              label="Research"
              isActive={location.pathname.startsWith("/nursing-research")}
              onClick={() => setOpenMenu((prev) => (prev === "Research" ? null : "Research"))}
              hasMegaMenu
            />
          </nav>

          {/* LOGO */}
          <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:mx-0 z-[101]">
            <div className="flex items-center gap-[4px] justify-center md:w-[189.4px]">
              <img
                loading="eager"
                fetchPriority="high"
                decoding="async"
                src={AsramLatestLogo}
                alt="Asram Latest Logo"
                className="h-[46px] object-contain flex-shrink-0 transition-all duration-300 rounded-[8px]"
              />
            </div>
          </Link>

          {/* RIGHT NAV */}
          <nav className={`${T.font.family} hidden lg:flex flex-1 items-center justify-between gap-[40px] ml-[84px] h-full`}>
            <NavItem
              label="Healthcare"
              to="/healthcare"
              isActive={location.pathname.startsWith("/healthcare")}
              onClick={() => setOpenMenu((prev) => (prev === "Healthcare" ? null : "Healthcare"))}
              hasMegaMenu
            />
            <NavItem
              label="Campus Life"
              to="/campus-life"
              isActive={location.pathname.startsWith("/campus-life")}
              onClick={() => setOpenMenu((prev) => (prev === "Campus Life" ? null : "Campus Life"))}
              hasMegaMenu
            />
            <NavItem
              label="News"
              to="/news"
              isActive={location.pathname.startsWith("/news")}
              onClick={() => setOpenMenu((prev) => (prev === "News" ? null : "News"))}
              hasMegaMenu
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
                className="flex items-center gap-[4px] justify-center mb-6 w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenMenu(null);
                }}
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
                    Healthcare: "/healthcare",
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
                                      to={link === "College of Nursing" ? (item === "Research" ? "/nursing-research" : "/nursing-academics") : link === "College of Medical College" ? (item === "Research" ? "/medical-research" : "/medical-academics") : link === "College of Health Sciences" ? (item === "Research" ? "/health-science-research" : "/health-science-academics") : item === "News" ? (link === "Campus Events" ? "/news#campus-events" : link === "Featured Story" ? "/news#featured-story" : link === "Latest News" ? "/news#latest-news" : "#") : "#"}
                                      className="text-white text-[15px] font-medium hover:underline"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu(null);
                                        if (link === "College of Nursing") setActiveCollege("nursing");
                                        else if (link === "College of Medical College") setActiveCollege("medical");
                                        else if (link === "College of Health Sciences") setActiveCollege("health-science");
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
                        visibility: col.heading ? "visible" : "hidden",
                      }}
                    >
                      {col.heading || "placeholder"}
                    </h3>


                    <ul className="space-y-[16px]">
                      {col.links.map((link) => (
                        <Link
                          key={link}
                          // to={link === "College of Nursing" ? (openMenu === "Research" ? "/nursing-research" : "/nursing-academics") : link === "College of Medical College" ? (openMenu === "Research" ? "/medical-research" : "/medical-academics") : link === "College of Health Sciences" ? (openMenu === "Research" ? "/health-science-research" : "/health-science-academics") : openMenu === "News" ? (link === "Campus Events" ? "/news#campus-events" : link === "Featured Story" ? "/news#featured-story" : link === "Latest News" ? "/news#latest-news" : "#") : "#"}
                          to={
                            openMenu === "Academics"
                              ? link === "College of Health Sciences"
                                ? "/health-science-academics"
                                : link === "College of Medical College"
                                  ? "/medical-academics"
                                  : link === "College of Nursing"
                                    ? "/nursing-academics"
                                    : link === "Faculty"
                                      ? "/faculty"
                                      : link === "Departments"
                                        ? "/healthcare/general-surgery"
                                        : "#"

                              : openMenu === "Research"
                                ? link === "College of Health Sciences"
                                  ? "/health-science-research"
                                  : link === "College of Medical College"
                                    ? "/medical-research"
                                    : link === "College of Nursing"
                                      ? "/nursing-research"
                                      : link === "Faculty"
                                        ? "/faculty"
                                        : link === "Departments"
                                          ? "/healthcare/general-surgery"
                                          : "#"

                                : openMenu === "Healthcare"
                                  ? link === "Specialties & Departments"
                                    ? "/healthcare#specialties-departments"
                                    : link === "Experienced Doctors"
                                      ? "/healthcare#experienced-doctors"
                                      : link === "Patient Care & Facilities"
                                        ? "/healthcare#patient-care-facilities"
                                        : link === "Diagnostic Services"
                                          ? "/healthcare#diagnostic-services"
                                          : link === "Safety Accreditation"
                                            ? "/healthcare#safety-accreditation"
                                            : link === "Patient Support Services"
                                              ? "/healthcare#patient-support-services"
                                              : "#"

                                  : openMenu === "Campus Life"
                                    ? link === "Academic Environment"
                                      ? "/campus-life#academic-environment"
                                      : link === "Student Life & Community"
                                        ? "/campus-life#student-life-community"
                                        : link === "Hostel & Accommodation"
                                          ? "/campus-life#hostel-accommodation"
                                          : link === "Clubs & Activities"
                                            ? "/campus-life#clubs-activities"
                                            : link === "Sports & Wellbeing"
                                              ? "/campus-life#sports-wellbeing"
                                              : link === "Campus Events"
                                                ? "/campus-life#campus-events"
                                                : "#"

                                    : openMenu === "About"
                                      ? link === "Who We Are"
                                        ? "/about-asram#who-we-are"
                                        : link === "Our Core Values"
                                          ? "/about-asram#our-core-values"
                                          : link === "Accreditation Standards"
                                            ? "/about-asram#accreditation-standards"
                                            : link === "Leadership & Governance"
                                              ? "/about-asram#leadership-governance"
                                              : link === "Global Partnerships"
                                                ? "/about-asram#global-partnerships"
                                                : "#"

                                      : openMenu === "News"
                                        ? link === "Campus Events"
                                          ? "/news#campus-events"
                                          : link === "Featured Story"
                                            ? "/news#featured-story"
                                            : link === "Latest News"
                                              ? "/news#latest-news"
                                              : "#"

                                        : "#"
                          }




                          className={`${T.font.family} ${T.font.weight.semibold} text-[18px] leading-[22px] block group w-fit`}
                          style={{
                            color: T.color.secondary,
                            letterSpacing: "-0.2px",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => {
                            setOpenMenu(null);

                            if (link === "College of Nursing") setActiveCollege("nursing");
                            else if (link === "College of Medical College") setActiveCollege("medical");
                            else if (link === "College of Health Sciences") setActiveCollege("health-science");
                          }}

                        >
                          <span className="relative py-1">
                            {link}
                            <span
                              className={`
                                absolute bottom-[-4px] left-0 h-[2px] bg-[#008C8C] transition-all duration-300 ease-out
                                w-0 group-hover:w-3/4
                              `}
                            />
                          </span>
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
