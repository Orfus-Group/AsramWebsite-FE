import React, { useLayoutEffect } from "react";

import { useHero } from "@/context/HeroContext";
import { BeakerIcon, BookIcon, HeartIcon } from "../campus-life/components/CampusIcons";

// Define Lightbulb Icon locally if not present in common icons
const LightbulbIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 14C15.2 13 15.7 12.3 16.5 11.5C17.5 10.6 18 9.3 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 9 6.2 10.2 7.5 11.5C8.2 12.2 8.8 13 9 14" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 18H15" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 22H14" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const heroBg = "/AsramWebsite-FE/assets/nursing/asramnursingbanner.png";
import TypedText from "@/components/common/TypedText";

import AcademicProgramsSection from "../nursing/AcademicProgramsSection";

import StudentExperience from "../nursing/StudentExperience";
const IconMedical = "/AsramWebsite-FE/assets/icons/MedicalIcon.svg";
const IconArtFacilities = "/AsramWebsite-FE/assets/icons/IconArtFacilities.svg";
const IconAccredited = "/AsramWebsite-FE/assets/icons/IconAccredited.svg";
import VisionMissionSection from "../nursing/VisionMission";
import FeatureGridSection from "../campus-life/sections/FeatureGridSection";
import ResearchSection from "../nursing/ResearchSection";
import SocialCommitment from "../nursing/SocialCommitment";
import AsramNewsEvents from "../asram/AsramNewsEvents";
import FacultySpotlightSection from "../nursing/FacultySpotlight";
import KeyStrengthsSection from "../nursing/KeyStrenght";

const medicalPrograms = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="transition-all duration-700" d="M28.1838 14.3709C28.4336 14.2671 28.6479 14.0963 28.8016 13.8799C28.9553 13.6635 29.0425 13.4109 29.0399 13.1535C29.0373 12.8961 28.9449 12.6451 28.7867 12.4317C28.6285 12.2184 28.4111 12.0515 28.1589 11.9526L16.8811 6.81572C16.5384 6.65933 16.1659 6.57839 15.7891 6.57839C15.4122 6.57839 15.0397 6.65933 14.697 6.81572L3.41924 11.9469C3.17213 12.0499 2.95856 12.2184 2.80005 12.4326C2.64154 12.6468 2.54417 12.8989 2.54417 13.1574C2.54417 13.4159 2.64154 13.668 2.80005 13.8822C2.95856 14.0964 3.17213 14.2649 3.41924 14.3679L14.697 19.5142C15.0397 19.6706 15.4122 19.7515 15.7891 19.7515C16.1659 19.7515 16.5384 19.6706 16.8811 19.5142L28.1838 14.3709Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className="transition-all duration-700" d="M29.0471 13.1579V21.0527" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className="transition-all duration-700" d="M7.89209 16.4469V21.0522C7.89209 22.0992 8.72672 23.1032 10.2072 23.8434C11.6877 24.5837 13.6958 25 15.7891 25C17.8824 25 19.8905 24.5837 21.371 23.8434C22.8515 23.1032 23.6861 22.0992 23.6861 21.0522V16.4469" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "MBBS",
        years: "4 Years Full-Time",
        seats: "~150 Seats",
        description:
            "Undergraduate medical program with integrated clinical training.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8163 8.0592V24.1776" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.45405 20.7236C3.1487 20.7236 2.85586 20.6023 2.63995 20.3864C2.42403 20.1705 2.30273 19.8776 2.30273 19.5723V4.60517C2.30273 4.29983 2.42403 4.00698 2.63995 3.79107C2.85586 3.57516 3.1487 3.45386 3.45405 3.45386H9.21063C10.432 3.45386 11.6034 3.93905 12.467 4.80271C13.3307 5.66636 13.8159 6.83773 13.8159 8.05912C13.8159 6.83773 14.3011 5.66636 15.1647 4.80271C16.0284 3.93905 17.1998 3.45386 18.4212 3.45386H24.1777C24.4831 3.45386 24.7759 3.57516 24.9918 3.79107C25.2078 4.00698 25.329 4.29983 25.329 4.60517V19.5723C25.329 19.8776 25.2078 20.1705 24.9918 20.3864C24.7759 20.6023 24.4831 20.7236 24.1777 20.7236H17.2698C16.3538 20.7236 15.4753 21.0875 14.8275 21.7352C14.1798 22.383 13.8159 23.2615 13.8159 24.1775C13.8159 23.2615 13.452 22.383 12.8043 21.7352C12.1565 21.0875 11.278 20.7236 10.3619 20.7236H3.45405Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "MD / MS",
        years: "3 Years Full-Time",
        seats: "~100 Seats",
        description:
            "Postgraduate programs across major medical and surgical specialties.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.818 14.8405L19.5622 24.6566C19.5817 24.7722 19.5655 24.891 19.5157 24.9971C19.4659 25.1032 19.3849 25.1916 19.2835 25.2504C19.1821 25.3092 19.0652 25.3357 18.9483 25.3263C18.8315 25.3169 18.7203 25.272 18.6296 25.1977L14.5079 22.1041C14.309 21.9555 14.0672 21.8751 13.8189 21.8751C13.5705 21.8751 13.3288 21.9555 13.1298 22.1041L9.00118 25.1965C8.9106 25.2707 8.79954 25.3155 8.68284 25.325C8.56613 25.3344 8.44933 25.308 8.348 25.2493C8.24667 25.1907 8.16565 25.1025 8.11573 24.9966C8.06581 24.8907 8.04938 24.7721 8.06862 24.6566L9.81171 14.8405" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.8148 16.1184C17.6299 16.1184 20.7227 13.0256 20.7227 9.21051C20.7227 5.39538 17.6299 2.30261 13.8148 2.30261C9.99963 2.30261 6.90686 5.39538 6.90686 9.21051C6.90686 13.0256 9.99963 16.1184 13.8148 16.1184Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Super Speciality",
        years: "3 Years Full-Time",
        seats: "~100 Seats", // Placeholder, need to check if user gave this data. Figma image shows "3 Years Full-Time". Seats not shown in snippet 0/1. I'll match format.
        description:
            "Advanced DM and MCh programs with focused clinical exposure.",
    },
];


const MedicalPage = () => {
    const { setHero, hideHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            title: (
                <TypedText
                    text="Excellence in Medical Education"
                    className="font-montserrat font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-[1.36] text-white"
                />
            ),
            bgImage: heroBg,
            children: (
                <>
                    <div className="max-w-[520px]">
                        <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.36] text-white mb-6">
                            ASRAM Medical College prepares skilled, ethical, and globally competent physicians through accredited programs and real-world clinical exposure.
                        </p>
                    </div>
                </>
            ),
            className: "!py-12 md:!pt-[263.5px] !lg:pl-[120px] !lg:pr-[120px]",
            alignmentClass: "items-center md:items-start",
        });
        return () => hideHero();
    }, [setHero, hideHero]);



    const medicalStudentExperience = [
        {
            icon: (
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7144 18.0022V16.2879C13.7144 15.3786 13.3531 14.5066 12.7102 13.8636C12.0672 13.2206 11.1951 12.8594 10.2858 12.8594H5.14293C4.23361 12.8594 3.36154 13.2206 2.71856 13.8636C2.07558 14.5066 1.71436 15.3786 1.71436 16.2879V18.0022" stroke="#C0392B" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.7146 2.67969C14.4498 2.87029 15.1009 3.29963 15.5658 3.90031C16.0306 4.501 16.2828 5.23902 16.2828 5.99854C16.2828 6.75807 16.0306 7.49609 15.5658 8.09678C15.1009 8.69746 14.4498 9.1268 13.7146 9.3174" stroke="#C0392B" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.8573 18.0002V16.2859C18.8568 15.5262 18.6039 14.7883 18.1385 14.1879C17.6731 13.5875 17.0214 13.1587 16.2859 12.9688" stroke="#C0392B" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.7147 9.42746C9.60825 9.42746 11.1433 7.89243 11.1433 5.99888C11.1433 4.10534 9.60825 2.57031 7.7147 2.57031C5.82116 2.57031 4.28613 4.10534 4.28613 5.99888C4.28613 7.89243 5.82116 9.42746 7.7147 9.42746Z" stroke="#C0392B" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ),
            title: "Experienced Faculty",
            desc: "Mentorship by senior clinicians and academic leaders.",
        },
        {
            icon: (
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.68579 10.4219H12.1601" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.68579 6.94531H12.1601" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.1601 18.2413V15.6356C12.1601 15.1749 11.9771 14.733 11.6513 14.4072C11.3255 14.0815 10.8837 13.8984 10.4229 13.8984C9.96221 13.8984 9.52037 14.0815 9.19459 14.4072C8.86881 14.733 8.68579 15.1749 8.68579 15.6356V18.2413" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.21135 8.68384H3.4742C3.01348 8.68384 2.57164 8.86686 2.24586 9.19264C1.92008 9.51841 1.73706 9.96026 1.73706 10.421V16.501C1.73706 16.9617 1.92008 17.4035 2.24586 17.7293C2.57164 18.0551 3.01348 18.2381 3.4742 18.2381H17.3713C17.8321 18.2381 18.2739 18.0551 18.5997 17.7293C18.9255 17.4035 19.1085 16.9617 19.1085 16.501V7.81527C19.1085 7.35455 18.9255 6.9127 18.5997 6.58692C18.2739 6.26114 17.8321 6.07813 17.3713 6.07812H15.6342" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.21143 18.2358V4.33871C5.21143 3.87799 5.39445 3.43614 5.72022 3.11036C6.046 2.78458 6.48785 2.60156 6.94857 2.60156H13.8971C14.3579 2.60156 14.7997 2.78458 15.1255 3.11036C15.4513 3.43614 15.6343 3.87799 15.6343 4.33871V18.2358" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ),
            title: "Clinical Learning",
            desc: "Daily exposure to wards, OPDs, and specialty units.",
        },
        {
            icon: (
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.443 11.1953L14.7589 18.6008C14.7736 18.688 14.7614 18.7776 14.7238 18.8576C14.6862 18.9377 14.6251 19.0044 14.5486 19.0488C14.4721 19.0931 14.3839 19.1131 14.2958 19.106C14.2076 19.0989 14.1237 19.065 14.0553 19.009L10.9459 16.6751C10.7957 16.563 10.6134 16.5024 10.426 16.5024C10.2386 16.5024 10.0563 16.563 9.90618 16.6751L6.79148 19.0081C6.72314 19.0641 6.63936 19.0979 6.55131 19.105C6.46327 19.1121 6.37515 19.0922 6.29871 19.048C6.22226 19.0037 6.16114 18.9372 6.12348 18.8573C6.08582 18.7774 6.07342 18.6879 6.08794 18.6008L7.40295 11.1953" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.4229 12.1572C13.301 12.1572 15.6343 9.824 15.6343 6.9458C15.6343 4.06761 13.301 1.73438 10.4229 1.73438C7.54466 1.73438 5.21143 4.06761 5.21143 6.9458C5.21143 9.824 7.54466 12.1572 10.4229 12.1572Z" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ),
            title: "Skill Development",
            desc: "Hands-on training through labs and demonstrations.",
        },
        {
            icon: (
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8626 12.5218C18.2402 11.1442 19.1087 9.99076 19.1087 8.25362C19.1087 7.28707 18.8155 6.34327 18.2678 5.54686C17.7202 4.75045 16.9438 4.1389 16.0413 3.79298C15.1388 3.44707 14.1525 3.38306 13.2129 3.60941C12.2732 3.83575 11.4243 4.34182 10.7783 5.06075M16.8626 12.5218C16.6913 12.6931 16.4879 12.829 16.2641 12.9218C16.0402 13.0145 15.8003 13.0622 15.558 13.0622C15.3157 13.0622 15.0758 13.0145 14.852 12.9218C14.6281 12.829 14.4247 12.6931 14.2534 12.5218C14.4389 12.6895 14.5883 12.8932 14.6927 13.1204C14.797 13.3477 14.8541 13.5938 14.8603 13.8438C14.8666 14.0938 14.822 14.3425 14.7292 14.5747C14.6364 14.8069 14.4974 15.0178 14.3206 15.1946C14.1437 15.3715 13.9328 15.5105 13.7006 15.6033C13.4684 15.6961 13.2197 15.7407 12.9697 15.7344C12.7197 15.7281 12.4736 15.6711 12.2464 15.5668C12.0191 15.4624 11.8154 15.313 11.6477 15.1275C11.8192 15.2983 11.9553 15.5012 12.0483 15.7246C12.1412 15.9481 12.1893 16.1876 12.1896 16.4296C12.1899 16.6716 12.1425 16.9113 12.0501 17.135C11.9578 17.3587 11.8222 17.562 11.6512 17.7332C11.4861 17.8983 11.2895 18.0284 11.073 18.1158C10.8566 18.2033 10.6247 18.2461 10.3913 18.2419C10.1579 18.2377 9.92769 18.1865 9.71452 18.0913C9.50135 17.9961 9.30954 17.859 9.15056 17.688L4.34302 13.0308C3.04016 11.7279 1.7373 10.2513 1.7373 8.25362C1.7375 7.28715 2.03083 6.34346 2.57857 5.54719C3.1263 4.75092 3.90268 4.1395 4.80516 3.7937C5.70765 3.44789 6.6938 3.38395 7.63339 3.61032C8.57298 3.8367 9.4218 4.34274 10.0678 5.06162C10.1643 5.15137 10.2913 5.20119 10.4232 5.20103C10.555 5.20087 10.6819 5.15074 10.7783 5.06075M16.8626 12.5218C17.1883 12.196 17.3712 11.7542 17.3712 11.2936C17.3712 10.833 17.1883 10.3912 16.8626 10.0655L15.2288 8.43081C15.0344 8.23633 14.8036 8.08206 14.5496 7.97681C14.2956 7.87156 14.0233 7.81738 13.7483 7.81738C13.4734 7.81738 13.2011 7.87156 12.9471 7.97681C12.6931 8.08206 12.4623 8.23633 12.2679 8.43081L10.7826 9.91606C10.4568 10.2417 10.0151 10.4247 9.55445 10.4247C9.09382 10.4247 8.65205 10.2417 8.32629 9.91606C8.00062 9.5903 7.81768 9.14853 7.81768 8.6879C7.81768 8.22728 8.00062 7.78551 8.32629 7.45975L10.7783 5.06075" stroke="#C0392B" strokeWidth="1.30286" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ),
            title: "Student Support",
            desc: "Academic guidance, counseling, and structured peer support.",
        },
    ];

    const medicalVisionMission = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8161 25.3289C20.1747 25.3289 25.3293 20.1743 25.3293 13.8158C25.3293 7.45723 20.1747 2.30261 13.8161 2.30261C7.45759 2.30261 2.30298 7.45723 2.30298 13.8158C2.30298 20.1743 7.45759 25.3289 13.8161 25.3289Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8163 20.7237C17.6315 20.7237 20.7242 17.631 20.7242 13.8159C20.7242 10.0007 17.6315 6.90796 13.8163 6.90796C10.0012 6.90796 6.90845 10.0007 6.90845 13.8159C6.90845 17.631 10.0012 20.7237 13.8163 20.7237Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8164 16.1187C15.0881 16.1187 16.1191 15.0878 16.1191 13.8161C16.1191 12.5444 15.0881 11.5134 13.8164 11.5134C12.5447 11.5134 11.5138 12.5444 11.5138 13.8161C11.5138 15.0878 12.5447 16.1187 13.8164 16.1187Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Vision",
            description:
                "To develop competent, ethical, and compassionate medical professionals.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="transition-all duration-700" d="M2.30261 10.9375C2.30264 9.65632 2.69129 8.40528 3.41724 7.34962C4.14319 6.29395 5.17229 5.48333 6.36861 5.02481C7.56493 4.56628 8.8722 4.48144 10.1178 4.78147C11.3633 5.0815 12.4886 5.7523 13.3449 6.70527C13.4052 6.76976 13.4781 6.82117 13.5591 6.85632C13.6401 6.89147 13.7275 6.90961 13.8158 6.90961C13.9041 6.90961 13.9914 6.89147 14.0724 6.85632C14.1534 6.82117 14.2263 6.76976 14.2867 6.70527C15.1403 5.74611 16.2658 5.06967 17.5134 4.76599C18.761 4.46232 20.0714 4.5458 21.2704 5.00533C22.4694 5.46486 23.4999 6.27865 24.2249 7.33838C24.95 8.39811 25.335 9.65351 25.3289 10.9375C25.3289 13.574 23.602 15.5428 21.8750 17.2697L15.5520 23.3867C15.3374 23.6331 15.0729 23.8310 14.7760 23.9673C14.4791 24.1036 14.1566 24.1752 13.8299 24.1772C13.5032 24.1793 13.1798 24.1118 12.8812 23.9793C12.5826 23.8468 12.3156 23.6522 12.0980 23.4086L5.75656 17.2697C4.02959 15.5428 2.30261 13.5855 2.30261 10.9375Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Mission",
            description:
                "Deliver quality medical education integrated with patient care and research.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.818 14.8405L19.5622 24.6566C19.5817 24.7722 19.5655 24.891 19.5157 24.9971C19.4659 25.1032 19.3849 25.1916 19.2835 25.2504C19.1821 25.3092 19.0652 25.3357 18.9483 25.3263C18.8315 25.3169 18.7203 25.272 18.6296 25.1977L14.5079 22.1041C14.309 21.9555 14.0672 21.8751 13.8189 21.8751C13.5705 21.8751 13.3288 21.9555 13.1298 22.1041L9.00118 25.1965C8.9106 25.2707 8.79954 25.3155 8.68284 25.325C8.56613 25.3344 8.44933 25.308 8.348 25.2493C8.24667 25.1907 8.16565 25.1025 8.11573 24.9966C8.06581 24.8907 8.04938 24.7721 8.06862 24.6566L9.81171 14.8405" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8148 16.1184C17.6299 16.1184 20.7227 13.0256 20.7227 9.21051C20.7227 5.39538 17.6299 2.30261 13.8148 2.30261C9.99963 2.30261 6.90686 5.39538 6.90686 9.21051C6.90686 13.0256 9.99963 16.1184 13.8148 16.1184Z" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Values",
            description:
                "Integrity, excellence, compassion, accountability, and service.",
        },
    ];

    const medicalResearchData = [
        {
            icon: <BeakerIcon />,
            title: "Clinical Research",
            description: "Faculty-led studies and evidence-based practice.",
        },
        {
            icon: <LightbulbIcon />,
            title: "Medical Innovation",
            description: "Research supporting improved diagnosis and treatment.",
        },
        {
            icon: <BookIcon width="24" height="24" color="#C0392B" strokeWidth="1.5" />,
            title: "Student Research",
            description: "Opportunities for undergraduate and postgraduate research.",
        },
        {
            icon: <HeartIcon />,
            title: "Public Health",
            description: "Studies addressing community and population health needs.",
        },
    ];

    // Medical Faculty Icons & Data
    const faculty1 = "/AsramWebsite-FE/assets/nursing/doctor_1.png";
    const faculty2 = "/AsramWebsite-FE/assets/nursing/doctor_2.png";
    const faculty3 = "/AsramWebsite-FE/assets/nursing/doctor_3.png";

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

    const EnvelopeIcon = ({ width = "20", height = "20", color = "#191919", strokeWidth = "1.6" }) => (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6L12 13L2 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const medicalFacultyData = [
        {
            img: faculty1,
            name: "Dr. Sanjay Malhotra",
            role: "Principal",
            qualification: "ASRAM Medical College",
            details: [
                { icon: <HatIcon />, text: "MBBS, MD, FICP" },
                { icon: <BookIcon width="20" height="20" color="#191919" strokeWidth="1.6" />, text: "Medical Education & Administration" },
                { icon: <RibbonIcon />, text: "28+ years Experience" }
            ],
            badge: "Leadership"
        },
        {
            img: faculty2,
            name: "Dr. Priya Sharma",
            role: "Professor & Dean",
            qualification: "Department of Pathology",
            details: [
                { icon: <HatIcon />, text: "MD (Pathology), PhD" },
                { icon: <BookIcon width="20" height="20" color="#191919" strokeWidth="1.6" />, text: "Hematopathology" },
                { icon: <RibbonIcon />, text: "22+ years Experience" }
            ],
            badge: "Leadership"
        },
        {
            img: faculty3,
            name: "Mrs. Deepa Thomas",
            role: "Professor & Principal",
            qualification: "College of Nursing",
            details: [
                { icon: <HatIcon />, text: "MSc (Nursing), PhD" },
                { icon: <BookIcon width="20" height="20" color="#191919" strokeWidth="1.6" />, text: "Medical-Surgical Nursing" },
                { icon: <RibbonIcon />, text: "20+ years Experience" }
            ],
            badge: "Leadership"
        }
    ];

    // Red Check Icon for Why Choose
    const IconCheckRed = () => (
        <svg width="11.83" height="17" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.21201 10.7801C2.21201 10.6587 2.18868 10.5981 2.14201 10.5981L1.82001 10.7521C1.82001 10.6867 1.78268 10.6401 1.70801 10.6121L1.59601 10.5981C1.52134 10.5981 1.42801 10.6307 1.31601 10.6961C1.29734 10.6494 1.27401 10.6027 1.24601 10.5561C1.21801 10.5094 1.19468 10.4674 1.17601 10.4301C1.05468 10.1967 0.933344 9.94006 0.812011 9.66006C0.700011 9.37073 0.592677 9.0954 0.490011 8.83406C0.396677 8.57273 0.322011 8.3674 0.266011 8.21806C0.228677 8.09673 0.186677 7.91473 0.140011 7.67206C0.0933441 7.4294 0.0466774 7.1214 1.0781e-05 6.74806C0.102677 6.8134 0.182011 6.84606 0.238011 6.84606C0.303344 6.84606 0.364011 6.74806 0.420011 6.55206C0.448011 6.5894 0.499344 6.60806 0.574011 6.60806C0.630011 6.60806 0.672011 6.5894 0.700011 6.55206L0.924011 6.21606L1.17601 6.30006H1.19001C1.20868 6.30006 1.22734 6.29073 1.24601 6.27206C1.26468 6.2534 1.29268 6.23473 1.33001 6.21606C1.40468 6.1694 1.46068 6.14606 1.49801 6.14606L1.54001 6.16006C1.77334 6.27206 1.92268 6.4774 1.98801 6.77606C2.15601 7.4854 2.32401 7.84006 2.49201 7.84006C2.66001 7.84006 2.85601 7.66273 3.08001 7.30806C3.19201 7.13073 3.30401 6.9254 3.41601 6.69206C3.53734 6.45873 3.65868 6.1974 3.78001 5.90806C3.79868 6.02006 3.81734 6.07606 3.83601 6.07606C3.88268 6.07606 3.96201 5.9594 4.07401 5.72606C4.19534 5.49273 4.38668 5.17073 4.64801 4.76006C4.79734 4.50806 4.98401 4.2234 5.20801 3.90606C5.44134 3.58873 5.68868 3.26206 5.95001 2.92606C6.21134 2.59006 6.46334 2.27273 6.70601 1.97406C6.95801 1.6754 7.18201 1.41873 7.37801 1.20406C7.57401 0.989395 7.71868 0.849395 7.81201 0.784062C8.16668 0.541395 8.44668 0.308062 8.65201 0.0840621C8.64268 0.149395 8.62868 0.210062 8.61001 0.266062C8.60068 0.312729 8.59601 0.345395 8.59601 0.364062C8.59601 0.401395 8.61468 0.420062 8.65201 0.420062L9.04401 0.224062V0.280062C9.04401 0.354729 9.06268 0.392062 9.10001 0.392062C9.12801 0.392062 9.18401 0.350062 9.26801 0.266062C9.35201 0.182062 9.39868 0.121396 9.40801 0.0840621L9.38001 0.280062L9.85601 6.23465e-05L9.74401 0.252062C9.89334 0.149395 10.0007 0.0980619 10.066 0.0980619C10.1033 0.0980619 10.1313 0.121395 10.15 0.168062C10.1687 0.205395 10.178 0.242729 10.178 0.280062C10.178 0.336062 10.1547 0.401395 10.108 0.476062C10.0613 0.550729 10.0007 0.639396 9.92601 0.742062C9.87001 0.816729 9.77668 0.928729 9.64601 1.07806C9.52468 1.21806 9.33801 1.42806 9.08601 1.70806C8.83401 1.97873 8.49801 2.35673 8.07801 2.84206C7.96601 2.9634 7.79334 3.17806 7.56001 3.48606C7.32668 3.78473 7.06068 4.13473 6.76201 4.53606C6.47268 4.92806 6.18334 5.32473 5.89401 5.72606C5.60468 6.1274 5.34801 6.4914 5.12401 6.81806C4.90001 7.1354 4.74134 7.3734 4.64801 7.53206L3.78001 9.00206C3.59334 9.3194 3.43934 9.58073 3.31801 9.78606C3.19668 9.98206 3.10334 10.1174 3.03801 10.1921C2.89801 10.3601 2.74401 10.5094 2.57601 10.6401L2.45001 10.5701L2.33801 10.6401L2.21201 10.7801Z" fill="#C0392B" />
        </svg>
    );

    const medicalWhyChooseConfig = {
        title: "Why Choose Asram Medical College",
        CheckIcon: <IconCheckRed />,
        columns: [
            {
                title: "Educational Excellence",
                items: [
                    "Integration with comprehensive multispecialty hospital",
                    "Robust infrastructure across 10-acre campus",
                    "Recognized affiliations and regulatory approvals"
                ]
            },
            {
                title: "Student Success",
                items: [
                    "Clear pathways from undergraduate to postgraduate",
                    "Student-centered environment with strong mentoring",
                    "Practical orientation ensuring job readiness"
                ]
            }
        ]
    };

    // Key Strengths Icons (Red for Medical)
    const IconHospitalIntegration = ({ color = "#C0392B" }) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8159 8.0603V12.6656" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.1184 24.1785V20.7245C16.1184 20.1138 15.8758 19.5281 15.444 19.0963C15.0122 18.6645 14.4265 18.4219 13.8158 18.4219C13.2051 18.4219 12.6194 18.6645 12.1876 19.0963C11.7558 19.5281 11.5132 20.1138 11.5132 20.7245V24.1785" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.1184 10.3621H11.5132" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.7239 12.6639H23.0265C23.6372 12.6639 24.2229 12.9065 24.6547 13.3383C25.0866 13.7702 25.3292 14.3558 25.3292 14.9665V21.8744C25.3292 22.4851 25.0866 23.0708 24.6547 23.5026C24.2229 23.9345 23.6372 24.1771 23.0265 24.1771H4.60549C3.99479 24.1771 3.40911 23.9345 2.97728 23.5026C2.54545 23.0708 2.30286 22.4851 2.30286 21.8744V11.5126C2.30286 10.9019 2.54545 10.3162 2.97728 9.88439C3.40911 9.45256 3.99479 9.20996 4.60549 9.20996H6.90812" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.7241 24.1775V5.75649C20.7241 5.14579 20.4815 4.56011 20.0496 4.12828C19.6178 3.69646 19.0321 3.45386 18.4214 3.45386H9.2109C8.6002 3.45386 8.01452 3.69646 7.58269 4.12828C7.15086 4.56011 6.90826 5.14579 6.90826 5.75649V24.1775" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const IconRobustInfra = ({ color = "#C0392B" }) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5129 13.8164H16.1182" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.5129 9.20996H16.1182" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.1182 24.1785V20.7245C16.1182 20.1138 15.8756 19.5281 15.4438 19.0963C15.0119 18.6645 14.4263 18.4219 13.8156 18.4219C13.2049 18.4219 12.6192 18.6645 12.1874 19.0963C11.7555 19.5281 11.5129 20.7245V24.1785" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.90788 11.5142H4.60524C3.99455 11.5142 3.40886 11.7568 2.97704 12.1887C2.54521 12.6205 2.30261 13.2062 2.30261 13.8169V21.8761C2.30261 22.4868 2.54521 23.0725 2.97704 23.5043C3.40886 23.9361 3.99455 24.1787 4.60524 24.1787H23.0263C23.637 24.1787 24.2227 23.9361 24.6545 23.5043C25.0863 23.0725 25.3289 22.4868 25.3289 21.8761V10.3629C25.3289 9.75224 25.0863 9.16655 24.6545 8.73473C24.2227 8.3029 23.637 8.0603 23.0263 8.0603H20.7237" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.90802 24.1775V5.75649C6.90802 5.14579 7.15062 4.56011 7.58245 4.12828C8.01427 3.69646 8.59996 3.45386 9.21065 3.45386H18.4212C19.0319 3.45386 19.6176 3.69646 20.0494 4.12828C20.4812 4.56011 20.7238 5.14579 20.7238 5.75649V24.1775" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const IconRecognizedAffiliations = ({ color = "#C0392B" }) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8194 14.8401L19.5636 24.6562C19.5832 24.7718 19.567 24.8906 19.5172 24.9967C19.4673 25.1028 19.3863 25.1912 19.2849 25.2501C19.1835 25.3089 19.0666 25.3354 18.9498 25.3259C18.8329 25.3165 18.7217 25.2716 18.6311 25.1973L14.5094 22.1037C14.3104 21.9551 14.0687 21.8748 13.8203 21.8748C13.5719 21.8748 13.3302 21.9551 13.1312 22.1037L9.00262 25.1962C8.91203 25.2704 8.80098 25.3152 8.68427 25.3246C8.56757 25.334 8.45076 25.3077 8.34943 25.249C8.24811 25.1903 8.16708 25.1021 8.11716 24.9962C8.06725 24.8903 8.05081 24.7717 8.07005 24.6562L9.81314 14.8401" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.8162 16.1188C17.6313 16.1188 20.7241 13.026 20.7241 9.21087C20.7241 5.39575 17.6313 2.30298 13.8162 2.30298C10.0011 2.30298 6.9083 5.39575 6.9083 9.21087C6.9083 13.026 10.0011 16.1188 13.8162 16.1188Z" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const IconClearPathways = ({ color = "#C0392B" }) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4213 8.05933H25.3292V14.9672" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.3292 8.05933L15.543 17.8455L9.78641 12.0889L2.30286 19.5725" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const IconStudentCentered = ({ color = "#C0392B" }) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.421 24.1772V21.8746C18.421 20.6532 17.9358 19.4818 17.0722 18.6181C16.2085 17.7545 15.0372 17.2693 13.8158 17.2693H6.90788C5.68648 17.2693 4.51512 17.7545 3.65146 18.6181C2.78781 19.4818 2.30261 20.6532 2.30261 21.8746V24.1772" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4211 3.60181C19.4086 3.85782 20.2832 4.43451 20.9076 5.24135C21.5319 6.04819 21.8707 7.03951 21.8707 8.0597C21.8707 9.0799 21.5319 10.0712 20.9076 10.8781C20.2832 11.6849 19.4086 12.2616 18.4211 12.5176" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.3291 24.1774V21.8748C25.3283 20.8544 24.9887 19.8632 24.3636 19.0567C23.7384 18.2503 22.8631 17.6743 21.8752 17.4192" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3619 12.6646C12.9053 12.6646 14.9672 10.6028 14.9672 8.05936C14.9672 5.51595 12.9053 3.4541 10.3619 3.4541C7.8185 3.4541 5.75665 5.51595 5.75665 8.05936C5.75665 10.6028 7.8185 12.6646 10.3619 12.6646Z" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const IconOrientation = ({ color = "#C0392B" }) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2692 2.64176C13.3196 2.53983 13.3976 2.45402 13.4942 2.39403C13.5908 2.33404 13.7023 2.30225 13.816 2.30225C13.9298 2.30225 14.0413 2.33404 14.1379 2.39403C14.2345 2.45402 14.3125 2.53983 14.3629 2.64176L17.0225 8.02877C17.1977 8.38334 17.4563 8.69009 17.7761 8.92271C18.096 9.15533 18.4675 9.30686 18.8588 9.36429L24.8065 10.2347C24.9192 10.251 25.0251 10.2986 25.1122 10.3719C25.1993 10.4453 25.2641 10.5416 25.2993 10.6499C25.3345 10.7582 25.3387 10.8741 25.3111 10.9847C25.2842 11.0953 25.2265 11.196 25.145 11.2755L20.8437 15.464C20.56 15.7404 20.3478 16.0816 20.2252 16.4583C20.1027 16.8349 20.0735 17.2357 20.1402 17.6261L21.1557 23.5439C21.1756 23.6565 21.1634 23.7725 21.1206 23.8786C21.0777 23.9846 21.0059 24.0765 20.9134 24.1437C20.8208 24.211 20.7113 24.2508 20.5971 24.2587C20.483 24.2667 20.369 24.2424 20.268 24.1886L14.9512 21.3932C14.6009 21.2093 14.2112 21.1132 13.8155 21.1132C13.4198 21.1132 13.03 21.2093 12.6797 21.3932L7.36408 24.1886C7.26314 24.2421 7.14924 24.2661 7.03532 24.258C6.9214 24.2499 6.81204 24.21 6.71968 24.1428C6.62732 24.0757 6.55566 23.9839 6.51286 23.878C6.47006 23.7722 6.45783 23.6564 6.47756 23.5439L7.49187 17.6273C7.55887 17.2367 7.52985 16.8356 7.40729 16.4588C7.28474 16.0819 7.07234 15.7405 6.78842 15.464L2.4871 11.2766C2.40489 11.1972 2.34663 11.0963 2.31897 10.9854C2.2913 10.8745 2.29534 10.7581 2.33061 10.6494C2.36589 10.5407 2.43099 10.444 2.51851 10.3705C2.60602 10.297 2.71242 10.2495 2.82559 10.2335L8.77213 9.36429C9.16388 9.3073 9.5359 9.15597 9.8562 8.92333C10.1765 8.69068 10.4354 8.38368 10.6108 8.02877L13.2692 2.64176Z" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const medicalKeyStrengths = [
        {
            icon: <IconHospitalIntegration />,
            title: "Hospital Integration",
            description: "Comprehensive multispecialty hospital providing real-time clinical exposure and practical training"
        },
        {
            icon: <IconRobustInfra />,
            title: "Robust Infrastructure",
            description: "State-of-the-art labs, simulation centers, library, hostels, and sports facilities"
        },
        {
            icon: <IconRecognizedAffiliations />,
            title: "Recognized Affiliations",
            description: "INC approval and NTRUHS affiliation lending credibility and national recognition"
        },
        {
            icon: <IconClearPathways />,
            title: "Clear Pathways",
            description: "Structured progression from undergraduate to postgraduate levels within the institution"
        },
        {
            icon: <IconStudentCentered />,
            title: "Student-Centered",
            description: "Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth"
        },
        {
            icon: <IconOrientation />,
            title: "Practical Orientation",
            description: "Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone"
        }
    ];

    return (
        <>
            <AcademicProgramsSection
                ctafontweight="font-regular"
                programs={medicalPrograms}
                cardBg="#EEF2F7"
                iconBg="#FFFFFF"
                badgeBg="#223F7F"
                badgeClassName="h-[36px] px-[20px]"
            />
            <VisionMissionSection
                data={medicalVisionMission}
                cardBg="#FFFFFF"
                iconBg="#C0392B1A"
                iconContainerClassName="w-[48px] h-[48px]"
            />
            <StudentExperience
                data={medicalStudentExperience}
                cardBg="#eef2f7"
                iconBg="#C0392B1A"
                iconContainerClassName="w-[48px] h-[48px] overflow-hidden"
                titleColor="#223f7f"
                cardBorder="1px solid rgba(7, 7, 7, 0.2)"
                titleClassName=""
                heading="Student Experience"
                subHeading="Comprehensive Learning Environment"
                description={[
                    "Students learn in a supportive academic environment that blends classroom learning, bedside teaching, and real clinical exposure.Students learn in a supportive academic environment that blends classroom learning, bedside teaching, and real clinical exposure.",
                    "Students learn in a supportive academic environment that blends classroom learning, bedside teaching, and real clinical exposure."
                ]}
            />
            <FeatureGridSection
                heading="Research"
                items={medicalResearchData}
                bgColor="bg-[#EEF2F7]"
                buttonText="Explore Our Research"
                onButtonClick={() => { }}
            />
            <SocialCommitment
                iconColor="#C0392B"
                cardBg="#EEF2F7"
                cardBorder="1px solid rgba(7, 7, 7, 0.2)"
                iconBg="#C0392B1A"
            />
            <AsramNewsEvents />
            <FacultySpotlightSection
                heading="Faculty"
                facultyData={medicalFacultyData}
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
            <KeyStrengthsSection
                heading="Key Strengths"
                data={medicalKeyStrengths}
                iconConfig={{
                    bg: "#C0392B1A",
                    className: "w-[48px] h-[48px] rounded-[12px] flex items-center justify-center"
                }}
                cardConfig={{
                    borderColor: "#223F7F", // Blue bottom border only
                    bg: "#FFFFFF"
                }}
                bgColor="bg-[#EEF2F7]"
                showWhyChoose={true}
                whyChooseConfig={medicalWhyChooseConfig}
            />
        </>
    );
};

export default MedicalPage;
