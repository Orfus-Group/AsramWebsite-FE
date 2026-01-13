import React from "react";

const stories = [
    {
        name: "Neha Kapoor",
        degree: "B.Sc. Nursing 2015 | Pandemic Hero",
        image: "/assets/alumni/notablealumni.png", // Reusing the placeholder asset
        text: "Joining ASRAM was the best decision of my career. The collaborative environment, world-class facilities, and genuine commitment to student success make every day rewarding."
    },
    {
        name: "Dr. Vikram Singh",
        degree: "MBBS 2010 | Rural Healthcare Champion",
        image: "/assets/alumni/notablealumni.png",
        text: "ASRAM values work-life balance unlike anywhere I've worked before. The administration truly cares about faculty well-being. I'm able to mentor students while pursuing my PhD."
    },
    {
        name: "Neha Kapoor",
        degree: "B.Sc. Nursing 2015 | Pandemic Hero",
        image: "/assets/alumni/notablealumni.png",
        text: "The professional development opportunities are outstanding. ASRAM sponsored my certification courses and regularly sends me to industry conferences."
    }
];

const AlumniStories = () => {
    return (
        <section className="py-[80px] bg-[#F8F9FC] w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[40px]">
                    Alumni Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                    {stories.map((story, index) => (
                        <div key={index} className="bg-white p-[30px] rounded-[8px] h-full md:min-h-[300px] flex flex-col items-start border-[0.9px] border-[#e0e0e0]">
                            <div className="flex items-center gap-[15px] mb-[20px] min-h-[60px]">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-[48px] h-[48px] rounded-full object-cover flex-shrink-0"
                                />
                                <div className="flex flex-col">
                                    <h4 className="text-[15px] font-bold text-[#191919] leading-[1.4]">{story.name}</h4>
                                    <p className="text-[12px] font-medium text-[#666666] leading-[1.4]">{story.degree}</p>
                                </div>
                            </div>
                            <p className="text-[15px] leading-[1.6] text-[#666666] text-left">
                                {story.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-[40px]">
                    <button className="border border-[#223F7F] text-[#223F7F] px-[32px] py-[12px] rounded-[6px] font-semibold text-[14px] hover:bg-[#223F7F] hover:text-white transition-colors">
                        View All Stories &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AlumniStories;
