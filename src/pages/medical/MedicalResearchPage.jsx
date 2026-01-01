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

    const buttonConfig = { bg: medicalBlue };

    useLayoutEffect(() => {
        setHero({
            title: (
                <div className="font-montserrat text-[32px] md:text-[40px] leading-[1.35] text-white">
                    <TypedText text="Research at " className="font-normal" />
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
            />
            {/* 1. Research Priorities -> Red Transparent */}
            <ResearchPriorities
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
            />
            <ResearchGovernance
                iconConfig={whiteRedIconConfig}
                headerBg="#C0392B1A"
                accentColor={medicalBlue}
                buttonConfig={buttonConfig}
            />
            {/* 2. Research Policies -> Red Transparent */}
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
            />
            {/* 3. Publications -> Red Transparent */}
            <ResearchPublications
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            <ResearchGrantsAndFunds
                iconConfig={whiteIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            {/* 4. Student Research -> Red Transparent */}
            <ResearchStudentResearch
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
            />
            <ResearchConferences
                iconConfig={whiteIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            {/* 5. Collaborations & MoUs -> Red Transparent */}
            <ResearchCollaborations
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            <ResearchPatentsAndInnovations
                iconConfig={whiteIconConfig}
                buttonConfig={buttonConfig}
            />
            {/* 6. Research Resources -> Red Transparent */}
            <ResearchResources
                iconConfig={transparentRedIconConfig}
                buttonConfig={buttonConfig}
                accentColor={medicalBlue}
            />
            <ResearchContactAndSupport
                iconConfig={whiteIconConfig}
                buttonConfig={buttonConfig}
            />
        </>
    );
};

export default MedicalResearchPage;
