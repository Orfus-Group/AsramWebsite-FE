import React from "react";

const areas = [
    {
        image: "/AsramWebsite-FE/assets/donate/donationimg1.png",
        title: "Student Scholarships",
        description: "Help deserving students from underprivileged backgrounds pursue their dreams of becoming doctors, nurses, and healthcare professionals. Your support covers tuition expenses.",
        footerText: "₹50,000 supports one student for a year"
    },
    {
        image: "/AsramWebsite-FE/assets/donate/donationimg2.png",
        title: "Research & Innovation",
        description: "Fund groundbreaking medical research that addresses India's pressing healthcare challenges. Support faculty and student research projects.",
        footerText: "₹1,00,000 funds a research project"
    },
    {
        image: "/AsramWebsite-FE/assets/donate/donationimg3.png",
        title: "Infrastructure Development",
        description: "Build and upgrade teaching facilities, laboratories, simulation centers, and technology infrastructure to provide students with the best learning environment.",
        footerText: "₹5,00,000+ for major infrastructure projects"
    },
    {
        image: "/AsramWebsite-FE/assets/donate/donationimg4.png",
        title: "Library & Learning Resources",
        description: "Expand our medical library with latest textbooks, journals, and digital resources. Provide students access to cutting-edge medical knowledge and research databases.",
        footerText: "₹25,000 adds essential resources"
    },
    {
        image: "/AsramWebsite-FE/assets/donate/donationimg5.png",
        title: "Faculty Development",
        description: "Support professional development for our faculty through training programs, conferences, and continuing education to ensure world-class teaching quality.",
        footerText: "₹75,000 sponsors faculty training"
    },
    {
        image: "/AsramWebsite-FE/assets/donate/donationimg6.png",
        title: "Community Healthcare",
        description: "Enable free medical camps, rural health initiatives, and community outreach programs that bring quality healthcare to underserved populations.",
        footerText: "₹10,000 sponsors a medical camp"
    }
];

const DonationAreas = () => {
    return (
        <section className="py-[40px] lg:py-[80px] bg-[#eef2f7] w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[30px] lg:mb-[40px]">
                    Where Your Donation Goes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {areas.map((area, index) => (
                        <div key={index} className="bg-white rounded-[7.5px] overflow-hidden border border-[#e0e0e0] flex flex-col">
                            <div className="h-[192px] w-full overflow-hidden">
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-[20px] h-[237px] flex flex-col">
                                <h6 className="text-[22px] font-semibold text-[#223F7F] mb-[12px] leading-tight">
                                    {area.title}
                                </h6>
                                <p className="text-[18px] text-[#191919] opacity-75 mb-[12px] leading-[1.44] flex-grow">
                                    {area.description}
                                </p>
                                <div className="text-[14px] font-regular text-[#223F7F] mt-auto leading-[20px]">
                                    {area.footerText}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonationAreas;
