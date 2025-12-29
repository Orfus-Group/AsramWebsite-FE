import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
const PlaceholderUser = "/AsramWebsite-FE/assets/about/leader1.png";

const IconUsersBlue = "/AsramWebsite-FE/assets/icons/IconUsersBlue.svg";
const IconTrendUpBlue = "/AsramWebsite-FE/assets/icons/IconTrendUpBlue.svg";
const IconHeartBlue = "/AsramWebsite-FE/assets/icons/IconHeartBlue.svg";

const leaders = [
    { name: "Dr. Chebrolu Srinivas", role: "Dean & Chief Executive Officer", desc: "Leading ASRAM's strategic vision with over 25 years of experience in medical education and healthcare administration.", img: PlaceholderUser },
    { name: "Dr. Chebrolu Srinivas", role: "Dean & Chief Executive Officer", desc: "Leading ASRAM's strategic vision with over 25 years of experience in medical education and healthcare administration.", img: PlaceholderUser },
    { name: "Dr. Chebrolu Srinivas", role: "Dean & Chief Executive Officer", desc: "Leading ASRAM's strategic vision with over 25 years of experience in medical education and healthcare administration.", img: PlaceholderUser },
    { name: "Dr. Chebrolu Srinivas", role: "Dean & Chief Executive Officer", desc: "Leading ASRAM's strategic vision with over 25 years of experience in medical education and healthcare administration.", img: PlaceholderUser },
    { name: "Dr. Chebrolu Srinivas", role: "Dean & Chief Executive Officer", desc: "Leading ASRAM's strategic vision with over 25 years of experience in medical education and healthcare administration.", img: PlaceholderUser },
    { name: "Dr. Chebrolu Srinivas", role: "Dean & Chief Executive Officer", desc: "Leading ASRAM's strategic vision with over 25 years of experience in medical education and healthcare administration.", img: PlaceholderUser },
];

const philosophy = [
    {
        title: "Collaborative",
        desc: "Working together across disciplines",
        icon: IconUsersBlue
    },
    {
        title: "Forward-Thinking",
        desc: "Anticipating future challenges",
        icon: IconTrendUpBlue
    },
    {
        title: "People-Centered",
        desc: "Prioritizing wellbeing and growth",
        icon: IconHeartBlue
    },
];

const LeadershipGovernance = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                Leadership & Governance
            </h1>

            {/* Leaders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[28px] gap-y-[28px] mb-[60px]">
                {leaders.map((leader, index) => (
                    <div key={index} className="bg-white rounded-[12px] border border-[#E5E5E5] overflow-hidden flex flex-col h-full hover:shadow-[0px_4px_12px_rgba(34,63,127,0.08)] transition-all duration-300">
                        <div className="h-[279px] w-full bg-gray-200">
                            <img src={leader.img} className="w-full h-full object-cover" alt={leader.name} />
                        </div>
                        <div className="p-[20px] flex flex-col justify-center min-h-[160px] h-auto gap-[8px]">
                            <h4 className={`${T.font.family} font-medium text-[20px] text-[#223F7F] leading-tight`}>
                                {leader.name}
                            </h4>
                            <p className={`${T.font.family} font-regular text-[14px] text-[#191919] leading-[20px]`}>
                                {leader.role}
                            </p>
                            <p className={`${T.font.family} font-regular text-[14px] leading-[20px] text-[#191919BF]`}>
                                {leader.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Philosophy */}
            <div className="bg-white rounded-[10px] p-[40px] border border-[rgba(7,7,7,0.2)] w-full flex flex-col items-center shadow-[0_0.9px_1.7px_-0.9px_rgba(0,0,0,0.1),0_0.9px_2.6px_0_rgba(0,0,0,0.1)]">
                <div className="text-center max-w-4xl mx-auto mb-[40px]">
                    <h4 className={`${T.font.family} font-semibold text-[28px] md:text-[28px] text-[#223F7F] mb-[16px]`}>
                        Our Leadership Philosophy
                    </h4>
                    <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px]`}>
                        Our leadership team operates with transparency, collaboration, and a shared commitment to excellence. We believe in empowering our faculty, staff, and students to achieve their full potential while maintaining the highest standards of ethical conduct and professional integrity.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-[21px]">
                    {philosophy.map((item, index) => (
                        <div key={index} className="bg-[#EEF2F7] w-[246.5px] h-[167.9px] p-[20px] rounded-[12px] text-left flex flex-col items-start gap-[12px]">
                            <div className="w-[48px] h-[48px] bg-white rounded-[9px] flex items-center justify-center shrink-0">
                                <img src={item.icon} className="w-[21px] h-[21px]" alt="" />
                            </div>
                            <div className="flex flex-col gap-[4px] w-full">
                                <h4 className={`${T.font.family} font-medium text-[18px] text-[#223F7F]`}>
                                    {item.title}
                                </h4>
                                <p className={`${T.font.family} font-regular text-[14px] text-[#191919] leading-[20px]`}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
};

export default LeadershipGovernance;
