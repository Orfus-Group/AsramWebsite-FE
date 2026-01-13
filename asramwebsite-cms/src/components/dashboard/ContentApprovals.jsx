import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, label, bgColor }) => (
    <div
        className="font-['Montserrat'] flex flex-col"
        style={{
            width: 'clamp(220px, 18vw, 264px)',
            height: 'clamp(125px, 12vw, 150px)',
            padding: 'clamp(16px, 1.5vw, 20px)',
            borderRadius: '10px',
            border: '1px solid rgba(7, 7, 7, 0.2)',
            backgroundColor: bgColor,
            gap: 'clamp(14px, 1.5vw, 20px)'
        }}
    >
        {/* TITLE */}
        <h3
            style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                fontWeight: 500,
                color: '#3a3a3a',
                margin: 0,
                lineHeight: '1.2'
            }}
        >
            {title}
        </h3>

        {/* VALUE */}
        <div className="flex items-end flex-1">
            <span
                style={{
                    fontSize: 'clamp(40px, 3.5vw, 52px)',
                    fontWeight: 500,
                    color: '#3a3a3a',
                    lineHeight: 1
                }}
            >
                {value}
            </span>

            {label && (
                <span
                    style={{
                        fontSize: 'clamp(16px, 1.5vw, 22px)',
                        fontWeight: 500,
                        color: '#3a3a3a',
                        marginLeft: '8px',
                        paddingBottom: 'clamp(4px, 0.8vw, 8px)'
                    }}
                >
                    {label}
                </span>
            )}
        </div>
    </div>
);

const ContentApprovals = () => {
    const [padding, setPadding] = useState('24px 40px');

    // State for dropdowns
    const [activeDropdown, setActiveDropdown] = useState(null); // 'content', 'status', 'institute'
    const [filters, setFilters] = useState({
        content: 'All Types',
        status: '',
        institute: ''
    });

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const handleSelect = (filterName, value) => {
        setFilters({ ...filters, [filterName]: value });
        setActiveDropdown(null);
    };

    // Dropdown Options
    const contentOptions = ['All Types', 'News', 'Events'];
    // Status and Institute are inputs in the design, not dropdowns, but I will implement as dropdown/inputs based on user needs.
    // The design shows inputs for Status and Institute, but dropdown for Content.
    // Wait, the screenshot shows "Content: All Types" as a dropdown. "Status:" and "Institute :" look like labeled inputs or placeholders.
    // I will implement them as simple inputs for now to match the screenshot "look" of empty boxes.

    const [statusInput, setStatusInput] = useState('');
    const [instituteInput, setInstituteInput] = useState('');


    // MOCK DATA based on Figma
    const stats = [
        { title: 'Total Content', value: '10', bgColor: '#eef2f7' }, // Light Gray/Blueish
        { title: 'Pending Approval', value: '5', bgColor: '#fbeceb' }, // Light Red/Pink
        { title: 'Approved', value: '27', bgColor: '#e8f5f6' }, // Light Teal
    ];

    const approvals = [
        { id: 1, school: 'Medical College', content: 'Events', title: 'National Conference on General Surgery Advances 2026', status: 'Pending Approval', date: '08 Jan 2026, 11:30 AM' },
        { id: 2, school: 'Paramedical', content: 'News', title: 'New Telemedicine Facility Launched at ASRAM Hospital', status: 'Pending Approval', date: '08 Jan 2026, 11:30 AM' },
        { id: 3, school: 'Paramedical', content: 'News', title: 'New Telemedicine Facility Launched at ASRAM Hospital', status: 'Approved', date: '08 Jan 2026, 11:30 AM' },
        { id: 4, school: 'Nursing College', content: 'Events', title: 'New Telemedicine Facility Launched at ASRAM Hospital', status: 'Approved', date: '08 Jan 2026, 11:30 AM' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setPadding('16px');
            } else {
                setPadding('24px 40px');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Pending Approval': return { backgroundColor: '#F59E0B', color: '#fff' }; // Orange
            case 'Approved': return { backgroundColor: '#10b981', color: '#fff' };      // Green
            default: return {};
        }
    };

    return (
        <div className="flex flex-col w-full h-full font-['Montserrat'] bg-white pb-10"
            style={{ padding: padding, overflowY: 'auto' }}>

            {/* Header */}
            <h1 className="text-[24px] font-semibold text-[#223f7f]" style={{ marginBottom: '20px' }}>
                Content Approvals
            </h1>

            {/* Stats Row */}
            <div
                className="flex flex-wrap"
                style={{
                    gap: '20px',
                    marginBottom: '40px',
                }}
            >
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        bgColor={stat.bgColor}
                    />
                ))}
            </div>

            {/* Filter Section */}
            <div className="flex items-center w-full"
                style={{
                    height: '58px',
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    marginBottom: '24px',
                    gap: '40px'
                }}>
                {/* Filters Label */}
                <div className="flex items-center gap-[8px] text-[#191919] text-[14px] shrink-0 whitespace-nowrap">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M6.66708 13.3333V9.33333L1.50574 3.11333H14.4937L9.33374 9.33333V14L6.66708 13.3333Z"
                            stroke="#223F7F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="font-semibold">Filters:</span>
                </div>

                {/* Filters Container */}
                <div className="flex items-center gap-6 flex-1 min-w-0">
                    {/* Content Dropdown */}
                    <div className="flex items-center gap-3">
                        <span className="text-[14px] text-[#191919]/70 whitespace-nowrap">
                            Content:
                        </span>
                        <div className="relative" style={{ width: '140px' }}> {/* Fixed width for dropdown */}
                            <div
                                className="enquiries-filter-select"
                                onClick={() => toggleDropdown('content')}
                            >
                                <span className="text-[14px] text-[#191919] truncate ">
                                    {filters.content}
                                </span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${activeDropdown === 'content' ? 'rotate-180' : ''}`}>
                                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            {activeDropdown === 'content' && (
                                <div className="enquiries-dropdown-menu">
                                    {contentOptions.map((option) => (
                                        <div key={option} className="enquiries-dropdown-item" onClick={(e) => { e.stopPropagation(); handleSelect('content', option); }}>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Status Input */}
                    <div className="flex items-center gap-3">
                        <span className="text-[14px] text-[#191919]/70 whitespace-nowrap">
                            Status:
                        </span>
                        <input
                            type="text"
                            value={statusInput}
                            onChange={(e) => setStatusInput(e.target.value)}
                            className="bg-white border border-[#e0e0e0] rounded-[8px] h-[34px] px-2 text-[14px]"
                            style={{ width: '140px' }}
                        />
                    </div>

                    {/* Institute Input */}
                    <div className="flex items-center gap-3">
                        <span className="text-[14px] text-[#191919]/70 whitespace-nowrap">
                            Institute :
                        </span>
                        <input
                            type="text"
                            value={instituteInput}
                            onChange={(e) => setInstituteInput(e.target.value)}
                            className="bg-white border border-[#e0e0e0] rounded-[8px] h-[34px] px-2 text-[14px]"
                            style={{ width: '140px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="w-full overflow-x-auto rounded-[8px] border border-[#e0e0e0]">
                <div className="flex flex-col bg-white overflow-hidden" style={{ minWidth: '1000px' }}>

                    {/* Table Header */}
                    <div className="approvals-table-grid bg-[#f6f8fb] border-b border-[#e0e0e0]"
                        style={{
                            height: '52.5px'
                        }}>
                        {['School', 'Content', 'Title', 'Status', 'Submit Date', 'Actions'].map((head, i) => (
                            <div key={i} className={`flex items-center ${i === 2 ? 'justify-start' : 'justify-center'} font-bold text-[14px] text-[#191919] leading-[1.43] whitespace-nowrap`}
                                style={{ padding: i === 2 ? '0' : '0 10px' }}>{head}</div>
                        ))}
                    </div>

                    {/* Table Body */}
                    {approvals.map((row) => (
                        <div key={row.id} className="approvals-table-grid border-b border-[#e0e0e0] last:border-b-0"
                            style={{
                                height: '80px',
                                alignItems: 'center'
                            }}>

                            {/* School */}
                            <div className="flex justify-center">
                                <span className="bg-[#eef2f7] text-[#223f7f] text-[12px] font-medium"
                                    style={{
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '8px 12px',
                                        borderRadius: '6px',
                                        minWidth: '120px'
                                    }}>
                                    {row.school}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex justify-center">
                                <span className="bg-[#eef2f7] text-[#223f7f] text-[12px] font-medium"
                                    style={{
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '8px 12px',
                                        borderRadius: '6px',
                                        width: '80px'
                                    }}>
                                    {row.content}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="flex items-center text-[13px] text-[#191919] font-normal leading-tight"
                                style={{ paddingRight: '20px' }}>
                                {row.title}
                            </div>

                            {/* Status */}
                            <div className="flex justify-center">
                                <span
                                    className="text-[12px] font-medium"
                                    style={{
                                        ...getStatusStyle(row.status),
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '4px 12px',
                                        borderRadius: '6px',
                                        minWidth: '140px'
                                    }}
                                >
                                    {row.status}
                                </span>
                            </div>

                            {/* Date */}
                            <div className="flex items-center justify-center text-[12px] text-[#191919] opacity-80">
                                {row.date}
                            </div>

                            {/* Action Button */}
                            <div className="flex justify-center">
                                <button
                                    className="flex items-center justify-center gap-2 bg-[#223f7f] text-white hover:bg-[#1a3366] transition-colors"
                                    style={{
                                        height: '36px',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    Review Content
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentApprovals;
