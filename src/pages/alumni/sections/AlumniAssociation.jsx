import React from "react";

const asramalumni = "/AsramWebsite-FE/assets/alumni/alumnisection.png";

const AlumniAssociation = () => {
  return (
    <section className="w-full bg-[#eef2f7] font-montserrat py-[40px] lg:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">

        {/* ===== TOP ROW (TEXT + IMAGE) ===== */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-start">

          {/* LEFT – HEADING & DESCRIPTION */}
          <div className="flex-1">
            <h2 className="text-[28px] lg:text-[32px] font-bold text-[#223F7F] mb-[20px] leading-tight">
              ASRAM Alumni Association
            </h2>

            <p className="text-[16px] lg:text-[18px] leading-[1.44] text-[rgba(25,25,25,0.75)] text-justify">
              The ASRAM Alumni Association connects graduates from all our schools –
              Medical College, School of Nursing, and Paramedical College. Our mission
              is to foster lifelong relationships, support professional growth, and
              give back to the institution that shaped our careers.
              <br /><br />
              Whether you graduated last year or decades ago, you are part of a
              vibrant community of healthcare professionals committed to excellence,
              compassion, and continuous learning.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="w-full lg:w-[580px] shrink-0">
            <div className="w-full h-auto aspect-video lg:h-[355px] rounded-[12px] overflow-hidden">
              <img
                src={asramalumni}
                alt="ASRAM Alumni"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== BASELINE ROW (FEATURES + BOARD) ===== */}
        {/* 40px GAP APPLIED ONCE HERE */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-start mt-[40px]">

          {/* LEFT – FEATURES */}
          <div className="flex-1 flex flex-col gap-[20px]">

            {/* Feature 1 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-[48px] h-[48px] rounded-[9.6px] bg-[#ffffff] flex items-center justify-center text-[#223F7F] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.999 10.9922L17.999 12.9922L21.999 8.99219" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.00098 11C11.2101 11 13.001 9.20914 13.001 7C13.001 4.79086 11.2101 3 9.00098 3C6.79184 3 5.00098 4.79086 5.00098 7C5.00098 9.20914 6.79184 11 9.00098 11Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>

              <div>
                <h4 className="text-[18px] lg:text-[20px] font-normal text-[#223F7F] ">
                  Lifelong Connection
                </h4>
                <p className="text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.43]">
                  Stay connected with classmates and expand your professional network
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-[48px] h-[48px] rounded-[9.6px] bg-[#ffffff] flex items-center justify-center text-[#223F7F] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.999 7.00781H21.999V13.0078" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 7.00781L13.5 15.5078L8.5 10.5078L2 17.0078" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>

              <div>
                <h4 className="text-[18px] lg:text-[20px] font-normal text-[#223F7F] ">
                  Career Growth
                </h4>
                <p className="text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.43]">
                  Access exclusive job opportunities and professional development resources
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-[48px] h-[48px] rounded-[9.6px] bg-[#ffffff] flex items-center justify-center text-[#223F7F] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.4849C2.00002 8.3721 2.33759 7.28549 2.96813 6.36857C3.59867 5.45165 4.49252 4.74756 5.53161 4.3493C6.5707 3.95104 7.70616 3.87735 8.78801 4.13795C9.86987 4.39855 10.8472 4.98118 11.591 5.8089C11.6434 5.86492 11.7067 5.90957 11.7771 5.9401C11.8474 5.97063 11.9233 5.98639 12 5.98639C12.0767 5.98639 12.1526 5.97063 12.2229 5.9401C12.2933 5.90957 12.3566 5.86492 12.409 5.8089C13.1504 4.9758 14.128 4.38827 15.2116 4.1245C16.2952 3.86074 17.4335 3.93325 18.4749 4.33239C19.5163 4.73152 20.4114 5.43836 21.0411 6.35881C21.6708 7.27925 22.0053 8.36966 22 9.4849C22 11.7749 20.5 13.4849 19 14.9849L13.508 20.2979C13.3217 20.5119 13.0919 20.6838 12.834 20.8022C12.5762 20.9206 12.296 20.9828 12.0123 20.9845C11.7285 20.9863 11.4476 20.9277 11.1883 20.8126C10.9289 20.6975 10.697 20.5285 10.508 20.3169L5 14.9849C3.5 13.4849 2 11.7849 2 9.4849Z" stroke="#223F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>

              <div>
                <h4 className="text-[18px] lg:text-[20px] font-normal text-[#223F7F] ">
                  Give Back
                </h4>
                <p className="text-[14px] text-[rgba(25,25,25,0.75)] leading-[1.43]">
                  Mentor current students and support the next generation of healthcare professionals
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – BOARD CARD */}
          <div className="w-full lg:w-[580px] shrink-0">
            <div className="bg-white border border-[#e0e0e0] rounded-[8px] p-[20px] flex flex-col gap-[20px]">
              <h4 className="text-[18px] lg:text-[20px] font-medium text-[#223F7F]">
                Alumni Association Board
              </h4>

              <div>
                <p className="text-[16px] lg:text-[18px] font-medium text-[#191919] mb-[8px]">
                  Dr. Rajesh Kumar
                </p>
                <p className="text-[14px] text-[rgba(25,25,25,0.75)]">
                  President
                </p>
              </div>

              <div>
                <p className="text-[16px] lg:text-[18px] font-medium text-[#191919] mb-[8px]">
                  Nurse Priya Sharma
                </p>
                <p className="text-[14px] text-[rgba(25,25,25,0.75)]">
                  Vice President
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlumniAssociation;
