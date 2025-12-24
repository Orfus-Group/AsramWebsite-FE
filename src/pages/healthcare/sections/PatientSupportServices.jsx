import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const IconAppointment = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V6" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 2V6" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 3.99219H5C3.89543 3.99219 3 4.88762 3 5.99219V19.9922C3 21.0968 3.89543 21.9922 5 21.9922H19C20.1046 21.9922 21 21.0968 21 19.9922V5.99219C21 4.88762 20.1046 3.99219 19 3.99219Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 9.99219H21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconInsurance = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.001 5H4.00098C2.89641 5 2.00098 5.89543 2.00098 7V17C2.00098 18.1046 2.89641 19 4.00098 19H20.001C21.1055 19 22.001 18.1046 22.001 17V7C22.001 5.89543 21.1055 5 20.001 5Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.00098 9.99219H22.001" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconHelpDesk = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 22C17.5238 22 22.001 17.5228 22.001 12C22.001 6.47715 17.5238 2 12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 17.5228 6.47813 22 12.001 22Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.08984 8.98885C9.32495 8.32052 9.789 7.75696 10.3998 7.39798C11.0106 7.03901 11.7287 6.90779 12.427 7.02756C13.1253 7.14734 13.7587 7.51038 14.2149 8.05238C14.6712 8.59438 14.9209 9.28037 14.9198 9.98885C14.9198 11.9889 11.9198 12.9889 11.9198 12.9889" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 16.9922H12.01" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconMedicalRecords = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.999 2V7C13.999 7.26522 14.1044 7.51957 14.2919 7.70711C14.4795 7.89464 14.7338 8 14.999 8H19.999" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 8.99219H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 13H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 17H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconHelpline = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.833 16.568C14.0395 16.6628 14.2722 16.6845 14.4927 16.6294C14.7132 16.5744 14.9083 16.4458 15.046 16.265L15.401 15.8C15.5873 15.5516 15.8288 15.35 16.1066 15.2111C16.3843 15.0723 16.6905 15 17.001 15H20.001C20.5314 15 21.0401 15.2107 21.4152 15.5858C21.7903 15.9609 22.001 16.4696 22.001 17V20C22.001 20.5304 21.7903 21.0391 21.4152 21.4142C21.0401 21.7893 20.5314 22 20.001 22C15.2271 22 10.6487 20.1036 7.27305 16.7279C3.8974 13.3523 2.00098 8.7739 2.00098 4C2.00098 3.46957 2.21169 2.96086 2.58676 2.58579C2.96184 2.21071 3.47054 2 4.00098 2H7.00098C7.53141 2 8.04012 2.21071 8.41519 2.58579C8.79026 2.96086 9.00098 3.46957 9.00098 4V7C9.00098 7.31049 8.92869 7.61672 8.78983 7.89443C8.65098 8.17214 8.44937 8.41371 8.20098 8.6L7.73298 8.951C7.54939 9.09118 7.42 9.29059 7.36677 9.51535C7.31354 9.74012 7.33976 9.97638 7.44098 10.184C8.80766 12.9599 11.0554 15.2048 13.833 16.568Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconOPD = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.99219V11.9922L16 13.9922" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.001 22C17.5238 22 22.001 17.5228 22.001 12C22.001 6.47715 17.5238 2 12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 17.5228 6.47813 22 12.001 22Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const servicesData = [
    {
        icon: <IconAppointment />,
        title: "Appointment Booking",
        desc: "Schedule consultations with specialists via phone, online, or in-person registration"
    },
    {
        icon: <IconInsurance />,
        title: "Insurance & Billing",
        desc: "Cashless facility for major insurance providers and transparent billing support"
    },
    {
        icon: <IconHelpDesk />,
        title: "Help Desk",
        desc: "Dedicated staff to guide patients through registration, queries, and navigation"
    },
    {
        icon: <IconMedicalRecords />,
        title: "Medical Records",
        desc: "Secure access to medical history, test reports, and discharge summaries"
    },
    {
        icon: <IconHelpline />,
        title: "Helpline Services",
        desc: "Patient care coordinators available for queries and assistance"
    },
    {
        icon: <IconOPD />,
        title: "OPD Timings",
        desc: "Extended outpatient hours across specialties for patient convenience"
    }
];

const PatientSupportServices = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[80px] px-[20px] lg:px-[120px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                Patient Support Services
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[35px] gap-y-[29px]">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#EEF2F7] w-full h-auto md:h-[237px] p-[30px] rounded-[11.3px] border border-[rgba(7,7,7,0.2)] flex flex-col items-start gap-[12px]"
                    >
                        <div className="w-[48px] h-[48px] bg-[#FFF] rounded-[6.9px] flex items-center justify-center shrink-0">
                            {service.icon}
                        </div>
                        <h4 className={`${T.font.family} font-medium text-[22px] text-[#223F7F]`}>
                            {service.title}
                        </h4>
                        <p className={`${T.font.family} font-regular text-[18px] text-[rgba(25,25,25,0.75)] leading-[1.44]`}>
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default PatientSupportServices;
