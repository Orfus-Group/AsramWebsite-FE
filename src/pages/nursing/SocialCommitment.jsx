import React from "react";

const outreachImg = "/AsramWebsite-FE/assets/nursing/socialcommitment.png";
import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";
import TwoColumnSection from "@/features/common/layout/TwoColumnSection";

// Inline Icons for Color Customization
const IconHeartCare = ({ color = "white" }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="transition-all duration-700" d="M2.30261 10.9375C2.30264 9.65632 2.69129 8.40528 3.41724 7.34962C4.14319 6.29395 5.17229 5.48333 6.36861 5.02481C7.56493 4.56628 8.8722 4.48144 10.1178 4.78147C11.3633 5.0815 12.4886 5.7523 13.3449 6.70527C13.4052 6.76976 13.4781 6.82117 13.5591 6.85632C13.6401 6.89147 13.7275 6.90961 13.8158 6.90961C13.9041 6.90961 13.9914 6.89147 14.0724 6.85632C14.1534 6.82117 14.2263 6.76976 14.2867 6.70527C15.1403 5.74611 16.2658 5.06967 17.5134 4.76599C18.761 4.46232 20.0714 4.5458 21.2704 5.00533C22.4694 5.46486 23.4999 6.27865 24.2249 7.33838C24.95 8.39811 25.335 9.65351 25.3289 10.9375C25.3289 13.574 23.602 15.5428 21.8750 17.2697L15.5520 23.3867C15.3374 23.6331 15.0729 23.8310 14.7760 23.9673C14.4791 24.1036 14.1566 24.1752 13.8299 24.1772C13.5032 24.1793 13.1798 24.1118 12.8812 23.9793C12.5826 23.8468 12.3156 23.6522 12.0980 23.4086L5.75656 17.2697C4.02959 15.5428 2.30261 13.5855 2.30261 10.9375Z" stroke={color} strokeWidth="2.30263" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPublicHealth = ({ color = "white" }) => (
  <svg width="24" height="24" viewBox="-1 -1 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 3.12695C16.8578 3.34932 17.6174 3.85022 18.1597 4.55102C18.702 5.25181 18.9962 6.11284 18.9962 6.99895C18.9962 7.88506 18.702 8.74609 18.1597 9.44689C17.6174 10.1477 16.8578 10.6486 16 10.871" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 21.0009V19.0009C21.9993 18.1146 21.7044 17.2536 21.1614 16.5532C20.6184 15.8527 19.8581 15.3524 19 15.1309" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClinicalPractice = ({ color = "white" }) => (
  <svg width="24" height="24" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4168 3.16644V6.33311" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.91681 3.16644V6.33311" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.91663 4.74969H6.33329C5.49344 4.74969 4.68799 5.08332 4.09412 5.67719C3.50026 6.27106 3.16663 7.07651 3.16663 7.91636V14.2497C3.16663 16.7693 4.16752 19.1856 5.94911 20.9672C7.73071 22.7488 10.1471 23.7497 12.6666 23.7497C15.1862 23.7497 17.6025 22.7488 19.3841 20.9672C21.1657 19.1856 22.1666 16.7693 22.1666 14.2497V7.91636C22.1666 7.07651 21.833 6.27106 21.2391 5.67719C20.6453 5.08332 19.8398 4.74969 19 4.74969H17.4166" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.6666 23.7499C12.6666 26.2695 13.6675 28.6859 15.4491 30.4675C17.2306 32.249 19.647 33.2499 22.1666 33.2499C24.6861 33.2499 27.1025 32.249 28.8841 30.4675C30.6657 28.6859 31.6666 26.2695 31.6666 23.7499V18.9999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31.6667 18.9998C33.4156 18.9998 34.8334 17.582 34.8334 15.8331C34.8334 14.0842 33.4156 12.6664 31.6667 12.6664C29.9178 12.6664 28.5001 14.0842 28.5001 15.8331C28.5001 17.582 29.9178 18.9998 31.6667 18.9998Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconEthicalTraining = ({ color = "white" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8717 2.7766C10.914 2.55022 11.0341 2.34576 11.2113 2.19862C11.3885 2.05149 11.6115 1.97095 11.8418 1.97095C12.0721 1.97095 12.2951 2.05149 12.4723 2.19862C12.6494 2.34576 12.7696 2.55022 12.8119 2.7766L13.849 8.26147C13.9227 8.65142 14.1122 9.0101 14.3928 9.29071C14.6734 9.57133 15.0321 9.76083 15.422 9.83449L20.9069 10.8717C21.1333 10.9139 21.3378 11.0341 21.4849 11.2112C21.632 11.3884 21.7126 11.6114 21.7126 11.8417C21.7126 12.072 21.632 12.2951 21.4849 12.4722C21.3378 12.6494 21.1333 12.7695 20.9069 12.8118L15.422 13.849C15.0321 13.9226 14.6734 14.1121 14.3928 14.3927C14.1122 14.6734 13.9227 15.032 13.849 15.422L12.8119 20.9069C12.7696 21.1332 12.6494 21.3377 12.4723 21.4848C12.2951 21.632 12.0721 21.7125 11.8418 21.7125C11.6115 21.7125 11.3885 21.632 11.2113 21.4848C11.0341 21.3377 10.914 21.1332 10.8717 20.9069L9.83455 15.422C9.76089 15.032 9.57138 14.6734 9.29077 14.3927C9.01016 14.1121 8.65147 13.9226 8.26152 13.849L2.77665 12.8118C2.55028 12.7695 2.34581 12.6494 2.19868 12.4722C2.05154 12.2951 1.971 12.072 1.971 11.8417C1.971 11.6114 2.05154 11.3884 2.19868 11.2112C2.34581 11.0341 2.55028 10.9139 2.77665 10.8717L8.26152 9.83449C8.65147 9.76083 9.01016 9.57133 9.29077 9.29071C9.57138 9.0101 9.76089 8.65142 9.83455 8.26147L10.8717 2.7766Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.7367 1.97302V5.92039" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.7104 3.94678H17.763" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.94725 21.7098C5.03729 21.7098 5.92094 20.8262 5.92094 19.7361C5.92094 18.6461 5.03729 17.7625 3.94725 17.7625C2.85722 17.7625 1.97357 18.6461 1.97357 19.7361C1.97357 20.8262 2.85722 21.7098 3.94725 21.7098Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SocialCommitment({
  iconColor = "white",
  cardBg,
  cardBorder,
  iconBg,
  data,
  description
}) {
  const defaultFeatures = [
    {
      icon: <IconHeartCare color={iconColor} />,
      title: "Health Camps",
      description:
        "Regular health camps in underserved areas providing free check-ups and health education",
    },
    {
      icon: <IconPublicHealth color={iconColor} />,
      title: "Rural Outreach",
      description:
        "Community health programmes focusing on preventive care and health awareness",
    },
    {
      icon: <IconClinicalPractice color={iconColor} />,
      title: "Health Education",
      description:
        "Workshops and sessions on hygiene, nutrition, disease prevention, and wellness",
    },
    {
      icon: <IconEthicalTraining color={iconColor} />,
      title: "Ethical Training",
      description:
        "Focus on compassionate care, professional ethics, and patient-centered values",
    },
  ];

  const finalFeatures = defaultFeatures.map((feature, index) => {
    if (data && data[index]) {
      return { ...feature, ...data[index] };
    }
    return feature;
  });

  const defaultParagraphs = [
    "As part of the ASRAM educational society, the nursing school actively participates in health camps, rural outreach, and community health programmes—aligning education with service to society. Students engage directly with communities to understand real-world healthcare needs.",
    "The focus on holistic development includes instilling ethics, empathy, and a service-oriented mindset among nursing students, preparing them to serve diverse communities with compassion and dedication.",
  ];

  return (
    <TwoColumnSection
      title="Social Commitment"
      bgColor="#FFF"
      innerHeading="Service-Oriented Education"
      image={outreachImg}
      paragraphs={description || defaultParagraphs}
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
        {finalFeatures.map((item, i) => (
          <InfoCard
            key={i}
            {...item}
            variant="socialCommitment"
            cardBg={cardBg}
            cardBorder={cardBorder}
            iconBg={iconBg}
          />
        ))}
      </div>
    </TwoColumnSection>
  );
}

