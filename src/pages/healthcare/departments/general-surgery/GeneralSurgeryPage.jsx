import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import GeneralSurgeryHero from "@/assets/departments/departmentherobanner.png";

// Sections
import DepartmentOverview from "./sections/DepartmentOverview";
import AcademicsSection from "./sections/AcademicsSection";
import FacilitiesSection from "./sections/FacilitiesSection";
import ServicesSection from "./sections/ServicesSection";
import ConferencesSection from "./sections/ConferencesSection";
import FacultySection from "./sections/FacultySection";
import ResearchSection from "./sections/ResearchSection";

const GeneralSurgeryPage = () => {
    const { setHero, hideHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            title: (
                <span className="flex flex-col items-start text-left">
                    <span className={`${T.font.family} font-regular text-[32px] md:text-[60px] leading-[1.1] md:leading-[54px] mb-[18px]`}>
                        Department of
                    </span>
                    <span className={`${T.font.family} font-bold text-[32px] md:text-[60px] leading-[1.1] md:leading-[54px]`}>
                        General Surgery
                    </span>
                </span>
            ),
            bgImage: GeneralSurgeryHero,
            isVisible: true,
            children: (
                <div className="max-w-[520px] text-left mt-0">
                    <p className={`${T.font.family} font-medium text-[16px] md:text-[22px] leading-[30px] text-white opacity-100`}>
                        Comprehensive surgical education integrated with clinical excellence. We train undergraduate and postgraduate students while delivering quality patient care across all surgical specialties under experienced faculty supervision.
                    </p>
                </div>
            )
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <div className="flex flex-col">
            {/* Sections will be added here as they are implemented */}
            <DepartmentOverview />
            <AcademicsSection />
            <FacilitiesSection />
            <ServicesSection />
            <ConferencesSection />
            <FacultySection />
            <ResearchSection />
        </div>
    );
};

export default GeneralSurgeryPage;
