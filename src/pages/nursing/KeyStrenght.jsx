import React from "react";

// ICONS
import hospitalIntegration from "../../assets/nursing/hospitalint.svg";
import robustInfra from "../../assets/nursing/robustinfra.svg";
import recognised from "../../assets/nursing/recognise.svg";
import clearPathways from "../../assets/nursing/clearpathways.svg";
import studentCentric from "../../assets/nursing/studentcetric.svg";
import practical from "../../assets/nursing/practicalorient.svg";

import { T } from "../../theme";
import InfoCard from "../infoCard";

export default function KeyStrengthsSection() {
  const strengths = [
    {
      icon: hospitalIntegration,
      title: "Hospital Integration",
      description:
        "Comprehensive multispecialty hospital providing real-time clinical exposure and practical training",
    },
    {
      icon: robustInfra,
      title: "Robust Infrastructure",
      description:
        "State-of-the-art labs, simulation centers, library, hostels, and sports facilities",
    },
    {
      icon: recognised,
      title: "Recognized Affiliations",
      description:
        "INC approval and NTRUHS affiliation lending credibility and national recognition",
    },
    {
      icon: clearPathways,
      title: "Clear Pathways",
      description:
        "Structured progression from undergraduate to postgraduate levels within the institution",
    },
    {
      icon: studentCentric,
      title: "Student-Centered Environment",
      description:
        "Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth",
    },
    {
      icon: practical,
      title: "Practical Orientation",
      description:
        "Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone",
    },
  ];

  return (
    <section className={`w-full ${T.bg.white} flex justify-center`}>
      <div
        className="
          w-[1440px] max-w-full
          px-[120px]
          pt-[80px] pb-[40px]
          flex flex-col gap-[60px]
        "
      >
        {/* ---------------- TOP HEADINGS ---------------- */}
        <div className="flex justify-between items-start w-full">
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[36px] leading-[48px]
              w-[420px]
            `}
            style={{ color: T.color.text.secondary }}
          >
            Key Strengths
          </h2>

         
        </div>

        {/* ---------------- GRID OF CARDS ---------------- */}
        <div className="grid grid-cols-3 gap-x-[28px] gap-y-[40px] w-full">
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
    </section>
  );
}
