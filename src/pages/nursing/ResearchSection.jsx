import React from "react";

import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";
import Button from "@/components/ui/button";
import PageSection from "@/features/common/layout/PageContainer";
import HeartCareIcon from "@/assets/icons/HeartCareIcon";
import {
  IconAiHealth as AiHealthIcon,
  IconNcd as NcdIcon,
  IconPublicHealth as PublicHealthIcon
} from "@/assets/icons";
import { ClinicalPracticeIcon, PrecisionHealthIcon } from "./ResearchIcons";


export default function ResearchSection() {
  const researchList = [
    {
      icon: (<HeartCareIcon size={38} color="#008C8C" strokeWidth={2.8} />),
      title: "Cardiovascular Health",
      description:
        "Investigating novel interventions to improve outcomes for patients with heart disease.",
    },
    {
      icon: <AiHealthIcon size={38} color="#008C8C" strokeWidth={2.8} />,
      title: "Mental Health & Wellness",
      description:
        "Advancing evidence-based approaches to mental health care and substance use disorders.",
    },
    {
      icon: (<PublicHealthIcon size={38} strokeWidth={2.8} color="#008C8C" />),
      title: "Health Equity",
      description:
        "Addressing disparities and promoting health equity in underserved communities.",
    },
    {
      icon: (<NcdIcon size={38} strokeWidth={2.8} color="#008C8C" />),
      title: "Chronic Disease Management",
      description:
        "Developing innovative strategies for managing diabetes, cancer, and other chronic conditions.",
    },
    {
      icon: <ClinicalPracticeIcon size={38} color="#008C8C" strokeWidth={2.8} />,
      title: "Clinical Practice Innovation",
      description:
        "Transforming care delivery through technology and evidence-based practice improvements.",
    },
    {
      icon: (<PrecisionHealthIcon size={38} color="#008C8C" strokeWidth={2.8} />),
      title: "Precision Health",
      description:
        "Utilizing genomics and personalized medicine to optimize patient outcomes.",
    },
  ];

  return (
    <PageSection
      bg="bg-[#EEF2F7]"
      paddingClass="py-[80px]"
    >
      {/* Heading */}
      <h2
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2]
          text-[${T.color.secondary}]
          w-full mb-[40px]
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
          gap-[30px]
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
      <div className="mt-[40px] flex justify-center">
        <Button>Explore Our Research</Button>
      </div>

    </PageSection>
  );
}
