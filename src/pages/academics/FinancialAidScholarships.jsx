import React from "react";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";

const IconCheckMark = "/AsramWebsite-FE/assets/icons/CheckMarkIcon.svg";
const IconMeritBased = "/AsramWebsite-FE/assets/icons/IconMeritBased.svg";
const IconReservedCategory = "/AsramWebsite-FE/assets/icons/IconReservedCategory.svg";
const IconScholar = "/AsramWebsite-FE/assets/icons/IconScholar.svg";
const IconEducationLoan = "/AsramWebsite-FE/assets/icons/IconEducationLoan.svg";
const IconApplyAid = "/AsramWebsite-FE/assets/icons/IconApplyAid.svg";
const IconCheckRound = "/AsramWebsite-FE/assets/icons/IconCheckRound.svg";
const IconEnrollmentTeal = "/AsramWebsite-FE/assets/icons/IconEnrollmentTeal.svg";

/* ICONS REMOVED - NOW USING PUBLIC SVG PATHS */

const stats = [
  { value: "90%", label: "Students Receive Aid" },
  { value: "$12M+", label: "Annual Scholarships" },
  { value: "$15K", label: "Average Award" },
  { value: "100+", label: "Scholarship Programs" },
];

export default function FinancialAidScholarships({ theme }) {
  const primaryColor = theme?.primary || T.color.primary;
  const secondaryColor = theme?.secondary || T.color.secondary;
  const bulletColor = theme?.bulletColor || primaryColor;

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
    <PageSection bg={T.bg.sectionCard} sectionClassName="py-[60px] md:py-[80px]">
      <div className="flex flex-col gap-[20px]">
        {/* SECTION TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[42px]
            mb-5
          `}
          style={{ color: secondaryColor }}
        >
          Financial Aid & Scholarships
        </h2>

        {/* ⭐ STATS GRID — RESPONSIVE */}
        <div
          className={`
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-5
            w-full
          `}
        >
          {stats.map((item, i) => (
            <div
              key={i}
              className={`
                bg-white
                ${theme?.useNewStatsGrid ? "h-[157px] rounded-[9.9px] p-[40px] gap-[12px]" : "h-[100.66px] rounded-[9.87px] gap-[6px]"}
                flex flex-col items-center justify-center
              `}
              style={{
                border: theme?.useNewStatsGrid ? "1px solid rgba(7, 7, 7, 0.2)" : "1px solid #07070733"
              }}
            >
              {theme?.useNewStatsGrid ? (
                <>
                  <h3
                    className={`
                      ${T.font.family}
                      mb-[10px]
                      text-[32px]
                      leading-[23.68px]
                      ${T.font.weight.semibold}
                      text-center
                    `}
                    style={{ color: "#223F7F" }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className={`${T.font.family} text-[#191919BF] font-regular text-[18px] leading-[19.74px] text-center`}
                  >
                    {item.label}
                  </p>
                </>
              ) : (
                <>
                  <p
                    className={`
                      ${T.font.family}
                      text-[15.79px]
                      leading-[23.68px]
                      ${T.font.weight.semibold}
                    `}
                    style={{ color: primaryColor }}
                  >
                    {item.value}
                  </p>

                  <p
                    className={`${T.font.family} text-[#191919BF] font-regular text-[13.82px] leading-[19.74px]`}
                  >
                    {item.label}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* ⭐ 2x2 MAIN CARDS — RESPONSIVE */}
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-2
            gap-5
            w-full
          "
        >
          <Card
            icon={<img src={IconMeritBased} className="w-[23.68px] h-[23.68px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />}
            title="Merit-Based Scholarships"
            desc="Scholarships awarded to students based on academic excellence in qualifying examinations."
            eligibility="Top performers in 10+2 or entrance exams"
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            iconFilter={theme?.iconFilter}
          />

          <Card
            icon={<img src={IconMeritBased} className="w-[23.68px] h-[23.68px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />}
            title="Reserved Category Benefits"
            desc="Fee concessions and special provisions for SC/ST/OBC and other reserved categories as per government norms."
            eligibility="Students from reserved categories with valid certificates"
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            iconFilter={theme?.iconFilter}
          />

          <Card
            icon={<img src={IconMeritBased} className="w-[23.68px] h-[23.68px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />}
            title="Government Scholarships"
            desc="Various state and central government scholarship schemes available for eligible students."
            eligibility="Based on family income and category"
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            iconFilter={theme?.iconFilter}
          />

          <Card
            icon={<img src={IconMeritBased} className="w-[23.68px] h-[23.68px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />}
            title="Education Loans"
            desc="Tie-ups with leading banks for easy education loan processing at competitive interest rates."
            eligibility="All admitted students"
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            iconFilter={theme?.iconFilter}
          />
        </div>

        {/* ⭐ BOTTOM TWO LARGE CARDS — RESPONSIVE */}
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-2
            gap-5
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
                style={{ backgroundColor: primaryColor }}
              >
                <img src={IconScholar} className="w-[23.68px] h-[23.68px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />

              </div>

              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[23.68px]
                  leading-[33.16px]
                `}
                style={{ color: secondaryColor }}
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
              `}
              style={{ color: secondaryColor }}
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
                    style={{ backgroundColor: bulletColor }}
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
                style={{ backgroundColor: primaryColor }}
              >
                <img src={IconApplyAid} className="w-[23.68px] h-[23.68px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />

              </div>

              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[23.68px]
                  leading-[33.16px]
                `}
                style={{ color: secondaryColor }}
              >
                How to Apply for Aid
              </h3>
            </div>

            {steps.map((step, i) => (
              <div key={i} className="flex gap-[10px] items-start">
                <span
                  className={`
    ${T.font.family}
    inline-flex
    items-center
    justify-center
    w-[32px] h-[32px]
    aspect-square
    rounded-full
    text-[13.82px]
    font-normal
  `}
                  style={{
                    backgroundColor: "#EEF2F7",
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
    </PageSection>
  );
}

/* ⭐ REUSABLE CARD COMPONENT — RESPONSIVE */
function Card({ icon, title, desc, eligibility, primaryColor = T.color.primary, secondaryColor = T.color.secondary, iconFilter }) {
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
          style={{ backgroundColor: primaryColor }}
        >
          {icon}

        </div>

        <div className="flex flex-col gap-[8px]">
          <h3
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[23.68px]
              leading-[33.16px]
            `}
            style={{ color: secondaryColor }}
          >
            {title}
          </h3>

          <p
            className={`${T.font.family} text-[14px] leading-[20px] max-w-[420px]`}
            style={{ color: "#6B7280" }}
          >
            {desc}
          </p>

          <div className="flex gap-[8px] pt-[4px] items-start">
            <img src={IconEnrollmentTeal} className="w-[17.76px] h-[17.76px] shrink-0" alt="" style={iconFilter ? { filter: iconFilter } : {}} />

            <p className={`${T.font.family} text-[13.82px] leading-[19.74px]`}>
              <span
                className={`${T.font.weight.semibold}`}
                style={{ color: T.color.text.grayish }}
              >
                Eligibility:
              </span>
              &nbsp;
              <span style={{ color: "#6B7280" }}>{eligibility}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
