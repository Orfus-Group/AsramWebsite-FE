import React, { lazy, Suspense, useLayoutEffect } from "react";
import LoadingScreen from "@/components/loader/LoadingScreen";
import ProgramsOffered from "../academics/ProgramsOffered";
import NursingCareerSection from "../academics/NursingCareerSection";
import WhyChooseNursingSchool, {
    IconHospitalTraining,
    IconArtFacilities,
    IconMentorship,
    IconAccredited,
    IconHolisticDev,
    IconCareerReady
} from "../academics/WhyChooseNursingSchool";
import ExperienceDrivenEducation from "../academics/ExperienceDrivenEducation";
import NursingAdmissionsSection from "../academics/NursingAdmissionsSection";
import StudentVoices from "../academics/StudentVoices";
import FinancialAidScholarships from "../academics/FinancialAidScholarships";
import JoinOurNursingCommunity from "../academics/JoiningNursingCommunity";
import { useHero } from "@/context/HeroContext";
import TypedText from "@/components/common/TypedText";

// Note: We might need to update this banner for Medical later
const heroBg = "/AsramWebsite-FE/assets/academics/asramacademicsbanner.png";

const ParaMedicalAcademicsPage = () => {
    const { setHero, hideHero } = useHero();

    const medicalTheme = {
        primary: "#A66E00", // Medical Gold
        secondary: "#223F7F", // Medical Blue (Default)
        primaryTransparent: "#A66E0033", // 20% Gold
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)", // #A66E00
        textMuted: "#6b7280",
        ctaButtonBg: "#223F7F",
    };

    const medicalWhiteRedTheme = {
        primary: "#FFF", // White
        secondary: "#223F7F", // Medical Blue (Default)
        primaryTransparent: "#A66E0033", // 20% Gold
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)", // #A66E00
        textMuted: "#6b7280",
        tagTextColor: "#223F7F", // Blue text for tags since primary is White
        ctaButtonBg: "#223F7F", // Blue background for 'Start Your Application'
    };

    const transparentRedIconConfig = {
        primary: "#A66E001A", // Medical Gold Transparent
        secondary: "#223F7F", // Medical Blue (Default)
        primaryTransparent: "#A66E0033", // 20% Gold
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)", // #A66E00
        textMuted: "#6b7280",
        ctaButtonBg: "#223F7F",
        bulletColor: "#A66E00",
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
                    text="Build a Career in Allied Healthcare"
                    className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[1.2] text-white"
                />
            ),
            bgImage: heroBg,
            children: (
                <>
                    <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.4] text-white max-w-[520px] mb-6">
                        Structured paramedical education supported by expert faculty, modern laboratories, and hands-on diagnostic and clinical exposure.</p>
                </>
            ),
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    const paramedicalPrograms = [
        {
            tag: "Undergraduate",
            title: "B.Sc Paramedical Sciences",
            years: "3 Years",
            description: "Undergraduate program combining diagnostic sciences, laboratory training, and applied clinical support across allied health disciplines.",
            highlights: [
                "Hands-on laboratory and diagnostic training",
                "Clinical exposure in hospital departments",
                "Industry-relevant technical skills"
            ]
        },
        {
            tag: "Diploma",
            title: "General Paramedical Programs",
            years: "2-3 Years",
            description: "Skill-oriented diploma programs focused on diagnostic services, emergency support, and essential allied healthcare practices.",
            highlights: [
                "Practical skill-based training",
                "Department-level clinical exposure",
                "Job-ready technical competencies"
            ]
        },
        {
            tag: "Postgraduate",
            title: "M.Sc Paramedical Sciences",
            years: "2 Years",
            description: "Advanced paramedical education with specialization in laboratory sciences, imaging, and healthcare technology disciplines.",
            highlights: [
                "Advanced diagnostics and specialization",
                "Research and academic development",
                "Senior technical and supervisory roles"
            ]
        }
    ];

    const paramedicalWhyChooseData = [
        {
            icon: IconHospitalTraining,
            title: "Hospital Training",
            desc: "Training within ASRAM’s multispecialty hospital provides applied exposure in diagnostics, laboratories, imaging, and allied health departments.",
            tag: "Clinical Exposure"
        },
        {
            icon: IconArtFacilities,
            title: "State-of-the-Art Facilities",
            desc: "Well-equipped laboratories, diagnostic equipment, simulation tools, and technical infrastructure aligned with current healthcare practices.",
            tag: "Modern Labs"
        },
        {
            icon: IconMentorship,
            title: "Personalized Mentorship",
            desc: "Focused faculty guidance, skill-based mentoring, and supervised training ensure technical accuracy and professional readiness.",
            tag: "Skill Mentorship"
        },
        {
            icon: IconAccredited,
            title: "Accredited Excellence",
            desc: "University affiliation and regulatory recognition ensure academic validity and adherence to allied health education standards.",
            tag: "Recognized Programs"
        },
        {
            icon: IconHolisticDev,
            title: "Holistic Development",
            desc: "Skill workshops, technical seminars, teamwork training, and community exposure support balanced professional development.",
            tag: "360° Learning"
        },
        {
            icon: IconCareerReady,
            title: "Career-Ready Graduates",
            desc: "Practice-oriented curriculum prepares graduates for diagnostic services, laboratory roles, and allied healthcare careers.",
            tag: "Job Readiness"
        }
    ];

    const paramedicalProcessSteps = [
        {
            step: "Step 1",
            title: "Submit Application",
            desc: "Complete the online application and upload required academic documents and certificates.",
            timeline: "Timeline:",
            timelinedescription: "Rolling Admissions",
            icon: "/AsramWebsite-FE/assets/icons/IconSubmitAppTeal.svg"
        },
        {
            step: "Step 2",
            title: "Entrance Qualification",
            desc: "Applications are reviewed based on academic eligibility and program-specific requirements.",
            timeline: "Timeline:",
            timelinedescription: "2-4 Weeks",
            icon: "/AsramWebsite-FE/assets/icons/IconAppReviewTeal.svg"
        },
        {
            step: "Step 3",
            title: "Counseling & Allotment",
            desc: "Shortlisted candidates may be invited for counseling. Admission decisions follow evaluation.",
            timeline: "Timeline:",
            timelinedescription: "As Scheduled",
            icon: "/AsramWebsite-FE/assets/icons/IconInterviewTeal.svg"
        },
        {
            step: "Step 4",
            title: "Reporting & Enrollment",
            desc: "Confirm admission by completing enrollment formalities and orientation requirements.",
            timeline: "Timeline:",
            timelinedescription: "Before Start Date",
            icon: "/AsramWebsite-FE/assets/icons/IconEnrollmentTeal.svg"
        }
    ];

    const paramedicalRequirements = [
        {
            title: "UG Paramedical Programs",
            items: [
                "Completion of 10+2 in Science stream",
                "Minimum qualifying marks as prescribed",
                "Subject requirements as per program",
                "Medical fitness certificate",
                "Required academic documents"
            ]
        },
        {
            title: "Diploma Programs",
            items: [
                "Completion of qualifying education as specified",
                "Subject eligibility based on program",
                "Medical fitness certificate",
                "Academic records and identification"
            ]
        },
        {
            title: "PG Paramedical Programs",
            items: [
                "Relevant undergraduate degree",
                "Minimum qualifying marks",
                "Program-specific prerequisites",
                "Academic and experience documents",
                "Institutional requirements"
            ]
        }
    ];

    const paramedicalExperienceContent = {
        title: "Experience-Driven Education",
        paragraph: "At ASRAM, paramedical education emphasizes applied learning. Students gain hands-on experience through laboratory practice, diagnostic training, and supervised clinical exposure within hospital settings.",
        bullets: [
            "Applied training in diagnostics and allied services",
            "Graduates placed in hospitals and diagnostic centers",
            "Structured skill development and faculty guidance"
        ],
        stats: [
            { value: "100+", label: "UG Seats" },
            { value: "60+", label: "Diploma Seats" },
            { value: "30+", label: "PG Seats" },
            { value: "56+", label: "Faculty Members" }
        ]
    };

    return (
        <>
            <ProgramsOffered theme={medicalTheme} programs={paramedicalPrograms} />
            <NursingCareerSection />
            <WhyChooseNursingSchool
                theme={medicalWhiteRedTheme}
                features={paramedicalWhyChooseData}
                title="Why Choose Our Paramedical School"
                paddingClass="pt-[80px] pb-[40px]"
            />
            <ExperienceDrivenEducation
                content={paramedicalExperienceContent}
                paddingClass="pt-[0] pb-[80px]"
            />
            <NursingAdmissionsSection
                theme={medicalTheme}
                title="Academics Admissions"
                processSteps={paramedicalProcessSteps}
                requirements={paramedicalRequirements}
                readyToApplyDesc="Begin your application and take the first step toward a career in allied healthcare. Our admissions team is available to guide you throughout the process."
            />
            <StudentVoices />
            <FinancialAidScholarships theme={transparentRedIconConfig} />
            <JoinOurNursingCommunity
                theme={joinCommunityTheme}
                title="Join Our Medical Community"
                titleClassName="text-center"
            />
        </>
    );
};

export default ParaMedicalAcademicsPage;
