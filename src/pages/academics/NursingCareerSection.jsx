// src/sections/academics/NursingCareerSection.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

const nursingcareer = "/AsramWebsite-FE/assets/academics/nursingcareer.png";
const IconExcellence = "/AsramWebsite-FE/assets/icons/IconExcellence.svg";
const IconActiveStudents = "/AsramWebsite-FE/assets/icons/IconActiveStudents.svg";
const IconPlacementSuccess = "/AsramWebsite-FE/assets/icons/IconPlacementSuccess.svg";
const IconApprovedPrograms = "/AsramWebsite-FE/assets/icons/IconApprovedPrograms.svg";

export default function NursingCareerSection({ theme }) {
  const secondaryColor = theme?.secondary || "#223F7F"; // Default Blue

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
          mb-[40px]
        `}
        style={{ color: secondaryColor }}
      >
        Shape Your Career in Medicine
      </h2>

      {/* MAIN LAYOUT */}
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">

        {/* LEFT IMAGE */}
        <div
          className="
            w-full lg:flex-1
            h-[367px]
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
            w-full lg:flex-1
            grid
            grid-cols-1 sm:grid-cols-2
            gap-5
          "
        >
          {/* Custom Card 1 */}
          <div
            className="bg-white flex flex-col items-center justify-start border border-transparent transition-shadow w-full h-[171.7px] rounded-[9.9px] pt-[23.7px] pr-[23.6px] pb-[41.1px] pl-[23.7px]"
          >
            <img src={IconExcellence} className="w-[32px] h-[32px] mb-[15px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />
            <span
              className="font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
                color: secondaryColor,
              }}
            >
              30+
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
            className="bg-white flex flex-col items-center justify-start border border-transparent transition-shadow w-full h-[171.7px] rounded-[9.9px] pt-[23.7px] pr-[23.6px] pb-[41.1px] pl-[23.7px]"
          >
            <img src={IconActiveStudents} className="w-[32px] h-[32px] mb-[15px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />
            <span
              className="font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
                color: secondaryColor,
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
            className="bg-white flex flex-col items-center justify-start border border-transparent transition-shadow w-full h-[171.7px] rounded-[9.9px] pt-[23.7px] pr-[23.6px] pb-[41.1px] pl-[23.7px]"
          >
            <img src={IconPlacementSuccess} className="w-[32px] h-[32px] mb-[15px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />
            <span
              className="font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
                color: secondaryColor,
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
            className="bg-white flex flex-col items-center justify-start border border-transparent transition-shadow w-full h-[171.7px] rounded-[9.9px] pt-[23.7px] pr-[23.6px] pb-[41.1px] pl-[23.7px]"
          >
            <img src={IconApprovedPrograms} className="w-[32px] h-[32px] mb-[15px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />
            <span
              className="font-bold font-montserrat text-center"
              style={{
                fontSize: "29.6px",
                lineHeight: "1.2",
                color: secondaryColor,
              }}
            >
              NMC
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
