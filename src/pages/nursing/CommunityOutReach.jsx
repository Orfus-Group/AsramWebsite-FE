import React from "react";

import outreachImg from "@/assets/nursing/socialcommitment.svg";
import healthIcon from "@/assets/nursing/healthcamps.svg";
import outreachIcon from "@/assets/nursing/outreachrural.svg";
import educationIcon from "@/assets/nursing/healthedu.svg";
import ethicalIcon from "@/assets/nursing/ethicaltraining.svg";
import { T } from "@/theme";

import InfoCard from "@/features/common/cards/InfoCard";
import TwoColumnSection from "@/features/common/layout/TwoColumnSection";
import HeartCareIcon from "@/assets/icons/HeartCareIcon";
import { IconPublicHealth as PublicHealthIcon } from "@/assets/icons";
import { ClinicalPracticeIcon } from "./ResearchSection";

const BaseIcon = ({
  size = 24,
  viewBox = "0 0 24 24", // ⭐ padding added
  children,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {children}
  </svg>
);




export const EthicalTrainingIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) => (
  <BaseIcon size={size} className={className}>
    <path
      d="M10.8717 2.7766C10.914 2.55022 11.0341 2.34576 11.2113 2.19862C11.3885 2.05149 11.6115 1.97095 11.8418 1.97095C12.0721 1.97095 12.2951 2.05149 12.4723 2.19862C12.6494 2.34576 12.7696 2.55022 12.8119 2.7766L13.849 8.26147C13.9227 8.65142 14.1122 9.0101 14.3928 9.29071C14.6734 9.57133 15.0321 9.76083 15.422 9.83449L20.9069 10.8717C21.1333 10.9139 21.3378 11.0341 21.4849 11.2112C21.632 11.3884 21.7126 11.6114 21.7126 11.8417C21.7126 12.072 21.632 12.2951 21.4849 12.4722C21.3378 12.6494 21.1333 12.7695 20.9069 12.8118L15.422 13.849C15.0321 13.9226 14.6734 14.1121 14.3928 14.3927C14.1122 14.6734 13.9227 15.032 13.849 15.422L12.8119 20.9069C12.7696 21.1332 12.6494 21.3377 12.4723 21.4848C12.2951 21.632 12.0721 21.7125 11.8418 21.7125C11.6115 21.7125 11.3885 21.632 11.2113 21.4848C11.0341 21.3377 10.914 21.1332 10.8717 20.9069L9.83455 15.422C9.76089 15.032 9.57138 14.6734 9.29077 14.3927C9.01016 14.1121 8.65147 13.9226 8.26152 13.849L2.77665 12.8118C2.55028 12.7695 2.34581 12.6494 2.19868 12.4722C2.05154 12.2951 1.971 12.072 1.971 11.8417C1.971 11.6114 2.05154 11.3884 2.19868 11.2112C2.34581 11.0341 2.55028 10.9139 2.77665 10.8717L8.26152 9.83449C8.65147 9.76083 9.01016 9.57133 9.29077 9.29071C9.57138 9.0101 9.76089 8.65142 9.83455 8.26147L10.8717 2.7766Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M19.7367 1.97302V5.92039"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M21.7104 3.94678H17.763"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M3.94725 21.7098C5.03729 21.7098 5.92094 20.8262 5.92094 19.7361C5.92094 18.6461 5.03729 17.7625 3.94725 17.7625C2.85722 17.7625 1.97357 18.6461 1.97357 19.7361C1.97357 20.8262 2.85722 21.7098 3.94725 21.7098Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);


export default function CommunityOutreachSection() {
  const features = [
    {
      icon: (<HeartCareIcon
        size={24}
        color="#FFF"
        strokeWidth={2}
      />),


      title: "Health Camps",
      description:
        "Regular health camps in underserved areas providing free check-ups and health education",
    },
    {
      icon: (<PublicHealthIcon size={24}
        strokeWidth={2}
        color="#FFF"
      />),
      title: "Rural Outreach",
      description:
        "Community health programmes focusing on preventive care and health awareness",
    },
    {
      icon: (<ClinicalPracticeIcon size={24} color="#FFF" strokeWidth={2} />),
      title: "Health Education",
      description:
        "Workshops and sessions on hygiene, nutrition, disease prevention, and wellness",
    },
    {
      icon: (<EthicalTrainingIcon size={24} color="#FFF" strokeWidth={2} />),
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
