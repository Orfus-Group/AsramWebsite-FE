import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import TypedText from "@/components/common/TypedText";
const GeneralSurgeryHero = "/AsramWebsite-FE/assets/departments/departmentherobanner.png";

// Sections
import DepartmentOverview from "./sections/DepartmentOverview";
import AcademicsSection from "./sections/AcademicsSection";
import FacilitiesSection from "./sections/FacilitiesSection";
import ServicesSection from "./sections/ServicesSection";
import ConferencesSection from "./sections/ConferencesSection";
import FacultySpotlightSection from "../../../nursing/FacultySpotlight";
const faculty1 = "/AsramWebsite-FE/assets/nursing/doctor_1.png";
const faculty2 = "/AsramWebsite-FE/assets/nursing/doctor_2.png";
const faculty3 = "/AsramWebsite-FE/assets/nursing/doctor_3.png";
const EnvelopeIcon = ({ width = "24", height = "24", color = "currentColor", strokeWidth = "1.5" }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6087 13.5964 12.0031 13.5964C12.3975 13.5964 12.7875 13.4793 13.1162 13.26L21 8M5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V6.75C21 5.50736 19.9926 4.5 18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const HatIcon = ({ width = "20", height = "20", color = "#191919", strokeWidth = "1.6" }) => (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_621_1341)">
            <path d="M17.3012 8.82275C17.4458 8.75896 17.5685 8.65415 17.6541 8.52131C17.7398 8.38847 17.7845 8.23342 17.7829 8.07539C17.7812 7.91735 17.7333 7.76327 17.6449 7.63222C17.5566 7.50117 17.4318 7.39892 17.2859 7.33814L10.3628 4.18474C10.1523 4.08874 9.92368 4.03906 9.69236 4.03906C9.46103 4.03906 9.23240 4.08874 9.02194 4.18474L2.09966 7.33491C1.95585 7.39789 1.83352 7.50141 1.74762 7.63281C1.66172 7.76421 1.61597 7.91780 1.61597 8.07479C1.61597 8.23178 1.66172 8.38537 1.74762 8.51677C1.83352 8.64817 1.95585 8.75169 2.09966 8.81467L9.02194 11.9713C9.23240 12.0673 9.46103 12.1170 9.69236 12.1170C9.92368 12.1170 10.1523 12.0673 10.3628 11.9713L17.3012 8.82275Z" stroke={color} strokeOpacity="0.75" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.7698 8.07812V12.9245" stroke={color} strokeOpacity="0.75" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.84473 10.0938V12.9208C4.84473 13.5635 5.35533 14.1798 6.26421 14.6343C7.17308 15.0887 8.40578 15.3440 9.69113 15.3440C10.9765 15.3440 12.2092 15.0887 13.1181 14.6343C14.0269 14.1798 14.5375 13.5635 14.5375 12.9208V10.0938" stroke={color} strokeOpacity="0.75" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_621_1341">
                <rect width="19.3856" height="19.3856" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const RibbonIcon = ({ width = "20", height = "20", color = "#191919", strokeWidth = "1.6" }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.21094 13.8896L7 23L12 20L17 23L15.789 13.8896" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


const BookIcon = ({ width = "28", height = "28", color = "#223F7F", strokeWidth = "2" }) => (
    <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8.16797V24.5013" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.49967 21C3.19026 21 2.89351 20.8771 2.67472 20.6583C2.45592 20.4395 2.33301 20.1428 2.33301 19.8333V4.66667C2.33301 4.35725 2.45592 4.0605 2.67472 3.84171C2.89351 3.62292 3.19026 3.5 3.49967 3.5H9.33301C10.5707 3.5 11.7577 3.99167 12.6328 4.86683C13.508 5.742 13.9997 6.92899 13.9997 8.16667C13.9997 6.92899 14.4913 5.742 15.3665 4.86683C16.2417 3.99167 17.4287 3.5 18.6663 3.5H24.4997C24.8091 3.5 25.1058 3.62292 25.3246 3.84171C25.5434 4.0605 25.6663 4.35725 25.6663 4.66667V19.8333C25.6663 20.1428 25.5434 20.4395 25.3246 20.6583C25.1058 20.8771 24.8091 21 24.4997 21H17.4997C16.5714 21 15.6812 21.3687 15.0248 22.0251C14.3684 22.6815 13.9997 23.5717 13.9997 24.5C13.9997 23.5717 13.6309 22.6815 12.9745 22.0251C12.3182 21.3687 11.4279 21 10.4997 21H3.49967Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
// Faculty Data
const GeneralSurgeryFacultyData = [
    {
        img: faculty1,
        name: "Dr. Anjali Desai",
        role: "Professor",
        qualification: "Department of OB-GYN",
        details: [
            { icon: <HatIcon />, text: "MD, DGO, FICOG" },
            { icon: <BookIcon width="20" height="20" color="#191919" strokeWidth="1.6" />, text: "High-Risk Pregnancy & Infertility" },
            { icon: <RibbonIcon />, text: "19+ years Experience" }
        ],
        badge: null
    },
    {
        img: faculty2,
        name: "Dr. Arun Verma",
        role: "Associate Professor",
        qualification: "Department of General Surgery",
        details: [
            { icon: <HatIcon />, text: "MS, MCh (Surgical Oncology)" },
            { icon: <BookIcon width="20" height="20" color="#191919" strokeWidth="1.6" />, text: "Laparoscopic & Oncological Surgery" },
            { icon: <RibbonIcon />, text: "18+ years Experience" }
        ],
        badge: null
    },
    {
        img: faculty3,
        name: "Dr. Kavita Iyer",
        role: "Associate Professor",
        qualification: "Department of Physiology",
        details: [
            { icon: <HatIcon />, text: "MBBS, MD (Physiology)" },
            { icon: <BookIcon width="20" height="20" color="#191919" strokeWidth="1.6" />, text: "Cardiovascular Physiology" },
            { icon: <RibbonIcon />, text: "15+ years Experience" }
        ],
        badge: null
    }
];

const iconConfig = {
    color: "#191919",
    width: "20",
    height: "20",
    strokeWidth: "1.6"
};

const primaryButtonConfig = {
    text: "Email",
    icon: <EnvelopeIcon width="16" height="16" color="#364153" strokeWidth="1.6" />,
    className: "w-[146px] h-[50px] rounded-[9.04px] text-[16.28px] font-medium bg-[#EEF2F7] text-[#364153] border border-none hover:bg-[#E0E5EC] gap-[7px]"
};

const secondaryButtonConfig = {
    text: "View Profile",
    className: "w-[160px] h-[50px] rounded-[9.69px] text-[16.28px] font-normal bg-[#223F7F] text-white hover:bg-[#1a3163]"
};

const roleConfig = {
    color: "#223F7F",
    fontSize: "text-[16.28px]",
    fontWeight: "font-normal"
};

const ctaConfig = {
    bg: "#223F7F",
    color: "#FFFFFF",
    textSize: "text-[15.79px]",
    className: "rounded-[10px]",
    width: "179px",
    height: "48px",
    fontWeight: "font-semibold"
};

const spacingConfig = {
    paddingClass: "px-[24px] py-[26px]",
    headerGap: "gap-[10.9px]",
    nameMb: "mb-[10.9px]",
    roleMb: "mb-[10.9px]",
    qualificationMt: "mt-0",
    detailsMt: "mt-0",
    detailsGap: "gap-[10.9px]",
    buttonsMt: "mt-[21px]",
    buttonsPt: "pt-0",
    borderClass: "border-none"
};
import ResearchSection from "./sections/ResearchSection";



const GeneralSurgeryPage = () => {
    const { setHero, hideHero } = useHero();

    const generalSurgeryStats = [
        { value: "15+", label: "Years Average Experience", desc: "Senior faculty with proven surgical expertise" },
        { value: "5", label: "Faculty Members", desc: "Qualified surgeons and teaching staff" },
        { value: "100%", label: "Supervised Training", desc: "All clinical activities under faculty guidance" }
    ];

    useLayoutEffect(() => {
        setHero({
            title: (
                <span className="flex flex-col items-start text-left">
                    <TypedText
                        text="Department of"
                        className={`${T.font.family} font-regular text-[24px] sm:text-[32px] md:text-[38px] leading-[1.1] md:leading-[54px] mb-[0px] md:mb-[18px] text-white`}
                    />{" "}
                    <TypedText
                        text="General Surgery"
                        className={`${T.font.family} font-bold text-[28px] sm:text-[32px] md:text-[60px] leading-[1.1] md:leading-[54px] text-white`}
                        delay={1}
                    />
                </span>
            ),
            bgImage: GeneralSurgeryHero,
            isVisible: true,
            children: (
                <div className="max-w-[520px] text-left mt-0">
                    <p className={`${T.font.family} font-medium text-[16px] md:text-[22px] leading-[30px] text-white opacity-100`}>
                        Comprehensive surgical education integrated with clinical excellence. We train undergraduate and postgraduate students while delivering quality patient care across all surgical specialties under experienced faculty supervision.
                    </p>
                </div>
            )
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <div className="flex flex-col ">
            <DepartmentOverview />
            <AcademicsSection />
            <FacilitiesSection />
            <ServicesSection />
            <ConferencesSection />
            <FacultySpotlightSection
                heading="Department Faculty"
                facultyData={GeneralSurgeryFacultyData}
                footerStats={generalSurgeryStats}
                showCta={false}
                iconConfig={{
                    color: "#191919",
                    width: "20",
                    height: "20",
                    strokeWidth: "1.6"
                }}
                primaryButtonConfig={{
                    text: "Email",
                    icon: <EnvelopeIcon width="16" height="16" color="#364153" strokeWidth="1.6" />,
                    className: "w-[146px] h-[50px] rounded-[9.04px] text-[16.28px] font-medium bg-[#EEF2F7] text-[#364153] border border-none hover:bg-[#E0E5EC] gap-[7px]"
                }}
                secondaryButtonConfig={{
                    text: "View Profile",
                    className: "w-[160px] h-[50px] rounded-[9.69px] text-[16.28px] font-normal bg-[#223F7F] text-white hover:bg-[#1a3163]"
                }}
                roleConfig={{
                    color: "#223F7F",
                    fontSize: "text-[16.28px]",
                    fontWeight: "font-normal"
                }}
                ctaConfig={{
                    bg: "#223F7F",
                    color: "#FFFFFF",
                    textSize: "text-[15.79px]",
                    className: "rounded-[10px]",
                    width: "179px",
                    height: "48px",
                    fontWeight: "font-semibold"
                }}
                spacingConfig={{
                    paddingClass: "px-[24px] py-[26px]",
                    headerGap: "gap-[10.9px]",
                    nameMb: "mb-[10.9px]",
                    roleMb: "mb-[10.9px]",
                    qualificationMt: "mt-0",
                    detailsMt: "mt-0",
                    detailsGap: "gap-[10.9px]",
                    buttonsMt: "mt-[21px]",
                    buttonsPt: "pt-0",
                    borderClass: "border-none"
                }}
                cardBorder="border border-[#D0D7E2]"
            />
            <ResearchSection />
        </div>
    );
};

export default GeneralSurgeryPage;
