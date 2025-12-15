import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

const stats = [
  {
    value: "450+",
    label: "Total Publications (2020-2024)",
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2646 6.57031V19.7124" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.81616 16.8972C2.5672 16.8972 2.32843 16.7983 2.15239 16.6223C1.97634 16.4463 1.87744 16.2075 1.87744 15.9585V3.75513C1.87744 3.50616 1.97634 3.2674 2.15239 3.09135C2.32843 2.91531 2.5672 2.81641 2.81616 2.81641H7.50978C8.50563 2.81641 9.4607 3.21201 10.1649 3.91619C10.8691 4.62037 11.2647 5.57544 11.2647 6.5713C11.2647 5.57544 11.6603 4.62037 12.3644 3.91619C13.0686 3.21201 14.0237 2.81641 15.0196 2.81641H19.7132C19.9621 2.81641 20.2009 2.91531 20.3769 3.09135C20.553 3.2674 20.6519 3.50616 20.6519 3.75513V15.9585C20.6519 16.2075 20.553 16.4463 20.3769 16.6223C20.2009 16.7983 19.9621 16.8972 19.7132 16.8972H14.0808C13.3339 16.8972 12.6176 17.1939 12.0895 17.7221C11.5614 18.2502 11.2647 18.9665 11.2647 19.7134C11.2647 18.9665 10.968 18.2502 10.4398 17.7221C9.91169 17.1939 9.19539 16.8972 8.4485 16.8972H2.81616Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // Book/Open
  },
  {
    value: "320+",
    label: "SCI/Scopus Indexed",
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5287 12.1016L15.9509 20.1051C15.9668 20.1994 15.9536 20.2962 15.913 20.3827C15.8724 20.4693 15.8063 20.5413 15.7237 20.5893C15.641 20.6373 15.5456 20.6589 15.4504 20.6512C15.3551 20.6435 15.2644 20.6069 15.1905 20.5463L11.8299 18.024C11.6677 17.9028 11.4706 17.8373 11.2681 17.8373C11.0656 17.8373 10.8685 17.9028 10.7062 18.024L7.33999 20.5454C7.26613 20.6059 7.17558 20.6424 7.08043 20.6501C6.98527 20.6578 6.89003 20.6363 6.80742 20.5884C6.7248 20.5406 6.65874 20.4687 6.61804 20.3823C6.57734 20.296 6.56394 20.1993 6.57962 20.1051L8.00085 12.1016" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.2647 13.1416C14.3753 13.1416 16.897 10.6199 16.897 7.50929C16.897 4.39863 14.3753 1.87695 11.2647 1.87695C8.15401 1.87695 5.63232 4.39863 5.63232 7.50929C5.63232 10.6199 8.15401 13.1416 11.2647 13.1416Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // Badge/Ribbon placeholder
  },
  {
    value: "2,800+",
    label: "Total Citations",
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0195 6.57031H20.6519V12.2026" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.6519 6.57031L12.6727 14.5495L7.97914 9.85584L1.87744 15.9575" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // Chart
  },
  {
    value: "18",
    label: "Average H-Index",
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5287 12.1016L15.9509 20.1051C15.9668 20.1994 15.9536 20.2962 15.913 20.3827C15.8724 20.4693 15.8063 20.5413 15.7237 20.5893C15.641 20.6373 15.5456 20.6589 15.4504 20.6512C15.3551 20.6435 15.2644 20.6069 15.1905 20.5463L11.8299 18.024C11.6677 17.9028 11.4706 17.8373 11.2681 17.8373C11.0656 17.8373 10.8685 17.9028 10.7062 18.024L7.33999 20.5454C7.26613 20.6059 7.17558 20.6424 7.08043 20.6501C6.98527 20.6578 6.89003 20.6363 6.80742 20.5884C6.7248 20.5406 6.65874 20.4687 6.61804 20.3823C6.57734 20.296 6.56394 20.1993 6.57962 20.1051L8.00085 12.1016" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.2647 13.1416C14.3753 13.1416 16.897 10.6199 16.897 7.50929C16.897 4.39863 14.3753 1.87695 11.2647 1.87695C8.15401 1.87695 5.63232 4.39863 5.63232 7.50929C5.63232 10.6199 8.15401 13.1416 11.2647 13.1416Z" stroke="white" stroke-width="1.87744" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // Badge
  }
];

const recentPubs = [
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

const ResearchPublications = () => {
  return (
    <PageSection bgColor="#D8DFEF" paddingClass="py-[80px]">
      <h2 className={`${T.font.family} font-bold text-[42px] text-[#223F7F] mb-10`}>
        Publications
      </h2>

      {/* 1. Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-[12px] p-6 flex flex-col items-center text-center shadow-sm">
            <div className="w-[44px] h-[44px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-4">
              {stat.icon}
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
      <div className="bg-white rounded-[12px] p-[24px] md:p-[40px] shadow-sm mb-10">
        <h3 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-6`}>
          Recent Publications (2024)
        </h3>

        <div className="flex flex-col gap-6 mb-8">
          {recentPubs.map((pub, index) => (
            <div key={index} className="border-b-[0.9px] border-[rgba(7,7,7,0.2)] pb-6 last:border-0 last:pb-0">
              <h4 className={`${T.font.family} font-regular text-[20px] text-[#191919] mb-1 leading-snug`}>
                {pub.title}
              </h4>
              <p className={`${T.font.family} font-medium text-[14px] mb-2 text-[#191919BF]`}>
                {pub.authors}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[#008C8C] text-[14px] font-regular">
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
            Browse our comprehensive publication repository with year-wise listings,
            citation metrics, and direct links to Scopus, SCI, and PubMed.
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
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7341 2.3457H16.4277V7.03931" stroke="#223F7F" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.823 10.9507L16.428 2.3457" stroke="#223F7F" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.081 10.1692V14.8629C14.081 15.2778 13.9161 15.6757 13.6227 15.9691C13.3293 16.2626 12.9314 16.4274 12.5164 16.4274H3.91146C3.49652 16.4274 3.09857 16.2626 2.80517 15.9691C2.51176 15.6757 2.34692 15.2778 2.34692 14.8629V6.2579C2.34692 5.84296 2.51176 5.44501 2.80517 5.1516C3.09857 4.85819 3.49652 4.69336 3.91146 4.69336H8.60507" stroke="#223F7F" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              Publication Repository
            </button>

            {/* PRIMARY BUTTON */}
            <button
              className="
          flex items-center gap-[8px]
          h-[40px]
          px-[18px]
          rounded-[6px]
          bg-[#008C8C]
          text-white
          font-regular
          text-[15px]
          hover:bg-[#007A7A]
          transition-colors
        "
            >
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7339 2.3457H16.4275V7.03931" stroke="white" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.82275 10.9507L16.4277 2.3457" stroke="white" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.0807 10.1692V14.8629C14.0807 15.2778 13.9159 15.6757 13.6225 15.9691C13.3291 16.2626 12.9311 16.4274 12.5162 16.4274H3.91122C3.49628 16.4274 3.09833 16.2626 2.80492 15.9691C2.51151 15.6757 2.34668 15.2778 2.34668 14.8629V6.2579C2.34668 5.84296 2.51151 5.44501 2.80492 5.1516C3.09833 4.85819 3.49628 4.69336 3.91122 4.69336H8.60483" stroke="white" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              Scopus Profile
            </button>
          </div>
        </div>
      </div>


    </PageSection>
  );
};

export default ResearchPublications;
