import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";

const focusAreas = [
    { title: "Clinical Research", desc: "Conducting trials to test new treatments and therapies for various diseases." },
    { title: "Public Health", desc: "Studying community health trends to prevent disease and promote wellness." },
    { title: "Basic Sciences", desc: "Fundamental research to understand biological processes and disease mechanisms." },
    { title: "Epidemiology", desc: "Investigating patterns, causes, and effects of health and disease conditions." },
    { title: "Pharmacology", desc: "Researching drug interactions, effectiveness, and development of new medications." },
    { title: "Biotechnology", desc: "Using biological systems to develop products and technologies for healthcare." },
];

const ResearchFocusAreas = () => {
    return (
        <PageSection bg={T.bg.section} paddingClass="py-[80px]">
            <div className="flex justify-between items-center mb-10">
                <h2 className={`${T.font.family} font-bold text-[32px] text-[#223F7F]`}>
                    Major Research Focus Areas
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {focusAreas.map((area, index) => (
                    <InfoCard variant="research"
                        key={index}
                        title={area.title}
                        description={area.desc}
                        icon="https://placehold.co/40x40"
                        buttonText="Read More"
                    />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button className="bg-[#008C8C] text-white px-8 py-3 rounded-md font-bold text-[16px] hover:bg-opacity-90">
                    View All Focus Areas
                </button>
            </div>
        </PageSection>
    );
};

export default ResearchFocusAreas;
