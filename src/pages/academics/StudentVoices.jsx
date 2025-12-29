import React from "react";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";




const IconQuote = "/AsramWebsite-FE/assets/icons/IconLeftQuote.svg";



const voices = [
  {
    text:
      "ASRAM has given me not just excellent medical education, but also lifelong friendships and experiences that have shaped who I am today.",
    name: "Priya Sharma",
    program: "MBBS, 3rd Year",
  },
  {
    text:
      "The campus culture is incredible. From sports to cultural events, there's always something happening. The faculty support is outstanding.",
    name: "Rahul Verma",
    program: "B.Sc. Nursing, Final Year",
  },
  {
    text:
      "Living in the hostel has been amazing. The facilities are great, and I've learned so much from my peers. It truly feels like home.",
    name: "Anjali Patel",
    program: "Paramedical, 2nd Year",
  },
];

export default function StudentVoices() {
  return (
    <PageSection bg={T.bg.white} sectionClassName="py-[80px]">
      <div className="flex flex-col gap-[32px]">
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
          Student Voices
        </h2>

        {/* RESPONSIVE VOICES GRID */}
        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-[31.58px]
            w-full
          "
        >
          {voices.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[16px]
                p-[30px]
                flex flex-col
                h-full
              "
              style={{
                backgroundColor: "#eef2f7",
                border: "solid 1px rgba(7, 7, 7, 0.2)"
              }}
            >
              {/* QUOTE ICON */}
              <img src={IconQuote} className="w-[39.47px] h-[39.47px] mb-[12px]" alt="" />


              {/* TESTIMONIAL */}
              <p
                className={`
                  ${T.font.family}
                  text-[18px]
                  leading-[26px]
                  mb-[20px]
                `}
                style={{ color: "#191919BF" }}
              >
                "{item.text}"
              </p>

              {/* NAME & PROGRAM */}
              <div className="mt-auto">
                <div
                  className="w-full h-[0.99px]"
                  style={{ backgroundColor: T.color.border }}
                />

                <div className="flex flex-col gap-[4px] pt-[12px]">
                  {/* NAME */}
                  <p
                    className={`
                      ${T.font.family}
                      ${T.font.weight.medium}
                      text-[20px] 
                      text-[#223F7F]
                      leading-[22px]
                    `}
                  >
                    {item.name}
                  </p>

                  {/* PROGRAM */}
                  <p
                    className={`
                      ${T.font.family}
                      text-[14px]
                      font-regular
                      leading-[20px]
                    `}
                    style={{ color: T.color.dark + "BF" }}
                  >
                    {item.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
