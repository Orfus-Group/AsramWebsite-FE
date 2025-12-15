import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

/* =====================================================
   ICONS
===================================================== */



const IconBook = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M12.5 7.29102V21.8743" stroke="white" strokeWidth="2.08333" strokeLinecap="round" />
    <path
      d="M3.12467 18.75C2.84841 18.75 2.58346 18.6403 2.3881 18.4449C2.19275 18.2496 2.08301 17.9846 2.08301 17.7083V4.16667C2.08301 3.8904 2.19275 3.62545 2.3881 3.4301C2.58346 3.23475 2.84841 3.125 3.12467 3.125H8.33301C9.43808 3.125 10.4979 3.56399 11.2793 4.34539C12.0607 5.12679 12.4997 6.1866 12.4997 7.29167C12.4997 6.1866 12.9387 5.12679 13.7201 4.34539C14.5015 3.56399 15.5613 3.125 16.6663 3.125H21.8747C22.1509 3.125 22.4159 3.23475 22.6112 3.4301C22.8066 3.62545 22.9163 3.8904 22.9163 4.16667V17.7083C22.9163 17.9846 22.8066 18.2496 22.6112 18.4449C22.4159 18.6403 22.1509 18.75 21.8747 18.75H15.6247C14.7959 18.75 14.001 19.0792 13.415 19.6653C12.8289 20.2513 12.4997 21.0462 12.4997 21.875C12.4997 21.0462 12.1704 20.2513 11.5844 19.6653C10.9983 19.0792 10.2035 18.75 9.37468 18.75H3.12467Z"
      stroke="white"
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUsers = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M16.6666 21.875V19.7917C16.6666 18.6866 16.2276 17.6268 15.4462 16.8454C14.6648 16.064 13.605 15.625 12.4999 15.625H6.24992C5.14485 15.625 4.08504 16.064 3.30364 16.8454C2.52224 17.6268 2.08325 18.6866 2.08325 19.7917V21.875" stroke="white" strokeWidth="2.08333" />
    <path d="M9.37492 11.4583C11.6761 11.4583 13.5416 9.59285 13.5416 7.29167C13.5416 4.99048 11.6761 3.125 9.37492 3.125C7.07373 3.125 5.20825 4.99048 5.20825 7.29167C5.20825 9.59285 7.07373 11.4583 9.37492 11.4583Z" stroke="white" strokeWidth="2.08333" />
  </svg>
);

const IconShield = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path
      d="M20.8334 13.5408C20.8334 18.7492 17.1876 21.3533 12.8542 22.8638C12.6273 22.9406 12.3809 22.937 12.1563 22.8533C7.81258 21.3533 4.16675 18.7492 4.16675 13.5408V6.24917C4.16675 5.9729 4.27649 5.70795 4.47185 5.5126C4.6672 5.31725 4.93215 5.2075 5.20841 5.2075C7.29175 5.2075 9.89591 3.9575 11.7084 2.37417C11.9291 2.18562 12.2098 2.08203 12.5001 2.08203C12.7903 2.08203 13.0711 2.18562 13.2917 2.37417C15.1147 3.96792 17.7084 5.2075 19.7917 5.2075C20.068 5.2075 20.333 5.31725 20.5283 5.5126C20.7237 5.70795 20.8334 5.9729 20.8334 6.24917V13.5408Z"
      stroke="white"
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* =====================================================
   DATA
===================================================== */

const governanceData = [
  {
    title: "Institutional Research Committee",
    acronym: "(IRC)",
    desc: "Oversees all research activities, ensures compliance with institutional policies, and monitors ongoing projects for quality and adherence to ethical standards.",
    members: "5 Members",
    icon: <IconBook />,
  },
  {
    title: "Scientific & Academic Research Committee",
    acronym: "(SARC)",
    desc: "Provides scientific and technical guidance for research initiatives, evaluates methodologies, and promotes research excellence across departments.",
    members: "5 Members",
    icon: <IconUsers />,
  },
  {
    title: "Institutional Ethics Committee",
    acronym: "(IEC)",
    desc: "Ensures all research involving human participants adheres to ethical guidelines and maintains compliance with ICMR and international ethical standards.",
    members: "6 Members",
    icon: <IconShield />,
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
            className="flex flex-col rounded-[10.4px] border border-[rgba(7,7,7,0.2)] overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="p-[24px] md:p-[30px] pb-6" style={{ background: "rgba(0, 140, 140, 0.1)" }}>
              <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-[20px] text-[rgba(25,25,25,0.75)] min-h-[56px]">
                {item.title}
              </h3>

              <span className="text-gray-500 text-[16px] font-medium block mt-1">
                {item.acronym}
              </span>
            </div>

            {/* Body */}
            <div className="bg-white p-[24px] md:p-[30px] flex flex-col flex-grow">
              <p className="text-[15px] text-gray-600 leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="mt-auto pt-[17.7px] border-t border-[#D8DFEF]">
                <p className="text-[14px] text-[rgba(25,25,25,0.75)] mb-1">
                  Committee Size
                </p>
                <p className="text-[#008C8C] text-[16px] mb-6">
                  {item.members}
                </p>

                <button className="w-full py-3 rounded-[6px] border border-[#223F7F] text-[#223F7F] font-medium text-[18px] hover:bg-[#223F7F] hover:text-white transition-colors flex justify-center items-center gap-2">
                  View Members & SOPs
                  <IconArrowRight />

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
          <IconArrowRight
            size={19}
            stroke="white"
            strokeWidth={2}
          />        </button>
      </div>
    </PageSection>
  );
};

export default ResearchGovernance;
