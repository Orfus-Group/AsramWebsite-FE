import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import UserIcon from "@/assets/icons/IconUser"; // Using standard user icon as placeholder for avatar

const testimonials = [
    {
        text: "The campus environment is vibrant and supportive. The facilities are top-notch and the faculty is always ready to help.",
        name: "Dr. Priya Sharma",
        role: "Alumni, Batch 2018",
    },
    {
        text: "Hostel life at ASRAM has been a memorable experience. It taught me independence and gave me friends for life.",
        name: "Rahul Veritas",
        role: "MBBS Student, Final Year",
    },
    {
        text: "The sports facilities helped me maintain a balance between my studies and physical health. Truly a holistic experience.",
        name: "Anjali Gupta",
        role: "Intern",
    },
];

const StudentVoices = () => {
    return (
        <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Student Voices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-[#F7F9FC] p-[40px] rounded-[16px] flex flex-col justify-between h-full border border-gray-100">
                        <div className="mb-6">
                            {/* Quote mark icon could go here */}
                            <span className="text-[60px] text-[#223F7F20] font-serif leading-[0]">“</span>
                            <p className={`${T.font.family} text-[16px] text-[#4A5565] leading-[1.8] italic mt-[-20px]`}>
                                {item.text}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-[50px] h-[50px] bg-[#223F7F] rounded-full flex items-center justify-center text-white">
                                {/* Replace with actual avatar logic if available */}
                                <span className="font-bold text-xl">{item.name[0]}</span>
                            </div>
                            <div>
                                <h4 className={`${T.font.family} font-bold text-[18px] text-[#223F7F]`}>{item.name}</h4>
                                <p className={`${T.font.family} text-[14px] text-[#4A5565]`}>{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default StudentVoices;
