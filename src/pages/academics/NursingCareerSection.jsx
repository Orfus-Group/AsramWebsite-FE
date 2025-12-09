import React from "react";
import { T } from "../../theme";

import nursingcareer from "../../assets/academics/nursingcareer.svg";

import excellence from "../../assets/academics/excellence.svg";
import activestudents from "../../assets/academics/activestudents.svg";
import performancesuccess from "../../assets/academics/performancesuccess.svg";
import approvedprograms from "../../assets/academics/approvedprograms.svg";

export default function NursingCareerSection() {
  return (
    <section className={`w-full ${T.bg.programCard} py-[80px]`}>
      <div className="w-[1200px] mx-auto flex flex-col gap-[40px]">

        {/* SECTION TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px]
            leading-[46px]
            text-[${T.color.secondary}]
          `}
        >
          Shape Your Career in Nursing
        </h2>

        {/* MAIN CONTENT WRAPPER */}
        <div className="w-[1200px] h-[367px] flex justify-between">

          {/* LEFT IMAGE */}
          <div className="w-[563px] h-[367px] rounded-[8px] overflow-hidden">
            <img
              src={nursingcareer}
              alt="Nursing Career"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT 2x2 STATS GRID */}
          <div className="w-[590px] h-[367px] grid grid-cols-2 grid-rows-2 gap-[10px]">

            {/* CARD 1 */}
            <div className={`w-[282.16px] h-[171.66px] ${T.bg.white} ${T.radius.md} flex flex-col items-center justify-center gap-[6px]`}>
              <img src={excellence} className="w-[31.58px] h-[31.58px]" />
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[29.61px]
                  leading-[35.53px]
                  text-[${T.color.secondary}]
                `}
              >
                20+
              </h3>
              <p
                className={`
                  ${T.font.family}
                  text-[15.79px]
                  leading-[23.68px]
                `}
                style={{ color: T.color.text.muted }}
              >
                Years of Excellence
              </p>
            </div>

            {/* CARD 2 */}
            <div className={`w-[282.16px] h-[171.66px] ${T.bg.white} ${T.radius.md} flex flex-col items-center justify-center gap-[6px]`}>
              <img src={activestudents} className="w-[31.58px] h-[31.58px]" />
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[29.61px]
                  leading-[35.53px]
                  text-[${T.color.secondary}]
                `}
              >
                377+
              </h3>
              <p
                className={`
                  ${T.font.family}
                  text-[15.79px]
                  leading-[23.68px]
                `}
                style={{ color: T.color.text.muted }}
              >
                Active Students
              </p>
            </div>

            {/* CARD 3 */}
            <div className={`w-[282.16px] h-[171.66px] ${T.bg.white} ${T.radius.md} flex flex-col items-center justify-center gap-[6px]`}>
              <img src={performancesuccess} className="w-[31.58px] h-[31.58px]" />
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[29.61px]
                  leading-[35.53px]
                  text-[${T.color.secondary}]
                `}
              >
                95%
              </h3>
              <p
                className={`
                  ${T.font.family}
                  text-[15.79px]
                  leading-[23.68px]
                `}
                style={{ color: T.color.text.muted }}
              >
                Placement Success
              </p>
            </div>

            {/* CARD 4 */}
            <div className={`w-[282.16px] h-[171.66px] ${T.bg.white} ${T.radius.md} flex flex-col items-center justify-center gap-[6px]`}>
              <img src={approvedprograms} className="w-[31.58px] h-[31.58px]" />
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.bold}
                  text-[29.61px]
                  leading-[35.53px]
                  text-[${T.color.secondary}]
                `}
              >
                INC
              </h3>
              <p
                className={`
                  ${T.font.family}
                  text-[15.79px]
                  leading-[23.68px]
                `}
                style={{ color: T.color.text.muted }}
              >
                Approved Programs
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
