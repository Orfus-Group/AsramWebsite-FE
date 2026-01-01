import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconIcmrSts = "/AsramWebsite-FE/assets/icons/IconIcmrSts.svg";
const IconUgDissertation = "/AsramWebsite-FE/assets/icons/IconUgDissertation.svg";
const IconPgThesis = "/AsramWebsite-FE/assets/icons/IconPgThesis.svg";
const IconResearchMentorship = "/AsramWebsite-FE/assets/icons/IconResearchMentorship.svg";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";

const programs = [
  {
    title: "ICMR-STS Program",
    desc: "Short-term studentship for MBBS students with ₹10,000 stipend and ICMR certificate.",
    icon: <img src={IconIcmrSts} className="w-[27px] h-[27px]" alt="" /> // Badge
  },
  {
    title: "UG Dissertation Research",
    desc: "Mandatory research projects for final year students with faculty mentorship.",
    icon: <img src={IconUgDissertation} className="w-[27px] h-[27px]" alt="" /> // Book/Open
  },
  {
    title: "PG Thesis Support",
    desc: "Comprehensive support for MD/MS/MSc thesis with funding up to ₹50,000.",
    icon: <img src={IconPgThesis} className="w-[27px] h-[27px]" alt="" /> // Graduation Cap
  },
  {
    title: "Research Mentorship Program",
    desc: "One-on-one pairing with experienced faculty for research guidance.",
    icon: <img src={IconResearchMentorship} className="w-[27px] h-[27px]" alt="" /> // People/Mentorship
  }
];

const ResearchStudentResearch = ({
  iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
  buttonConfig = { bg: "#008C8C" },
}) => {
  return (
    <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
      <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
        Student Research
      </h2>

      {/* Row 1: Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-10">
        {programs.map((item, index) => (
          <div style={{ border: "1px solid #07070733" }} key={index} className="bg-white rounded-[9.3px] p-[24px] md:p-[30px] flex flex-col items-start h-full shadow-sm transition-shadow">
            <div
              className={`${iconConfig.sizeClass || "w-[48px] h-[48px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-5 shrink-0`}
              style={{ backgroundColor: iconConfig.bg }}
            >
              {React.cloneElement(item.icon, {
                style: { filter: iconConfig.iconFilter },
                className: iconConfig.iconSizeClass || item.icon.props.className
              })}
            </div>

            <h3 className={`${T.font.family} font-medium text-[18px] text-[#223F7F] mb-3 leading-snug`}>
              {item.title}
            </h3>

            <p className={`${T.font.family} text-[14px] font-regular text-[#191919BF] leading-[20px]`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Row 2: Student Research Forum Banner */}
      <div className="bg-white rounded-[12px] px-[24px] md:px-[37.5px] pt-[24px] md:pt-[37.5px] pb-[20px] md:pb-[30px] mb-[40px] ">

        {/* TITLE (full width, unchanged) */}
        <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
          ASRAM Student Research Forum
        </h3>

        {/* DESCRIPTION + BUTTON ROW (THIS IS THE FIX) */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[32px] mb-[20px]">
          <p
            className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] flex-1`}
          >
            Join 250+ active members in our vibrant research community. Participate in
            monthly journal clubs, quarterly workshops, and annual symposiums.
          </p>

          <button
            className="text-white px-8 py-3 rounded-[6px] font-medium text-[18px] transition-colors shrink-0 hover:opacity-90"
            style={{ backgroundColor: buttonConfig.bg }}
          >
            Join Forum
          </button>
        </div>

        {/* STATS (unchanged sizes & layout) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-30">
          <div>
            <AnimatedStatValue
              value="250+"
              className={`${T.font.family} font-semibold text-[22px] text-[#191919] mb-1`}
            />
            <p className="text-[14px] font-regular text-[#191919]">
              Active Members
            </p>
          </div>

          <div>
            <AnimatedStatValue
              value="12+"
              className={`${T.font.family} font-semibold text-[22px] text-[#191919] mb-1`}
            />
            <p className="text-[14px] font-regular text-[#191919]">
              Annual Workshops
            </p>
          </div>

          <div>
            <h4 className={`${T.font.family} font-bold text-[24px] text-[#333] mb-1`}>
              Monthly
            </h4>
            <p className="text-[14px] font-regular text-[#191919]">
              Journal Clubs
            </p>
          </div>

        </div>


        {/* Stats in Banner */}

      </div>

      {/* Footer Button */}
      <div className="flex justify-center">
        <button
          className="hover:opacity-90 text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors"
          style={{ backgroundColor: buttonConfig.bg }}
        >
          Explore Student Research Opportunities
          <span><IconArrowRightWhite size={19} /></span>
        </button>
      </div>

    </PageSection>
  );
};

export default ResearchStudentResearch;
