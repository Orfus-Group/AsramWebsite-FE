import React from "react";
import asramLogo from "@/assets/nursing/asramlogo.svg";

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative overflow-hidden">
      
      {/* Glow ring */}
      <div className="absolute w-[260px] h-[260px] rounded-full bg-[#008C8C]/10 animate-pingSlow" />

      {/* Logo */}
      <img
        src={asramLogo}
        alt="Loading..."
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="
          w-[180px] h-[180px]
          animate-logoBreath
          relative z-10
        "
      />
    </div>
  );
}
