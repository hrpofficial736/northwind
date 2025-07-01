import React from "react";

const HamBurger = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 73 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <mask
        id="mask0_2040_19"
        style={{
            maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="73"
        height="31"
      >
        <rect y="0.5" width="73" height="30" fill="#161203" />
      </mask>
      <g mask="url(#mask0_2040_19)">
        <path
          d="M5.86108 7.38838V5.76611H67.0139V7.38838H5.86108ZM5.86108 25.2333V23.611H67.0139V25.2333H5.86108ZM5.86108 16.3108V14.6886H67.0139V16.3108H5.86108Z"
          fill="#161203"
        />
      </g>
    </svg>
  );
};

export default HamBurger;
