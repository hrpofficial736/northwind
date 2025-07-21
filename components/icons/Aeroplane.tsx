import React from "react";
import useIsMobile from "@/hooks/useIsMobile";

const Aeroplane = () => {
  const {isMobile}=useIsMobile()
  return (
    <svg
      width={isMobile ? "50":"80"}
      height={isMobile ?"50":"80"}
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2093_416"
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
      <g mask="url(#mask0_2093_416)">
        <path
          d="M33.3332 65.879L26.7498 53.379L14.1665 46.7123L17.0832 43.7957L28.4165 45.7123L39.0832 35.0457L14.4998 24.5457L18.4165 20.7123L48.3332 25.7957L58.7498 15.2957C59.5832 14.4623 60.5971 14.0457 61.7915 14.0457C62.9859 14.0457 63.9998 14.4623 64.8332 15.2957C65.6665 16.129 66.0832 17.1429 66.0832 18.3373C66.0832 19.5318 65.6665 20.5457 64.8332 21.379L54.3332 31.7957L59.4165 61.7123L55.4998 65.629L45.0832 41.0457L34.4165 51.7123L36.2498 62.9623L33.3332 65.879Z"
          fill="#FFF9E3"
        />
      </g>
    </svg>
  );
};

export default Aeroplane;
