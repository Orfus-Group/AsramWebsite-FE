// src/sections/home/InsideASRAM.jsx
import React from "react";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";

/* ----------------------------------
   Quote Icon
---------------------------------- */
const QuoteIcon = ({ className = "" }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22.5 20.625C23.9903 20.6201 25.4182 20.0258 26.472 18.972C27.5258 17.9182 28.1201 16.4903 28.125 15C28.125 13.6406 27.8381 12.375 27.1125 11.3325C26.5988 10.5881 25.7137 10.1512 24.87 9.6825C24.8606 8.20125 24.8794 7.8375 26.0494 5.88937C26.8125 4.61812 25.3425 3.18375 24.09 3.97688C21.4313 5.66813 19.62 7.18125 18.4537 8.96438C17.2875 10.7438 16.875 12.735 16.875 15C16.8775 16.4911 17.4709 17.9204 18.5253 18.9747C19.5796 20.0291 21.0089 20.6225 22.5 20.625ZM7.5 20.625C8.99032 20.6201 10.4182 20.0258 11.472 18.972C12.5258 17.9182 13.1201 16.4903 13.125 15C13.125 13.6406 12.8381 12.375 12.1125 11.3325C11.5987 10.5881 10.7137 10.1512 9.87 9.6825C9.86062 8.20125 9.8775 7.8375 11.0494 5.88937C11.8125 4.61812 10.3425 3.18375 9.09 3.97688C6.43125 5.66813 4.62 7.18125 3.45375 8.96438C2.2875 10.7438 1.875 12.735 1.875 15C1.87748 16.4911 2.47091 17.9204 3.52526 18.9747C4.57962 20.0291 6.00892 20.6225 7.5 20.625Z"
      fill="#223F7F"
    />
  </svg>
);

/* ----------------------------------
   Inside ASRAM Section
---------------------------------- */
const InsideASRAM = ({ title, image, quote }) => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[80px]">
      {/* TITLE */}
      <h2
        className="
          font-bold
          text-[28px] leading-[34px]
          sm:text-[34px] sm:leading-[42px]
          md:text-[38px] md:leading-[48px]
          lg:text-[42px] lg:leading-[52px]
          text-[#223F7F]
          mb-[30px] md:mb-[40px]
        "
      >
        {title}
      </h2>

      {/* CONTENT */}
      <div
        className="
          flex flex-col
          lg:flex-row
          items-start
          lg:items-center
          gap-[30px]
          md:gap-[40px]
          w-full
        "
      >
        {/* IMAGE — RESPONSIVE */}
        <div
          className="
            w-full
            lg:w-[60%]
            flex-shrink-0
          "
        >
          <img
            loading="lazy"
            decoding="async"
            src={image}
            alt=""
            className="
              w-full
              h-auto
              rounded-[8px]
              object-cover

              /* Responsive aspect ratios */
              aspect-[16/9]
              lg:aspect-[704/412]
            "
          />
        </div>

        {/* QUOTE */}
        <div
          className="
            w-full
            lg:w-[40%]
            flex flex-col
            items-start
            justify-start
          "
        >
          <QuoteIcon className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]" />

          <p
            className="
              mt-[16px]
              text-[18px]
              sm:text-[20px]
              md:text-[22px]
              lg:text-[24px]
              font-medium
            "
            style={{
              color: "#191919",
              lineHeight: "1.4",
              textAlign: "justify",
            }}
          >
            {quote}
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default InsideASRAM;
