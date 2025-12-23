import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const Icons = {
    Heart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#223F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    ShieldCheck: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0005 13.0044C20.0005 18.0044 16.5005 20.5044 12.3405 21.9544C12.1227 22.0282 11.886 22.0246 11.6705 21.9444C7.50049 20.5044 4.00049 18.0044 4.00049 13.0044V6.00436C4.00049 5.73914 4.10585 5.48479 4.29338 5.29725C4.48092 5.10971 4.73527 5.00436 5.00049 5.00436C7.00049 5.00436 9.50049 3.80436 11.2405 2.28436C11.4523 2.10335 11.7218 2.00391 12.0005 2.00391C12.2791 2.00391 12.5486 2.10335 12.7605 2.28436C14.5105 3.81436 17.0005 5.00436 19.0005 5.00436C19.2657 5.00436 19.5201 5.10971 19.7076 5.29725C19.8951 5.48479 20.0005 5.73914 20.0005 6.00436V13.0044Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    Target: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.999 22.0039C17.5219 22.0039 21.999 17.5268 21.999 12.0039C21.999 6.48106 17.5219 2.00391 11.999 2.00391C6.47618 2.00391 1.99902 6.48106 1.99902 12.0039C1.99902 17.5268 6.47618 22.0039 11.999 22.0039Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9995 18C15.3132 18 17.9995 15.3137 17.9995 12C17.9995 8.68629 15.3132 6 11.9995 6C8.6858 6 5.99951 8.68629 5.99951 12C5.99951 15.3137 8.6858 18 11.9995 18Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0005 14.0039C13.1051 14.0039 14.0005 13.1085 14.0005 12.0039C14.0005 10.8993 13.1051 10.0039 12.0005 10.0039C10.8959 10.0039 10.0005 10.8993 10.0005 12.0039C10.0005 13.1085 10.8959 14.0039 12.0005 14.0039Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    Eye: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.06251 12.3474C1.97916 12.1229 1.97916 11.8759 2.06251 11.6514C2.87421 9.68324 4.25202 8.00042 6.02128 6.81628C7.79053 5.63214 9.87155 5 12.0005 5C14.1295 5 16.2105 5.63214 17.9797 6.81628C19.749 8.00042 21.1268 9.68324 21.9385 11.6514C22.0218 11.8759 22.0218 12.1229 21.9385 12.3474C21.1268 14.3155 19.749 15.9983 17.9797 17.1825C16.2105 18.3666 14.1295 18.9988 12.0005 18.9988C9.87155 18.9988 7.79053 18.3666 6.02128 17.1825C4.25202 15.9983 2.87421 14.3155 2.06251 12.3474Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9995 15.0039C13.6564 15.0039 14.9995 13.6608 14.9995 12.0039C14.9995 10.3471 13.6564 9.00391 11.9995 9.00391C10.3427 9.00391 8.99951 10.3471 8.99951 12.0039C8.99951 13.6608 10.3427 15.0039 11.9995 15.0039Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
};

const values = [
    {
        title: "Compassion",
        description: "Treating every patient and student with empathy and dignity.",
        icon: Icons.Heart
    },
    {
        title: "Integrity",
        description: "Upholding the highest ethical standards in all our endeavors.",
        icon: Icons.ShieldCheck
    },
    {
        title: "Excellence",
        description: "Striving for continuous improvement in education and care.",
        icon: Icons.Target
    },
    {
        title: "Innovation",
        description: "Embracing new technologies and methodologies in healthcare to stay updated.",
        icon: Icons.Eye
    }
];

const OurCoreValues = () => {
    return (
        <PageSection bg="bg-[#eef2f7]" paddingClass="py-[60px] md:py-[80px]">
            {/* Header */}
                <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                Our Core Values
            </h1>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mb-[40px]">
                {values.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-[20px] rounded-[12px] border border-[#e5e5e5] flex flex-col items-start gap-[12px] h-full sm:h-[225px]"
                    >
                        <div className="w-[48px] h-[48px] bg-[#223F7F]/10 rounded-[7px] flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h6 className={`${T.font.family} font-medium text-[22px] text-[#223F7F]`}>
                            {item.title}
                        </h6>
                        <p className={`${T.font.family} font-regular text-[14px] text-[#191919BF] leading-[20px]`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                {/* Mission */}
                <div className="bg-white p-[30px] rounded-[12px] border border-[#e5e5e5] h-full sm:h-[272px] flex flex-col justify-start gap-[12px]">
                    <div className="w-[48px] h-[48px] bg-[#223F7F]/10 rounded-[7px] flex items-center justify-center">
                        {Icons.Target}
                    </div>
                    <h5 className={`${T.font.family} font-medium leading-[32px] text-[24px] text-[#223F7F]`}>
                        Our Mission
                    </h5>
                    <p className={`${T.font.family} text-[15px] font-regular sm:text-[18px] text-[#191919BF] leading-[26px]`}>
                        To provide world-class medical education and healthcare services that transform lives and advance the medical profession through innovation, research, and compassionate care.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-white p-[30px] rounded-[12px] border border-[#e5e5e5] h-full sm:h-[272px] flex flex-col justify-start gap-[12px]">
                    <div className="w-[48px] h-[48px] bg-[#223F7F]/10 rounded-[7px] flex items-center justify-center">
                        {Icons.Eye}
                    </div>
                    <h5 className={`${T.font.family} font-medium leading-[32px] text-[24px] text-[#223F7F]`}>
                        Our Vision
                    </h5>
                    <p className={`${T.font.family} text-[15px] font-regular sm:text-[18px] text-[#191919BF] leading-[26px]`}>
                        To be recognized as a premier healthcare institution that sets the standard for medical excellence, producing healthcare professionals who lead with integrity and compassion.
                    </p>
                </div>
            </div>
        </PageSection>
    );
};

export default OurCoreValues;
