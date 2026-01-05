// src/sections/academics/NursingAdmissionsSection.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

const readytoapply = "/AsramWebsite-FE/assets/academics/readytoapply.png";
import Button from "@/components/ui/button";



const IconSubmitAppTeal = "/AsramWebsite-FE/assets/icons/IconSubmitAppTeal.svg";
const IconAppReviewTeal = "/AsramWebsite-FE/assets/icons/IconAppReviewTeal.svg";
const IconInterviewTeal = "/AsramWebsite-FE/assets/icons/IconInterviewTeal.svg";
const IconEnrollmentTeal = "/AsramWebsite-FE/assets/icons/IconEnrollmentTeal.svg";

const defaultProcessSteps = [
  {
    step: "Step 1",
    title: "Submit Application",
    desc: "Complete your online application and submit required documents including transcripts and test scores.",
    timeline: "Timeline:",
    timelinedescription: "Rolling Admissions",
    icon: IconSubmitAppTeal,
  },
  {
    step: "Step 2",
    title: "Application Review",
    desc: "Our admissions committee carefully reviews your academic achievements and experience.",
    timeline: "Timeline:",
    timelinedescription: "2–4 Weeks",
    icon: IconAppReviewTeal,
  },
  {
    step: "Step 3",
    title: "Interview & Decision",
    desc: "Selected candidates are invited for an interview. Admission decisions typically follow within two weeks.",
    timeline: "Timeline:",
    timelinedescription: "As Scheduled",
    icon: IconInterviewTeal,
  },
  {
    step: "Step 4",
    title: "Enrollment",
    desc: "Accept your offer, submit enrollment deposit, and prepare for orientation and course registration.",
    timeline: "Timeline:",
    timelinedescription: "Before Start Date",
    icon: IconEnrollmentTeal,
  },
];

const defaultRequirements = [
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

export default function NursingAdmissionsSection({ theme, processSteps, requirements, title, readyToApplyDesc }) {
  const primaryColor = theme?.primary || T.color.primary;
  const secondaryColor = theme?.secondary || T.color.secondary;
  const ctaButtonBg = theme?.ctaButtonBg || primaryColor;

  const iconStyle = theme?.iconFilter ? { filter: theme.iconFilter } : {};

  const stepsToRender = processSteps || defaultProcessSteps;
  const requirementsToRender = requirements || defaultRequirements;

  return (
    <PageSection
      bg={T.bg.sectionCard}
      paddingClass="pt-[80px] pb-[40px]"
      className="flex flex-col gap-[40px]"
    >
      {/* -------------------- TITLE -------------------- */}
      <h2
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[42px]
          leading-[54px]
        `}
        style={{ color: secondaryColor }}
      >
        {title || "Nursing Program Admissions"}
      </h2>

      {/* -------------------- APPLICATION PROCESS -------------------- */}
      <div className="flex flex-col gap-5">
        <h3
          className={`
            ${T.font.family}
            ${T.font.weight.semibold}
            text-[32px]
          `}
          style={{ color: secondaryColor }}
        >
          Application Process
        </h3>

        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-5
          "
        >
          {stepsToRender.map((item, i) => (
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
              <img src={item.icon} className="w-[31.58px] h-[31.58px]" alt="" style={iconStyle} />


              <span
                className={`
                  ${T.font.family}
                  text-[12px]
                  py-[8px]
                `}
                style={{ color: primaryColor }}
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
                `}
                style={{ color: secondaryColor }}
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
                `}
                style={{ color: secondaryColor }}
              >
                <span className={`${T.font.weight.medium} `}>{item.timeline}</span>{" "}
                {item.timelinedescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- ADMISSION REQUIREMENTS -------------------- */}
      <div className="flex flex-col gap-5">
        <h3
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[32px]
          `}
          style={{ color: secondaryColor }}
        >
          Admission Requirements
        </h3>

        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-5
          "
        >
          {requirementsToRender.map((box, i) => (
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
                `}
                style={{ color: secondaryColor }}
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
                    <img src={IconEnrollmentTeal} className="w-[17.76px] h-[17.76px] shrink-0" alt="" style={iconStyle} />
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
      <div className="w-full flex justify-center">
        <div className="w-full bg-white rounded-[8px] py-[30px] px-[30px]">
          <h2
            className={`
              w-full text-center
              ${T.font.family}
              ${T.font.weight.bold}
              text-[32px]
              leading-[39px]
              mb-[30px]
            `}
            style={{ color: secondaryColor }}
          >
            Important Dates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* READY TO APPLY */}
      <div
        className="
          w-full
          flex flex-col lg:flex-row
          items-start
          gap-5
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            w-full lg:flex-1
            rounded-[12px] 
            overflow-hidden
          "
        >
          <img loading="lazy" decoding="async"
            src={readytoapply}
            className="w-full h-[389px] object-cover rounded-[12px]"
          />
        </div>
        {/* RIGHT CONTENT */}
        <div
          className="
            w-full lg:flex-1
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
      `}
            style={{ color: secondaryColor }}
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
            {readyToApplyDesc || "Start your application today and take the first step toward an exceptional nursing education. Our admissions team is here to support you throughout the process."}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-[16px]">
            <Button
              bg={ctaButtonBg}
              color="white"
              rounded="8px"
              textSize="text-[14px]"
              leading="leading-[20px]"
              width="206px"
              height="44px"
              customPadding="px-[22px] py-[12px]"
              weight={T.font.weight.bold}
              borderWidth="0"
            >
              Start Your Application
            </Button>

            <Button
              bg={T.color.background.white}
              color={secondaryColor}
              rounded="8px"
              textSize="text-[14px]"
              leading="leading-[20px]"
              width="206px"
              height="44px"
              customPadding="px-[22px] py-[12px]"
              borderColor={secondaryColor}
              borderWidth="1.5px"
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
