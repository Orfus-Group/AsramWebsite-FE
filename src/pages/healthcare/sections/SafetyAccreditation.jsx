import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";

const IconShield = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.001 13.0083C20.001 18.0083 16.501 20.5083 12.341 21.9583C12.1231 22.0321 11.8865 22.0285 11.671 21.9483C7.50098 20.5083 4.00098 18.0083 4.00098 13.0083V6.00826C4.00098 5.74305 4.10633 5.48869 4.29387 5.30116C4.48141 5.11362 4.73576 5.00826 5.00098 5.00826C7.00098 5.00826 9.50098 3.80826 11.241 2.28826C11.4528 2.10726 11.7223 2.00781 12.001 2.00781C12.2796 2.00781 12.5491 2.10726 12.761 2.28826C14.511 3.81826 17.001 5.00826 19.001 5.00826C19.2662 5.00826 19.5205 5.11362 19.7081 5.30116C19.8956 5.48869 20.001 5.74305 20.001 6.00826V13.0083Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconDocument = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00098 22.0078C5.47054 22.0078 4.96184 21.7971 4.58676 21.422C4.21169 21.047 4.00098 20.5382 4.00098 20.0078V4.00782C4.00098 3.47738 4.21169 2.96867 4.58676 2.5936C4.96184 2.21853 5.47054 2.00782 6.00098 2.00782H14.001C14.3175 2.0073 14.6311 2.06942 14.9235 2.19058C15.216 2.31175 15.4815 2.48958 15.705 2.71382L19.293 6.30182C19.5178 6.52532 19.6962 6.79116 19.8177 7.08398C19.9392 7.37679 20.0015 7.69079 20.001 8.00782V20.0078C20.001 20.5382 19.7903 21.047 19.4152 21.422C19.0401 21.7971 18.5314 22.0078 18.001 22.0078H6.00098Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 2.00781V7.00781C14 7.27303 14.1054 7.52738 14.2929 7.71492C14.4804 7.90246 14.7348 8.00781 15 8.00781H20" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 15L11 17L15 13" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconDrop = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C13.8565 22 15.637 21.2625 16.9497 19.9497C18.2625 18.637 19 16.8565 19 15C19 13 18 11.1 16 9.5C14 7.9 12.5 5.5 12 3C11.5 5.5 10 7.9 8 9.5C6 11.1 5 13 5 15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const IconClipboard = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.001 2H9.00098C8.44869 2 8.00098 2.44772 8.00098 3V5C8.00098 5.55228 8.44869 6 9.00098 6H15.001C15.5533 6 16.001 5.55228 16.001 5V3C16.001 2.44772 15.5533 2 15.001 2Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.001 4H18.001C18.5314 4 19.0401 4.21071 19.4152 4.58579C19.7903 4.96086 20.001 5.46957 20.001 6V20C20.001 20.5304 19.7903 21.0391 19.4152 21.4142C19.0401 21.7893 18.5314 22 18.001 22H6.00098C5.47054 22 4.96184 21.7893 4.58676 21.4142C4.21169 21.0391 4.00098 20.5304 4.00098 20V6C4.00098 5.46957 4.21169 4.96086 4.58676 4.58579C4.96184 4.21071 5.47054 4 6.00098 4H8.00098" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 14L11 16L15 12" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);


const SafetyAccreditation = () => {
    return (
        <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[80px] px-[20px] lg:px-[120px]">
            <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
                Safety Accreditation
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[40px]">
                {/* Card 1 */}
                <div className="bg-white w-full h-auto md:h-[276px] p-[30px] rounded-[11.3px] border-[0.9px] border-[#E0E0E0] flex flex-col items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(34,63,127,0.1)] rounded-[6.9px] flex items-center justify-center text-[#223F7F] shrink-0">
                        <IconShield />
                    </div>
                    <div>
                        <h4 className={`${T.font.family} font-medium text-[24px] leading-[1.33] text-[#223F7F] mb-[8px]`}>NABH Standards Compliance</h4>
                        <p className={`${T.font.family} font-regular text-[18px] leading-[1.44] text-[rgba(75,75,75,0.75)]`}>
                            We follow National Accreditation Board for Hospitals & Healthcare Providers (NABH) guidelines to ensure consistent quality across all clinical and support services.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white w-full h-auto md:h-[276px] p-[30px] rounded-[11.3px] border-[0.9px] border-[#E0E0E0] flex flex-col items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(34,63,127,0.1)] rounded-[6.9px] flex items-center justify-center text-[#223F7F] shrink-0">
                        <IconDocument />
                    </div>
                    <div>
                        <h4 className={`${T.font.family} font-medium text-[24px] leading-[1.33] text-[#223F7F] mb-[8px]`}>NABL Accredited Laboratory</h4>
                        <p className={`${T.font.family} font-regular text-[18px] leading-[1.44] text-[rgba(75,75,75,0.75)]`}>
                            Our diagnostic laboratory maintains National Accreditation Board for Testing and Calibration Laboratories (NABL) standards for accurate, reliable test results.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white w-full h-auto md:h-[276px] p-[30px] rounded-[11.3px] border-[0.9px] border-[#E0E0E0] flex flex-col items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(34,63,127,0.1)] rounded-[6.9px] flex items-center justify-center text-[#223F7F] shrink-0">
                        <IconDrop />
                    </div>
                    <div>
                        <h4 className={`${T.font.family} font-medium text-[24px] leading-[1.33] text-[#223F7F] mb-[8px]`}>Infection Control Protocols</h4>
                        <p className={`${T.font.family} font-regular text-[18px] leading-[1.44] text-[rgba(75,75,75,0.75)]`}>
                            Comprehensive infection prevention measures including sterilization, isolation protocols, and biomedical waste management to protect patients and staff.
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white w-full h-auto md:h-[276px] p-[30px] rounded-[11.3px] border-[0.9px] border-[#E0E0E0] flex flex-col items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[rgba(34,63,127,0.1)] rounded-[6.9px] flex items-center justify-center text-[#223F7F] shrink-0">
                        <IconClipboard />
                    </div>
                    <div>
                        <h4 className={`${T.font.family} font-medium text-[24px] leading-[1.33] text-[#223F7F] mb-[8px]`}>Patient Safety Standards</h4>
                        <p className={`${T.font.family} font-regular text-[18px] leading-[1.44] text-[rgba(75,75,75,0.75)]`}>
                            Systematic approaches to prevent medical errors, ensure correct procedures, and maintain patient safety throughout the care journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-white w-full h-auto md:h-[199px] p-[40px] rounded-[12px] border border-[rgba(7,7,7,0.2)] text-center flex flex-col items-center justify-center gap-[12px]">
                <h4 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F]`}>Our Quality Commitment</h4>
                <p className={`${T.font.family} font-regular text-[18px] leading-[1.44] text-[rgba(25,25,25,0.75)]`}>
                    Quality healthcare is not negotiable at ASRAM. We invest in training, technology, and systems to ensure every patient receives safe, effective treatment. Our commitment extends from the moment you enter our hospital until complete recovery and follow-up care.
                </p>
            </div>
        </PageSection>
    );
};

export default SafetyAccreditation;
