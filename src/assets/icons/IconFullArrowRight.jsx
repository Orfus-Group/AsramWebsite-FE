import React from 'react';

const IconFullArrowRight = ({
    size = 22,
    stroke = "#191919",
    strokeWidth = 2,
    className = ""
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M2.75 11H18.7917"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.8333 4.58342L19.2499 11.0001L12.8333 17.4167"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconFullArrowRight;
