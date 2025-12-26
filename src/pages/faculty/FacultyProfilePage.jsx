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
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1088 10.0859L13.294 16.7556C13.3072 16.8341 13.2962 16.9148 13.2624 16.9869C13.2285 17.059 13.1735 17.1191 13.1046 17.1591C13.0357 17.199 12.9562 17.217 12.8769 17.2106C12.7975 17.2042 12.7219 17.1737 12.6603 17.1232L9.85979 15.0213C9.7246 14.9203 9.56036 14.8657 9.39161 14.8657C9.22285 14.8657 9.05861 14.9203 8.92342 15.0213L6.1182 17.1224C6.05665 17.1728 5.9812 17.2033 5.9019 17.2097C5.82261 17.2161 5.74324 17.1982 5.67439 17.1583C5.60555 17.1185 5.55049 17.0586 5.51658 16.9866C5.48266 16.9146 5.47149 16.834 5.48457 16.7556L6.66892 10.0859" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.38819 10.9536C11.9804 10.9536 14.0818 8.85223 14.0818 6.26002C14.0818 3.66781 11.9804 1.56641 9.38819 1.56641C6.79598 1.56641 4.69458 3.66781 4.69458 6.26002C4.69458 8.85223 6.79598 10.9536 9.38819 10.9536Z" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

const IconFile = (props) => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.63184 20.6534C5.13391 20.6534 4.65637 20.4556 4.30429 20.1035C3.9522 19.7514 3.75439 19.2738 3.75439 18.7759V3.75635C3.75439 3.25842 3.9522 2.78089 4.30429 2.4288C4.65637 2.07671 5.13391 1.87891 5.63184 1.87891H13.1416C13.4388 1.87843 13.7331 1.93674 14.0076 2.05048C14.2821 2.16422 14.5315 2.33115 14.7412 2.54165L18.1093 5.90978C18.3204 6.11959 18.4878 6.36914 18.6019 6.64402C18.7159 6.91889 18.7744 7.21364 18.774 7.51124V18.7759C18.774 19.2738 18.5761 19.7514 18.2241 20.1035C17.872 20.4556 17.3944 20.6534 16.8965 20.6534H5.63184Z" stroke="#223F7F" strokeWidth="1.87744" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.1416 1.87891V6.57252C13.1416 6.82148 13.2405 7.06025 13.4165 7.23629C13.5926 7.41234 13.8314 7.51124 14.0803 7.51124H18.7739" stroke="#223F7F" strokeWidth="1.87744" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.38672 8.44922H7.50928" stroke="#223F7F" strokeWidth="1.87744" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.0191 12.2031H7.50928" stroke="#223F7F" strokeWidth="1.87744" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.0191 15.957H7.50928" stroke="#223F7F" strokeWidth="1.87744" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

const IconGraduation = (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

import MotionSection from "@/components/common/MotionSection";

// ... existing imports ...

// ... existing imports ...

// Define missing components locally
const SectionCard = ({ title, children, className = "" }) => (
    <div className={`bg-white rounded-[9.4px] border border-[#070707]/20 p-[30px] ${className}`}>
        {title && <h2 className={`${T.font.family} font-semibold text-[32px] text-[#223F7F] mb-[20px] leading-normal`}>{title}</h2>}
        {children}
    </div>
);

const WidgetCard = ({ title, children, className = "" }) => (
    <div className={`bg-white rounded-[9.4px] border border-[#d1d5db] p-[24px] ${className}`}>
        {title && <h6 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-[20px] leading-[26px]`}>{title}</h6>}
        {children}
    </div>
);

const FacultyProfilePage = () => {
    // ... existing hooks ...

    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            <PageSection paddingClass="py-[40px] md:py-[60px]">

                {/* ==================== BREADCRUMB ==================== */}
                <MotionSection>
                    <div className="mb-[32px]">
                        <p className={`${T.font.family} text-[14px] text-[#191919BF]`}>
                            Home / <span className="text-[#223F7F] font-medium">Faculty</span>
                        </p>
                    </div>

                    {/* ==================== PROFILE HEADER CARD ==================== */}
                    <div className="bg-[#EEF2F7] rounded-[9.4px] border border-[#070707]/20 p-[30px] mb-8 shadow-sm">
                        {/* ... existing header content ... */}
                        <div className="flex flex-col md:flex-row gap-[30px] items-start">
                            {/* Image - Exact Figma Dimensions */}
                            <div className="w-full md:w-[330px] h-auto md:h-[322px] rounded-[9.4px] overflow-hidden shrink-0">
                                <img src={Facultyimg} alt="Dr. Rajesh Kumar" className="w-full h-full object-cover object-top" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 w-full md:h-[322px] flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-[12px]">
                                        <span className="bg-[#223F7F]/10 text-[#223F7F] font-regular text-[12px] px-3 py-1 rounded-[8px]">
                                            Department of General Medicine
                                        </span>
                                    </div>

                                    <h1 className={`${T.font.family} font-semibold text-[32px] text-[#223F7F] text-[32px] leading-tight mb-[12px]`}>
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
                                                <path d="M9.38672 5.47656V16.4283" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.34575 14.0817C2.13827 14.0817 1.9393 13.9993 1.7926 13.8526C1.64589 13.7059 1.56348 13.5069 1.56348 13.2994V3.12992C1.56348 2.92245 1.64589 2.72348 1.7926 2.57678C1.9393 2.43007 2.13827 2.34766 2.34575 2.34766H6.25709C7.08697 2.34766 7.88286 2.67733 8.46968 3.26414C9.05649 3.85096 9.38616 4.64685 9.38616 5.47673C9.38616 4.64685 9.71583 3.85096 10.3026 3.26414C10.8895 2.67733 11.6854 2.34766 12.5152 2.34766H16.4266C16.6341 2.34766 16.833 2.43007 16.9797 2.57678C17.1264 2.72348 17.2088 2.92245 17.2088 3.12992V13.2994C17.2088 13.5069 17.1264 13.7059 16.9797 13.8526C16.833 13.9993 16.6341 14.0817 16.4266 14.0817H11.733C11.1106 14.0817 10.5136 14.3289 10.0735 14.769C9.63341 15.2092 9.38616 15.8061 9.38616 16.4285C9.38616 15.8061 9.13891 15.2092 8.6988 14.769C8.25869 14.3289 7.66177 14.0817 7.03936 14.0817H2.34575Z" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            </div>
                                            <span className="text-[15px] font-regular text-[#4a5565]">Interventional Cardiology</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-[#4a5565]">
                                            <div className=" text-[#008C8C]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.1081 10.082L13.2932 16.7517C13.3065 16.8302 13.2955 16.9109 13.2616 16.983C13.2278 17.0551 13.1728 17.1152 13.1039 17.1551C13.035 17.1951 12.9555 17.2131 12.8761 17.2067C12.7967 17.2003 12.7212 17.1698 12.6596 17.1193L9.85906 15.0174C9.72387 14.9164 9.55963 14.8618 9.39087 14.8618C9.22212 14.8618 9.05788 14.9164 8.92269 15.0174L6.11747 17.1185C6.05592 17.1689 5.98047 17.1994 5.90117 17.2058C5.82187 17.2122 5.74251 17.1943 5.67366 17.1544C5.60481 17.1146 5.54976 17.0546 5.51584 16.9827C5.48193 16.9107 5.47076 16.8301 5.48383 16.7517L6.66819 10.082" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.38746 10.9497C11.9797 10.9497 14.0811 8.84832 14.0811 6.25611C14.0811 3.6639 11.9797 1.5625 9.38746 1.5625C6.79525 1.5625 4.69385 3.6639 4.69385 6.25611C4.69385 8.84832 6.79525 10.9497 9.38746 10.9497Z" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            </div>
                                            <span className="text-[15px] font-regular text-[#4a5565]">25+ years Experience</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-[#4a5565]">
                                            <div className=" text-[#008C8C]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.25708 1.5625V4.69157" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.5164 1.5625V4.69157" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.8627 3.12891H3.91097C3.0469 3.12891 2.34644 3.82937 2.34644 4.69344V15.6452C2.34644 16.5093 3.0469 17.2097 3.91097 17.2097H14.8627C15.7268 17.2097 16.4273 16.5093 16.4273 15.6452V4.69344C16.4273 3.82937 15.7268 3.12891 14.8627 3.12891Z" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.34644 7.82422H16.4273" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            </div>
                                            <span className="text-[15px] font-regular text-[#4a5565]">Joined August 2010</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-[#4a5565]">
                                            <div className=" text-[#008C8C]"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.6462 7.82065C15.6462 11.7265 11.3132 15.7943 9.85817 17.0506C9.72263 17.1526 9.55763 17.2077 9.38803 17.2077C9.21844 17.2077 9.05344 17.1526 8.91789 17.0506C7.46287 15.7943 3.12988 11.7265 3.12988 7.82065C3.12988 6.16088 3.78922 4.5691 4.96285 3.39547C6.13648 2.22184 7.72827 1.5625 9.38803 1.5625C11.0478 1.5625 12.6396 2.22184 13.8132 3.39547C14.9868 4.5691 15.6462 6.16088 15.6462 7.82065Z" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.38758 10.1702C10.6837 10.1702 11.7344 9.11947 11.7344 7.82337C11.7344 6.52726 10.6837 5.47656 9.38758 5.47656C8.09147 5.47656 7.04077 6.52726 7.04077 7.82337C7.04077 9.11947 8.09147 10.1702 9.38758 10.1702Z" stroke="#223F7F" strokeWidth="1.56454" strokeLinecap="round" strokeLinejoin="round" />
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
                                    <button className="flex items-center justify-center gap-2 bg-[#223F7F] hover:bg-[#007575] text-white px-6 py-3 rounded-[9px] font-regular transition-colors text-[15px] leading-none">
                                        <IconPhone width={18} height={18} />
                                        <span>Call Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionSection>

                {/* ==================== CONTENT GRID ==================== */}
                <MotionSection delay={0.2}>
                    <div className="flex flex-col lg:flex-row gap-[30px]">

                        {/* ==================== LEFT COLUMN (MAIN INFO) ==================== */}
                        <div className="flex-1 space-y-8">
                            {/* ... existing content cards ... */}
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
                                            bg-[#223F7F]
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


                            {/* Recent Publications */}
                            <SectionCard title="Recent Publications">
                                <div className="flex flex-col">
                                    {[
                                        { title: "Novel Approaches in Primary PCI for STEMI Patients", journal: "Indian Heart Journal", year: "2023", type: "Research Article" },
                                        { title: "Risk Stratification in Acute Coronary Syndromes", journal: "Journal of Clinical Cardiology", year: "2022", type: "Review Article" },
                                        { title: "Cardiac Rehabilitation: Indian Perspective", journal: "Asian Heart Journal", year: "2021", type: "Research Article" },
                                        { title: "Management of Heart Failure in Resource-Limited Settings", journal: "Global Heart Journal", year: "2020", type: "Clinical Study" },
                                    ].map((pub, idx, arr) => (
                                        <div key={idx} className={`flex gap-[15px] items-start ${idx !== arr.length - 1 ? "border-b border-[#000000]/10 pb-[20px] mb-[20px]" : ""}`}>
                                            <div className="shrink-0 p-2.5 bg-[#EEF2F7] rounded-[8px] flex items-center justify-center text-[#223F7F]">
                                                <IconFile width={24} height={24} />
                                            </div>
                                            <div className="flex flex-col gap-[7.5px]">
                                                <h4 className={`${T.font.family} text-[22px] font-semibold text-[#223F7F] leading-[1.3]`}>{pub.title}</h4>
                                                <div className={`${T.font.family} text-[14px] font-medium text-[#191919BF]`}>
                                                    {pub.journal}
                                                </div>
                                                <div className="flex items-center gap-2 text-[14px]">
                                                    <span className={`${T.font.family} text-[#191919BF]`}>{pub.year}</span>
                                                    <span className="text-[#191919BF]">•</span>
                                                    <span className={`${T.font.family} bg-[#EEF2F7] text-[#191919BF] text-[12px] px-[8px] py-[2px] rounded-[3.8px] font-medium`}>{pub.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>
                        </div>

                        {/* ==================== RIGHT COLUMN (SIDEBAR) ==================== */}
                        <div className="w-full lg:w-[399px] shrink-0 flex flex-col gap-[20px]">
                            {/* ... existing widgets ... */}
                            {/* Contact Info Widget */}
                            <WidgetCard title="Contact Information">
                                <div className="space-y-4">
                                    <div className="mb-[12px]">
                                        <p className="text-[14px] font-medium text-[#191919] mb-[4px]">Email</p>
                                        <a href="mailto:rajesh.kumar@asram.in" className="font-regular text-[#223F7F] hover:underline text-[14px]">rajesh.kumar@asram.in</a>
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
                                <div className="flex flex-col gap-[20px]">
                                    {[
                                        { name: "Best Teacher Award", org: "ASRAM Medical College", year: "2023" },
                                        { name: "Excellence in Cardiology Award", org: "Karnataka Medical Council", year: "2021" },
                                        { name: "Research Excellence Award", org: "Indian Cardiac Society", year: "2019" },

                                    ].map((award, i) => (
                                        <div key={i} className="flex gap-[12px] items-start">
                                            <div className="mt-[2px] text-[#223F7F] shrink-0"><IconAward width={18} height={18} /></div>
                                            <div className="flex flex-col gap-[4px]">
                                                <p className={`${T.font.family} text-[15px] font-semibold text-[#223F7F] leading-[20px]`}>{award.name}</p>
                                                <div className="flex flex-col">
                                                    <p className={`${T.font.family} text-[13px] font-regular text-[#4B5563] leading-[18px]`}>{award.org}</p>
                                                    <p className={`${T.font.family} text-[13px] font-medium text-[#9CA3AF] leading-[18px]`}>{award.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </WidgetCard>


                            {/* Quick Actions Widget */}
                            {/* <WidgetCard title="Quick Actions" className="bg-[#F3F4F6]">
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

                        </WidgetCard> */}

                            {/* Memberships Widget */}
                            <WidgetCard title="Professional Memberships">
                                <ul className="flex flex-col gap-[11.3px]">
                                    {[
                                        "Fellow of American College of Cardiology (FACC)",
                                        "Member, Cardiological Society of India",
                                        "Member, Indian Medical Association",
                                        "Member, Association of Physicians of India",
                                        "Life Member, Indian Academy of Medical Sciences"
                                    ].map((mem, i) => (
                                        <li key={i} className="flex gap-[12px] items-start">
                                            <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#223F7F] shrink-0" />
                                            <span className={`${T.font.family} text-[13.1px] font-regular text-[#364153] leading-[19px]`}>
                                                {mem}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </WidgetCard>


                            {/* Research Interests (Moved to Sidebar) */}
                            <WidgetCard title="Research Interests" className="bg-white">
                                <div className="flex flex-col items-start gap-[12px]">
                                    {["Acute Coronary Syndrome Management", "Cardiac Imaging and Diagnostics", "Heart Failure Management", "Preventive Cardiology", "Cardiac Rehabilitation"].map((tag, i) => (
                                        <div key={i} className="bg-[#EEF2F7] border-[0.9px] border-[#07070733] rounded-[9.4px] pt-[8.4px] pr-[15.1px] pb-[7.5px] pl-[16px]">
                                            <span className="font-regular text-[15px] leading-[24px] text-[#191919BF]">
                                                {tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </WidgetCard>
                        </div>

                    </div>
                </MotionSection>

                {/* ==================== BOTTOM SECTION (TEACHING) ==================== */}
                <MotionSection delay={0.3}>
                    <div className="mt-[30px]">
                        <SectionCard title="Teaching Responsibilities">
                            <ul className="flex flex-col gap-[8px]">
                                {[
                                    "Clinical Cardiology for MBBS students",
                                    "Advanced Cardiac Care for MD residents",
                                    "Interventional Cardiology workshops",
                                    "ECG interpretation sessions",
                                    "Case-based learning in Cardiology"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-[12px]">
                                        <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#223F7F] shrink-0" />
                                        <span className={`${T.font.family} text-[14px] font-regular text-[#364153] leading-[20px]`}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SectionCard>
                    </div>
                </MotionSection>

            </PageSection>
        </div>
    );
};

export default FacultyProfilePage;
