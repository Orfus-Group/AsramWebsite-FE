import React from "react";
import { T } from "@/theme";
import CheckMarkIcon from "@/assets/icons/CheckMarkIcon";
import { EnrollmentIcon } from "./NursingAdmissionsSection";

/* ICONS */


export const MeritBasedIcon = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2734 12.7196L16.7684 21.1334C16.7852 21.2325 16.7713 21.3343 16.7286 21.4253C16.6859 21.5162 16.6165 21.592 16.5296 21.6424C16.4427 21.6929 16.3424 21.7156 16.2423 21.7075C16.1421 21.6994 16.0468 21.6609 15.9691 21.5972L12.4362 18.9456C12.2657 18.8182 12.0585 18.7493 11.8456 18.7493C11.6327 18.7493 11.4255 18.8182 11.255 18.9456L7.71615 21.5962C7.6385 21.6598 7.54331 21.6982 7.44328 21.7063C7.34325 21.7144 7.24313 21.6918 7.15627 21.6415C7.06942 21.5912 6.99997 21.5157 6.95718 21.4249C6.9144 21.3341 6.90031 21.2324 6.9168 21.1334L8.41088 12.7196" stroke="white" stroke-width="1.97368" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8424 13.8154C15.1125 13.8154 17.7634 11.1644 17.7634 7.89432C17.7634 4.62421 15.1125 1.97327 11.8424 1.97327C8.57227 1.97327 5.92133 4.62421 5.92133 7.89432C5.92133 11.1644 8.57227 13.8154 11.8424 13.8154Z" stroke="white" stroke-width="1.97368" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);



export const ReservedCategoryIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M15.7892 20.7232V18.7495C15.7892 17.7026 15.3733 16.6986 14.633 15.9583C13.8927 15.218 12.8887 14.8021 11.8418 14.8021H5.92076C4.87385 14.8021 3.86982 15.218 3.12955 15.9583C2.38927 16.6986 1.97339 17.7026 1.97339 18.7495V20.7232"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.88133 10.8548C11.0614 10.8548 12.8287 9.08752 12.8287 6.90745C12.8287 4.72738 11.0614 2.96008 8.88133 2.96008C6.70126 2.96008 4.93396 4.72738 4.93396 6.90745C4.93396 9.08752 6.70126 10.8548 8.88133 10.8548Z"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const ScholarIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M11.8423 1.97339V21.7102"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.7766 4.93384H9.37527C8.45923 4.93384 7.5807 5.29774 6.93296 5.94548C6.28522 6.59322 5.92133 7.47174 5.92133 8.38779C5.92133 9.30383 6.28522 10.1824 6.93296 10.8301C7.5807 11.4778 8.45923 11.8417 9.37527 11.8417H14.3095C15.2255 11.8417 16.1041 12.2056 16.7518 12.8534C17.3995 13.5011 17.7634 14.3796 17.7634 15.2957C17.7634 16.2117 17.3995 17.0902 16.7518 17.738C16.1041 18.3857 15.2255 18.7496 14.3095 18.7496H5.92133"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);




export const EducationLoanIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5.92071 21.7102C5.39725 21.7102 4.89524 21.5023 4.5251 21.1322C4.15496 20.762 3.94702 20.26 3.94702 19.7365V3.94708C3.94702 3.42362 4.15496 2.92161 4.5251 2.55147C4.89524 2.18133 5.39725 1.97339 5.92071 1.97339H13.8154C14.1278 1.97289 14.4372 2.03418 14.7258 2.15376C15.0144 2.27333 15.2765 2.44881 15.497 2.6701L19.0378 6.21089C19.2597 6.43146 19.4357 6.6938 19.5556 6.98276C19.6755 7.27172 19.737 7.58158 19.7365 7.89444V19.7365C19.7365 20.26 19.5286 20.762 19.1584 21.1322C18.7883 21.5023 18.2863 21.7102 17.7628 21.7102H5.92071Z"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8154 1.97339V6.9076C13.8154 7.16933 13.9194 7.42033 14.1045 7.6054C14.2895 7.79047 14.5405 7.89444 14.8023 7.89444H19.7365"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const ApplyAidIcon = ({ className = "" }) => (
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8417 21.7105C17.2919 21.7105 21.7101 17.2922 21.7101 11.8421C21.7101 6.39187 17.2919 1.97363 11.8417 1.97363C6.39151 1.97363 1.97327 6.39187 1.97327 11.8421C1.97327 17.2922 6.39151 21.7105 11.8417 21.7105Z" stroke="#191919" stroke-width="1.97368" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.96985 8.88118C9.20186 8.22164 9.6598 7.66549 10.2626 7.31124C10.8653 6.95699 11.574 6.8275 12.2631 6.9457C12.9522 7.06389 13.5772 7.42216 14.0275 7.95703C14.4777 8.4919 14.7242 9.16886 14.7231 9.86802C14.7231 11.8417 11.7626 12.8285 11.7626 12.8285" stroke="#191919" stroke-width="1.97368" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8417 16.7761H11.8517" stroke="#191919" stroke-width="1.97368" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);



export const CheckRoundIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M11.8417 21.7105C17.2919 21.7105 21.7101 17.2922 21.7101 11.8421C21.7101 6.39187 17.2919 1.97363 11.8417 1.97363C6.39151 1.97363 1.97327 6.39187 1.97327 11.8421C1.97327 17.2922 6.39151 21.7105 11.8417 21.7105Z"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.96985 8.88118L11.7626 12.8285L15.7891 8.88118"
      stroke="currentColor"
      strokeWidth="1.97368"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
            icon={<MeritBasedIcon className="w-[23.68px] h-[23.68px] text-white" />}
            title="Merit-Based Scholarships"
            desc="Scholarships awarded to students based on academic excellence in qualifying examinations."
            eligibility="Top performers in 10+2 or entrance exams"
          />

          <Card
            icon={<ReservedCategoryIcon className="w-[23.68px] h-[23.68px] text-white" />}
            title="Reserved Category Benefits"
            desc="Fee concessions and special provisions for SC/ST/OBC and other reserved categories as per government norms."
            eligibility="Students from reserved categories with valid certificates"
          />

          <Card
  icon={<ScholarIcon className="w-[23.68px] h-[23.68px] text-white" />}
            title="Government Scholarships"
            desc="Various state and central government scholarship schemes available for eligible students."
            eligibility="Based on family income and category"
          />

          <Card
  icon={<EducationLoanIcon className="w-[23.68px] h-[23.68px] text-white" />}
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
                <ScholarIcon className="w-[23.68px] h-[23.68px] text-white" />

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
                <ApplyAidIcon className="w-[23.68px] h-[23.68px]" />

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
          {icon}

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
             <EnrollmentIcon className="w-[17.76px] h-[17.76px] shrink-0" />

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
