import React from "react";

// Icons
import cancerIcon from "../../assets/asram/insideasram.svg";
import ResearchIcon from "../../assets/asram/researchinnov.svg";

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
import AsramHeroLat from "./AsramHero";
import ReputationQualityLat from "./ReputationQuality";
import InsideASRAMLat from "./InsideAsram";
import AsramFooterLat from "./AsramFooter";
import AsramNewsEventsLat from "./AsramNewEventsLat";
import WhyChooseAsramLat from "./WhyChooseLat";
import HealthcareServicesLat from "./HealthCareServiceLat";
import InstitutionsSectionLat from "./InstituteSectionLat";

const AsramLatestPage = () => {
  return (
    <>
      <AsramHeroLat />
      <ReputationQualityLat />
      <InstitutionsSectionLat />
      <HealthcareServicesLat />
      <WhyChooseAsramLat />

      <InsideASRAMLat
        title="Inside ASRAM"
        image={cancerIcon}
        quote="At ASRAM, education meets service through clinics, health camps, and meaningful community impact."
      />

      <AsramNewsEventsLat />

      <ResearchInnovation
        title="Research & Innovation"
        description1="ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration. Students and faculty work together to develop new ideas, strengthen healthcare practices, and contribute meaningful advancements to the medical and nursing community."
        description2="ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration. Students and faculty work together to develop new ideas, improve treatment practices, and advance healthcare knowledge. With access to modern labs, skilled mentors, and real clinical data, ASRAM fosters a culture of inquiry that shapes future-ready healthcare professionals."
        image={ResearchIcon}
      />

      <AsramFooterLat />
    </>
  );
};

export default AsramLatestPage;
