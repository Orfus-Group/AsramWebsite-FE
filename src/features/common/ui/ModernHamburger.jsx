import React from "react";
import { T } from "@/theme";

const ModernHamburger = ({ isOpen, onClick, className = "" }) => {
    return (
        <button
            className={`group relative h-[48px] w-[48px] rounded-full bg-transparent hover:bg-slate-50 transition-colors duration-300 flex items-center justify-center ${className}`}
            onClick={onClick}
            aria-label="Toggle Menu"
        >
            <div className="flex flex-col gap-[6px] w-[26px]">
                {/* Top Line */}
                <span
                    className={`h-[2.5px] w-full bg-[#223F7F] rounded-full transform transition-all duration-300 ease-out origin-center ${isOpen ? "translate-y-[8.5px] rotate-45" : ""
                        }`}
                />

                {/* Middle Line */}
                <span
                    className={`h-[2.5px] w-[70%] bg-[#223F7F] rounded-full transition-all duration-300 ease-out ml-auto group-hover:w-full ${isOpen ? "scale-0 opacity-0" : "opacity-100"
                        }`}
                />

                {/* Bottom Line */}
                <span
                    className={`h-[2.5px] w-full bg-[#223F7F] rounded-full transform transition-all duration-300 ease-out origin-center ${isOpen ? "-translate-y-[8.5px] -rotate-45" : ""
                        }`}
                />
            </div>
        </button>
    );
};

export default ModernHamburger;
