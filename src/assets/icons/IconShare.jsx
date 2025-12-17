import React from "react";

const IconShare = ({
    size = 16,
    color = "white",
    strokeWidth = 1.25163,
    className = "",
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_145_352)">
                <path
                    d="M11.2642 5.00684C12.301 5.00684 13.1416 4.16628 13.1416 3.1294C13.1416 2.09251 12.301 1.25195 11.2642 1.25195C10.2273 1.25195 9.38672 2.09251 9.38672 3.1294C9.38672 4.16628 10.2273 5.00684 11.2642 5.00684Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.7544 9.3877C4.79128 9.3877 5.63184 8.54714 5.63184 7.51026C5.63184 6.47337 4.79128 5.63281 3.7544 5.63281C2.71751 5.63281 1.87695 6.47337 1.87695 7.51026C1.87695 8.54714 2.71751 9.3877 3.7544 9.3877Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.2642 13.7686C12.301 13.7686 13.1416 12.928 13.1416 11.8911C13.1416 10.8542 12.301 10.0137 11.2642 10.0137C10.2273 10.0137 9.38672 10.8542 9.38672 11.8911C9.38672 12.928 10.2273 13.7686 11.2642 13.7686Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.37549 8.45508L9.6498 10.9458"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.64355 4.07422L5.37549 6.56496"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_145_352">
                    <rect width="15.0196" height="15.0196" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default IconShare;
