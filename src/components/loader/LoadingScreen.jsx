import React from "react";
import asramLogo from "../../assets/nursing/asramlogo.svg";

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <img
        src={asramLogo}
        alt="Loading..."
        className="w-[180px] h-[180px] animate-pulse"
      />
    </div>
  );
}
