// src/components/nursing/NursingStatsStrip.jsx
import React from "react";

const stats = [
  { label: "Years of Academic Legacy", value: "25+" },
  { label: "Dedicated Nursing Faculty", value: "70+" },
  { label: "Clinical Partner Beds", value: "1500+" },
  { label: "Annual Student Intake", value: "400+" },
];

const NursingStatsStrip = () => {
  return (
    <section className="relative bg-white">
      <div className="w-[1440px] max-w-full mx-auto px-[130px]">
        <div
          className="
            relative -mt-[40px]
            rounded-[24px]
            bg-[#1F4C9A]
            text-white
            px-8 py-5
            shadow-[0_18px_45px_rgba(15,23,42,0.35)]
            flex flex-wrap gap-6 justify-between
          "
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex-1 min-w-[150px] flex items-center gap-3"
            >
              <div className="h-[32px] w-[32px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[13px] font-semibold">
                ●
              </div>
              <div>
                <div className="text-[22px] leading-[26px] font-semibold mb-[2px]">
                  {item.value}
                </div>
                <div className="text-[11px] leading-[16px] text-white/80 uppercase tracking-[0.16em]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NursingStatsStrip;
