// src/sections/academics/WhyChooseNursingSchool.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";





const baseProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

/* ----------------------------------
   Hospital Training
---------------------------------- */
export const HospitalTrainingIcon = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 2.3,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.815 8.0592V12.6645"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M16.1186 24.1777V20.7238C16.1186 20.1131 15.876 19.5274 15.4441 19.0956C15.0123 18.6637 14.4266 18.4211 13.8159 18.4211C13.2052 18.4211 12.6196 18.6637 12.1877 19.0956C11.7559 19.5274 11.5133 20.1131 11.5133 20.7238V24.1777"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M16.1186 10.3619H11.5133"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M20.7225 12.6643H23.0251C23.6358 12.6643 24.2215 12.9069 24.6533 13.3387C25.0852 13.7705 25.3278 14.3562 25.3278 14.9669V21.8748C25.3278 22.4855 25.0852 23.0712 24.6533 23.503C24.2215 23.9348 23.6358 24.1774 23.0251 24.1774H4.60408C3.99339 24.1774 3.4077 23.9348 2.97588 23.503C2.54405 23.0712 2.30145 22.4855 2.30145 21.8748V11.513C2.30145 10.9023 2.54405 10.3166 2.97588 9.88475C3.4077 9.45293 3.99339 9.21033 4.60408 9.21033H6.90672"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M20.7227 24.1775V5.75649C20.7227 5.14579 20.4801 4.56011 20.0482 4.12828C19.6164 3.69646 19.0307 3.45386 18.42 3.45386H9.20949C8.5988 3.45386 8.01311 3.69646 7.58129 4.12828C7.14946 4.56011 6.90686 5.14579 6.90686 5.75649V24.1775"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);





/* ===============================
   STATE-OF-THE-ART FACILITIES
================================ */
export const ArtFacilitiesIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M13.8163 8.0592V24.1776"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.45405 20.7236C3.1487 20.7236 2.85586 20.6023 2.63995 20.3864C2.42403 20.1705 2.30273 19.8776 2.30273 19.5723V4.60517C2.30273 4.29983 2.42403 4.00698 2.63995 3.79107C2.85586 3.57516 3.1487 3.45386 3.45405 3.45386H9.21063C10.432 3.45386 11.6034 3.93905 12.467 4.80271C13.3307 5.66636 13.8159 6.83773 13.8159 8.05912C13.8159 6.83773 14.3011 5.66636 15.1647 4.80271C16.0284 3.93905 17.1998 3.45386 18.4212 3.45386H24.1777C24.4831 3.45386 24.7759 3.57516 24.9918 3.79107C25.2078 4.00698 25.329 4.29983 25.329 4.60517V19.5723C25.329 19.8776 25.2078 20.1705 24.9918 20.3864C24.7759 20.6023 24.4831 20.7236 24.1777 20.7236H17.2698C16.3538 20.7236 15.4753 21.0875 14.8275 21.7352C14.1798 22.383 13.8159 23.2615 13.8159 24.1775C13.8159 23.2615 13.452 22.383 12.8043 21.7352C12.1565 21.0875 11.278 20.7236 10.3619 20.7236H3.45405Z"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ===============================
   PERSONALIZED MENTORSHIP
================================ */
export const MentorshipIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M18.4214 24.1777V21.875C18.4214 20.6536 17.9362 19.4823 17.0725 18.6186C16.2089 17.755 15.0375 17.2698 13.8161 17.2698H6.90824C5.68685 17.2698 4.51548 17.755 3.65183 18.6186C2.78817 19.4823 2.30298 20.6536 2.30298 21.875V24.1777"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.422 3.60144C19.4095 3.85746 20.2841 4.43415 20.9085 5.24099C21.5328 6.04783 21.8716 7.03914 21.8716 8.05934C21.8716 9.07953 21.5328 10.0708 20.9085 10.8777C20.2841 11.6845 19.4095 12.2612 18.422 12.5172"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.3294 24.1777V21.875C25.3287 20.8546 24.9891 19.8634 24.3639 19.057C23.7387 18.2505 22.8635 17.6745 21.8755 17.4194"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.3617 12.6644C12.9051 12.6644 14.967 10.6025 14.967 8.05912C14.967 5.5157 12.9051 3.45386 10.3617 3.45386C7.81832 3.45386 5.75647 5.5157 5.75647 8.05912C5.75647 10.6025 7.81832 12.6644 10.3617 12.6644Z"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ===============================
   ACCREDITED EXCELLENCE
================================ */
export const AccreditedIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M17.818 14.8405L19.5622 24.6566C19.5817 24.7722 19.5655 24.891 19.5157 24.9971C19.4659 25.1032 19.3849 25.1916 19.2835 25.2504C19.1821 25.3092 19.0652 25.3357 18.9483 25.3263C18.8315 25.3169 18.7203 25.272 18.6296 25.1977L14.5079 22.1041C14.309 21.9555 14.0672 21.8751 13.8189 21.8751C13.5705 21.8751 13.3288 21.9555 13.1298 22.1041L9.00118 25.1965C8.9106 25.2707 8.79954 25.3155 8.68284 25.325C8.56613 25.3344 8.44933 25.308 8.348 25.2493C8.24667 25.1907 8.16565 25.1025 8.11573 24.9966C8.06581 24.8907 8.04938 24.7721 8.06862 24.6566L9.81171 14.8405"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8148 16.1184C17.6299 16.1184 20.7227 13.0256 20.7227 9.21051C20.7227 5.39538 17.6299 2.30261 13.8148 2.30261C9.99963 2.30261 6.90686 5.39538 6.90686 9.21051C6.90686 13.0256 9.99963 16.1184 13.8148 16.1184Z"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ===============================
   HOLISTIC DEVELOPMENT
================================ */
export const HolisticDevIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>


    <path d="M12.684 3.24071C12.7333 2.9766 12.8735 2.73806 13.0801 2.5664C13.2868 2.39475 13.547 2.30078 13.8157 2.30078C14.0844 2.30078 14.3446 2.39475 14.5513 2.5664C14.758 2.73806 14.8981 2.9766 14.9475 3.24071L16.1575 9.63972C16.2434 10.0947 16.4645 10.5131 16.7919 10.8405C17.1193 11.1679 17.5378 11.389 17.9927 11.4749L24.3917 12.685C24.6558 12.7343 24.8944 12.8744 25.066 13.0811C25.2377 13.2878 25.3316 13.548 25.3316 13.8167C25.3316 14.0854 25.2377 14.3456 25.066 14.5523C24.8944 14.759 24.6558 14.8991 24.3917 14.9484L17.9927 16.1585C17.5378 16.2444 17.1193 16.4655 16.7919 16.7929C16.4645 17.1203 16.2434 17.5387 16.1575 17.9937L14.9475 24.3927C14.8981 24.6568 14.758 24.8953 14.5513 25.067C14.3446 25.2386 14.0844 25.3326 13.8157 25.3326C13.547 25.3326 13.2868 25.2386 13.0801 25.067C12.8735 24.8953 12.7333 24.6568 12.684 24.3927L11.4739 17.9937C11.388 17.5387 11.1669 17.1203 10.8395 16.7929C10.5122 16.4655 10.0937 16.2444 9.63875 16.1585L3.23973 14.9484C2.97562 14.8991 2.73709 14.759 2.56543 14.5523C2.39377 14.3456 2.2998 14.0854 2.2998 13.8167C2.2998 13.548 2.39377 13.2878 2.56543 13.0811C2.73709 12.8744 2.97562 12.7343 3.23973 12.685L9.63875 11.4749C10.0937 11.389 10.5122 11.1679 10.8395 10.8405C11.1669 10.5131 11.388 10.0947 11.4739 9.63972L12.684 3.24071Z" stroke="white" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M23.0264 2.30078V6.90604" stroke="white" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.3299 4.60547H20.7246" stroke="white" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.60537 25.3279C5.87707 25.3279 6.908 24.297 6.908 23.0253C6.908 21.7536 5.87707 20.7227 4.60537 20.7227C3.33366 20.7227 2.30273 21.7536 2.30273 23.0253C2.30273 24.297 3.33366 25.3279 4.60537 25.3279Z" stroke="white" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />

  </svg>
);

/* ===============================
   CAREER READY
================================ */
export const CareerReadyIcon = ({ className = "" }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M13.8161 25.3289C20.1747 25.3289 25.3293 20.1743 25.3293 13.8158C25.3293 7.45723 20.1747 2.30261 13.8161 2.30261C7.45759 2.30261 2.30298 7.45723 2.30298 13.8158C2.30298 20.1743 7.45759 25.3289 13.8161 25.3289Z"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8163 20.7237C17.6315 20.7237 20.7242 17.631 20.7242 13.8159C20.7242 10.0007 17.6315 6.90796 13.8163 6.90796C10.0012 6.90796 6.90845 10.0007 6.90845 13.8159C6.90845 17.631 10.0012 20.7237 13.8163 20.7237Z"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8164 16.1187C15.0881 16.1187 16.1191 15.0878 16.1191 13.8161C16.1191 12.5444 15.0881 11.5134 13.8164 11.5134C12.5447 11.5134 11.5138 12.5444 11.5138 13.8161C11.5138 15.0878 12.5447 16.1187 13.8164 16.1187Z"
      stroke="white"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



const features = [
  {
    Icon: HospitalTrainingIcon,
    title: "Hospital Training",
    desc: "Direct access to ASRAM's comprehensive multispeciality teaching hospital with over 500 beds, providing unmatched clinical exposure across all nursing specialties.",
    tag: "500+ Bed Hospital",
  },
  {
    Icon: ArtFacilitiesIcon,
    title: "State-of-the-Art Facilities",
    desc: "Modern simulation labs, advanced anatomical models, e-library access, and cutting-edge equipment that mirrors real-world healthcare settings.",
    tag: "10 Acre Campus",
  },
  {
    Icon: MentorshipIcon,
    title: "Personalized Mentorship",
    desc: "With a student-faculty ratio of approximately 7:1, every student receives individual attention, guidance, and support throughout their educational journey.",
    tag: "7:1 Ratio",
  },
  {
    Icon: AccreditedIcon,
    title: "Accredited Excellence",
    desc: "Full recognition from the Indian Nursing Council (INC) and affiliation with Dr. NTR University of Health Sciences ensuring top-tier education standards.",
    tag: "INC Approved",
  },
  {
    Icon: HolisticDevIcon,
    title: "Holistic Development",
    desc: "Beyond academics—sports facilities, cultural programs, leadership workshops, and community service opportunities shape well-rounded healthcare professionals.",
    tag: "360° Growth",
  },
  {
    Icon: CareerReadyIcon,
    title: "Career-Ready Graduates",
    desc: "Our curriculum balances theory with extensive practical training, ensuring graduates are confident, competent, and ready for diverse nursing roles.",
    tag: "95% Employability",
  },
];

export default function WhyChooseNursingSchool() {
  return (
    <PageSection bg={T.bg.white} paddingClass="py-[80px]">

      {/* SECTION TITLE */}
      <h2
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[42px]
          leading-[46px]
          text-[${T.color.secondary}]
          mb-[40px]
        `}
      >
        Why Choose Our Nursing School
      </h2>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-[30px]
          w-full
        "
      >
        {features.map((item, i) => (
          <div
            key={i}
            className="
              w-full
              h-[430.16px]
              bg-[#EEF2F7]
              rounded-[8px]
              p-[30px]
              flex
              flex-col
              justify-between
              border
              border-[#1A18181A]
            "
          >
            {/* ICON */}
            <div
              className="
                w-[63.16px] h-[63.16px]
                flex items-center justify-center
                rounded-[9.87px]
              "
              style={{ backgroundColor: T.color.primary }}
            >
              <item.Icon
                className="w-[28px] h-[28px]"
                color="#FFFFFF"
                strokeWidth={2.3}
              />

            </div>

            {/* TITLE */}
            <h3
              className={`
                mt-[20px]
                ${T.font.family}
                ${T.font.weight.semibold}
                text-[24px]
                leading-[24px]
                text-[${T.color.secondary}]
              `}
            >
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className={`
                mt-[14px]
                ${T.font.family}
                font.regular
                text-[18px]
                leading-[26px]
              `}
              style={{ color: T.color.text.muted }}
            >
              {item.desc}
            </p>

            {/* TAG */}
            <div className="mt-[20px]">
              <span
                className={`
                  inline-flex items-center justify-center
                  px-[16px] py-[6px]
                  w-[193px] h-[48px]
                  rounded-[8px]
                  border
                  text-[14px]
                  ${T.font.family}
                  ${T.font.weight.medium}
                `}
                style={{
                  border: "1px solid #07070733",
                  backgroundColor: T.color.background.white,
                  color: T.color.primary,
                }}
              >
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
