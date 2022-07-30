import * as React from "react";

const SvgBugCrossed = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="Bug_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21.503 21.5.003 0 0 24h24V0H5.698v2.866L23 20.168 21.503 21.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Bug_Crossed_svg__a)" strokeWidth={2}>
      <path d="M2.583 4 21 22.417" stroke="#555770" />
      <path
        d="M6 17H2m16 0h4m-4-8h4M6 9H2m0 4h4m16 0h-4M6 1l2.876 2.876M18 1l-2.876 2.876"
        stroke="currentColor"
      />
      <path
        d="M6 9a5.996 5.996 0 0 1 6-6 5.996 5.996 0 0 1 6 6v8a6 6 0 0 1-12 0V9Z"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgBugCrossed;
