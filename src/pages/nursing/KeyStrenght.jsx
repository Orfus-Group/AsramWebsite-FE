import React from "react";

// ICONS

import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";
import PageSection from "@/features/common/layout/PageContainer";
import WhyChooseSection from "./WhyChooseNursing";

const IconHospitalIntegration = "/AsramWebsite-FE/assets/icons/IconHospitalIntegration.svg";
const IconRobustInfra = "/AsramWebsite-FE/assets/icons/IconRobustInfra.svg";
const IconRecognizedAffiliations = "/AsramWebsite-FE/assets/icons/IconRecognizedAffiliations.svg";
const IconClearPathways = "/AsramWebsite-FE/assets/icons/IconClearPathways.svg";
const IconStudentCentered = "/AsramWebsite-FE/assets/icons/IconStudentCentered.svg";
const IconOrientation = "/AsramWebsite-FE/assets/icons/IconOrientation.svg";

export default function KeyStrengthsSection() {
  const strengths = [
    {
      icon: (
        <img src={IconHospitalIntegration} className="w-[28px] h-[28px]" alt="" />
      ),
      title: "Hospital Integration",
      description:
        "Comprehensive multispecialty hospital providing real-time clinical exposure and practical training",
    },
    {
      icon: (
        <img src={IconRobustInfra} className="w-[28px] h-[28px]" alt="" />
      ),
      title: "Robust Infrastructure",
      description:
        "State-of-the-art labs, simulation centers, library, hostels, and sports facilities",
    },
    {
      icon: (
        <img src={IconRecognizedAffiliations} className="w-[28px] h-[28px]" alt="" />
      ), title: "Recognized Affiliations",
      description:
        "INC approval and NTRUHS affiliation lending credibility and national recognition",
    },
    {
      icon: (
        <img src={IconClearPathways} className="w-[28px] h-[28px]" alt="" />
      ), title: "Clear Pathways",
      description:
        "Structured progression from undergraduate to postgraduate levels within the institution",
    },
    {
      icon: (
        <img src={IconStudentCentered} className="w-[28px] h-[28px]" alt="" />
      ), title: "Student-Centered Environment",
      description:
        "Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth",
    },
    {
      icon: (
        <img src={IconOrientation} className="w-[28px] h-[28px]" alt="" />
      ), title: "Practical Orientation",
      description:
        "Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone",
    },
  ];


  return (
    <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[80px]">
      <div className="flex flex-col gap-[50px]">
        {/* TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `}
          style={{ color: T.color.text.secondary }}
        >
          Key Strengths
        </h2>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            gap-[40px]
            w-full
          "
        >
          {strengths.map((item, index) => (
            <InfoCard
              key={index}
              variant="keystrength"
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
      <WhyChooseSection />
    </PageSection>
  );
}
