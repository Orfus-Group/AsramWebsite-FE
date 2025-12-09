import React from "react";
import iconVision from "../../assets/nursing/vision.svg";
import iconMission from "../../assets/nursing/mission.svg";
import iconValues from "../../assets/nursing/values.svg";
import InfoCard from "../infoCard";

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
   <section className="relative bg-[#F7F9FC]">
  <div
    className="
      w-[1440px] max-w-full mx-auto
      px-[120px]
      pt-[120px]
      pb-[124px]
      flex flex-col
      gap-[60px]
    "
  >
    {/* Heading */}
    <h2 className="font-montserrat font-bold text-[36px] leading-[48px] tracking-[0px] text-[#223F7F] w-full">
      Vision, Mission & Values
    </h2>

    {/* Cards Wrapper */}
    <div className="flex justify-between w-full gap-[28.95px]">
      {vmv.map((item, index) => (
        <InfoCard key={index} {...item} variant="vmv" />
      ))}
    </div>
  </div>
</section>

  );
}
