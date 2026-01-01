import React from "react";

import { T } from "@/theme";

const LocationIcon = "/AsramWebsite-FE/assets/icons/LocationIcon.svg";
const MailIcon = "/AsramWebsite-FE/assets/icons/MailIcon.svg";
const PhoneIcon = "/AsramWebsite-FE/assets/icons/PhoneIcon.svg";

export default function Footer({
  bgClass = "bg-[#008C8C33]",
  className = "",
  data = {}
}) {
  const {
    description = "Premier institution for nursing education in Andhra Pradesh, offering comprehensive programmes from undergraduate to postgraduate levels.",
    quickLinks = ["About Us", "Programs", "Infrastructure", "Admissions"],
    programs = [
      "B.Sc Nursing (4 Years)",
      "GNM (3 Years)",
      "M.Sc Nursing (Post-Graduate)",
      "Various Specializations",
    ],
    contact = {
      address: <>ASRAM Campus, Eluru,<br />Andhra Pradesh, India</>,
      phone: "Contact: Visit asram.in",
      email: "For admission inquiries"
    },
    copyright = "© 2025 ASRAM School of Nursing. All rights reserved."
  } = data;

  return (
    <footer className={`w-full ${bgClass} flex justify-center ${className}`}>

      {/* OUTER WRAPPER */}
      <div
        className="
          w-full
          max-w-[1440px] mx-auto
          px-5 sm:px-6 md:px-10 lg:px-[120px]
          pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px]
          flex flex-col 
          items-center
        "
      >

        {/* --------------------------- INNER 1200PX CONTENT --------------------------- */}
        <div className="w-full flex flex-col gap-[45px]">

          {/* ======================= TOP GRID (Mobile Responsive) ======================= */}
          <div
            className="
              grid 
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4

              gap-[32px] sm:gap-[40px]
              w-full
            "
          >

            {/* -------------- Column 1 -------------- */}
            <div className="flex flex-col">
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[18px] lg:text-[18px]
                  leading-[26px]
                  text-[${T.color.text.dark}]
                `}
              >
                ASRAM
              </h3>

              <p
                className={`
                  ${T.font.family}
                  text-[#191919BF]
                  font-semibold
                  text-[15px] lg:text-[16px]
                  leading-[24px] lg:leading-[26px]
                  opacity-70
                  mt-[12px] lg:mt-[16px]
                  max-w-[280px]
                `}
              >
                {description}
              </p>
            </div>

            {/* -------------- Column 2 -------------- */}
            <div className="flex flex-col">
              <h3
                className={`
                  ${T.font.family}
                  text-[#191919]
                  ${T.font.weight.semibold}
                  text-[18px] lg:text-[19px]
                  leading-[26px]
                `}
              >
                Quick Links
              </h3>

              <div className="flex flex-col mt-[12px] lg:mt-[16px] gap-[10px]">
                {quickLinks.map(
                  (item, i) => (
                    <p
                      key={i}
                      className={`
                        ${T.font.family}
                        text-[#191919BF]
                        font-regular
                        text-[15px] lg:text-[15.79px]
                        leading-[22px] lg:leading-[23px]
                        opacity-70
                        hover:opacity-100
                        cursor-pointer
                      `}
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* -------------- Column 3 -------------- */}
            <div className="flex flex-col">
              <h3
                className={`
                  ${T.font.family}
                  text-[#191919]
                  ${T.font.weight.semibold}
                  text-[18px] lg:text-[19px]
                  leading-[26px]
                `}
              >
                Our Programs
              </h3>

              <div className="flex flex-col mt-[12px] lg:mt-[16px] gap-[10px]">
                {programs.map((item, i) => (
                  <p
                    key={i}
                    className={`
                       text-[#191919BF]
                      ${T.font.family}
                                             font-regular
                      text-[15px] lg:text-[15.79px]
                      leading-[22px] lg:leading-[23px]
                      opacity-70
                    `}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* -------------- Column 4 -------------- */}
            <div className="flex flex-col">
              <h3
                className={`
                  ${T.font.family}
                  text-[#191919]
                  ${T.font.weight.semibold}
                  text-[18px] lg:text-[19px]
                  leading-[26px]
                `}
              >
                Contact Information
              </h3>

              <div className="flex flex-col mt-[12px] lg:mt-[16px] gap-[12px]">

                {/* Address */}
                <div className="flex gap-[10px]">
                  <img src={LocationIcon} className="w-[20px] h-[20px] shrink-0" alt="" />
                  <p
                    className={`
                      ${T.font.family} 
                       text-[#191919BF]
                       font-regular
                      text-[15px] lg:text-[15.79px]
                      leading-[22px] lg:leading-[23px]
                      opacity-70
                    `}
                  >
                    {contact.address}
                  </p>
                </div>

                {/* Contact */}
                <div className="flex gap-[10px]">
                  <img src={PhoneIcon} className="w-[20px] h-[20px] shrink-0" alt="" />
                  <p
                    className={`
                      ${T.font.family}
                        text-[#191919BF]
                       font-regular
                      text-[15px] lg:text-[15.79px]
                      leading-[22px] lg:leading-[23px]
                      opacity-70
                    `}
                  >
                    {contact.phone}
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-[10px]">
                  <img src={MailIcon} className="w-[20px] h-[20px] shrink-0" alt="" />
                  <p
                    className={`
                      ${T.font.family}
                        text-[#191919BF]
                       font-regular
                      text-[15px] lg:text-[15.79px]
                      leading-[22px] lg:leading-[23px]
                      opacity-70
                    `}
                  >
                    {contact.email}
                  </p>
                </div>

                {/* Social Media Link */}
                <div className="flex gap-[10px] items-center mt-[4px]">
                  <a href="https://www.linkedin.com/company/alluri-sitarama-raju-academy-of-medical-science/" target="_blank" rel="noreferrer" className="flex items-center gap-[6px] opacity-70 hover:opacity-100 transition-opacity">
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div style={{ border: "1px solid #19191933" }} className="w-full"></div>

          {/* ================= BOTTOM BAR ================= */}
          <div
            className="
              w-full 
              
              flex flex-col gap-[14px]     /* Mobile */
              sm:flex-row sm:justify-between sm:items-center
            "
          >

            {/* LEFT TEXT */}
            <p
              className={`
                ${T.font.family}
                ${T.font.weight.bold}
                text-[14px]
                leading-[20px]
                text-[#191919]
                text-center sm:text-left
              `}
            >
              {copyright}
            </p>

            {/* RIGHT GROUP */}
            <div
              className="
                flex items-center justify-center sm:justify-end
                gap-[16px]
              "
            >
              <p
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[14px]
                  leading-[20px]
                  text-[#191919]
                  text-center
                `}
              >
                Affiliated to NTRUHS, Vijayawada
              </p>

              {/* DOT */}
              <div className="w-[4px] h-[4px] bg-[#19191999] rounded-full"></div>

              <p
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[14px]
                  leading-[20px]
                  text-[#191919]
                  text-center
                `}
              >
                Approved by INC
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
