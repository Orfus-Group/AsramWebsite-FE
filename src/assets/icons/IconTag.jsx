import React from "react";

const IconTag = ({
    size = 19,
    color = "#191919",
    strokeOpacity = 0.75,
    fillOpacity = 0.75,
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
            <g clipPath="url(#clip0_145_404)">
                <path
                    d="M9.84555 2.02286C9.55221 1.72943 9.15433 1.56454 8.73942 1.56445H3.12899C2.71405 1.56445 2.3161 1.72929 2.0227 2.0227C1.72929 2.3161 1.56445 2.71405 1.56445 3.12899V8.73942C1.56454 9.15433 1.72943 9.55221 2.02286 9.84555L8.83173 16.6544C9.18728 17.0077 9.66817 17.206 10.1694 17.206C10.6706 17.206 11.1515 17.0077 11.5071 16.6544L16.6544 11.5071C17.0077 11.1515 17.206 10.6706 17.206 10.1694C17.206 9.66817 17.0077 9.18728 16.6544 8.83173L9.84555 2.02286Z"
                    stroke={color}
                    strokeOpacity={strokeOpacity}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.86819 6.25883C6.0842 6.25883 6.25932 6.08371 6.25932 5.8677C6.25932 5.65168 6.0842 5.47656 5.86819 5.47656C5.65217 5.47656 5.47705 5.65168 5.47705 5.8677C5.47705 6.08371 5.65217 6.25883 5.86819 6.25883Z"
                    fill={color}
                    fillOpacity={fillOpacity}
                    stroke={color}
                    strokeOpacity={strokeOpacity}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_145_404">
                    <rect width="18.7744" height="18.7744" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default IconTag;
