import * as React from "react";

const SvgPhoneCall5 = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Phone_Call_5_svg__a)">
      <path
        d="M18.3 12.716a9.827 9.827 0 0 0-.154-7.651L14.87 5a.097.097 0 0 0-.1.097l-.027 4.02c0 .026.01.051.028.07l3.53 3.529Zm0 0a9.956 9.956 0 0 1-2.22 3.365 9.956 9.956 0 0 1-3.364 2.219m0 0a9.827 9.827 0 0 1-7.651-.154L5 14.87a.097.097 0 0 1 .097-.1l4.02-.027c.026 0 .051.01.07.028l3.529 3.53Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Phone_Call_5_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={-3}
        y={5}
        width={24}
        height={24}
      >
        <path
          transform="scale(-1 1) rotate(45 -9.199 -3.814)"
          fill="#000"
          d="M0 0h10.907v22H0z"
        />
      </mask>
      <g mask="url(#Phone_Call_5_svg__b)">
        <path
          d="M18.3 12.716a9.827 9.827 0 0 0-.154-7.651L14.87 5a.097.097 0 0 0-.1.097l-.027 4.02c0 .026.01.051.028.07l3.53 3.529Zm0 0a9.956 9.956 0 0 1-2.22 3.365 9.956 9.956 0 0 1-3.364 2.219m0 0a9.827 9.827 0 0 1-7.651-.154L5 14.87a.097.097 0 0 1 .097-.1l4.02-.027c.026 0 .051.01.07.028l3.529 3.53Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Phone_Call_5_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPhoneCall5;
