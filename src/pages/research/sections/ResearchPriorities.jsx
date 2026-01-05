import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import {
  IconArrowRight,
  IconAiHealth,
  IconNcd,
  IconPublicHealth,
  IconClinicalTrials,
  IconGenomics,
  IconPatientSafety
} from "@/assets/icons";

const defaultPriorities = [
  {
    title: "Artificial Intelligence & Digital Health",
    desc: "AI-powered diagnostics, predictive analytics, telemedicine platforms, and wearable health technology.",
    icon: <IconAiHealth color="white" />
  },
  {
    title: "Non-Communicable Diseases",
    desc: "Research on diabetes, hypertension, cardiovascular diseases, and cancer prevention and management.",
    icon: <IconNcd color="white" />
  },
  {
    title: "Public Health & Epidemiology",
    desc: "Community-based studies, screening programs, and health policy impact assessment.",
    icon: <IconPublicHealth color="white" />
  },
  {
    title: "Clinical Trials & Translational Research",
    desc: "Evidence-based medicine, pharmaceutical trials, and medical device testing.",
    icon: <IconClinicalTrials color="white" />
  },
  {
    title: "Genomics & Precision Medicine",
    desc: "Genetic markers, personalized therapy development, and population genomics studies.",
    icon: <IconGenomics color="white" />
  },
  {
    title: "Healthcare Quality & Patient Safety",
    desc: "Hospital accreditation, patient outcome research, and quality improvement initiatives.",
    icon: <IconPatientSafety color="white" />
  }
];


const ResearchPriorities = ({
  iconConfig = { color: "white", bg: "#008C8C", size: 50 },
  buttonConfig = { bg: "#008c8c" },
  priorities,
  gridGap = "gap-5",
  cardPadding = "p-[24px] md:p-[30px]"
}) => {
  const displayPriorities = priorities || defaultPriorities;

  return (
    <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]" >
      <div className="flex flex-col items-start mb-10">
        <h2 className={`${T.font.family} font-bold text-[42px] text-[#223f7f]`}>
          Research Priorities
        </h2>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gridGap}`}>
        {displayPriorities.map((item, index) => (
          <div
            key={index}
            style={{ border: "1px solid rgba(7, 7, 7, 0.2)" }}

            className={`flex flex-col items-start bg-white ${cardPadding} rounded-[8px] shadow-sm transition-shadow h-full`}
          >
            {/* Icon Box */}
            <div
              className={`${iconConfig.sizeClass || "w-[50px] h-[50px]"} ${iconConfig.radiusClass || "rounded-[8px]"} flex items-center justify-center mb-5 shrink-0`}
              style={{ backgroundColor: iconConfig.bg }}
            >
              {/* Clone icon to override color if needed, or pass props if supported */}
              {React.cloneElement(item.icon, {
                color: iconConfig.color,
                // Only pass width/height if iconSizeClass is provided (handling string class vs int props is tricky, assuming component handles both or we parse?)
                // Actually IconAiHealth etc are components. They likely don't take className for size if they expect size prop?
                // The original code didn't pass size.
                // If I pass className, it might work if they spread props.
                // Let's assume for components we might need to handle differently or just rely on container?
                // Wait, if I provided `width: 24` previously it worked?
                // I'll try to parse the className or just pass standard size?
                // Let's rely on style or width/height props if I can.
                // For now, restoring original behavior (no size) OR new behavior.
                ...(iconConfig.iconSizeClass ? { width: 24, height: 24 } : {}) // Explicitly passing 24 for medical
              })}
            </div>

            {/* Title */}
            <h3 className={`${T.font.family} font-bold text-[22px] text-[#223f7f] mb-3 leading-tight`}>
              {item.title}
            </h3>

            {/* Description */}
            <p className={`${T.font.family} max-w-[344px] text-[18px] leading-[1.44]`} style={{ color: "#191919BF" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12" >
        <button
          className="hover:opacity-90 text-white px-8 py-3 rounded-[10px] font-regular text-[18px] flex items-center gap-2 transition-colors"
          style={{ backgroundColor: "#223F7F" }}
        >
          Explore Research Areas in Detail
          <IconArrowRight
            size={19}
            stroke="white"
            strokeWidth={2}
          />

        </button>
      </div >
    </PageSection >
  );
};

export default ResearchPriorities;
