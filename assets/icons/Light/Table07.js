import * as React from "react";

const SvgTable07 = ({ title, titleId, ...props }) => (
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
      id="Table_07_svg__a"
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
        d="M21 3v2h-2V3h2ZM5 3v2H3V3h2ZM9 3v2H7V3h2ZM9 11.41v1.192H7V11.41h2ZM9 19v2H7v-2h2ZM12.602 3v1.494H13v14.963h-.398V21h-1.204v-1.543H11V4.494h.398V3h1.204ZM17 3v2h-2V3h2ZM17 11.398v1.204h-2v-1.204h2ZM17 19v2h-2v-2h2ZM21 7v2h-2V7h2ZM5 7v2H3V7h2ZM21 11.398v1.204h-2v-1.204h2ZM5 11.41v1.192H3V11.41h2ZM21 15v2h-2v-2h2ZM5 15v2H3v-2h2ZM21 19v2h-2v-2h2ZM5 19v2H3v-2h2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Table_07_svg__a)">
      <path
        d="M20.4 11.4h-7.8V3.6h7.8v7.8Zm-9-7.8v7.8H3.6V3.6h7.8Zm-7.8 9h7.8v7.8H3.6v-7.8Zm9 0h7.8v7.8h-7.8v-7.8Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTable07;
