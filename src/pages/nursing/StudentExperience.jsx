import React from "react";

import studentExpMain from "../../assets/nursing/studentexp.svg";
import favourableIcon from "../../assets/nursing/favourablefac.svg";
import learningIcon from "../../assets/nursing/practicallearning.svg";
import curricularIcon from "../../assets/nursing/extracurriccular.svg";
import amenitiesIcon from "../../assets/nursing/modernaminities.svg";
import InfoCard from "../infoCard";

export default function StudentExperience() {
  const features = [
    {
      icon: favourableIcon,
      title: "Favorable Faculty Ratio",
      desc: "+56 faculty for ~377 students ensures personalized attention and mentoring",
    },
    {
      icon: learningIcon,
      title: "Practical Learning",
      desc: "Simulation, skills labs, clinical rotations, case discussions, and hands-on training",
    },
    {
      icon: curricularIcon,
      title: "Extra-Curricular Activities",
      desc: "Workshops, seminars, case-presentations, academic clubs, and competitive events",
    },
    {
      icon: amenitiesIcon,
      title: "Modern Amenities",
      desc: "Hostels, transport, WiFi connectivity, campus safety, and comprehensive support",
    },
  ];

  return (
    <section className="w-full bg-[#F7F9FC] flex justify-center">
      <div
        className="
          w-[1440px] max-w-full
          flex flex-col
          items-center
          gap-[40px]
          pt-[80px] pb-[120px] px-[120px]
        "
      >
        {/* 🔹 HEADING + SUBTITLE */}
        <div className="flex flex-col gap-[8px] w-full">
          <h2 className="font-montserrat font-bold text-[36px] leading-[48px] text-[#223F7F]">
            Student Experience
          </h2>
          
        </div>

        {/* 🔹 Top — Image + Content */}
        <div className="flex items-start justify-between gap-[40px] w-full">
          {/* Left Image */}
          <img
            src={studentExpMain}
            alt=""
            className="w-[578px] h-[394px] object-cover rounded-[8px]"
          />

          {/* Right Text */}
          <div className="flex flex-col gap-[24px] w-[578px]">
            <h3 className="font-montserrat font-semibold text-[32px] leading-[42px] text-[#223F7F] w-[461px]">
              Comprehensive Learning Environment
            </h3>

            <p className="font-montserrat text-[18px] leading-[28px] text-[#6B7280]">
              At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development.
            </p>

          
          </div>
        </div>

        {/* 🔹 Bottom — 4 Feature Cards */}
        <div className="grid grid-cols-4 gap-[24px] w-full">
  {features.map((item, i) => (
    <InfoCard
      key={i}
      icon={item.icon}
      title={item.title}
      description={item.desc}
      variant="feature"
    />
  ))}
</div>

      </div>
    </section>
  );
}
