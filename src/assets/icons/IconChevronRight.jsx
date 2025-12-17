import React from "react";

const IconChevronRight = ({
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
                d="M7.04028 14.0806L11.7339 9.38697L7.04028 4.69336"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconChevronRight;
