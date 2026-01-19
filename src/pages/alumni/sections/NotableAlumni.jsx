import React from "react";
const notablealumni = "/AsramWebsite-FE/assets/alumni/notablealumni.png";

const notables = [
    {
        name: "Dr. Anjali Mehta",
        degree: "MBBS 2005, MD Cardiology 2010",
        desc: "Pioneer in minimally invasive cardiac procedures. Recipient of the American Heart Association's Distinguished Scientist Award.",
        title: "Chief of Cardiology, Massachusetts General Hospital, USA",
        image: notablealumni
    },
    {
        name: "Nurse Rekha Iyer",
        degree: "B.Sc. Nursing 2008, MSN 2012",
        desc: "Leading international nursing standards and education initiatives across 50+ countries. Florence Nightingale Medal recipient.",
        title: "Director of Global Nursing, World Health Organization",
        image: notablealumni
    },
    {
        name: "Arjun Reddy",
        degree: "Paramedical Sciences 2012",
        desc: "Developed AI-powered diagnostic tools now used in 200+ hospitals. Featured in Forbes 30 Under 30 Healthcare list.",
        title: "Founder & CEO, MediTech Innovations Pvt Limited",
        image: notablealumni
    }
];

const NotableAlumni = () => {
    return (
        <section className="py-[80px] w-full font-montserrat bg-[#eef2f7]">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[40px]">
                    Notable Alumni
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {notables.map((person, index) => (
                        <div key={index} className="bg-white rounded-[12px] border-[1px] border-[#e0e0e0] overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className="h-[240.3px] w-full overflow-hidden shrink-0">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-[20px] flex flex-col gap-[12px] h-full">
                                <h3 className="text-[22px] font-semibold text-[#223F7F] leading-normal">{person.name}</h3>
                                <p className="text-[14px] font-normal text-[#191919] leading-[1.43]">{person.degree}</p>
                                <p className="text-[14px] font-medium text-[rgba(25,25,25,0.75)] leading-normal">
                                    {person.title}
                                </p>
                                <p className="text-[14px] font-normal text-[rgba(25,25,25,0.75)] leading-[1.43]">
                                    {person.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-[40px]">
                    <button className="
                        w-[246px]
                        h-[41px]
                        bg-[#223F7F]
                        text-white
                        border-[1.9px]
                        border-[#223F7F]
                        rounded-[7.5px]
                        flex
                        items-center
                        justify-center
                        gap-[8px]
                        hover:bg-[#1a3163]
                        transition-colors
                    ">
                        <span className="font-montserrat font-medium text-[14px] leading-normal">
                            View All Notable Alumni
                        </span>
                        <span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.54102 8.5H13.4577" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.40039 4.44446L13.4587 8.50001L9.40039 12.5556" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NotableAlumni;
