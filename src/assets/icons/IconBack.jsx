import React from "react";

const IconBack = ({
    size = 20,
    color = "#223F7F",
    strokeWidth = 1.66667,
    className = "",
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M15.8334 10H4.16675"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.0001 15.8333L4.16675 9.99996L10.0001 4.16663"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconBack;
