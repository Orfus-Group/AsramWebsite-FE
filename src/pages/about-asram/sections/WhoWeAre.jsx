import React from "react";
import ContentImageSection from "@/components/common/ContentImageSection";
import WhoWeAreImg from "@/assets/about/aboutsection.png";

const WhoWeAre = () => {
    return (
        <ContentImageSection
            title="Who We Are"
            description="ASRAM (Advanced School of Research and Medical Sciences) is a premier institution dedicated to advancing healthcare through exceptional medical education, groundbreaking research, and compassionate patient care."
            description2="Our integrated approach combines clinical excellence with academic rigor, creating an environment where knowledge, innovation, and care converge to serve our communities and advance the field of medicine."
            image={WhoWeAreImg}
            showButton={false}
            reverse={false}
        />
    );
};

export default WhoWeAre;
