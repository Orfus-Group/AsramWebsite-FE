import React from "react";
const alumnistory = "/AsramWebsite-FE/assets/alumni/alumnistory.png";

const stories = [
    {
        name: "Neha Kapoor",
        degree: "B.Sc. Nursing 2015 | Pandemic Hero",
        image: alumnistory, // Using placeholder as requested, image shows distinct faces but I don't have them yet.
        text1: "\"During the COVID-19 pandemic, I led a team of 200 nurses in one of Mumbai's largest dedicated COVID facilities. It was the most challenging period of my career, but my ASRAM training prepared me for it.\"",
        text2: "\"The clinical skills and mental resilience I developed at ASRAM were invaluable. I'm proud to be an ASRAM alumna and to carry forward the tradition of excellence.\""
    },
    {
        name: "Dr. Vikram Singh",
        degree: "MBBS 2010 | Rural Healthcare Champion",
        image: alumnistory,
        text1: "\"After graduating from ASRAM, I chose to work in rural India rather than pursue opportunities abroad. Today, I run a network of 15 primary health centers serving over 50,000 people in remote villages.\"",
        text2: "\"ASRAM taught me that medicine is not just a profession but a service to humanity. The values instilled during my time there continue to guide my work every day.\""
    },
    {
        name: "Neha Kapoor",
        degree: "B.Sc. Nursing 2015 | Pandemic Hero",
        image: alumnistory,
        text1: "\"During the COVID-19 pandemic, I led a team of 200 nurses in one of Mumbai's largest dedicated COVID facilities. It was the most challenging period of my career, but my ASRAM training prepared me for it.\"",
        text2: "\"The clinical skills and mental resilience I developed at ASRAM were invaluable. I'm proud to be an ASRAM alumna and to carry forward the tradition of excellence.\""
    }
];

const AlumniStories = () => {
    return (
        <section className="py-[80px] bg-white w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#223F7F] mb-[40px] text-left">
                    Alumni Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                    {stories.map((story, index) => (
                        <div key={index} className="bg-[#eef2f7] p-[30px] rounded-[7.5px] min-h-[460px] flex flex-col gap-[20px] h-full justify-between">
                            <div>
                                {/* Header */}
                                <div className="flex items-center gap-[12px] mb-[20px]">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-[60px] h-[60px] rounded-full object-cover shrink-0"
                                    />
                                    <div className="flex flex-col gap-[4px]">
                                        <h4 className="text-[15px] font-semibold text-[#191919] leading-[1.5]">{story.name}</h4>
                                        <p className="text-[13px] font-medium text-[rgba(25,25,25,0.75)] leading-[1.43]">{story.degree}</p>
                                    </div>
                                </div>

                                {/* Body Text */}
                                <div className="flex flex-col gap-[20px]">
                                    <p className="text-[18px] font-normal leading-[1.44] text-[rgba(25,25,25,0.75)] text-left">
                                        {story.text1}
                                    </p>
                                    <p className="text-[18px] font-normal leading-[1.44] text-[rgba(25,25,25,0.75)] text-left">
                                        {story.text2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-[40px]">
                    <button className="bg-[#223F7F] text-white px-[24px] py-[12px] rounded-[7.5px] font-medium text-[14px] hover:bg-[#1a3163] transition-colors flex items-center gap-[8px]">
                        Share Your Story
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.54102 8.5H13.4577" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.40039 4.44446L13.4587 8.50001L9.40039 12.5556" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AlumniStories;
