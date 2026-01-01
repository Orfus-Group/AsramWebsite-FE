import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCardGrid from "@/components/common/InfoCardGrid";

const IconWards = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4v16" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17h20" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8v9" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconOT = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6h4" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconICU = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconPharmacy = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="20" height="12" rx="6" stroke="#223F7F" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="16.5" y2="7.5" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconAmbulance = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9h2a2 2 0 0 1 2 2v6h14v-6a2 2 0 0 1 2-2h2" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 17h16" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="17" r="2" stroke="#223F7F" strokeWidth="1.5" />
        <circle cx="17" cy="17" r="2" stroke="#223F7F" strokeWidth="1.5" />
        <path d="M14 9V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" stroke="#223F7F" strokeWidth="1.5" />
        <path d="M12 5v4" stroke="#223F7F" strokeWidth="1.5" />
    </svg>
);

const IconInfection = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v8" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12h8" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const facilitiesTop = [
    {
        title: "Patient Wards",
        desc: "General wards, semi-private, and private rooms with nursing care",
        icon: <IconWards />
    },
    {
        title: "Operation Theatres",
        desc: "Modern OTs with advanced surgical equipment and sterile protocols",
        icon: <IconOT />
    },
    {
        title: "Intensive Care Units",
        desc: "ICU, NICU, and CCU with 24/7 monitoring and ventilator support",
        icon: <IconICU />
    },
    {
        title: "In-House Pharmacy",
        desc: "Well-stocked pharmacy with essential medicines and patient counseling",
        icon: <IconPharmacy />
    },
    {
        title: "Ambulance Services",
        desc: "Advanced life support ambulances available for emergency transport",
        icon: <IconAmbulance />
    },
    {
        title: "Infection Control",
        desc: "Strict hygiene protocols and waste management systems",
        icon: <IconInfection />
    },
];

const facilitiesBottom = [
    {
        title: "Patient Safety & Comfort",
        desc: "We prioritize patient safety through infection control measures, regular staff training, and strict adherence to medical protocols. Our nursing staff ensures personalized attention and timely care for all admitted patients."
    },
    {
        title: "Family Support Services",
        desc: "We recognize the importance of family involvement in patient recovery. Visiting hours are structured to balance patient rest with family support, and our staff remains available to address concerns and provide updates."
    }
];

const PatientCareFacilities = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[80px] px-[20px] lg:px-[120px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                Patient Care & Facilities
            </h1>

            {/* Top Grid: 6 items using InfoCardGrid */}
            <InfoCardGrid
                items={facilitiesTop.map(item => ({ ...item, description: item.desc }))}
                gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[40px]"
                cardClassName="bg-white rounded-[8px] p-[30px] border-[0.9px] border-[#E0E0E0] h-full flex flex-col items-start gap-[12px] transition-shadow"
                iconContainerClassName="w-[48px] h-[48px] bg-[rgba(34,63,127,0.1)] rounded-[8px] flex items-center justify-center text-[#223F7F] shrink-0"
                titleClassName="text-[#223F7F] font-medium text-[22px] leading-[1.2] font-montserrat"
                descriptionClassName="text-[rgba(25,25,25,0.75)] text-[18px] leading-[1.44] font-montserrat flex-1"
            />

            {/* Bottom Grid: 2 columns, 2 items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {facilitiesBottom.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-white
                            w-full h-auto md:min-h-[199px]
                            p-[40px] 
                            rounded-[12px]
                            border-l-[4px] border-l-[#223F7F]
                            flex flex-col justify-center
                        "
                        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}
                    >
                        <h4 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-[12px]`}>
                            {item.title}
                        </h4>
                        <p className={`${T.font.family} font-regular text-[18px] text-[rgba(25,25,25,0.75)] leading-[1.44]`}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

        </PageSection>
    );
};

export default PatientCareFacilities;
