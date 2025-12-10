import React from "react";
import { T } from "../../theme";

/* ICONS */
import meritbased from "../../assets/academics/meritbased.svg";
import reservedcategory from "../../assets/academics/reservedcategory.svg";
import scholar from "../../assets/academics/scholar.svg";
import educationloans from "../../assets/academics/educationloans.svg";
import applyIcon from "../../assets/academics/ask.svg";
import checkIcon from "../../assets/academics/roundedcheck.svg";

const stats = [
  { value: "90%", label: "Students Receive Aid" },
  { value: "$12M+", label: "Annual Scholarships" },
  { value: "$15K", label: "Average Award" },
  { value: "100+", label: "Scholarship Programs" },
];

export default function FinancialAidScholarships() {
  const steps = [
    {
      title: "Check Eligibility",
      description:
        "Review the eligibility criteria for different scholarship and aid programs.",
    },
    {
      title: "Gather Documents",
      description:
        "Prepare income certificates, caste certificates, mark sheets, and other required documents.",
    },
    {
      title: "Submit Application",
      description:
        "Fill out the financial aid application form during or after the admission process.",
    },
    {
      title: "Await Approval",
      description:
        "The committee will review your application and notify you of the decision.",
    },
  ];

  return (
    <section className={`${T.bg.programCard} w-full py-[80px] flex justify-center`}>
      {/* ⭐ UNIFIED BASELINE CONTAINER (Matches Hero + Header) */}
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-[120px]
          flex flex-col
          gap-[40px]
        "
      >
        {/* SECTION TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[42px]
            text-[${T.color.secondary}]
          `}
        >
          Financial Aid & Scholarships
        </h2>

        {/* ⭐ STATS GRID — RESPONSIVE */}
        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-[23.68px]
            w-full
          "
        >
          {stats.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                h-[100.66px]
                rounded-[9.87px]
                flex flex-col items-center justify-center gap-[6px]
              "
              style={{ border: `1px solid ${T.color.border}` }}
            >
              <p
                className={`
                  ${T.font.family}
                  text-[15.79px]
                  leading-[23.68px]
                  ${T.font.weight.semibold}
                `}
                style={{ color: T.color.primary }}
              >
                {item.value}
              </p>

              <p
                className={`${T.font.family} text-[13.82px] leading-[19.74px]`}
                style={{ color: T.color.text.muted }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ⭐ 2x2 MAIN CARDS — RESPONSIVE */}
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-2
            gap-[31.58px]
            w-full
          "
        >
          <Card
            icon={meritbased}
            title="Merit-Based Scholarships"
            desc="Scholarships awarded to students based on academic excellence in qualifying examinations."
            eligibility="Top performers in 10+2 or entrance exams"
          />

          <Card
            icon={reservedcategory}
            title="Reserved Category Benefits"
            desc="Fee concessions and special provisions for SC/ST/OBC and other reserved categories as per government norms."
            eligibility="Students from reserved categories with valid certificates"
          />

          <Card
            icon={scholar}
            title="Government Scholarships"
            desc="Various state and central government scholarship schemes available for eligible students."
            eligibility="Based on family income and category"
          />

          <Card
            icon={educationloans}
            title="Education Loans"
            desc="Tie-ups with leading banks for easy education loan processing at competitive interest rates."
            eligibility="All admitted students"
          />
        </div>

        {/* ⭐ BOTTOM TWO LARGE CARDS — RESPONSIVE */}
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-2
            gap-[31.58px]
            w-full
          "
        >
          {/* FEE STRUCTURE */}
          <div
            className="bg-white rounded-[9.87px] p-[31.58px] flex flex-col gap-[16px]"
            style={{ border: `1px solid ${T.color.border}` }}
          >
            <div className="flex items-center gap-[15.79px]">
              <div
                className="
                  w-[47.37px] h-[47.37px]
                  rounded-[9.87px]
                  flex items-center justify-center shrink-0
                "
                style={{ backgroundColor: T.color.primary }}
              >
                <img src={scholar} className="w-[23.68px] h-[23.68px]" />
              </div>

              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[23.68px]
                  leading-[33.16px]
                  text-[${T.color.secondary}]
                `}
              >
                Fee Structure
              </h3>
            </div>

            <p
              className={`${T.font.family} text-[15.79px] leading-[27.63px]`}
              style={{ color: T.color.text.muted }}
            >
              ASRAM School of Nursing offers competitive and transparent fee
              structures for all programs. Fees are set in accordance with
              university and regulatory body guidelines.
            </p>

            <p
              className={`
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[19.74px]
                leading-[29.61px]
                text-[${T.color.secondary}]
              `}
            >
              Payment Options
            </p>

            <ul className="flex flex-col gap-[10px]">
              {[
                "Semester-wise fee payment structure",
                "Installment options available",
                "Online payment gateway for convenience",
                "Fee refund policy as per university norms",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-[8px]">
                  <span
                    className="w-[7.89px] h-[7.89px] rounded-full mt-[10px]"
                    style={{ backgroundColor: T.color.primary }}
                  ></span>

                  <span
                    className={`${T.font.family} text-[15.79px] leading-[27.63px]`}
                    style={{ color: T.color.text.muted }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* HOW TO APPLY */}
          <div
            className="bg-white rounded-[9.87px] p-[31.58px] flex flex-col gap-[18px]"
            style={{ border: `1px solid ${T.color.border}` }}
          >
            <div className="flex items-center gap-[15.79px]">
              <div
                className="
                  w-[47.37px] h-[47.37px]
                  rounded-[9.87px]
                  flex items-center justify-center shrink-0
                "
                style={{ backgroundColor: T.color.dark + "1A" }}
              >
                <img src={applyIcon} className="w-[23.68px] h-[23.68px]" />
              </div>

              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[23.68px]
                  leading-[33.16px]
                  text-[${T.color.secondary}]
                `}
              >
                How to Apply for Aid
              </h3>
            </div>

            {steps.map((step, i) => (
              <div key={i} className="flex gap-[10px] items-start">
                <span
                  className={`
                    ${T.font.family}
                    font-normal
                    text-[13.82px]
                    leading-[19.74px]
                    flex items-center justify-center
                    w-[31.58px] h-[31.58px]
                    rounded-full
                  `}
                  style={{
                    backgroundColor: T.color.background.programCard,
                    color: T.color.dark,
                  }}
                >
                  {i + 1}
                </span>

                <div className="flex flex-col">
                  <span
                    className={`
                      ${T.font.family}
                      ${T.font.weight.semibold}
                      text-[15.79px]
                      leading-[23.68px]
                      text-[${T.color.dark}]
                    `}
                  >
                    {step.title}
                  </span>

                  <p
                    className={`
                      ${T.font.family}
                      text-[15.79px]
                      leading-[23.68px]
                      mt-[2px]
                    `}
                    style={{ color: T.color.dark + "BF" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ⭐ REUSABLE CARD COMPONENT — RESPONSIVE */
function Card({ icon, title, desc, eligibility }) {
  return (
    <div
      className="bg-white rounded-[9.87px] p-[30px] border flex flex-col gap-[12px]"
      style={{ borderColor: T.color.border }}
    >
      <div className="flex gap-[15.79px] items-start">
        <div
          className="
            w-[55.26px] h-[55.26px] rounded-[9.87px]
            flex items-center justify-center shrink-0
          "
          style={{ backgroundColor: T.color.primary }}
        >
          <img src={icon} alt="" className="w-[23.68px] h-[23.68px]" />
        </div>

        <div className="flex flex-col gap-[8px]">
          <h3
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[23.68px]
              leading-[33.16px]
              text-[${T.color.secondary}]
            `}
          >
            {title}
          </h3>

          <p
            className={`${T.font.family} text-[14px] leading-[20px] max-w-[420px]`}
            style={{ color: T.color.text.muted }}
          >
            {desc}
          </p>

          <div className="flex gap-[8px] pt-[4px] items-start">
            <img src={checkIcon} className="w-[17.76px] h-[17.76px] mt-[2px]" />

            <p className={`${T.font.family} text-[13.82px] leading-[19.74px]`}>
              <span
                className={`${T.font.weight.semibold}`}
                style={{ color: T.color.text.grayish }}
              >
                Eligibility:
              </span>
              &nbsp;
              <span style={{ color: T.color.text.muted }}>{eligibility}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
