import React, { lazy, Suspense } from "react";
import LoadingScreen from "../../components/loader/LoadingScreen";

const NursingHero = lazy(() => import("../nursing/NursingHero"));
const AcademicProgramsSection = lazy(() => import("./AcademicProgramsSection"));
const VisionMissionSection = lazy(() => import("./VisionMission"));
const NewsEvents = lazy(() => import("./NewsEvents"));
const StudentExperience = lazy(() => import("./StudentExperience"));
const ResearchSection = lazy(() => import("./ResearchSection"));
const CommunityOutreachSection = lazy(() => import("./CommunityOutreach"));
// const ClinicalPracticumSection = lazy(() => import("./ClinicalPracticumSection"));
const FacultySpotlightSection = lazy(() => import("./FacultySpotlight"));
const KeyStrengthsSection = lazy(() => import("./KeyStrenght"));
const WhyChooseSection = lazy(() => import("./WhyChooseNursing"));
const Footer = lazy(() => import("./NursingFooter"));

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
      <Footer />
    </>
  );
};

export default NursingPage;
