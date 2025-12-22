import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import Img1 from "@/assets/campuslife/cg1.png"; // Laboratory Training Sessions
import Img2 from "@/assets/campuslife/cg2.png"; // Clinical Training
import Img3 from "@/assets/campuslife/cg3.png"; // Classroom Learning
import Img4 from "@/assets/campuslife/cg4.png"; // Advanced Equipment
import Img5 from "@/assets/campuslife/cg5.png"; // Nursing Skills Development
import Img6 from "@/assets/campuslife/cg6.png"; // Professional Workshops

const images = [
    { src: Img1, label: "Laboratory Training Sessions" },
    { src: Img2, label: "Clinical Training" },
    { src: Img3, label: "Classroom Learning" },
    { src: Img4, label: "Advanced Equipment" },
    { src: Img5, label: "Nursing Skills Development" },
    { src: Img6, label: "Professional Workshops" },
];

const CampusGallery = () => {
    return (
        <PageSection bg="bg-[#eef2f7]" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Campus Gallery
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {images.map((img, index) => (
                    <div
                        key={index}
                        style={{ border: "solid 1px #e0e0e0" }}
                        className="rounded-[12px] overflow-hidden bg-white shadow-sm"
                    >
                        {/* Image Container */}
                        <div className="h-[256px] w-full">
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Label Container */}
                        <div className="h-[68px] flex items-center justify-center bg-white px-4">
                            <p
                                className="font-montserrat font-normal text-[18px] text-[#191919] text-center leading-[28px]"
                            >
                                {img.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default CampusGallery;
