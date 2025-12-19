import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

/* =====================================================
   ICONS
===================================================== */



const IconBook = () => (
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 7.29297V21.8763" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.12565 18.75C2.84938 18.75 2.58443 18.6403 2.38908 18.4449C2.19373 18.2496 2.08398 17.9846 2.08398 17.7083V4.16667C2.08398 3.8904 2.19373 3.62545 2.38908 3.4301C2.58443 3.23475 2.84938 3.125 3.12565 3.125H8.33398C9.43905 3.125 10.4989 3.56399 11.2803 4.34539C12.0617 5.12679 12.5007 6.1866 12.5007 7.29167C12.5007 6.1866 12.9396 5.12679 13.721 4.34539C14.5024 3.56399 15.5622 3.125 16.6673 3.125H21.8757C22.1519 3.125 22.4169 3.23475 22.6122 3.4301C22.8076 3.62545 22.9173 3.8904 22.9173 4.16667V17.7083C22.9173 17.9846 22.8076 18.2496 22.6122 18.4449C22.4169 18.6403 22.1519 18.75 21.8757 18.75H15.6257C14.7969 18.75 14.002 19.0792 13.4159 19.6653C12.8299 20.2513 12.5007 21.0462 12.5007 21.875C12.5007 21.0462 12.1714 20.2513 11.5854 19.6653C10.9993 19.0792 10.2045 18.75 9.37565 18.75H3.12565Z" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const IconUsers = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6673 21.875V19.7917C16.6673 18.6866 16.2283 17.6268 15.4469 16.8454C14.6655 16.064 13.6057 15.625 12.5007 15.625H6.25065C5.14558 15.625 4.08577 16.064 3.30437 16.8454C2.52297 17.6268 2.08398 18.6866 2.08398 19.7917V21.875" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.666 3.26172C17.5595 3.49335 18.3508 4.01512 18.9157 4.74512C19.4806 5.47512 19.7871 6.37202 19.7871 7.29505C19.7871 8.21808 19.4806 9.11499 18.9157 9.84499C18.3508 10.575 17.5595 11.0968 16.666 11.3284" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.916 21.8763V19.793C22.9153 18.8698 22.6081 17.9729 22.0424 17.2433C21.4768 16.5137 20.6849 15.9925 19.791 15.7617" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.37565 11.4583C11.6768 11.4583 13.5423 9.59285 13.5423 7.29167C13.5423 4.99048 11.6768 3.125 9.37565 3.125C7.07446 3.125 5.20898 4.99048 5.20898 7.29167C5.20898 9.59285 7.07446 11.4583 9.37565 11.4583Z" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const IconShield = () => (
 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8327 13.5408C20.8327 18.7492 17.1868 21.3533 12.8535 22.8638C12.6266 22.9406 12.3801 22.937 12.1556 22.8533C7.81185 21.3533 4.16602 18.7492 4.16602 13.5408V6.24917C4.16602 5.9729 4.27576 5.70795 4.47111 5.5126C4.66646 5.31725 4.93142 5.2075 5.20768 5.2075C7.29102 5.2075 9.89518 3.9575 11.7077 2.37417C11.9284 2.18562 12.2091 2.08203 12.4993 2.08203C12.7896 2.08203 13.0703 2.18562 13.291 2.37417C15.1139 3.96792 17.7077 5.2075 19.791 5.2075C20.0673 5.2075 20.3322 5.31725 20.5276 5.5126C20.7229 5.70795 20.8327 5.9729 20.8327 6.24917V13.5408Z" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
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
            className="flex flex-col rounded-[10.4px] overflow-hidden transition-shadow"
             style={{ border: "1px solid rgba(7, 7, 7, 0.2)"}}
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
