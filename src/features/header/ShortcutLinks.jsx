import React from "react";
import { Link } from "react-router-dom";
import { T } from "@/theme";

const ShortcutLinks = () => {
  const links = [
    { label: "Faculty", path: "/faculty" },
    { label: "Students", path: null },
    { label: "Admissions", path: null },
    { label: "About", path: null },
  ];

  return (
    <div className="flex items-center gap-[40px]">
      {links.map((item) =>
        item.path ? (
          <Link
            key={item.label}
            to={item.path}
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
            {item.label}
          </Link>
        ) : (
          <button
            key={item.label}
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
            {item.label}
          </button>
        )
      )}
    </div>
  );
};

export default ShortcutLinks;
