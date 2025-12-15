import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";


const ResearchOverview = () => {
  return (
    <PageSection bg={T.bg.white} paddingClass="py-[80px]">
      {/* Section Heading */}
      <h2
        className={`${T.font.family} font-bold text-[32px] sm:text-[36px] md:text-[42px] mb-10`}
        style={{ color: T.color.text.secondary }}
      >
        Research Overview
      </h2>

      <div className="flex flex-col gap-[30px]">
        {/* Row 1: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {/* Vision Card */}
          <div
            className="p-[30px] sm:p-[40px] rounded-[16px]"
            style={{ background: T.color.background.grey }}
          >
            {/* Icon */}
            <div
              className="
    w-[58px] h-[58px]
    sm:w-[60px] sm:h-[60px]
    bg-[#008C8C]
    rounded-[12px]
    flex items-center justify-center
    mb-5 sm:mb-6
  "
            >
              <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_27_206)">
                  <path d="M5.29129 15.0072C5.19001 14.7344 5.19001 14.4343 5.29129 14.1614C6.27773 11.7696 7.95216 9.72447 10.1023 8.28541C12.2524 6.84635 14.7815 6.07812 17.3687 6.07812C19.956 6.07812 22.485 6.84635 24.6351 8.28541C26.7853 9.72447 28.4597 11.7696 29.4462 14.1614C29.5474 14.4343 29.5474 14.7344 29.4462 15.0072C28.4597 17.3991 26.7853 19.4442 24.6351 20.8832C22.485 22.3223 19.956 23.0905 17.3687 23.0905C14.7815 23.0905 12.2524 22.3223 10.1023 20.8832C7.95216 19.4442 6.27773 17.3991 5.29129 15.0072Z" stroke="white" stroke-width="2.43056" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.369 18.2272C19.3825 18.2272 21.0148 16.5949 21.0148 14.5814C21.0148 12.5678 19.3825 10.9355 17.369 10.9355C15.3554 10.9355 13.7231 12.5678 13.7231 14.5814C13.7231 16.5949 15.3554 18.2272 17.369 18.2272Z" stroke="white" stroke-width="2.43056" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_27_206" x="-1.2146" y="0" width="37.1667" height="37.166" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_206" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_206" result="shape" />
                  </filter>
                </defs>
              </svg>

            </div>


            <h3 className={`${T.font.family} font-bold text-[28px] sm:text-[32px] text-[#223F7F] mb-4`}>
              Vision
            </h3>

            <p
              className={`${T.font.family} text-[16px] sm:text-[18px] leading-[26px]`}
              style={{ color: "rgba(25, 25, 25, 0.75)" }}
            >
              To be a globally recognized research institution advancing healthcare through transformative
              discoveries, innovative technologies, and evidence-based practices that improve patient outcomes
              and community health.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="p-[30px] sm:p-[40px] rounded-[16px]"
            style={{ background: T.color.background.grey }}
          >
            {/* Icon */}
            <div
              className="
    w-[58px] h-[58px]
    sm:w-[60px] sm:h-[60px]
    bg-[#008C8C]
    rounded-[12px]
    flex items-center justify-center
    mb-5 sm:mb-6
  "
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5837 26.7352C21.2955 26.7352 26.7365 21.2943 26.7365 14.5825C26.7365 7.87067 21.2955 2.42969 14.5837 2.42969C7.87189 2.42969 2.43091 7.87067 2.43091 14.5825C2.43091 21.2943 7.87189 26.7352 14.5837 26.7352Z" stroke="white" stroke-width="2.43056" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.5834 21.8743C18.6105 21.8743 21.8751 18.6098 21.8751 14.5827C21.8751 10.5556 18.6105 7.29102 14.5834 7.29102C10.5563 7.29102 7.29175 10.5556 7.29175 14.5827C7.29175 18.6098 10.5563 21.8743 14.5834 21.8743Z" stroke="white" stroke-width="2.43056" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.5831 17.0135C15.9255 17.0135 17.0137 15.9253 17.0137 14.5829C17.0137 13.2405 15.9255 12.1523 14.5831 12.1523C13.2408 12.1523 12.1526 13.2405 12.1526 14.5829C12.1526 15.9253 13.2408 17.0135 14.5831 17.0135Z" stroke="white" stroke-width="2.43056" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>


            <h3 className={`${T.font.family} font-bold text-[28px] sm:text-[32px] text-[#223F7F] mb-4`}>
              Mission
            </h3>

            <p
              className={`${T.font.family} text-[16px] sm:text-[18px] leading-[26px]`}
              style={{ color: "rgba(25, 25, 25, 0.75)" }}
            >
              To foster a culture of scientific inquiry, promote interdisciplinary collaboration, support
              faculty and student research excellence, and translate discoveries into practical solutions for
              healthcare challenges facing our communities.
            </p>
          </div>
        </div>

        {/* Row 2: Dean Message */}
        <div
          className="p-[30px] sm:p-[40px] rounded-[16px]"
          style={{ background: T.color.background.grey }}
        >
          <h3 className={`${T.font.family} font-bold text-[28px] sm:text-[32px] text-[#223F7F] mb-6`}>
            Message from Dean of Research
          </h3>

          <div
            className={`${T.font.family} text-[16px] sm:text-[18px] space-y-4 mb-10 leading-[26px]`}
            style={{ color: "rgba(25, 25, 25, 0.75)" }}
          >
            <p>
              Welcome to the Research & Innovation wing of ASRAM. Our institution has a proud legacy of
              contributing to medical science through rigorous research, innovative practices, and a commitment to improving healthcare delivery.
            </p>
            <p>
              We provide comprehensive support to our faculty and students through world-class research
              infrastructure, funding opportunities, ethical guidance, and mentorship programs...
            </p>
          </div>

          {/* Bottom Row */}
          <div
            className="h-auto sm:h-[78px] flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-solid pt-6 sm:pt-0"
            style={{ borderColor: T.color.extra.borderResearch }}
          >
            <div className="mb-6 sm:mb-0">
              <h4 className="font-bold text-[18px] text-[#223F7F]">Dr. Arun Sharma</h4>
              <p className="text-[#008C8C] text-[14px] font-medium">
                Dean, Research & Innovation
              </p>
            </div>

            {/* Button */}
            <button
              className="
                bg-[#008C8C]
                hover:bg-[#007A7A]
                text-white
                flex items-center justify-center
                gap-[4px]
                px-[24px]
                py-[12px]
                h-[46px]
                rounded-[10px]
                font-medium
                text-[18px]
                leading-normal
                w-full sm:w-[243px]
                transition-colors
              "
            >
              Read Full Message
              <IconArrowRight
                size={19}
                stroke="white"
                strokeWidth={2}
              />

            </button>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default ResearchOverview;
