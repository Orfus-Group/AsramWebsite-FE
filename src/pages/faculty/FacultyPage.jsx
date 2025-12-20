import React, { useLayoutEffect } from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import Facultyimg from "@/assets/faculty/faculty.png";
import {
    IconFilter,
    IconBack,
    IconCalendar,
    IconClock,
    IconShare,
    IconUser,
    IconTag
} from "@/assets/icons";
import { useHero } from "@/context/HeroContext";
import FacultyHerobg from "@/assets/faculty/asramfacultyherobanner.png";

// Placeholder icons for Contact/Awards since they might not be in assets
const IconEmail = (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconPhone = (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconLocation = (props) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconAward = (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconFile = (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconGraduation = (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FacultyPage = () => {
    const { setHero, hideHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            // title: "Faculty Page",
            bgImage: FacultyHerobg,
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    const SectionCard = ({ title, children, className = "" }) => (
        <div className={`bg-white rounded-[9.4px] border border-[#07070733] p-[30px] ${className}`}>
            {title && <h3 className={`${T.font.family} font-semibold text-[32px] text-[#223F7F] mb-4`}>{title}</h3>}
            {children}
        </div>
    );

    const WidgetCard = ({ title, children, className = "" }) => (
        <div className={`bg-white rounded-[9.4px] border border-[#07070733] p-[20px] ${className}`}>
            <h6 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-4`}>{title}</h6>
            {children}
        </div>
    );

    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            <PageSection paddingClass="py-[40px] md:py-[60px]">

                {/* ==================== BREADCRUMB ==================== */}
                <div className="mb-[32px]">
                    <p className={`${T.font.family} text-[12px] text-[#6B7280]`}>
                        Home &gt; Faculty
                    </p>
                </div>

                {/* ==================== PROFILE HEADER CARD ==================== */}
                <div className="bg-[#EEF2F7] rounded-[9.4px] border border-[#07070733] p-[30px] mb-8 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-[30px] items-start">
                        {/* Image - Exact Figma Dimensions */}
                        <div className="w-full md:w-[330px] h-auto md:h-[322px] rounded-[9.4px] overflow-hidden shrink-0">
                            <img src={Facultyimg} alt="Dr. Rajesh Kumar" className="w-full h-full object-cover object-top" />
                        </div>

                        {/* Info */}
                        <div className="flex-1 w-full md:h-[322px] flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-[12px]">
                                    <span className="bg-[#008C8C1A] text-[#00796B] font-medium text-[12px] px-3 py-1 rounded-[4px]">
                                        Department of General Medicine
                                    </span>
                                </div>

                                <h1 className={`${T.font.family} font-semibold text-[36px] text-[#223F7F] text-[32px] leading-tight mb-[12px]`}>
                                    Dr. Rajesh Kumar
                                </h1>
                                <p className={`${T.font.family} text-[18px] font-medium text-[#191919BF] mb-[12px]`}>
                                    Professor & Head of Department
                                </p>
                                <p className={`${T.font.family} text-[14px] font-regular text-[#4a5565]`}>
                                    MBBS, MD (Internal Medicine), DM (Cardiology), FACC
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 w-full max-w-2xl py-[32px]">
                                    <div className="flex items-start gap-3 text-[#4B5563] pb-[4px]">
                                        <div className=" text-[#008C8C]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.38672 5.47656V16.4283" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.34575 14.0797C2.13827 14.0797 1.9393 13.9973 1.7926 13.8506C1.64589 13.7039 1.56348 13.5049 1.56348 13.2975V3.12797C1.56348 2.9205 1.64589 2.72153 1.7926 2.57482C1.9393 2.42812 2.13827 2.3457 2.34575 2.3457H6.25709C7.08697 2.3457 7.88286 2.67537 8.46968 3.26219C9.05649 3.849 9.38616 4.6449 9.38616 5.47478C9.38616 4.6449 9.71583 3.849 10.3026 3.26219C10.8895 2.67537 11.6854 2.3457 12.5152 2.3457H16.4266C16.6341 2.3457 16.833 2.42812 16.9797 2.57482C17.1264 2.72153 17.2088 2.9205 17.2088 3.12797V13.2975C17.2088 13.5049 17.1264 13.7039 16.9797 13.8506C16.833 13.9973 16.6341 14.0797 16.4266 14.0797H11.733C11.1106 14.0797 10.5136 14.327 10.0735 14.7671C9.63341 15.2072 9.38616 15.8041 9.38616 16.4265C9.38616 15.8041 9.13891 15.2072 8.6988 14.7671C8.25869 14.327 7.66177 14.0797 7.03936 14.0797H2.34575Z" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </div>
                                        <span className="text-[15px] font-regular text-[#4a5565]">Interventional Cardiology</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-[#4a5565]">
                                        <div className=" text-[#008C8C]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.1081 10.084L13.2932 16.7536C13.3065 16.8321 13.2955 16.9129 13.2616 16.985C13.2278 17.0571 13.1728 17.1171 13.1039 17.1571C13.035 17.1971 12.9555 17.2151 12.8761 17.2087C12.7967 17.2023 12.7212 17.1718 12.6596 17.1213L9.85906 15.0193C9.72387 14.9183 9.55963 14.8637 9.39087 14.8637C9.22212 14.8637 9.05788 14.9183 8.92269 15.0193L6.11747 17.1205C6.05592 17.1709 5.98047 17.2013 5.90117 17.2077C5.82187 17.2142 5.74251 17.1962 5.67366 17.1564C5.60481 17.1165 5.54976 17.0566 5.51584 16.9846C5.48193 16.9127 5.47076 16.8321 5.48383 16.7536L6.66819 10.084" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.38795 10.9517C11.9802 10.9517 14.0816 8.85027 14.0816 6.25806C14.0816 3.66585 11.9802 1.56445 9.38795 1.56445C6.79574 1.56445 4.69434 3.66585 4.69434 6.25806C4.69434 8.85027 6.79574 10.9517 9.38795 10.9517Z" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </div>
                                        <span className="text-[15px] font-regular text-[#4a5565]">25+ years Experience</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-[#4a5565]">
                                        <div className=" text-[#008C8C]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_145_835)">
                                                <path d="M6.25732 1.56445V4.69353" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.5166 1.56445V4.69353" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.8625 3.12891H3.91073C3.04666 3.12891 2.34619 3.82937 2.34619 4.69344V15.6452C2.34619 16.5093 3.04666 17.2097 3.91073 17.2097H14.8625C15.7266 17.2097 16.427 16.5093 16.427 15.6452V4.69344C16.427 3.82937 15.7266 3.12891 14.8625 3.12891Z" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.34619 7.82227H16.427" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_145_835">
                                                    <rect width="18.7744" height="18.7744" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </div>
                                        <span className="text-[15px] font-regular text-[#4a5565]">Joined August 2010</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-[#4a5565]">
                                        <div className=" text-[#008C8C]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_145_844)">
                                                <path d="M15.6462 7.8226C15.6462 11.7285 11.3132 15.7963 9.85817 17.0526C9.72263 17.1545 9.55763 17.2096 9.38803 17.2096C9.21844 17.2096 9.05344 17.1545 8.91789 17.0526C7.46287 15.7963 3.12988 11.7285 3.12988 7.8226C3.12988 6.16284 3.78922 4.57105 4.96285 3.39742C6.13648 2.22379 7.72827 1.56445 9.38803 1.56445C11.0478 1.56445 12.6396 2.22379 13.8132 3.39742C14.9868 4.57105 15.6462 6.16284 15.6462 7.8226Z" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.38782 10.1702C10.6839 10.1702 11.7346 9.11947 11.7346 7.82337C11.7346 6.52726 10.6839 5.47656 9.38782 5.47656C8.09172 5.47656 7.04102 6.52726 7.04102 7.82337C7.04102 9.11947 8.09172 10.1702 9.38782 10.1702Z" stroke="#008C8C" stroke-width="1.56454" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_145_844">
                                                    <rect width="18.7744" height="18.7744" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </div>
                                        <span className="text-[15px] font-regular text-[#4a5565]">ASRAM Medical College & Hospital</span>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                                <button className="flex items-center justify-center gap-2 bg-[#223F7F] hover:bg-[#1a3266] text-white px-6 py-3 rounded-[9px] font-regular transition-colors text-[15px] leading-none">
                                    <IconEmail width={18} height={18} />
                                    <span>Send Email</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-[#008C8C] hover:bg-[#007575] text-white px-6 py-3 rounded-[9px] font-regular transition-colors text-[15px] leading-none">
                                    <IconPhone width={18} height={18} />
                                    <span>Call Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================== CONTENT GRID ==================== */}
                <div className="flex flex-col lg:flex-row gap-[30px]">

                    {/* ==================== LEFT COLUMN (MAIN INFO) ==================== */}
                    <div className="flex-1 space-y-8">

                        {/* About */}
                        <SectionCard title="About">
                            <p className={`${T.font.family} font-regular text-[18px] leading-[26px] text-[#191919BF]`}>
                                Dr. Rajesh Kumar is a distinguished cardiologist with over 25 years of clinical and academic experience. He specializes in interventional cardiology and has performed over 5,000 cardiac catheterization procedures. His expertise includes coronary angiography, angioplasty, pacemaker implantation, and management of complex cardiac conditions.
                            </p>
                        </SectionCard>

                        {/* Education */}
                        <SectionCard title="Education">
                            <div className="space-y-6">
                                {[
                                    { degree: "DM (Cardiology)", college: "All India Institute of Medical Sciences (AIIMS), New Delhi", year: "2005" },
                                    { degree: "MD (Internal Medicine)", college: "Bangalore Medical College, Bangalore", year: "2001" },
                                    { degree: "MBBS", college: "Mysore Medical College, Mysore", year: "1996" },
                                ].map((edu, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div
                                            className="
                                            mt-1
                                            w-[45.06px] h-[45.06px]
                                            rounded-[9.39px]
                                            bg-[#008C8C]
                                            flex items-center justify-center
                                            flex-shrink-0
                                        "
                                        >
                                            <IconGraduation className="w-[20px] h-[20px] text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-[24px] font-semibold text-[#223F7F]">{edu.degree}</h4>
                                            <p className="text-[#191919BF] font-regular text-[14px]">{edu.college}</p>
                                            <span className="text-[#191919BF] text-[14px]">{edu.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>

                        {/* Research Interests */}
                        <SectionCard title="Research Interests">
                            <div className="flex flex-wrap gap-3">
                                {["Acute Coronary Syndrome Management", "Cardiac Imaging and Diagnostics", "Preventive Cardiology", "Heart Failure Management", "Cardiac Rehabilitation"].map((tag, i) => (
                                    <span key={i} className="bg-[#e3e8f0] text-[#191919BF] px-4 py-2 rounded-[9.4px] text-[15px] font-regular border border-gray-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </SectionCard>

                        {/* Recent Publications */}
                        <SectionCard title="Recent Publications">
                            <div className="space-y-4">
                                {[
                                    { title: "Novel Approaches in Primary PCI for STEMI Patients", journal: "Indian Heart Journal", year: "2023", type: "Research Article" },
                                    { title: "Risk Stratification in Acute Coronary Syndromes", journal: "Journal of Clinical Cardiology", year: "2022", type: "Review Article" },
                                    { title: "Cardiac Rehabilitation: Indian Perspective", journal: "Asian Heart Journal", year: "2021", type: "Opinion Piece" },
                                    { title: "Management of Heart Failure in Resource-Limited Settings", journal: "Global Heart Journal", year: "2020", type: "Clinical Study" },
                                ].map((pub, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 border border-gray-100 rounded-[8px] hover:border-gray-300 transition-colors cursor-pointer bg-gray-50/50">
                                        <div className="p-2 h-fit bg-[#008C8C1A] text-[#008C8C] rounded-[6px]">
                                            <IconFile />
                                        </div>
                                        <div>
                                            <h4 className="text-[22px] font-semibold text-[#223F7F] mb-[7.5px]">{pub.title}</h4>
                                            <div className="flex items-center gap-2 text-[14px] font-medium text-[#191919BF] mb-[7.5px]">
                                                <span className="font-medium text-[#4B5563]">{pub.journal}</span>

                                            </div>
                                            <div className="flex items-center gap-2 text-[14px] font-regular text-[#191919BF]">

                                                <span>{pub.year}</span>
                                                <span>•</span>
                                                <span className="bg-[#E3E8F0] font-regular text-[12px] px-2 py-0.5 rounded-[3.8px] text-[#191919BF]">{pub.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>

                        {/* Teaching Responsibilities */}
                        <SectionCard title="Teaching Responsibilities">
                            <ul className="space-y-3">
                                {[
                                    "Clinical Cardiology for MBBS students",
                                    "Advanced Cardiac Care for MD residents",
                                    "Interventional Cardiology workshops",
                                    "ECG interpretation sessions",
                                    "Case-based learning in Cardiology"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#4B5563]">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#008C8C] shrink-0" />
                                        <span className="text-[14px] font-regular">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SectionCard>

                    </div>

                    {/* ==================== RIGHT COLUMN (SIDEBAR) ==================== */}
                    <div className="w-full lg:w-[399px] shrink-0 space-y-6">

                        {/* Contact Info Widget */}
                        <WidgetCard title="Contact Information">
                            <div className="space-y-4">
                                <div className="mb-[12px]">
                                    <p className="text-[14px] font-medium text-[#191919] mb-[4px]">Email</p>
                                    <a href="mailto:rajesh.kumar@asram.in" className="font-regular text-[#008C8C] hover:underline text-[14px]">rajesh.kumar@asram.in</a>
                                </div>
                                <div className="mb-[12px]">
                                    <p className="text-[14px] font-medium text-[#191919] mb-[4px]">Phone</p>
                                    <p className="text-[#191919BF] text-[14px]">+91 98765 43210</p>
                                </div>
                                <div className="mb-[12px]">
                                    <p className="text-[14px] font-medium text-[#191919] mb-[4px]">Office</p>
                                    <p className="text-[#191919BF] text-[14px]">Department of General Medicine<br />3rd Floor, Academic Block</p>
                                </div>
                                <div className="mb-[12px]">
                                    <p className="text-[14px] font-medium text-[#191919] mb-[4px]">Consultation Hours</p>
                                    <p className="text-[#191919BF] text-[14px]">Mon - Fri: 9:00 AM - 1:00 PM</p>
                                    <p className="text-[#191919BF] text-[14px]">Sat: 9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </WidgetCard>

                        {/* Awards Widget */}
                        <WidgetCard title="Awards & Recognition">
                            <div className="space-y-4">
                                {[
                                    { name: "Best Teacher Award", org: "ASRAM Medical College", year: "2023" },
                                    { name: "Excellence in Cardiology Award", org: "Medical Council of India", year: "2021" },
                                    { name: "Research Excellence Award", org: "Indian Cardiac Society", year: "2019" },

                                ].map((award, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="mt-1 text-[#008C8C]"><IconAward width={16} height={16} /></div>
                                        <div>
                                            <p className="text-[14px] font-medium text-[#223F7F]">{award.name}</p>
                                            <p className="text-[14px] font-regular text-[#4A5565]">{award.org}</p>
                                            <p className="text-[14px] font-regular text-[#6A7282]">{award.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </WidgetCard>

                        {/* Memberships Widget */}
                        <WidgetCard title="Professional Memberships">
                            <ul className="space-y-2">
                                {[
                                    "Fellow of American College of Cardiology (FACC)",
                                    "Member, Cardiological Society of India",
                                    "Member, Indian Medical Association",
                                    "Member, Association of Physicians of India",
                                    "Life Member, Indian Academy of Medical Sciences"
                                ].map((mem, i) => (
                                    <li key={i} className="flex gap-2 font-regular text-[13px] text-[#364153]">
                                        <span className="text-[#008C8C] mt-1.5 w-1.5 h-1.5 rounded-[31498264px] bg-[#008C8C] shrink-0" />
                                        <span>{mem}</span>
                                    </li>
                                ))}
                            </ul>
                        </WidgetCard>

                        {/* Quick Actions Widget */}
                        <WidgetCard title="Quick Actions" className="bg-[#F3F4F6]">
                            <div className="space-y-3">
                                <button
                                    className="
      w-full
      bg-white
      border border-[#D1D5DC]
      text-left
      hover:border-[#D1D5DC]
      text-[#364153]
      font-regular
      py-3 px-4
      rounded-[9.39px]
      transition-colors
      text-[15px] leading-[24px]
      shadow-sm
    "
                                >
                                    Schedule Appointment
                                </button>

                                <button
                                    className="
      w-full
      bg-white
      border border-[#D1D5DC]
      text-left
      hover:border-[#D1D5DC]
      text-[#364153]
      font-regular
      py-3 px-4
      rounded-[9.39px]
      transition-colors
      text-[15px] leading-[24px]
      shadow-sm
    "
                                >
                                    Request Consultation
                                </button>
                            </div>

                        </WidgetCard>

                    </div>

                </div>

            </PageSection>
        </div>
    );
};

export default FacultyPage;
