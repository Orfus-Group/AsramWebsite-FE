// src/components/header/ShortcutLinks.jsx
import React from "react";
import { T } from "@/theme";

const ShortcutLinks = () => {
  const links = ["Faculty", "Students", "Admissions", "About"];

  return (
    <div className="flex items-center gap-[40px]">
      {links.map((item) => (
        <button
          key={item}
          className={`
            ${T.font.family}
            ${T.font.weight.medium}
            text-[14px]
            leading-[14px]
            flex items-center
            text-white
            whitespace-nowrap
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ShortcutLinks;
