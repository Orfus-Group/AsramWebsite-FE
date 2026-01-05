import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";

const defaultProjects = [
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

const ResearchProjects = ({
    bulletColor = "#008C8C",
    headerColor = "#223F7F",
    titleColor = "#191919",
    buttonConfig = { bg: "#008C8C" },
    projects,
}) => {
    const projectsToRender = projects || defaultProjects;
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[32px] sm:text-[36px] md:text-[42px] text-[#223F7F] mb-10`}>
                Research Projects
            </h2>

            {/* Featured Projects Card */}
            <div className="bg-[#EEF2F7] rounded-[8px] p-[24px] md:p-[30px] mb-12 border border-[#07070733]">
                <h3 className={`${T.font.family} font-medium text-[24px] sm:text-[28px] mb-[20px]`} style={{ color: headerColor }}>
                    Featured Projects
                </h3>

                <div className="flex flex-col">
                    {projectsToRender.map((project, index) => (
                        <div
                            key={index}
                            className={`
                                flex items-start gap-3 py-[12px] first:pt-0 last:pb-0
                                ${index !== projectsToRender.length - 1 ? "border-b-[0.9px] border-[#E5E7EB]" : ""}
                            `}
                        >
                            {/* Bullet Point */}
                            <div className="mt-2.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: bulletColor }}></div>

                            <div className="flex flex-col gap-1.5">
                                <h4 className={`${T.font.family} font-medium text-[18px] sm:text-[22px] leading-tight`} style={{ color: titleColor }}>
                                    {project.title}
                                </h4>
                                <p className={`${T.font.family} font-medium text-[13px] sm:text-[14px] text-[#191919BF]`}>
                                    {project.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-[#223F7F] font-regular text-[16px] hover:underline mt-[20px]">
                    View All Projects
                    <span className="text-xl"><img src={IconArrowRight} className="w-[16px] h-[16px]" alt="" /></span>
                </button>
            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button
                    className="hover:opacity-90 text-white px-8 py-3 rounded-[12px] font-medium text-[18px] flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: buttonConfig.bg }}
                >
                    Explore Research Portfolio
                    <span><IconArrowRightWhite size={19} /></span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchProjects;
