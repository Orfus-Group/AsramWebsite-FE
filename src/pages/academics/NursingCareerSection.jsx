// src/sections/academics/NursingCareerSection.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";
import StatCard from "@/features/common/cards/StatCard";

import nursingcareer from "@/assets/academics/nursingcareer.png";

/* ------------------------------------------
   YEARS OF EXCELLENCE
------------------------------------------- */
export const ExcellenceIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.3638 16.9609L22.3572 28.1794C22.3796 28.3115 22.361 28.4472 22.3041 28.5685C22.2472 28.6898 22.1546 28.7908 22.0387 28.858C21.9228 28.9253 21.7892 28.9555 21.6557 28.9448C21.5221 28.934 21.3951 28.8827 21.2914 28.7978L16.5809 25.2623C16.3535 25.0924 16.0773 25.0006 15.7934 25.0006C15.5096 25.0006 15.2333 25.0924 15.0059 25.2623L10.2875 28.7965C10.184 28.8812 10.0571 28.9324 9.92368 28.9432C9.7903 28.954 9.65681 28.9239 9.54101 28.8568C9.42521 28.7898 9.3326 28.689 9.27555 28.568C9.21851 28.4469 9.19972 28.3114 9.22171 28.1794L11.2138 16.9609" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.7894 18.4213C20.1495 18.4213 23.6841 14.8867 23.6841 10.5266C23.6841 6.16643 20.1495 2.63184 15.7894 2.63184C11.4292 2.63184 7.89465 6.16643 7.89465 10.5266C7.89465 14.8867 11.4292 18.4213 15.7894 18.4213Z" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

/* ------------------------------------------
   ACTIVE STUDENTS
------------------------------------------- */
export const ActiveStudentsIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.0534 27.6318V25.0002C21.0534 23.6043 20.4989 22.2656 19.5118 21.2786C18.5248 20.2916 17.1861 19.7371 15.7902 19.7371H7.89548C6.49961 19.7371 5.1609 20.2916 4.17387 21.2786C3.18683 22.2656 2.63232 23.6043 2.63232 25.0002V27.6318" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M21.052 4.11597C22.1806 4.40856 23.1802 5.06763 23.8937 5.98973C24.6072 6.91184 24.9944 8.04477 24.9944 9.2107C24.9944 10.3766 24.6072 11.5096 23.8937 12.4317C23.1802 13.3538 22.1806 14.0128 21.052 14.3054" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M28.9466 27.6316V25.0001C28.9458 23.8339 28.5576 22.7011 27.8432 21.7794C27.1287 20.8578 26.1284 20.1995 24.9993 19.908" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.8429 14.4738C14.7496 14.4738 17.106 12.1174 17.106 9.21067C17.106 6.30391 14.7496 3.94751 11.8429 3.94751C8.93611 3.94751 6.57971 6.30391 6.57971 9.21067C6.57971 12.1174 8.93611 14.4738 11.8429 14.4738Z" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

/* ------------------------------------------
   PLACEMENT SUCCESS
------------------------------------------- */
export const PlacementSuccessIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.0521 9.21069H28.9469V17.1054" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M28.9482 9.21069L17.764 20.3949L11.1851 13.816L2.63245 22.3686" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

/* ------------------------------------------
   APPROVED PROGRAMS
------------------------------------------- */
export const ApprovedProgramsIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7905 28.9476C23.0574 28.9476 28.9484 23.0566 28.9484 15.7897C28.9484 8.52283 23.0574 2.63184 15.7905 2.63184C8.52356 2.63184 2.63257 8.52283 2.63257 15.7897C2.63257 23.0566 8.52356 28.9476 15.7905 28.9476Z" stroke="#223F7F" stroke-opacity="0.8" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.7905 2.63184C12.4119 6.17941 10.5273 10.8907 10.5273 15.7897C10.5273 20.6888 12.4119 25.4001 15.7905 28.9476C19.1691 25.4001 21.0537 20.6888 21.0537 15.7897C21.0537 10.8907 19.1691 6.17941 15.7905 2.63184Z" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.63257 15.7898H28.9484" stroke="#223F7F" stroke-width="2.63158" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

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
            className="bg-white flex flex-col items-center justify-center border border-transparent hover:shadow-md transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <ExcellenceIcon />
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
            className="bg-white flex flex-col items-center justify-center border border-transparent hover:shadow-md transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <ActiveStudentsIcon />
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
            className="bg-white flex flex-col items-center justify-center border border-transparent hover:shadow-md transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <PlacementSuccessIcon />
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
            className="bg-white flex flex-col items-center justify-center border border-transparent hover:shadow-md transition-shadow aspect-[282/171] rounded-[9.9px]"
          >
            <ApprovedProgramsIcon />
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
