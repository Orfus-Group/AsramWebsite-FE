import React from "react";

import locationIcon from "../../assets/nursing/locationicon.svg";
import phoneIcon from "../../assets/nursing/contactphone.svg";
import mailIcon from "../../assets/nursing/contactemail.svg";
import { T } from "../../theme";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F9FC] flex justify-center">
      
      {/* ⭐ UNIFIED BASELINE CONTAINER (Matches Hero + Header) */}
      <div
        className="
          w-full 
          max-w-[1440px] 
          mx-auto 
          px-4 sm:px-6 md:px-10 lg:px-[120px] 
          pt-[80px] pb-[60px]
          flex flex-col 
          gap-[45.1px]
        "
      >

        {/* ================= TOP CONTENT ROW ================= */}
        <div
          className="
            w-full 
            grid 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-[40px]
          "
        >

          {/* --------- Column 1: About --------- */}
          <div className="flex flex-col">
            <h3
              className={`
                ${T.font.family}
                ${T.font.weight.bold}
                text-[16px]
                leading-[26px]
                text-[${T.color.text.dark}]
              `}
            >
              ASRAM
            </h3>

            <p
              className={`
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[15.79px]
                leading-[26px]
                text-[${T.color.text.dark}]
                opacity-70
                mt-[16px]
              `}
            >
              Premier institution for nursing education in Andhra Pradesh,
              offering comprehensive programmes from undergraduate to
              postgraduate levels.
            </p>
          </div>

          {/* --------- Column 2: Quick Links --------- */}
          <div className="flex flex-col">
            <h3
              className={`
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[16px]
                leading-[26px]
                text-[${T.color.text.dark}]
              `}
            >
              Quick Links
            </h3>

            <div className="flex flex-col mt-[16px] gap-[12px]">
              {["About Us", "Programs", "Infrastructure", "Admissions"].map(
                (item, i) => (
                  <p
                    key={i}
                    className={`
                      ${T.font.family}
                      ${T.font.weight.regular}
                      text-[15.79px] leading-[23.68px]
                      text-[${T.color.text.dark}]
                      opacity-70
                      cursor-pointer
                      hover:opacity-100
                    `}
                  >
                    {item}
                  </p>
                )
              )}
            </div>
          </div>

          {/* --------- Column 3: Programs --------- */}
          <div className="flex flex-col">
            <h3
              className={`
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[16px]
                leading-[26px]
                text-[${T.color.text.dark}]
              `}
            >
              Our Programs
            </h3>

            <div className="flex flex-col mt-[16px] gap-[12px]">
              {[
                "B.Sc Nursing (4 Years)",
                "GNM (3 Years)",
                "M.Sc Nursing (Post-Graduate)",
                "Various Specializations",
              ].map((item, i) => (
                <p
                  key={i}
                  className={`
                    ${T.font.family}
                    ${T.font.weight.regular}
                    text-[15.79px] leading-[23.7px]
                    text-[${T.color.text.dark}]
                    opacity-70
                  `}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* --------- Column 4: Contact --------- */}
          <div className="flex flex-col">
            <h3
              className={`
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[16px]
                leading-[26px]
                text-[${T.color.text.dark}]
              `}
            >
              Contact Information
            </h3>

            <div className="flex flex-col mt-[16px] gap-[12px]">
              {/* Address */}
              <div className="flex gap-[10px]">
                <img src={locationIcon} className="w-[20px] h-[20px]" />
                <p
                  className={`
                    ${T.font.family}
                    text-[15.79px] leading-[23.7px]
                    text-[${T.color.text.dark}]
                    opacity-70
                  `}
                >
                  ASRAM Campus, Eluru,
                  <br />
                  Andhra Pradesh, India
                </p>
              </div>

              {/* Contact */}
              <div className="flex gap-[10px]">
                <img src={phoneIcon} className="w-[20px] h-[20px]" />
                <p
                  className={`
                    ${T.font.family}
                    text-[15.79px] leading-[23.7px]
                    text-[${T.color.text.dark}]
                    opacity-70
                  `}
                >
                  Contact: Visit asram.in
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-[10px]">
                <img src={mailIcon} className="w-[20px] h-[20px]" />
                <p
                  className={`
                    ${T.font.family}
                    text-[15.79px] leading-[23.7px]
                    text-[${T.color.text.dark}]
                    opacity-70
                  `}
                >
                  For admission inquiries
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="w-full border-t border-[#E5E7EB]"></div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            w-full 
            flex flex-col sm:flex-row
            justify-between 
            items-center 
            gap-[12px]
            text-center
          "
        >
          <p
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[14px]
              leading-[20px]
              text-[${T.color.text.dark}]
            `}
          >
            © 2025 ASRAM School of Nursing. All rights reserved.
          </p>

          <p
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[14px]
              leading-[20px]
              text-[${T.color.text.dark}]
            `}
          >
            Affiliated to NTRUHS, Vijayawada &nbsp; · &nbsp; Approved by INC
          </p>
        </div>

      </div>
    </footer>
  );
}
