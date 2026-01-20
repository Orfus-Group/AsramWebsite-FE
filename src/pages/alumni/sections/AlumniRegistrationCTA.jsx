import React from "react";

const AlumniRegistrationCTA = () => {
    return (
        <section className="py-[60px] lg:py-[80px] bg-white w-full font-montserrat border-t border-gray-100 flex flex-col items-center">
            <div className="w-full max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-[120px] flex flex-col items-center gap-[22.5px]">
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#191919] text-center leading-tight">
                    Register with ASRAM Alumni Association
                </h2>
                <p className="text-[16px] md:text-[18px] text-[#6b6b6b] text-center leading-[1.44] font-normal max-w-[685px]">
                    Stay connected, access exclusive benefits, and be part of a thriving community of healthcare professionals. Registration is free for all ASRAM graduates.
                </p>
                <button className="bg-[#223F7F] text-white px-[24px] py-[12px] rounded-[7.5px] font-medium text-[14px] leading-normal flex items-center justify-center gap-[8px] hover:bg-[#1a3163] transition-colors border-[1.9px] border-[#223F7F] w-full sm:w-auto">
                    Complete Registration<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.54297 8.5H13.4596" stroke="white" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.5 3.53906L13.4583 8.4974L8.5 13.4557" stroke="white" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                </button>
            </div>
        </section>
    );
};

export default AlumniRegistrationCTA;
