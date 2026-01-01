import React, { useLayoutEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { useHero } from "@/context/HeroContext";
const NewsHerobg = "/AsramWebsite-FE/assets/news/newsarticlesherobg.jpg";
import { mockNews, relatedArticles } from "./newsData"; // Use shared data

// Images
const RelatedArticleImg = "/AsramWebsite-FE/assets/news/relatedart.svg"
const DoctorImg = "/AsramWebsite-FE/assets/news/doct.svg";
import {

  IconBack,
  IconCalendar,
  IconClock,
  IconShare,
  IconUser,
  IconTag
} from "@/assets/icons";



const NewsArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setHero, hideHero } = useHero();



  // Find article
  const article = mockNews.find(a => a.id === parseInt(id));

  // Hero Effect
  useLayoutEffect(() => {
    setHero({
      // title: (
      //     <span className="font-montserrat font-bold text-[40px] leading-[1.35] text-white">
      //         ASRAM News
      //     </span>
      // ),
      bgImage: NewsHerobg,
      // children: (
      //     <p className="font-montserrat font-medium text-[22px] leading-[1.36] text-white max-w-[520px] mb-6">
      //         Updates and announcements from across academics, healthcare, and campus life.
      //     </p>
      // ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);

  if (!article) {
    return (
      <PageSection bg="bg-white" paddingClass="py-[80px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Article Not Found</h2>
          <button
            onClick={() => navigate('/news')}
            className="mt-4 text-[#223F7F] underline"
          >
            Back to News
          </button>
        </div>
      </PageSection>
    );
  }

  return (
    <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[60px] lg:py-[80px]">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="mb-[24px] sm:mb-[32px]">
        <button
          onClick={() => navigate('/news')}
          className="flex items-center gap-2 text-[#223F7F] text-[18px] sm:text-[20px] font-medium hover:underline"
        >
          <IconBack />
          Back to News
        </button>
        <p className={`${T.font.family} text-[13px] sm:text-[14px] text-[#4A5565] mt-2`}>
          Home / News / <span className="text-[14px] text-[#223F7F] leading-[20px] font-regular">{article?.tags?.[article.tags.length - 1]}</span>
        </p>
      </div>

      <div className="flex flex-col gap-[20px] sm:gap-[30px]">
        {/* ==================== MAIN CONTENT ==================== */}
        <div className="w-full">
          {/* Article Container */}
          <div className="border border-[#07070733] rounded-[9.4px] bg-white p-[20px] sm:p-8 md:p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-[30px]">
              {[...article.tags].reverse().map((tag, idx) => (
                <span key={idx} className={`${idx === 0 ? "bg-[#223F7F] text-white" : "bg-[#F3F4F6] text-[#364153]"} text-[12px] sm:text-[13px] leading-tight font-regular px-[12px] sm:px-[14px] py-[4px] sm:py-[6px] rounded-[6px] sm:rounded-[9.3px]`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className={`${T.font.family} font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.3] sm:leading-[1.2] lg:leading-[52px] text-[#223F7F] mb-6 sm:mb-[30px]`}>
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 sm:mb-[30px]">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <IconCalendar size={15} />
                  <span className={`${T.font.family} text-[13px] sm:text-[14px] font-medium text-[#191919BF]`}>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock size={15} />
                  <span className={`${T.font.family} text-[13px] sm:text-[14px] font-medium text-[#191919BF]`}>5 min read</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`${T.font.family} text-[13px] sm:text-[14px] font-medium text-[#191919BF]`}>Share:</span>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }
                  }}
                  className="flex items-center gap-2 bg-[#223F7F] hover:bg-[#1a3163] text-white px-4 py-2 rounded-[8px] sm:rounded-[9.4px] text-[13px] sm:text-[14px] font-medium transition-all"
                >
                  <IconShare size={16} />
                  Share
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 pt-6 sm:pt-[30px] mt-6 sm:mt-[30px] border-t border-[#07070733]">
              <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img src={DoctorImg} alt="Dr. Rajesh Kumar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <IconUser size={14} className="relative top-[1px]" />
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
          <div className="border border-[rgba(7,7,7,0.2)] rounded-[9.4px] bg-white p-8 md:p-10 mt-6">
            {/* Article Content */}
            <div className={`${T.font.family} text-[#191919]`}>
              {/* Introduction Paragraph */}
              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                ASRAM Medical College has achieved a significant milestone by securing the prestigious NAAC A+ accreditation, recognizing its commitment to excellence in medical education and research. This achievement places ASRAM among the top medical institutions in the country.
              </p>

              {/* Section 1 */}
              <h2 className="font-bold text-[24px] sm:text-[32px] leading-[1.3] text-[#223F7F] mb-6 sm:mb-[30px] mt-8 sm:mt-[30px]">
                A Testament to Quality Education
              </h2>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-6 sm:mb-[30px]">
                The National Assessment and Accreditation Council (NAAC) conducted a comprehensive evaluation of our institution over a period of six months. The assessment covered various parameters including curriculum design, faculty qualifications, research output, infrastructure facilities, student support services, and governance practices.
              </p>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-6 sm:mb-[30px]">
                Dr. Priya Sharma, Principal of ASRAM Medical College, expressed her pride: "This accreditation is a reflection of the hard work and dedication of our entire academic community. It validates our commitment to providing world-class medical education and producing competent healthcare professionals."
              </p>

              {/* Quote Block */}
              <div className="bg-[#EEF2F7] border-l-4 border-[#008C8C] pl-4 sm:pl-6 pr-4 sm:pr-6 py-4 sm:py-5 mb-8 sm:mb-[30px]">
                <p className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] italic text-[#191919]">
                  "This achievement is not just a recognition of our past efforts, but a commitment to continuously improve and set new benchmarks in medical education."
                </p>
                <p className="text-[13px] sm:text-[14px] text-[#191919] mt-2 font-medium">
                  - Dr. Priya Sharma, Principal
                </p>
              </div>

              {/* Section 2 */}
              <h2 className="font-bold text-[24px] sm:text-[32px] leading-[1.3] text-[#223F7F] mb-6 sm:mb-[30px] mt-8 sm:mt-[30px]">
                Key Areas of Excellence
              </h2>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-6 sm:mb-[30px]">
                The NAAC assessment team particularly commended ASRAM Medical College for its innovative teaching methodologies, state-of-the-art simulation labs, robust research programs, and strong clinical training partnerships with leading hospitals.
              </p>

              {/* Section 3 */}
              <h2 className="font-bold text-[24px] sm:text-[32px] leading-[1.3] text-[#223F7F] mb-6 sm:mb-[30px] mt-8 sm:mt-[30px]">
                Impact on Future Medical Education
              </h2>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-6 sm:mb-[30px]">
                This accreditation will significantly enhance ASRAM Medical College's reputation and attract top faculty and students. It opens doors for international collaborations and exchange programs with renowned medical institutions worldwide.
              </p>

              <p className="text-[16px] sm:text-[18px] font-regular text-[#191919] leading-[24px] sm:leading-[26px] mb-6 sm:mb-[30px]">
                The college administration has announced plans to further strengthen its infrastructure and academic programs, with a focus on emerging areas such as telemedicine, artificial intelligence in healthcare, and personalized medicine.
              </p>
              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                For prospective students and parents, the NAAC A+ accreditation serves as a strong indicator of the quality of education and the career prospects available to graduates of ASRAM Medical College.
              </p>

            </div>

            {/* Tags Section */}
            <div className="mt-8 sm:mt-[42px] pt-6 sm:pt-[42px] border-t border-[#E5E7EB]">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-[#374151] font-medium">
                  <IconTag size={16} />
                  <span className="text-[#191919BF] text-[16px] sm:text-[18px] font-medium">Tags:</span>
                </div>

                {["Accreditation", "Medical Education", "NAAC", "Excellence"].map(
                  (tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#EEF2F7] text-[#191919BF] text-[13px] sm:text-[14px] font-medium px-3 py-[5px] rounded-full cursor-pointer hover:bg-[#E5E7EB] transition-colors"
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
              {relatedArticles.map((article) => (
                <div
                  key={article.id}
                  className="group bg-[#EEF2F7] border border-[rgba(0,0,0,0.08)] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full"
                  onClick={() => navigate(`/news/${article.id}`)}
                >
                  <div className="relative h-[200px] sm:h-[180px] w-full shrink-0 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-[#223F7F] text-white text-[11px] font-semibold px-3 py-1.5 rounded-[8px] uppercase tracking-wider shadow-sm">
                      {article.tag}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`${T.font.family} text-[13px] font-bold text-[#008c8c]`}>
                        {article.category}
                      </span>
                      <span className="text-gray-300 font-bold">•</span>
                      <span className={`${T.font.family} text-[13px] font-medium text-gray-400`}>
                        {article.date}
                      </span>
                    </div>

                    <h4 className={`${T.font.family} font-bold text-[20px] sm:text-[22px] leading-[1.4] text-[#223f7f] line-clamp-3 group-hover:text-[#008c8c] transition-colors`}>
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

export default NewsArticlePage;
