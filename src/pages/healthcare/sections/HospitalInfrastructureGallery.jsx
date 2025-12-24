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
    { src: Img1, label: "Main Hospital Block" },
    { src: Img2, label: "Operation Theatre" },
    { src: Img3, label: "ICU Complex" },
    { src: Img4, label: "Diagnostic Lab" },
    { src: Img5, label: "Pharmacy" },
    { src: Img6, label: "Patient Wards" }
];

const HospitalInfrastructureGallery = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-10 text-center`}>
                Hospital Infrastructure Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((img, idx) => (
                    <div key={idx} className="group rounded-[16px] overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all cursor-pointer">
                        <div className="h-[240px] overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = '#e2e8f0' }}
                            />
                        </div>
                        <div className="p-4 text-center">
                            <p className={`${T.font.family} font-medium text-[16px] text-[#223F7F]`}>{img.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default HospitalInfrastructureGallery;
