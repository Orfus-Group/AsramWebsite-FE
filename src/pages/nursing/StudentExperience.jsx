import React from "react";

const studentExpMain = "/AsramWebsite-FE/assets/nursing/studentexp.png";
import InfoCard from "@/features/common/cards/InfoCard";
import PageSection from "@/features/common/layout/PageContainer";

const IconPublicHealth = "/AsramWebsite-FE/assets/icons/IconPublicHealth.svg";
const IconPracticalLearning = "/AsramWebsite-FE/assets/icons/IconPracticalLearning.svg";
const IconExtraCurricular = "/AsramWebsite-FE/assets/icons/IconExtraCurricular.svg";
const IconAmenities = "/AsramWebsite-FE/assets/icons/IconAmenities.svg";

export default function StudentExperience({
  data,
  iconBg,
  cardBg,
  iconContainerClassName,
  titleColor,
  cardBorder,
  titleClassName = "min-h-[54px]",
  // Content Props with Nursing Defaults
  imageSrc = studentExpMain,
  heading = "Student Experience",
  subHeading = "Comprehensive Learning Environment",
  description = [
    "At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development.",
    "At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development."
  ]
}) {
  const defaultFeatures = [
    {
      icon: (<img src={IconPublicHealth} className="w-[24px] h-[24px]" alt="" />),
      title: "Favorable Faculty Ratio",
      desc: "+56 faculty for ~377 students ensures personalized attention and mentoring",
    },
    {
      icon: (<img src={IconPracticalLearning} className="w-[24px] h-[24px]" alt="" />
      ),
      title: "Practical Learning",
      desc: "Simulation, skills labs, clinical rotations, case discussions, and hands-on training",
    },
    {
      icon: (<img src={IconExtraCurricular} className="w-[24px] h-[24px]" alt="" />
      ),
      title: "Extra-Curricular Activities",
      desc: "Workshops, seminars, case-presentations, academic clubs, and competitive events",
    },
    {
      icon: (<img src={IconAmenities} className="w-[24px] h-[24px]" alt="" />
      ),
      title: "Modern Amenities",
      desc: "Hostels, transport, WiFi connectivity, campus safety, and comprehensive support",
    },
  ];

  const features = data || defaultFeatures;

  return (
    <PageSection bg="bg-[#FFF]" paddingClass="py-[80px]">
      {/* Heading */}
      <div className="flex flex-col gap-[8px] w-full mb-[32px] md:mb-[40px]">
        <h2 className="font-montserrat font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[38px] md:leading-[44px] lg:leading-[48px] text-[#223F7F]">
          {heading}
        </h2>
      </div>

      {/* Top — Image + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start mb-[60px]">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src={imageSrc}
            alt={heading}
            className="w-full xl:h-[368px] h-auto block object-cover rounded-[12px]"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full flex flex-col items-start justify-center">
          <h4 className="font-regular font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#223F7F] max-w-full">
            {subHeading}
          </h4>

          {Array.isArray(description) ? (
            description.map((para, idx) => (
              <p key={idx} className="font-regular text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] mt-[20px]">
                {para}
              </p>
            ))
          ) : (
            <p className="font-regular text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] mt-[20px]">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom — 4 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] xl:gap-x-[23.7px] xl:gap-y-[24px] w-full justify-items-center xl:justify-items-stretch">
        {features.map((item, i) => (
          <InfoCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.desc}
            variant="studentExperience"
            iconBg={iconBg}
            cardBg={cardBg}
            iconContainerClassName={iconContainerClassName}
            titleColor={titleColor}
            cardBorder={cardBorder}
            titleClassName={titleClassName}
          />
        ))}
      </div>
    </PageSection>
  );
}
