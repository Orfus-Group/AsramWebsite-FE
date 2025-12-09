import React from "react";
import { T } from "../../theme";

import hospitaltraining from "../../assets/academics/hospitaltraining.svg";
import artFacilities from "../../assets/academics/art-facilities.svg";
import mentorship from "../../assets/academics/mentorship.svg";
import accredited from "../../assets/academics/accredited.svg";
import holisticdev from "../../assets/academics/holisticdev.svg";
import careerready from "../../assets/academics/careerready.svg";

const features = [
  { icon: hospitaltraining, title: "Hospital Training", desc: "Direct access to ASRAM's comprehensive multispeciality teaching hospital with over 500 beds, providing unmatched clinical exposure across all nursing specialties.", tag: "500+ Bed Hospital" },
  { icon: artFacilities, title: "State-of-the-Art Facilities", desc: "Modern simulation labs, advanced anatomical models, e-library access, and cutting-edge equipment that mirrors real-world healthcare settings.", tag: "10 Acre Campus" },
  { icon: mentorship, title: "Personalized Mentorship", desc: "With a student-faculty ratio of approximately 7:1, every student receives individual attention, guidance, and support throughout their educational journey.", tag: "7:1 Ratio" },
  { icon: accredited, title: "Accredited Excellence", desc: "Full recognition from the Indian Nursing Council (INC) and affiliation with Dr. NTR University of Health Sciences ensuring top-tier education standards.", tag: "INC Approved" },
  { icon: holisticdev, title: "Holistic Development", desc: "Beyond academics—sports facilities, cultural programs, leadership workshops, and community service opportunities shape well-rounded healthcare professionals.", tag: "360° Growth" },
  { icon: careerready, title: "Career-Ready Graduates", desc: "Our curriculum balances theory with extensive practical training, ensuring graduates are confident, competent, and ready for diverse nursing roles.", tag: "95% Employability" },
];

export default function WhyChooseNursingSchool() {
  return (
    <section className={`w-full ${T.bg.white} pt-[80px]`}>
      <div className="w-[1200px] mx-auto flex flex-col gap-[40px]">

        {/* SECTION TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[46px]
            text-[${T.color.secondary}]
          `}
        >
          Why Choose Our Nursing School
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-[30px]">

          {features.map((item, i) => (
            <div
              key={i}
              className="
                w-[379px]
                h-[430.16px]
                bg-[#F7F9FC]
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
                <img src={item.icon} className="w-[28px] h-[28px]" />
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
                    borderColor: T.color.border,
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
      </div>
    </section>
  );
}
