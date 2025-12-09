import React, { lazy, Suspense } from "react";
import cancerIcon from "../../assets/asram/insideasram.svg";
import ResearchIcon from "../../assets/asram/researchinnov.svg";
import LoadingScreen from "../../components/loader/LoadingScreen";

// Lazy imports (same style as NursingPage)
const AsramHero = lazy(() => import("./AsramHero"));
const ReputationQuality = lazy(() =>
  import("./ReputationQuality")
);
const InstitutionsSection = lazy(() =>
  import("./InstitutionSection")
);
const AsramHealthcareServices = lazy(() =>
  import("./HealthCareService")
);
const WhyChooseAsramSection = lazy(() =>
  import("./WhyChoose")
);
const InsideASRAM = lazy(() =>
  import("./InsideAsram")
);
const AsramNewsEvents = lazy(() =>
  import("./AsramNewsEvents")
);
const ResearchInnovation = lazy(() =>
  import("./ResearchInnovation")
);
const AsramFooter = lazy(() =>
  import("./AsramFooter")
);

const AsramPage = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AsramHero />
      <ReputationQuality />
      <InstitutionsSection />
      <AsramHealthcareServices />
      <WhyChooseAsramSection />

      <InsideASRAM 
        title="Inside ASRAM"
        image={cancerIcon}
        quote="At ASRAM, education meets service through clinics, health camps, and meaningful community impact."
      />

      <AsramNewsEvents />

      <ResearchInnovation
        title="Research & Innovation"
        description1="ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration. Students and faculty work together to develop new ideas, strengthen healthcare practices, and contribute meaningful advancements to the medical and nursing community."
        description2="ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration. Students and faculty work together to develop new ideas, improve treatment practices, and advance healthcare knowledge. With access to modern labs, skilled mentors, and real clinical data, ASRAM fosters a culture of inquiry that shapes future-ready healthcare professionals."
        image={ResearchIcon}
      />

      <AsramFooter />
    </Suspense>
  );
};

export default AsramPage;
