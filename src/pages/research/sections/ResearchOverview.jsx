import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight, IconVision, IconMission } from "@/assets/icons";


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
              <IconVision />

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
              <IconMission />

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
