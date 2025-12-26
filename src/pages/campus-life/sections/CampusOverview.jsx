import React from "react";
import ContentImageSection from "@/components/common/ContentImageSection";
import PlaceholderImg from "@/assets/campuslife/campuslifeatAsram.png";

const CampusOverview = () => {
    return (
        <ContentImageSection
            title="Campus Life at ASRAM"
            description="Campus life at ASRAM is structured around academic discipline, clinical exposure, and student wellbeing. The environment encourages focused learning, hands-on practice, and responsible campus living—preparing students for real-world healthcare careers."
            description2="Every aspect of campus life—from structured class schedules to supervised practical training—is designed to prepare students for the demanding healthcare profession. We maintain strict standards while providing comprehensive support for academic and personal growth."
            image={PlaceholderImg}
            showButton={false}
            reverse={false}
        />
    );
};

export default CampusOverview;
