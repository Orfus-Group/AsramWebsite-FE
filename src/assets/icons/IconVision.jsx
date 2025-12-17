import React from "react";

const IconVision = ({
    size = 58,
    className = "",
}) => {
    return (
        <svg
            width={size}
            height={size} // Aspect ratio is roughly 1:1, slight adjustment might be needed if exact px match required, original was 35x33 inside 58x58 box
            viewBox="0 0 35 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g filter="url(#filter0_d_27_206)">
                <path
                    d="M5.29129 15.0072C5.19001 14.7344 5.19001 14.4343 5.29129 14.1614C6.27773 11.7696 7.95216 9.72447 10.1023 8.28541C12.2524 6.84635 14.7815 6.07812 17.3687 6.07812C19.956 6.07812 22.485 6.84635 24.6351 8.28541C26.7853 9.72447 28.4597 11.7696 29.4462 14.1614C29.5474 14.4343 29.5474 14.7344 29.4462 15.0072C28.4597 17.3991 26.7853 19.4442 24.6351 20.8832C22.485 22.3223 19.956 23.0905 17.3687 23.0905C14.7815 23.0905 12.2524 22.3223 10.1023 20.8832C7.95216 19.4442 6.27773 17.3991 5.29129 15.0072Z"
                    stroke="white"
                    strokeWidth="2.43056"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.369 18.2272C19.3825 18.2272 21.0148 16.5949 21.0148 14.5814C21.0148 12.5678 19.3825 10.9355 17.369 10.9355C15.3554 10.9355 13.7231 12.5678 13.7231 14.5814C13.7231 16.5949 15.3554 18.2272 17.369 18.2272Z"
                    stroke="white"
                    strokeWidth="2.43056"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_27_206"
                    x="-1.2146"
                    y="0"
                    width="37.1667"
                    height="37.166"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_206" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_206" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default IconVision;
