import React from "react";

const AlumniRegistrationCTA = () => {
    return (
        <section className="py-[80px] bg-white w-full font-montserrat border-t border-gray-100">
            <div className="w-full max-w-[800px] mx-auto px-5 text-center">
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#191919] mb-[16px]">
                    Register with ASRAM Alumni Association
                </h2>
                <p className="text-[16px] text-[#666666] mb-[32px] leading-relaxed">
                    Stay connected, access benefits, and be a part of our growing community of healthcare professionals. Registration is free for all alumni.
                </p>
                <button className="bg-[#223F7F] text-white px-[40px] py-[14px] rounded-[6px] font-semibold text-[16px] hover:bg-[#1a3163] transition-colors">
                    Alumni Registration &rarr;
                </button>
            </div>
        </section>
    );
};

export default AlumniRegistrationCTA;
