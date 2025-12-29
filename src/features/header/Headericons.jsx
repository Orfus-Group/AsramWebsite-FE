import React from "react";

const SearchIcon = "/AsramWebsite-FE/assets/icons/IconSearch.svg";

const HeaderIcons = () => {
  return (
    <button className="ml-[40px]">
      <img loading="lazy" decoding="async" src={SearchIcon} alt="Search" className="h-[20px]" />
    </button>

  );
};

export default HeaderIcons;
