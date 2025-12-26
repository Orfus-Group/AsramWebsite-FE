import React from "react";

import preciousIcon from "@/assets/nursing/preciousicon.svg";
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


const BaseIcon = ({
  size = 24,
  viewBox = "0 0 38 38", // ⭐ padding added
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




export const ClinicalPracticeIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) => (
  <BaseIcon size={size} className={className}>
    <path
      d="M17.4168 3.16644V6.33311"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.91681 3.16644V6.33311"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.91663 4.74969H6.33329C5.49344 4.74969 4.68799 5.08332 4.09412 5.67719C3.50026 6.27106 3.16663 7.07651 3.16663 7.91636V14.2497C3.16663 16.7693 4.16752 19.1856 5.94911 20.9672C7.73071 22.7488 10.1471 23.7497 12.6666 23.7497C15.1862 23.7497 17.6025 22.7488 19.3841 20.9672C21.1657 19.1856 22.1666 16.7693 22.1666 14.2497V7.91636C22.1666 7.07651 21.833 6.27106 21.2391 5.67719C20.6453 5.08332 19.8398 4.74969 19 4.74969H17.4166"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6666 23.7499C12.6666 26.2695 13.6675 28.6859 15.4491 30.4675C17.2306 32.249 19.647 33.2499 22.1666 33.2499C24.6861 33.2499 27.1025 32.249 28.8841 30.4675C30.6657 28.6859 31.6666 26.2695 31.6666 23.7499V18.9999"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31.6667 18.9998C33.4156 18.9998 34.8334 17.582 34.8334 15.8331C34.8334 14.0842 33.4156 12.6664 31.6667 12.6664C29.9178 12.6664 28.5001 14.0842 28.5001 15.8331C28.5001 17.582 29.9178 18.9998 31.6667 18.9998Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);


export const PreciousHealthIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) => (
  <BaseIcon size={size} className={className}>
    <path
      d="M17.4168 3.16644V6.33311"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.91681 3.16644V6.33311"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.91663 4.74969H6.33329C5.49344 4.74969 4.68799 5.08332 4.09412 5.67719C3.50026 6.27106 3.16663 7.07651 3.16663 7.91636V14.2497C3.16663 16.7693 4.16752 19.1856 5.94911 20.9672C7.73071 22.7488 10.1471 23.7497 12.6666 23.7497C15.1862 23.7497 17.6025 22.7488 19.3841 20.9672C21.1657 19.1856 22.1666 16.7693 22.1666 14.2497V7.91636C22.1666 7.07651 21.833 6.27106 21.2391 5.67719C20.6453 5.08332 19.8398 4.74969 19 4.74969H17.4166"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6666 23.7499C12.6666 26.2695 13.6675 28.6859 15.4491 30.4675C17.2306 32.249 19.647 33.2499 22.1666 33.2499C24.6861 33.2499 27.1025 32.249 28.8841 30.4675C30.6657 28.6859 31.6666 26.2695 31.6666 23.7499V18.9999"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31.6667 18.9998C33.4156 18.9998 34.8334 17.582 34.8334 15.8331C34.8334 14.0842 33.4156 12.6664 31.6667 12.6664C29.9178 12.6664 28.5001 14.0842 28.5001 15.8331C28.5001 17.582 29.9178 18.9998 31.6667 18.9998Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);







export default function ResearchSection() {
  const researchList = [
    {
      icon: (<HeartCareIcon
        size={38}
        color="#008C8C"
        strokeWidth={2.8}
      />
      ),
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
      icon: (<PublicHealthIcon size={38}
        strokeWidth={2.8}
        color="#008C8C"
      />),
      title: "Health Equity",
      description:
        "Addressing disparities and promoting health equity in underserved communities.",
    },
    {
      icon: (<NcdIcon size={38}
        strokeWidth={2.8}
        color="#008C8C"
      />),
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
      icon: (<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 28.5H22.1667" stroke="#008C8C" stroke-width="3.28947" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.75 34.832H33.25" stroke="#008C8C" stroke-width="3.28947" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.1673 34.8346C25.1068 34.8346 27.9259 33.6669 30.0044 31.5884C32.0829 29.5099 33.2507 26.6908 33.2507 23.7513C33.2507 20.8118 32.0829 17.9927 30.0044 15.9142C27.9259 13.8357 25.1068 12.668 22.1673 12.668H20.584" stroke="#008C8C" stroke-width="3.28947" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.25 22.168H17.4167" stroke="#008C8C" stroke-width="3.28947" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.2507 19C13.4108 19 12.6053 18.6664 12.0115 18.0725C11.4176 17.4786 11.084 16.6732 11.084 15.8333V9.5H20.584V15.8333C20.584 16.6732 20.2504 17.4786 19.6565 18.0725C19.0626 18.6664 18.2572 19 17.4173 19H14.2507Z" stroke="#008C8C" stroke-width="3.28947" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19.0013 9.5013V4.7513C19.0013 4.33138 18.8345 3.92865 18.5376 3.63172C18.2406 3.33478 17.8379 3.16797 17.418 3.16797H14.2513C13.8314 3.16797 13.4286 3.33478 13.1317 3.63172C12.8348 3.92865 12.668 4.33138 12.668 4.7513V9.5013" stroke="#008C8C" stroke-width="3.28947" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
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
