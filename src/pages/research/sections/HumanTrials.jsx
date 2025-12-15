import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";

// Screenshot shows 4 small cards
const trials = [
    { title: "Phase I Trials", desc: "Safety and dosage testing on small groups." },
    { title: "Phase II Trials", desc: "Efficacy and side effects on larger groups." },
    { title: "Phase III Trials", desc: "Monitoring adverse reactions in large populations." },
    { title: "Phase IV Trials", desc: "Post-marketing safety surveillance." },
];

const HumanTrials = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[60px] md:py-[80px]">
            <div className="flex justify-between items-center mb-10">
                <h2 className={`${T.font.family} font-bold text-[32px] text-[#223F7F]`}>
                    Human Clinical Trials
                </h2>
                <button className="bg-[#008C8C] text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90">
                    Explore Clinical Trials
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {trials.map((trial, index) => (
                    <InfoCard variant="research"
                        key={index}
                        title={trial.title}
                        description={trial.desc}
                        icon="https://placehold.co/40x40"
                        buttonText="Read More"
                    />
                ))}
            </div>
        </PageSection>
    );
};

export default HumanTrials;
