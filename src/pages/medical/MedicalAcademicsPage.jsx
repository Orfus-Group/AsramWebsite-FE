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

    const medicalTheme = {
        primary: "#C0392B", // Medical Red
        secondary: "#223F7F", // Medical Blue (Default)
        primaryTransparent: "#C0392B33", // 20% Red
        iconFilter: "brightness(0) saturate(100%) invert(26%) sepia(73%) saturate(3078%) hue-rotate(349deg) brightness(88%) contrast(92%)", // #C0392B
        textMuted: "#6b7280",
        ctaButtonBg: "#223F7F",
    };

    const medicalWhiteRedTheme = {
        primary: "#FFF", // Medical Red
        secondary: "#223F7F", // Medical Blue (Default)
        primaryTransparent: "#C0392B33", // 20% Red
        iconFilter: "brightness(0) saturate(100%) invert(26%) sepia(73%) saturate(3078%) hue-rotate(349deg) brightness(88%) contrast(92%)", // #C0392B
        textMuted: "#6b7280",
        tagTextColor: "#223F7F", // Blue text for tags since primary is White
        ctaButtonBg: "#223F7F", // Blue background for 'Start Your Application'
    };

    const transparentRedIconConfig = {
        primary: "#C0392B1A", // Medical Red
        secondary: "#223F7F", // Medical Blue (Default)
        primaryTransparent: "#C0392B33", // 20% Red
        iconFilter: "brightness(0) saturate(100%) invert(26%) sepia(73%) saturate(3078%) hue-rotate(349deg) brightness(88%) contrast(92%)", // #C0392B
        textMuted: "#6b7280",
        ctaButtonBg: "#223F7F",
        bulletColor: "#C0392B",
        useNewStatsGrid: true,
    };

    const joinCommunityTheme = {
        primary: "#223F7F", // Blue for icons
        secondary: "#223F7F", // Blue for text
        ctaButtonBg: "#223F7F", // Blue for button
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
                </>
            ),
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <>
            <ProgramsOffered theme={medicalTheme} />
            <NursingCareerSection />
            <WhyChooseNursingSchool theme={medicalWhiteRedTheme} />
        <ExperienceDrivenEducation theme={medicalTheme} />
            <NursingAdmissionsSection theme={medicalTheme} />
            <StudentVoices />
            <FinancialAidScholarships theme={transparentRedIconConfig} />
            <JoinOurNursingCommunity theme={joinCommunityTheme} title="Join Our Medical Community" />
        </>
    );
};

export default MedicalAcademicsPage;
