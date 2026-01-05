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
const heroBg = "/AsramWebsite-FE/assets/academics/asramacademicsbanner.png";
import { useHero } from "@/context/HeroContext";
import TypedText from "@/components/common/TypedText";



const AcademicsPage = () => {
  const { setHero, hideHero } = useHero();

  const transparenttiltIconConfig = {
    primary: "#008C8C1A", // 10% Teal for Background
    secondary: "#223F7F", // Medical Blue
    primaryTransparent: "#008C8C1A", // 10% Teal
    iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)", // #008C8C (Teal)
    textMuted: "#6b7280",
    ctaButtonBg: "#223F7F",
    bulletColor: "#008C8C", // Solid Teal for bullets
    useNewStatsGrid: true,
  };

  useLayoutEffect(() => {
    setHero({
      title: (
        <TypedText
          text="Build a Career in Healthcare"
          className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[1.2] text-white"
        />
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
      <ProgramsOffered />
      <NursingCareerSection />
      <WhyChooseNursingSchool
        theme={{
          iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)",
          tagTextColor: "#223F7F"
        }}
      />
      <ExperienceDrivenEducation />
      <NursingAdmissionsSection
        theme={{
          secondary: "#223F7F",
          ctaButtonBg: "#223F7F"
        }}
        readyToApplyDesc={
          <>
            Start your application today and take the first step toward an exceptional nursing education. Our admissions team is here to support you throughout the process.
            <br /><br />
            Start your application today and take the first step toward an exceptional nursing education. Our admissions team is here to support you throughout the process.
          </>
        }
      />
      <StudentVoices />
      <FinancialAidScholarships theme={transparenttiltIconConfig} />
      <JoinOurNursingCommunity />
    </>
  );
};

export default AcademicsPage;
