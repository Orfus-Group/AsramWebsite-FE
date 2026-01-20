import React from "react";

const actions = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.999 21V19C15.999 17.9391 15.5776 16.9217 14.8275 16.1716C14.0773 15.4214 13.0599 15 11.999 15H5.99902C4.93816 15 3.92074 15.4214 3.1706 16.1716C2.42045 16.9217 1.99902 17.9391 1.99902 19V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.999 3.125C16.8568 3.34737 17.6164 3.84826 18.1587 4.54906C18.701 5.24986 18.9952 6.11089 18.9952 6.997C18.9952 7.88311 18.701 8.74414 18.1587 9.44494C17.6164 10.1457 16.8568 10.6466 15.999 10.869" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.999 21.0028V19.0028C21.9984 18.1165 21.7034 17.2556 21.1604 16.5551C20.6174 15.8547 19.8572 15.3544 18.999 15.1328" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.99902 10.9922C11.2082 10.9922 12.999 9.20133 12.999 6.99219C12.999 4.78305 11.2082 2.99219 8.99902 2.99219C6.78988 2.99219 4.99902 4.78305 4.99902 6.99219C4.99902 9.20133 6.78988 10.9922 8.99902 10.9922Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ), // UserPlus
        title: "Mentor Students",
        desc: "Share your experience and guide current students as they navigate their academic journey and prepare for professional life.",
        link: "Become a Mentor"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.999 20V4C15.999 3.46957 15.7883 2.96086 15.4132 2.58579C15.0382 2.21071 14.5295 2 13.999 2H9.99902C9.46859 2 8.95988 2.21071 8.58481 2.58579C8.20974 2.96086 7.99902 3.46957 7.99902 4V20" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.999 6H3.99902C2.89445 6 1.99902 6.89543 1.99902 8V18C1.99902 19.1046 2.89445 20 3.99902 20H19.999C21.1036 20 21.999 19.1046 21.999 18V8C21.999 6.89543 21.1036 6 19.999 6Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ), // Briefcase
        title: "Hire ASRAM Graduates",
        desc: "Post job opportunities and recruit talented healthcare professionals from our pool of skilled graduates.",
        link: "Post a Job"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99902 9.50053C1.99904 8.38773 2.33662 7.30111 2.96716 6.38419C3.5977 5.46727 4.49154 4.76319 5.53063 4.36493C6.56972 3.96667 7.70518 3.89297 8.78704 4.15357C9.86889 4.41417 10.8462 4.99681 11.59 5.82453C11.6424 5.88054 11.7057 5.9252 11.7761 5.95573C11.8465 5.98626 11.9223 6.00201 11.999 6.00201C12.0757 6.00201 12.1516 5.98626 12.2219 5.95573C12.2923 5.9252 12.3556 5.88054 12.408 5.82453C13.1495 4.99143 14.127 4.4039 15.2107 4.14013C16.2943 3.87636 17.4325 3.94887 18.4739 4.34801C19.5153 4.74715 20.4104 5.45398 21.0401 6.37443C21.6699 7.29488 22.0043 8.38529 21.999 9.50053C21.999 11.7905 20.499 13.5005 18.999 15.0005L13.507 20.3135C13.3207 20.5275 13.091 20.6994 12.8331 20.8178C12.5752 20.9362 12.2951 20.9984 12.0113 21.0002C11.7276 21.002 11.4467 20.9434 11.1873 20.8283C10.9279 20.7131 10.6961 20.5442 10.507 20.3325L4.99902 15.0005C3.49902 13.5005 1.99902 11.8005 1.99902 9.50053Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ), // GraduationCap
        title: "Support Scholarships",
        desc: "Help deserving students achieve their dreams by contributing to scholarship funds and financial aid programs.",
        link: "Make a Donation"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.99902 18C2.73381 18 2.47945 17.8946 2.29192 17.7071C2.10438 17.5196 1.99902 17.2652 1.99902 17V4C1.99902 3.73478 2.10438 3.48043 2.29192 3.29289C2.47945 3.10536 2.73381 3 2.99902 3H7.99902C9.05989 3 10.0773 3.42143 10.8275 4.17157C11.5776 4.92172 11.999 5.93913 11.999 7C11.999 5.93913 12.4205 4.92172 13.1706 4.17157C13.9207 3.42143 14.9382 3 15.999 3H20.999C21.2642 3 21.5186 3.10536 21.7061 3.29289C21.8937 3.48043 21.999 3.73478 21.999 4V17C21.999 17.2652 21.8937 17.5196 21.7061 17.7071C21.5186 17.8946 21.2642 18 20.999 18H14.999C14.2034 18 13.4403 18.3161 12.8777 18.8787C12.3151 19.4413 11.999 20.2044 11.999 21C11.999 20.2044 11.683 19.4413 11.1203 18.8787C10.5577 18.3161 9.79467 18 8.99902 18H2.99902Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ), // Mic
        title: "Guest Lectures",
        desc: "Share your expertise by delivering guest lectures, workshops, or seminars to enrich the learning experience of current students.",
        link: "Express Interest"
    }
];

const GetInvolved = () => {
    return (
        <section className="py-[80px] bg-[#eef2f7] w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[42px] font-bold text-[#223F7F] mb-[40px]">
                    Get Involved
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    {actions.map((action, index) => (
                        <div key={index} className="bg-white border-[0.9px] border-[#e0e0e0] p-[30px] rounded-[7.5px] flex flex-col md:flex-row items-start gap-[20px] hover:shadow-md transition-shadow">
                            <div className="w-[48px] h-[48px] bg-[#eef2f7] rounded-[8px] flex items-center justify-center text-[#223F7F] flex-shrink-0">
                                {action.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[22px] font-semibold text-[#191919] mb-[8px] leading-tight">{action.title}</h3>
                                <p className="text-[18px] text-[rgba(25,25,25,0.75)] mb-[20px] leading-[1.44] w-full font-normal">{action.desc}</p>
                                <a href="#" className="text-[14px] font-medium text-[#223F7F] hover:underline flex items-center gap-[6px]">
                                    {action.link}
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.54102 8.5H13.4577" stroke="#223F7F" strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.5 3.54688L13.4583 8.50521L8.5 13.4635" stroke="#223F7F" strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
