import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "190+", label: "Total Seats" },
    { value: "56+", label: "Expert Faculty" },
    { value: "INC", label: "Approved" },
];

const contactCards = [
    {
        title: "Visit Campus",
        desc: "ASRAM Campus",
        sub: "Eluru, Andhra Pradesh",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white" />
            </svg>
        ),
    },
    {
        title: "Call Us",
        desc: "Admissions Office",
        sub: "Contact via asram.in",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
            </svg>
        ),
    },
    {
        title: "Email Us",
        desc: "For admission inquiries",
        sub: "See official website",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
            </svg>
        ),
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
                                {card.icon}
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
