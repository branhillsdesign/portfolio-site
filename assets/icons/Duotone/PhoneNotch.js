import * as React from "react";

const SvgPhoneNotch = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Phone_Notch_svg__a)">
      <path
        d="M11 3H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-3m-2 0v.9a.1.1 0 0 0 .1.1h1.8a.1.1 0 0 0 .1-.1V3m-2 0h2"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Phone_Notch_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={6}
        y={0}
        width={13}
        height={25}
      >
        <path d="M18.106 24.18 6.006 0h12.956v24.18h-.856Z" fill="#000" />
      </mask>
      <g mask="url(#Phone_Notch_svg__b)">
        <path
          d="M11 3H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-3m-2 0v.9a.1.1 0 0 0 .1.1h1.8a.1.1 0 0 0 .1-.1V3m-2 0h2"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Phone_Notch_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPhoneNotch;
