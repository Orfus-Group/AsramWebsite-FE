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
    <section className={`w-full ${T.bg.white} flex justify-center`}>
      <div
        className="
          w-[1440px] max-w-full mx-auto
          px-[120px]
          pt-[80px] pb-[80px]
          flex flex-col gap-[60px]
        "
      >
        {/* Heading */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[36px] leading-[48px]
            `}
            style={{ color: T.color.text.secondary }}
          >
            Research
          </h2>
        </div>

        {/* Grid of 6 Research Cards */}
        <div
          className="
            grid grid-cols-3
            gap-x-[28px] gap-y-[32px]
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

        {/* CTA Button */}
  <Button
  bg={T.color.primary}
  color="#FFFFFF"
  font={T.font.family}
  weight={T.font.weight.regular}
  textSize="text-[15.02px]"
  leading="leading-[22.53px]"
   width="219.63px"
  height="49.21px"
  rounded="9.39px"
  customPadding="px-[22px] py-[12px]"
  className="mx-auto"
>
  Explore Our Research
</Button>



      </div>
    </section>
  );
}
