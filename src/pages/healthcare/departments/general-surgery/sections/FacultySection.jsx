import React from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const DrRajeshImg = "/AsramWebsite-FE/assets/departments/departfac.png"
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

const FacultySection = () => {
    const navigate = useNavigate();

    const faculty = [
        {
            id: 4,
            name: "Dr. Rajesh Kumar",
            role: "Head of Department & Professor",
            qualification: "MBBS, MS (General Surgery), FICS",
            experience: "22 years",
            specialty: "Laparoscopic Surgery",
            image: DrRajeshImg
        },
        {
            id: 2,
            name: "Dr. Priya Sharma",
            role: "Professor",
            qualification: "MBBS, MS (General Surgery), DNB",
            experience: "18 years",
            specialty: "Surgical Oncology",
            image: DrRajeshImg
        }
    ];

    const stats = [
        { value: "15+", label: "Years Average Experience", sub: "Senior faculty with proven surgical expertise" },
        { value: "5", label: "Faculty Members", sub: "Qualified surgeons and teaching staff" },
        { value: "100%", label: "Supervised Training", sub: "All clinical activities under faculty guidance" }
    ];

    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[40px] md:py-[80px]">
            {/* Title Section */}
            <div className="w-full mb-[30px] md:mb-[50px]">
                <h2 className={`${T.font.family} font-bold text-[24px] md:text-[42px] text-[#223F7F] text-center md:text-left`}>
                    Department Faculty
                </h2>
            </div>

            {/* Faculty List */}
            <div className="flex flex-col gap-[20px] md:gap-[40px] mb-[30px] md:mb-[40px] w-full">
                {faculty.map((member, index) => (
                    <div key={index} className="bg-white rounded-[12px] p-[20px] md:p-[30px] flex flex-col md:flex-row gap-[20px] md:gap-[30px] border border-[#E0E0E0] shadow-sm">

                        {/* Image */}
                        <div className="w-full md:w-[210.27px] h-[240.31px] rounded-[11.26px] overflow-hidden flex-shrink-0 ">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col items-start h-full self-stretch">
                            <h3 className="text-[#223F7F] font-semibold text-[22px] md:text-[28px] mb-[8px] font-montserrat">{member.name}</h3>
                            <p className="text-[#191919] text-[16px] md:text-[18px] font-normal leading-[1.44] font-montserrat mb-[8px]">{member.role}</p>
                            <p className="text-[#191919C0] text-[14px] font-normal font-montserrat mb-[12px]">{member.qualification}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] md:gap-[20px] mb-[12px] w-full max-w-[500px]">
                                {/* Experience */}
                                <div className="bg-[#EEF2F7] rounded-[8px] p-[20px] flex flex-col items-start">
                                    <span className="text-[#191919C0] text-[12px] font-normal font-montserrat mb-[6px]">Experience</span>
                                    <span className="text-[#223F7F] text-[18px] font-medium font-montserrat">{member.experience}</span>
                                </div>

                                {/* Specialization */}
                                <div className="bg-[#EEF2F7] rounded-[8px] p-[20px] flex flex-col items-start">
                                    <span className="text-[#191919C0] text-[12px] font-normal font-montserrat mb-[6px]">Specialization</span>
                                    <span className="text-[#223F7F] text-[18px] font-medium font-montserrat">{member.specialty}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate(`/faculty/${member.id}`)}
                                className="bg-[#223F7F] text-white text-[14px] font-medium px-[24px] py-[8px] rounded-[8px] hover:bg-[#1a3163] transition-colors font-montserrat mt-auto"
                            >
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px] w-full">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-[12px] p-[30px] text-center border border-[rgba(7,7,7,0.2)] h-full flex flex-col justify-center items-center gap-[12px] shadow-sm">
                        <AnimatedStatValue
                            value={stat.value}
                            className="text-[#223F7F] font-semibold text-[32px] font-montserrat leading-normal"
                        />
                        <p className="text-[#223F7F] font-medium text-[22px] font-montserrat leading-normal">{stat.label}</p>
                        <p className="text-[#191919BF] text-[18px] leading-[1.44] max-w-[280px] mx-auto font-montserrat font-normal">{stat.sub}</p>
                    </div>
                ))}
            </div>

        </PageSection>
    );
};

export default FacultySection;
