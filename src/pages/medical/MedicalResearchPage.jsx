import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
const ResearchHerobg = "/AsramWebsite-FE/assets/research/asramresearchbanner.png";
import TypedText from "@/components/common/TypedText";
import {
    IconAiHealth, IconClinicalTrials, IconGenomics, IconNcd, IconPatientSafety, IconPublicHealth
} from "@/assets/icons";

// Import from research folder - adjusting paths
import ResearchOverview from "../research/sections/ResearchOverview";
import ResearchPriorities from "../research/sections/ResearchPriorities";
import ResearchGovernance from "../research/sections/ResearchGovernance";
import ResearchPolicies from "../research/sections/ResearchPolicies";
import ResearchProjects from "../research/sections/ResearchProjects";
import ResearchPublications from "../research/sections/ResearchPublications";
import ResearchGrantsAndFunds from "../research/sections/ResearchGrantsAndFunds";
import ResearchStudentResearch from "../research/sections/ResearchStudentResearch";
import ResearchConferences from "../research/sections/ResearchConferences";
import ResearchCollaborations from "../research/sections/ResearchCollaborations";
import ResearchPatentsAndInnovations from "../research/sections/ResearchPatentsAndInnovations";
import ResearchResources from "../research/sections/ResearchResources";
import ResearchContactAndSupport from "../research/sections/ResearchContactAndSupport";

const MedicalResearchPage = () => {
    const { setHero, hideHero } = useHero();

    const medicalBlue = "#223F7F";
    const medicalRed = "#C0392B";

    // Common dimension config for Medical Research (48x48 container, 8.57 radius, 24x24 icon)
    const medicalDims = {
        sizeClass: "w-[48px] h-[48px]",
        radiusClass: "rounded-[8.57px]",
        iconSizeClass: "w-[24px] h-[24px]"
    };

    // Config for sections with White Icon Container (Vision, Contact, Patents, Conferences, Grants)
    // Filter to turn icon to #223F7F
    const whiteIconConfig = {
        bg: "white",
        iconFilter: "brightness(0) saturate(100%) invert(18%) sepia(37%) saturate(3439%) hue-rotate(210deg) brightness(95%) contrast(93%)",
        isBoxed: true // For Grants
    };

    // Config for sections with Colored (Blue) Icon Container (Governance typical)
    const blueIconConfig = {
        bg: medicalBlue,
        iconFilter: "brightness(0) invert(1)",
        ...medicalDims
    };

    // Config for Transparent Red Icon Container (Priorities, Policies, Pubs, Student, Collabs, Resources)
    // BG: #C0392B1A (Red 10%)
    // Icon: #C0392B (Red) - Using approx filter for #C0392B / #E74C3C
    const transparentRedIconConfig = {
        bg: "#C0392B1A", // 10% Opacity Red
        color: "#C0392B", // Red Color for SVGs
        iconFilter: "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)", // For img tags
        ...medicalDims
    };

    // Config for White Icon Container with Red Icons (Vision, Mission, Governance)
    const whiteRedIconConfig = {
        bg: "white",
        color: medicalRed, // For SVG components
        iconFilter: "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)", // For img tags (Red)
        ...medicalDims
    };

    // Config specifically for Grants section (Red Icon, Boxed)
    const grantsIconConfig = {
        bg: "white",
        isBoxed: true,
        iconFilter: "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)"
    };

    // Config specifically for Conferences section (Red Icon, 48x48 box, 24x24 icon)
    const conferencesIconConfig = {
        bg: "white",
        iconFilter: "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
        sizeClass: "w-[48px] h-[48px]",
        radiusClass: "rounded-[8.57px]", // Matching medicalDims standard
        iconSizeClass: "w-[24px] h-[24px]"
    };

    const buttonConfig = { bg: medicalBlue };


    const paramedicalPriorities = [
        {
            title: "Healthcare Technology & Diagnostics",
            desc: "Diagnostic technologies, digital imaging systems, predictive tools, and technical healthcare solutions.",
            icon: <IconAiHealth />
        },
        {
            title: "Chronic Disease Diagnostics & Support",
            desc: "Diagnostic support for diabetes, cardiovascular conditions, and long-term disease monitoring.",
            icon: <IconNcd />
        },
        {
            title: "Public Health Screening & Assessment",
            desc: "Screening programs, diagnostic surveys, community health assessment, and reporting systems.",
            icon: <IconPublicHealth />
        },
        {
            title: "Applied Clinical & Technical Research",
            desc: "Practice-oriented studies, diagnostic method validation, and technical process improvement research.",
            icon: <IconClinicalTrials />
        },
        {
            title: "Precision Diagnostics & Laboratory Science",
            desc: "Advanced laboratory techniques, biomarker analysis, and diagnostic accuracy improvement studies.",
            icon: <IconGenomics />
        },
        {
            title: "Quality Assurance & Patient Safety",
            desc: "Laboratory quality standards, safety protocols, and service quality improvement initiatives.",
            icon: <IconPatientSafety />
        }
    ];


    const medicalStudentPrograms = [
        {
            title: "ICMR-STS Program",
            desc: "Short-term studentship for MBBS students with ₹10,000 stipend and ICMR certification.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconIcmrSts.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "UG Dissertation Research",
            desc: "Mandatory research projects for final-year students under faculty mentorship.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconUgDissertation.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "PG Thesis Support",
            desc: "Comprehensive support for MD/MS theses with funding up to ₹50,000.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconPgThesis.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "Mentorship Program",
            desc: "One-on-one pairing with experienced faculty for research guidance.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconResearchMentorship.svg" className="w-[27px] h-[27px]" alt="" />
        }
    ];

    const medicalForumStats = [
        { value: "250+", label: "Active Members" },
        { value: "12+", label: "Annual Workshops" },
        { value: "Monthly", label: "Journal Clubs", isText: true }
    ];

    // Icons for Publications
    const IconBookOpenWhite = "/AsramWebsite-FE/assets/icons/IconBookOpenWhite.svg";
    const IconBadgeRibbonWhite = "/AsramWebsite-FE/assets/icons/IconBadgeRibbonWhite.svg";
    const IconLineChartWhite = "/AsramWebsite-FE/assets/icons/IconLineChartWhite.svg";

    const medicalPubStats = [
        {
            value: "450+",
            label: "Total Publications (2020-2024)",
            icon: <img src={IconBookOpenWhite} className="w-[23px] h-[23px]" alt="" />
        },
        {
            value: "320+",
            label: "SCI/Scopus Indexed",
            icon: <img src={IconBadgeRibbonWhite} className="w-[23px] h-[23px]" alt="" />
        },
        {
            value: "2,800+",
            label: "Total Citations",
            icon: <img src={IconLineChartWhite} className="w-[23px] h-[23px]" alt="" />
        },
        {
            value: "18",
            label: "Average H-Index",
            icon: <img src={IconBadgeRibbonWhite} className="w-[23px] h-[23px]" alt="" />
        }
    ];

    const medicalRecentPubs = [
        {
            title: "Machine Learning Algorithms for Early Detection of Diabetic Retinopathy",
            authors: "Patel R, Kumar S, Sharma P, et al.",
            journal: "Journal of Medical Systems",
            metrics: "SCI | IF: 4.8"
        },
        {
            title: "Clinical Effectiveness of Hypertension Management in Rural India",
            authors: "Krishnan M, Verma A, Singh N, et al.",
            journal: "The Lancet Regional Health",
            metrics: "SCI | IF: 6.2"
        },
        {
            title: "Genomic Variants in the South Indian Population",
            authors: "Iyer S, Reddy K, Nair L, et al.",
            journal: "Nature Genetics",
            metrics: "SCI | IF: 38.3"
        }
    ];

    useLayoutEffect(() => {
        setHero({
            title: (
                <div className="font-montserrat text-[32px] md:text-[40px] leading-[1.35] text-white">
                    <TypedText text="Research at" className="font-normal" />
                    {" "}
                    <TypedText text="ASRAM Medical College" className="font-bold" delay={0.5} />
                </div>
            ),
            bgImage: ResearchHerobg,
            children: (
                <>
                    <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.36] text-white max-w-[520px] mb-6">
                        Focus on clinical research, translational medicine, and evidence-based healthcare improving patient outcomes.
                    </p>
                </>
            ),
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <>
            <ResearchOverview
                iconConfig={whiteRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                visionText="To advance medical science through ethical, clinically focused research that supports evidence-based practice, improves patient outcomes, and strengthens public health systems."
                missionText="To promote a culture of clinical inquiry, support faculty and postgraduate research, encourage interdisciplinary collaboration, and translate medical research into improved healthcare delivery."
                deanMessage="ASRAM Medical College is committed to high-quality clinical research aligned with ethical standards and academic rigor. Our research framework integrates hospital-based studies, postgraduate work, and faculty-led initiatives to improve patient care and medical education."
                deanName="Dr. Arun Sharma"
                deanTitle="Dean, Research & Innovation"
            />
            <ResearchPriorities
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                priorities={[
                    {
                        title: "Artificial Intelligence & Digital Health",
                        desc: "AI-powered diagnostics, predictive analytics, telemedicine platforms, and wearable health technology.",
                        icon: <IconAiHealth color="#C0392B" />
                    },
                    {
                        title: "Non-Communicable Diseases",
                        desc: "Research on diabetes, hypertension, cardiovascular diseases, and cancer prevention and management.",
                        icon: <IconNcd color="#C0392B" />
                    },
                    {
                        title: "Public Health & Epidemiology",
                        desc: "Community-based studies, screening programs, and health policy impact assessment.",
                        icon: <IconPublicHealth color="#C0392B" />
                    },
                    {
                        title: "Clinical Trials & Translational Research",
                        desc: "Evidence-based medicine, pharmaceutical trials, and medical device testing.",
                        icon: <IconClinicalTrials color="#C0392B" />
                    },
                    {
                        title: "Genomics & Precision Medicine",
                        desc: "Genetic markers, personalized therapy development, and population genomics studies.",
                        icon: <IconGenomics color="#C0392B" />
                    },
                    {
                        title: "Healthcare Quality & Patient Safety",
                        desc: "Hospital accreditation, patient outcome research, and quality improvement initiatives.",
                        icon: <IconPatientSafety color="#C0392B" />
                    }
                ]}
                gridGap="gap-[20px]"
                cardPadding="p-[30px]"
            />

            <ResearchGovernance
                iconConfig={whiteRedIconConfig}
                headerBg="#C0392B1A"
                accentColor={medicalBlue}
                buttonConfig={buttonConfig}
                gridGap="gap-[25px]"
            />
            {/* 2. Research Policies -> Red Transparent */}
            <ResearchPolicies
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                linkColor={medicalBlue}
                variant="medical"
                gridGap="gap-[20px]"
            />
            <ResearchProjects
                bulletColor={medicalRed}
                headerColor="#3A3A3A"
                titleColor={medicalBlue}
                buttonConfig={buttonConfig}
            />
            {/* 3. Publications -> Red Transparent */}
            <ResearchPublications
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                stats={medicalPubStats}
                publications={medicalRecentPubs}
                footerDescription="Browse comprehensive publication records with year-wise listings, citation metrics, and direct links to indexed databases."
            />
            <ResearchGrantsAndFunds
                iconConfig={grantsIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            {/* 4. Student Research -> Red Transparent */}
            <ResearchStudentResearch
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                programs={medicalStudentPrograms}
                forumTitle="ASRAM Student Research Forum"
                forumDesc="Join an active community of student researchers through journal clubs, workshops, and academic discussions."
                forumStats={medicalForumStats}
            />
            <ResearchConferences
                iconConfig={conferencesIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                badgeBgColor={`${medicalRed}1A`}
                badgeTextColor={medicalBlue}
            />
            {/* 5. Collaborations & MoUs -> Red Transparent */}
            <ResearchCollaborations
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            <ResearchPatentsAndInnovations
                iconConfig={whiteRedIconConfig}
                buttonConfig={buttonConfig}
                statValueColor={medicalBlue}
                badgeConfig={{ bg: `${medicalBlue}1A`, text: medicalBlue }}
            />
            {/* 6. Research Resources -> Red Transparent */}
            <ResearchResources
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                arrowFilter="brightness(0) saturate(100%) invert(18%) sepia(37%) saturate(3439%) hue-rotate(210deg) brightness(95%) contrast(93%)"
                titleColor={medicalBlue}
            />
            <ResearchContactAndSupport
                iconConfig={whiteRedIconConfig}
                buttonConfig={buttonConfig}
            />
        </>
    );
};

export default MedicalResearchPage;
