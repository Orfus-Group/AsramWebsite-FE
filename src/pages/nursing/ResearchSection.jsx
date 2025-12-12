import React from "react";

import equityIcon from "../../assets/nursing/healthequity.svg";
import wellnessIcon from "../../assets/nursing/brain.svg";
import preciousIcon from "../../assets/nursing/preciousicon.svg";
import chronicIcon from "../../assets/nursing/chronicdisicon.svg";
import clinicalIcon from "../../assets/nursing/clinicalpractice.svg";
import mascularIcon from "../../assets/nursing/cardiovascular.svg";
import { T } from "../../theme";
import InfoCard from "../infoCard";
import Button from "../../components/ui/button";
import PageSection from "../../features/common/layout/PageContainer";

export default function ResearchSection() {
  const researchList = [
    {
      icon: mascularIcon,
      title: "Cardiovascular Health",
      description:
        "Investigating novel interventions to improve outcomes for patients with heart disease.",
    },
    {
      icon: wellnessIcon,
      title: "Mental Health & Wellness",
      description:
        "Advancing evidence-based approaches to mental health care and substance use disorders.",
    },
    {
      icon: equityIcon,
      title: "Health Equity",
      description:
        "Addressing disparities and promoting health equity in underserved communities.",
    },
    {
      icon: chronicIcon,
      title: "Chronic Disease Management",
      description:
        "Developing innovative strategies for managing diabetes, cancer, and other chronic conditions.",
    },
    {
      icon: clinicalIcon,
      title: "Clinical Practice Innovation",
      description:
        "Transforming care delivery through technology and evidence-based practice improvements.",
    },
    {
      icon: preciousIcon,
      title: "Precision Health",
      description:
        "Utilizing genomics and personalized medicine to optimize patient outcomes.",
    },
  ];

  return (
    <PageSection
      bg="bg-white"
      paddingClass="py-[80px]"
    >
      {/* Heading */}
      <h2
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[42px] leading-[48px]
          text-[${T.color.secondary}]
          w-full mb-[50px]
        `}
      >
        Research
      </h2>

      {/* Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3
          gap-[32px]
          w-full
        "
      >
        {researchList.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            variant="research"
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-[50px]">
        <Button>Explore Our Research</Button>
      </div>
    </PageSection>
  );
}
