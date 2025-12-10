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
    <section
      className={`w-full ${T.bg.programCard} py-[60px] md:py-[80px] flex justify-center`}
    >
      <div
        className="
          w-full max-w-[1440px] mx-auto
          px-4 sm:px-6 md:px-10 lg:px-[120px]
          flex flex-col 
          gap-[40px] md:gap-[60px]
        "
      >
        {/* Heading */}
        <div className="flex flex-col gap-[12px] w-full">
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[26px] leading-[34px]
              sm:text-[30px] sm:leading-[40px]
              md:text-[32px] md:leading-[44px]
              lg:text-[36px] lg:leading-[48px]
            `}
            style={{ color: T.color.text.secondary }}
          >
            Why Choose ASRAM
          </h2>
        </div>

        {/* Responsive Grid */}
        <div
          className="
            grid
            grid-cols-1                 /* MOBILE → 1 column */
            sm:grid-cols-2              /* SMALL TABLETS → 2 columns */
            lg:grid-cols-3              /* LAPTOPS → 3 columns as before */
            gap-x-[28px] gap-y-[32px]
            w-full
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

        {/* CTA */}
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
          className="mx-auto"
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
}
