import React, { useLayoutEffect } from "react";

import { useHero } from "@/context/HeroContext";
import heroBg from "@/assets/nursing/asramnursingbanner.png";
import AcademicProgramsSection from "./AcademicProgramsSection";
import VisionMissionSection from "./VisionMission";
import NewsEvents from "./NewsEvents";
import StudentExperience from "./StudentExperience";
import ResearchSection from "./ResearchSection";
import CommunityOutreachSection from "./CommunityOutreach";
// import ClinicalPracticumSection from "./ClinicalPracticumSection";
import FacultySpotlightSection from "./FacultySpotlight";
import KeyStrengthsSection from "./KeyStrenght";
import WhyChooseSection from "./WhyChooseNursing";
import Footer from "./NursingFooter";

const NursingPage = () => {
  const { setHero, hideHero } = useHero();

  useLayoutEffect(() => {
    setHero({
      title: (
        <span className="font-montserrat font-bold text-[40px] leading-[1.35] text-white">
          Excellence in Nursing Education
        </span>
      ),
      bgImage: heroBg,
      children: (
        <>
          <p className="font-montserrat font-medium text-[22px] leading-[1.36] text-white max-w-[520px] mb-6">
            ASRAM School of Nursing prepares skilled, ethical, and globally competent nurses through accredited programs and real-world clinical exposure.
          </p>

          <button
            className="
                      bg-[#191919] 
                      hover:bg-[#27272a] 
                      text-white 
                      px-6 py-2 md:px-8 md:py-3
                      rounded-[8px] 
                      text-[16px] md:text-[22px] font-medium 
                      transition-colors
                  "
          >
            Explore Programs
          </button>
        </>
      ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);


  return (
    <>
      <AcademicProgramsSection />
      <VisionMissionSection />
      <NewsEvents />
      <StudentExperience />
      <ResearchSection />
      <CommunityOutreachSection />
      {/* <ClinicalPracticumSection /> */}
      <FacultySpotlightSection />
      <KeyStrengthsSection />
      <WhyChooseSection />
    </>
  );
};

export default NursingPage;
