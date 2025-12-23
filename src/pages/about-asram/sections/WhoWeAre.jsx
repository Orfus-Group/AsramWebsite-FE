import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import WhoWeAreImg from "@/assets/about/aboutsection.png";

const WhoWeAre = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <div className="flex flex-col lg:flex-row gap-[40px] items-stretch">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-6`}>
                            Who We Are
                        </h2>
                        <p className={`${T.font.family} text-[16px] md:text-[18px] text-[#4A5565] leading-[1.8] mb-6`}>
                            ASRAM (Advanced School of Research and Medical Sciences) is a premier institution dedicated to advancing healthcare through exceptional medical education, groundbreaking research, and compassionate patient care.
                        </p>
                    </div>
                    <p className={`${T.font.family} text-[16px] md:text-[18px] text-[#4A5565] leading-[1.8]`}>
                        Our integrated approach combines clinical excellence with academic rigor, creating an environment where knowledge, innovation, and care converge to serve our communities and advance the field of medicine.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <div className="rounded-[16px] overflow-hidden bg-gray-100 h-full">
                        <img
                            src={WhoWeAreImg}
                            alt="ASRAM Campus Building"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default WhoWeAre;
