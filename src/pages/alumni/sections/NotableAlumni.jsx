import React from "react";

const notables = [
    {
        name: "Dr. Anjali Mehta",
        degree: "MBBS 2005 | Cardiology",
        desc: "Chief of Cardiology at Apollo Hospitals. Pioneer in non-invasive cardiac checkups.",
        image: "/assets/alumni/notablealumni.png" // Using the one available asset as placeholder for all for now, since I only have 3 assets
    },
    {
        name: "Nurse Rekha Iyer",
        degree: "B.Sc Nursing 2012 | PhD",
        desc: "Director of Nursing Services at Tata Memorial Centre.",
        image: "/assets/alumni/notablealumni.png"
    },
    {
        name: "Arjun Reddy",
        degree: "Paramedical 2010 | CEO",
        desc: "Founder of 'MediTech', a leading healthcare startup in India.",
        image: "/assets/alumni/notablealumni.png"
    }
];

const NotableAlumni = () => {
    return (
        <section className="py-[80px] w-full font-montserrat bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[40px]">
                    Notable Alumni
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                    {notables.map((person, index) => (
                        <div key={index} className="bg-white rounded-[12px] border-[0.9px] border-[#e0e0e0] overflow-hidden group hover:shadow-lg transition-all duration-300">
                            <div className="h-[260px] w-full overflow-hidden">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-[24px]">
                                <h3 className="text-[20px] font-bold text-[#223F7F] mb-[4px]">{person.name}</h3>
                                <p className="text-[13px] font-medium text-[#666666] mb-[12px] uppercase tracking-wide">{person.degree}</p>
                                <p className="text-[14px] text-[#191919] opacity-80 leading-[1.5]">
                                    {person.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-[40px]">
                    <button className="bg-[#223F7F] text-white px-[32px] py-[12px] rounded-[6px] font-semibold text-[14px] hover:bg-[#1a3163] transition-colors">
                        View All Notable Alumni &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NotableAlumni;
