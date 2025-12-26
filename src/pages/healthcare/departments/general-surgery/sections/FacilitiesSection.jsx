import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const FacilitiesSection = () => {
    const facilities = [
        {
            title: "Operation Theatres",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.12012 8.11719L12.0001 11.9972" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0001 4L8.12012 15.88" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7998 14.7969L19.9998 19.9969" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            ),
            description: "Modern surgical suites equipped with advanced instruments, anesthesia systems, and monitoring equipment for major and minor procedures"
        },
        {
            title: "Surgical Wards",
            icon: (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99951 4V20" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.99951 8H19.9995C20.5299 8 21.0387 8.21071 21.4137 8.58579C21.7888 8.96086 21.9995 9.46957 21.9995 10V20" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.99951 17H21.9995" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8V17" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            ),
            description: "Dedicated male and female surgical wards with pre-operative and post-operative patient management facilities"
        },
        {
            title: "Seminar & Teaching Spaces",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00098 3.00781H22.001" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 3.00781V14.0078C21 14.5382 20.7893 15.047 20.4142 15.422C20.0391 15.7971 19.5304 16.0078 19 16.0078H5C4.46957 16.0078 3.96086 15.7971 3.58579 15.422C3.21071 15.047 3 14.5382 3 14.0078V3.00781" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 21.0078L12 16.0078L17 21.0078" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            ),
            description: "Equipped rooms for lectures, case presentations, journal clubs, and academic discussions with multimedia support"
        },
        {
            title: "Diagnostic Access",
            icon: (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2V8C13.9998 8.33548 14.0841 8.66561 14.245 8.96L19.755 19.04C19.9216 19.3446 20.0061 19.6874 20.0001 20.0345C19.9941 20.3817 19.8979 20.7213 19.7208 21.02C19.5437 21.3187 19.2919 21.5661 18.9902 21.7379C18.6885 21.9098 18.3472 22.0001 18 22H5.99997C5.65275 22.0001 5.31149 21.9098 5.00976 21.7379C4.70804 21.5661 4.45625 21.3187 4.27916 21.02C4.10208 20.7213 4.0058 20.3817 3.99981 20.0345C3.99382 19.6874 4.07831 19.3446 4.24497 19.04L9.75497 8.96C9.91587 8.66561 10.0001 8.33548 9.99997 8V2" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.45264 15H17.5466" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 2H15.5" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            ),
            description: "Integrated access to radiology, pathology, and laboratory services for comprehensive surgical diagnosis and planning"
        }
    ];

    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[32px] text-[#223F7F] mb-[30px]`}>
                Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {facilities.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#EEF2F7] 
                            rounded-[12px] 
                            p-[30px] 
                            border-[0.9px] border-[#E0E0E0]
                            flex flex-col items-start
                        "
                    >
                        {/* Icon Box: 48x48, radius 6.9px, mb-3 (12px) */}
                        <div className="w-[48px] h-[48px] bg-white rounded-[6.9px] flex items-center justify-center text-[#223F7F] mb-[12px]">
                            {item.icon}
                        </div>

                        {/* Title: mb-3 (12px) */}
                        <h6 className="text-[#223F7F] font-medium text-[22px] mb-[12px] font-montserrat tracking-normal">
                            {item.title}
                        </h6>

                        {/* Description: 18px, 1.44 leading, opacity approx 0.75 */}
                        <p className="text-[#191919BF] text-[18px] leading-[1.44] font-montserrat">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default FacilitiesSection;
