import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const ResearchConferences = () => {
    return (
        <PageSection bg={T.bg.white} paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Conferences & Events
            </h2>

            {/* Row 1: Two Workshop/CME Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-8">

                {/* Card 1 */}
                <div className="bg-[#DEE4F2] rounded-[12px] p-[30px] flex flex-col items-start min-h-[240px] relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <h3 className={`${T.font.family} font-bold text-[20px] text-[#1E3A8A] leading-tight mb-2`}>
                                National Workshop on Research Methodology
                            </h3>
                            <span className="bg-[#CBD5E1] text-[#475569] text-[12px] px-3 py-1 rounded-full font-medium inline-block bg-opacity-50">
                                Workshop
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto w-full flex justify-between items-end">
                        <div>
                            <p className="text-[12px] text-gray-500 mb-1">Date</p>
                            <p className="text-[15px] text-gray-700 font-medium">December 15-16, 2024</p>
                        </div>
                        <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-5 py-2 rounded-[6px] font-medium text-[14px] transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#DEE4F2] rounded-[12px] p-[30px] flex flex-col items-start min-h-[240px] relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <h3 className={`${T.font.family} font-bold text-[20px] text-[#1E3A8A] leading-tight mb-2`}>
                                CME on Clinical Trials: From Protocol to Publication
                            </h3>
                            <span className="bg-[#CBD5E1] text-[#475569] text-[12px] px-3 py-1 rounded-full font-medium inline-block bg-opacity-50">
                                CME
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto w-full flex justify-between items-end">
                        <div>
                            <p className="text-[12px] text-gray-500 mb-1">Date</p>
                            <p className="text-[15px] text-gray-700 font-medium">January 8, 2025</p>
                        </div>
                        <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-5 py-2 rounded-[6px] font-medium text-[14px] transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>

            </div>

            {/* Row 2: Annual Research Week Banner */}
            <div className="bg-[#DEE4F2] rounded-[12px] p-[30px] flex items-start gap-6 mb-12">
                <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="white" />
                    </svg>
                </div>

                <div className="flex flex-col">
                    <h3 className={`${T.font.family} font-bold text-[20px] text-[#1E3A8A] mb-3`}>
                        Annual Research Week 2025
                    </h3>
                    <p className={`${T.font.family} text-[15px] text-gray-700 leading-relaxed mb-4`}>
                        Our flagship event celebrating research excellence with 150+ presentations, 15 keynote speakers, 8 workshops, and 25 awards across categories.
                    </p>
                    <p className={`${T.font.family} text-[14px] text-gray-600 font-medium`}>
                        March 10-15, 2025   <span className="mx-2 text-gray-400">|</span>   Theme: "Research for Health Equity"
                    </p>
                </div>
            </div>

            {/* Footer Button */}
            <div className="flex justify-center">
                <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-semibold text-[16px] flex items-center gap-2 transition-colors">
                    View All Events & Past Highlights
                    <span>→</span>
                </button>
            </div>

        </PageSection>
    );
};

export default ResearchConferences;
