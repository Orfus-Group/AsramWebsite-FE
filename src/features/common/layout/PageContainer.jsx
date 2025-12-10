// PageSection.jsx
import React from "react";

export default function PageSection({
  children,
  className = "",
  bg = "bg-white",
  sectionClassName = "",
}) {
  return (
    <section className={`w-full ${bg} ${sectionClassName} asram-font`}>
      <div
        className={`
          w-full
          max-w-[1440px]
          mx-auto

          px-4
          sm:px-6
          md:px-10
          lg:px-[120px]

          py-[80px]

          ${className}
        `}
      >
        {children}
      </div>
    </section>
  );
}
