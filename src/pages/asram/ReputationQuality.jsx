import React from "react";
const repImage = "/AsramWebsite-FE/assets/asram/reputationbuilt.png";
import ContentImageSection from "@/components/common/ContentImageSection";

const ReputationQuality = () => {
  return (
    <ContentImageSection
      title="A Reputation Built on Quality"
      description="ASRAM School of Nursing is widely respected for its high-quality teaching, strong clinical training, and excellent student outcomes. Our programs continue to earn strong recognition for academic standards and hands-on learning."
      description2="ASRAM School of Nursing is widely respected for its high-quality teaching, strong clinical training, and excellent student outcomes."
      image={repImage}
      buttonText="Explore Our Achievements"
      buttonLink="#"
      showButton={true}
      reverse={true}
    />
  );
};

export default ReputationQuality;
