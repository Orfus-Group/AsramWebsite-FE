import React, { useLayoutEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { useHero } from "@/context/HeroContext";
import NewsHerobg from "@/assets/news/newsarticlesherobg.jpg";
import { mockNews, relatedArticles } from "./newsData"; // Use shared data

// Images
import RelatedArticleImg from "@/assets/news/relatedart.svg"
import DoctorImg from "@/assets/news/doct.svg";
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
      <div className="mb-[32px]">
        <button
          onClick={() => navigate('/news')}
          className="flex items-center gap-2 text-[#223F7F] text-[20px] font-medium hover:underline"
        >
          <IconBack />
          Back to News
        </button>
        <p className={`${T.font.family} text-[14px] text-[#4A5565] mt-2`}>
          Home / News / <span className="text-[14px] text-[#223F7F] leading-[20px] font-regular">{article?.tags?.[article.tags.length - 1]}</span>
        </p>
      </div>

      <div className="flex flex-col gap-[30px]">
        {/* ==================== MAIN CONTENT ==================== */}
        <div className="w-full">
          {/* Article Container */}
          <div className="border border-[#07070733] rounded-[9.4px] bg-white p-8 md:p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-[30px]">
              {[...article.tags].reverse().map((tag, idx) => (
                <span key={idx} className={`${idx === 0 ? "bg-[#223F7F] text-white" : "bg-[#F3F4F6] text-[#364153]"} text-[13px] leading-[18.8px] font-regular px-[14px] py-[6px] rounded-[9.3px]`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className={`${T.font.family} font-bold text-[42px] leading-[52px] text-[#223F7F] mb-[30px]`}>
              {article.title}
            </h1>

            <div className="flex items-center justify-between mb-[30px]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <IconCalendar size={17} />
                  <span className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock />
                  <span className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>5 min read</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>Share:</span>
                <button className="flex items-center gap-2 bg-[#223F7F] hover:bg-[#007575] text-white px-4 py-2 rounded-[9.4px] text-[14px] font-medium transition-colors">
                  <IconShare />
                  Share
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-[30px] mt-[30px] border-t border-[#07070733]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img src={DoctorImg} alt="Dr. Rajesh Kumar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
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
              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                ASRAM Medical College has achieved a significant milestone by securing the prestigious NAAC A+ accreditation, recognizing its commitment to excellence in medical education and research. This achievement places ASRAM among the top medical institutions in the country.
              </p>

              {/* Section 1 */}
              <h2 className="font-bold text-[32px] leading-[36px] text-[#223F7F] mb-[30px] mt-[30px]">
                A Testament to Quality Education
              </h2>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                The National Assessment and Accreditation Council (NAAC) conducted a comprehensive evaluation of our institution over a period of six months. The assessment covered various parameters including curriculum design, faculty qualifications, research output, infrastructure facilities, student support services, and governance practices.
              </p>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                Dr. Priya Sharma, Principal of ASRAM Medical College, expressed her pride: "This accreditation is a reflection of the hard work and dedication of our entire academic community. It validates our commitment to providing world-class medical education and producing competent healthcare professionals."
              </p>

              {/* Quote Block */}
              <div className="bg-[#EEF2F7] border-l-4 border-[#008C8C] pl-6 pr-6 py-5 mb-[30px]">
                <p className="text-[18px] leading-[26px] italic text-[#191919]">
                  "This achievement is not just a recognition of our past efforts, but a commitment to continuously improve and set new benchmarks in medical education."
                </p>
                <p className="text-[14px] text-[#191919] mt-2 font-medium">
                  - Dr. Priya Sharma, Principal
                </p>
              </div>

              {/* Section 2 */}
              <h2 className="font-bold text-[32px] leading-[36px] text-[#223F7F] mb-[30px] mt-[30px]">
                Key Areas of Excellence
              </h2>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                The NAAC assessment team particularly commended ASRAM Medical College for its innovative teaching methodologies, state-of-the-art simulation labs, robust research programs, and strong clinical training partnerships with leading hospitals.
              </p>

              {/* Section 3 */}
              <h2 className="font-bold text-[32px] leading-[36px] text-[#223F7F] mb-[30px] mt-[30px]">
                Impact on Future Medical Education
              </h2>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                This accreditation will significantly enhance ASRAM Medical College's reputation and attract top faculty and students. It opens doors for international collaborations and exchange programs with renowned medical institutions worldwide.
              </p>

              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                The college administration has announced plans to further strengthen its infrastructure and academic programs, with a focus on emerging areas such as telemedicine, artificial intelligence in healthcare, and personalized medicine.
              </p>
              <p className="text-[18px] font-regular text-[#191919] leading-[26px] mb-[30px]">
                For prospective students and parents, the NAAC A+ accreditation serves as a strong indicator of the quality of education and the career prospects available to graduates of ASRAM Medical College.
              </p>

            </div>

            {/* Tags Section */}
            <div className="mt-[42px] pt-[42px] border-t border-[#E5E7EB]">
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
                                bg-[#EEF2F7]
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
          <div className="border border-[rgba(0,0,0,0.15)] rounded-[12px] bg-white px-[40px] py-[30px] mt-6">
            {/* Heading */}
            <h3
              className={`${T.font.family} font-bold text-[32px] leading-[40px] text-[#223f7f] mb-[30px]`}
            >
              Related Articles
            </h3>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22.5px]">
              {relatedArticles.map((article) => (
                <div
                  key={article.id}
                  className="
                                       bg-[#EEF2F7]
                                       border border-[rgba(7,7,7,0.2)]
                                       rounded-[9.4px]
                                       overflow-hidden
                                       cursor-pointer
                                       transition-all
                                       flex flex-col
                                     "
                  onClick={() => navigate(`/news/${article.id}`)}
                >
                  {/* ================= IMAGE ================= */}
                  <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
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
                  <div className="p-[20px] flex flex-col grow">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-[12px]">
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
                                           text-[#223f7f]
                                           line-clamp-3
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

export default NewsArticlePage;
