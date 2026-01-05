import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
const ResearchHerobg = "/AsramWebsite-FE/assets/research/asramresearchbanner.png";
import TypedText from "@/components/common/TypedText";

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

import {
    IconAiHealth,
    IconNcd,
    IconPublicHealth,
    IconClinicalTrials,
    IconGenomics,
    IconPatientSafety
} from "@/assets/icons";

const ParaMedicalResearchPage = () => {
    const { setHero, hideHero } = useHero();

    const medicalBlue = "#223F7F";
    const medicalRed = "#A66E00";

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

    // Config for Transparent Gold Icon Container (Priorities, Policies, Pubs, Student, Collabs, Resources)
    // BG: #A66E0033 (Gold 20%)
    // Icon: #A66E00 (Gold)
    const transparentRedIconConfig = {
        bg: "#A66E0033", // 20% Opacity Gold
        color: "#A66E00", // Gold Color for SVGs
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)", // For img tags
        ...medicalDims
    };

    // Config specifically for ResearchOverview (Vision/Mission) with 58.3x58.3 container and 29.17x29.17 icon
    const paramedicalOverviewIconConfig = {
        bg: "#A66E0033",
        color: "#A66E00",
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)",
        sizeClass: "w-[58.3px] h-[58.3px]",
        radiusClass: "rounded-[8.57px]",
        iconSizeClass: "w-[29.17px] h-[29.17px]"
    };

    // Config for White Icon Container with Gold Icons (Vision, Mission, Governance)
    const whiteRedIconConfig = {
        bg: "white",
        color: medicalRed, // For SVG components
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)", // For img tags (Gold)
        ...medicalDims
    };

    const patentIconConfig = {
        bg: "#A66E001A",
        color: medicalRed, // For SVG components
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)", // For img tags (Gold)
        ...medicalDims
    };




    // Config specifically for Grants section (Gold Icon, Boxed)
    const grantsIconConfig = {
        bg: "#A66E001A",
        isBoxed: true,
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)"
    };

    // Config specifically for Conferences section (Gold Icon, 48x48 box, 24x24 icon)
    const conferencesIconConfig = {
        bg: "#A66E001A",
        iconFilter: "brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(2224%) hue-rotate(28deg) brightness(98%) contrast(106%)",
        sizeClass: "w-[48px] h-[48px]",
        radiusClass: "rounded-[8.57px]", // Matching medicalDims standard
        iconSizeClass: "w-[24px] h-[24px]"
    };

    const buttonConfig = { bg: medicalBlue };

    useLayoutEffect(() => {
        setHero({
            title: (
                <div className="font-montserrat text-[32px] md:text-[40px] leading-[1.35] text-white">
                    <TypedText text="Research at" className="font-normal" />
                    {" "}
                    <TypedText text="Paramedical College" className="font-bold" delay={0.5} />
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

    const paramedicalGovernanceData = [
        {
            title: "Institutional Research Committee",
            acronym: "(IRC)",
            desc: "Oversees paramedical research activities, ensures compliance with institutional policies, and monitors applied research for quality standards.",
            members: "5 Members",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconBookGovernance.svg" className="w-[25px] h-[25px]" alt="" />,
        },
        {
            title: "Scientific & Academic Research Committee",
            acronym: "(SARC)",
            desc: "Provides technical and academic guidance for paramedical research initiatives and promotes practice-oriented research excellence.",
            members: "5 Members",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconUsersGovernance.svg" className="w-[25px] h-[25px]" alt="" />,
        },
        {
            title: "Institutional Ethics Committee",
            acronym: "(IEC)",
            desc: "Ensures paramedical research involving human participants adheres to ethical guidelines and maintains regulatory compliance.",
            members: "6 Members",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconShieldGovernance.svg" className="w-[25px] h-[25px]" alt="" />,
        },
    ];

    const paramedicalProjects = [
        {
            title: "AI-Based Imaging Support for Early Disease Detection",
            details: "ICMR Funded | PI: Mr. Rakesh Kumar | Collaborator: IIT Hyderabad"
        },
        {
            title: "Biomarker Analysis for Cardiovascular Risk Screening",
            details: "DST Funded | PI: Ms. Anitha Reddy | Collaborator: NIMHANS"
        },
        {
            title: "Digital Diagnostic Support for Maternal Health Services",
            details: "Gates Foundation | PI: Ms. Priyanka Das | Collaborator: UNICEF"
        }
    ];

    const paramedicalStats = [
        {
            value: "150+",
            label: "Total Publications (2020-2024)",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconBookOpenWhite.svg" className="w-[23px] h-[23px]" alt="" />
        },
        {
            value: "90+",
            label: "SCI/Scopus Indexed",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconBadgeRibbonWhite.svg" className="w-[23px] h-[23px]" alt="" />
        },
        {
            value: "720+",
            label: "Total Citations",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconLineChartWhite.svg" className="w-[23px] h-[23px]" alt="" />
        },
        {
            value: "5",
            label: "Average H-Index",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconBadgeRibbonWhite.svg" className="w-[23px] h-[23px]" alt="" />
        }
    ];

    const paramedicalPubs = [
        {
            title: "Al-Based Diagnostic Imaging for Early Disease Detection",
            authors: "Patel R, Kumar S, Sharma P, et al.",
            journal: "Journal of Medical Systems",
            metrics: "SCI | IF: 4.8"
        },
        {
            title: "Diagnostic Accuracy in Hypertension Risk Screening Programs",
            authors: "Krishnan M, Verma A, Singh N, et al.",
            journal: "The Lancet Regional Health",
            metrics: "SCI | IF: 6.2"
        },
        {
            title: "Laboratory Biomarker Trends in South Indian Populations",
            authors: "Iyer S, Reddy K, Nair L, et al.",
            journal: "Nature Genetics",
            metrics: "SCI | IF: 38.3"
        }
    ];

    const paramedicalPubsDesc = "Browse comprehensive publication records with year-wise listings, citation metrics, and direct links to indexed databases.";

    const paramedicalStudentPrograms = [
        {
            title: "ICMR-STS Program",
            desc: "Short-term research exposure for paramedical students with stipend and certification support.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconIcmrSts.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "UG Dissertation Research",
            desc: "Applied research projects for final-year students with faculty guidance.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconUgDissertation.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "PG Thesis Support",
            desc: "Academic and funding support for postgraduate theses up to ₹50,000.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconPgThesis.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "Mentorship Program",
            desc: "Faculty-led mentoring to support technical and applied research skills.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconResearchMentorship.svg" className="w-[27px] h-[27px]" alt="" />
        }
    ];

    const paramedicalForumStats = [
        { value: "250+", label: "Active Members" },
        { value: "12+", label: "Annual Workshops" },
        { value: "Monthly", label: "Journal Clubs", isText: true }
    ];

    const paramedicalPatentsList = [
        {
            title: "Automated Diagnostic Imaging Analysis Tool",
            authors: "Dr. Rajesh Patel, Dr. Suresh Kumar, Dr. Anjali Verma",
            status: "Granted - IN-398745",
            statusColor: "bg-[#DCFCE7] text-[#008236]"
        },
        {
            title: "Portable Laboratory Sample Processing Device",
            authors: "Dr. Ramesh Babu, Dr. Neha Singh",
            status: "Granted - IN 402158",
            statusColor: "bg-[#DCFCE7] text-[#008236]"
        },
        {
            title: "Smart Diagnostic Workflow Optimization System",
            authors: "Dr. Meera Krishnan, Dr. Priya Sharma",
            status: "Filed - 2024",
            statusColor: "bg-[#DBEAFE] text-[#1447E6]"
        }
    ];

    const paramedicalInnovationsList = [
        {
            title: "AI-Enabled Diagnostic Decision Support System",
            category: "Digital Health Solution",
            badge: "Pilot Testing"
        },
        {
            title: "Portable Vital Signs Monitoring Device",
            category: "Medical Device",
            badge: "Clinical Validation"
        },
        {
            title: "Rapid Diagnostic Test Development Kit",
            category: "Diagnostic Tool",
            badge: "Prototype Development"
        }
    ];

    const paramedicalResources = [
        {
            title: "Central Laboratory",
            desc: "Laboratory facilities supporting allied health research, diagnostics testing, and technical studies.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconMicroscope.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "Biostatistics Support",
            desc: "Support for study planning, data analysis, and interpretation for paramedical research projects.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconChartWhite.svg" className="w-[27px] h-[27px]" alt="" />
        },
        {
            title: "Software & Tools",
            desc: "Access to SPSS, R, Turnitin, Rayyan, NVivo, GraphPad Prism, and reference management tools.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconLaptop.svg" className="w-[27px] h-[27px]" alt="" />
        }
    ];

    const paramedicalResourceFooter = {
        title: "Book Resources & Training",
        desc: "Manage bookings for laboratory facilities, diagnostic equipment, software access, and expert consultation through the resource portal. Regular training programs support student and faculty research needs.",
        btn1Text: "Access Resource Portal",
        btn2Text: "View Training Schedule"
    };

    return (
        <>
            <ResearchOverview
                iconConfig={paramedicalOverviewIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                visionText="To promote applied research in allied health sciences that improves diagnostic accuracy, strengthens technical practices, and supports quality healthcare services."
                missionText="To encourage practice-oriented research, support faculty and student projects, foster interdisciplinary collaboration, and translate research outcomes into effective healthcare support systems."
                deanMessage="ASRAM Paramedical College focuses on research that enhances allied health and diagnostic services. Our structured research approach supports faculty and student initiatives aimed at improving technical accuracy and healthcare support practices."
                deanName="Dr. Arun Sharma"
                deanTitle="Dean, Research & Innovation"
            />
            {/* 1. Research Priorities -> Gold Transparent */}
            <ResearchPriorities
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                priorities={paramedicalPriorities}
            />
            <ResearchGovernance
                iconConfig={whiteRedIconConfig}
                headerBg="#A66E0033"
                accentColor={medicalBlue}
                buttonConfig={buttonConfig}
                governanceData={paramedicalGovernanceData}
            />
            {/* 2. Research Policies -> Gold Transparent */}
            <ResearchPolicies
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                linkColor={medicalBlue}
                variant="medical"
            />
            <ResearchProjects
                bulletColor={medicalRed}
                headerColor="#3A3A3A"
                titleColor={medicalBlue}
                buttonConfig={buttonConfig}
                projects={paramedicalProjects}
            />
            {/* 3. Publications -> Gold Transparent */}
            <ResearchPublications
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                stats={paramedicalStats}
                publications={paramedicalPubs}
                footerDescription={paramedicalPubsDesc}
            />
            <ResearchGrantsAndFunds
                iconConfig={grantsIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            {/* 4. Student Research -> Gold Transparent */}
            <ResearchStudentResearch
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                programs={paramedicalStudentPrograms}
                forumTitle="ASRAM Student Research Forum"
                forumDesc="Engage with peers and faculty through research discussions, workshops, and knowledge-sharing sessions."
                forumStats={paramedicalForumStats}
            />
            <ResearchConferences
                iconConfig={conferencesIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                badgeBgColor={`${medicalRed}33`}
                badgeTextColor={medicalBlue}
            />
            {/* 5. Collaborations & MoUs -> Red Transparent */}
            <ResearchCollaborations
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            <ResearchPatentsAndInnovations
                iconConfig={patentIconConfig}
                buttonConfig={buttonConfig}
                statValueColor={medicalBlue}
                badgeConfig={{ bg: `${medicalBlue}1A`, text: medicalBlue }}
                patents={paramedicalPatentsList}
                innovations={paramedicalInnovationsList}
                incubationDesc="ASRAM Innovation Center supports applied research innovations through technical mentoring, funding access, and commercialization guidance."
            />
            {/* 6. Research Resources -> Red Transparent */}
            <ResearchResources
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
                arrowFilter="brightness(0) saturate(100%) invert(18%) sepia(37%) saturate(3439%) hue-rotate(210deg) brightness(95%) contrast(93%)"
                titleColor={medicalBlue}
                resources={paramedicalResources}
                footerContent={paramedicalResourceFooter}
            />
            <ResearchContactAndSupport
                iconConfig={patentIconConfig}
                buttonConfig={buttonConfig}
            />
        </>
    );
};

export default ParaMedicalResearchPage;
