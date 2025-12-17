import React from "react";

const IconClock = ({
    size = 17,
    color = "#191919",
    strokeOpacity = 0.75,
    strokeWidth = 1.56454,
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
            <g clipPath="url(#clip0_145_343)">
                <path
                    d="M8.49902 4.25V8.5L11.3324 9.91667"
                    stroke={color}
                    strokeOpacity={strokeOpacity}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.49837 15.5827C12.4104 15.5827 15.5817 12.4114 15.5817 8.49935C15.5817 4.58733 12.4104 1.41602 8.49837 1.41602C4.58636 1.41602 1.41504 4.58733 1.41504 8.49935C1.41504 12.4114 4.58636 15.5827 8.49837 15.5827Z"
                    stroke={color}
                    strokeOpacity={strokeOpacity}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_145_343">
                    <rect width="17" height="17" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default IconClock;
