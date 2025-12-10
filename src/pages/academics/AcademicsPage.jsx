import React, { lazy, Suspense } from "react";
import LoadingScreen from "../../components/loader/LoadingScreen";
import ProgramsOffered from "./ProgramsOffered";
import NursingCareerSection from "./NursingCareerSection";
import WhyChooseNursingSchool from "./WhyChooseNursingSchool";
import ExperienceDrivenEducation from "./ExperienceDrivenEducation";
import NursingAdmissionsSection from "./NursingAdmissionsSection";
import StudentVoices from "./StudentVoices";
import FinancialAidScholarships from "./FinancialAidScholarships";
import JoinOurNursingCommunity from "./JoiningNursingCommunity";
import Footer from "../nursing/NursingFooter";
import AcademicsHero from "./AcademicsHero";

// const AcademicProgramsSection = lazy(() => import("./AcademicProgramsSection"));
// const VisionMissionSection = lazy(() => import("./VisionMission"));
// const NewsEvents = lazy(() => import("./NewsEvents"));
// const StudentExperience = lazy(() => import("./StudentExperience"));
// const ResearchSection = lazy(() => import("./ResearchSection"));
// const CommunityOutreachSection = lazy(() => import("./CommunityOutreach"));
// const FacultySpotlightSection = lazy(() => import("./FacultySpotlight"));
// const KeyStrengthsSection = lazy(() => import("./KeyStrenght"));
// const WhyChooseSection = lazy(() => import("./WhyChooseNursing"));
// const Footer = lazy(() => import("./NursingFooter"));

const AcademicsPage = () => {
  return (
   <>
    <AcademicsHero />
      <ProgramsOffered />
      <NursingCareerSection />
      <WhyChooseNursingSchool />
      <ExperienceDrivenEducation />
      <NursingAdmissionsSection />
      <StudentVoices />
      <FinancialAidScholarships />
      <JoinOurNursingCommunity />
      <Footer />
   </>
  );
};

export default AcademicsPage;
