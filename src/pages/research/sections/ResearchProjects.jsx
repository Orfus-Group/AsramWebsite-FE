import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

const projects = [
    {
        title: "AI-Assisted Diabetic Retinopathy Screening in Rural India",
        details: "ICMR Funded | PI: Dr. Rajesh Patel | Collaborator: IIT Madras"
    },
    {
        title: "Genomic Markers for Cardiovascular Disease Risk",
        details: "DST Funded | PI: Dr. Sunita Iyer | Collaborator: Stanford University"
    },
    {
        title: "Mobile Health Platform for Maternal Care",
        details: "Gates Foundation | PI: Dr. Priya Sharma | Collaborator: UNICEF"
    }
];

const ResearchProjects = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[42px] text-[#1E3A8A] mb-10`}>
                Research Projects
            </h2>

            {/* Featured Projects Card */}
            <div className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[30px] mb-12">
                <h3 className={`${T.font.family} font-semibold text-[32px] text-[#223F7F] mb-10`}>
                    Featured Projects
                </h3>

                <div className="flex flex-col gap-8 mb-10">
                    {projects.map((project, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            {/* Bullet Point */}
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-[#008C8C] shrink-0"></div>

                            <div className="flex flex-col gap-1">
                                <h4 className={`${T.font.family} font-medium text-[22px] text-[#191919]`}>
                                    {project.title}
                                </h4>
                                <p className={`${T.font.family} font-medium text-[14px] text-[#191919BF]`}>
                                    {project.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-[#223F7F] font-regular text-[18px] hover:underline">
                    View All Projects
                    <span className="text-xl"><IconArrowRight
                        size={16}
                        stroke="#223F7F"
                        strokeWidth={1.25163}
                    /></span>
                </button>
            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[12px] font-medium text-[18px] flex items-center gap-2 transition-colors">
                    Explore Research Portfolio
                    <span><IconArrowRight
                        size={20}
                        stroke="white"
                        strokeWidth={1.6}
                    /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchProjects;
