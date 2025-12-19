// src/sections/academics/NursingAdmissionsSection.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

import readytoapply from "@/assets/academics/readytoapply.png";
import Button from "@/components/ui/button";



const baseProps = {
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

/* ===============================
   SUBMIT APPLICATION
================================ */
export const SubmitApplicationIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M7.89495 28.9476C7.19701 28.9476 6.52765 28.6703 6.03414 28.1768C5.54062 27.6833 5.26337 27.0139 5.26337 26.316V5.26336C5.26337 4.56542 5.54062 3.89607 6.03414 3.40255C6.52765 2.90903 7.19701 2.63178 7.89495 2.63178H18.4213C18.8378 2.6311 19.2503 2.71283 19.6351 2.87226C20.0199 3.03169 20.3694 3.26567 20.6634 3.56073L25.3844 8.28178C25.6803 8.57587 25.9149 8.92565 26.0748 9.31094C26.2347 9.69622 26.3167 10.1094 26.316 10.5265V26.316C26.316 27.0139 26.0387 27.6833 25.5452 28.1768C25.0517 28.6703 24.3824 28.9476 23.6844 28.9476H7.89495Z"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.4216 2.63177V9.21072C18.4216 9.55969 18.5602 9.89437 18.807 10.1411C19.0537 10.3879 19.3884 10.5265 19.7374 10.5265H26.3163"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13.1584 11.8426H10.5269" stroke="#008C8C" strokeWidth="2.63158" strokeLinecap="round"/>
    <path d="M21.0532 17.1056H10.5269" stroke="#008C8C" strokeWidth="2.63158" strokeLinecap="round"/>
    <path d="M21.0532 22.3686H10.5269" stroke="#008C8C" strokeWidth="2.63158" strokeLinecap="round"/>
  </svg>
);

/* ===============================
   APPLICATION REVIEW
================================ */
export const ApplicationReviewIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M19.7375 2.63177H11.8428C11.1161 2.63177 10.527 3.22087 10.527 3.94756V6.57914C10.527 7.30583 11.1161 7.89493 11.8428 7.89493H19.7375C20.4642 7.89493 21.0533 7.30583 21.0533 6.57914V3.94756C21.0533 3.22087 20.4642 2.63177 19.7375 2.63177Z"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.053 5.26352H23.6846C24.3825 5.26352 25.0519 5.54077 25.5454 6.03429C26.0389 6.52781 26.3162 7.19716 26.3162 7.8951V26.3162C26.3162 27.0141 26.0389 27.6834 25.5454 28.177C25.0519 28.6705 24.3825 28.9477 23.6846 28.9477H7.89513C7.19719 28.9477 6.52784 28.6705 6.03432 28.177C5.5408 27.6834 5.26355 27.0141 5.26355 26.3162V7.8951C5.26355 7.19716 5.5408 6.52781 6.03432 6.03429C6.52784 5.54077 7.19719 5.26352 7.89513 5.26352H10.5267"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.842 18.4216L14.4736 21.0531L19.7368 15.79"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ===============================
   INTERVIEW & DECISION
================================ */
export const InterviewDecisionIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path d="M10.5271 2.63177V7.89493" stroke="#008C8C" strokeWidth="2.63158" strokeLinecap="round"/>
    <path d="M21.0531 2.63177V7.89493" stroke="#008C8C" strokeWidth="2.63158" strokeLinecap="round"/>
    <path
      d="M25.0001 5.26352H6.57909C5.12571 5.26352 3.94751 6.44172 3.94751 7.8951V26.3162C3.94751 27.7695 5.12571 28.9477 6.57909 28.9477H25.0001C26.4535 28.9477 27.6317 27.7695 27.6317 26.3162V7.8951C27.6317 6.44172 26.4535 5.26352 25.0001 5.26352Z"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3.94751 13.1582H27.6317" stroke="#008C8C" strokeWidth="2.63158" strokeLinecap="round"/>
  </svg>
);

/* ===============================
   ENROLLMENT
================================ */
export const EnrollmentIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M28.6865 13.158C29.2874 16.107 28.8591 19.173 27.4731 21.8445C26.0871 24.5161 23.8271 26.6317 21.0701 27.8386C18.313 29.0456 15.2255 29.2708 12.3224 28.4769C9.41934 27.6829 6.87621 25.9177 5.11711 23.4756C3.35801 21.0336 2.48928 18.0622 2.65578 15.0572C2.82228 12.0521 4.01396 9.19493 6.03208 6.96214C8.0502 4.72935 10.7728 3.2559 13.7458 2.78751C16.7188 2.31912 19.7625 2.8841 22.3694 4.38823"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8424 14.474L15.7898 18.4214L28.9477 5.26352"
      stroke="#008C8C"
      strokeWidth="2.63158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const processSteps = [
  {
    step: "Step 1",
    title: "Submit Application",
    desc: "Complete your online application and submit required documents including transcripts and test scores.",
    timeline: "Timeline:",
    timelinedescription: "Rolling Admissions",
    Icon: SubmitApplicationIcon,
  },
  {
    step: "Step 2",
    title: "Application Review",
    desc: "Our admissions committee carefully reviews your academic achievements and experience.",
    timeline: "Timeline:",
    timelinedescription: "2–4 Weeks",
    Icon: ApplicationReviewIcon,
  },
  {
    step: "Step 3",
    title: "Interview & Decision",
    desc: "Selected candidates are invited for an interview. Admission decisions typically follow within two weeks.",
    timeline: "Timeline:",
    timelinedescription: "As Scheduled",
    Icon: InterviewDecisionIcon,
  },
  {
    step: "Step 4",
    title: "Enrollment",
    desc: "Accept your offer, submit enrollment deposit, and prepare for orientation and course registration.",
    timeline: "Timeline:",
    timelinedescription: "Before Start Date",
    Icon: EnrollmentIcon,
  },
];

const requirements = [
  {
    title: "BSN Programs",
    items: [
      "High school diploma or equivalent",
      "Minimum 3.0 GPA",
      "SAT/ACT scores (if applicable)",
      "Prerequisites: Biology, Chemistry",
      "Letters of recommendation",
      "Personal statement",
    ],
  },
  {
    title: "Graduate Programs",
    items: [
      "Bachelor’s degree in nursing (BSN)",
      "Active RN license",
      "Minimum 3.2 GPA",
      "GRE scores (program dependent)",
      "Clinical experience (varies)",
      "Professional references",
    ],
  },
  {
    title: "Doctoral Programs",
    items: [
      "Master’s degree in nursing",
      "Active RN license",
      "Minimum 3.5 GPA",
      "Advanced practice experience",
      "Research statement or project proposal",
      "Academic references",
    ],
  },
];

const dates = [
  { date: "November 1", label: "Early Decision Deadline" },
  { date: "January 15", label: "Regular Decision Deadline" },
  { date: "March 1", label: "Transfer Deadline" },
  { date: "April 15", label: "Graduate Programs Deadline" },
];

export default function NursingAdmissionsSection() {
  return (
    <PageSection
      bg={T.bg.sectionCard}
      paddingClass="py-[80px]"
      className="flex flex-col gap-[40px]"
    >
      {/* -------------------- TITLE -------------------- */}
      <h2
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[42px]
          leading-[54px]
          text-[${T.color.secondary}]
        `}
      >
        Nursing Program Admissions
      </h2>

      {/* -------------------- APPLICATION PROCESS -------------------- */}
      <div className="flex flex-col gap-[24px]">
        <h3
          className={`
            ${T.font.family}
            ${T.font.weight.semibold}
            text-[32px]
            text-[${T.color.secondary}]
          `}
        >
          Application Process
        </h3>

        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-[23.68px]
          "
        >
          {processSteps.map((item, i) => (
            <div
              key={i}
              className="
                w-full
                bg-white
                rounded-[10px]
                border
                p-[20px]
                grid
                grid-rows-[auto_auto_auto_1fr_auto]
                h-full
              "
              style={{ border: "1px solid #07070733" }}
            >
              <item.Icon className="w-[31.58px] h-[31.58px]" />


              <span
                className={`
                  ${T.font.family}
                  text-[12px]
                  py-[8px]
                `}
                style={{ color: T.color.primary }}
              >
                {item.step}
              </span>

              <h4
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[20px]
                  leading-[26px]
                  pb-[10px]
                  text-[${T.color.secondary}]
                `}
              >
                {item.title}
              </h4>

              <p
                className={`
                  ${T.font.family}
                  text-[14px]
                  leading-[20px]
                  mb-[20px]
                `}
                style={{ color: T.color.text.muted }}
              >
                {item.desc}
              </p>

              <p
                className={`
                  ${T.font.family}
                  text-[14px]
                  leading-[20px]
                  self-end
                  text-[${T.color.secondary}]
                `}
              >
                <span className={`${T.font.weight.medium} `}>{item.timeline}</span>{" "}
                {item.timelinedescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- ADMISSION REQUIREMENTS -------------------- */}
      <div className="flex flex-col gap-[24px]">
        <h3
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[32px]
            text-[${T.color.secondary}]
          `}
        >
          Admission Requirements
        </h3>

        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-[31.58px]
          "
        >
          {requirements.map((box, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-[12px]
                border
                p-[20px]
                flex flex-col
                gap-[12px]
                h-full
              "
              style={{ border: "1px solid #07070733" }}
            >
              <h4
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[24px]
                  mb-[5px]
                  leading-[24px]
                  text-[${T.color.secondary}]
                `}
              >
                {box.title}
              </h4>

              <ul className="flex flex-col gap-[8px]">
                {box.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`
                      flex gap-[8px]
                      text-[14px]
                      ${T.font.family}
                    `}
                    style={{ color: T.color.text.muted }}
                  >
                    <EnrollmentIcon className="w-[17.76px] h-[17.76px] shrink-0" />
                  <span
                      className={`
                        ${T.font.family}
                        font-regular
                        text-[14px]
                        leading-[19.74px]
                      `}
                      style={{ color: "#6B7280" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- IMPORTANT DATES -------------------- */}
      <div className="w-full flex justify-center my-[40px]">
        <div className="w-full max-w-[1200px] bg-white rounded-[8px] py-[30px] px-[30px]">
          <h2
            className={`
              w-full text-center
              ${T.font.family}
              ${T.font.weight.bold}
              text-[32px]
              leading-[39px]
              mb-[30px]
              text-[${T.color.secondary}]
            `}
          >
            Important Dates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[23.68px] gap-y-[20px]">
            {dates.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <p
                  className={`
                    ${T.font.family}
                    ${T.font.weight.medium}
                    text-[#191919]
                    text-[18px]
                    leading-[22px]
                    mb-[10px]
                  `}
                >
                  {item.date}
                </p>

                <p
                  className={`
                    ${T.font.family}
                    text-[14px]
                    leading-[20px]
                  `}
                  style={{ color: T.color.dark + "BF" }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* READY TO APPLY — fill available space & respect PageSection padding */}
      <div
        className="
    w-full
    flex flex-col lg:flex-row
    items-start
    gap-[32px]
   mb-[80px]
  "
      >
        {/* LEFT IMAGE */}
        <div
          className="
    w-full lg:w-[40%] 
    h-[360px]
    rounded-[12px] 
    overflow-hidden
    shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
  "
          style={{
            flexShrink: 0
          }}
        >

          <img loading="lazy" decoding="async"
            src={readytoapply}
            className="w-full h-[389px] object-cover rounded-[12px]"
          />
        </div>
        {/* RIGHT CONTENT — stretches fully to right edge */}
        <div
          className="
      flex-1
      flex flex-col
      gap-[20px]
    "
        >
          <h3
            className={`
        ${T.font.family}
        ${T.font.weight.semibold}
        text-[26px]
        leading-[34px]
        text-[${T.color.secondary}]
      `}
          >
            Ready to Apply?
          </h3>

          <p
            className={`
        ${T.font.family}
        text-[16px]
        leading-[24px]
      `}
            style={{ color: T.color.text.researchMuted }}
          >
          Start your application today and take the first step toward an exceptional nursing education. Our admissions team is here to support you throughout the process.
          </p>

  <p
            className={`
        ${T.font.family}
        text-[16px]
        leading-[24px]
      `}
            style={{ color: T.color.text.researchMuted }}
          >
          Start your application today and take the first step toward an exceptional nursing education. Our admissions team is here to support you throughout the process.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-[16px]">
            <Button
              bg={T.color.primary}
              color="white"
              rounded="8px"
              textSize="text-[14px]"
              leading="leading-[20px]"
              width="206px"
              height="44px"
              customPadding="px-[22px] py-[12px]"
              weight={T.font.weight.bold}
            >
              Start Your Application
            </Button>

            <Button
              bg={T.color.background.white}
              color={T.color.secondary}
              rounded="8px"
              textSize="text-[14px]"
              leading="leading-[20px]"
              width="206px"
              height="44px"
              customPadding="px-[22px] py-[12px]"
              borderColor={T.color.secondary}
              borderWidth="1px"
              weight={T.font.weight.bold}
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </div>




    </PageSection>
  );
}
