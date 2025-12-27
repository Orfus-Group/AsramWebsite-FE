import React, { useLayoutEffect } from "react";

// Icons
import insideasramimg from "@/assets/asram/insideasram.png";
import ResearchSectionimg from "@/assets/asram/researchinnov.png";

// Normal Direct Imports (NO lazy loading)
import heroBg from "@/assets/asram/asramherobanner.png";
import ReputationQuality from "./ReputationQuality";
import InstitutionsSection from "./InstitutionSection";
import AsramHealthcareServices from "./HealthCareService";
import WhyChooseAsramSection from "./WhyChoose";
import InsideASRAM from "./InsideAsram";
import AsramNewsEvents from "./AsramNewsEvents";
import ResearchInnovation from "./ResearchInnovation";
import LaboratoriesTrainingSection from "./LaboratoriesTrainingSection";
import ClinicalExposureSection from "./ClinicalExposureSection";
import AsramFooter from "./AsramFooter";
import { useHero } from "@/context/HeroContext";
import MotionSection from "@/components/common/MotionSection";
import TextReveal from "@/components/common/TextReveal";

const AsramPage = () => {
  const { setHero, hideHero } = useHero();

  useLayoutEffect(() => {
    setHero({
      title: (
        <TextReveal>
          <span className="font-regular">DISCOVER </span>
          <span className="font-bold">ASRAM</span>
        </TextReveal>
      ),
      bgImage: heroBg,
      children: (
        <>
          <p
            className="
              text-[16px] sm:text-[18px] leading-[1.5]
              md:text-[18px] md:leading-[1.6]
              lg:text-[22px]
              mb-6 opacity-90 font-medium
              max-w-[320px] sm:max-w-[500px]
            "
          >
            At Asram, we prepare you to thrive in the ever-evolving world of health sciences.
          </p>

          <button
            className="
                bg-[#191919]
                hover:bg-[#27272a] 
                text-white 
                px-6 py-2 md:px-8 md:py-3
                rounded-[8px] 
                text-[16px] md:text-[22px] font-medium 
                transition-all duration-300
                premium-shadow-hover
            "
          >
            Explore Programs
          </button>
        </>
      ),
    });
  }, [setHero]);

  return (
    <>
      <MotionSection>
        <ReputationQuality />
      </MotionSection>

      <MotionSection delay={0.1}>
        <InstitutionsSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <AsramHealthcareServices />
      </MotionSection>

      <MotionSection delay={0.1}>
        <WhyChooseAsramSection />
      </MotionSection>

      <MotionSection delay={0.2}>
        <InsideASRAM
          title="Inside ASRAM"
          image={insideasramimg}
          quote="At ASRAM, education meets service through clinics, health camps, and meaningful community impact."
        />
      </MotionSection>

      <MotionSection delay={0.2}>
        <AsramNewsEvents />
      </MotionSection>

      <MotionSection delay={0.2}>
        <ResearchInnovation
          title="Research & Innovation"
          description1="
        ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration. Students and faculty work together to develop new ideas, strengthen healthcare practices ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration.
        "
          image={ResearchSectionimg}
        />
      </MotionSection>


      <MotionSection delay={0.2}>
        <ClinicalExposureSection />
      </MotionSection>

      <MotionSection delay={0.2}>
        <LaboratoriesTrainingSection />
      </MotionSection>

    </>
  );
};

export default AsramPage;
