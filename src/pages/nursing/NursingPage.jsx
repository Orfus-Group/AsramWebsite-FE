import React, { useLayoutEffect } from "react";

import { useHero } from "@/context/HeroContext";
const heroBg = "/AsramWebsite-FE/assets/nursing/asramnursingbanner.png";
import TypedText from "@/components/common/TypedText";

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
          className="font-montserrat font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-[1.36] text-white"
        />
      ),
      bgImage: heroBg,
      children: (
        <>
          <div className="max-w-[520px]">
            <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.36] text-white mb-6">
              ASRAM School of Nursing prepares skilled, ethical, and globally competent nurses through accredited programs and real-world clinical exposure.
            </p>
          </div>

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
      className: "!py-12 md:!pt-[263.5px] !lg:pl-[120px] !lg:pr-[120px]",
      alignmentClass: "items-center md:items-start",
    });
    return () => hideHero();
  }, [setHero, hideHero]);


  return (
    <>
      <AcademicProgramsSection />
      <VisionMissionSection />
      <StudentExperience cardBg="#eef2f7" />
      <ResearchSection />
      <SocialCommitment />
      <AsramNewsEvents />
      <FacultySpotlightSection />
      <KeyStrengthsSection />
    </>
  );
};

export default NursingPage;
