import React, { useEffect, useRef, useState } from "react";
import { T } from "@/theme";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

const StatCard = ({ icon: Icon, value, label }) => (
    <div className={`
        bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-[200px] w-full
        border border-gray-100
    `}>
        <div className="text-[#223F7F] mb-4">
            {Icon && <Icon className="w-[32px] h-[32px] text-[#008C8C]" />}
        </div>

        <AnimatedStatValue
            value={value}
            className="text-[#223F7F] text-3xl font-bold mb-2 font-montserrat"
        />

        <div className="text-[#555555] text-sm font-montserrat">{label}</div>
    </div>
);

export default StatCard;
