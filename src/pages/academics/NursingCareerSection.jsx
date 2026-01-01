// src/sections/academics/NursingCareerSection.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

const nursingcareer = "/AsramWebsite-FE/assets/academics/nursingcareer.png";
const IconExcellence = "/AsramWebsite-FE/assets/icons/IconExcellence.svg";
const IconActiveStudents = "/AsramWebsite-FE/assets/icons/IconActiveStudents.svg";
const IconPlacementSuccess = "/AsramWebsite-FE/assets/icons/IconPlacementSuccess.svg";
const IconApprovedPrograms = "/AsramWebsite-FE/assets/icons/IconApprovedPrograms.svg";

export default function NursingCareerSection() {
  return (
    <PageSection bg={T.bg.sectionCard} sectionClassName="py-[60px] md:py-[80px]">
      {/* SECTION TITLE */}
      <h2
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[32px] leading-[40px]
          sm:text-[38px] sm:leading-[44px]
          md:text-[42px] md:leading-[46px]
          text-[${T.color.secondary}]
          mb-[40px]
        `}
      >
        Shape Your Career in Nursing
      </h2>

      {/* MAIN LAYOUT */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-[40px] lg:gap-[90px]">

        {/* LEFT IMAGE */}
        <div
          className="
            flex-1
            w-full
            lg:max-w-[563px]
            aspect-[563/367]
            rounded-[8px]
            overflow-hidden
          "
        >
          <img
            src={nursingcareer}
            alt="Nursing Career"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT GRID */}
        <div
          className="
            flex-1
            w-full
            lg:max-w-[588px]
            grid
            grid-cols-2
            gap-[23.7px]
          "
        >
          {/* Custom Card 1 */}
          <div
            className="bg-white flex flex-col items-center justify-center border border-transparent transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <img src={IconExcellence} className="w-[32px] h-[32px]" alt="" />
            <span
              className="mt-[15px] text-[#223F7F] font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
              }}
            >
              20+
            </span>
            <span
              className="mt-[5px] text-center font-montserrat font-medium"
              style={{ fontSize: "14px", color: "#555555" }}
            >
              Years of Excellence
            </span>
          </div>

          {/* Custom Card 2 */}
          <div
            className="bg-white flex flex-col items-center justify-center border border-transparent transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <img src={IconActiveStudents} className="w-[32px] h-[32px]" alt="" />
            <span
              className="mt-[15px] text-[#223F7F] font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
              }}
            >
              377+
            </span>
            <span
              className="mt-[5px] text-center font-montserrat font-medium"
              style={{ fontSize: "14px", color: "#555555" }}
            >
              Active Students
            </span>
          </div>

          {/* Custom Card 3 */}
          <div
            className="bg-white flex flex-col items-center justify-center border border-transparent transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <img src={IconPlacementSuccess} className="w-[32px] h-[32px]" alt="" />
            <span
              className="mt-[15px] text-[#223F7F] font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
              }}
            >
              95%
            </span>
            <span
              className="mt-[5px] text-center font-montserrat font-medium"
              style={{ fontSize: "14px", color: "#555555" }}
            >
              Placement Success
            </span>
          </div>

          {/* Custom Card 4 */}
          <div
            className="bg-white flex flex-col items-center justify-center border border-transparent transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <img src={IconApprovedPrograms} className="w-[32px] h-[32px]" alt="" />
            <span
              className="mt-[15px] text-[#223F7F] font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
              }}
            >
              INC
            </span>
            <span
              className="mt-[5px] text-center font-montserrat font-medium"
              style={{ fontSize: "14px", color: "#555555" }}
            >
              Approved Programs
            </span>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
