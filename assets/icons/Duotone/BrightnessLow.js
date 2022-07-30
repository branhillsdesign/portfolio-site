import * as React from "react";

const SvgBrightnessLow = ({ title, titleId, ...props }) => (
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
    <path
      d="M12 1 8.778 4.222H4.222v4.556L1 12l3.222 3.222v4.556h4.556L12 23l3.222-3.222h4.556v-4.556L23 12l-3.222-3.222V4.222h-4.556L12 1Z"
      fill="#555770"
    />
    <mask
      id="Brightness_Low_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={1}
      width={12}
      height={22}
    >
      <path fill="#000" d="M12 1h12v22H12z" />
    </mask>
    <g mask="url(#Brightness_Low_svg__a)">
      <path
        d="M12 1 8.778 4.222H4.222v4.556L1 12l3.222 3.222v4.556h4.556L12 23l3.222-3.222h4.556v-4.556L23 12l-3.222-3.222V4.222h-4.556L12 1Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgBrightnessLow;
