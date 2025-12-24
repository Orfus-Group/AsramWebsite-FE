import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

// Icons matching the design
const IconClinical = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9995 2V8C13.9993 8.33548 14.0836 8.66561 14.2445 8.96L19.7545 19.04C19.9212 19.3446 20.0056 19.6874 19.9997 20.0345C19.9937 20.3817 19.8974 20.7213 19.7203 21.02C19.5432 21.3187 19.2914 21.5661 18.9897 21.7379C18.688 21.9098 18.3467 22.0001 17.9995 22H5.99949C5.65226 22.0001 5.311 21.9098 5.00928 21.7379C4.70755 21.5661 4.45576 21.3187 4.27868 21.02C4.10159 20.7213 4.00532 20.3817 3.99932 20.0345C3.99333 19.6874 4.07782 19.3446 4.24449 19.04L9.75449 8.96C9.91538 8.66561 9.99963 8.33548 9.99949 8V2" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.45312 15.0078H17.5471" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.5 2H15.5" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const IconRadiology = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H7" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V7" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 12.0078H17" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const IconPathology = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00098 18H14.001" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 22H21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 22C15.8565 22 17.637 21.2625 18.9497 19.9497C20.2625 18.637 21 16.8565 21 15C21 13.1435 20.2625 11.363 18.9497 10.0503C17.637 8.7375 15.8565 8 14 8H13" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 14H11" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 12C8.46957 12 7.96086 11.7893 7.58579 11.4142C7.21071 11.0391 7 10.5304 7 10V6H13V10C13 10.5304 12.7893 11.0391 12.4142 11.4142C12.0391 11.7893 11.5304 12 11 12H9Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 6V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H9C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3V6" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const IconReport = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.999 2V7C13.999 7.26522 14.1044 7.51957 14.2919 7.70711C14.4795 7.89464 14.7338 8 14.999 8H19.999" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 8.99219H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 13H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 17H8" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const IconFast = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.001 2H14.001" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 14L15 11" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 21.9922C16.4183 21.9922 20 18.4105 20 13.9922C20 9.57391 16.4183 5.99219 12 5.99219C7.58172 5.99219 4 9.57391 4 13.9922C4 18.4105 7.58172 21.9922 12 21.9922Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const IconNABL = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4768 12.8828L16.9918 21.4088C17.0087 21.5092 16.9946 21.6124 16.9514 21.7046C16.9081 21.7967 16.8377 21.8735 16.7497 21.9246C16.6616 21.9757 16.56 21.9987 16.4586 21.9905C16.3571 21.9823 16.2605 21.9434 16.1818 21.8788L12.6018 19.1918C12.4289 19.0627 12.219 18.9929 12.0033 18.9929C11.7875 18.9929 11.5776 19.0627 11.4048 19.1918L7.81875 21.8778C7.74007 21.9422 7.64361 21.9812 7.54225 21.9894C7.44088 21.9975 7.33942 21.9746 7.25141 21.9237C7.16341 21.8727 7.09303 21.7961 7.04967 21.7041C7.00631 21.6122 6.99204 21.5091 7.00875 21.4088L8.52275 12.8828" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.001 14C15.3147 14 18.001 11.3137 18.001 8C18.001 4.68629 15.3147 2 12.001 2C8.68727 2 6.00098 4.68629 6.00098 8C6.00098 11.3137 8.68727 14 12.001 14Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const services = [
    { title: "Clinical Laboratory", desc: "Comprehensive blood tests, biochemistry, hematology, and serology services", icon: <IconClinical /> },
    { title: "Radiology & Imaging", desc: "X-Ray, ultrasound, CT scan, and advanced imaging diagnostics", icon: <IconRadiology /> },
    { title: "Pathology Services", desc: "Histopathology, cytology, and specialized diagnostic investigations", icon: <IconPathology /> },
    { title: "Report Management", desc: "Digital reports with secure online access and timely delivery", icon: <IconReport /> },
    { title: "Fast Turnaround", desc: "Quick processing for routine tests and critical emergency reports", icon: <IconFast /> },
    { title: "NABL Standards", desc: "Quality-assured testing adhering to national accreditation protocols", icon: <IconNABL /> },
];

const DiagnosticServices = () => {
    return (
        <PageSection bg="bg-[#fff]" paddingClass="py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[42px] text-[#223F7F] mb-[40px]`}>
                Diagnostic Services
            </h1>

            {/* Grid Layout: 3 Columns, 2 Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[60px]">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#EEF2F7] 
                            rounded-[12px] 
                            p-[30px] 
                            border border-[#07070733] 
                            flex flex-col items-start gap-[16px]
                        "
                    >
                        {/* Icon Container: Standardized white box for icon */}
                        <div className="w-[48px] h-[48px] bg-white rounded-[8px] flex items-center justify-center text-[#223F7F] shadow-sm">
                            {item.icon}
                        </div>
                        <div>
                            <h6 className={`${T.font.family} font-medium text-[22px] text-[#223F7F] mb-[8px]`}>
                                {item.title}
                            </h6>
                            <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px]`}>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Stats Banner */}
            <div className="w-full bg-[#EEF2F7] border border-[#07070733] rounded-[12px] py-[40px] px-[20px] lg:px-[80px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                <div className="flex flex-col items-center gap-[8px]">
                    <AnimatedStatValue value="150+" className={`${T.font.family} font-bold text-[32px] text-[#223F7F]`} />
                    <span className={`${T.font.family} text-[18px] leading-[26px] text-[#191919BF]`}>Diagnostic Tests Available</span>
                </div>
                <div className="hidden md:block w-[1px] h-[60px] bg-[#E2E8F0]"></div>
                <div className="flex flex-col items-center gap-[8px]">
                    <AnimatedStatValue value="24/7" className={`${T.font.family} font-bold text-[32px] text-[#223F7F]`} />
                    <span className={`${T.font.family} text-[18px] leading-[26px] text-[#191919BF]`}>Emergency Lab Services</span>
                </div>
                <div className="hidden md:block w-[1px] h-[60px] bg-[#E2E8F0]"></div>
                <div className="flex flex-col items-center gap-[8px]">
                    <h3 className={`${T.font.family} font-bold text-[32px] text-[#223F7F]`}>NABL</h3>
                    <span className={`${T.font.family} text-[18px] leading-[26px] text-[#191919BF]`}>Accredited Laboratory</span>
                </div>
            </div>

        </PageSection>
    );
};

export default DiagnosticServices;
