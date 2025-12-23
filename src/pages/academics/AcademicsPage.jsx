import React, { lazy, Suspense, useLayoutEffect } from "react";
import LoadingScreen from "@/components/loader/LoadingScreen";
import ProgramsOffered from "./ProgramsOffered";
import NursingCareerSection from "./NursingCareerSection";
import WhyChooseNursingSchool from "./WhyChooseNursingSchool";
import ExperienceDrivenEducation from "./ExperienceDrivenEducation";
import NursingAdmissionsSection from "./NursingAdmissionsSection";
import StudentVoices from "./StudentVoices";
import FinancialAidScholarships from "./FinancialAidScholarships";
import JoinOurNursingCommunity from "./JoiningNursingCommunity";
import heroBg from "@/assets/academics/asramacademicsbanner.png";
import { useHero } from "@/context/HeroContext";
import MotionSection from "@/components/common/MotionSection";


const AcademicsPage = () => {
  const { setHero, hideHero } = useHero();


  useLayoutEffect(() => {
    setHero({
      title: (
        <span className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[1.2] text-white">
          Build a Career in Healthcare
        </span>
      ),
      bgImage: heroBg,
      children: (
        <>
          <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.4] text-white max-w-[520px] mb-6">
            Structured medical education supported by experienced faculty, advanced laboratories, and real-world clinical exposure.
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
      <>
        <MotionSection>
          <ProgramsOffered />
        </MotionSection>
        <MotionSection delay={0.1}>
          <NursingCareerSection />
        </MotionSection>
        <MotionSection delay={0.1}>
          <WhyChooseNursingSchool />
        </MotionSection>
        <MotionSection delay={0.2}>
          <ExperienceDrivenEducation />
        </MotionSection>
        <MotionSection delay={0.2}>
          <NursingAdmissionsSection />
        </MotionSection>
        <MotionSection delay={0.3}>
          <StudentVoices />
        </MotionSection>
        <MotionSection delay={0.3}>
          <FinancialAidScholarships />
        </MotionSection>
        <MotionSection delay={0.4}>
          <JoinOurNursingCommunity />
        </MotionSection>
      </>
    </>
  );
};

export default AcademicsPage;
