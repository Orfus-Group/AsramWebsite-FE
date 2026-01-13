import React from "react";

const stories = [
    {
        name: "Neha Kapoor",
        role: "B.Sc. Nursing 2015 | Pandemic Hero",
        image: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder
        text: "Joining ASRAM was the best decision of my career. The collaborative environment, world-class facilities, and genuine commitment to student success make every day rewarding.",
    },
    {
        name: "Dr. Vikram Singh",
        role: "MBBS 2010 | Rural Healthcare Champion",
        image: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder
        text: "ASRAM values work-life balance unlike anywhere I've worked before. The administration truly cares about faculty well-being. I'm able to mentor students while pursuing my PhD, and the support has been incredible.",
    },
    {
        name: "Neha Kapoor",
        role: "B.Sc. Nursing 2015 | Pandemic Hero",
        image: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder
        text: "The professional development opportunities are outstanding. ASRAM sponsored my certification courses and regularly sends me to industry conferences. The students are motivated, and teaching here is genuinely fulfilling",
    },
];

const FacultyStories = () => {
    return (
        <section className="py-[80px] bg-white w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[40px]">
                    Faculty Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                    {stories.map((story, index) => (
                        <div key={index} className="bg-[#eef2f7] p-[30px] rounded-[7.5px] h-full md:min-h-[336px] flex flex-col justify-start">
                            <div className="flex items-center gap-[15px] mb-[20px] min-h-[60px]">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-[48px] h-[48px] rounded-full object-cover flex-shrink-0"
                                />
                                <div className="flex flex-col gap-[4px]">
                                    <h4 className="text-[15px] font-semibold text-[#191919] leading-[1.5]">{story.name}</h4>
                                    <p className="text-[13.1px] font-medium text-[#191919] opacity-75 leading-[1.43]">{story.role}</p>
                                </div>
                            </div>
                            <p className="text-[18px] leading-[1.44] text-[#191919] opacity-75 text-left">
                                {story.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacultyStories;
