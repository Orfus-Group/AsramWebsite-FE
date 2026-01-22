import React from "react";
import { useLocation } from "react-router-dom";
import { T } from "@/theme";

const asramNursingLogo = "/AsramWebsite-FE/assets/nursing/asramlogo.svg";
const LatestAsramLogo = "/AsramWebsite-FE/assets/asram/asramlatestlogo.svg";
const AsramLogoFull = "/AsramWebsite-FE/assets/asram/ASymbol.png";

export default function LoadingScreen() {
  const location = useLocation();
  const path = location.pathname;

  const isNursing = path.includes("/nursing");
  const isParamedical = path.includes("/paramedical");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Glow Ring (Common) */}
      <div className="absolute w-[260px] h-[260px] rounded-full bg-[#008C8C]/10 animate-pingSlow" />

      {isNursing ? (
        // Nursing Context Loader (Original Style)
        <img
          src={asramNursingLogo}
          alt="Loading..."
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-[180px] h-[180px] animate-logoBreath relative z-10"
        />
      ) : path === "/" ? (
        // Root Path Loader
        <img
          src={LatestAsramLogo}
          alt="Loading..."
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-[280px] animate-logoBreath relative z-10"
        />
      ) : (
        // Medical / Paramedical / Common Loader (Header Style)
        <div className="flex items-center gap-[4px] md:gap-[5.6px] animate-pulse relative z-10">
          <img
            loading="eager"
            decoding="async"
            src={AsramLogoFull}
            alt="Asram Icon"
            className="w-[38px] h-[38px] md:w-[46.43px] md:h-[46px] object-contain flex-shrink-0 transition-all duration-300"
          />
          <div className="flex flex-col items-start justify-center">
            <span className={`${T.font.family} ${T.font.weight.medium} text-[12px] md:text-[14px] text-[#223F7F] leading-normal mb-[1px] md:mb-[1.2px] transition-all duration-300`}>
              Asram
            </span>
            <span className={`${T.font.family} ${T.font.weight.bold} text-[12.5px] md:text-[14.9px] text-[#223F7F] leading-[1.2] md:leading-[1.25] mt-[1px] md:mt-[1.2px] whitespace-nowrap transition-all duration-300`}>
              {isParamedical ? "College of Health Sciences" : "College of Medicine"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
