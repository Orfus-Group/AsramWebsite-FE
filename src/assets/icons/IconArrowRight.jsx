import React from "react";

const IconFullArrowRight = ({
  size = 17,
  stroke = "#223F7F",
  strokeWidth = 1.38889,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.47192 8.33203H13.1941"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33301 3.4707L13.1941 8.33181L8.33301 13.1929"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconFullArrowRight;
