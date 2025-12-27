import React, { useLayoutEffect } from "react";

import { useHero } from "@/context/HeroContext";
import heroBg from "@/assets/nursing/asramnursingbanner.png";
import TypedText from "@/components/common/TypedText";
import MotionSection from "@/components/common/MotionSection";
import AcademicProgramsSection from "./AcademicProgramsSection";
import VisionMissionSection from "./VisionMission";
import NewsEvents from "./NewsEvents";
import StudentExperience from "./StudentExperience";
import ResearchSection from "./ResearchSection";
import SocialCommitment from "./SocialCommitment";
// import ClinicalPracticumSection from "./ClinicalPracticumSection";
import FacultySpotlightSection from "./FacultySpotlight";
import KeyStrengthsSection from "./KeyStrenght";
import WhyChooseSection from "./WhyChooseNursing";
import Footer from "./secondaryfooter";
import AsramNewsEvents from "../asram/AsramNewsEvents";

const NursingPage = () => {
  const { setHero, hideHero } = useHero();

  useLayoutEffect(() => {
    setHero({
      title: (
        <TypedText
          text="Excellence in Nursing Education"
          className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[1.2] text-white"
        />
      ),
      bgImage: heroBg,
      children: (
        <>
          <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.4] text-white max-w-[520px] mb-6">
            ASRAM School of Nursing prepares skilled, ethical, and globally competent nurses through accredited programs and real-world clinical exposure.
          </p>

          {/* <button
            className="
                      bg-[#191919] 
                      hover:bg-[#27272a] 
                      text-white 
                      px-5 py-2.5 md:px-8 md:py-3
                      rounded-[8px] 
                      text-[15px] md:text-[22px] font-medium 
                      transition-colors
                  "
          >
            Explore Programs
          </button> */}
        </>
      ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);


  return (
    <>
      <MotionSection>
        <AcademicProgramsSection />
      </MotionSection>
      <MotionSection delay={0.1}>
        <VisionMissionSection />
      </MotionSection>
      <MotionSection delay={0.1}>
        <StudentExperience />
      </MotionSection>
      <MotionSection delay={0.2}>
        <ResearchSection />
      </MotionSection>
      <MotionSection delay={0.2}>
        <SocialCommitment />
      </MotionSection>
      <MotionSection delay={0.3}>
        <AsramNewsEvents />
      </MotionSection>
      <MotionSection delay={0.3}>
        <FacultySpotlightSection />
      </MotionSection>
      <MotionSection delay={0.3}>
        <KeyStrengthsSection />
      </MotionSection>
    </>
  );
};

export default NursingPage;
