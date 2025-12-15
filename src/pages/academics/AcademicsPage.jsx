import React, { lazy, Suspense } from "react";
import LoadingScreen from "@/components/loader/LoadingScreen";
import ProgramsOffered from "./ProgramsOffered";
import NursingCareerSection from "./NursingCareerSection";
import WhyChooseNursingSchool from "./WhyChooseNursingSchool";
import ExperienceDrivenEducation from "./ExperienceDrivenEducation";
import NursingAdmissionsSection from "./NursingAdmissionsSection";
import StudentVoices from "./StudentVoices";
import FinancialAidScholarships from "./FinancialAidScholarships";
import JoinOurNursingCommunity from "./JoiningNursingCommunity";
import AcademicsHero from "./AcademicsHero";


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
    </>
  );
};

export default AcademicsPage;
