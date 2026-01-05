import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconIcmrSts = "/AsramWebsite-FE/assets/icons/IconIcmrSts.svg";
const IconUgDissertation = "/AsramWebsite-FE/assets/icons/IconUgDissertation.svg";
const IconPgThesis = "/AsramWebsite-FE/assets/icons/IconPgThesis.svg";
const IconResearchMentorship = "/AsramWebsite-FE/assets/icons/IconResearchMentorship.svg";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";

const defaultPrograms = [
  // ... (keep existing as default) ...
];

const defaultForumStats = [
  { value: "250+", label: "Active Members" },
  { value: "12+", label: "Annual Workshops" },
  { value: "Monthly", label: "Journal Clubs", isText: true } // isText for non-animated
];

const ResearchStudentResearch = ({
  iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
  buttonConfig = { bg: "#008C8C" },
  programs,
  forumTitle = "ASRAM Student Research Forum",
  forumDesc = "Join 250+ active members in our vibrant research community. Participate in monthly journal clubs, quarterly workshops, and annual symposiums.",
  forumStats
}) => {
  const programsToRender = programs || defaultPrograms;
  const statsToRender = forumStats || defaultForumStats;

  return (
    <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
      {/* ... Header ... */}
      <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
        Student Research
      </h2>

      {/* Row 1: Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 w-full">
        {programsToRender.map((item, index) => (
          <div
            style={{ border: "0.9px solid rgba(7, 7, 7, 0.2)" }}
            key={index}
            className="bg-white rounded-[9.4px] p-[20px] flex flex-col items-start h-full min-h-[215px]"
          >
            {/* ... icon logic ... */}
            <div
              className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-5 shrink-0`}
              style={{ backgroundColor: iconConfig.bg }}
            >
              {React.cloneElement(item.icon, {
                style: { filter: iconConfig.iconFilter },
                className: iconConfig.iconSizeClass || item.icon.props.className
              })}
            </div>

            <h3 title={item.title} className={`${T.font.family} font-medium text-[18px] text-[#223F7F] mb-3 leading-snug min-h-[50px] lg:min-h-0 flex items-center`}>
              {item.title}
            </h3>

            <p className={`${T.font.family} text-[14px] font-regular text-[rgba(25,25,25,0.75)] leading-[1.43]`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Row 2: Student Research Forum Banner */}
      <div className="bg-white rounded-[12px] px-[24px] md:px-[37.5px] pt-[24px] md:pt-[37.5px] pb-[20px] md:pb-[30px] mb-[40px] ">
        {/* TITLE */}
        <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
          {forumTitle}
        </h3>

        {/* DESCRIPTION + BUTTON ROW */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[32px] mb-[20px]">
          <p
            className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] flex-1`}
          >
            {forumDesc}
          </p>

          <button
            className="text-white px-8 py-3 rounded-[6px] font-medium text-[18px] transition-colors shrink-0 hover:opacity-90"
            style={{ backgroundColor: "#223F7F" }}
          >
            Join Forum
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-30">
          {statsToRender.map((stat, index) => (
            <div key={index}>
              {stat.isText ? (
                <h4 className={`${T.font.family} font-bold text-[24px] text-[#333] mb-1`}>
                  {stat.value}
                </h4>
              ) : (
                <AnimatedStatValue
                  value={stat.value}
                  className={`${T.font.family} font-semibold text-[22px] text-[#191919] mb-1`}
                />
              )}
              <p className="text-[14px] font-regular text-[#191919]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Button */}
      <div className="flex justify-center">
        <button
          className="hover:opacity-90 text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors"
          style={{ backgroundColor: "#223F7F" }}
        >
          Explore Student Research Opportunities
          <span><IconArrowRightWhite size={19} /></span>
        </button>
      </div>

    </PageSection>
  );
};

export default ResearchStudentResearch;
