import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import PartnershipImg from "@/assets/asram/newshighlight1.png";

const Icons = {
  Globe: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C14.7614 21 17 16.9706 17 12C17 7.02944 14.7614 3 12 3M12 21C9.23858 21 7 16.9706 7 12C7 7.02944 9.23858 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
        stroke="#223F7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  OfficeBuilding: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        stroke="#223F7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Beaker: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        stroke="#223F7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const GlobalPartnerships = () => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
      {/* Heading */}
      <h2
        className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-10`}
      >
        Global Partnerships
      </h2>

      {/* Image + Content */}
      <div className="flex flex-col lg:flex-row gap-[40px] mb-16">
        {/* Image */}
        <div className="w-full lg:w-1/2 rounded-[16px] overflow-hidden bg-gray-100 h-[300px] lg:h-auto">
          <img
            src={PartnershipImg}
            alt="International Collaboration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3
            className={`${T.font.family} font-bold text-[24px] text-[#223F7F] mb-4`}
          >
            International Collaboration
          </h3>

          <p
            className={`${T.font.family} text-[16px] text-[#4A5565] leading-[1.8] mb-6`}
          >
            ASRAM is proud to foster global connections that expand opportunities
            for our students and faculty. We have established memorandums of
            understanding (MoUs) with prestigious medical institutions and
            top-tier universities worldwide.
          </p>

          <ul className="space-y-3">
            {[
              "Student Exchange Programs",
              "Joint Research Initiatives",
              "Faculty Development Workshops",
              "Global Health Conferences",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#223F7F]" />
                <span
                  className={`${T.font.family} text-[15px] text-[#4A5565]`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Global Universities",
            icon: Icons.Globe,
            desc: "Academic tie-ups with universities in USA, UK, and Australia.",
          },
          {
            title: "Healthcare Organizations",
            icon: Icons.OfficeBuilding,
            desc: "Collaborations with WHO and international health bodies.",
          },
          {
            title: "Research Institutions",
            icon: Icons.Beaker,
            desc: "Joint projects on tropical medicine and public health.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#EEF2F7] p-6 rounded-[12px] flex flex-col items-start border border-transparent hover:border-[#223F7F]/30 transition-colors"
          >
            <div className="w-[50px] h-[50px] bg-white rounded-[8px] flex items-center justify-center mb-4 shadow-sm">
              {card.icon}
            </div>

            <h4
              className={`${T.font.family} font-bold text-[18px] text-[#223F7F] mb-2`}
            >
              {card.title}
            </h4>

            <p
              className={`${T.font.family} text-[15px] text-[#4A5565] leading-[1.6]`}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default GlobalPartnerships;
