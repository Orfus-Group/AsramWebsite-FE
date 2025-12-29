import React from "react";

const IconTimePeriod = ({
    size = 18,
    color = "#191919",
    strokeWidth = 1.48026,
    strokeOpacity = 0.75,
    className = "",
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M8.88086 4.44141V8.8822L11.8414 10.3625"
            stroke={color}
            strokeOpacity={strokeOpacity}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.88081 16.2831C12.9684 16.2831 16.2821 12.9694 16.2821 8.88178C16.2821 4.79415 12.9684 1.48047 8.88081 1.48047C4.79317 1.48047 1.47949 4.79415 1.47949 8.88178C1.47949 12.9694 4.79317 16.2831 8.88081 16.2831Z"
            stroke={color}
            strokeOpacity={strokeOpacity}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default IconTimePeriod;
