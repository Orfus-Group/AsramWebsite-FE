import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const ForgetPassword = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col items-center justify-start py-10 px-4 md:px-8 lg:px-[60px] xl:py-[80px] xl:px-[120px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/AsramWebsite-FE/assets/login/loginbg.png)" }}
        >
            <img
                src="/AsramWebsite-FE/assets/asram/asrameducationlogo.png"
                alt="ASRAM Education Logo"
                className="h-auto w-[200px] md:w-[280px] xl:w-[300px] min-[1440px]:w-[361.6px] object-contain"
            />
            <div className="h-[20px] md:h-[30px] xl:h-[40px] w-full shrink-0"></div>

            <div className="w-full flex-1 flex items-center justify-center">
                <div className="w-full max-w-[448px] bg-white rounded-[8px] border border-[rgba(7,7,7,0.2)] p-6 md:p-8 md:gap-6 flex flex-col gap-6">
                    <Link to="/login" className="inline-flex items-center text-[#223F7F] text-sm font-medium font-montserrat hover:underline">
                        <HiArrowLeft className="mr-2" />
                        Back to Sign In
                    </Link>

                    <div className="flex flex-col gap-2">
                        <h6 className="text-[24px] md:text-[22px] font-medium text-[#191919] font-montserrat leading-none">
                            Forgot Password
                        </h6>
                        <p className="text-[#191919BF] text-sm md:[14px] font-montserrat leading-relaxed">
                            Enter your email to receive reset instructions
                        </p>
                    </div>

                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] text-[#191919] font-montserrat">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="your.email@asram.edu.in"
                                className="w-full p-4 rounded-[6px] border border-[#07070733] text-sm font-montserrat outline-none focus:border-[#223F7F] placeholder-[#9095A1]"
                            />
                        </div>

                        <div className="bg-[#EEF2F7] p-4 rounded-[6px] border border-[#0707071A]">
                            <p className="text-[14px] text-[#565E6C] font-montserrat leading-relaxed">
                                A password reset link will be sent to your registered email address. The link will be valid for 1 hour. If you don't receive the email within a few minutes, please check your spam folder.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="w-full h-[50px] flex justify-center items-center rounded-[8px] bg-[#223F7F] text-white text-sm font-medium font-montserrat hover:bg-[#1a2f5f] transition-colors"
                        >
                            Send Reset Instructions
                        </button>
                    </form>

                    <div className="pt-2 text-center">
                        <p className="text-xs text-[#9095A1] font-montserrat">
                            Still having trouble? Contact <a href="mailto:support@asram.edu.in" className="text-[#223F7F] hover:underline">support@asram.edu.in</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 py-4 px-6 bg-[#F6F8FB] rounded-[8px] border border-[#EEEFFF] w-full max-w-[448px] text-center">
                <p className="text-[12px] text-[#191919BF] font-montserrat leading-relaxed">
                    This is a secure system. Your session will expire after 30 minutes of inactivity. Never share your login credentials with anyone.
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;
