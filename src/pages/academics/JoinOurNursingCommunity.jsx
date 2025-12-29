import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "190+", label: "Total Seats" },
    { value: "56+", label: "Expert Faculty" },
    { value: "INC", label: "Approved" },
];

const IconLocationFillWhite = "/AsramWebsite-FE/assets/icons/IconLocationFillWhite.svg";
const IconPhoneFillWhite = "/AsramWebsite-FE/assets/icons/IconPhoneFillWhite.svg";
const IconEmailFillWhite = "/AsramWebsite-FE/assets/icons/IconEmailFillWhite.svg";

const contactCards = [
    {
        title: "Visit Campus",
        desc: "ASRAM Campus",
        sub: "Eluru, Andhra Pradesh",
        icon: IconLocationFillWhite,
    },
    {
        title: "Call Us",
        desc: "Admissions Office",
        sub: "Contact via asram.in",
        icon: IconPhoneFillWhite,
    },
    {
        title: "Email Us",
        desc: "For admission inquiries",
        sub: "See official website",
        icon: IconEmailFillWhite,
    },
];

const JoinOurNursingCommunity = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <div className="flex flex-col gap-12">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] leading-tight max-w-[400px]`}>
                        Join Our Nursing Community
                    </h2>
                    <p className={`${T.font.family} text-[16px] text-gray-600 leading-relaxed max-w-[500px]`}>
                        Take the first step towards a rewarding career in healthcare. ASRAM School of Nursing is ready to welcome you into a community of compassionate, skilled nursing professionals.
                    </p>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-4 items-center">
                    <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-6 py-3 rounded-[6px] font-medium text-[15px] flex items-center gap-2 transition-colors">
                        Start Your Application
                        <span>→</span>
                    </button>
                    <button className="bg-[#F8FAFC] hover:bg-gray-100 text-[#5A6B89] px-6 py-3 rounded-[6px] font-medium text-[15px] transition-colors border border-transparent hover:border-gray-200">
                        Explore Programs
                    </button>
                    <button className="bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#334155] px-6 py-3 rounded-[6px] font-medium text-[15px] transition-colors">
                        Visit Website
                    </button>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    {contactCards.map((card, index) => (
                        <div key={index} className="bg-[#F8FAFC] rounded-[12px] p-[40px] flex flex-col items-center text-center">
                            <div className="w-[56px] h-[56px] bg-[#008C8C] rounded-full flex items-center justify-center mb-5 shrink-0">
                                <img src={card.icon} className="w-[24px] h-[24px]" alt="" />
                            </div>
                            <h3 className={`${T.font.family} font-bold text-[20px] text-[#1E3A8A] mb-2`}>
                                {card.title}
                            </h3>
                            <p className={`${T.font.family} text-[15px] text-gray-600`}>
                                {card.desc}
                            </p>
                            <p className={`${T.font.family} text-[14px] text-gray-500`}>
                                {card.sub}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gray-200"></div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <h4 className={`${T.font.family} font-bold text-[36px] text-[#1E3A8A] mb-1`}>
                                {stat.value}
                            </h4>
                            <p className={`${T.font.family} text-[14px] text-gray-500`}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </PageSection>
    );
};

export default JoinOurNursingCommunity;
