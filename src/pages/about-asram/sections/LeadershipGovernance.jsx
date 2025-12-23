import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import PlaceholderUser from "@/assets/about/leader1.png";

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
        icon: (
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9535 18.3146V16.5704C13.9535 15.6452 13.5859 14.758 12.9317 14.1038C12.2775 13.4496 11.3903 13.082 10.4651 13.082H5.23252C4.30734 13.082 3.42006 13.4496 2.76586 14.1038C2.11167 14.758 1.74414 15.6452 1.74414 16.5704V18.3146" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9536 2.72656C14.7017 2.92049 15.3641 3.35732 15.8371 3.96848C16.31 4.57964 16.5666 5.33054 16.5666 6.10331C16.5666 6.87608 16.31 7.62698 15.8371 8.23814C15.3641 8.84931 14.7017 9.28613 13.9536 9.48006" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.1861 18.3145V16.5703C19.1855 15.7974 18.9283 15.0466 18.4547 14.4357C17.9812 13.8248 17.3182 13.3885 16.5698 13.1953" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.84873 9.59394C9.77531 9.59394 11.3371 8.03214 11.3371 6.10556C11.3371 4.17899 9.77531 2.61719 7.84873 2.61719C5.92215 2.61719 4.36035 4.17899 4.36035 6.10556C4.36035 8.03214 5.92215 9.59394 7.84873 9.59394Z" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        )
    },
    {
        title: "Forward-Thinking",
        desc: "Anticipating future challenges",
        icon: (
           <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9536 6.10156H19.1862V11.3341" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.186 6.10156L11.7732 13.5144L7.41275 9.15389L1.74414 14.8225" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        )
    },
    {
        title: "People-Centered",
        desc: "Prioritizing wellbeing and growth",
        icon: (
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.74414 8.28326C1.74416 7.3128 2.03855 6.36516 2.58844 5.56552C3.13833 4.76588 3.91785 4.15185 4.82404 3.80453C5.73022 3.45721 6.72045 3.39294 7.66393 3.62021C8.60741 3.84748 9.45975 4.35559 10.1084 5.07744C10.1541 5.12629 10.2093 5.16524 10.2707 5.19186C10.332 5.21849 10.3982 5.23223 10.4651 5.23223C10.532 5.23223 10.5981 5.21849 10.6595 5.19186C10.7209 5.16524 10.7761 5.12629 10.8218 5.07744C11.4684 4.3509 12.3209 3.83852 13.2659 3.60849C14.2109 3.37846 15.2036 3.4417 16.1118 3.78978C17.02 4.13787 17.8006 4.75429 18.3498 5.55701C18.899 6.35973 19.1907 7.31067 19.186 8.28326C19.186 10.2804 17.8779 11.7716 16.5697 13.0798L11.7802 17.7132C11.6177 17.8999 11.4173 18.0498 11.1925 18.153C10.9676 18.2563 10.7233 18.3105 10.4758 18.312C10.2283 18.3136 9.98338 18.2625 9.75719 18.1621C9.53101 18.0617 9.32877 17.9143 9.16392 17.7298L4.36042 13.0798C3.05228 11.7716 1.74414 10.2891 1.74414 8.28326Z" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        )
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
            <div className="bg-white rounded-[10px] p-[40px] border border-[rgba(7,7,7,0.2)] max-w-[1200px] mx-auto flex flex-col items-center shadow-[0_0.9px_1.7px_-0.9px_rgba(0,0,0,0.1),0_0.9px_2.6px_0_rgba(0,0,0,0.1)]">
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
                                {item.icon}
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
