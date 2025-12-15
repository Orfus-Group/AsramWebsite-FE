import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";

const labs = [
    { title: "Molecular Biology", desc: "Advanced facility for DNA/RNA analysis and genetic research." },
    { title: "Genetics Lab", desc: "State-of-the-art equipment for studying hereditary traits and disorders." },
];

const ResearchLabs = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[32px] text-[#223F7F] mb-10`}>
                State-of-the-Art Research Labs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {labs.map((lab, index) => (
                    <InfoCard variant="research"
                        key={index}
                        title={lab.title}
                        description={lab.desc}
                        icon="https://placehold.co/40x40"
                        buttonText="Explore Lab"
                    />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button className="bg-[#223F7F] text-white px-8 py-3 rounded-md font-bold text-[16px] hover:bg-opacity-90">
                    View All Labs
                </button>
            </div>
        </PageSection>
    );
};

export default ResearchLabs;
