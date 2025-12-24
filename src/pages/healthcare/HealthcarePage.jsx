import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
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
import HeroBg from "@/assets/healthcare/healthcareherobg.png";

const HealthcarePage = () => {
    const { setHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            title: (
                          <span className="font-montserrat font-bold text-[32px] md:text-[60px] leading-[54px] text-white">
         Healthcare
        </span>
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
    }, [setHero]);

    return (
        <div className="w-full bg-white">
            <CareAtAsram />
            <SpecialtiesDepartments />
            <ExperiencedDoctors />
            <PatientCareFacilities />
            <DiagnosticServices />
            <SafetyAccreditation />
            <PatientSupportServices />
            <HealthCampsOutreach />
            <EmergencyCriticalCare />
            <HospitalInfrastructureGallery />
        </div>
    );
};

export default HealthcarePage;
