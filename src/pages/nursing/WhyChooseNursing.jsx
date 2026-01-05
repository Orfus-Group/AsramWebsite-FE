import React from "react";
import { T } from "@/theme";

const CheckMarkIcon = "/AsramWebsite-FE/assets/icons/CheckMarkIcon.svg";

const defaultCheckIcon = (
  <img src={CheckMarkIcon} className="w-[14px] h-[14px] shrink-0" alt="" />
);

export default function WhyChooseSection({
  title = "Why Choose ASRAM Nursing?",
  columns,
  CheckIcon,
}) {
  // Default Data (Nursing)
  const defaultColumns = [
    {
      title: "Educational Excellence",
      items: [
        "Integration with comprehensive multispecialty hospital",
        "Robust infrastructure across the 10-acre campus",
        "Recognized affiliations and regulatory approvals",
      ]
    },
    {
      title: "Student Success",
      items: [
        "Clear pathways from undergraduate to postgraduate",
        "Student-centered environment with strong mentoring",
        "Practical orientation ensuring job readiness",
      ]
    }
  ];

  const cols = columns || defaultColumns;
  const icon = CheckIcon || defaultCheckIcon;

  return (
    // Removed PageSection to avoid nested container padding and width constraints
    <div className="w-full mt-[50px] mb-[80px]">
      {/* Centered outer box as per Figma */}
      <div className="w-full flex flex-col items-center">
        <div
          className="
            w-full
            rounded-[10px]
            flex flex-col items-center
            bg-[#FFF]
            px-[24px] md:px-[40px]
            py-[30px] md:py-[40px]
          "
        >
          {/* Heading */}
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px]
              leading-[30px] md:leading-[34px] lg:leading-[36px]
              text-center
              mb-[32px]
            `}
            style={{ color: "#223F7F" }}
          >
            {title}
          </h2>

          {/* Two Columns */}
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              gap-x-[31.6px]
              gap-y-[31.6px]
              w-full
              max-w-[1120px]
            "
          >
            {cols.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-[15.8px]">
                <h3
                  className={`
                    ${T.font.family}
                    ${T.font.weight.semibold}
                    text-[18px] md:text-[20px]
                    leading-[26px]
                  `}
                  style={{ color: "#223F7F" }}
                >
                  {col.title}
                </h3>

                <ul className="flex flex-col gap-[10px]">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-[10px]">
                      <div className="mt-[2.5px] shrink-0">{icon}</div>
                      <p
                        className={`
                          ${T.font.family}
                          text-[14px] sm:text-[15px]
                          leading-[22px]
                          text-[#191919BF]
                        `}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
