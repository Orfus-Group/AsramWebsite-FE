import React from "react";

const actions = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ), // UserPlus
        title: "Mentor Students",
        desc: "Invest in the next generation. Guide current students through mentorship programs.",
        link: "Learn More \u2192"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ), // Briefcase
        title: "Hire ASRAM Graduates",
        desc: "Post job vacancies and recruit top talent from the new batch of graduates.",
        link: "Post a Job \u2192"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10V6M2 10L12 16L22 10L12 4L2 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12.5V16C6 16.55 10 20 12 20C14 20 18 16.55 18 16V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ), // GraduationCap
        title: "Support Scholarships",
        desc: "Help deserving students achieve their dreams by donating to scholarship funds.",
        link: "Donate Now \u2192"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.52678 3.40215 7 4.67392 7 6V12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12V6C17 4.67392 16.4732 3.40215 15.5355 2.46447C14.5979 1.52678 13.3261 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 23H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ), // Mic
        title: "Guest Lectures",
        desc: "Share your industry expertise by conducting guest lectures and workshops.",
        link: "Register Interest \u2192"
    }
];

const GetInvolved = () => {
    return (
        <section className="py-[80px] bg-white w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[40px]">
                    Get Involved
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    {actions.map((action, index) => (
                        <div key={index} className="bg-white border-[0.9px] border-[#e0e0e0] p-[30px] rounded-[8px] flex flex-col md:flex-row items-start gap-[20px] hover:shadow-md transition-shadow">
                            <div className="w-[50px] h-[50px] bg-[#eef2f7] rounded-[8px] flex items-center justify-center text-[#223F7F] flex-shrink-0">
                                {action.icon}
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-[#223F7F] mb-[8px]">{action.title}</h3>
                                <p className="text-[14px] text-[#666666] mb-[12px] leading-[1.5]">{action.desc}</p>
                                <a href="#" className="text-[14px] font-semibold text-[#223F7F] hover:underline flex items-center gap-1">
                                    {action.link}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
