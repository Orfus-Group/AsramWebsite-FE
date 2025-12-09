// src/components/nursing/NursingProgramTracks.jsx
import React from "react";

const programs = [
  {
    tag: "Undergraduate",
    title: "B.Sc. Nursing",
    duration: "4 Years + Internship",
    points: [
      "Strong foundation in medical-surgical, paediatric and community health nursing.",
      "Early clinical postings across speciality departments.",
    ],
  },
  {
    tag: "Diploma",
    title: "GNM (General Nursing & Midwifery)",
    duration: "3 Years",
    points: [
      "Balanced learning with emphasis on maternal and child health.",
      "Exposure to primary & secondary level care settings.",
    ],
  },
  {
    tag: "Postgraduate",
    title: "M.Sc. Nursing",
    duration: "2 Years",
    points: [
      "Advanced clinical specializations and leadership training.",
      "Research-oriented curriculum with guided dissertation.",
    ],
  },
];

const NursingProgramTracks = () => {
  return (
    <section className="bg-[#F7FAFF] py-[72px]">
      <div className="w-[1440px] max-w-full mx-auto px-[130px]">
        {/* Heading block */}
        <div className="flex items-end justify-between gap-6 mb-[32px]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-[6px]">
              Academic Pathways
            </p>
            <h2 className="font-playfair font-bold text-[32px] leading-[40px] text-[#191919] mb-[6px]">
              Structured Programs Across Nursing Levels
            </h2>
            <p className="text-[13px] leading-[22px] text-[#4B5563] max-w-[520px]">
              From foundational nursing training to advanced postgraduate
              specialization, our programs are structured to support continuous
              professional growth.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280] mb-[4px]">
              Intake & Eligibility
            </p>
            <p className="text-[12px] leading-[18px] text-[#4B5563] max-w-[260px]">
              All programs follow regulatory guidelines for eligibility, intake
              and clinical posting requirements.
            </p>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {programs.map((program) => (
            <div
              key={program.title}
              className="
                group relative rounded-[20px]
                bg-white
                border border-[#E5E7EB]
                px-5 pt-5 pb-6
                shadow-[0_14px_38px_rgba(15,23,42,0.06)]
                hover:shadow-[0_18px_48px_rgba(15,23,42,0.12)]
                hover:border-[#C4D2FF]
                transition
                flex flex-col
              "
            >
              <span className="inline-flex mb-3 rounded-full bg-[#E5EEFF] px-3 py-[4px] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1F4C9A]">
                {program.tag}
              </span>

              <h3 className="text-[18px] font-semibold text-[#111827] mb-[2px]">
                {program.title}
              </h3>
              <p className="text-[11px] text-[#6B7280] mb-4">
                {program.duration}
              </p>

              <ul className="space-y-2.5 mb-4">
                {program.points.map((p) => (
                  <li key={p} className="flex gap-2 items-start">
                    <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-[#1F4C9A]" />
                    <p className="text-[12px] leading-[19px] text-[#4B5563]">
                      {p}
                    </p>
                  </li>
                ))}
              </ul>

              <button
                className="
                  mt-auto inline-flex items-center gap-1
                  text-[12px] font-semibold text-[#1F4C9A]
                  group-hover:gap-1.5 transition-all
                "
              >
                View detailed curriculum
                <span className="text-[14px] leading-none">↗</span>
              </button>

              {/* Accent corner indicator */}
              <span className="absolute right-[18px] top-[18px] h-[10px] w-[10px] rounded-full bg-[#F59E0B] opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NursingProgramTracks;
