import React from "react";

const outreachImg = "/AsramWebsite-FE/assets/nursing/socialcommitment.png";
import { T } from "@/theme";

import InfoCard from "@/features/common/cards/InfoCard";
import TwoColumnSection from "@/features/common/layout/TwoColumnSection";

const IconHeartCare = "/AsramWebsite-FE/assets/icons/IconHeartCare.svg";
const IconPublicHealth = "/AsramWebsite-FE/assets/icons/IconPublicHealth.svg";
const IconClinicalPractice = "/AsramWebsite-FE/assets/icons/IconClinicalPractice.svg";
const IconEthicalTraining = "/AsramWebsite-FE/assets/icons/IconEthicalTraining.svg";

export default function SocialCommitment() {
  const features = [
    {
      icon: (<img src={IconHeartCare} className="w-[24px] h-[24px]" alt="" />),
      title: "Health Camps",
      description:
        "Regular health camps in underserved areas providing free check-ups and health education",
    },
    {
      icon: (<img src={IconPublicHealth} className="w-[24px] h-[24px]" alt="" />),
      title: "Rural Outreach",
      description:
        "Community health programmes focusing on preventive care and health awareness",
    },
    {
      icon: (<img src={IconClinicalPractice} className="w-[24px] h-[24px]" alt="" />),
      title: "Health Education",
      description:
        "Workshops and sessions on hygiene, nutrition, disease prevention, and wellness",
    },
    {
      icon: (<img src={IconEthicalTraining} className="w-[24px] h-[24px]" alt="" />),
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
          gap-[20px]
          w-full
        "
      >
        {features.map((item, i) => (
          <InfoCard key={i} {...item} variant="socialCommitment" />
        ))}
      </div>
    </TwoColumnSection>
  );
}
