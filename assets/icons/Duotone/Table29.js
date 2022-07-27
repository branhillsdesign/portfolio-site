import * as React from "react";

const SvgTable29 = ({ title, titleId, ...props }) => (
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
      id="Table_29_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <path
        d="M21 3v2H3.5V3H21ZM3.5 3v2H3V3h.5ZM9 11v2H7v-2h2ZM9 19v2H7v-2h2ZM13 7v2h-2V7h2ZM13 11v2h-2v-2h2ZM13 15v2h-2v-2h2ZM13 19v2h-2v-2h2ZM17 11v2h-2v-2h2ZM17 19v2h-2v-2h2ZM21 7v2h-2V7h2ZM5 7v2H3V7h2ZM21 11v2h-2v-2h2ZM5 11v2H3v-2h2ZM21 15v2h-2v-2h2ZM5 15v2H3v-2h2ZM21 19v2h-2v-2h2ZM5 19v2H3v-2h2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_29_svg__a)" strokeWidth={2}>
      <path d="M20 12v8H4V4h16v8Z" stroke="currentColor" />
      <path d="M3 4h18" stroke="#555770" />
    </g>
  </svg>
);

export default SvgTable29;
