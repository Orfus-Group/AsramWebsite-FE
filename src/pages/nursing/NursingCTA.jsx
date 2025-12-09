// src/components/nursing/NursingCTA.jsx
import React from "react";

const NursingCTA = () => {
  return (
    <section className="bg-white py-[56px]">
      <div className="w-[1440px] max-w-full mx-auto px-[130px]">
        <div
          className="
            rounded-[24px]
            bg-[#1F4C9A]
            px-8 py-7
            flex flex-col md:flex-row items-center justify-between gap-5
            text-white
            shadow-[0_18px_48px_rgba(15,23,42,0.32)]
          "
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/70 mb-[6px]">
              Take the Next Step
            </p>
            <h2 className="font-playfair font-bold text-[26px] leading-[32px] mb-2">
              Explore Nursing Admissions & Counselling
            </h2>
            <p className="text-[13px] leading-[22px] text-white/85 max-w-[460px]">
              Check detailed eligibility, intake capacity, fee structure and
              counselling schedules for each nursing program before you apply.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              className="
                inline-flex items-center justify-center
                rounded-full bg-white text-[#1F4C9A]
                text-[13px] font-semibold px-6 py-2.5
                hover:bg-[#E5EEFF]
                transition
              "
            >
              View Admission Details
            </button>
            <button
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/60
                text-[13px] font-semibold text-white
                px-5 py-2.5
                hover:bg-white/10
                transition
              "
            >
              Contact Admissions Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NursingCTA;
