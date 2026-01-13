import React from "react";

const asramalumni = "/AsramWebsite-FE/assets/alumni/alumnisection.png";

const AlumniAssociation = () => {
    return (
        <section className="py-[80px] w-full font-montserrat bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[45px] items-start">

                    {/* Left Content */}
                    <div className="flex-1">
                        <h2 className="text-[32px] font-bold text-[#223F7F] mb-[20px] leading-tight">
                            ASRAM Alumni Association
                        </h2>
                        <p className="text-[18px] text-[rgba(25,25,25,0.75)] leading-[1.44] mb-[40px] font-normal text-justify">
                            The ASRAM Alumni Association connects graduates from all our schools - Medical College, School of Nursing, and Paramedical College. Our mission is to foster lifelong relationships, support professional growth, and give back to the institution that shaped our careers.
                            <br /><br />
                            Whether you graduated last year or decades ago, you are part of a vibrant community of healthcare professionals committed to excellence, compassion, and continuous learning.
                        </p>

                        <div className="flex flex-col gap-[20px]">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-[12px]">
                                <div className="w-[48px] h-[48px] rounded-[9.6px] bg-[#eef2f7] flex items-center justify-center flex-shrink-0 text-[#223F7F]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23 21V19C22.9993 18.1137 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.01 6.11684 19.01 7.005C19.01 7.89316 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[20px] font-normal text-[#223F7F] mb-[8px] leading-tight">Lifelong Connection</h4>
                                    <p className="text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.43]">Stay connected with classmates and expand your professional network</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-[12px]">
                                <div className="w-[48px] h-[48px] rounded-[9.6px] bg-[#eef2f7] flex items-center justify-center flex-shrink-0 text-[#223F7F]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17 11L19 13L23 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[20px] font-normal text-[#223F7F] mb-[8px] leading-tight">Career Growth</h4>
                                    <p className="text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.43]">Access exclusive job opportunities and professional development resources</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start gap-[12px]">
                                <div className="w-[48px] h-[48px] rounded-[9.6px] bg-[#eef2f7] flex items-center justify-center flex-shrink-0 text-[#223F7F]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3094 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.7775 22.3094 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[20px] font-normal text-[#223F7F] mb-[8px] leading-tight">Give Back</h4>
                                    <p className="text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.43]">Mentor current students and support the next generation of healthcare professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-[580px] flex-shrink-0">
                        {/* Main Image */}
                        <div className="w-full h-[355px] rounded-[12px] overflow-hidden mb-[30px]">
                            <img
                                src={asramalumni}
                                alt="ASRAM Alumni"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Alumni Association Board Card */}
                        <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[20px] w-full shadow-sm flex flex-col gap-[20px]">
                            <h4 className="text-[20px] font-medium text-[#223F7F] mb-[20px] leading-tight">Alumni Association Board</h4>

                            <div className="flex flex-col gap-[20px]">
                                <div>
                                    <p className="text-[18px] font-medium text-[#191919] mb-[8px]">Dr. Rajesh Kumar</p>
                                    <p className="text-[14px] font-normal text-[rgba(25,25,25,0.75)]">President</p>
                                </div>
                                <div>
                                    <p className="text-[18px] font-medium text-[#191919] mb-[8px]">Nurse Priya Sharma</p>
                                    <p className="text-[14px] font-normal text-[rgba(25,25,25,0.75)]">Vice President</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AlumniAssociation;
