import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import ResearchHerobg from "@/assets/research/asramresearchbanner.png";
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

const ResearchPage = () => {
  const { setHero, hideHero } = useHero();

  useLayoutEffect(() => {
    setHero({
      title: (
        <span className="font-montserrat font-bold text-[40px] leading-[1.35] text-white">
          Build a Career in Healthcare
        </span>
      ),
      bgImage: ResearchHerobg,
      children: (
        <>
          <p className="font-montserrat font-medium text-[22px] leading-[1.36] text-white max-w-[520px] mb-6">
            Structured medical education supported by experienced faculty, advanced laboratories, and real-world clinical exposure.
          </p>

          <button
            className="
                        bg-[#191919] 
                        hover:bg-[#27272a] 
                        text-white 
                        px-6 py-2 md:px-8 md:py-3
                        rounded-[8px] 
                        text-[16px] md:text-[22px] font-medium 
                        transition-colors
                    "
          >
            Explore Programs
          </button>
        </>
      ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);

  return (
    <>
      <ResearchOverview />
      <ResearchPriorities />
      <ResearchGovernance />
      <ResearchPolicies />
      <ResearchProjects />
      <ResearchPublications />
      <ResearchGrantsAndFunds />
      <ResearchStudentResearch />
      <ResearchConferences />
      <ResearchCollaborations />
      <ResearchPatentsAndInnovations />
      <ResearchResources />
      <ResearchContactAndSupport />
    </>
  );
};

export default ResearchPage;
