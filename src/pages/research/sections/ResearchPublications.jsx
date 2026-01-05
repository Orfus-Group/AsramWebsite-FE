import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const IconBookOpenWhite = "/AsramWebsite-FE/assets/icons/IconBookOpenWhite.svg";
const IconBadgeRibbonWhite = "/AsramWebsite-FE/assets/icons/IconBadgeRibbonWhite.svg";
const IconLineChartWhite = "/AsramWebsite-FE/assets/icons/IconLineChartWhite.svg";
const IconExternalLink = "/AsramWebsite-FE/assets/icons/IconExternalLink.svg";
const IconExternalLinkWhite = "/AsramWebsite-FE/assets/icons/IconExternalLinkWhite.svg";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";
import { IconArrowRight } from "@/assets/icons";

const defaultStats = [
  {
    value: "450+",
    label: "Total Publications (2020-2024)",
    icon: <img src={IconBookOpenWhite} className="w-[23px] h-[23px]" alt="" />
  },
  {
    value: "320+",
    label: "SCI/Scopus Indexed",
    icon: <img src={IconBadgeRibbonWhite} className="w-[23px] h-[23px]" alt="" />
  },
  {
    value: "2,800+",
    label: "Total Citations",
    icon: <img src={IconLineChartWhite} className="w-[23px] h-[23px]" alt="" />
  },
  {
    value: "18",
    label: "Average H-Index",
    icon: <img src={IconBadgeRibbonWhite} className="w-[23px] h-[23px]" alt="" />
  }
];

const defaultRecentPubs = [
  {
    title: "Machine Learning Algorithms for Early Detection of Diabetic Retinopathy",
    authors: "Patel R, Kumar S, Sharma P, et al.",
    journal: "Journal of Medical Systems",
    metrics: "SCI, IF: 4.8"
  },
  {
    title: "Effectiveness of Nurse-Led Hypertension Management in Rural India",
    authors: "Krishnan M, Verma A, Singh N, et al.",
    journal: "The Lancet Regional Health",
    metrics: "SCI, IF: 6.2"
  },
  {
    title: "Genomic Variants in South Indian Population",
    authors: "Iyer S, Reddy K, Nair L, et al.",
    journal: "Nature Genetics",
    metrics: "SCI, IF: 38.3"
  }
];

const ResearchPublications = ({
  iconConfig = { bg: "#008C8C", iconFilter: "brightness(0) invert(1)" },
  buttonConfig = { bg: "#008C8C" },
  accentColor = "#008C8C",
  stats,
  publications,
  footerDescription,
}) => {
  const statsToRender = stats || defaultStats;
  const pubsToRender = publications || defaultRecentPubs;
  const descToRender = footerDescription || "Browse our comprehensive publication repository with year-wise listings, citation metrics, and direct links to Scopus, SCI, and PubMed.";
  return (
    <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
      <h2 className={`${T.font.family} font-bold text-[42px] text-[#223F7F] mb-10`}>
        Publications
      </h2>

      {/* 1. Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[20px]">
        {statsToRender.map((stat, index) => (
          <div style={{ border: "1px solid #07070733" }} key={index} className="bg-white rounded-[9.3px] p-6 flex flex-col items-center text-center shadow-sm">
            <div
              className={`${iconConfig.sizeClass || "w-[44px] h-[44px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-4`}
              style={{ backgroundColor: iconConfig.bg }}
            >
              {React.cloneElement(stat.icon, {
                style: { filter: iconConfig.iconFilter },
                className: iconConfig.iconSizeClass || stat.icon.props.className
              })}
            </div>
            <AnimatedStatValue
              value={stat.value}
              className={`${T.font.family} font-medium text-[32px] text-[#223F7F] mb-1`}
            />
            <p className={`${T.font.family} font-medium text-[14px] text-[#191919BF]`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* 2. Recent Publications Card */}
      <div style={{ border: "1px solid #07070733" }} className="bg-white rounded-[9.3px] p-[24px] md:p-[30px] shadow-sm mb-[20px]">
        <h3 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-6`}>
          Recent Publications (2024)
        </h3>

        <div className="flex flex-col gap-6 mb-8" >
          {pubsToRender.map((pub, index) => (
            <div key={index} className="border-b-[0.9px] border-[rgba(7,7,7,0.2)] pb-2 last:border-0 last:pb-0">
              <h4 className={`${T.font.family} font-regular text-[20px] text-[#191919] mb-1 leading-snug`}>
                {pub.title}
              </h4>
              <p className={`${T.font.family} font-medium text-[14px] mb-2 text-[#191919BF]`}>
                {pub.authors}
              </p>
              <div className="flex items-center gap-3">
                <span
                  className="text-[14px] font-regular"
                  style={{ color: "#223F7F" }}
                >
                  {pub.journal}
                </span>
                <span className="bg-[#E9ECEF] text-[#223F7F] text-[12px] px-2 py-0.5 rounded-[31498264px] font-regular">
                  {pub.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 text-[#223F7F] font-regular text-[15px] hover:text-[#1E3A8A] transition-colors">
          View All Publications
          <span><IconArrowRight
            size={16}
            className="sm:w-[20px] sm:h-[20px]"
            stroke="#223F7F"
            strokeWidth={1.25163}
          /></span>
        </button>
      </div>

      {/* 3. Access Database Card */}
      <div
        style={{ border: "1px solid #07070733" }}
        className="
    bg-white
    rounded-[12px]
    px-[24px] md:px-[40px]
    py-[24px] md:py-[32px]
    shadow-sm
    w-full
  "
      >
        {/* CONTENT WRAPPER */}
        <div className="max-w-[820px] flex flex-col gap-[16px]">
          {/* TITLE */}
          <h3
            className={`${T.font.family} font-semibold text-[24px] leading-[32px] text-[#223F7F]`}
          >
            Access Complete Publication Database
          </h3>

          {/* DESCRIPTION */}
          <p
            className={`${T.font.family} font-regular text-[18px] leading-[26px] text-[#191919BF]`}
          >
            {descToRender}
          </p>

          {/* BUTTONS – BELOW TEXT */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] pt-[4px]">
            {/* OUTLINE BUTTON */}
            <button
              className="
          flex items-center gap-[8px]
          h-[40px]
          px-[18px]
          rounded-[6px]
          text-[#223F7F]
          font-regular
          text-[15px]
          hover:bg-gray-50
          transition-colors
        "
            >
              <img src={IconExternalLink} className="w-[19px] h-[19px]" alt="" />

              Publication Repository
            </button>

            {/* PRIMARY BUTTON */}
            <button
              className="
          flex items-center gap-[8px]
          h-[40px]
          px-[18px]
          rounded-[6px]
          text-white
          font-regular
          text-[15px]
          transition-colors
          hover:opacity-90
        "
              style={{ backgroundColor: buttonConfig.bg }}
            >
              <img src={IconExternalLinkWhite} className="w-[19px] h-[19px]" alt="" />

              Scopus Profile
            </button>
          </div>
        </div>
      </div>


    </PageSection>
  );
};

export default ResearchPublications;
