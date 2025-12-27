import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { useHero } from "@/context/HeroContext";
import FacultyHerobg from "@/assets/faculty/asramfacultybanner.png";
import { leadershipData, facultyMembersData } from "./facultyData";



const IconEmailLocal = (props) => (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_299_1384)">
            <path d="M16.9624 3.51953L9.70008 8.14542C9.45364 8.28856 9.17371 8.36396 8.88872 8.36396C8.60372 8.36396 8.32379 8.28856 8.07735 8.14542L0.807739 3.51953" stroke="#364153" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <path d="M0.807739 0.808594H16.9624V13.7323H0.807739V0.808594Z" stroke="#364153" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
        <defs>
            <clipPath id="clip0_299_1384">
                <path d="M0.807739 0.808594H16.9624V13.7323H0.807739V0.808594Z" fill="white" />
            </clipPath>
        </defs>
    </svg>

);

const IconSearch = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21L16.65 16.65" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconCap = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_299_1364)">
            <path d="M17.3013 8.82275C17.4459 8.75896 17.5686 8.65415 17.6543 8.52131C17.7399 8.38847 17.7846 8.23342 17.783 8.07539C17.7814 7.91735 17.7334 7.76327 17.6451 7.63222C17.5567 7.50117 17.4319 7.39892 17.286 7.33814L10.3629 4.18474C10.1524 4.08874 9.9238 4.03906 9.69248 4.03906C9.46115 4.03906 9.23252 4.08874 9.02206 4.18474L2.09978 7.33491C1.95597 7.39789 1.83364 7.50141 1.74774 7.63281C1.66184 7.76421 1.61609 7.9178 1.61609 8.07479C1.61609 8.23178 1.66184 8.38537 1.74774 8.51677C1.83364 8.64817 1.95597 8.75169 2.09978 8.81467L9.02206 11.9713C9.23252 12.0673 9.46115 12.117 9.69248 12.117C9.9238 12.117 10.1524 12.0673 10.3629 11.9713L17.3013 8.82275Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.7698 8.07812V12.9245" stroke="#191919" stroke-opacity="0.75" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.8446 10.0977V12.9247C4.8446 13.5674 5.35521 14.1838 6.26408 14.6382C7.17296 15.0926 8.40566 15.3479 9.69101 15.3479C10.9764 15.3479 12.2091 15.0926 13.1179 14.6382C14.0268 14.1838 14.5374 13.5674 14.5374 12.9247V10.0977" stroke="#191919" stroke-opacity="0.75" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_299_1364">
                <rect width="19.3856" height="19.3856" fill="white" />
            </clipPath>
        </defs>
    </svg>

);

const IconBook = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_299_1371)">
            <path d="M9.69287 5.65625V16.9645" stroke="#191919" stroke-opacity="0.75" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.42199 14.5379C2.20777 14.5379 2.00232 14.4528 1.85084 14.3013C1.69936 14.1498 1.61426 13.9444 1.61426 13.7302V3.22961C1.61426 3.01538 1.69936 2.80993 1.85084 2.65845C2.00232 2.50698 2.20777 2.42188 2.42199 2.42188H6.46066C7.31756 2.42188 8.13936 2.76228 8.74528 3.36819C9.3512 3.97411 9.6916 4.79591 9.6916 5.65281C9.6916 4.79591 10.032 3.97411 10.6379 3.36819C11.2438 2.76228 12.0656 2.42188 12.9225 2.42188H16.9612C17.1754 2.42188 17.3809 2.50698 17.5324 2.65845C17.6838 2.80993 17.7689 3.01538 17.7689 3.22961V13.7302C17.7689 13.9444 17.6838 14.1498 17.5324 14.3013C17.3809 14.4528 17.1754 14.5379 16.9612 14.5379H12.1148C11.4721 14.5379 10.8558 14.7932 10.4013 15.2476C9.9469 15.7021 9.6916 16.3184 9.6916 16.9611C9.6916 16.3184 9.4363 15.7021 8.98186 15.2476C8.52742 14.7932 7.91107 14.5379 7.2684 14.5379H2.42199Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_299_1371">
                <rect width="19.3856" height="19.3856" fill="white" />
            </clipPath>
        </defs>
    </svg>

);

const IconRibbon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5007 10.4102L13.7244 17.2969C13.7381 17.378 13.7267 17.4613 13.6918 17.5358C13.6568 17.6102 13.6 17.6722 13.5288 17.7135C13.4577 17.7548 13.3757 17.7734 13.2937 17.7668C13.2117 17.7602 13.1337 17.7287 13.0701 17.6765L10.1784 15.5062C10.0388 15.4019 9.86924 15.3455 9.69499 15.3455C9.52074 15.3455 9.35116 15.4019 9.21156 15.5062L6.31503 17.6757C6.25148 17.7278 6.17356 17.7592 6.09169 17.7658C6.00981 17.7724 5.92786 17.7539 5.85677 17.7128C5.78568 17.6716 5.72884 17.6098 5.69382 17.5354C5.6588 17.4611 5.64727 17.3779 5.66076 17.2969L6.88367 10.4102" stroke="#191919" stroke-opacity="0.75" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.69101 11.3061C12.3676 11.3061 14.5374 9.13628 14.5374 6.45969C14.5374 3.78309 12.3676 1.61328 9.69101 1.61328C7.01441 1.61328 4.8446 3.78309 4.8446 6.45969C4.8446 9.13628 7.01441 11.3061 9.69101 11.3061Z" stroke="#191919" stroke-opacity="0.75" stroke-width="1.61547" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);


import MotionSection from "@/components/common/MotionSection";

const FacultyPage = () => {
    const { setHero, hideHero } = useHero();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        setHero({
            bgImage: FacultyHerobg,
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    const handleViewProfile = (id) => {
        navigate(`/faculty/${id}`);
    };

    return (
        <PageSection bg="bg-white" paddingClass="py-10 md:py-[80px] px-6 md:px-[60px] lg:px-[120px]">
            {/* Header */}
            <MotionSection>
                <div className="mb-8 md:mb-[40px]">
                    {/* Breadcrumb */}
                    <div className="mb-4">
                        <p className={`${T.font.family} text-[14px] text-[#191919BF]`}>
                            Home / <span className="text-[#223F7F] font-medium">Faculty</span>
                        </p>
                    </div>

                    <h1 className={`${T.font.family} font-bold text-[28px] sm:text-[32px] md:text-[42px] leading-[1.2] text-[#223F7F] mb-4 md:mb-[20px]`}>
                        Meet Our Distinguished Faculty
                    </h1>
                    <p className={`${T.font.family} text-[16px] md:text-[18px] font-regular text-[#4A5565] leading-[1.5] md:leading-[28px] max-w-[1440px]`}>
                        ASRAM's faculty comprises highly qualified educators, researchers, and practitioners who are committed to excellence in teaching and advancing healthcare knowledge. Our team brings together decades of clinical experience, research expertise, and a passion for nurturing the next generation of healthcare professionals.
                    </p>
                </div>

                {/* Search */}
                <div className="relative w-full mb-[40px]">
                    <div className="
                            relative 
                            w-full 
                            h-[44px] 
                            rounded-[10px] 
                            border border-[rgba(7,7,7,0.2)] 
                            flex items-center 
                            px-[20px] 
                            gap-[8px]
                        ">
                        <div className="flex-shrink-0">
                            <IconSearch />
                        </div>
                        <input
                            type="text"
                            placeholder="Search faculty by name, specialization, or department..."
                            className="
                                w-full
                                h-full
                                bg-transparent
                                text-[#191919]
                                placeholder-[#9CA3AF]
                                focus:outline-none
                                focus:ring-0
                                border-none
                                text-[14px]
                                font-regular
                            "
                        />
                    </div>
                </div>
            </MotionSection>

            {/* Leadership Section */}
            <MotionSection delay={0.1}>
                <div className="mb-[40px] md:mb-[60px]">
                    <h2 className={`${T.font.family} font-bold text-[28px] sm:text-[34px] md:text-[43px] text-[#223F7F] mb-6 md:mb-[40px]`}>
                        Leadership
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18px]">
                        {leadershipData.map((member) => (
                            <FacultyCard key={member.id} member={member} type="Leadership" onViewProfile={() => handleViewProfile(member.id)} />
                        ))}
                    </div>
                </div>
            </MotionSection>

            {/* Faculty Members Section */}
            <MotionSection delay={0.2}>
                <div>
                    <h2 className={`${T.font.family} font-bold text-[28px] sm:text-[34px] md:text-[43px] text-[#223F7F] mb-6 md:mb-[40px]`}>
                        Faculty Members
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18px]">
                        {facultyMembersData.map((member) => (
                            <FacultyCard key={member.id} member={member} onViewProfile={() => handleViewProfile(member.id)} />
                        ))}
                    </div>
                </div>
            </MotionSection>

        </PageSection>
    );
};

const FacultyCard = ({ member, onViewProfile, type }) => {
    return (
        <div className="bg-white border border-[#E5E7EB] rounded-[9.4px] overflow-hidden flex flex-col transition-shadow relative">
            {/* Image */}
            <div className="h-[280px] sm:h-[310px] w-full bg-gray-100 overflow-hidden relative">
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">No Image</div>
                )}
                {/* Tag */}
                {type === 'Leadership' && (
                    <div className="absolute top-4 sm:top-[18px] right-4 sm:right-[18px] bg-[#223F7F] text-white text-[11px] sm:text-[12px] font-regular px-4 sm:px-[18.09px] py-1.5 sm:py-[7.23px] rounded-[9.04px] uppercase tracking-wider">
                        Leadership
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 sm:p-[27px] flex flex-col flex-1">
                <h3 className={`${T.font.family} font-semibold text-[22px] sm:text-[25px] leading-tight sm:leading-[26px] text-[#223F7F] mb-[4px]`}>
                    {member.name}
                </h3>
                <p className={`${T.font.family} text-[14px] sm:text-[15.5px] leading-snug sm:leading-[24.8px] font-regular text-[#223F7F] mb-[2px]`}>
                    {member.role}
                </p>
                <p className={`${T.font.family} text-[15px] sm:text-[16.28px] leading-relaxed sm:leading-[23.5px] text-[#4A5565] mb-[12px]`}>
                    {member.department}
                </p>

                {/* Info Rows */}
                <div className="flex flex-col gap-[11px] mb-[24px]">
                    {/* Qualifications */}
                    {member.qualifications && (
                        <div className="flex items-start gap-[10px]">
                            <div className="flex-shrink-0 text-[#6B7280] mt-[3px]">
                                <IconCap />
                            </div>
                            <span className={`${T.font.family} text-[16.28px] text-[#191919BF] leading-[23.5px]`}>
                                {member.qualifications}
                            </span>
                        </div>
                    )}

                    {/* Specialty / Area */}
                    {member.specialty && (
                        <div className="flex items-start gap-[10px]">
                            <div className="flex-shrink-0 text-[#6B7280] mt-[3px]">
                                <IconBook />
                            </div>
                            <span className={`${T.font.family} text-[16.28px] text-[#191919BF] leading-[23.5px]`}>
                                {member.specialty}
                            </span>
                        </div>
                    )}

                    {/* Experience */}
                    {member.experience && (
                        <div className="flex items-start gap-[10px]">
                            <div className="flex-shrink-0 text-[#6B7280] mt-[3px]">
                                <IconRibbon />
                            </div>
                            <span className={`${T.font.family} text-[16.28px] text-[#191919BF] leading-[23.5px]`}>
                                {member.experience}
                            </span>
                        </div>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-[12px] mt-auto">
                    <button
                        className="w-full sm:flex-1 flex items-center justify-center gap-[7px] border border-[rgba(7,7,7,0.2)] bg-[#EEF2F7] hover:bg-[#E5E7EB] text-[#364153] h-[46px] sm:h-[50px] rounded-[9px] text-[15px] sm:text-[16.28px] leading-[16.3px] font-regular transition-colors">
                        <IconEmailLocal />
                        Email
                    </button>
                    <button
                        onClick={onViewProfile}
                        className="w-full sm:flex-1 flex items-center justify-center gap-[7px] bg-[#223F7F] hover:bg-[#1a3266] text-[#FFF] h-[46px] sm:h-[50px] rounded-[9px] text-[15px] sm:text-[16.28px] leading-[16.3px] font-regular transition-colors"  >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FacultyPage;
