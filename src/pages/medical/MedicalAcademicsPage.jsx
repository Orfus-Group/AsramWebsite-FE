import React, { lazy, Suspense, useLayoutEffect } from "react";
import LoadingScreen from "@/components/loader/LoadingScreen";
import ProgramsOffered from "../academics/ProgramsOffered";
import NursingCareerSection from "../academics/NursingCareerSection";
import WhyChooseNursingSchool from "../academics/WhyChooseNursingSchool";
import ExperienceDrivenEducation from "../academics/ExperienceDrivenEducation";
import NursingAdmissionsSection from "../academics/NursingAdmissionsSection";
import StudentVoices from "../academics/StudentVoices";
import FinancialAidScholarships from "../academics/FinancialAidScholarships";
import JoinOurNursingCommunity from "../academics/JoiningNursingCommunity";
// Note: We might need to update this banner for Medical later
const heroBg = "/AsramWebsite-FE/assets/academics/asramacademicsbanner.png";
import { useHero } from "@/context/HeroContext";
import TypedText from "@/components/common/TypedText";



const MedicalAcademicsPage = () => {
    const { setHero, hideHero } = useHero();


    useLayoutEffect(() => {
        setHero({
            title: (
                <TypedText
                    text="Build a Career in Healthcare" // Maybe update to Medical?
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
            <DepartmentsSection />
            <UGProgramsSection />
            <PGProgramsSection />
            <SuperSpecialtyProgramsSection />
            <AcademicCalendarSection />
            <LibraryFacilitiesSection />
            <FacultyDirectorySection />
            <StudentResourcesSection />
        </>
    );
};

export default MedicalAcademicsPage;
