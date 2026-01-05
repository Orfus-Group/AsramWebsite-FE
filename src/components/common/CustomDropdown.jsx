import React, { useState, useRef, useEffect } from "react";
import { T } from "@/theme";

// Inline Chevron Down Icon to ensure self-contained consistency
const ChevronDownIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.84013 5.95438C2.0511 5.74348 2.33719 5.625 2.6355 5.625C2.93381 5.625 3.21991 5.74348 3.43088 5.95438L8.99963 11.5231L14.5684 5.95438C14.7806 5.74946 15.0647 5.63606 15.3597 5.63863C15.6547 5.64119 15.9368 5.7595 16.1454 5.96809C16.354 6.17667 16.4723 6.45884 16.4749 6.75381C16.4774 7.04878 16.3641 7.33296 16.1591 7.54513L9.795 13.9093C9.58403 14.1202 9.29794 14.2386 8.99963 14.2386C8.70132 14.2386 8.41522 14.1202 8.20425 13.9093L1.84013 7.54513C1.62922 7.33417 1.51074 7.04807 1.51074 6.74976C1.51074 6.45145 1.62922 6.16535 1.84013 5.95438Z" fill="#3A3A3A" />
    </svg>
);

const CustomDropdown = ({ options, value, onChange, placeholder, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Helper to get display label
    // If value is "all", null, or empty string, show placeholder (or selected logic from before)
    // The previous logic for placeholder was complex: 
    // {activeCollege !== "all" && activeCollege !== "All" ? colleges.find(c => c.value === activeCollege)?.label : "Select College"}
    // Standardizing it: if value matches an option, show label. Else show placeholder.
    const selectedOption = options.find(opt => opt.value === value);
    const displayLabel = (selectedOption && value !== "all" && value !== "") ? selectedOption.label : placeholder;

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full !h-[50px] min-h-[50px] md:!h-[44px] md:min-h-[44px] rounded-[10px] border border-[#07070733] bg-white flex items-center justify-between px-[20px] shadow-sm hover:border-[#223F7F] transition-all focus:outline-none ${isOpen ? "border-[#223F7F] ring-1 ring-[#223F7F]" : ""}`}
            >
                <span className={`${T.font.family} font-medium text-[16px] text-[#3A3A3A] truncate`}>
                    {displayLabel}
                </span>
                <div className={`transition-transform duration-200 mt-[2px] ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDownIcon />
                </div>
            </button>

            {isOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#07070710] z-50 overflow-hidden py-1 max-h-[280px] overflow-y-auto custom-scrollbar">
                    {/* Add "All" option if placeholder logic implies it, or just map options */}
                    {/* Usually "Select X" clears the filter (sets to "all"). We can add a "Reset" or just rely on options having an "all" value if passed.
                        The passed 'options' usually usually contain everything needed.
                        However, the user's map in LatestNews included:
                        <option value="all">Select College</option> 
                        inside the select.
                        So I should expect 'options' to pass the "All" choice if desired, OR handle a reset.
                        To be safe, I'll assume 'options' contains the data choices. 
                        If the placeholder acts as the "All" state, selecting it from the dropdown is tricky unless explicitly in options.
                        
                        Strategy: The parent passes options. If parent has "all" in options, it renders.
                    */}
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`
                                cursor-pointer px-[20px] py-[12px] text-[16px] ${T.font.family} font-medium transition-colors border-b border-[#00000005] last:border-0
                                ${value === option.value ? "bg-[#223F7F] text-white" : "text-[#3A3A3A] hover:bg-[#223F7F] hover:text-white"}
                            `}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
