import React from "react";
import ContentImageSection from "@/components/common/ContentImageSection";

const ResearchInnovation = ({ title, description1, image }) => {
  return (
    <ContentImageSection
      title={title}
      description={description1}
      image={image}
      buttonText="Explore Research"
      buttonLink="/research"
      showButton={true}
      reverse={false}
      gapClass="gap-[30px] md:gap-[50px] lg:gap-[106px]"
    />
  );
};

export default ResearchInnovation;
