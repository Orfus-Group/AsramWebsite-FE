import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const stats = [
    {
        value: "450+",
        label: "Total Publications (2020-2024)",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H11V9H18V20Z" fill="white" />
            </svg>
        ) // Book/Open
    },
    {
        value: "320+",
        label: "SCI/Scopus Indexed",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="white" />
            </svg>
        ) // Badge/Ribbon placeholder
    },
    {
        value: "2,800+",
        label: "Total Citations",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="white" />
            </svg>
        ) // Chart
    },
    {
        value: "18",
        label: "Average H-Index",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="white" />
            </svg>
        ) // Badge
    }
];

const recentPubs = [
    {
        title: "Machine Learning Algorithms for Early Detection of Diabetic Retinopathy",
        authors: "Patel R, Kumar S, Sharma P, et al.",
        journal: "Journal of Medical Systems",
        metrics: "SCI, IF: 4.8"
    },
    {
        title: "Effectiveness of Nurse-Led Hypertension Management in Rural India",
        authors: "Krishnan M, Verma A, Singh N, et al.",
        journal: "The Lancet Regional Health",
        metrics: "SCI, IF: 6.2"
    },
    {
        title: "Genomic Variants in South Indian Population",
        authors: "Iyer S, Reddy K, Nair L, et al.",
        journal: "Nature Genetics",
        metrics: "SCI, IF: 38.3"
    }
];

const ResearchPublications = () => {
    return (
        <PageSection bgColor="#DEE4F2" paddingClass="py-[80px]">
            <h2 className={`${T.font.family} font-bold text-[40px] text-[#1E3A8A] mb-10`}>
                Publications
            </h2>

            {/* 1. Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-[12px] p-6 flex flex-col items-center text-center shadow-sm">
                        <div className="w-[44px] h-[44px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-4">
                            {stat.icon}
                        </div>
                        <h3 className={`${T.font.family} font-bold text-[32px] text-[#1E3A8A] mb-1`}>
                            {stat.value}
                        </h3>
                        <p className={`${T.font.family} text-[14px] text-gray-500`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* 2. Recent Publications Card */}
            <div className="bg-white rounded-[12px] p-[40px] shadow-sm mb-10">
                <h3 className={`${T.font.family} font-bold text-[24px] text-[#1E3A8A] mb-6`}>
                    Recent Publications (2024)
                </h3>

                <div className="flex flex-col gap-6 mb-8">
                    {recentPubs.map((pub, index) => (
                        <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                            <h4 className={`${T.font.family} text-[18px] text-[#333] mb-1 leading-snug`}>
                                {pub.title}
                            </h4>
                            <p className={`${T.font.family} text-[14px] text-gray-500 mb-2 italic`}>
                                {pub.authors}
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-[#008C8C] text-[14px] font-medium">
                                    {pub.journal}
                                </span>
                                <span className="bg-[#E9ECEF] text-gray-600 text-[12px] px-2 py-0.5 rounded-[4px] font-medium">
                                    {pub.metrics}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-[#5A6B89] font-medium text-[15px] hover:text-[#1E3A8A] transition-colors">
                    View All Publications
                    <span>→</span>
                </button>
            </div>

            {/* 3. Access Database Card */}
            <div className="bg-white rounded-[12px] p-[40px] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-[700px]">
                    <h3 className={`${T.font.family} font-bold text-[22px] text-[#1E3A8A] mb-2`}>
                        Access Complete Publication Database
                    </h3>
                    <p className={`${T.font.family} text-[15px] text-gray-600`}>
                        Browse our comprehensive publication repository with year-wise listings, citation metrics, and direct links to Scopus, SCI, and PubMed.
                    </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <button className="border border-[#7B8BA4] text-[#7B8BA4] px-5 py-2.5 rounded-[6px] font-medium text-[15px] flex items-center gap-2 hover:bg-gray-50 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Publication Repository
                    </button>

                    <button className="bg-[#008C8C] text-white px-5 py-2.5 rounded-[6px] font-medium text-[15px] flex items-center gap-2 hover:bg-[#007A7A] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Scopus Profile
                    </button>
                </div>
            </div>

        </PageSection>
    );
};

export default ResearchPublications;
