import React from "react";

// Faculty Images
import faculty1 from "../../assets/nursing/faculty1.svg";
import faculty2 from "../../assets/nursing/faculty2.svg";
import faculty3 from "../../assets/nursing/faculty3.svg";

// Icons
import expIcon from "../../assets/nursing/experience.svg";
import calendarIcon from "../../assets/nursing/weekcal.svg";
import timeIcon from "../../assets/nursing/timeperiod.svg";
import { T } from "../../theme";
import Button from "../../components/ui/button";

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
    <section className={`w-full ${T.bg.section} flex justify-center`}>
      <div
        className="
          w-[1440px] max-w-full
          px-[120px] pt-[80px] pb-[80px]
          flex flex-col gap-[60px]
        "
      >
        {/* ---------------------- TOP HEADING ---------------------- */}
        <div className="flex justify-between items-start w-full">
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[36px] leading-[48px]
            `}
            style={{ color: T.color.text.secondary }}
          >
            Faculty Spotlight
          </h2>

         
        </div>

        {/* ---------------------- FACULTY CARDS ---------------------- */}
        <div className="grid grid-cols-3 gap-[40px]">
          {faculty.map((f, i) => (
            <div
              key={i}
              className="
                w-[378px]
                bg-white rounded-[9.87px]
                border border-[#E5E7EB]
                shadow-[0px_4px_8px_rgba(0,0,0,0.06)]
                flex flex-col
              "
            >
              {/* Image */}
              <img
                src={f.img}
                alt={f.name}
                className="w-full h-[296px] object-cover rounded-t-[9.87px]"
              />

              {/* Content */}
              <div className="px-[28px] py-[30px] flex flex-col gap-[14px]">

                <div>
                  <h3
                    className={`
                      ${T.font.family}
                      ${T.font.weight.semibold}
                      text-[20px] leading-[28px]
                      text-left
                    `}
                    style={{ color: T.color.text.secondary }}
                  >
                    {f.name}
                  </h3>

                  <p
                    className={`
                      ${T.font.family}
                      text-[18px] leading-[26px]
                      text-left
                    `}
                    style={{ color: T.color.dark }}
                  >
                    {f.role}
                  </p>

                  <p
                    className={`
                      ${T.font.family}
                      text-[14px] leading-[20px]
                      mt-[6px]
                    `}
                    style={{ color: T.color.dark }}
                  >
                    {f.qualification}
                  </p>
                </div>

                {/* Experience / Days / Time */}
                <div className="flex flex-col gap-[10px] mt-[6px]">
                  <div className="flex items-center gap-[10px]">
                    <img src={expIcon} alt="" className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] leading-[20px]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.experience}
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <img src={calendarIcon} alt="" className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] leading-[20px]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.days}
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <img src={timeIcon} alt="" className="w-[18px] h-[18px]" />
                    <span
                      className={`${T.font.family} text-[14px] leading-[20px]`}
                      style={{ color: T.color.text.muted }}
                    >
                      {f.time}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-[16px]">
                  <Button
                    width="160px"
                    height="40px"
                    textSize="text-[14px]"
                    leading="leading-[20px]"
                    radius="custom"
                    className="rounded-[8px]"
                  >
                    Book Appointment
                  </Button>

                  <Button
                    bg="#FFFFFF"
                    color={T.color.text.secondary}
                    width="120px"
                    height="40px"
                    textSize="text-[14px]"
                    leading="leading-[20px]"
                    radius="custom"
                    className="rounded-[8px] border border-[#CBD5E1]"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------------- BOTTOM CTA ---------------------- */}
        <div className="flex justify-center mt-[10px]">
          <Button
            bg={T.color.primary}
            color="#FFFFFF"
            textSize="text-[15px]"
            leading="leading-[23px]"
            radius="custom"
            className="rounded-[9.87px]"
            width="200px"
            height="47.37px"
          >
            Meet All Faculty
          </Button>
        </div>
      </div>
    </section>
  );
}
