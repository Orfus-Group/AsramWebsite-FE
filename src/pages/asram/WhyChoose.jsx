// src/sections/home/WhyChooseAsram.jsx
import React from "react";

import academicsIcon from "../../assets/asram/academic.svg";
import facultyIcon from "../../assets/asram/expertfac.svg";
import infraIcon from "../../assets/asram/worldclass.svg";
import careerIcon from "../../assets/asram/careeropp.svg";
import globalIcon from "../../assets/asram/globalrec.svg";
import holisticIcon from "../../assets/asram/holisticdev.svg";

import { T } from "../../theme";
import InfoCard from "../infoCard";
import Button from "../../components/ui/button";
import PageSection from "../../features/common/layout/PageContainer";

export default function WhyChooseAsram() {
  const features = [
    {
      icon: academicsIcon,
      title: "Academic Excellence",
      description:
        "Rigorous curriculum aligned with international standards and best practices.",
    },
    {
      icon: facultyIcon,
      title: "Expert Faculty",
      description:
        "Learn from experienced professionals and renowned medical practitioners.",
    },
    {
      icon: infraIcon,
      title: "World-Class Infrastructure",
      description:
        "State-of-the-art facilities, laboratories, and teaching hospitals.",
    },
    {
      icon: careerIcon,
      title: "Career Opportunities",
      description:
        "Strong placement record with excellent career support and guidance.",
    },
    {
      icon: globalIcon,
      title: "Global Recognition",
      description:
        "Degrees recognized internationally, opening doors to global opportunities.",
    },
    {
      icon: holisticIcon,
      title: "Holistic Development",
      description:
        "Focus on overall personality development beyond academics.",
    },
  ];

  return (
      <PageSection 
           bg={T.bg.programCard}
                 paddingClass="py-[80px]"   // ⭐ Padding fully controlled here
              >

      {/* Heading */}
      <h2
        className={`
          
          ${T.font.weight.bold}
          text-[26px] leading-[34px]
          sm:text-[30px] sm:leading-[40px]
          md:text-[32px] md:leading-[44px]
          lg:text-[36px] lg:leading-[48px]
          mb-[20px] md:mb-[30px]
        `}
        style={{ color: T.color.text.secondary }}
      >
        Why Choose ASRAM
      </h2>

      {/* Cards Grid (unchanged layout) */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-[28px] gap-y-[32px]
          w-full
          mb-[40px]       /* space before CTA */
        "
      >
        {features.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            variant="whychoose"
          />
        ))}
      </div>

      {/* Centered CTA (Figma correct placement) */}
      <div className="flex justify-center w-full">
        <Button
          bg={T.color.secondary}
          color={T.color.background.white}
          font={T.font.family}
          weight={T.font.weight.regular}
          textSize="text-[15.79px]"
          leading="leading-[23.7px]"
          width="201.47px"
          height="47.37px"
          radius="md"
        >
          Apply Now
        </Button>
      </div>

    </PageSection>
  );
}
