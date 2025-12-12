import React from "react";

import outreachImg from "../../assets/nursing/socialcommitment.svg";
import healthIcon from "../../assets/nursing/healthcamps.svg";
import outreachIcon from "../../assets/nursing/outreachrural.svg";
import educationIcon from "../../assets/nursing/healthedu.svg";
import ethicalIcon from "../../assets/nursing/ethicaltraining.svg";
import { T } from "../../theme";

import InfoCard from "../infoCard";
import TwoColumnSection from "../../features/common/layout/TwoColumnSection";

export default function CommunityOutreachSection() {
  const features = [
    {
      icon: healthIcon,
      title: "Health Camps",
      description:
        "Regular health camps in underserved areas providing free check-ups and health education",
    },
    {
      icon: outreachIcon,
      title: "Rural Outreach",
      description:
        "Community health programmes focusing on preventive care and health awareness",
    },
    {
      icon: educationIcon,
      title: "Health Education",
      description:
        "Workshops and sessions on hygiene, nutrition, disease prevention, and wellness",
    },
    {
      icon: ethicalIcon,
      title: "Ethical Training",
      description:
        "Focus on compassionate care, professional ethics, and patient-centered values",
    },
  ];

  return (
    <TwoColumnSection
      title="Social Commitment"
      bgColor="#F7F9FC"
      innerHeading="Service-Oriented Education"
      image={outreachImg}
      paragraphs={[
        "As part of the ASRAM educational society, the nursing school actively participates in health camps, rural outreach, and community health programmes—aligning education with service to society.",
        "The focus on holistic development includes instilling ethics, empathy, and a service-oriented mindset among nursing students, preparing them to serve diverse communities with compassion and dedication.",
      ]}
    >
      {/* Responsive Feature Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-2 
          xl:grid-cols-4
          gap-[28px]
          w-full
        "
      >
        {features.map((item, i) => (
          <InfoCard key={i} {...item} variant="feature" />
        ))}
      </div>
    </TwoColumnSection>
  );
}
