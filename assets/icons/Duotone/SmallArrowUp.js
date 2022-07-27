import * as React from "react";

const SvgSmallArrowUp = ({ title, titleId, ...props }) => (
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
    <path d="m17 13.5-5-5-5 5h10Z" fill="currentColor" />
    <mask
      id="Small_Arrow_Up_svg__a"
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
    <g mask="url(#Small_Arrow_Up_svg__a)">
      <path d="m17 13.5-5-5-5 5h10Z" fill="#555770" />
    </g>
  </svg>
);

export default SvgSmallArrowUp;
