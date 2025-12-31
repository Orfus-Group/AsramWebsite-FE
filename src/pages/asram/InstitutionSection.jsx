import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { T } from "@/theme";
import StaggerContainer, { itemVariants } from "@/components/common/StaggerContainer";
import HoverCard from "@/components/common/HoverCard";

import PageSection from "@/features/common/layout/PageContainer";
import IconFullArrowRight from "@/assets/icons/IconFullArrowRight";
const MedicalIcon = "/AsramWebsite-FE/assets/icons/MedicalIcon.svg";
const HeartCareIcon = "/AsramWebsite-FE/assets/icons/HeartCareIcon.svg";
const ParamedicalIcon = "/AsramWebsite-FE/assets/icons/IconParamedical.svg";

const institutions = [
  {
    id: 1,
    icon: MedicalIcon,
    name: "ASRAM Medical College",
    tagline: "Shaping Future Doctors",
    description:
      "Recognized medical college with strong academics, clinical training, and research.",
    cta: "Visit Medical College",
  },
  {
    id: 2,
    icon: HeartCareIcon,
    name: "ASRAM College of Nursing",
    tagline: "Precision-Driven Cancer Care",
    description:
      "B.Sc Nursing & GNM programs with hands-on skill labs and hospital training.",
    cta: "Visit Nursing College Website",
  },
  {
    id: 3,
    icon: ParamedicalIcon,
    name: "ASRAM Paramedical Institute",
    tagline: "Technical Excellence in Healthcare",
    description:
      "Professional programs in allied health sciences supporting modern medical systems.",
    cta: "Visit Paramedical Website",
  },
];

const underlineColors = {
  1: "#C0392B",
  2: "#008C8C",
  3: "#A66E00",
};

const iconBgColors = {
  1: "rgba(192,57,43,0.10)",
  2: "rgba(0,140,140,0.10)",
  3: "rgba(166,110,0,0.10)",
};

const ctaColors = {
  1: "#C0392B1A",
  2: "#008C8C1A",
  3: "#A66E001A",
};

const MotionLink = motion(Link);

const buttonAnim = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    filter: "brightness(0.96)",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.98 }
};

const arrowAnim = {
  rest: { x: 0 },
  hover: {
    x: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const InstitutionsSection = () => {
  return (
    <PageSection
      bg="bg-[#EEF2F7]"
      paddingClass="py-[40px] md:py-[60px] lg:py-[80px]"
    >
      {/* Decorative floating element */}
      <div className="absolute top-[-60px] lg:top-[-90px] right-8 lg:right-[92px] opacity-30 select-none pointer-events-none" />

      <div className="w-full">
        {/* Section Title */}
        <h2
          className={`
            ${T.font.weight.bold} 
            text-[#223F7F]
            text-[28px] sm:text-[34px] lg:text-[42px]
            leading-[36px] sm:leading-[44px] lg:leading-[52px]
            mb-[6px]
          `}
        >
          Our Institutions
        </h2>

        <p
          className={`
            ${T.font.weight.medium} 
            text-[#6B6B6B]
            text-[18px] sm:text-[20px] lg:text-[22px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px]
            mt-[2px] mb-[30px] lg:mb-[45px]
          `}
        >
          Three Institutions. One Vision for Future Healthcare Leaders.
        </p>

        {/* CARD GRID */}
        <StaggerContainer
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-[26px]
            items-stretch
          "
        >
          {institutions.map((item) => (
            <HoverCard
              variants={itemVariants}
              key={item.id}
              className="
                group 
                h-full
                min-h-[399px]
                bg-white 
                rounded-[8px] 
                border border-[#E1E6EF] 
                p-[30px]
                flex flex-col 
                transition-all duration-300 
                premium-shadow-hover
              "
            >
              <div className="flex flex-col gap-[26px] h-full">
                {/* ICON */}
                <div
                  className="
                  w-[64px] h-[64px] 
                  rounded-[12px] flex items-center justify-center 
                  flex-shrink-0
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)]
                "
                  style={{ backgroundColor: iconBgColors[item.id] }}
                >
                  <img src={item.icon} className="w-[32px] h-[32px]" alt="" />
                </div>

                {/* TITLE */}
                <div className="flex items-start">
                  <h6
                    className={`
                    ${T.font.weight.semibold} 
                    text-[#191919]
                    text-[20px] sm:text-[18px] md:text-[16px] lg:text-[17px] xl:text-[17px] min-[1440px]:text-[21px]
                    leading-[28px] sm:leading-[32px]
                    relative pb-[8px]
                    w-full
                  `}
                  >
                    {item.name}
                    <span
                      className="absolute left-0 bottom-0 w-[70px] sm:w-[84px] border-b-[2.5px]"
                      style={{ borderColor: underlineColors[item.id] }}
                    />
                  </h6>
                </div>

                {/* TAGLINE */}
                <div className="flex items-center -mt-[14px]">
                  <p
                    className={`
                    ${T.font.weight.medium}
                    text-[#223F7F]
                    text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1400px]:text-[18px]
                    leading-[26px] sm:leading-[28px]
                  `}
                  >
                    {item.tagline}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <div className="">
                  <p
                    className={`
                    ${T.font.weight.normal}
                    text-[#191919]
                    text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1400px]:text-[18px]
                    leading-[24px] sm:leading-[26px]
                  `}
                  >
                    {item.description}
                  </p>
                </div>

                {/* CTA BUTTON */}
                <MotionLink
                  to={item.id === 2 ? "/nursing" : "#"}
                  className="
                  mt-auto
                  w-full
                  h-[46px]
                  rounded-[6px]
                  py-[12px] px-[15px] pr-[5px]
                  flex items-center justify-center
                  gap-[6px] lg:gap-[8px]
                  text-center
                "
                  style={{ backgroundColor: ctaColors[item.id] }}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonAnim}
                >
                  <span
                    className={`
                    ${T.font.weight.medium}
                    text-[13px] xs:text-[14px] md:text-[10px] lg:text-[12px] xl:text-[13.5px] min-[1400px]:text-[18px]
                    text-[#191919]
                    leading-tight
                    whitespace-nowrap
                    text-center
                  `}
                  >
                    {item.cta}
                  </span>

                  <motion.div variants={arrowAnim} className="flex-shrink-0 flex items-center">
                    <IconFullArrowRight
                      size={18}
                      className="
                      w-[18px] h-[18px]
                      sm:w-[18px] sm:h-[18px]
                      md:w-[14px] md:h-[14px]
                      lg:w-[15px] lg:h-[15px]
                      xl:w-[17px] xl:h-[17px]
                      min-[1400px]:w-[22px] min-[1400px]:h-[22px]
                      flex-shrink-0
                    "
                      stroke="#191919"
                      strokeWidth={2}
                    />
                  </motion.div>
                </MotionLink>
              </div>
            </HoverCard>
          ))
          }
        </StaggerContainer >
      </div >
    </PageSection >
  );
};

export default InstitutionsSection;
