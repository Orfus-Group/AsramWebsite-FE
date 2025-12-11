// src/features/common/layout/PageSection.jsx
import React from "react";

export default function PageSection({
  children,
  className = "",
  bg = "bg-white",
  bgColor,
  sectionClassName = "",
}) {
  return (
    <section
      className={`w-full ${bg} ${sectionClassName} asram-font`}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div
        className={` 
          w-full
          max-w-[1440px]
          mx-auto

          /* horizontal padding */
          px-4
          sm:px-6
          md:px-10
          lg:px-[120px]

          /* responsive vertical padding */
          py-[60px]        /* mobile */
          sm:py-[48px]     /* tablet */
          lg:py-[80px]     /* desktop */

          ${className}
        `}
      >
        {children}
      </div>
    </section>
  );
}
