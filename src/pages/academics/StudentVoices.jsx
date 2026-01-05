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

export default function StudentVoices({ theme }) {
  const secondaryColor = theme?.secondary || T.color.secondary;

  return (
    <PageSection bg={T.bg.white} sectionClassName="py-[80px]">
      <div className="flex flex-col gap-[40px]">
        {/* SECTION TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[42px]
          `}
          style={{ color: secondaryColor }}
        >
          Student Voices
        </h2>

        {/* RESPONSIVE VOICES GRID */}
        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-5
            w-full
          "
        >
          {voices.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[8px]
                p-[30px]
                flex flex-col
                h-full
              "
              style={{
                backgroundColor: "#F7F9FC",
                border: "0.99px solid #E5E5E5"
              }}
            >
              {/* QUOTE ICON */}
              <img src={IconQuote} className="w-[39.47px] h-[39.47px] mb-[20px]" alt="" style={theme?.iconFilter ? { filter: theme.iconFilter } : {}} />


              {/* TESTIMONIAL */}
              <p
                className={`
                  ${T.font.family}
                  text-[18px]
                  leading-[26px]
                  mb-[30px]
                `}
                style={{ color: "#191919BF" }}
              >
                "{item.text}"
              </p>

              {/* NAME & PROGRAM */}
              <div className="mt-auto">
                <div
                  className="w-full h-[0.99px] mb-[20px]"
                  style={{ backgroundColor: "#E5E5E5" }}
                />

                <div className="flex flex-col gap-[4px]">
                  {/* NAME */}
                  <p
                    className={`
                      ${T.font.family}
                      ${T.font.weight.medium}
                      text-[20px] 
                      leading-[22px]
                    `}
                    style={{ color: secondaryColor }}
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
