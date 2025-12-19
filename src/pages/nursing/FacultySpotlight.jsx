import React from "react";

// Faculty Images
import faculty1 from "@/assets/nursing/doctor_1.png";
import faculty2 from "@/assets/nursing/doctor_2.png";
import faculty3 from "@/assets/nursing/doctor_3.png";


// Icons
import expIcon from "@/assets/nursing/experience.svg";
import calendarIcon from "@/assets/nursing/weekcal.svg";
import timeIcon from "@/assets/nursing/timeperiod.svg";

import { T } from "@/theme";
import Button from "@/components/ui/button";
import PageSection from "@/features/common/layout/PageContainer";

export default function FacultySpotlightSection() {
  const faculty = [
    {
      img: faculty1,
      name: "Dr. Rajesh Kumar",
      role: "Cardiologist",
      qualification: "MBBS, MD, DM (Cardiology)",
      experience: "20+ Years Experience",
      days: "Mon - Fri",
      time: "9:00 AM - 5:00 PM",
    },
    {
      img: faculty2,
      name: "Dr. Priya Sharma",
      role: "Neurologist",
      qualification: "MBBS, MD, DM (Neurology)",
      experience: "15+ Years Experience",
      days: "Mon - Sat",
      time: "10:00 AM - 6:00 PM",
    },
    {
      img: faculty3,
      name: "Dr. Amit Patel",
      role: "Orthopedic Surgeon",
      qualification: "MBBS, MS (Orthopedics)",
      experience: "18+ Years Experience",
      days: "Tue - Sat",
      time: "11:00 AM - 7:00 PM",
    },
  ];

  return (
    <PageSection bg={T.bg.section} paddingClass="py-[80px]">
      <div className="flex flex-col gap-[50px]">
        {/* TOP HEADING */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `}
          style={{ color: T.color.text.secondary }}
        >
          Faculty Spotlight
        </h2>

        {/* FACULTY CARDS */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            gap-[32px] md:gap-[40px]
            w-full
          "
        >
          {faculty.map((f, i) => (
            <div
              key={i}
              className="
                w-full
                bg-white rounded-[20px]
                border border-[#D0D7E2]
                flex flex-col
              "
            >
              {/* Image */}
              <div className="w-full h-[260px] sm:h-[280px] md:h-[300px] bg-gray-200 rounded-t-[10px]">
                <img loading="lazy" decoding="async"
                  src={f.img}
                  alt={f.name}
                  className="
                    w-full h-full
                    object-cover rounded-t-[10px]
                  "
                />
              </div>

              {/* Content */}
              <div className="px-[24px] py-[26px] flex flex-col gap-[14px]">
                <div>
                  <h3
                    className={`
                      ${T.font.family}
                      ${T.font.weight.semibold}
                      text-[18px] md:text-[20px]
                      mb-[10px]
                      leading-[26px] md:leading-[28px]
                    `}
                    style={{ color: T.color.text.secondary }}
                  >
                    {f.name}
                  </h3>

                  <p
                    className={`
                      ${T.font.family}
                      text-[16px] md:text-[18px]
                       mb-[10px]
                      leading-[24px]
                    `}
                    style={{ color: T.color.dark }}
                  >
                    {f.role}
                  </p>

                  <p
                    className={`
                      ${T.font.family}
                      text-[14px] leading-[20px] mt-[6px]
                    `}
                    style={{ color: T.color.dark }}
                  >
                    {f.qualification}
                  </p>
                </div>

                {/* Icons List */}
                <div className="flex flex-col gap-[10px] mt-[6px]">
                  <div className="flex items-center gap-[10px]">
                    <img loading="lazy" decoding="async" src={expIcon} className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] leading-[20px]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.experience}
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <img loading="lazy" decoding="async" src={calendarIcon} className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] leading-[20px]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.days}
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <img loading="lazy" decoding="async" src={timeIcon} className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] leading-[20px]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.time}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-row gap-[12px] mt-[20px] pt-[20px] border-t border-[#E5E5E5]">
                  <button
                    className="
                      flex-1
                      h-[48.7px]
                      bg-[#008C8C]
                      text-white
                      text-[14px] font-medium
                      rounded-[9.7px]
                      hover:bg-[#007A7A]
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                    "
                  >
                    Book Appointment
                  </button>

                  <button
                    className="
                      w-[120.2px]
                      h-[48.7px]
                      bg-white
                      border border-[#D1D5DB]
                      text-gray-700
                      text-[14px] font-medium
                      rounded-[9.7px]
                      hover:bg-gray-50
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                    "
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="flex justify-center mt-[10px]">
          <Button
            bg={T.color.primary}
            color="#FFFFFF"
            textSize="text-[15px]"
            className="rounded-[10px]"
            width="200px"
            height="48px"
          >
            Meet All Faculty
          </Button>
        </div>
      </div>
    </PageSection>
  );
}
