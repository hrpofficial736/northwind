import useIsMobile from "@/hooks/useIsMobile";
import React from "react";

const Medical = () => {
  const {isMobile}=useIsMobile()
  return (
    <svg
      width={isMobile ? "50":"80"}
      height={isMobile ? "50":"80"}
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2093_424"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="80"
        height="81"
      >
        <rect y="0.127808" width="80" height="80" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2093_424)">
        <path
          d="M28.9099 66.7945V51.2178H13.3333V29.102H28.9099V13.4612H51.0257V29.102H66.6666V51.2178H51.0257V66.7945H28.9099ZM32.2433 63.4612H47.6924V47.8845H63.3333V32.4353H47.6924V16.7945H32.2433V32.4353H16.6666V47.8845H32.2433V63.4612Z"
          fill="#FFF9E3"
        />
      </g>
    </svg>
  );
};

export default Medical;
