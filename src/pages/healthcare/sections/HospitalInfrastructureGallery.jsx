import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import Img1 from "@/assets/healthcare/hg1.png";
import Img2 from "@/assets/healthcare/hg2.png";
import Img3 from "@/assets/healthcare/hg3.png";
import Img4 from "@/assets/healthcare/hg4.png";
import Img5 from "@/assets/healthcare/hg5.png";
import Img6 from "@/assets/healthcare/hg6.png";

const images = [
    { src: Img1, label: "Hospital Reception & Waiting Area" },
    { src: Img2, label: "Modern Operation Theatre" },
    { src: Img3, label: "Patient Ward Facilities" },
    { src: Img4, label: "Diagnostic Laboratory" },
    { src: Img5, label: "Emergency Department" },
    { src: Img6, label: "Consultation Rooms" }
];

const HospitalInfrastructureGallery = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[80px] px-[20px] lg:px-[120px]">
            {/* Title */}
            <div className="w-full max-w-[1200px] mx-auto">
                <h1 className={`${T.font.family} font-bold text-[36px] md:text-[42px] text-[#223F7F] mb-[40px] text-left`}>
                    Hospital Infrastructure Gallery
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    {images.map((img, idx) => (
                        <div key={idx} className="flex flex-col rounded-[12px] overflow-hidden group ">
                            {/* Image Part - 256px Height */}
                            <div className="h-[256px] w-[384px] md:w-full overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Text Part - 68px Height */}
                            <div className="h-[68px] bg-white flex items-center justify-center">
                                <p className={`${T.font.family} font-regular text-[18px] text-[#191919] leading-[1.56] text-center`}>
                                    {img.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default HospitalInfrastructureGallery;
