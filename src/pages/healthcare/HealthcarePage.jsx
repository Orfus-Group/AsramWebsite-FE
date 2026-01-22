import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
import TypedText from "@/components/common/TypedText";

import CareAtAsram from "./sections/CareAtAsram";
import SpecialtiesDepartments from "./sections/SpecialtiesDepartments";
import ExperiencedDoctors from "./sections/ExpertMedicalTeams";
import PatientCareFacilities from "./sections/PatientCareFacilities";
import DiagnosticServices from "./sections/DiagnosticServices";
import SafetyAccreditation from "./sections/SafetyAccreditation";
import PatientSupportServices from "./sections/PatientSupportServices";
import HealthCampsOutreach from "./sections/HealthCampsOutreach";
import EmergencyCriticalCare from "./sections/EmergencyCriticalCare";
import HospitalInfrastructureGallery from "./sections/HospitalInfrastructureGallery";
import { useLocation } from "react-router-dom";
const HeroBg = "/AsramWebsite-FE/assets/healthcare/healthcareherobg.png";

const HealthcarePage = () => {
  const { setHero, hideHero } = useHero();

  const location = useLocation();

useLayoutEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
}, [location]);


  useLayoutEffect(() => {
    setHero({
      title: (
        <TypedText
          text="Healthcare"
          className="font-montserrat font-bold text-[32px] md:text-[60px] leading-[54px] text-white"
        />
      ),
      bgImage: HeroBg,
      isVisible: true,
      children: (
        <>
          <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.4] text-white max-w-[520px] mb-6">
            A well-structured campus environment that supports academic focus, personal growth, and student well-being.          </p>

          {/* <button
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
          </button> */}
        </>
      ),
    });
    return () => hideHero();
  }, [setHero, hideHero]);

 return (
  <div className="w-full bg-white">
    <section id="care-at-asram" className="scroll-mt-[60px]">
      <CareAtAsram />
    </section>

    <section id="specialties-departments" className="scroll-mt-[60px]">
      <SpecialtiesDepartments />
    </section>

    <section id="experienced-doctors" className="scroll-mt-[60px]">
      <ExperiencedDoctors />
    </section>

    <section id="patient-care-facilities" className="scroll-mt-[60px]">
      <PatientCareFacilities />
    </section>

    <section id="diagnostic-services" className="scroll-mt-[60px]">
      <DiagnosticServices />
    </section>

    <section id="safety-accreditation" className="scroll-mt-[60px]">
      <SafetyAccreditation />
    </section>

    <section id="patient-support-services" className="scroll-mt-[60px]">
      <PatientSupportServices />
    </section>

    <HealthCampsOutreach />
    <EmergencyCriticalCare />
    <HospitalInfrastructureGallery />
  </div>
);

};

export default HealthcarePage;
