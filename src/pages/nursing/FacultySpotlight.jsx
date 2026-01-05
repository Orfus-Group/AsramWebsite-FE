import React from "react";
import { T } from "@/theme";
import Button from "@/components/ui/button";
import PageSection from "@/features/common/layout/PageContainer";

// Faculty Images (Default)
const faculty1 = "/AsramWebsite-FE/assets/nursing/doctor_1.png";
const faculty2 = "/AsramWebsite-FE/assets/nursing/doctor_2.png";
const faculty3 = "/AsramWebsite-FE/assets/nursing/doctor_3.png";

// Icons
const expIcon = "/AsramWebsite-FE/assets/nursing/experience.svg";
const calendarIcon = "/AsramWebsite-FE/assets/nursing/weekcal.svg";
const timeIcon = "/AsramWebsite-FE/assets/nursing/timeperiod.svg";

export default function FacultySpotlightSection({
  heading = "Faculty Spotlight",
  facultyData,
  footerStats,
  showCta = true,
  iconConfig = {
    color: "#223F7F",
    width: "18",
    height: "18",
    strokeWidth: "2"
  },
  primaryButtonConfig = {
    text: "Book Appointment",
    className: "flex-1 h-[48.7px] rounded-[9.7px] text-[14px] font-medium bg-[#008C8C] text-white hover:bg-[#007A7A]"
  },
  secondaryButtonConfig = {
    text: "View Profile",
    className: "w-[120.2px] h-[48.7px] rounded-[9.7px] text-[14px] font-medium bg-white border border-[#D1D5DB] text-gray-700 hover:bg-gray-50"
  },
  roleConfig = {
    color: T.color.dark,
    fontSize: "text-[16px] md:text-[18px]",
    fontWeight: "font-normal"
  },
  collegeConfig = {
    color: "#4A5565",
    fontSize: "text-[16px]",
    lineHeight: "leading-[23.5px]",
    fontWeight: "font-normal"
  },
  ctaConfig = {
    bg: "#223F7F",
    color: "#FFFFFF",
    textSize: "text-[15px]",
    className: "rounded-[10px]",
    width: "200px",
    height: "48px"
  },
  spacingConfig = {
    paddingClass: "px-[24px] py-[26px]",
    headerGap: "gap-[14px]",
    nameMb: "mb-[10px]",
    roleMb: "mb-[10px]",
    qualificationMt: "mt-[6px]",
    detailsMt: "mt-[6px]",
    detailsGap: "gap-[10px]",
    buttonsMt: "mt-[20px]",
    buttonsPt: "pt-[20px]",
    borderClass: "border-t border-[#E5E5E5]"
  },
  cardBorder = "border-[2px] border-[#D0D7E2]", // Default 2px for Nursing
  borderRadius = "rounded-[20px]",
  imageHeight = "h-[260px] sm:h-[280px] md:h-[300px]",
  gridGap = "gap-5"
}) {

  // Default Faculty Data (Nursing)
  const defaultFaculty = [
    {
      img: faculty1,
      name: "Dr. Rajesh Kumar",
      role: "Cardiologist",
      college: "ASRAM Medical College",
      qualification: "MBBS, MD, DM (Cardiology)",
      details: [
        { icon: <img src={expIcon} className="w-[18px] h-[18px]" />, text: "20+ Years Experience" },
        { icon: <img src={calendarIcon} className="w-[18px] h-[18px]" />, text: "Mon - Fri" },
        { icon: <img src={timeIcon} className="w-[18px] h-[18px]" />, text: "9:00 AM - 5:00 PM" }
      ],
      badge: "Leadership"
    },
    {
      img: faculty2,
      name: "Dr. Priya Sharma",
      role: "Neurologist",
      college: "ASRAM Medical College",
      qualification: "MBBS, MD, DM (Neurology)",
      details: [
        { icon: <img src={expIcon} className="w-[18px] h-[18px]" />, text: "15+ Years Experience" },
        { icon: <img src={calendarIcon} className="w-[18px] h-[18px]" />, text: "Mon - Sat" },
        { icon: <img src={timeIcon} className="w-[18px] h-[18px]" />, text: "10:00 AM - 6:00 PM" }
      ],
      badge: "Leadership"
    },
    {
      img: faculty3,
      name: "Dr. Amit Patel",
      role: "Orthopedic Surgeon",
      college: "ASRAM Medical College",
      qualification: "MBBS, MS (Orthopedics)",
      details: [
        { icon: <img src={expIcon} className="w-[18px] h-[18px]" />, text: "18+ Years Experience" },
        { icon: <img src={calendarIcon} className="w-[18px] h-[18px]" />, text: "Tue - Sat" },
        { icon: <img src={timeIcon} className="w-[18px] h-[18px]" />, text: "11:00 AM - 7:00 PM" }
      ],
      badge: "Leadership"
    },
  ];

  const data = facultyData || defaultFaculty;

  return (
    <PageSection bg={T.bg.section} paddingClass="py-[40px] md:py-[80px]">
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
          {heading}
        </h2>

        {/* FACULTY CARDS */}
        {/* FACULTY CARDS */}
        <div
          className={`
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            ${gridGap}
            w-full
          `}
        >
          {data.map((f, i) => (
            <div
              key={i}
              className={`
                w-full
                bg-white ${borderRadius}
                ${cardBorder}
                flex flex-col
                relative
                overflow-hidden
              `}
            >
              {/* Image */}
              <div className={`w-full ${imageHeight} bg-gray-200 rounded-t-[10px]`}>
                <img loading="lazy" decoding="async"
                  src={f.img}
                  alt={f.name}
                  className="
                    w-full h-full
                    object-cover rounded-t-[10px]
                  "
                />
                {f.badge && (
                  <span
                    className="
                        absolute top-[16px] right-[16px] 
                        px-[12px] py-[6px] 
                        rounded-[4px] 
                        text-[12px] font-medium 
                        uppercase tracking-wider
                        bg-[#223F7F] text-white
                    "
                  >
                    {f.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className={`${spacingConfig.paddingClass} flex flex-col ${spacingConfig.headerGap}`}>
                <div>
                  <h3
                    className={`
                      ${T.font.family}
                      ${T.font.weight.semibold}
                      text-[18px] md:text-[20px]
                      ${spacingConfig.nameMb}
                      leading-[26px] md:leading-[28px]
                    `}
                    style={{ color: T.color.text.secondary }}
                  >
                    {f.name}
                  </h3>

                  <p
                    className={`
                      ${T.font.family}
                      ${roleConfig.fontSize}
                      ${roleConfig.fontWeight}
                      ${spacingConfig.roleMb}
                      leading-[24px]
                    `}
                    style={{ color: roleConfig.color }}
                  >
                    {f.role}
                  </p>

                  {f.college && (
                    <p
                      className={`
                        ${T.font.family}
                        ${collegeConfig.fontSize}
                        ${collegeConfig.lineHeight}
                        ${collegeConfig.fontWeight}
                      `}
                      style={{ color: collegeConfig.color }}
                    >
                      {f.college}
                    </p>
                  )}

                  {f.qualification && (
                    <p
                      className={`
                        ${T.font.family}
                        text-[14px] leading-[20px]
                        ${spacingConfig.qualificationMt}
                      `}
                      style={{ color: T.color.dark }}
                    >
                      {f.qualification}
                    </p>
                  )}
                </div>

                {/* Details List */}
                <div className={`flex flex-col ${spacingConfig.detailsGap} ${spacingConfig.detailsMt}`}>
                  {f.details && f.details.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-[10px]">
                      {item.icon}
                      <span
                        className={`${T.font.family} text-[14px] leading-[20px]`}
                        style={{ color: T.color.text.muted }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className={`flex flex-row gap-[12px] ${spacingConfig.buttonsMt} ${spacingConfig.buttonsPt} ${spacingConfig.borderClass}`}>
                  <button
                    className={`
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                      ${primaryButtonConfig.className}
                    `}
                  >
                    <div className="flex items-center gap-2">
                      {primaryButtonConfig.icon}
                      {primaryButtonConfig.text}
                    </div>
                  </button>

                  <button
                    className={`
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                      ${secondaryButtonConfig.className}
                    `}
                  >
                    {secondaryButtonConfig.text}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER STATS */}
        {footerStats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {footerStats.map((stat, i) => (
              <div key={i} className="bg-white rounded-[12px] p-[30px] text-center flex flex-col items-center justify-center border-[0.9px] border-[#07070733] h-full gap-[12px]">
                <h4 className={`${T.font.family} text-[32px] font-semibold text-[#223F7F] leading-[39px]`}>{stat.value}</h4>
                <p className={`${T.font.family} text-[22px] font-medium text-[#223F7F] leading-[27px]`}>{stat.label}</p>
                <p className={`${T.font.family} text-[18px] font-normal text-[#191919BF] leading-[26px]`}>{stat.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM CTA */}
        {showCta && (
          <div className="flex justify-center mt-[10px]">
            <Button
              bg={ctaConfig.bg}
              color={ctaConfig.color}
              textSize={ctaConfig.textSize}
              className={ctaConfig.className}
              width={ctaConfig.width}
              height={ctaConfig.height}
              fontWeight={ctaConfig.fontWeight}
            >
              Meet All Faculty
            </Button>
          </div>
        )}
      </div>
    </PageSection>
  );
}
