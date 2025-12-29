import React from "react";
import { Link, useLocation } from "react-router-dom";
import { T } from "@/theme";

const ShortcutLinks = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { label: "Faculty", path: "/faculty" },
    { label: "Students", path: null },
    { label: "Admissions", path: null },
    { label: "About", path: "/about-asram" },
  ];

  return (
    <div className="flex items-center gap-[40px]">
      {links.map((item) => {
        const isActive = item.path && currentPath.startsWith(item.path);

        return item.path ? (
          <Link
            key={item.label}
            to={item.path}
            className={`
            relative
            group
            ${T.font.family}
            ${T.font.weight.medium}
            text-[14px]
            leading-[14px]
            flex items-center
             text-white
            whitespace-nowrap
            py-1
          `}
          >
            {item.label}
            <span className={`
              absolute bottom-0 left-0 h-[1.5px] bg-[#008C8C] rounded-full transition-all duration-300
              ${isActive ? "w-full" : "w-0 group-hover:w-3/4"}
            `} />
          </Link>
        ) : (
          <button
            key={item.label}
            className={`
            relative
            group
            ${T.font.family}
            ${T.font.weight.medium}
            text-[14px]
            leading-[14px]
            flex items-center
            text-white
            whitespace-nowrap
            py-1
          `}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#008C8C] rounded-full transition-all duration-300 group-hover:w-3/4" />
          </button>
        );
      })}
    </div>
  );
};

export default ShortcutLinks;
