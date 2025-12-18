import React from "react";

// Icons
import insideasramimg from "@/assets/asram/insideasram.png";
import ResearchSectionimg from "@/assets/asram/researchinnov.png";

// Normal Direct Imports (NO lazy loading)
import AsramHero from "./AsramHero";
import ReputationQuality from "./ReputationQuality";
import InstitutionsSection from "./InstitutionSection";
import AsramHealthcareServices from "./HealthCareService";
import WhyChooseAsramSection from "./WhyChoose";
import InsideASRAM from "./InsideAsram";
import AsramNewsEvents from "./AsramNewsEvents";
import ResearchInnovation from "./ResearchInnovation";
import AsramFooter from "./AsramFooter";

const AsramPage = () => {
  return (
    <>
      <AsramHero />
      <ReputationQuality />
      <InstitutionsSection />
      <AsramHealthcareServices />
      <WhyChooseAsramSection />

      <InsideASRAM
        title="Inside ASRAM"
        image={insideasramimg}
        quote="At ASRAM, education meets service through clinics, health camps, and meaningful community impact."
      />

      <AsramNewsEvents />

      <ResearchInnovation
        title="Research & Innovation"
        description1="
        ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration. Students and faculty work together to develop new ideas, strengthen healthcare practices ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration.
        "
        image={ResearchSectionimg}
      />

    </>
  );
};

export default AsramPage;
