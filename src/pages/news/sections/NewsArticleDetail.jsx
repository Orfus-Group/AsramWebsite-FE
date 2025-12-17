import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

import RelatedArticleImg from "@/assets/news/relatedart.svg"
import DoctorImg from "@/assets/news/doct.svg";
import {
  IconFilter,
  IconBack,
  IconCalendar,
  IconClock,
  IconShare,
  IconUser,
  IconTag
} from "@/assets/icons";

const colleges = [
  { label: "All Colleges", value: "All" },
  { label: "College of Medical Sciences", value: "Medical" },
  { label: "College of Nursing", value: "Nursing" },
  { label: "College of Paramedical Sciences", value: "Paramedical" },
];

const categories = [
  { label: "All Categories", value: "All" },
  { label: "Achievements", value: "Achievements" },
  { label: "Events", value: "Events" },
  { label: "Admissions", value: "Admissions" },
  { label: "Research", value: "Research" },
  { label: "Placements", value: "Placements" },
  { label: "Announcements", value: "Announcements" },
];

const relatedArticles = [
  {
    id: 1,
    image: RelatedArticleImg,
    tag: "Infrastructure",
    title: "New Advanced CT Scanner Inaugurated at ASRAM Hospital",
    date: "December 1, 2024",
    category: "Technology"
  },
  {
    id: 2,
    image: RelatedArticleImg,
    tag: "Achievement",
    title: "50 Nursing Students Win National Clinical Excellence Awards",
    date: "November 28, 2024",
    category: "Technology"
  },
  {
    id: 3,
    image: RelatedArticleImg,
    tag: "Events",
    title: "ASRAM Hosts International Conference on Healthcare Innovation",
    date: "November 25, 2024",
    category: "Technology"
  },
];

const NewsArticleDetail = ({
  article,
  activeCollege,
  setActiveCollege,
  activeCategory,
  setActiveCategory,
  onBackToNews
}) => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="mb-[32px]">
        <button
          onClick={onBackToNews}
          className="flex items-center gap-2 text-[#223F7F] text-[14px] font-regular hover:underline"
        >
          <IconBack />
          Back to News
        </button>
        <p className={`${T.font.family} text-[12px] text-[#6B7280] mt-2`}>
          News &gt; {article?.tags?.[0] || "College of Nursing"}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]">
        {/* ==================== SIDEBAR ==================== */}
        <div className="w-full lg:w-[280px] shrink-0 space-y-6 lg:sticky lg:top-[20px] lg:self-start">
          {/* Filters Header */}
          <div className="flex items-center gap-2 rounded-[9.4px] border border-[rgba(7,7,7,0.2)] px-6 py-4 bg-white w-full">
            <IconFilter />
            <span className={`${T.font.family} font-semibold text-[18px] text-[#1D2939]`}>Filters</span>
          </div>

          {/* College Filter Group */}
          <div className="rounded-[9.4px] border border-[rgba(7,7,7,0.2)] p-5 bg-white">
            <h4 className={`${T.font.family} font-semibold text-[18px] text-[#1D2939] mb-4`}>
              College
            </h4>
            <div className="flex flex-col gap-3">
              {colleges.map((col) => (
                <button
                  key={col.value}
                  onClick={() => setActiveCollege(col.value)}
                  className={`
                                        text-left px-4 py-3 rounded-[9.4px] text-[14px] font-regular transition-colors
                                        ${activeCollege === col.value
                      ? "bg-[#008C8C] text-white"
                      : "bg-[#D8DFEF] text-[#191919] hover:bg-[#c0cbe6]"
                    }
                                    `}
                >
                  {col.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Group */}
          <div className="rounded-[9.4px] border border-[rgba(7,7,7,0.2)] p-5 bg-white">
            <h4 className={`${T.font.family} font-semibold text-[18px] text-[#1D2939] mb-4`}>
              Category
            </h4>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`
                                        text-left px-4 py-3 rounded-[9.4px] text-[14px] font-regular transition-colors
                                        ${activeCategory === cat.value
                      ? "bg-[#008C8C] text-white"
                      : "bg-[#D8DFEF] text-[#191919] hover:bg-[#c0cbe6]"
                    }
                                    `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== MAIN CONTENT ==================== */}
        <div className="flex-1">
          {/* Article Container with Border */}
          <div className="border border-[rgba(7,7,7,0.2)] rounded-[9.4px] bg-white p-8 md:p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#008C8C] text-white text-[13px] leading-[20px] font-medium px-[14px] py-[6px] rounded-[6px]">
                Achievement
              </span>
              <span className="bg-[#F3F4F6] text-[#364153] text-[13px] leading-[20px] font-medium px-[14px] py-[6px] rounded-[6px]">
                Medical College
              </span>
            </div>

            {/* Title */}
            <h1 className={`${T.font.family} font-bold text-[42px] leading-[52px] text-[#223F7F] mb-6`}>
              ASRAM Medical College Receives NAAC A+ Accreditation for Excellence in Medical Education
            </h1>

            {/* Meta Info + Share Button Row */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6">
                {/* Date */}
                <div className="flex items-center gap-2">
                  <IconCalendar size={17} />
                  <span className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>December 5, 2024</span>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-2">
                  <IconClock />
                  <span className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>5 min read</span>
                </div>
              </div>

              {/* Share Section */}
              <div className="flex items-center gap-3">
                <span className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>Share:</span>
                <button
                  className="
      flex items-center gap-2
      bg-[#008C8C] hover:bg-[#007575]
      text-white
      px-4 py-2
      rounded-[9.4px]
      text-[14px] font-medium
      transition-colors
    "
                >
                  <IconShare />

                  Share
                </button>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-8 mt-8 border-t border-[#E5E7EB]">
              {/* Avatar */}
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img
                  src={DoctorImg}
                  alt="Dr. Rajesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  {/* User icon */}
                  <IconUser className="relative top-[1px]" />

                  <p className={`${T.font.family} font-medium text-[14px] leading-[20px] text-[#191919]`}>
                    Dr. Rajesh Kumar
                  </p>
                </div>

                <p className={`${T.font.family} font-regular text-[14px] leading-[20px] text-[#4A5565] mt-[2px]`}>
                  Director of Communications
                </p>
              </div>
            </div>

          </div>

          {/* Article Content Section - Separate Border */}
          <div className="border border-[rgba(7,7,7,0.2)] rounded-[9.4px] bg-white p-8 md:p-10 mt-6">
            {/* Article Content */}
            <div className={`${T.font.family} text-[#191919]`}>
              {/* Introduction Paragraph */}
              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-8 ]">
                ASRAM Medical College has achieved a significant milestone by securing the prestigious NAAC A+ accreditation, recognizing its commitment to excellence in medical education and research. This achievement places ASRAM among the top medical institutions in the country.
              </p>

              {/* Section 1 */}
              <h2 className="font-bold text-[32px] leading-[36px] text-[#223F7F] mb-8">
                A Testament to Quality Education
              </h2>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-4 ]">
                The National Assessment and Accreditation Council (NAAC) conducted a comprehensive evaluation of our institution over a period of six months. The assessment covered various parameters including curriculum design, faculty qualifications, research output, infrastructure facilities, student support services, and governance practices.
              </p>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-4 ]">
                Dr. Priya Sharma, Principal of ASRAM Medical College, expressed her pride: "This accreditation is a reflection of the hard work and dedication of our entire academic community. It validates our commitment to providing world-class medical education and producing competent healthcare professionals."
              </p>

              {/* Quote Block */}
              <div className="bg-[#F9FAFB] border-l-4 border-[#008C8C] pl-6 pr-6 py-5 mb-8 ">
                <p className="text-[18px] leading-[26px] italic text-[#191919]">
                  "This achievement is not just a recognition of our past efforts, but a commitment to continuously improve and set new benchmarks in medical education."
                </p>
                <p className="text-[14px] text-[#191919] mt-2 font-medium">
                  - Dr. Priya Sharma, Principal
                </p>
              </div>

              {/* Section 2 */}
              <h2 className="font-bold text-[32px] leading-[36px] text-[#223F7F] mb-4 mt-8">
                Key Areas of Excellence
              </h2>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-4 ]">
                The NAAC assessment team particularly commended ASRAM Medical College for its innovative teaching methodologies, state-of-the-art simulation labs, robust research programs, and strong clinical training partnerships with leading hospitals.
              </p>

              {/* Section 3 */}
              <h2 className="font-bold text-[32px] leading-[36px] text-[#223F7F] mb-4 mt-8">
                Impact on Future Medical Education
              </h2>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-4 ]">
                This accreditation will significantly enhance ASRAM Medical College's reputation and attract top faculty and students. It opens doors for international collaborations and exchange programs with renowned medical institutions worldwide.
              </p>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-4 ]">
                The college administration has announced plans to further strengthen its infrastructure and academic programs, with a focus on emerging areas such as telemedicine, artificial intelligence in healthcare, and personalized medicine.
              </p>
              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-4 ]">
                For prospective students and parents, the NAAC A+ accreditation serves as a strong indicator of the quality of education and the career prospects available to graduates of ASRAM Medical College.
              </p>


            </div>

            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-3 flex-wrap">
                {/* Label */}
                <div className="flex items-center gap-1 text-[#374151] text-[14px] font-medium">
                  {/* Tag Icon */}
                  <IconTag />

                  <span className="text-[#191919BF] text-[18px] font-medium">Tags:</span>
                </div>

                {/* Tags */}
                {["Accreditation", "Medical Education", "NAAC", "Excellence"].map(
                  (tag, idx) => (
                    <span
                      key={idx}
                      className="
            bg-[#e3e8f0]
            text-[#191919BF]
            text-[14px]
            font-regular
            px-3
            py-[5px]
            rounded-[9.4px]
            cursor-pointer
            hover:bg-[#E5E7EB]
            transition-colors
          "
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

          </div>

          {/* Related Articles - Separate Border */}
          <div className="border border-[rgba(0,0,0,0.15)] rounded-[12px] bg-white px-10 py-8 mt-6">
            {/* Heading */}
            <h3
              className={`${T.font.family} font-bold text-[32px] leading-[40px] text-[#223f7f] mb-[20px]`}
            >
              Related Articles
            </h3>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <div
                  key={article.id}
                  className="
          bg-white
          border border-[rgba(0,0,0,0.12)]
          rounded-[14px]
          overflow-hidden
          cursor-pointer
          transition-all
          hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
        "
                >
                  {/* ================= IMAGE ================= */}
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Tag on Image */}
                    <span
                      className="
              absolute
              top-4 left-4
              bg-[#223F7F]
              text-white
              text-[10px]
              font-regular
              px-[14px]
              py-[6px]
              rounded-[9.4px]
            "
                    >
                      {article.tag}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="px-5 pt-4 pb-6">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`${T.font.family} text-[13.1px] font-regular text-[#008c8c]`}
                      >
                        {article.category}
                      </span>
                      <span className="text-[#6B7280] text-[13.1px]">•</span>
                      <span
                        className={`${T.font.family} text-[13.1px] font-regular text-[#4a5565]`}
                      >
                        {article.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h4
                      className={`
    ${T.font.family}
    font-semibold
    text-[22.5px]
    leading-[31.5px]
    line-clamp-4
    text-[#223f7f]
    min-h-[84px]
  `}
                    >

                      {article.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageSection>
  );
};

export default NewsArticleDetail;
