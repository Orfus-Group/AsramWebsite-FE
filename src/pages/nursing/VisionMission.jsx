import React from "react";
import InfoCard from "@/features/common/cards/InfoCard";
import PageSection from "@/features/common/layout/PageContainer";
import { AccreditedIcon, CareerReadyIcon } from "../academics/WhyChooseNursingSchool";
import HeartCareIcon from "@/assets/icons/HeartCareIcon";

export default function VisionMissionSection() {
  const vmv = [
    {
      icon: <CareerReadyIcon />,
      title: "Vision",
      description:
        "To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands.",
    },
    {
      icon: (
        <HeartCareIcon
          size={28}
          color="white"
          strokeWidth={2.30263}
        />
      ),
      title: "Mission",
      description:
        "To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands.",
    },
    {
      icon: <AccreditedIcon />,
      title: "Values",
      description:
        "Compassion, excellence, integrity, service, innovation—students are trained not only in technical proficiency but also in ethical and patient-centered care.",
    },
  ];

  return (
    <PageSection
      bg="bg-[#EEF2F7]"
      paddingClass="py-[80px]"
    >
      {/* Heading */}
      <h2
        className="
          font-montserrat
          font-bold
          text-[28px]
          leading-[36px]
          sm:text-[32px]
          sm:leading-[42px]
          lg:text-[36px]
          lg:leading-[48px]
          mb-[32px]
          md:mb-[40px]
          text-[#223F7F]
          w-full
        "
      >
        Vision, Mission & Values
      </h2>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-y-[32px]
          lg:gap-x-[46px]

          w-full
        "
      >
        {vmv.map((item, index) => (
          <InfoCard
            key={index}
            {...item}
            variant="vmv"
            className="w-full max-w-none"
          />
        ))}
      </div>
    </PageSection>
  );
}
