import React from "react";

const IconClinicalTrials = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    className = "",
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="-1 -1 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M14 2V8C13.9998 8.33548 14.0841 8.66561 14.245 8.96L19.755 19.04C19.9216 19.3446 20.0061 19.6874 20.0001 20.0345C19.9941 20.3817 19.8979 20.7213 19.7208 21.02C19.5437 21.3187 19.2919 21.5661 18.9902 21.7379C18.6885 21.9098 18.3472 22.0001 18 22H5.99997C5.65275 22.0001 5.31149 21.9098 5.00976 21.7379C4.70804 21.5661 4.45625 21.3187 4.27916 21.02C4.10208 20.7213 4.0058 20.3817 3.99981 20.0345C3.99382 19.6874 4.07831 19.3446 4.24497 19.04L9.75497 8.96C9.91587 8.66561 10.0001 8.33548 9.99997 8V2"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.45312 15H17.5471"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 2H15.5"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconClinicalTrials;
