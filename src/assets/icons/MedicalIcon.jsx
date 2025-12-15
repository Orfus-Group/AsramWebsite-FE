import React from "react";

const MedicalIcon = ({
  size = 28,          // default size (28 or 32)
  color = "currentColor",
  strokeWidth = 2.30263,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.6608 12.5746C24.8669 12.4837 25.0419 12.3343 25.1639 12.1449C25.2859 11.9556 25.3497 11.7346 25.3474 11.5093C25.3451 11.2841 25.2767 11.0645 25.1508 10.8777C25.0249 10.6909 24.8469 10.5451 24.639 10.4585L14.771 5.96375C14.4711 5.82692 14.1452 5.7561 13.8154 5.7561C13.4857 5.7561 13.1598 5.82692 12.8599 5.96375L2.99308 10.4539C2.78811 10.5437 2.61374 10.6912 2.4913 10.8785C2.36886 11.0658 2.30365 11.2847 2.30365 11.5085C2.30365 11.7323 2.36886 11.9512 2.4913 12.1385C2.61374 12.3258 2.78811 12.4733 2.99308 12.5631L12.8599 17.0624C13.1598 17.1993 13.4857 17.2701 13.8154 17.2701C14.1452 17.2701 14.4711 17.1993 14.771 17.0624L24.6608 12.5746Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3287 11.5132V18.4211"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.90808 14.3911V18.4207C6.90808 19.3368 7.63588 20.2153 8.93136 20.863C10.2268 21.5108 11.9839 21.8747 13.816 21.8747C15.6481 21.8747 17.4051 21.5108 18.7006 20.863C19.9961 20.2153 20.7239 19.3368 20.7239 18.4207V14.3911"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MedicalIcon;
