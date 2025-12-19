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

const priorities = [
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


const ResearchPriorities = () => {
  return (
    <PageSection bgColor="#EEF2F7" paddingClass="py-[80px]">
      <div className="flex flex-col items-start mb-10">
        <h2 className={`${T.font.family} font-bold text-[42px] text-[#223f7f]`}>
          Research Priorities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {priorities.map((item, index) => (
          <div
            key={index}
                                  style={{ border: "1px solid rgba(7, 7, 7, 0.2)"}}

            className="flex flex-col items-start bg-white p-[24px] md:p-[30px] rounded-[8px] shadow-sm hover:shadow-md transition-shadow h-full"
          >
            {/* Icon Box */}
            <div className="w-[50px] h-[50px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 shrink-0">
              {item.icon}
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
      <div className="flex justify-center mt-12">
        <button className="bg-[#008c8c] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[10px] font-regular text-[18px] flex items-center gap-2 transition-colors">
          Explore Research Areas in Detail
          <IconArrowRight
            size={19}
            stroke="white"
            strokeWidth={2}
          />

        </button>
      </div>
    </PageSection>
  );
};

export default ResearchPriorities;
