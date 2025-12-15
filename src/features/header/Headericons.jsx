import React from "react";
import SearchIcon from "@/assets/icons/search.svg";

const HeaderIcons = () => {
  return (
    <button className="ml-[40px]">
      <img loading="lazy" decoding="async" src={SearchIcon} alt="Search" className="h-[20px]" />
    </button>

  );
};

export default HeaderIcons;
