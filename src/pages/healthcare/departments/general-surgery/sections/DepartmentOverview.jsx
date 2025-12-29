import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const DepartmentOverview = () => {
    return (
        <PageSection paddingClass="py-[40px] md:py-[80px]">
            <div className="flex flex-col lg:flex-row gap-[40px] items-start justify-between">
                {/* Left Content - Width 548px */}
                <div className="w-full lg:max-w-[548px]">
                    <h2 className={`${T.font.family} font-bold text-[24px] md:text-[32px] text-[#223F7F] mb-6 leading-[1.2] md:leading-[39px]`}>
                        Department Overview
                    </h2>
                    <div className="space-y-[20px] text-[#191919BF] text-[18px] leading-[26px] font-normal text-justify">
                        <p>
                            The Department of General Surgery at ASRAM serves a dual role as an academic department and clinical service provider. We are responsible for training MBBS students and surgical postgraduates while delivering comprehensive surgical care to patients across general, emergency, and specialized procedures.
                        </p>
                        <p>
                            This integration of education and clinical service creates a learning environment focused on evidence-based surgical practice, continuous skill development, and patient safety.
                        </p>
                    </div>
                </div>

                {/* Right Stats Card - Width 468.1px, Height 317px, Bg #EEF2F7, Radius 11.3px, Padding 20px */}
                <div
                    className="
                        w-full lg:w-[468px] 
                        min-h-[317px] 
                        bg-[#EEF2F7] 
                        rounded-[11.3px] 
                        p-[20px] 
                        flex flex-col 
                        gap-[20px]
                    "
                >
                    {/* Stat 1 - Inner gap 4px */}
                    <div className="flex flex-col gap-[4px]">
                        <h3 className="text-[#223F7F] text-[24px] font-semibold leading-tight">MBBS</h3>
                        <p className="text-[#191919] font-medium text-[18px]">Undergraduate Teaching</p>
                        <p className="text-[#191919BF] text-[14px] leading-[20px] max-w-[382px]">Clinical rotations, case presentations, surgical postings</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col gap-[4px]">
                        <h3 className="text-[#223F7F] text-[24px] font-semibold leading-tight">MS / DNB</h3>
                        <p className="text-[#191919] font-medium text-[18px]">Postgraduate Training</p>
                        <p className="text-[#191919BF] text-[14px] leading-[20px] max-w-[382px]">Residency programs with surgical skill development</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col gap-[4px]">
                        <h3 className="text-[#223F7F] text-[24px] font-semibold leading-tight">24/7</h3>
                        <p className="text-[#191919] font-medium text-[18px]">Clinical Services</p>
                        <p className="text-[#191919BF] text-[14px] leading-[20px] max-w-[382px]">Emergency and elective surgical care</p>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default DepartmentOverview;
