import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCardGrid from "@/components/common/InfoCardGrid";

const AcademicsSection = () => {
    const academicItems = [
        {
            title: "Undergraduate Learning",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.001 7V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H3Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            ),
            description: "MBBS students get hands-on bedside clinical knowledge and exposure from OPD to OT sessions."
        },
        {
            title: "Postgraduate Training",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4203 10.9224C21.5993 10.8434 21.7512 10.7136 21.8572 10.5492C21.9632 10.3847 22.0186 10.1927 22.0166 9.99709C22.0146 9.80144 21.9552 9.61068 21.8458 9.44844C21.7365 9.2862 21.5819 9.15961 21.4013 9.08436L12.8303 5.18036C12.5697 5.06151 12.2867 5 12.0003 5C11.7139 5 11.4308 5.06151 11.1703 5.18036L2.60029 9.08036C2.42225 9.15833 2.2708 9.28649 2.16445 9.44917C2.0581 9.61185 2.00146 9.802 2.00146 9.99636C2.00146 10.1907 2.0581 10.3809 2.16445 10.5435C2.2708 10.7062 2.42225 10.8344 2.60029 10.9124L11.1703 14.8204C11.4308 14.9392 11.7139 15.0007 12.0003 15.0007C12.2867 15.0007 12.5697 14.9392 12.8303 14.8204L21.4203 10.9224Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.0005 10V16" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 12.5V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V12.5" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            ),
            description: "MS DNB students engage in intensive academic programs with regular seminars and journal clubs."
        },
        {
            title: "Bedside Clinical Teaching",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.9995 3.13281C16.8573 3.35518 17.6169 3.85608 18.1592 4.55687C18.7015 5.25767 18.9957 6.1187 18.9957 7.00481C18.9957 7.89092 18.7015 8.75195 18.1592 9.45275C17.6169 10.1535 16.8573 10.6544 15.9995 10.8768" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.9995 21.0028V19.0028C21.9989 18.1165 21.7039 17.2556 21.1609 16.5551C20.6179 15.8547 19.8576 15.3544 18.9995 15.1328" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.00049 11C11.2096 11 13.0005 9.20914 13.0005 7C13.0005 4.79086 11.2096 3 9.00049 3C6.79135 3 5.00049 4.79086 5.00049 7C5.00049 9.20914 6.79135 11 9.00049 11Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            ),
            description: "Daily ward rounds help students refine history taking, physical examination, and diagnosis skills."
        },
        {
            title: "Case-Based Learning",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00098 21.9922C5.47054 21.9922 4.96184 21.7815 4.58676 21.4064C4.21169 21.0313 4.00098 20.5226 4.00098 19.9922V3.99219C4.00098 3.46176 4.21169 2.95305 4.58676 2.57798C4.96184 2.2029 5.47054 1.99219 6.00098 1.99219H14.001C14.3175 1.99168 14.6311 2.05379 14.9235 2.17496C15.216 2.29613 15.4815 2.47395 15.705 2.69819L19.293 6.28619C19.5178 6.5097 19.6961 6.77554 19.8177 7.06835C19.9392 7.36117 20.0015 7.67516 20.001 7.99219V19.9922C20.001 20.5226 19.7903 21.0313 19.4152 21.4064C19.0401 21.7815 18.5314 21.9922 18.001 21.9922H6.00098Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.001 1.99219V6.99219C14.001 7.2574 14.1063 7.51176 14.2939 7.69929C14.4814 7.88683 14.7358 7.99219 15.001 7.99219H20.001" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.001 8.99219H8.00098" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.001 13H8.00098" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.001 17H8.00098" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


            ),
            description: "Students discuss specific clinical cases, honing their analytical and diagnostic reasoning."
        },
        {
            title: "Assessments & Evaluations",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1.99219H9C8.44772 1.99219 8 2.4399 8 2.99219V4.99219C8 5.54447 8.44772 5.99219 9 5.99219H15C15.5523 5.99219 16 5.54447 16 4.99219V2.99219C16 2.4399 15.5523 1.99219 15 1.99219Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.00049 14L11.0005 16L15.0005 12" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            ),
            description: "Regular theory exams, practical assessments, viva voce, and clinical evaluations"
        },
        {
            title: "Skill Development",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9995 10.9922L17.9995 12.9922L21.9995 8.99219" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.00049 11C11.2096 11 13.0005 9.20914 13.0005 7C13.0005 4.79086 11.2096 3 9.00049 3C6.79135 3 5.00049 4.79086 5.00049 7C5.00049 9.20914 6.79135 11 9.00049 11Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            ),
            description: "Surgical techniques training, suturing workshops, and hands-on procedural practice"
        }
    ];

    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[32px] text-[#223F7F] mb-8 leading-[39px]`}>
                Academics in the Department
            </h2>
            <InfoCardGrid items={academicItems} />
        </PageSection>
    );
};

export default AcademicsSection;
