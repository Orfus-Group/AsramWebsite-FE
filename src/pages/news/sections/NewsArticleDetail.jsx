import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const RelatedArticleImg = "/AsramWebsite-FE/assets/news/relatedart.svg"
const DoctorImg = "/AsramWebsite-FE/assets/news/doct.svg";
const IconFilter = "/AsramWebsite-FE/assets/icons/IconFilter.svg";
const IconBack = "/AsramWebsite-FE/assets/icons/IconBack.svg";
const IconCalendar = "/AsramWebsite-FE/assets/icons/IconCalendar.svg";
const IconClock = "/AsramWebsite-FE/assets/icons/IconClock.svg";
const IconShare = "/AsramWebsite-FE/assets/icons/IconShare.svg";
const IconUser = "/AsramWebsite-FE/assets/icons/IconUser.svg";
const IconTag = "/AsramWebsite-FE/assets/icons/IconTag.svg";

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

const FilterGroup = ({ title, items, activeValue, onSelect }) => (
  <div className="rounded-[9.4px] border border-[rgba(7,7,7,0.2)] p-5 bg-white">
    <h4 className={`${T.font.family} font-semibold text-[18px] text-[#1D2939] mb-4`}>
      {title}
    </h4>
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onSelect(item.value)}
          className={`
            text-left px-4 py-3 rounded-[9.4px] text-[14px] font-regular transition-colors whitespace-normal leading-tight
            ${activeValue === item.value
              ? "bg-[#008C8C] text-white"
              : "bg-[#D8DFEF] text-[#191919] hover:bg-[#c0cbe6]"
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
);

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
      <div className="mb-[24px] sm:mb-[32px]">
        <button
          onClick={onBackToNews}
          className="flex items-center gap-2 text-[#223F7F] text-[18px] sm:text-[20px] font-medium hover:underline"
        >
          <img src={IconBack} className="w-[20px] h-[20px]" alt="" />
          Back to News
        </button>
        <p className={`${T.font.family} text-[13px] sm:text-[14px] text-[#4A5565] mt-2`}>
          Home / News / <span className="text-[14px] text-[#223F7F] leading-[20px] font-regular">{article?.tags?.[0]}</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]">
        {/* ==================== SIDEBAR / FILTERS ==================== */}
        <div className="w-full lg:w-[280px] shrink-0 space-y-4 sm:space-y-6 lg:sticky lg:top-[20px] lg:self-start flex flex-col sm:flex-row lg:flex-col gap-0 sm:gap-4 lg:gap-6">
          {/* Filters Header (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2 rounded-[9.4px] border border-[rgba(7,7,7,0.2)] px-6 py-4 bg-white w-full">
            <img src={IconFilter} className="w-[20px] h-[20px]" alt="" />
            <span className={`${T.font.family} font-semibold text-[18px] text-[#1D2939]`}>Filters</span>
          </div>

          <div className="flex-1">
            <FilterGroup
              title="College"
              items={colleges}
              activeValue={activeCollege}
              onSelect={setActiveCollege}
            />
          </div>

          <div className="flex-1">
            <FilterGroup
              title="Category"
              items={categories}
              activeValue={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>
        </div>

        {/* ==================== MAIN CONTENT ==================== */}
        <div className="flex-1 min-w-0">
          {/* Article Container with Border */}
          <div className="border border-[rgba(7,7,7,0.2)] rounded-[9.4px] bg-white p-[20px] sm:p-8 md:p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="bg-[#008C8C] text-white text-[12px] sm:text-[13px] leading-[20px] font-medium px-[12px] sm:px-[14px] py-[4px] sm:py-[6px] rounded-[6px]">
                Achievement
              </span>
              <span className="bg-[#F3F4F6] text-[#364153] text-[12px] sm:text-[13px] leading-[20px] font-medium px-[12px] sm:px-[14px] py-[4px] sm:py-[6px] rounded-[6px]">
                Medical College
              </span>
            </div>

            {/* Title */}
            <h1 className={`${T.font.family} font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.3] sm:leading-[1.2] lg:leading-[52px] text-[#223F7F] mb-6`}>
              ASRAM Medical College Receives NAAC A+ Accreditation for Excellence in Medical Education
            </h1>

            {/* Meta Info + Share Button Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Date */}
                <div className="flex items-center gap-2">
                  <img src={IconCalendar} className="w-[15px] h-[15px]" alt="" />
                  <span className={`${T.font.family} text-[13px] sm:text-[14px] font-medium text-[#191919BF]`}>Dec 5, 2024</span>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-2">
                  <img src={IconClock} className="w-[15px] h-[15px]" alt="" />
                  <span className={`${T.font.family} text-[13px] sm:text-[14px] font-medium text-[#191919BF]`}>5 min read</span>
                </div>
              </div>

              {/* Share Section */}
              <div className="flex items-center gap-3">
                <span className={`${T.font.family} text-[13px] sm:text-[14px] font-medium text-[#191919BF]`}>Share:</span>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article?.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }
                  }}
                  className="
                    flex items-center gap-2
                    bg-[#008C8C] hover:bg-[#007575]
                    text-white
                    px-4 py-2
                    rounded-[8px] sm:rounded-[9.4px]
                    text-[13px] sm:text-[14px] font-medium
                    transition-all
                  "
                >
                  <img src={IconShare} className="w-[16px] h-[16px]" alt="" />
                  Share
                </button>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#E5E7EB]">
              {/* Avatar */}
              <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img
                  src={DoctorImg}
                  alt="Dr. Rajesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <img src={IconUser} className="w-[14px] h-[14px] relative top-[1px]" alt="" />
                  <p className={`${T.font.family} font-medium text-[13px] sm:text-[14px] leading-tight text-[#191919]`}>
                    Dr. Rajesh Kumar
                  </p>
                </div>
                <p className={`${T.font.family} font-regular text-[12px] sm:text-[14px] leading-tight text-[#4A5565] mt-[2px]`}>
                  Director of Communications
                </p>
              </div>
            </div>
          </div>

          {/* Article Content Section - Separate Border */}
          <div className="border border-[rgba(7,7,7,0.2)] rounded-[9.4px] bg-white p-[20px] sm:p-8 md:p-10 mt-6">
            {/* Article Content */}
            <div className={`${T.font.family} text-[#191919]`}>
              {/* Introduction Paragraph */}
              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-6 sm:mb-8">
                ASRAM Medical College has achieved a significant milestone by securing the prestigious NAAC A+ accreditation, recognizing its commitment to excellence in medical education and research. This achievement places ASRAM among the top medical institutions in the country.
              </p>

              {/* Section 1 */}
              <h2 className="font-bold text-[24px] sm:text-[32px] leading-[1.3] text-[#223F7F] mb-6 sm:mb-8">
                A Testament to Quality Education
              </h2>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-4">
                The National Assessment and Accreditation Council (NAAC) conducted a comprehensive evaluation of our institution over a period of six months. The assessment covered various parameters including curriculum design, faculty qualifications, research output, infrastructure facilities, student support services, and governance practices.
              </p>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-4">
                Dr. Priya Sharma, Principal of ASRAM Medical College, expressed her pride: "This accreditation is a reflection of the hard work and dedication of our entire academic community. It validates our commitment to providing world-class medical education and producing competent healthcare professionals."
              </p>

              {/* Quote Block */}
              <div className="bg-[#EEF2F7] border-l-4 border-[#008C8C] pl-4 sm:pl-6 pr-4 sm:pr-6 py-4 sm:py-5 mb-8">
                <p className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] italic text-[#191919]">
                  "This achievement is not just a recognition of our past efforts, but a commitment to continuously improve and set new benchmarks in medical education."
                </p>
                <p className="text-[13px] sm:text-[14px] text-[#191919] mt-2 font-medium">
                  - Dr. Priya Sharma, Principal
                </p>
              </div>

              {/* Section 2 */}
              <h2 className="font-bold text-[24px] sm:text-[32px] leading-[1.3] text-[#223F7F] mb-4 mt-8">
                Key Areas of Excellence
              </h2>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-4">
                The NAAC assessment team particularly commended ASRAM Medical College for its innovative teaching methodologies, state-of-the-art simulation labs, robust research programs, and strong clinical training partnerships with leading hospitals.
              </p>

              {/* Section 3 */}
              <h2 className="font-bold text-[24px] sm:text-[32px] leading-[1.3] text-[#223F7F] mb-4 mt-8">
                Impact on Future Medical Education
              </h2>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-4">
                This accreditation will significantly enhance ASRAM Medical College's reputation and attract top faculty and students. It opens doors for international collaborations and exchange programs with renowned medical institutions worldwide.
              </p>
            </div>

            {/* Tags Section */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-[#374151] font-medium">
                  <img src={IconTag} className="w-[16px] h-[16px]" alt="" />
                  <span className="text-[#191919BF] text-[16px] sm:text-[18px] font-medium">Tags:</span>
                </div>
                {["Accreditation", "Medical Education", "NAAC", "Excellence"].map(
                  (tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#e3e8f0] text-[#191919BF] text-[13px] sm:text-[14px] font-medium px-3 py-[5px] rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Related Articles - Separate Border */}
          <div className="border border-[rgba(0,0,0,0.12)] rounded-[16px] bg-white px-5 sm:px-[40px] py-8 sm:py-[30px] mt-8 shadow-sm">
            <h3 className={`${T.font.family} font-bold text-[26px] sm:text-[32px] leading-tight text-[#223f7f] mb-8 sm:mb-[30px]`}>
              Related Articles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[22.5px]">
              {relatedArticles.map((art) => (
                <div
                  key={art.id}
                  className="group bg-[#EEF2F7] border border-[rgba(0,0,0,0.08)] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-[200px] sm:h-[180px] w-full shrink-0 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-[#223F7F] text-white text-[11px] font-semibold px-3 py-1.5 rounded-[8px] uppercase tracking-wider shadow-sm">
                      {art.tag}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`${T.font.family} text-[13px] font-bold text-[#008c8c]`}>
                        {art.category}
                      </span>
                      <span className="text-gray-300 font-bold">•</span>
                      <span className={`${T.font.family} text-[13px] font-medium text-gray-400`}>
                        {art.date}
                      </span>
                    </div>

                    <h4 className={`${T.font.family} font-bold text-[20px] sm:text-[22px] leading-[1.4] text-[#223f7f] line-clamp-3 group-hover:text-[#008c8c] transition-colors`}>
                      {art.title}
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
