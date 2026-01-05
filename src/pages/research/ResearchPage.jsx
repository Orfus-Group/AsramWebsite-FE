import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
const ResearchHerobg = "/AsramWebsite-FE/assets/research/asramresearchbanner.png";
import TypedText from "@/components/common/TypedText";

// Import from current folder (since this is in pages/research)
import ResearchOverview from "./sections/ResearchOverview";
import ResearchPriorities from "./sections/ResearchPriorities";
import ResearchGovernance from "./sections/ResearchGovernance";
import ResearchPolicies from "./sections/ResearchPolicies";
import ResearchProjects from "./sections/ResearchProjects";
import ResearchPublications from "./sections/ResearchPublications";
import ResearchGrantsAndFunds from "./sections/ResearchGrantsAndFunds";
import ResearchStudentResearch from "./sections/ResearchStudentResearch";
import ResearchConferences from "./sections/ResearchConferences";
import ResearchCollaborations from "./sections/ResearchCollaborations";
import ResearchPatentsAndInnovations from "./sections/ResearchPatentsAndInnovations";
import ResearchResources from "./sections/ResearchResources";
import ResearchContactAndSupport from "./sections/ResearchContactAndSupport";

import {
  IconAiHealth,
  IconNcd,
  IconPublicHealth,
  IconClinicalTrials,
  IconGenomics,
  IconPatientSafety
} from "@/assets/icons";

const ResearchPage = () => {
  const { setHero, hideHero } = useHero();

  const medicalBlue = "#223F7F";
  const nursingTeal = "#008C8C";

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


  const tiltwhiteIconConfig = {
    bg: " #FFF",
    iconFilter: "brightness(0) invert(1)",
    ...medicalDims
  };

  // Config for Transparent Teal Icon Container (Priorities, Policies, Pubs, Student, Collabs, Resources)
  // BG: #008C8C1A (Teal 10%)
  // Icon: #008C8C (Teal)
  const transparentTealIconConfig = {
    bg: "#008C8C1A", // 10% Opacity Teal
    color: "#008C8C", // Teal Color for SVGs
    iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)", // For img tags (Teal)
    ...medicalDims
  };

  // Config specifically for ResearchOverview (Vision/Mission) with 58.3x58.3 container and 29.17x29.17 icon
  const nursingOverviewIconConfig = {
    bg: "#008C8C1A",
    color: "#008C8C",
    iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)",
    sizeClass: "w-[58.3px] h-[58.3px]",
    radiusClass: "rounded-[8.57px]",
    iconSizeClass: "w-[29.17px] h-[29.17px]"
  };

  // Config for White Icon Container with Teal Icons (Vision, Mission, Governance)
  const whiteTealIconConfig = {
    bg: "white",
    color: nursingTeal, // For SVG components
    iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)", // For img tags (Teal)
    ...medicalDims
  };

  const patentIconConfig = {
    bg: "#008C8C1A",
    color: nursingTeal, // For SVG components
    iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)", // For img tags (Teal)
    ...medicalDims
  };


  // Config specifically for Grants section (Teal Icon, Boxed)
  const grantsIconConfig = {
    bg: "#008C8C1A",
    isBoxed: true,
    iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)"
  };

  // Config specifically for Conferences section (Teal Icon, 48x48 box, 24x24 icon)
  const conferencesIconConfig = {
    bg: "#008C8C1A",
    iconFilter: "brightness(0) saturate(100%) invert(29%) sepia(91%) saturate(1883%) hue-rotate(162deg) brightness(94%) contrast(103%)",
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
          <TypedText text="College of Nursing" className="font-bold" delay={0.5} />
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

  const nursingPriorities = [
    {
      title: "Nursing Informatics & Digital Care",
      desc: "Technology-enabled nursing systems, digital documentation, telehealth nursing, and care delivery tools.",
      icon: <IconAiHealth />
    },
    {
      title: "Chronic Illness & Long-Term Care",
      desc: "Nursing research on diabetes, cardiac care, chronic disease management, and patient rehabilitation.",
      icon: <IconNcd />
    },
    {
      title: "Community Health & Epidemiology",
      desc: "Community-based nursing studies, disease prevention programs, screening.",
      icon: <IconPublicHealth />
    },
    {
      title: "Clinical Nursing Practice Research",
      desc: "Evidence-based nursing care, clinical practice improvement, and patient-centered intervention studies.",
      icon: <IconClinicalTrials />
    },
    {
      title: "Patient-Centered & Holistic Care",
      desc: "Personalized nursing approaches, holistic care models, and patient experience research.",
      icon: <IconGenomics />
    },
    {
      title: "Quality of Care & Patient Safety",
      desc: "Nursing quality indicators, patient safety practices, and care outcome improvement initiatives.",
      icon: <IconPatientSafety />
    }
  ];

  const nursingGovernanceData = [
    {
      title: "Institutional Research Committee",
      acronym: "(IRC)",
      desc: "Oversees nursing research activities, ensures compliance with institutional policies, and monitors research projects for quality and professional standards.",
      members: "5 Members",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconBookGovernance.svg" className="w-[25px] h-[25px]" alt="" />,
    },
    {
      title: "Scientific & Academic Research Committee",
      acronym: "(SARC)",
      desc: "Provides academic and methodological guidance for nursing research initiatives and promotes evidence-based research practices.",
      members: "5 Members",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconUsersGovernance.svg" className="w-[25px] h-[25px]" alt="" />,
    },
    {
      title: "Institutional Ethics Committee",
      acronym: "(IEC)",
      desc: "Ensures nursing research involving human participants adheres to ethical guidelines and complies with institutional and national standards.",
      members: "6 Members",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconShieldGovernance.svg" className="w-[25px] h-[25px]" alt="" />,
    },
  ];



  const nursingProjects = [
    {
      title: "Technology-Enabled Nursing Care Monitoring in Rural Settings",
      details: "ICMR Funded | PI: Prof. Anjali Rao | Collaborator: AIIMS Nursing College"
    },
    {
      title: "Nursing Interventions for Cardiovascular Risk Management",
      details: "DST Funded | PI: Prof. Meena Thomas | Collaborator: Manipal College of Nursing"
    },
    {
      title: "Mobile-Based Maternal Health Education for Community Care",
      details: "Gates Foundation | PI: Prof. Kavita Nair | Collaborator: UNICEF"
    }
  ];

  const nursingStats = [
    {
      value: "180+",
      label: "Total Publications (2020-2024)",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconBookOpenWhite.svg" className="w-[23px] h-[23px]" alt="" />
    },
    {
      value: "120+",
      label: "SCI/Scopus Indexed",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconBadgeRibbonWhite.svg" className="w-[23px] h-[23px]" alt="" />
    },
    {
      value: "950+",
      label: "Total Citations",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconLineChartWhite.svg" className="w-[23px] h-[23px]" alt="" />
    },
    {
      value: "6",
      label: "Average H-Index",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconBadgeRibbonWhite.svg" className="w-[23px] h-[23px]" alt="" />
    }
  ];

  const nursingPubs = [
    {
      title: "Digital Nursing Interventions for Early Detection of Patient Deterioration",
      authors: "Patel R, Kumar S, Sharma P, et al.",
      journal: "Journal of Nursing Informatics",
      metrics: "SCI | IF: 4.8"
    },
    {
      title: "Clinical Effectiveness of Hypertension Management in Rural India",
      authors: "Krishnan M, Verma A, Singh N, et al.",
      journal: "International Journal of Nursing Studies",
      metrics: "SCI | IF: 6.2"
    },
    {
      title: "Genomic Variants in the South Indian Population",
      authors: "Iyer S, Reddy K, Nair L, et al.",
      journal: "Public Health Nursing",
      metrics: "SCI | IF: 38.3"
    }
  ];

  const nursingPubsDesc = "Browse comprehensive publication records with year-wise listings, citation metrics, and direct links to indexed databases.";

  const nursingStudentPrograms = [
    {
      title: "ICMR-STS Program",
      desc: "Short-term opportunities for nursing students with stipend and certification support.",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconIcmrSts.svg" className="w-[27px] h-[27px]" alt="" />
    },
    {
      title: "UG Dissertation Research",
      desc: "Structured research projects for final-year students with faculty supervision.",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconUgDissertation.svg" className="w-[27px] h-[27px]" alt="" />
    },
    {
      title: "PG Thesis Support",
      desc: "Guidance and funding support for MSc Nursing theses up to ₹50,000 for students.",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconPgThesis.svg" className="w-[27px] h-[27px]" alt="" />
    },
    {
      title: "Mentorship Program",
      desc: "Personalized mentoring by senior faculty for research skill development.",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconResearchMentorship.svg" className="w-[27px] h-[27px]" alt="" />
    }
  ];

  const nursingForumStats = [
    { value: "250+", label: "Active Members" },
    { value: "12+", label: "Annual Workshops" },
    { value: "Monthly", label: "Journal Clubs", isText: true }
  ];

  const nursingConferencesEvents = [
    {
      title: "National Workshop on Nursing Research Methodology",
      tag: "Workshop",
      date: "December 15-16, 2024"
    },
    {
      title: "CME on Evidence-Based Nursing Practice",
      tag: "CME",
      date: "January 8, 2025"
    }
  ];

  const nursingHighlightEvent = {
    title: "Annual Research Week 2025",
    desc: "A dedicated nursing research event highlighting student and faculty presentations, expert talks, workshops, and research awards.",
    date: "March 10-15, 2025",
    theme: "\"Research for Health Equity\""
  };

  const nursingPatentsStatsFixed = [
    {
      value: "8",
      label: "Patents Granted",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconPatentGranted.svg" className="w-[26px] h-[26px]" alt="" />
    },
    {
      value: "12",
      label: "Patents Filed",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconPatentFiled.svg" className="w-[26px] h-[26px]" alt="" />
    },
    {
      value: "15+",
      label: "Active Innovations",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconInnovation.svg" className="w-[26px] h-[26px]" alt="" />
    },
    {
      value: "5",
      label: "Prototypes",
      icon: <img src="/AsramWebsite-FE/assets/icons/IconPrototype.svg" className="w-[26px] h-[26px]" alt="" />
    }
  ];

  const nursingPatentsList = [
    {
      title: "Smart Nursing Care Monitoring and Alert System",
      authors: "Dr. Rajesh Patel, Dr. Suresh Kumar, Dr. Anjali Verma",
      status: "Granted - IN-398745",
      statusColor: "bg-[#223F7F1A] text-[#223F7F]"
    },
    {
      title: "Wearable Device for Patient Safety Monitoring",
      authors: "Dr. Ramesh Babu, Dr. Neha Singh",
      status: "Granted - IN 402158",
      statusColor: "bg-[#223F7F1A] text-[#223F7F]"
    },
    {
      title: "Digital Documentation Tool for Nursing Workflow",
      authors: "Dr. Meera Krishnan, Dr. Priya Sharma",
      status: "Filed - 2024",
      statusColor: "bg-[#223F7F1A] text-[#223F7F]"
    }
  ];

  const nursingInnovationsList = [
    {
      title: "Digital Nursing Care Coordination Platform",
      category: "Digital Health Solution",
      badge: "Pilot Testing"
    },
    {
      title: "Patient Fall Prevention Monitoring System",
      category: "Medical Device",
      badge: "Clinical Validation"
    },
    {
      title: "Community Health Assessment Toolkit",
      category: "Diagnostic Tool",
      badge: "Prototype Development"
    }
  ];


  return (
    <>
      <ResearchOverview
        iconConfig={nursingOverviewIconConfig}
        visionText="To advance nursing science through structured research that strengthens evidence-based nursing practice, enhances patient care quality, and supports community health outcomes."
        missionText="To promote nursing-led research, support faculty and student initiatives, encourage interdisciplinary collaboration, and apply research findings to improve healthcare practices and education."
        deanMessage="ASRAM Nursing College is dedicated to research that strengthens nursing practice and patient care. Our research ecosystem supports faculty and student-led studies focused on evidence-based care, patient safety, and community health improvement."
        deanName="Dr. Arun Sharma"
        deanTitle="Dean, Research & Innovation"
      />

      <ResearchPriorities
        iconConfig={transparentTealIconConfig}
        priorities={nursingPriorities}
      />

      <ResearchGovernance
        iconConfig={whiteTealIconConfig}
        headerBg="#008C8C1A"
        governanceData={nursingGovernanceData}
        buttonConfig={buttonConfig}
      />

     
      <ResearchPolicies
                iconConfig={transparentTealIconConfig}
                buttonConfig={buttonConfig}
                linkColor={medicalBlue}
                variant="medical"
                gridGap="gap-[20px]"
            />

      <ResearchProjects
        projects={nursingProjects}
        buttonConfig={buttonConfig}
      />

      <ResearchPublications
        iconConfig={transparentTealIconConfig}
        publications={nursingPubs}
        footerDescription={nursingPubsDesc}
        stats={nursingStats}
        buttonConfig={buttonConfig}
      />

      <ResearchGrantsAndFunds
        iconConfig={grantsIconConfig} // Special config with boxed
        iconArrowColor="#223F7F"
        buttonConfig={buttonConfig}
      />

      <ResearchStudentResearch
        iconConfig={transparentTealIconConfig}
        programs={nursingStudentPrograms}
        forumDesc="Be part of a collaborative nursing research community through workshops, discussions, and journal reviews."
        stats={nursingForumStats}
      />

      <ResearchConferences
        iconConfig={conferencesIconConfig}
        whiteIconConfig={whiteIconConfig} // For the section tag icon
        events={nursingConferencesEvents}
        highlightEvent={nursingHighlightEvent}
      />

      <ResearchCollaborations
        iconConfig={transparentTealIconConfig}
      />

      <ResearchPatentsAndInnovations
        iconConfig={patentIconConfig}
        whiteIconConfig={whiteIconConfig}
        stats={nursingPatentsStatsFixed}
        patents={nursingPatentsList}
        innovations={nursingInnovationsList}
        badgeConfig={{ bg: "#223F7F1A", text: "#223F7F" }}
        incubationDesc="The ASRAM Innovation Center supports nursing-led innovations through mentorship, academic validation, and industry collaboration."
      />

      <ResearchResources
        iconConfig={transparentTealIconConfig}
        arrowFilter="brightness(0) saturate(100%) invert(18%) sepia(37%) saturate(3439%) hue-rotate(210deg) brightness(95%) contrast(93%)"
        resources={[
          {
            title: "Central Laboratory",
            desc: "Well-equipped laboratory supporting nursing research with clinical testing and sample analysis.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconMicroscope.svg" className="w-[27px] h-[27px]" alt="" />
          },
          {
            title: "Biostatistics Support",
            desc: "Guidance for nursing research study design, sample estimation, and statistical interpretation.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconChartWhite.svg" className="w-[27px] h-[27px]" alt="" />
          },
          {
            title: "Software & Tools",
            desc: "Access to SPSS, R, Turnitin, Rayyan, NVivo, GraphPad Prism, and reference management tools.",
            icon: <img src="/AsramWebsite-FE/assets/icons/IconLaptop.svg" className="w-[27px] h-[27px]" alt="" />
          }
        ]}
        footerContent={{
          title: "Book Resources & Training",
          desc: "Use the institutional resource management system to reserve laboratory access, software tools, and consultation support. Scheduled training sessions are provided for nursing faculty and students.",
          btn1Text: "Access Resource Portal",
          btn2Text: "View Training Schedule"
        }}
      />

      <ResearchContactAndSupport
        iconConfig={patentIconConfig}
        buttonConfig={buttonConfig}
      />
    </>
  );
};

export default ResearchPage;
