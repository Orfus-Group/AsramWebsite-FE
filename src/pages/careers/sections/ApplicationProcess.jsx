import React from "react";
import { T } from "@/theme";

const steps = [
    {
        step: 1,
        title: "Submit Application",
        description: "Apply online with your CV, cover letter, and required documents through our portal.",
    },
    {
        step: 2,
        title: "Initial Screening",
        description: "Our HR team reviews applications and shortlists candidates based on qualifications.",
    },
    {
        step: 3,
        title: "Interview Process",
        description: "Multiple rounds including technical, departmental, and HR interviews with faculty.",
    },
    {
        step: 4,
        title: "Offer & Onboarding",
        description: "Receive offer letter, complete documentation, and join our orientation program.",
    },
];

const ApplicationProcess = () => {
    return (
        <section className="bg-[#eef2f7] w-full font-montserrat" style={{ padding: "40px 0" }}>
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <div className="bg-white p-[20px] md:p-[40px] rounded-[12px] flex flex-col gap-[20px]">
                    <div className="text-center">
                        <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[8px]">
                            Application Process
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-[#666666]">
                            Our streamlined hiring process ensures a smooth experience from application to onboarding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                        {steps.map((step) => (
                            <div key={step.step} className="bg-white p-[20px] rounded-[10px] border-[0.9px] border-[rgba(7,7,7,0.2)] min-h-0 md:min-h-[216.1px] h-full flex flex-col items-center justify-start text-center">
                                <div className="w-[50px] md:w-[60.1px] h-[50px] md:h-[60.1px] rounded-full bg-[#223F7F] text-white text-[20px] md:text-[24px] font-bold flex items-center justify-center mb-[12px] flex-shrink-0">
                                    {step.step}
                                </div>
                                <h3 className="text-[18px] md:text-[20px] font-bold text-[#191919] mb-[12px] leading-[1.2]">
                                    {step.title}
                                </h3>
                                <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#666666]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationProcess;
