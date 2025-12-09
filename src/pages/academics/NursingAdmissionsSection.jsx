import React from "react";
import { T } from "../../theme";

import submitdocicon from "../../assets/academics/submitdocicon.svg";
import appreview from "../../assets/academics/appreview.svg";
import interviewicon from "../../assets/academics/interviewicon.svg";
import enrollmenticon from "../../assets/academics/enrollmenticon.svg";
import nursingcareer from "../../assets/academics/readytoapply.svg";
import checkIcon from "../../assets/academics/roundedcheck.svg";
import Button from "../../components/ui/button";

const processSteps = [
  {
    step: "Step 1",
    title: "Submit Application",
    desc: "Complete your online application and submit required documents including transcripts and test scores.",
    timeline: "Timeline: ",
    timelinedescription: "Rolling Admissions",
    icon: submitdocicon,
  },
  {
    step: "Step 2",
    title: "Application Review",
    desc: "Our admissions committee carefully reviews your academic achievements and experience.",
    timeline: "Timeline: ",
    timelinedescription: "2–4 Weeks",
    icon: appreview,
  },
  {
    step: "Step 3",
    title: "Interview & Decision",
    desc: "Selected candidates are invited for an interview. Admission decisions typically follow within two weeks.",
    timeline: "Timeline: ",
    timelinedescription: "As Scheduled",
    icon: interviewicon,
  },
  {
    step: "Step 4",
    title: "Enrollment",
    desc: "Accept your offer, submit enrollment deposit, and prepare for orientation and course registration.",
    timeline: "Timeline: ",
    timelinedescription: "Before Start Date",
    icon: enrollmenticon,
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

const NursingAdmissionsSection = () => {
  return (
    <section className={`${T.bg.programCard} pt-[80px] pb-[20px]`}>
      <div className="w-[1440px] max-w-full mx-auto px-[120px] flex flex-col gap-[40px]">
        {/* MAIN TITLE */}
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

        {/* APPLICATION PROCESS */}
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

          <div className="grid grid-cols-4 gap-[23.68px]">
            {processSteps.map((item, i) => (
              <div
                key={i}
                className="
                  w-[282.24px]
                  h-[258px]
                  bg-white
                  rounded-[10px]
                  border
                  p-[20px]
                  grid
                  grid-rows-[auto_auto_auto_1fr_auto]
                "
                style={{ borderColor: T.color.border }}
              >
                {/* ICON */}
                <img
                  src={item.icon}
                  alt=""
                  className="w-[31.58px] h-[31.58px]"
                />

                {/* STEP */}
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

                {/* TITLE */}
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

                {/* DESCRIPTION */}
                <p
                  className={`
                    ${T.font.family}
                    text-[14px]
                    leading-[20px]
                  `}
                  style={{ color: T.color.text.muted }}
                >
                  {item.desc}
                </p>

                {/* TIMELINE */}
                <p
                  className={`
                    ${T.font.family}
                    text-[14px]
                    leading-[20px]
                    self-end 
                    text-[${T.color.secondary}]
                  `}
                >
                  <span className={`${T.font.weight.bold}`}> {item.timeline}</span>
                  {item.timelinedescription}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ADMISSION REQUIREMENTS */}
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

          <div className="grid grid-cols-3 gap-[31.58px]">
            {requirements.map((box, i) => (
              <div
                key={i}
                className="
                  bg-white
                  rounded-[12px]
                  border
                  p-[20px]
                  flex flex-col gap-[12px]
                "
                style={{ borderColor: T.color.border }}
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
                      <img
                        src={checkIcon}
                        alt=""
                        className="w-[17.76px] h-[17.76px]"
                      />
                      <span
                        className={`
                          ${T.font.family}
                          text-[14px]
                          leading-[19.74px]
                        `}
                        style={{ color: T.color.text.muted }}
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

        {/* IMPORTANT DATES */}
        <section className="w-full flex justify-center mt-[40px]">
          <div className="w-[1200px] bg-white rounded-[8px] py-[30px] px-[30px]">
            {/* Heading */}
            <h2
              className={`
                w-full text-center
                ${T.font.family}
                ${T.font.weight.bold}
                text-[32px]
                leading-[39px]
                mb-[20px]
                text-[${T.color.secondary}]
              `}
            >
              Important Dates
            </h2>

            {/* Date Grid */}
            <div className="grid grid-cols-4 gap-x-[23.68px] w-full">
              {dates.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* DATE */}
                  <p
                    className={`
                      ${T.font.family}
                      ${T.font.weight.bold}
                      text-[18px]
                      leading-[22px]
                      text-center
                      mb-[10px]
                    `}
                    style={{ color: T.color.dark }}
                  >
                    {item.date}
                  </p>

                  {/* LABEL */}
                  <p
                    className={`
                      ${T.font.family}
                      text-[14px]
                      leading-[20px]
                      text-center
                    `}
                    style={{ color: T.color.dark + "BF" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* READY TO APPLY BLOCK */}
        <div className="rounded-[12px] p-[24px] grid grid-cols-2 gap-[24px]">
          {/* IMAGE */}
          <img
            src={nursingcareer}
            alt=""
            className="w-[584px] h-[389px] object-cover rounded-[12px]"
          />

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-start gap-[16px] pt-[8px]">
            <h3
              className={`
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[22px]
                leading-[32px]
                text-[${T.color.secondary}]
              `}
            >
              Ready to Apply?
            </h3>

            <p
              className={`
                ${T.font.family}
                text-[14px]
                leading-[20px]
                max-w-[420px]
              `}
              style={{ color: T.color.text.researchMuted }}
            >
              Start your application today and take the first step toward an
              exceptional nursing education. Our admissions team is here to
              support you throughout the process.
            </p>

            <div className="flex gap-[12px] mt-[8px]">
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
      </div>
    </section>
  );
};

export default NursingAdmissionsSection;
