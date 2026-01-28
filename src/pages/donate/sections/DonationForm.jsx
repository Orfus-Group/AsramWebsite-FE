import React, { useState, useRef, useEffect } from "react";
import { T } from "@/theme";

const DonationForm = () => {
    const [donationType, setDonationType] = useState("onetime");
    const [selectedAmount, setSelectedAmount] = useState(5000);
    const [customAmount, setCustomAmount] = useState("");
    const [designation, setDesignation] = useState("General Fund"); // Default designation
    const [isAnonymous, setIsAnonymous] = useState(false);

    // Custom Dropdown State
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        pan: "",
        address: "",
    });

    // Updated amounts grid as per Figma
    const amounts = [2500, 5000, 10000, 25000, 50000, 100000];
    const designations = [
        "General Fund",
        "Student Scholarships",
        "Research & Innovation",
        "Infrastructure",
        "Patient Care"
    ];

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount("");
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

    const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

    // Click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="py-[40px] lg:py-[80px] bg-white w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                {/* Heading aligned to the main grid (120px padding) */}
                <h2 className="text-[32px] md:text-[42px] font-bold text-[#223F7F] mb-[40px] md:mb-[80px] text-left">
                    Make Your Contribution
                </h2>

                {/* Form Container Centered independently */}
                <div className="w-full max-w-[880px] mx-auto">
                    <div className="bg-[#eef2f7] rounded-[20px] p-[20px] md:p-[40px]">

                        {/* Donation Type Toggle - mb-[20px] */}
                        <div className="flex gap-[16px] mb-[20px]">
                            <button
                                className={`flex-1 h-[58px] text-[16px] font-semibold leading-[24px] rounded-[8px] transition-all border border-[#223F7F] flex items-center justify-center ${donationType === "onetime"
                                        ? "bg-[#223F7F] text-white shadow-md"
                                        : "bg-white text-[#223F7F] hover:bg-gray-50"
                                    }`}
                                onClick={() => setDonationType("onetime")}
                            >
                                One-Time Donation
                            </button>
                            <button
                                className={`flex-1 h-[58px] text-[16px] font-semibold leading-[24px] rounded-[8px] transition-all border border-transparent ${donationType === "monthly"
                                        ? "bg-[#223F7F] text-white shadow-md"
                                        : "bg-white text-[#191919] hover:bg-gray-50 border-gray-200"
                                    } flex items-center justify-center gap-2`}
                                onClick={() => setDonationType("monthly")}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                Monthly Donation
                            </button>
                        </div>

                        {/* Amount Selection - Buttons mb-[16px] */}
                        <div className="mb-[16px]">
                            <h4 className="text-[16px] font-semibold text-[#191919] leading-[24px] mb-[16px]">Select Amount (INR)</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px]">
                                {amounts.map((amt) => (
                                    <button
                                        key={amt}
                                        className={`h-[58px] border rounded-[8px] text-[16px] font-bold transition-all ${selectedAmount === amt
                                                ? "border-[#223F7F] bg-[#223F7F] text-white shadow-md"
                                                : "border-[#e0e0e0] bg-white text-[#191919] hover:border-[#223F7F]"
                                            }`}
                                        onClick={() => handleAmountClick(amt)}
                                    >
                                        ₹{amt.toLocaleString()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Amount - Input mb-[20px] */}
                        <div className="mb-[20px]">
                            <h4 className="text-[14px] font-medium text-[#191919] mb-[8px]">Or enter custom amount</h4>
                            <div className="relative">
                                <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#191919] opacity-50 font-medium z-10">₹</span>
                                <input
                                    type="number"
                                    placeholder="Enter amount"
                                    className="w-full h-[50px] pl-[35px] pr-[16px] rounded-[8px] border border-[#e0e0e0] bg-white text-[#191919] placeholder:text-[#191919] placeholder:opacity-50 text-[16px] outline-none focus:border-[#223F7F]"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                />
                            </div>
                        </div>

                        {/* Designation - Custom Dropdown mb-[20px] */}
                        <div className="mb-[20px]" ref={dropdownRef}>
                            <label className="block text-[14px] font-bold text-[#191919] mb-[8px]">
                                Where should your donation go?
                            </label>
                            <div className="relative">
                                <div
                                    className="w-full h-[50px] px-[16px] rounded-[8px] border border-[#e0e0e0] bg-white text-[#191919] flex items-center justify-between cursor-pointer focus:border-[#223F7F]"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <span className="text-[16px]">{designation}</span>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 292.4 292.4"
                                        fill="#191919"
                                        className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                                    >
                                        <path d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z" />
                                    </svg>
                                </div>

                                {isDropdownOpen && (
                                    <div className="absolute top-[105%] left-0 w-full bg-white border border-[#e0e0e0] rounded-[8px] shadow-lg z-20 overflow-hidden">
                                        {designations.map((option) => (
                                            <div
                                                key={option}
                                                className={`px-[16px] py-[12px] text-[16px] cursor-pointer transition-colors ${designation === option
                                                        ? "bg-[#223F7F] text-white"
                                                        : "text-[#191919] hover:bg-[#223F7F] hover:text-white"
                                                    }`}
                                                onClick={() => {
                                                    setDesignation(option);
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Personal Details - Grid mb-[20px] */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[20px]">
                            <div>
                                <label className="block text-[14px] font-medium text-[#191919] mb-[8px]">Full Name *</label>
                                <input
                                    type="text"
                                    className="w-full h-[50px] px-[16px] rounded-[8px] border border-[#e0e0e0] bg-white text-[#191919] placeholder:text-[#191919] placeholder:opacity-50 text-[16px] outline-none focus:border-[#223F7F]"
                                    placeholder="Your name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-[14px] font-medium text-[#191919] mb-[8px]">Email Address *</label>
                                <input
                                    type="email"
                                    className="w-full h-[50px] px-[16px] rounded-[8px] border border-[#e0e0e0] bg-white text-[#191919] placeholder:text-[#191919] placeholder:opacity-50 text-[16px] outline-none focus:border-[#223F7F]"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-[14px] font-medium text-[#191919] mb-[8px]">Phone Number *</label>
                                <input
                                    type="tel"
                                    className="w-full h-[50px] px-[16px] rounded-[8px] border border-[#e0e0e0] bg-white text-[#191919] placeholder:text-[#191919] placeholder:opacity-50 text-[16px] outline-none focus:border-[#223F7F]"
                                    placeholder="+91 9876543210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-[14px] font-medium text-[#191919] mb-[8px]">PAN Number (for 80G certificate)</label>
                                <input
                                    type="text"
                                    className="w-full h-[50px] px-[16px] rounded-[8px] border border-[#e0e0e0] bg-white text-[#191919] placeholder:text-[#191919] placeholder:opacity-50 text-[16px] outline-none focus:border-[#223F7F]"
                                    placeholder="ABCDE1234F"
                                    value={formData.pan}
                                    onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-[14px] font-medium text-[#191919] mb-[8px]">Address</label>
                                <textarea
                                    className="w-full h-[100px] p-[16px] rounded-[8px] border border-[#e0e0e0] bg-white text-[#191919] placeholder:text-[#191919] placeholder:opacity-50 text-[16px] outline-none focus:border-[#223F7F] align-top resize-none"
                                    placeholder="Your address for tax receipt"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex items-start gap-[10px] mb-[20px]">
                            <div className="relative flex items-center mt-[3px]">
                                <input
                                    type="checkbox"
                                    id="anonymous"
                                    className="peer appearance-none w-[13px] h-[13px] rounded-[6px] border border-[#4a5565] checked:bg-[#223F7F] checked:border-[#223F7F] cursor-pointer"
                                    checked={isAnonymous}
                                    onChange={(e) => setIsAnonymous(e.target.checked)}
                                />
                                <svg
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>

                            <label htmlFor="anonymous" className="text-[14px] font-medium text-[rgba(25,25,25,0.75)] cursor-pointer leading-[1.43]">
                                Make this donation anonymous (your name will not be published in donor recognition)
                            </label>
                        </div>

                        {/* Summary Box */}
                        <div className="bg-white border border-[#223F7F] rounded-[12px] overflow-hidden mb-[20px]">
                            <div className="p-[20px]">
                                <div className="flex justify-between items-start mb-[15px]">
                                    <h4 className="text-[16px] font-semibold text-[#191919]">Donation Summary</h4>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#223F7F" strokeWidth="2" />
                                        <line x1="2" y1="10" x2="22" y2="10" stroke="#223F7F" strokeWidth="2" />
                                    </svg>
                                </div>

                                <div className="flex justify-between items-center mb-[8px]">
                                    <span className="text-[14px] text-[#666666]">Type:</span>
                                    <span className="text-[14px] font-medium text-[#191919] text-right">{donationType === "onetime" ? "One-Time" : "Monthly"}</span>
                                </div>

                                <div className="flex justify-between items-center mb-[8px]">
                                    <span className="text-[14px] text-[#666666]">Amount:</span>
                                    <span className="text-[20px] font-bold text-[#223F7F]">₹{finalAmount ? finalAmount.toLocaleString() : "0"}</span>
                                </div>

                                <div className="flex justify-between items-center mb-[15px]">
                                    <span className="text-[14px] text-[#666666]">Designation:</span>
                                    <span className="text-[14px] font-medium text-[#191919] text-right">{designation}</span>
                                </div>

                                <div className="pt-[15px] border-t border-gray-100 flex items-center gap-[8px]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    <span className="text-[12px] text-[#666666]">Eligible for 50% tax deduction under Section 80G</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full h-[55px] bg-[#223F7F] hover:bg-[#1a3163] text-white font-bold text-[16px] rounded-[8px] flex items-center justify-center gap-[8px] transition-colors mb-[20px]">
                            Proceed to Payment
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>

                        <p className="text-[12px] font-normal text-[rgba(25,25,25,0.6)] text-center leading-[1.33]">
                            Secure payment powered by Razorpay. We accept Credit/Debit Cards, UPI, Net Banking, and Wallets.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationForm;
