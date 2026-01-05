import React from "react";
import ContentImageSection from "@/components/common/ContentImageSection";
const PlaceholderImg = "/AsramWebsite-FE/assets/events/eventoverview.png";

const EventOverview = () => {
  return (
    <ContentImageSection
      title="Event Overview"
      description="
            Join us for a comprehensive two-day national conference featuring expert speakers, research presentations, and hands-on workshops covering the latest advances in general surgery. This event offers valuable CME credits and networking opportunities with leading surgical professionals.
            "
      image={PlaceholderImg}
      showButton={false}
      reverse={false}
      paddingClass="pt-[40px] pb-[60px] md:pb-[80px]"
    />
  );
};

export default EventOverview;
