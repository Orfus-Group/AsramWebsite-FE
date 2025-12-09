// src/components/nursing/NursingLearningEnvironment.jsx
import React from "react";
import labImage from "../../assets/nursing/nursing-lab.jpg";
import hostelImage from "../../assets/nursing/nursing-hostel.jpg";

const NursingLearningEnvironment = () => {
  return (
    <section className="bg-white py-[72px]">
      <div className="w-[1440px] max-w-full mx-auto px-[130px] grid lg:grid-cols-[1.15fr,1fr] gap-10 items-start">
        {/* Left: text list */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-[6px]">
            Learning Environment
          </p>
          <h2 className="font-playfair font-bold text-[30px] leading-[38px] text-[#191919] mb-3">
            Clinical Labs, Simulation & Student Support
          </h2>
          <p className="text-[13px] leading-[22px] text-[#4B5563] max-w-[520px] mb-5">
            Carefully designed spaces and support systems ensure every nursing
            student can confidently bridge classroom theory with real-world
            practice.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "High-fidelity nursing skill labs",
                body: "Dedicated labs for fundamentals of nursing, maternal health, paediatrics and critical care procedures.",
              },
              {
                title: "Integrated clinical postings",
                body: "Rotations across OPD, wards, ICU, OT and community health centres under close supervision.",
              },
              {
                title: "Mentoring, counselling & support",
                body: "Faculty mentors, counselling cell and academic support for smooth transition into rigorous schedules.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-[18px] bg-[#F9FAFB] px-4 py-3 border border-[#E5E7EB]"
              >
                <div className="mt-[4px] h-[8px] w-[8px] rounded-full bg-[#1F4C9A]" />
                <div>
                  <h3 className="text-[13px] font-semibold text-[#111827] mb-[2px]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] leading-[19px] text-[#4B5563]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stacked images like Figma */}
        <div className="relative h-[320px]">
          <div
            className="
              absolute left-0 top-0
              h-[220px] w-[260px]
              rounded-[22px]
              overflow-hidden
              shadow-[0_16px_40px_rgba(15,23,42,0.22)]
            "
          >
            <img
              src={labImage}
              alt="Nursing lab"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="
              absolute right-0 bottom-0
              h-[220px] w-[260px]
              rounded-[22px]
              overflow-hidden
              shadow-[0_16px_40px_rgba(15,23,42,0.22)]
            "
          >
            <img
              src={hostelImage}
              alt="Nursing hostel & campus"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating chip */}
          <div className="absolute left-[32%] top-[46%]">
            <div className="rounded-[18px] bg-white px-4 py-3 shadow-md border border-[#E5E7EB]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#6B7280] mb-[2px]">
                24x7 Clinical Exposure
              </p>
              <p className="text-[12px] leading-[18px] text-[#111827]">
                Active hospital campus with continuous learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NursingLearningEnvironment;
