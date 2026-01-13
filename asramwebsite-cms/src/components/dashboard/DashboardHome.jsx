import React from 'react';

const DashboardHome = () => {
    // Card Data Configuration
    const cards = [
        {
            title: "ASRAM\nALL Colleges",
            bgColor: "#eff2f7",
            borderColor: "#d1d9e6" // Slightly darker for border
        },
        {
            title: "School of\nMedical College",
            bgColor: "#fbeceb",
            borderColor: "#e6d1d0"
        },
        {
            title: "ASRAM\nNursing College",
            bgColor: "#e8f5f6",
            borderColor: "#d0e6e7"
        },
        {
            title: "ASRAM\nAllied College",
            bgColor: "#f8f3e6",
            borderColor: "#e6e0d0"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[calc(100vh-100px)] p-6 font-['Montserrat']">

            {/* Header Section */}
            <div className="text-center dashboard-title-spacing">
                <h1 className="text-[28px] md:text-[32px] font-medium text-[#191919] dashboard-header-spacing leading-tight">
                    Welcome to ASRAM Dashboard
                </h1>
                <p className="text-[16px] text-[#191919] opacity-60 font-normal">
                    Please select a school before proceeding
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full max-w-[800px]">
                {cards.map((card, index) => (
                    <button
                        key={index}
                        className="flex flex-col items-center justify-center text-center transition-transform transform hover:scale-[1.02] cursor-pointer"
                        style={{
                            backgroundColor: card.bgColor,
                            border: `1px solid ${card.borderColor}`, // Adding a subtle border for definition
                            borderRadius: '16px',
                            height: '280px', // Fixed height for uniformity
                            width: '100%',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}
                    >
                        <span
                            className="text-[#333333] font-normal whitespace-pre-line leading-relaxed"
                            style={{
                                fontSize: '24px',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            {card.title}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DashboardHome;
