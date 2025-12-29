import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import IconArrowRightWhite from "@/assets/icons/IconArrowRightWhite";
const IconArrowRight = "/AsramWebsite-FE/assets/icons/IconArrowRight.svg";
const IconBookGovernance = "/AsramWebsite-FE/assets/icons/IconBookGovernance.svg";
const IconUsersGovernance = "/AsramWebsite-FE/assets/icons/IconUsersGovernance.svg";
const IconShieldGovernance = "/AsramWebsite-FE/assets/icons/IconShieldGovernance.svg";

/* =====================================================
   ICONS
===================================================== */





/* =====================================================
   DATA
===================================================== */

const governanceData = [
  {
    title: "Institutional Research Committee",
    acronym: "(IRC)",
    desc: "Oversees all research activities, ensures compliance with institutional policies, and monitors ongoing projects for quality and adherence to ethical standards.",
    members: "5 Members",
    icon: <img src={IconBookGovernance} className="w-[25px] h-[25px]" alt="" />,
  },
  {
    title: "Scientific & Academic Research Committee",
    acronym: "(SARC)",
    desc: "Provides scientific and technical guidance for research initiatives, evaluates methodologies, and promotes research excellence across departments.",
    members: "5 Members",
    icon: <img src={IconUsersGovernance} className="w-[25px] h-[25px]" alt="" />,
  },
  {
    title: "Institutional Ethics Committee",
    acronym: "(IEC)",
    desc: "Ensures all research involving human participants adheres to ethical guidelines and maintains compliance with ICMR and international ethical standards.",
    members: "6 Members",
    icon: <img src={IconShieldGovernance} className="w-[25px] h-[25px]" alt="" />,
  },
];

/* =====================================================
   COMPONENT
===================================================== */

const ResearchGovernance = () => {
  return (
    <PageSection bg={T.bg.white} paddingClass="py-[80px]">
      <h2 className={`${T.font.family} font-bold text-[42px] text-[#223f7f] mb-10`}>
        Research Governance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-12">
        {governanceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[10.4px] overflow-hidden transition-shadow"
            style={{ border: "1px solid rgba(7, 7, 7, 0.2)" }}
          >
            {/* Header */}
            <div className="p-[24px] md:p-[30px] pb-6" style={{ background: "#008C8C33" }}>
              <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-[20px] text-[#223F7F] font-semibold min-h-[56px]">
                {item.title}
              </h3>

              <span className="text-[#191919BF] font-regular text-[14.58px] font-medium block mt-1">
                {item.acronym}
              </span>
            </div>

            {/* Body */}
            <div className="bg-[#EEF2F7] p-[24px] md:p-[30px] flex flex-col flex-grow">
              <p className="text-[15px] text-gray-600 leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="mt-auto pt-[17.7px]">
                <p className="text-[14px] text-[rgba(25,25,25,0.75)] mb-1">
                  Committee Size
                </p>
                <p className="text-[#008C8C] text-[16px] mb-6">
                  {item.members}
                </p>

                <button style={{ border: "1px solid #07070733" }} className="w-full py-3 rounded-[6px] text-[#223F7F] font-medium text-[18px] bg-[#FFFFFF] hover:bg-[#223F7F] hover:text-white transition-colors flex justify-center items-center gap-2">
                  View Members & SOPs
                  <img src={IconArrowRight} className="w-[18px] h-[18px]" alt="" />

                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex justify-center">
        <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[16px] flex items-center gap-2 transition-colors">
          View Complete Governance Structure
                       <IconArrowRightWhite size={19} />       </button>
      </div>
    </PageSection>
  );
};

export default ResearchGovernance;
