// src/components/nursing/NursingCareerOutcomes.jsx
import React from "react";

const opportunities = [
  "Staff nurse and clinical nursing roles",
  "Nurse educator and clinical instructor",
  "ICU / OT / Emergency care specializations",
  "Community health & public health initiatives",
  "Higher studies in India & abroad",
];

const NursingCareerOutcomes = () => {
  return (
    <section className="bg-[#F7FAFF] py-[64px]">
      <div className="w-[1440px] max-w-full mx-auto px-[130px]">
        <div
          className="
            rounded-[24px]
            bg-white
            border border-[#E5E7EB]
            px-8 py-7
            grid lg:grid-cols-[1.1fr,1fr] gap-8
            shadow-[0_18px_48px_rgba(15,23,42,0.08)]
          "
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-[6px]">
              Career Outcomes
            </p>
            <h2 className="font-playfair font-bold text-[28px] leading-[34px] text-[#191919] mb-3">
              Placement-ready Graduates with Global Opportunities
            </h2>
            <p className="text-[13px] leading-[22px] text-[#4B5563] mb-5 max-w-[520px]">
              Our strong hospital backing, alumni network and dedicated training
              ensure nursing graduates are job-ready from day one and prepared
              for advanced roles.
            </p>

            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
              {opportunities.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[4px] h-[7px] w-[7px] rounded-full bg-[#22C55E]" />
                  <p className="text-[12px] leading-[18px] text-[#374151]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div className="rounded-[18px] bg-[#1F4C9A] text-white px-6 py-5 mb-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/80 mb-[4px]">
                Training & Placement Cell
              </p>
              <p className="text-[13px] leading-[20px] text-white/95 mb-2">
                Regular soft skills training, mock interviews and aptitude
                sessions designed specifically for nursing roles in India and
                overseas.
              </p>
              <p className="text-[12px] text-white/80">
                Dedicated placement drives with reputed hospital chains.
              </p>
            </div>

            <div className="rounded-[18px] bg-[#FFF7E6] border border-[#FDE68A] px-6 py-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#92400E] mb-[4px]">
                Alumni Highlights
              </p>
              <p className="text-[12px] leading-[19px] text-[#7C2D12]">
                Graduates successfully placed as nurse educators, clinical
                specialists and nurse managers in leading institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NursingCareerOutcomes;
