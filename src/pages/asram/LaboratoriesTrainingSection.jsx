import React from "react";
import { T } from "@/theme";
import placeholderImg from "@/assets/asram/lab1.png"; // Placeholder
import placeholderImg2 from "@/assets/asram/lab2.png"; // Placeholder
import placeholderImg3 from "@/assets/asram/lab3.png"; // Placeholder

const LaboratoriesTrainingSection = () => {
    const labs = [
        {
            title: "Advanced Diagnostic Laboratory",
            image: placeholderImg,
        },
        {
            title: "Clinical Skills Simulation Center",
            image: placeholderImg2,
        },
        {
            title: "Practical Training Facility",
            image: placeholderImg3,
        },
    ];

    const stats = [
        {
            value: "15+",
            label: "Specialized Laboratories",
        },
        {
            value: "20+ hrs",
            label: "Weekly Practical Training",
        },
        {
            value: "1:10",
            label: "Faculty to Student Ratio",
        },
    ];

    return (
        <section className="w-full bg-white py-[60px] md:py-[80px]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px]">
                {/* TITLE */}
                <h2
                    className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[28px] md:text-[42px]
            text-[#223F7F]
            mb-[40px]
          `}
                >
                    Laboratories & Practical Training
                </h2>

                <div className="flex flex-col gap-[40px]">
                    {/* TOP ROW: IMAGE CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                        {labs.map((lab, index) => (
                            <div key={index} className="flex flex-col rounded-[12px] overflow-hidden border border-[#E0E0E0]">
                                {/* IMAGE */}
                                <div className="h-[256px] w-full overflow-hidden">
                                    <img
                                        src={lab.image}
                                        alt={lab.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                {/* TITLE BOX */}
                                <div className="h-[68px] flex items-center justify-center bg-white border-t border-[#E0E0E0]">
                                    <span
                                        className={`
                      ${T.font.family}
                      ${T.font.weight.medium}
                      text-[18px]
                      text-[#191919]
                      leading-[28px]
                      text-center
                    `}
                                    >
                                        {lab.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* BOTTOM ROW: STATS BOXES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="
                  bg-[#EEF2F7]
                  rounded-[8px]
                  p-[24px]
                  flex flex-col justify-center
                  border-l-[4px] border-[#223F7F]
                  h-[100px]
                "
                            >
                                <h5
                                    className={`
                    ${T.font.family}
                    ${T.font.weight.bold}
                    text-[24px]
                    text-[#223F7F]
                    leading-[32px]
                    mb-[8px]
                  `}
                                >
                                    {stat.value}
                                </h5>
                                <p
                                    className={`
                    ${T.font.family}
                    font-regular
                    text-[18px]
                    text-[#191919]
                    leading-[26px]
                  `}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaboratoriesTrainingSection;
