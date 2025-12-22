import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import PlaceholderUser from "@/assets/asram/careeropp.svg"; // Fallback icon

const leaders = [
    { name: "Dr. Chalasani Srinivas", role: "Dean & Principal", desc: "Leading ASRAM with vision and dedication since 2010." },
    { name: "Dr. G. Raja Sekhar", role: "Medical Superintendent", desc: "Overseeing clinical excellence and hospital management." },
    { name: "Dr. K. V. S. Seshu", role: "Director of Academics", desc: "Ensuring high standards in medical education and curriculum." },
    { name: "Dr. P. V. Ramana", role: "Head of Research", desc: "Driving innovation and research initiatives across departments." },
    { name: "Dr. A. V. Rao", role: "Chief Administrative Officer", desc: "Managing institutional operations and infrastructure." },
    { name: "Dr. M. L. N. Prasad", role: "Student Affairs Dean", desc: "Fostering student welfare and campus community growth." },
];

const philosophy = [
    { title: "Collaborative", desc: "Working together across disciplines." },
    { title: "Forward-Thinking", desc: "Anticipating future healthcare needs." },
    { title: "People-Centered", desc: "Focusing on patients, students, and staff." },
];

const LeadershipGovernance = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[28px] md:text-[36px] text-[#223F7F] mb-10`}>
                Leadership & Governance
            </h2>

            {/* Leaders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {leaders.map((leader, index) => (
                    <div key={index} className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <div className="h-[240px] bg-gray-200 flex items-center justify-center">
                            {/* Placeholder for Doctor Image */}
                            <img src={PlaceholderUser} className="w-20 h-20 opacity-40" alt="Placeholder" />
                        </div>
                        <div className="p-6">
                            <h4 className={`${T.font.family} font-bold text-[20px] text-[#223F7F] mb-1`}>
                                {leader.name}
                            </h4>
                            <p className={`${T.font.family} font-medium text-[14px] text-[#223F7F]/80 mb-3`}>
                                {leader.role}
                            </p>
                            <p className={`${T.font.family} text-[15px] text-[#4A5565] leading-[1.5]`}>
                                {leader.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Philosophy */}
            <div className="bg-white rounded-[20px] p-8 md:p-12 border border-[#223F7F]/10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h3 className={`${T.font.family} font-bold text-[24px] md:text-[30px] text-[#223F7F] mb-4`}>
                        Our Leadership Philosophy
                    </h3>
                    <p className={`${T.font.family} text-[16px] text-[#4A5565]`}>
                        Guided by a commitment to integrity, transparency, and inclusivity, our leadership team strives to empower every member of the ASRAM family to reach their full potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {philosophy.map((item, index) => (
                        <div key={index} className="bg-[#F7F9FC] p-6 rounded-[12px] text-center border border-gray-100">
                            <h4 className={`${T.font.family} font-bold text-[18px] text-[#223F7F] mb-2`}>
                                {item.title}
                            </h4>
                            <p className={`${T.font.family} text-[14px] text-[#4A5565]`}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default LeadershipGovernance;
