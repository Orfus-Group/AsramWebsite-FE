import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { HiOutlineShieldCheck, HiOutlineEye, HiOutlineClipboardCheck, HiOutlineExclamationCircle } from "react-icons/hi";

const items = [
    {
        icon: (<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9037 14.2388C21.9037 19.7147 18.0706 22.4527 13.5146 24.0407C13.2761 24.1215 13.0169 24.1176 12.7809 24.0297C8.21398 22.4527 4.38086 19.7147 4.38086 14.2388V6.5726C4.38086 6.28214 4.49624 6.00358 4.70163 5.7982C4.90701 5.59281 5.18558 5.47743 5.47604 5.47743C7.66639 5.47743 10.4043 4.16322 12.3099 2.49855C12.542 2.30032 12.8371 2.19141 13.1423 2.19141C13.4474 2.19141 13.7426 2.30032 13.9746 2.49855C15.8912 4.17417 18.6181 5.47743 20.8085 5.47743C21.099 5.47743 21.3775 5.59281 21.5829 5.7982C21.7883 6.00358 21.9037 6.28214 21.9037 6.5726V14.2388Z" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Ragging-Free Campus",
        description: "ASRAM follows a strict zero-tolerance policy against ragging, with active monitoring and firm disciplinary action.",
        list: [
            "24/7 anti-ragging helpline",
            "Anonymous reporting mechanism",
            "Regular awareness programs"
        ]
    },
    {
        icon: (<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5234 17.5231L20.809 8.76172L24.0945 17.5231C23.1417 18.235 21.9918 18.6183 20.809 18.6183C19.6262 18.6183 18.4762 18.235 17.5234 17.5231Z" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.18945 17.5231L5.47498 8.76172L8.76051 17.5231C7.80771 18.235 6.65777 18.6183 5.47498 18.6183C4.29219 18.6183 3.14226 18.235 2.18945 17.5231Z" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.66602 22.9961H18.6178" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.1416 3.28125V22.9944" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.28516 7.66691H5.47551C7.66586 7.66691 10.9514 6.57174 13.1417 5.47656C15.3321 6.57174 18.6176 7.66691 20.808 7.66691H22.9983" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Code of Conduct",
        description: "All students must adhere to professional behavioral standards expected in healthcare settings, including proper dress code, punctuality, and respectful interaction.",
        list: [
            "Professional attire requirements",
            "Attendance and punctuality standards",
            "Ethical behavior guidelines"
        ]
    },
    {
        icon: (<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25888 13.5232C2.16761 13.2774 2.16761 13.0069 2.25888 12.761C3.14784 10.6055 4.65679 8.76255 6.59443 7.46571C8.53208 6.16887 10.8112 5.47656 13.1427 5.47656C15.4743 5.47656 17.7534 6.16887 19.6911 7.46571C21.6287 8.76255 23.1376 10.6055 24.0266 12.761C24.1179 13.0069 24.1179 13.2774 24.0266 13.5232C23.1376 15.6787 21.6287 17.5217 19.6911 18.8185C17.7534 20.1154 15.4743 20.8077 13.1427 20.8077C10.8112 20.8077 8.53208 20.1154 6.59443 18.8185C4.65679 17.5217 3.14784 15.6787 2.25888 13.5232Z" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.142 16.4265C14.9565 16.4265 16.4275 14.9555 16.4275 13.141C16.4275 11.3264 14.9565 9.85547 13.142 9.85547C11.3274 9.85547 9.85645 11.3264 9.85645 13.141C9.85645 14.9555 11.3274 16.4265 13.142 16.4265Z" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Campus Security",
        description: "Round-the-clock security personnel, CCTV surveillance, and controlled access points ensure student safety at all times across campus premises and hostel facilities.",
        list: [
            "24/7 security personnel",
            "CCTV monitoring systems",
            "Visitor management protocols"
        ]
    },
    {
        icon: (<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1412 24.0949C19.1897 24.0949 24.093 19.1917 24.093 13.1432C24.093 7.09468 19.1897 2.19141 13.1412 2.19141C7.09272 2.19141 2.18945 7.09468 2.18945 13.1432C2.18945 19.1917 7.09272 24.0949 13.1412 24.0949Z" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.1416 8.76172V13.1424" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.1416 17.5195H13.1533" stroke="#223F7F" stroke-width="1.64276" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        title: "Safe Learning Environment",
        description: "We are committed to providing an environment free from harassment, discrimination, and misconduct. Internal committees address grievances promptly and fairly.",
        list: [
            "Internal Complaints Committee (ICC)",
            "Student grievance redressal system",
            "Confidential reporting channels"
        ]
    },
];

const SafetyDiscipline = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[60px] md:py-[80px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[32px] lg:text-[42px] text-[#223F7F] mb-10`}>
                Safety, Discipline & Campus Standards
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{ border: "solid 1px #e0e0e0" }}
                        className="bg-white p-[30px] rounded-[12px] flex flex-col items-start h-full shadow-sm border border-gray-100"
                    >
                        <div className="bg-[#223F7F]/10 p-3 rounded-[8px] mb-6">
                            {item.icon}
                        </div>
                        <h5 className={`${T.font.family} font-medium text-[24px] text-[#223F7F] mb-3`}>
                            {item.title}
                        </h5>
                        <p className={`${T.font.family} text-[18px] text-[#191919BF] leading-[26px] mb-4`}>
                            {item.description}
                        </p>

                        {/* List */}
                        <ul className="flex flex-col gap-2 pl-1">
                            {item.list.map((point, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-[4px] h-[4px] rounded-full bg-[#191919BF]"></span>
                                    <span className={`${T.font.family} leading-[20px] text-[14px] text-[#191919BF]`}>
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};

export default SafetyDiscipline;
