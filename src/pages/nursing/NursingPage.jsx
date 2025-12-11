import React from "react";

import NursingHero from "../nursing/NursingHero";
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
  return (
    <>
      <NursingHero />
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
