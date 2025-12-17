import React from "react";

const IconChevronLeft = ({
    size = 19,
    color = "#191919",
    strokeWidth = 1.56454,
    className = "",
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M11.7341 14.0806L7.04053 9.38697L11.7341 4.69336"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconChevronLeft;
