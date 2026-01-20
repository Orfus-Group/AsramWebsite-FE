import React, { useState } from "react";
import { T } from "@/theme";

const jobs = [
    {
        id: 1,
        title: "Lab Technician Instructor - Radiology",
        department: "Paramedical College",
        type: "Full-time",
        experience: "3-5 years",
        salary: "₹4-6 LPA",
        posted: "Posted 4 days ago",
        description: "Teach radiology and imaging technology to paramedical students. Hands-on lab instruction and equipment training required.",
    },
    {
        id: 2,
        title: "Head - Medical Laboratory Technology",
        department: "Paramedical College",
        type: "Full-time",
        experience: "8+ years",
        salary: "₹8-16 LPA",
        posted: "Posted 1 week ago",
        description: "Lead the Medical Laboratory Technology department. Curriculum development, faculty management, and industry collaboration.",
    },
    {
        id: 3,
        title: "Physiotherapy Instructor",
        department: "Paramedical College",
        type: "Full-time",
        experience: "2-4 years",
        salary: "₹4-5 LPA",
        posted: "Posted 5 days ago",
        description: "Teach physiotherapy techniques and rehabilitation methods. Clinical demonstration and student mentorship.",
    },
    {
        id: 4,
        title: "Operations Theater Technician Faculty",
        department: "Paramedical College",
        type: "Full-time",
        experience: "5-7 years",
        salary: "₹5-7 LPA",
        posted: "Posted 3 days ago",
        description: "Train students in OT procedures, surgical instruments, and sterile techniques. Practical lab sessions required.",
    },
];

const CurrentOpenings = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="py-[40px] md:py-[80px] bg-[#FFF] w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[20px]">
                    Current Openings
                </h2>

                {/* Search and Filters Row 1 */}
                <div className="flex flex-col md:flex-row gap-4 mb-[12px] w-full">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search faculty by name, specialization, or department..."
                            className="w-full h-[44px] pl-10 pr-4 rounded-[10px] bg-white border border-[rgba(7,7,7,0.2)] focus:outline-none focus:border-[#223F7F] text-[14px] text-[#191919] placeholder:text-[rgba(25,25,25,0.75)]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5005 17.4995L13.8838 13.8828" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full md:w-[150px] relative">
                        <button className="w-full h-[44px] bg-white border border-[rgba(7,7,7,0.2)] rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-50 text-[#191919]">
                            {/* Filter Icon */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Filters
                        </button>
                    </div>
                </div>

                {/* Filters Row 2: College Dropdown */}
                <div className="w-full md:w-[380px] relative mb-[12px]">
                    <select className="w-full h-[44px] px-5 rounded-[9.4px] bg-white border border-[rgba(7,7,7,0.2)] focus:outline-none focus:border-[#223F7F] appearance-none cursor-pointer text-[14px] text-[#191919]">
                        <option value="">College</option>
                        <option value="Paramedical College">Paramedical College</option>
                        <option value="Medical College">Medical College</option>
                        <option value="College of Nursing">College of Nursing</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="mb-[20px] text-[#191919] opacity-75 text-[13.1px] font-medium">
                    Showing 4 positions in Paramedical College
                </div>

                {/* Jobs List */}
                <div className="flex flex-col gap-[20px]">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-[#eef2f7] p-[20px] md:p-[30px] rounded-[7.5px] border-[0.9px] border-[#e0e0e0] flex flex-col md:flex-row justify-between items-start md:items-start gap-6">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="bg-[#a66e00] text-white text-[12px] font-medium px-3 py-1 rounded-[8px]">
                                        {job.department}
                                    </span>
                                    <span className="text-[12px] text-[#191919] opacity-60">
                                        {job.posted}
                                    </span>
                                </div>
                                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#191919] mb-2">
                                    {job.title}
                                </h3>
                                <p className="text-[#191919] opacity-75 text-[14px] font-normal leading-[1.43] mb-4 w-full whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
                                    {job.description}
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-3 sm:gap-6 md:gap-8 text-[#191919] opacity-75 text-[13.1px]">
                                    <span className="flex items-center gap-[7.5px]">
                                        {/* Clock Icon */}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 6V12L16 14" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {job.type}
                                    </span>
                                    <span className="flex items-center gap-[7.5px]">
                                        {/* Briefcase Icon */}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {job.experience}
                                    </span>
                                    <span className="flex items-center gap-[7.5px]">
                                        {/* Rupee Icon */}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1027_432)">
                                                <path d="M7.50977 1.25V13.7663" stroke="#223F7F" strokeWidth="0.938722" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.6388 3.125H5.94523C5.36432 3.125 4.80719 3.35577 4.39642 3.76654C3.98565 4.17731 3.75488 4.73443 3.75488 5.31535C3.75488 5.89627 3.98565 6.45339 4.39642 6.86416C4.80719 7.27494 5.36432 7.5057 5.94523 7.5057H9.07431C9.65523 7.5057 10.2124 7.73647 10.6231 8.14724C11.0339 8.55801 11.2647 9.11514 11.2647 9.69606C11.2647 10.277 11.0339 10.8341 10.6231 11.2449C10.2124 11.6556 9.65523 11.8864 9.07431 11.8864H3.75488" stroke="#223F7F" strokeWidth="0.938722" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1027_432">
                                                    <rect width="15.0196" height="15.0196" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        {job.salary}
                                    </span>
                                </div>
                            </div>
                            <button className="flex-shrink-0 w-full sm:w-[155px] h-[47px] bg-[#223F7F] text-[15px] text-white rounded-[8px] font-medium hover:bg-[#1a3266] transition-colors flex items-center justify-center gap-2">
                                Apply Now
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.12793 7.51562H11.8893" stroke="white" strokeWidth="0.938722" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.50977 3.13281L11.8905 7.51352L7.50977 11.8942" stroke="white" strokeWidth="0.938722" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentOpenings;
