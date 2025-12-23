import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCard from "../components/InfoCard";
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[40px]">
                {items.map((item, index) => (
                    <InfoCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        variant="vertical-white"
                        className="border-gray-100" // Maintains original border-gray-100 class + inline style handled by component
                    />
                ))}
            </div>

            {/* Info Box */}
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
