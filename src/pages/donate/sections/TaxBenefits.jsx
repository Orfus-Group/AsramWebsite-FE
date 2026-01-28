import React from "react";
import { T } from "@/theme";

const TaxBenefits = () => {
    return (
        <section className="py-[40px] md:py-[80px] bg-[#eef2f7] w-full font-montserrat">
            <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[60px] lg:px-[120px]">
                {/* Main White Card */}
                <div className="bg-white rounded-[8px] p-[20px] md:p-[40px] shadow-sm">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row gap-[12px] items-start mb-[20px]">
                        {/* Icon Container - 48x48, Radius 6px, BG #eef2f7 */}
                        <div className="w-[48px] h-[48px] rounded-[6px] bg-[#eef2f7] flex items-center justify-center shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-[#223F7F] mb-[2px] leading-[1.2]">
                                Tax Benefits Information
                            </h3>
                            <p className="text-[14px] md:text-[16px] text-[rgba(25,25,25,0.75)] leading-[1.5] font-normal">
                                ASRAM is registered under Section 80G of the Income Tax Act. All donations are eligible for tax deduction.
                            </p>
                        </div>
                    </div>

                    {/* 80G Box - BG #eef2f7, Radius 8px, Padding 24px */}
                    <div className="bg-[#eef2f7] rounded-[8px] p-[24px] mb-[40px]">
                        <h4 className="text-[18px] md:text-[20px] font-semibold text-[#223F7F] mb-[12px]">
                            80G Tax Deduction
                        </h4>
                        <p className="text-[14px] text-[rgba(25,25,25,0.75)] mb-[24px] leading-[1.5] max-w-[800px]">
                            Donors can claim 50% of their donation amount as a deduction from taxable income. For example,
                            a donation of ₹1,00,000 allows you to claim a deduction of ₹50,000.
                        </p>

                        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[16px]">
                            {/* PAN Number Box - White, Radius 4px, Height 76px, Padding 20px */}
                            <div className="bg-white rounded-[4px] px-[20px] py-[16px] flex flex-col justify-center h-[76px] flex-1 min-w-[200px]">
                                <p className="text-[12px] font-normal text-[rgba(25,25,25,0.6)] mb-[4px]">PAN Number</p>
                                <p className="text-[18px] font-medium text-[#191919]">AAATA1234F20195</p>
                            </div>
                            {/* Valid Till Box - White, Radius 4px, Height 76px, Padding 20px */}
                            <div className="bg-white rounded-[4px] px-[20px] py-[16px] flex flex-col justify-center h-[76px] flex-1 min-w-[200px]">
                                <p className="text-[12px] font-normal text-[rgba(25,25,25,0.6)] mb-[4px]">Valid Till</p>
                                <p className="text-[18px] font-medium text-[#191919]">Perpetuity</p>
                            </div>
                        </div>
                    </div>

                    {/* Important Notes */}
                    <div>
                        <h5 className="text-[18px] font-medium text-[#191919] mb-[16px]">
                            Important Notes:
                        </h5>
                        <ul className="flex flex-col gap-[12px]">
                            {[
                                "Tax exemption certificate will be issued within 15 working days",
                                "PAN number is mandatory for certificates above ₹2,000",
                                "Donations in kind are also eligible for tax benefits (subject to valuation)",
                                "Foreign contributions accepted through FCRA registration"
                            ].map((note, index) => (
                                <li key={index} className="flex items-start gap-[10px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5341 6.66373C14.8385 8.15793 14.6215 9.71134 13.9193 11.0649C13.2171 12.4185 12.072 13.4904 10.6751 14.1019C9.27816 14.7135 7.71382 14.8276 6.24293 14.4253C4.77205 14.023 3.48353 13.1287 2.59225 11.8913C1.70097 10.654 1.26081 9.14855 1.34518 7.62599C1.42954 6.10342 2.03332 4.65579 3.05583 3.52451C4.07835 2.39323 5.45779 1.64668 6.96411 1.40937C8.47043 1.17205 10.0126 1.4583 11.3334 2.2204" stroke="#223F7F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 7.33073L8 9.33073L14.6667 2.66406" stroke="#223F7F" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.5]">{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxBenefits;
