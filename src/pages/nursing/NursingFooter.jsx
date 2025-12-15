import React from "react";

import { T } from "@/theme";
import { LocationIcon, MailIcon, PhoneIcon } from "@/assets/icons/FooterIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F9FC] flex justify-center">

      {/* OUTER WRAPPER */}
      <div
        className="
          w-full 
          max-w-[1440px] 
          mx-auto 

          /* RESPONSIVE PADDING */
          px-4
          sm:px-6
          md:px-10
          lg:px-[120px]

          pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px]
          flex flex-col 
          items-center
        "
      >

        {/* --------------------------- INNER 1200PX CONTENT --------------------------- */}
        <div className="w-full max-w-[1200px] flex flex-col gap-[45px]">

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
                  text-[18px] lg:text-[16px]
                  leading-[26px]
                  text-[${T.color.text.dark}]
                `}
              >
                ASRAM
              </h3>

              <p
                className={`
                  ${T.font.family}
                  text-[15px] lg:text-[15.79px]
                  leading-[24px] lg:leading-[26px]
                  opacity-70
                  mt-[12px] lg:mt-[16px]
                  max-w-[280px]
                `}
              >
                Premier institution for nursing education in Andhra Pradesh,
                offering comprehensive programmes from undergraduate to
                postgraduate levels.
              </p>
            </div>

            {/* -------------- Column 2 -------------- */}
            <div className="flex flex-col">
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[18px] lg:text-[16px]
                  leading-[26px]
                `}
              >
                Quick Links
              </h3>

              <div className="flex flex-col mt-[12px] lg:mt-[16px] gap-[10px]">
                {["About Us", "Programs", "Infrastructure", "Admissions"].map(
                  (item, i) => (
                    <p
                      key={i}
                      className={`
                        ${T.font.family}
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
                  ${T.font.weight.semibold}
                  text-[18px] lg:text-[16px]
                  leading-[26px]
                `}
              >
                Our Programs
              </h3>

              <div className="flex flex-col mt-[12px] lg:mt-[16px] gap-[10px]">
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
                  ${T.font.weight.semibold}
                  text-[18px] lg:text-[16px]
                  leading-[26px]
                `}
              >
                Contact Information
              </h3>

              <div className="flex flex-col mt-[12px] lg:mt-[16px] gap-[12px]">

                {/* Address */}
                <div className="flex gap-[10px]">
<LocationIcon size={20} color="#191919" className="shrink-0" />                  <p
                    className={`
                      ${T.font.family} 
                      text-[15px] lg:text-[15.79px]
                      leading-[22px] lg:leading-[23px]
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
                  <PhoneIcon size={20} color="#191919" className="shrink-0" />
                  <p
                    className={`
                      ${T.font.family}
                      text-[15px] lg:text-[15.79px]
                      leading-[22px] lg:leading-[23px]
                      opacity-70
                    `}
                  >
                    Contact: Visit asram.in
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-[10px]">
                 <MailIcon size={20} color="#191919" className="shrink-0" />
                  <p
                    className={`
                      ${T.font.family}
                      text-[15px] lg:text-[15.79px]
                      leading-[22px] lg:leading-[23px]
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
              © 2025 ASRAM School of Nursing. All rights reserved.
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
