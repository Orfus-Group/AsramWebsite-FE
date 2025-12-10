import React from "react";
import iconVision from "../../assets/nursing/vision.svg";
import iconMission from "../../assets/nursing/mission.svg";
import iconValues from "../../assets/nursing/values.svg";
import InfoCard from "../infoCard";
import PageSection from "../../features/common/layout/PageContainer";


export default function VisionMissionSection() {
  const vmv = [
    {
      icon: iconVision,
      title: "Vision",
      description:
        "To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands.",
    },
    {
      icon: iconMission,
      title: "Mission",
      description:
        "To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands.",
    },
    {
      icon: iconValues,
      title: "Values",
      description:
        "Compassion, excellence, integrity, service, innovation—students are trained not only in technical proficiency but also in ethical and patient-centered care.",
    },
  ];

  return (
    <PageSection
      bg="bg-[#F7F9FC]"
      sectionClassName="relative"
      className="flex flex-col gap-[60px]"
    >
      {/* Heading */}
      <h2 className="font-montserrat font-bold text-[36px] leading-[48px] tracking-[0px] text-[#223F7F] w-full">
        Vision, Mission & Values
      </h2>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-[28.95px]
          w-full
        "
      >
        {vmv.map((item, index) => (
          <InfoCard key={index} {...item} variant="vmv" />
        ))}
      </div>
    </PageSection>
  );
}
