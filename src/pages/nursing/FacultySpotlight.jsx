import React from "react";

// Faculty Images
import faculty1 from "@/assets/nursing/doctor_1.jpg";
import faculty2 from "@/assets/nursing/doctor_2.jpg";
import faculty3 from "@/assets/nursing/doctor_3.jpg";

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
      imgPosition: "object-[50%_18%]", // Adjusted D1 slightly up sharing space
    },
    {
      img: faculty2,
      name: "Dr. Priya Sharma",
      role: "Neurologist",
      qualification: "MBBS, MD, DM (Neurology)",
      experience: "15+ Years Experience",
      days: "Mon - Sat",
      time: "10:00 AM - 6:00 PM",
      imgPosition: "object-[50%_8%]", // Adjusted D1 slightly up sharing space
    },
    {
      img: faculty3,
      name: "Dr. Amit Patel",
      role: "Orthopedic Surgeon",
      qualification: "MBBS, MS (Orthopedics)",
      experience: "18+ Years Experience",
      days: "Tue - Sat",
      time: "11:00 AM - 7:00 PM",
      imgPosition: "object-[50%_30%]", // Adjusted D3
    },
  ];

  return (
    <PageSection bg={T.bg.section} paddingClass="py-[60px] md:py-[80px] xl:py-[100px]">
      <div className="flex flex-col gap-[40px] md:gap-[50px] xl:gap-[60px]">
        {/* TOP HEADING */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px]
            leading-[1.2]
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
            
            md:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-3
            gap-[24px] sm:gap-[32px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px]
            w-full
          "
        >
          {faculty.map((f, i) => (
            <div
              key={i}
              className="
                w-full
                bg-white rounded-[10px]
                border border-[#E5E7EB]
                shadow-[0px_4px_8px_rgba(0,0,0,0.06)]
                flex flex-col
              "
            >
              {/* Image */}
              <div className="w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px] bg-gray-200 rounded-t-[12px] overflow-hidden">
                <img loading="lazy" decoding="async"
                  src={f.img}
                  alt={f.name}
                  className={`
                    w-full h-full
                    object-cover ${f.imgPosition} rounded-t-[12px]
                    transition-transform duration-500 hover:scale-105
                  `}
                />
              </div>

              {/* Content */}
              <div className="px-[24px] py-[26px] flex flex-col gap-[14px]">
                <div>
                  <h3
                    className={`
                      ${T.font.family}
                      ${T.font.weight.semibold}
                      text-[20px] md:text-[22px] xl:text-[24px]
                      leading-[1.3]
                    `}
                    style={{ color: T.color.text.secondary }}
                  >
                    {f.name}
                  </h3>

                  <p
                    className={`
                      ${T.font.family}
                      text-[16px] md:text-[18px] xl:text-[19px]
                      leading-[1.4]
                    `}
                    style={{ color: T.color.dark }}
                  >
                    {f.role}
                  </p>

                  <p
                    className={`
                      ${T.font.family}
                      text-[14px] md:text-[15px] leading-[1.4] mt-[6px]
                    `}
                    style={{ color: T.color.dark }}
                  >
                    {f.qualification}
                  </p>
                </div>

                {/* Icons List */}
                <div className="flex flex-col gap-[8px] md:gap-[10px] mt-[6px]">
                  <div className="flex items-center gap-[10px]">
                    <img loading="lazy" decoding="async" src={expIcon} className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] md:text-[15px] leading-[1.4]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.experience}
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <img loading="lazy" decoding="async" src={calendarIcon} className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] md:text-[15px] leading-[1.4]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.days}
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <img loading="lazy" decoding="async" src={timeIcon} className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] md:text-[15px] leading-[1.4]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.time}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-[10px] md:gap-[12px] mt-[12px] md:mt-[16px]">
                    <Button
                    width="100%"
                    mdWidth="180px"
                    height="48px"
                    textSize="text-[14px]"
                    className="rounded-[8px]"
                  >
                    Book Appointment
                  </Button>

                  <Button
                    bg="white"
                    borderColor="#D1D5DB"
                    borderWidth="1px"
                    color={T.color.text.secondary}
                    width="100%"
                    mdWidth="120px"
                    height="48px"
                    textSize="text-[14px]"
                    className="rounded-[8px]"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="flex justify-center mt-[10px] md:mt-[20px]">
          <Button
            bg={T.color.primary}
            color="#FFFFFF"
            textSize="text-[15px] md:text-[16px]"
            className="rounded-[10px]"
            width="200px"
            height="48px"
            mdHeight="52px"
          >
            Meet All Faculty
          </Button>
        </div>
      </div>
    </PageSection>
  );
}
