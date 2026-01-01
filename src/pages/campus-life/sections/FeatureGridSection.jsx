import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCard from "../components/InfoCard";
import { ScheduleIcon, FacultyIcon, BookIcon, AwardIcon } from "../components/CampusIcons";

const defaultItems = [
    {
        icon: <ScheduleIcon />,
        title: "Structured Schedules",
        description: "Carefully planned timetables ensuring balanced theory, practicals, and clinical exposure with optimal learning hours.",
    },
    {
        icon: <FacultyIcon />,
        title: "Faculty Guidance",
        description: "Experienced healthcare professionals and academicians providing continuous mentorship and subject expertise.",
    },
    {
        icon: <BookIcon />,
        title: "Focused Learning Culture",
        description: "Disciplined classroom environment emphasizing active participation, regular assessments, and knowledge retention.",
    },
    {
        icon: <AwardIcon />,
        title: "Academic Excellence",
        description: "Curriculum aligned with national standards, regular examinations, and continuous performance evaluation systems.",
    },
];

const FeatureGridSection = ({
    heading = "Academic Environment",
    items = defaultItems,
    bgColor = "bg-[#EEF2F7]",
    paddingClass = "py-[60px] md:py-[80px]",
    buttonText,
    onButtonClick,
    cardVariant = "vertical-white"
}) => {
    return (
        <PageSection bg={bgColor} paddingClass={paddingClass}>
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                {heading}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                {items.map((item, index) => (
                    <InfoCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        variant={cardVariant}
                    />
                ))}
            </div>

            {buttonText && (
                <div className="flex justify-center mt-12">
                    <button
                        onClick={onButtonClick}
                        className="bg-[#223F7F] text-white px-8 py-3 rounded-[8px] font-medium text-[18px] hover:bg-[#1a3163] transition-colors"
                    >
                        {buttonText}
                    </button>
                </div>
            )}
        </PageSection>
    );
};

export default FeatureGridSection;
