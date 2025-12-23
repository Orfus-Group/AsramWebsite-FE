import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCard from "../components/InfoCard";
import StatsGrid from "../components/StatsGrid";
import { BeakerIcon, HeartIcon, LectureIcon, ConferenceIcon } from "../components/CampusIcons";

const items = [
    {
        icon: <BeakerIcon />,
        title: "Clinical Skill Workshops",
        description: "Regular hands-on workshops covering advanced clinical procedures, diagnostic techniques, and patient care protocols conducted by industry experts.",
    },
    {
        icon: <HeartIcon />,
        title: "Health Awareness Camps",
        description: "Community outreach programs where students organize health screening camps, awareness drives, and preventive healthcare initiatives in local areas.",
    },
    {
        icon: <LectureIcon />,
        title: "Guest Lectures & Seminars",
        description: "Expert sessions by healthcare professionals, researchers, and specialists sharing insights on medical advancements and industry practices.",
    },
    {
        icon: <ConferenceIcon />,
        title: "Medical Conferences",
        description: "Annual symposiums and conferences bringing together students, faculty, and healthcare practitioners for knowledge exchange and networking.",
    },
];

const stats = [
    { value: "24+", label: "Annual Workshops" },
    { value: "15+", label: "Health Camps per Year" },
    { value: "50+", label: "Expert Guest Lectures" },
]

const EventsWorkshops = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Events, Workshops & Health Initiatives
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
                {items.map((item, index) => (
                    <InfoCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        variant="horizontal-gray"
                    />
                ))}
            </div>

            {/* Stats Bar */}
            <StatsGrid stats={stats} />
        </PageSection>
    );
};

export default EventsWorkshops;
