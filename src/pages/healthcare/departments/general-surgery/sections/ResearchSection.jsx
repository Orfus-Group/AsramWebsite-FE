import React, { useState } from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

// Icons (Placeholders for now, can be replaced with SVGs if needed)
const IconPubs = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);
const IconProjects = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
);
const IconStudents = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);
const IconAwards = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

const ResearchSection = () => {
    const [activeTab, setActiveTab] = useState("Ongoing Research");

    const stats = [
        { value: "85+", label: "Publications (Last 5 Years)", icon: <IconPubs /> },
        { value: "12", label: "Ongoing Research Projects", icon: <IconProjects /> },
        { value: "25+", label: "PG Students in Research", icon: <IconStudents /> },
        { value: "6", label: "Research Awards Received", icon: <IconAwards /> }
    ];

    const researchItems = [
        {
            title: "Comparative Study of Laparoscopic vs Open Cholecystectomy Outcomes",
            status: "Ongoing",
            pi: "Dr. Rajesh Kumar, Dr. Priya Sharma",
            funding: "ICMR Grant",
            duration: "2023-2025",
            studyStatus: "150 patients enrolled"
        },
        {
            title: "Post-operative Pain Management in Hernia Repair Surgeries",
            status: "Data Analysis Phase",
            pi: "Dr. Anil Verma, Dr. Suresh Patel",
            funding: "Institutional Research Fund",
            duration: "2024-2025",
            studyStatus: "120 patients"
        },
        {
            title: "Early Surgical Intervention in Acute Appendicitis: A Prospective Study",
            status: "Ongoing",
            pi: "Dr. Kavita Reddy",
            funding: "DHR Research Grant",
            duration: "2024-2026",
            studyStatus: "200 patients target"
        }
    ];

    return (
        <PageSection bg="bg-white" paddingClass="py-[40px] md:py-[80px]">
            <div className="flex flex-col gap-[30px] md:gap-[40px] w-full">
                {/* Title */}
                <div className="w-full">
                    <h2 className={`${T.font.family} font-bold text-[24px] md:text-[42px] text-[#223F7F] text-center md:text-left`}>
                        Research & Publications
                    </h2>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[22.5px] w-full">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#EEF2F7] rounded-[11.3px] p-[20px] flex flex-col items-center justify-center text-center gap-[12px] h-[166px]">
                            <div className="w-[48px] h-[48px] bg-white rounded-[8px] flex items-center justify-center shadow-sm">
                                {stat.icon}
                            </div>
                            <AnimatedStatValue
                                value={stat.value}
                                className="text-[#223F7F] font-semibold text-[28px] font-montserrat leading-none"
                            />
                            <p className="text-[#191919] text-[14px] font-normal leading-normal h-[20px] px-[13px] flex items-center justify-center gap-[10px] whitespace-nowrap">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation Tabs */}
                <div className="flex gap-[15px] border-b border-[#E0E0E0] overflow-x-auto scrollbar-none pb-2 md:pb-0">
                    {["Ongoing Research", "Recent Publications", "Research Areas"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                pt-[11.3px] pr-[21.7px] pb-[12.7px] pl-[22.5px]
                                text-[15px] font-normal leading-[1.5] font-montserrat transition-colors outline-none focus:outline-none
                                border-b-[1.9px] whitespace-nowrap
                                ${activeTab === tab ? "text-[#223F7F] border-[#223F7F]" : "text-[#191919C0] border-transparent hover:text-[#223F7F]"}
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Research List */}
                <div className="flex flex-col gap-[40px]">
                    {researchItems.map((item, index) => (
                        <div key={index} className="bg-[#EEF2F7] rounded-[11.3px] p-[30px] flex flex-col gap-[15px]">

                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <h3 className="text-[#223F7F] font-medium text-[18px] font-montserrat max-w-[800px]">
                                    {item.title}
                                </h3>
                                <span className="bg-white px-[12px] py-[4px] rounded-[12px] text-[13.1px] font-normal text-[#223F7F] shadow-sm border border-[#E0E0E0] whitespace-nowrap">
                                    {item.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[12px] gap-x-[40px]">
                                <p className="text-[#191919] text-[14px] font-montserrat">
                                    <span className="font-medium text-[#191919]">Principal Investigators:</span> <span className="text-[#191919BF] ml-[8px] leading-[1.43]">{item.pi}</span>
                                </p>
                                <p className="text-[#191919] text-[14px] font-montserrat">
                                    <span className="font-medium text-[#191919]">Funding:</span> <span className="text-[#191919BF] ml-[8px] leading-[1.43]">{item.funding}</span>
                                </p>
                                <p className="text-[#191919] text-[14px] font-montserrat">
                                    <span className="font-medium text-[#191919]">Duration:</span> <span className="text-[#191919BF] ml-[8px] leading-[1.43]">{item.duration}</span>
                                </p>
                                <p className="text-[#191919] text-[14px] font-montserrat">
                                    <span className="font-medium text-[#191919]">Study Status:</span> <span className="text-[#191919BF] ml-[8px] leading-[1.43]">{item.studyStatus}</span>
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Student Involvement Card */}
                <div className="bg-[#EEF2F7] rounded-[12px] p-[30px] border-[0.9px] border-[#223F7F33] flex flex-col gap-[12px]">
                    <h3 className="text-[#223F7F] font-medium text-[22px] font-montserrat mb-[11.3px]">
                        Student Involvement in Research
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                        <p className="text-[#191919BF] text-[18px] leading-[1.44] font-montserrat">
                            Postgraduate residents are required to complete dissertation projects as part of their MS degree. Faculty members guide students through research methodology, ethical clearance, data collection, statistical analysis, and manuscript preparation.
                        </p>
                        <p className="text-[#191919BF] text-[18px] leading-[1.44] font-montserrat">
                            MBBS students participate in short-term research projects, case reports, and literature reviews. The department encourages presentations at academic conferences and supports publication in student research journals.
                        </p>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default ResearchSection;
