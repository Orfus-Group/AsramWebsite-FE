import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCardGrid from "@/components/common/InfoCardGrid";
import { ShieldIcon, CleanIcon, WifiIcon, MealIcon, LibraryIcon, RoutineIcon } from "../components/CampusIcons";

const items = [
    {
        icon: <ShieldIcon />,
        title: "Safe & Secure",
        description: "24/7 security, CCTV surveillance, and strict entry protocols",
    },
    {
        icon: <CleanIcon />,
        title: "Clean Facilities",
        description: "Well-maintained rooms with regular housekeeping services",
    },
    {
        icon: <WifiIcon />,
        title: "Study Resources",
        description: "High-speed internet and dedicated study areas for academic work",
    },
    {
        icon: <MealIcon />,
        title: "Nutritious Meals",
        description: "Hygienic mess facilities with balanced, health-focused meals",
    },
    {
        icon: <LibraryIcon />,
        title: "Library Access",
        description: "Extended library hours for hostel residents",
    },
    {
        icon: <RoutineIcon />,
        title: "Structured Routine",
        description: "Regulated timings promoting discipline and study habits",
    },
];



const HostelAccommodation = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Hostel & Accommodation
            </h1>

            <InfoCardGrid
                items={items}
                gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[40px]"
                cardClassName="bg-white rounded-[12px] p-[30px] border border-[#d0d7e2] h-full flex flex-col items-start transition-all duration-300"
                iconContainerClassName="w-[45.1px] h-[45.1px] bg-[rgba(34,63,127,0.1)] rounded-[7.5px] flex items-center justify-center text-[#223F7F] mb-[12px] flex-shrink-0"
                titleClassName="text-[#223F7F] font-medium text-[22px] leading-[1.2] mb-[12px] font-montserrat"
                descriptionClassName="text-[rgba(25,25,25,0.75)] text-[18px] leading-[1.44] font-montserrat flex-1"
            />

            {/* Info Box */}
            <div className="bg-white border-l-[5px] border-[#223F7F] p-[30px] rounded-[12px] flex flex-col items-start gap-[12px] shadow-sm">
                <h5 className={`${T.font.family} font-medium text-[22px] text-[#223F7F]`}>
                    Parent-Focused Accommodation Standards
                </h5>
                <p className={`${T.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`}>
                    We maintain transparent communication with parents regarding hostel rules, student conduct, and safety protocols. Regular updates and open-door policies ensure parents remain informed about their child’s accommodation and wellbeing. Our commitment extends beyond academics to creating a home-away-from-home environment with zero tolerance for any form of misconduct.
                </p>
            </div>
        </PageSection>
    );
};

export default HostelAccommodation;
