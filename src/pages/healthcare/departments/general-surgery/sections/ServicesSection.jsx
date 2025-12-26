import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import InfoCardGrid from "@/components/common/InfoCardGrid";

const ServicesSection = () => {
    const services = [
        {
            title: "Outpatient Department",
            icon: (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1484 6.57812V13.1524L17.5313 15.3438" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.1485 24.1017C19.2 24.1017 24.1056 19.1961 24.1056 13.1446C24.1056 7.09316 19.2 2.1875 13.1485 2.1875C7.09707 2.1875 2.19141 7.09316 2.19141 13.1446C2.19141 19.1961 7.09707 24.1017 13.1485 24.1017Z" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            description: "Surgical consultations, pre-operative assessments, follow-up care, and wound management"
        },
        {
            title: "Inpatient Services (IPD)",
            icon: (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.19141 4.38281V21.9142" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.19141 8.76562H21.9142C22.4954 8.76562 23.0528 8.99651 23.4638 9.40748C23.8747 9.81845 24.1056 10.3758 24.1056 10.957V21.9142" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.19141 18.625H24.1056" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.57422 8.76562V18.627" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            description: "Pre-operative preparation, post-operative monitoring, ward care, and discharge planning"
        },
        {
            title: "Emergency Surgical Care",
            icon: (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.38412 15.3389C4.17677 15.3396 3.97348 15.2815 3.79786 15.1712C3.62224 15.061 3.48151 14.9032 3.392 14.7161C3.3025 14.5291 3.26791 14.3205 3.29224 14.1146C3.31657 13.9087 3.39883 13.7139 3.52946 13.5529L14.377 2.37662C14.4584 2.2827 14.5693 2.21923 14.6914 2.19664C14.8136 2.17404 14.9399 2.19365 15.0495 2.25227C15.159 2.31088 15.2454 2.405 15.2945 2.51919C15.3435 2.63337 15.3523 2.76083 15.3193 2.88065L13.2155 9.47683C13.1535 9.64286 13.1327 9.82145 13.1548 9.9973C13.177 10.1731 13.2415 10.341 13.3427 10.4864C13.444 10.6319 13.5791 10.7506 13.7363 10.8324C13.8935 10.9142 14.0683 10.9566 14.2455 10.956H21.9155C22.1228 10.9553 22.3261 11.0135 22.5017 11.1237C22.6774 11.2339 22.8181 11.3917 22.9076 11.5788C22.9971 11.7658 23.0317 11.9744 23.0074 12.1803C22.983 12.3862 22.9008 12.581 22.7701 12.7421L11.9226 23.9183C11.8412 24.0122 11.7304 24.0757 11.6082 24.0983C11.486 24.1209 11.3597 24.1013 11.2501 24.0427C11.1406 23.9841 11.0542 23.8899 11.0051 23.7757C10.9561 23.6616 10.9473 23.5341 10.9803 23.4143L13.0841 16.8181C13.1461 16.6521 13.1669 16.4735 13.1448 16.2976C13.1226 16.1218 13.0581 15.9539 12.9569 15.8085C12.8556 15.663 12.7205 15.5443 12.5633 15.4625C12.4061 15.3807 12.2313 15.3383 12.0541 15.3389H4.38412Z" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            description: "24/7 emergency surgery services for trauma, acute abdomen, and surgical emergencies"
        },
        {
            title: "Elective Procedures",
            icon: (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0518 2.1875V4.37892" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.47852 2.1875V4.37892" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.47854 3.28906H4.38283C3.80163 3.28906 3.24423 3.51994 2.83326 3.93092C2.42229 4.34189 2.19141 4.89928 2.19141 5.48048V9.86333C2.19141 11.6069 2.88405 13.2791 4.11696 14.512C5.34988 15.745 7.02207 16.4376 8.76567 16.4376C10.5093 16.4376 12.1815 15.745 13.4144 14.512C14.6473 13.2791 15.3399 11.6069 15.3399 9.86333V5.48048C15.3399 4.89928 15.1091 4.34189 14.6981 3.93092C14.2871 3.51994 13.7297 3.28906 13.1485 3.28906H12.0528" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.76562 16.4356C8.76563 18.1792 9.45827 19.8514 10.6912 21.0843C11.9241 22.3172 13.5963 23.0098 15.3399 23.0098C17.0835 23.0098 18.7557 22.3172 19.9886 21.0843C21.2215 19.8514 21.9142 18.1792 21.9142 16.4356V13.1484" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.9131 13.1485C23.1234 13.1485 24.1045 12.1673 24.1045 10.957C24.1045 9.74676 23.1234 8.76562 21.9131 8.76562C20.7028 8.76562 19.7217 9.74676 19.7217 10.957C19.7217 12.1673 20.7028 13.1485 21.9131 13.1485Z" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            description: "Planned surgeries including hernia repair, appendectomy, cholecystectomy, and soft tissue operations"
        },
        {
            title: "Diagnostic Procedures",
            icon: (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4356 2.1875H9.86134C9.25619 2.1875 8.76562 2.67807 8.76562 3.28321V5.47463C8.76562 6.07978 9.25619 6.57034 9.86134 6.57034H16.4356C17.0407 6.57034 17.5313 6.07978 17.5313 5.47463V3.28321C17.5313 2.67807 17.0407 2.1875 16.4356 2.1875Z" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.5309 4.38281H19.7223C20.3035 4.38281 20.8609 4.61369 21.2718 5.02467C21.6828 5.43564 21.9137 5.99303 21.9137 6.57423V21.9142C21.9137 22.4954 21.6828 23.0528 21.2718 23.4638C20.8609 23.8747 20.3035 24.1056 19.7223 24.1056H6.57375C5.99254 24.1056 5.43515 23.8747 5.02418 23.4638C4.61321 23.0528 4.38232 22.4954 4.38232 21.9142V6.57423C4.38232 5.99303 4.61321 5.43564 5.02418 5.02467C5.43515 4.61369 5.99254 4.38281 6.57375 4.38281H8.76517" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.1484 12.0547H17.5313" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.1484 17.5312H17.5313" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.76562 12.0547H8.77721" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.76562 17.5312H8.77721" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            description: "Biopsies, endoscopies, and other diagnostic interventions for surgical conditions"
        },
        {
            title: "Follow-up Care",
            icon: (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.76611 2.1875V6.57034" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.5317 2.1875V6.57034" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.8195 4.38281H5.47951C4.26922 4.38281 3.28809 5.36395 3.28809 6.57423V21.9142C3.28809 23.1245 4.26922 24.1056 5.47951 24.1056H20.8195C22.0298 24.1056 23.0109 23.1245 23.0109 21.9142V6.57423C23.0109 5.36395 22.0298 4.38281 20.8195 4.38281Z" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.28809 10.9609H23.0109" stroke="#223F7F" stroke-width="1.64357" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            description: "Post-operative review, suture removal, complication management, and long-term care"
        }
    ];

    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[32px] text-[#223F7F] mb-8`}>
                Services Offered
            </h2>
            <InfoCardGrid
                items={services}
                gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
                cardClassName="bg-white rounded-[13.1px] p-[30px] border-[1.1px] border-[#E0E0E0] h-full flex flex-col items-start gap-[12px] hover:shadow-md transition-shadow"
                iconContainerClassName="w-[52.6px] h-[52.6px] bg-[rgba(34,63,127,0.1)] rounded-[8.8px] flex items-center justify-center text-[#223F7F] flex-shrink-0"
                titleClassName="text-[#223F7F] font-medium text-[22px] font-montserrat"
                descriptionClassName="text-[#191919BF] text-[18px] leading-[1.44] font-montserrat"
            />
        </PageSection>
    );
};

export default ServicesSection;
