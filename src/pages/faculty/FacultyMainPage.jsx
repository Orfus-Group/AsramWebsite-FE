import React, { useLayoutEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "@/components/common/CustomDropdown";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { useHero } from "@/context/HeroContext";
const FacultyHerobg = "/AsramWebsite-FE/assets/faculty/asramfacultybanner.png";
import { leadershipData, facultyMembersData } from "./facultyData";
import MotionSection from "@/components/common/MotionSection";

const IconEmailLocal = (props) => (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_299_1384)">
            <path d="M16.9624 3.51953L9.70008 8.14542C9.45364 8.28856 9.17371 8.36396 8.88872 8.36396C8.60372 8.36396 8.32379 8.28856 8.07735 8.14542L0.807739 3.51953" stroke="#364153" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <path d="M0.807739 0.808594H16.9624V13.7323H0.807739V0.808594Z" stroke="#364153" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <clipPath id="clip0_299_1384">
                <path d="M0.807739 0.808594H16.9624V13.7323H0.807739V0.808594Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const IconCap = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_299_1364)">
            <path d="M17.3013 8.82275C17.4459 8.75896 17.5686 8.65415 17.6543 8.52131C17.7399 8.38847 17.7846 8.23342 17.783 8.07539C17.7814 7.91735 17.7334 7.76327 17.6451 7.63222C17.5567 7.50117 17.4319 7.39892 17.286 7.33814L10.3629 4.18474C10.1524 4.08874 9.9238 4.03906 9.69248 4.03906C9.46115 4.03906 9.23252 4.08874 9.02206 4.18474L2.09978 7.33491C1.95597 7.39789 1.83364 7.50141 1.74774 7.63281C1.66184 7.76421 1.61609 7.9178 1.61609 8.07479C1.61609 8.23178 1.66184 8.38537 1.74774 8.51677C1.83364 8.64817 1.95597 8.75169 2.09978 8.81467L9.02206 11.9713C9.23252 12.0673 9.46115 12.117 9.69248 12.117C9.9238 12.117 10.1524 12.0673 10.3629 11.9713L17.3013 8.82275Z" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.7698 8.07812V12.9245" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.8446 10.0977V12.9247C4.8446 13.5674 5.35521 14.1838 6.26408 14.6382C7.17296 15.0926 8.40566 15.3479 9.69101 15.3479C10.9764 15.3479 12.2091 15.0926 13.1179 14.6382C14.0268 14.1838 14.5374 13.5674 14.5374 12.9247V10.0977" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
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
        <g clipPath="url(#clip0_299_1371)">
            <path d="M9.69287 5.65625V16.9645" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.42199 14.5379C2.20777 14.5379 2.00232 14.4528 1.85084 14.3013C1.69936 14.1498 1.61426 13.9444 1.61426 13.7302V3.22961C1.61426 3.01538 1.69936 2.80993 1.85084 2.65845C2.00232 2.50698 2.20777 2.42188 2.42199 2.42188H6.46066C7.31756 2.42188 8.13936 2.76228 8.74528 3.36819C9.3512 3.97411 9.6916 4.79591 9.6916 5.65281C9.6916 4.79591 10.032 3.97411 10.6379 3.36819C11.2438 2.76228 12.0656 2.42188 12.9225 2.42188H16.9612C17.1754 2.42188 17.3809 2.50698 17.5324 2.65845C17.6838 2.80993 17.7689 3.01538 17.7689 3.22961V13.7302C17.7689 13.9444 17.6838 14.1498 17.5324 14.3013C17.3809 14.4528 17.1754 14.5379 16.9612 14.5379H12.1148C11.4721 14.5379 10.8558 14.7932 10.4013 15.2476C9.9469 15.7021 9.6916 16.3184 9.6916 16.9611C9.6916 16.3184 9.4363 15.7021 8.98186 15.2476C8.52742 14.7932 7.91107 14.5379 7.2684 14.5379H2.42199Z" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
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
        <path d="M12.5007 10.4102L13.7244 17.2969C13.7381 17.378 13.7267 17.4613 13.6918 17.5358C13.6568 17.6102 13.6 17.6722 13.5288 17.7135C13.4577 17.7548 13.3757 17.7734 13.2937 17.7668C13.2117 17.7602 13.1337 17.7287 13.0701 17.6765L10.1784 15.5062C10.0388 15.4019 9.86924 15.3455 9.69499 15.3455C9.52074 15.3455 9.35116 15.4019 9.21156 15.5062L6.31503 17.6757C6.25148 17.7278 6.17356 17.7592 6.09169 17.7658C6.00981 17.7724 5.92786 17.7539 5.85677 17.7128C5.78568 17.6716 5.72884 17.6098 5.69382 17.5354C5.6588 17.4611 5.64727 17.3779 5.66076 17.2969L6.88367 10.4102" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.69101 11.3061C12.3676 11.3061 14.5374 9.13628 14.5374 6.45969C14.5374 3.78309 12.3676 1.61328 9.69101 1.61328C7.01441 1.61328 4.8446 3.78309 4.8446 6.45969C4.8446 9.13628 7.01441 11.3061 9.69101 11.3061Z" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.61547" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// --- New Icons for Filter Section ---

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5005 17.4995L13.8838 13.8828" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#191919" strokeOpacity="0.75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FilterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33336 16.6667C8.33329 16.8215 8.37637 16.9733 8.45777 17.1051C8.53917 17.2368 8.65566 17.3433 8.79419 17.4125L10.4609 18.2458C10.5879 18.3093 10.7291 18.3393 10.8711 18.3329C11.013 18.3264 11.1509 18.2838 11.2717 18.2091C11.3925 18.1344 11.4922 18.03 11.5614 17.9059C11.6305 17.7818 11.6668 17.6421 11.6667 17.5V11.6667C11.6669 11.2537 11.8204 10.8554 12.0975 10.5492L18.1167 3.89167C18.2246 3.77213 18.2955 3.6239 18.3209 3.4649C18.3464 3.3059 18.3252 3.14294 18.2599 2.99573C18.1947 2.84851 18.0882 2.72335 17.9534 2.63538C17.8185 2.5474 17.661 2.50038 17.5 2.5H2.50003C2.33886 2.50006 2.18118 2.54685 2.04607 2.6347C1.91096 2.72255 1.80422 2.84769 1.73878 2.99497C1.67334 3.14225 1.65201 3.30534 1.67738 3.46449C1.70274 3.62364 1.77371 3.77203 1.88169 3.89167L7.90252 10.5492C8.17964 10.8554 8.33317 11.2537 8.33336 11.6667V16.6667Z" stroke="#3A3A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.84013 5.95438C2.0511 5.74348 2.33719 5.625 2.6355 5.625C2.93381 5.625 3.21991 5.74348 3.43088 5.95438L8.99963 11.5231L14.5684 5.95438C14.7806 5.74946 15.0647 5.63606 15.3597 5.63863C15.6547 5.64119 15.9368 5.7595 16.1454 5.96809C16.354 6.17667 16.4723 6.45884 16.4749 6.75381C16.4774 7.04878 16.3641 7.33296 16.1591 7.54513L9.795 13.9093C9.58403 14.1202 9.29794 14.2386 8.99963 14.2386C8.70132 14.2386 8.41522 14.1202 8.20425 13.9093L1.84013 7.54513C1.62922 7.33417 1.51074 7.04807 1.51074 6.74976C1.51074 6.45145 1.62922 6.16535 1.84013 5.95438Z" fill="#3A3A3A" />
    </svg>
);


const FacultyPage = () => {
    const { setHero, hideHero } = useHero();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCollege, setActiveCollege] = useState("all");
    const [activeDepartment, setActiveDepartment] = useState("all");
    const [activeDesignation, setActiveDesignation] = useState("all");

    useLayoutEffect(() => {
        setHero({
            bgImage: FacultyHerobg,
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    const handleViewProfile = (id) => {
        navigate(`/faculty/${id}`);
    };

    // Derive Dropdown Options
    const colleges = useMemo(() => [
        { value: "all", label: "Select College" },
        { value: "medical", label: "Medical College" },
        { value: "dental", label: "Dental College" },
        { value: "nursing", label: "Nursing College" },
        { value: "paramedical", label: "Paramedical College" },
        { value: "physiotherapy", label: "Physiotherapy College" },
        { value: "pharmacy", label: "Pharmacy College" },
    ], []);

    const departments = useMemo(() => {
        const allDepts = [...leadershipData, ...facultyMembersData]
            .map(m => m.department)
            .filter(Boolean);
        const unique = [...new Set(allDepts)].sort();
        return [{ value: "all", label: "Select Department" }, ...unique.map(d => ({ value: d, label: d }))];
    }, []);

    const designations = useMemo(() => {
        const allRoles = [...leadershipData, ...facultyMembersData]
            .map(m => m.role)
            .filter(Boolean);
        const unique = [...new Set(allRoles)].sort();
        return [{ value: "all", label: "Select Designation" }, ...unique.map(r => ({ value: r, label: r }))];
    }, []);

    // Filter Logic
    const filterFaculty = (data) => {
        return data.filter(member => {
            // Search
            const matchesSearch = !searchQuery.trim() ||
                member.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.specialty?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.department?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.role?.toLowerCase().includes(searchQuery.toLowerCase());

            // College - Simple check if department contains college keyword (approximate)
            // In a real app, 'college' should be a property on the member
            const matchesCollege = activeCollege === "all" ||
                (activeCollege === 'nursing' && member.department?.toLowerCase().includes('nursing')) ||
                (activeCollege === 'medical' && member.department?.toLowerCase().includes('medical')) ||
                // Default fallback if no match found for other colleges in mock data
                true;

            // Department
            const matchesDepartment = activeDepartment === "all" || member.department === activeDepartment;

            // Designation
            const matchesDesignation = activeDesignation === "all" || member.role === activeDesignation;

            return matchesSearch && matchesCollege && matchesDepartment && matchesDesignation;
        });
    };

    const filteredLeadership = useMemo(() => filterFaculty(leadershipData), [searchQuery, activeCollege, activeDepartment, activeDesignation]);
    const filteredFaculty = useMemo(() => filterFaculty(facultyMembersData), [searchQuery, activeCollege, activeDepartment, activeDesignation]);

    const hasResults = filteredLeadership.length > 0 || filteredFaculty.length > 0;

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

                {/* FILTERS SECTION */}
                <div className="flex flex-col gap-[20px] mb-[40px]">

                    {/* Row 1: Search + Filter Button */}
                    <div className="flex flex-col lg:flex-row gap-[20px] w-full">
                        {/* Search Bar */}
                        {/* Search Bar */}
                        <div className="flex-1 !h-[50px] min-h-[50px] md:!h-[44px] md:min-h-[44px] rounded-[10px] border border-[#07070733] bg-white flex items-center px-[16px] md:px-[20px] gap-[10px] shadow-sm hover:border-[#223F7F] focus-within:border-[#223F7F] transition-all">
                            <div className="flex-shrink-0">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                placeholder="Search faculty..."
                                className={`flex-1 h-full border-none outline-none bg-transparent ${T.font.family} text-[16px] text-[#191919] placeholder-[#6B7280] font-medium`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filters Button */}
                        <button className="hidden lg:flex w-[162px] h-[44px] rounded-[9.4px] border border-[#07070733] bg-white items-center justify-center gap-[10px] hover:bg-gray-50 transition-colors">
                            <FilterIcon />
                            <span className={`${T.font.family} font-medium text-[16px] text-[#3A3A3A]`}>Filters</span>
                        </button>
                    </div>

                    {/* Row 2: Dropdowns */}
                    <div className="flex flex-col sm:flex-row gap-[20px] w-full">
                        {/* College Dropdown */}
                        <CustomDropdown
                            options={[{ value: "all", label: "Select College" }, ...colleges]}
                            value={activeCollege}
                            onChange={setActiveCollege}
                            placeholder="Select College"
                            className="w-full flex-1"
                        />

                        {/* Department Dropdown */}
                        <CustomDropdown
                            options={[{ value: "all", label: "Select Department" }, ...departments]}
                            value={activeDepartment}
                            onChange={setActiveDepartment}
                            placeholder="Select Department"
                            className="w-full flex-1"
                        />

                        {/* Designation Dropdown */}
                        <CustomDropdown
                            options={[{ value: "all", label: "Select Designation" }, ...designations]}
                            value={activeDesignation}
                            onChange={setActiveDesignation}
                            placeholder="Select Designation"
                            className="w-full flex-1"
                        />
                    </div>

                </div>
            </MotionSection>

            {/* Search Results / Sections */}
            {!hasResults ? (
                <MotionSection>
                    <div className="py-20 text-center">
                        <p className={`${T.font.family} text-[20px] text-[#4A5565] mb-4`}>
                            No faculty members found matching your search.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setActiveCollege("all");
                                setActiveDepartment("all");
                                setActiveDesignation("all");
                            }}
                            className="text-[#223F7F] font-semibold hover:underline"
                        >
                            Clear filters and show all
                        </button>
                    </div>
                </MotionSection>
            ) : (
                <>
                    {/* Leadership Section */}
                    {filteredLeadership.length > 0 && (
                        <MotionSection delay={0.1}>
                            <div className="mb-[40px] md:mb-[60px]">
                                <h2 className={`${T.font.family} font-bold text-[28px] sm:text-[34px] md:text-[43px] text-[#223F7F] mb-6 md:mb-[40px]`}>
                                    Leadership
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18px]">
                                    {filteredLeadership.map((member) => (
                                        <FacultyCard key={member.id} member={member} type="Leadership" onViewProfile={() => handleViewProfile(member.id)} />
                                    ))}
                                </div>
                            </div>
                        </MotionSection>
                    )}

                    {/* Faculty Members Section */}
                    {filteredFaculty.length > 0 && (
                        <MotionSection delay={0.2}>
                            <div>
                                <h2 className={`${T.font.family} font-bold text-[28px] sm:text-[34px] md:text-[43px] text-[#223F7F] mb-6 md:mb-[40px]`}>
                                    Faculty Members
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18px]">
                                    {filteredFaculty.map((member) => (
                                        <FacultyCard key={member.id} member={member} onViewProfile={() => handleViewProfile(member.id)} />
                                    ))}
                                </div>
                            </div>
                        </MotionSection>
                    )}
                </>
            )}

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
