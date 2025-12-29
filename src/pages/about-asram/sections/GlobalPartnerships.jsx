import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const PartnershipImg = "/AsramWebsite-FE/assets/about/globalpartnership.png";

const IconGlobeBlue = "/AsramWebsite-FE/assets/icons/IconGlobeBlue.svg";
const IconShieldLink = "/AsramWebsite-FE/assets/icons/IconShieldLink.svg";
const IconTrendUpBlue = "/AsramWebsite-FE/assets/icons/IconTrendUpBlue.svg";
const IconGradCapBlue = "/AsramWebsite-FE/assets/icons/IconGradCapBlue.svg";
const IconBuildingBlue = "/AsramWebsite-FE/assets/icons/IconBuildingBlue.svg";
const IconLightbulbBlue = "/AsramWebsite-FE/assets/icons/IconLightbulbBlue.svg";

const topList = [
  {
    title: "50+ Partner Institutions",
    desc: "Collaborating with top medical schools and research centers worldwide",
    icon: IconGlobeBlue
  },
  {
    title: "Student Exchange Programs",
    desc: "Enabling international learning experiences and cultural exchange",
    icon: IconShieldLink
  },
  {
    title: "Joint Research Initiatives",
    desc: "Collaborative studies addressing global health challenges",
    icon: IconTrendUpBlue
  }
];

const cards = [
  {
    title: "Academic Partners",
    icon: IconGradCapBlue,
    desc: "Leading universities and medical schools sharing expertise",
    list: ["Joint degree programs", "Faculty exchange", "Curriculum development"]
  },
  {
    title: "Healthcare Organizations",
    icon: IconBuildingBlue,
    desc: "Hospitals and health systems advancing clinical excellence",
    list: ["Clinical training sites", "Best practice sharing", "Quality improvement"]
  },
  {
    title: "Research Institutions",
    icon: IconLightbulbBlue,
    desc: "Centers of excellence driving medical innovation",
    list: ["Collaborative research", "Resource sharing", "Technology transfer"]
  },
];

const GlobalPartnerships = () => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
      {/* Heading */}
      <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
        Global Partnerships
      </h1>

      {/* Image + Content */}
      <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] mb-[30px] lg:mb-[40px] items-stretch w-full">
        {/* Image */}
        <div className="w-full lg:flex-1 flex-shrink-0">
          <img
            src={PartnershipImg}
            alt="International Collaboration"
            className="w-full h-auto block"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:flex-1 flex flex-col justify-start gap-[30px]">
          <div>
            <h2 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-4`}>
              International Collaboration
            </h2>

            <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] mb-5 lg:mb-0`}>
              ASRAM maintains strategic partnerships with prestigious medical institutions across six continents, fostering knowledge exchange, joint research initiatives, and collaborative educational programs.
            </p>
          </div>

          <div className="flex flex-col gap-[12px]">
            {topList.map((item, idx) => (
              <div key={idx} className="flex gap-[16px]">
                <div className="flex-shrink-0 text-[#223F7F] mt-1">
                  <img src={item.icon} className="w-[21px] h-[21px]" alt="" />
                </div>
                <div>
                  <h4 className={`${T.font.family} font-bold text-[16px] text-[#223F7F] mb-1`}>
                    {item.title}
                  </h4>
                  <p className={`${T.font.family} text-[14px] text-[#4B5563] leading-[1.4]`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#EEF2F7] p-[24px] rounded-[10px] border border-[rgba(7,7,7,0.2)] flex flex-col items-start h-full"
          >
            <div className="w-[49px] h-[49px] bg-white rounded-[11.15px] flex items-center justify-center mb-[16px] border border-[rgba(0,0,0,0.05)]">
              <img src={card.icon} className="w-[35px] h-[35px]" alt="" />
            </div>

            <h4 className={`${T.font.family} font-medium text-[20px] text-[#223F7F] mb-[8px]`}>
              {card.title}
            </h4>

            <p className={`${T.font.family} text-[18px] text-[#191919] leading-[26px] mb-[20px]`}>
              {card.desc}
            </p>

            <ul className="space-y-[8px] mt-auto">
              {card.list.map((li, i) => (
                <li key={i} className={`${T.font.family} font-regular leading-[20px] text-[14px] text-[#6B6B6B] flex items-center gap-2`}>
                  <span className="w-[4px] h-[4px] bg-[#9CA3AF] rounded-full" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default GlobalPartnerships;
