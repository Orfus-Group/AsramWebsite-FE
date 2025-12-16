import React from "react";

import studentExpMain from "@/assets/nursing/studentexp.svg";
import favourableIcon from "@/assets/nursing/favourablefac.svg";
import learningIcon from "@/assets/nursing/practicallearning.svg";
import curricularIcon from "@/assets/nursing/extracurriccular.svg";
import amenitiesIcon from "@/assets/nursing/modernaminities.svg";
import InfoCard from "@/features/common/cards/InfoCard";
import PageSection from "@/features/common/layout/PageContainer";
import { PublicHealthIcon } from "../research/sections/ResearchPriorities";




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


export const PracticalLearningIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) => (
  <BaseIcon size={size} className={className}>
    <path
      d="M14.8027 13.8156C15.0001 12.8288 15.4935 12.138 16.283 11.3485C17.2698 10.4604 17.7632 9.17749 17.7632 7.89459C17.7632 6.32423 17.1394 4.81819 16.029 3.70778C14.9186 2.59736 13.4126 1.97354 11.8422 1.97354C10.2718 1.97354 8.76579 2.59736 7.65538 3.70778C6.54497 4.81819 5.92114 6.32423 5.92114 7.89459C5.92114 8.88144 6.11851 10.0656 7.40141 11.3485C8.0922 12.0393 8.6843 12.8288 8.88167 13.8156"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.88141 17.763H14.8025"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.86853 21.7103H13.8159"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);



export const ExtraCuriccularIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) => (
  <BaseIcon size={size} className={className}>
    <path
      d="M9.86894 14.467V16.0716C9.86522 16.4097 9.77468 16.7412 9.60603 17.0343C9.43737 17.3274 9.19625 17.5722 8.90579 17.7453C8.28915 18.202 7.78753 18.7963 7.4408 19.4808C7.09407 20.1654 6.91178 20.9214 6.90842 21.6887"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M13.8166 14.467V16.0716C13.8203 16.4097 13.9108 16.7412 14.0795 17.0343C14.2481 17.3274 14.4892 17.5722 14.7797 17.7453C15.3964 18.202 15.898 18.7963 16.2447 19.4808C16.5914 20.1654 16.7737 20.9214 16.7771 21.6887"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M17.7639 8.88143H19.2442C19.8985 8.88143 20.526 8.6215 20.9887 8.15883C21.4514 7.69616 21.7113 7.06864 21.7113 6.41433C21.7113 5.76001 21.4514 5.13249 20.9887 4.66982C20.526 4.20715 19.8985 3.94722 19.2442 3.94722H17.7639"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M3.94763 21.7103H19.7371"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M5.92081 8.88144C5.92081 10.4518 6.54463 11.9578 7.65504 13.0683C8.76546 14.1787 10.2715 14.8025 11.8419 14.8025C13.4122 14.8025 14.9183 14.1787 16.0287 13.0683C17.1391 11.9578 17.7629 10.4518 17.7629 8.88144V2.96038C17.7629 2.69866 17.6589 2.44765 17.4739 2.26258C17.2888 2.07751 17.0378 1.97354 16.7761 1.97354H6.90765C6.64592 1.97354 6.39492 2.07751 6.20985 2.26258C6.02478 2.44765 5.92081 2.69866 5.92081 2.96038V8.88144Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M5.92082 8.88143H4.44055C3.78624 8.88143 3.15872 8.6215 2.69605 8.15883C2.23338 7.69616 1.97345 7.06864 1.97345 6.41433C1.97345 5.76001 2.23338 5.13249 2.69605 4.66982C3.15872 4.20715 3.78624 3.94722 4.44055 3.94722H5.92082"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);



export const AmenitiesIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) => (
  <BaseIcon size={size} className={className}>
    <path
      d="M11.8425 19.7367H11.8525"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M1.97358 8.70371C4.68751 6.2763 8.20089 4.93431 11.842 4.93431C15.4831 4.93431 18.9965 6.2763 21.7104 8.70371"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M4.93436 12.6897C6.77905 10.8816 9.25917 9.86877 11.8423 9.86877C14.4253 9.86877 16.9055 10.8816 18.7501 12.6897"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M8.38894 16.2122C9.31129 15.3081 10.5513 14.8017 11.8429 14.8017C13.1344 14.8017 14.3745 15.3081 15.2968 16.2122"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);




export default function StudentExperience() {
  const features = [
    {
      icon: (<PublicHealthIcon size={24}
        strokeWidth={2}
        color="#FFF"
      />),
      title: "Favorable Faculty Ratio",
      desc: "+56 faculty for ~377 students ensures personalized attention and mentoring",
    },
    {
      icon: (<PracticalLearningIcon size={24} color="#FFF" strokeWidth={2} />
      ),
      title: "Practical Learning",
      desc: "Simulation, skills labs, clinical rotations, case discussions, and hands-on training",
    },
    {
      icon: (<ExtraCuriccularIcon size={24} color="#FFF" strokeWidth={2} />
      ),
      title: "Extra-Curricular Activities",
      desc: "Workshops, seminars, case-presentations, academic clubs, and competitive events",
    },
    {
      icon: (<AmenitiesIcon size={24} color="#FFF" strokeWidth={2} />
      ),
      title: "Modern Amenities",
      desc: "Hostels, transport, WiFi connectivity, campus safety, and comprehensive support",
    },
  ];

  return (
    <PageSection bg="bg-[#F7F9FC]" paddingClass="py-[80px]">
      {/* Heading */}
      <div className="flex flex-col gap-[8px] w-full mb-[32px] md:mb-[40px]">
        <h2 className="font-montserrat font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[38px] md:leading-[44px] lg:leading-[48px] text-[#223F7F]">
          Student Experience
        </h2>
      </div>

      {/* Top — Image + Content */}
      <div className="flex flex-col xl:flex-row items-start justify-between gap-[24px] md:gap-[32px] xl:gap-[40px] w-full mb-[32px] md:mb-[40px]">
        {/* Left Image */}
        <div className="w-full xl:w-[578px] flex-shrink-0 bg-gray-200 rounded-[8px]">
          <img loading="lazy" decoding="async"
            src={studentExpMain}
            alt="Student Experience"
            className="w-full h-[250px] sm:h-[320px] md:h-[360px] xl:h-[394px] object-cover rounded-[8px]"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] w-full xl:max-w-[578px]">
          <h3 className="font-montserrat font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#223F7F] max-w-full xl:max-w-[461px]">
            Comprehensive Learning Environment
          </h3>

          <p className="font-montserrat text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#6B7280]">
            At ASRAM School of Nursing, we prioritize creating an environment
            where students can thrive academically, professionally, and
            personally. Our approach combines rigorous academics with practical
            exposure and holistic development.
          </p>
        </div>
      </div>

      {/* Bottom — 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] md:gap-[20px] lg:gap-[24px] w-full justify-items-center xl:justify-items-stretch">
        {features.map((item, i) => (
          <InfoCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.desc}
            variant="feature"
          />
        ))}
      </div>
    </PageSection>
  );
}
