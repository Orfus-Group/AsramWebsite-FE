import React from "react";

const IconCalendar = ({
    size = 20,
    color = "#191919",
    strokeOpacity = 0.75,
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
                d="M6.66663 1.66797V5.0013"
                stroke={color}
                strokeOpacity={strokeOpacity}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.3331 1.66797V5.0013"
                stroke={color}
                strokeOpacity={strokeOpacity}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.8335 3.33203H4.16685C3.24638 3.33203 2.50018 4.07822 2.50018 4.9987V16.6654C2.50018 17.5858 3.24638 18.332 4.16685 18.332H15.8335C16.754 18.332 17.5002 17.5858 17.5002 16.6654V4.9987C17.5002 4.07822 16.754 3.33203 15.8335 3.33203Z"
                stroke={color}
                strokeOpacity={strokeOpacity}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.50018 8.33398H17.5002"
                stroke={color}
                strokeOpacity={strokeOpacity}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconCalendar;
