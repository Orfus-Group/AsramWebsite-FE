// src/sections/academics/WhyChooseNursingSchool.jsx
import React from "react";
import { T } from "@/theme";

import PageSection from "@/features/common/layout/PageContainer";

export const IconHospitalTraining = "/AsramWebsite-FE/assets/icons/IconHospitalTraining.svg";
export const IconArtFacilities = "/AsramWebsite-FE/assets/icons/IconArtFacilities.svg";
export const IconMentorship = "/AsramWebsite-FE/assets/icons/IconMentorship.svg";
export const IconAccredited = "/AsramWebsite-FE/assets/icons/IconAccredited.svg";
export const IconHolisticDev = "/AsramWebsite-FE/assets/icons/IconHolisticDev.svg";
export const IconCareerReady = "/AsramWebsite-FE/assets/icons/IconCareerReady.svg";

const features = [
  {
    icon: IconHospitalTraining,
    title: "Hospital Training",
    desc: "Direct access to ASRAM's comprehensive multispeciality teaching hospital with over 500 beds, providing unmatched clinical exposure across all nursing specialties.",
    tag: "500+ Bed Hospital",
  },
  {
    icon: IconArtFacilities,
    title: "State-of-the-Art Facilities",
    desc: "Modern simulation labs, advanced anatomical models, e-library access, and cutting-edge equipment that mirrors real-world healthcare settings.",
    tag: "10 Acre Campus",
  },
  {
    icon: IconMentorship,
    title: "Personalized Mentorship",
    desc: "With a student-faculty ratio of approximately 7:1, every student receives individual attention, guidance, and support throughout their educational journey.",
    tag: "7:1 Ratio",
  },
  {
    icon: IconAccredited,
    title: "Accredited Excellence",
    desc: "Full recognition from the Indian Nursing Council (INC) and affiliation with Dr. NTR University of Health Sciences ensuring top-tier education standards.",
    tag: "INC Approved",
  },
  {
    icon: IconHolisticDev,
    title: "Holistic Development",
    desc: "Beyond academics—sports facilities, cultural programs, leadership workshops, and community service opportunities shape well-rounded healthcare professionals.",
    tag: "360° Growth",
  },
  {
    icon: IconCareerReady,
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
              <img
                src={item.icon}
                className="w-[28px] h-[28px]"
                alt=""
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
