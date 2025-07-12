import React from 'react';

const Foot: React.FC = () => (
  <svg width="1129" height="764" viewBox="0 0 1129 764" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_fn_2382_775)">
      <path d="M160.281 302.57L1105 39.5029L298.404 603.067L160.281 302.57Z" fill="#FFBB00" fillOpacity="0.1"/>
    </g>
    <defs>
      <filter id="filter0_fn_2382_775" x="0.28125" y="-120.497" width="1264.72" height="883.563" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_2382_775"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.11627906560897827 0.11627906560897827" stitchTiles="stitch" numOctaves="3" result="noise" seed="5244" />
        <feComponentTransfer in="noise" result="coloredNoise1">
          <feFuncR type="linear" slope="2" intercept="-0.5" />
          <feFuncG type="linear" slope="2" intercept="-0.5" />
          <feFuncB type="linear" slope="2" intercept="-0.5" />
          <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
        </feComponentTransfer>
        <feComposite operator="in" in2="effect1_foregroundBlur_2382_775" in="coloredNoise1" result="noise1Clipped" />
        <feComponentTransfer in="noise1Clipped" result="color1">
          <feFuncA type="table" tableValues="0 0.16" />
        </feComponentTransfer>
        <feMerge result="effect2_noise_2382_775">
          <feMergeNode in="effect1_foregroundBlur_2382_775" />
          <feMergeNode in="color1" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default Foot;
  