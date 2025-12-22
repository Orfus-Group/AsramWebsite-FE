import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import ResearchHerobg from "@/assets/research/asramresearchbanner.png";
import MotionSection from "@/components/common/MotionSection";
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
        <span className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[1.2] text-white">
          Build a Career in Healthcare
        </span>
      ),
      bgImage: ResearchHerobg,
      children: (
        <>
          <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.4] text-white max-w-[520px] mb-6">
            Structured medical education supported by experienced faculty, advanced laboratories, and real-world clinical exposure.
          </p>

          <button
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
          </button>
        </>
      ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);

  return (
    <>
      <MotionSection>
        <ResearchOverview />
      </MotionSection>
      <MotionSection delay={0.1}>
        <ResearchPriorities />
      </MotionSection>
      <MotionSection delay={0.1}>
        <ResearchGovernance />
      </MotionSection>
      <MotionSection delay={0.1}>
        <ResearchPolicies />
      </MotionSection>
      <MotionSection delay={0.2}>
        <ResearchProjects />
      </MotionSection>
      <MotionSection delay={0.2}>
        <ResearchPublications />
      </MotionSection>
      <MotionSection delay={0.2}>
        <ResearchGrantsAndFunds />
      </MotionSection>
      <MotionSection delay={0.3}>
        <ResearchStudentResearch />
      </MotionSection>
      <MotionSection delay={0.3}>
        <ResearchConferences />
      </MotionSection>
      <MotionSection delay={0.3}>
        <ResearchCollaborations />
      </MotionSection>
      <MotionSection delay={0.3}>
        <ResearchPatentsAndInnovations />
      </MotionSection>
      <MotionSection delay={0.3}>
        <ResearchResources />
      </MotionSection>
      <MotionSection delay={0.3}>
        <ResearchContactAndSupport />
      </MotionSection>
    </>
  );
};

export default ResearchPage;
