import React from "react";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";




const QuoteIcon = ({ className = "" }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M26.3156 4.93445C25.4432 4.93445 24.6065 5.28102 23.9896 5.89791C23.3727 6.51481 23.0261 7.3515 23.0261 8.22392V18.0923C23.0261 18.9648 23.3727 19.8015 23.9896 20.4184C24.6065 21.0352 25.4432 21.3818 26.3156 21.3818C26.7518 21.3818 27.1702 21.5551 27.4786 21.8635C27.787 22.172 27.9603 22.5903 27.9603 23.0266V24.6713C27.9603 25.5437 27.6138 26.3804 26.9969 26.9973C26.38 27.6142 25.5433 27.9608 24.6709 27.9608C24.2346 27.9608 23.8163 28.134 23.5079 28.4425C23.1994 28.7509 23.0261 29.1693 23.0261 29.6055V32.895C23.0261 33.3312 23.1994 33.7495 23.5079 34.058C23.8163 34.3664 24.2346 34.5397 24.6709 34.5397C27.2881 34.5397 29.7982 33.5 31.6489 31.6493C33.4996 29.7986 34.5393 27.2886 34.5393 24.6713V8.22392C34.5393 7.3515 34.1927 6.51481 33.5758 5.89791C32.9589 5.28102 32.1222 4.93445 31.2498 4.93445H26.3156Z"
      stroke="#223F7F"
      strokeOpacity="0.2"
      strokeWidth="3.28947"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.22447 4.93445C7.35205 4.93445 6.51536 5.28102 5.89846 5.89791C5.28157 6.51481 4.935 7.3515 4.935 8.22392V18.0923C4.935 18.9648 5.28157 19.8015 5.89846 20.4184C6.51536 21.0352 7.35205 21.3818 8.22447 21.3818C8.66068 21.3818 9.07903 21.5551 9.38747 21.8635C9.69592 22.172 9.86921 22.5903 9.86921 23.0266V24.6713C9.86921 25.5437 9.52264 26.3804 8.90574 26.9973C8.28885 27.6142 7.45216 27.9608 6.57973 27.9608C6.14352 27.9608 5.72518 28.134 5.41673 28.4425C5.10828 28.7509 4.935 29.1693 4.935 29.6055V32.895C4.935 33.3312 5.10828 33.7495 5.41673 34.058C5.72518 34.3664 6.14352 34.5397 6.57973 34.5397C9.197 34.5397 11.7071 33.5 13.5578 31.6493C15.4084 29.7986 16.4482 27.2886 16.4482 24.6713V8.22392C16.4482 7.3515 16.1016 6.51481 15.4847 5.89791C14.8678 5.28102 14.0311 4.93445 13.1587 4.93445H8.22447Z"
      stroke="#223F7F"
      strokeOpacity="0.2"
      strokeWidth="3.28947"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



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
              <QuoteIcon className="w-[39.47px] h-[39.47px] mb-[12px]" />


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
