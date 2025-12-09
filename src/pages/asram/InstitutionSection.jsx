import React from "react";

// Icons
import medicalIcon from "../../assets/asram/medical.svg";
import nursingIcon from "../../assets/asram/nursing.svg";
import paramedIcon from "../../assets/asram/paramedical.svg";
import ArrowRight from "../../assets/asram/arrow-right.svg";
import { Link } from "react-router";
import { T } from "../../theme";

const institutions = [
  {
    id: 1,
    icon: medicalIcon,
    name: "ASRAM Medical College",
    tagline: "Shaping Future Doctors",
    description:
      "Recognized medical college with strong academics, clinical training, and research.",
    cta: "Visit Medical College",
  },
  {
    id: 2,
    icon: nursingIcon,
    name: "ASRAM College of Nursing",
    tagline: "Precision-Driven Cancer Care",
    description:
      "B.Sc Nursing & GNM programs with hands-on skill labs and hospital training.",
    cta: "Visit Nursing College Website",
  },
  {
    id: 3,
    icon: paramedIcon,
    name: "ASRAM Paramedical Institute",
    tagline: "Technical Excellence in Healthcare",
    description:
      "Professional programs in allied health sciences supporting modern medical systems.",
    cta: "Visit Paramedical Website",
  },
];

// underline colors
const underlineColors = {
  1: "#C0392B",
  2: "#008C8C",
  3: "#A66E00",
};

// icon background colors
const iconBgColors = {
  1: "rgba(192,57,43,0.10)",
  2: "rgba(0,140,140,0.10)",
  3: "rgba(166,110,0,0.10)",
};

// CTA button colors
const ctaColors = {
  1: "#C0392B1A",
  2: "#EAF5F5",
  3: "#A66E001A",
};

const InstitutionsSection = () => {
  return (
    <section
      className="relative py-[68px] overflow-visible"
      style={{ backgroundColor: "rgba(34,63,127,0.05)" }}
    >
      <div className="absolute top-[-70px] lg:top-[-90px] 2xl:top-[-92px] right-[92px] opacity-30 select-none pointer-events-none" />

      <div className="w-[1440px] max-w-full mx-auto px-[130px]">
        {/* SECTION TITLE */}
        <h2
          className={`${T.font.family} ${T.font.weight.bold} text-[42px] leading-[52px] text-[#223F7F] mb-[6px]`}
        >
          Our Institutions
        </h2>

        <p
          className={`${T.font.family} ${T.font.weight.medium} text-[22px] leading-[32px] text-[#191919] mt-[2px] mb-[45px]`}
        >
          Three Institutions. One Vision for Future Healthcare Leaders.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px]">
          {institutions.map((item) => (
            <div
              key={item.id}
              className="group w-[386px] min-h-[388px] bg-white rounded-[14px] border border-[#E1E6EF] shadow-[0px_12px_28px_rgba(15,23,42,0.06)] px-[28px] pt-[24px] pb-[24px] flex flex-col transition-all duration-200 hover:-translate-y-[4px] hover:shadow-[0px_20px_42px_rgba(15,23,42,0.12)]"
            >
              {/* ICON */}
              <div
                className="w-[64px] h-[64px] rounded-full flex items-center justify-center mb-[22px]"
                style={{ backgroundColor: iconBgColors[item.id] }}
              >
                <img src={item.icon} className="w-[32px] h-[32px]" alt="" />
              </div>

              {/* TITLE WITH UNDERLINE */}
              <h3
                className={`${T.font.family} ${T.font.weight.semibold} text-[22px] leading-[32px] text-[#191919] mb-[6px] relative pb-[8px]`}
              >
                {item.name}
                <span
                  className="absolute left-0 bottom-0 w-[84px] border-b-[2.5px]"
                  style={{ borderColor: underlineColors[item.id] }}
                />
              </h3>

              {/* TAGLINE */}
              <p
                className={`${T.font.family} ${T.font.weight.bold} text-[18px] leading-[28px] text-[#223F7F] mt-[8px] mb-[10px]`}
              >
                {item.tagline}
              </p>

              {/* DESCRIPTION */}
              <p
                className={`${T.font.family} ${T.font.weight.normal} text-[18px] leading-[26px] text-[#191919] mt-[8px] mb-[24px]`}
              >
                {item.description}
              </p>

              {/* CTA BUTTON */}
             <Link
  to={item.id === 2 ? "/nursing" : "#"}  // 👈 Nursing navigation
  className="
    mt-auto flex items-center justify-center gap-[6px]
    w-full h-[46px] rounded-[6px]
  "
  style={{ backgroundColor: ctaColors[item.id], textDecoration: "none" }}
>
  <span
    className={`
      ${T.font.family}
      ${T.font.weight.semibold}
      text-[18px] leading-none text-[#191919]
    `}
  >
    {item.cta}
  </span>

  <img
    src={ArrowRight}
    className="w-[22px] h-[22px] select-none pointer-events-none"
    alt=""
  />
</Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
