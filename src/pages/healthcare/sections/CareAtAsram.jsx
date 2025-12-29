import React from "react";
import ContentImageSection from "@/components/common/ContentImageSection";
const CareImg = "/AsramWebsite-FE/assets/healthcare/careatAsram.png";

const CareAtAsram = () => {
    return (
        <ContentImageSection
            title="Care at ASRAM"
            description="ASRAM operates as a comprehensive multispecialty hospital and teaching institution, providing quality medical care across multiple disciplines while training the next generation of healthcare professionals."
            description2="We serve patients with dignity, transparency, and medical expertise, maintaining the highest standards of patient safety, infection control, and compassionate care across all departments and specialties."
            image={CareImg}
            showButton={false}
            reverse={false}
        />
    );
};

export default CareAtAsram;
