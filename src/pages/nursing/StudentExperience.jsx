import React from "react";

import studentExpMain from "../../assets/nursing/studentexp.svg";
import favourableIcon from "../../assets/nursing/favourablefac.svg";
import learningIcon from "../../assets/nursing/practicallearning.svg";
import curricularIcon from "../../assets/nursing/extracurriccular.svg";
import amenitiesIcon from "../../assets/nursing/modernaminities.svg";
import InfoCard from "../infoCard";
import PageSection from "../../features/common/layout/PageContainer";

export default function StudentExperience() {
  const features = [
    {
      icon: favourableIcon,
      title: "Favorable Faculty Ratio",
      desc: "+56 faculty for ~377 students ensures personalized attention and mentoring",
    },
    {
      icon: learningIcon,
      title: "Practical Learning",
      desc: "Simulation, skills labs, clinical rotations, case discussions, and hands-on training",
    },
    {
      icon: curricularIcon,
      title: "Extra-Curricular Activities",
      desc: "Workshops, seminars, case-presentations, academic clubs, and competitive events",
    },
    {
      icon: amenitiesIcon,
      title: "Modern Amenities",
      desc: "Hostels, transport, WiFi connectivity, campus safety, and comprehensive support",
    },
  ];

  return (
    <PageSection bg="bg-[#F7F9FC]">
      {/* Heading */}
      <div className="flex flex-col gap-[8px] w-full mb-[32px] md:mb-[40px]">
        <h2 className="font-montserrat font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[38px] md:leading-[44px] lg:leading-[48px] text-[#223F7F]">
          Student Experience
        </h2>
      </div>

      {/* Top — Image + Content */}
      <div className="flex flex-col xl:flex-row items-start justify-between gap-[24px] md:gap-[32px] xl:gap-[40px] w-full mb-[32px] md:mb-[40px]">
        {/* Left Image */}
        <div className="w-full xl:w-[578px] flex-shrink-0">
          <img
            src={studentExpMain}
            alt="Student Experience"
            className="w-full h-[250px] sm:h-[320px] md:h-[360px] xl:h-[394px] object-cover rounded-[8px]"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] w-full xl:max-w-[578px]">
          <h3 className="font-montserrat font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#223F7F] max-w-full xl:max-w-[461px]">
            Comprehensive Learning Environment
          </h3>

          <p className="font-montserrat text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#6B7280]">
            At ASRAM School of Nursing, we prioritize creating an environment
            where students can thrive academically, professionally, and
            personally. Our approach combines rigorous academics with practical
            exposure and holistic development.
          </p>
        </div>
      </div>

      {/* Bottom — 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] md:gap-[20px] lg:gap-[24px] w-full justify-items-center xl:justify-items-stretch">
        {features.map((item, i) => (
          <InfoCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.desc}
            variant="feature"
          />
        ))}
      </div>
    </PageSection>
  );
}
