import * as React from "react";

const SvgRadar5 = ({ title, titleId, ...props }) => (
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
      id="Radar_5_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path d="M2 2h10v7.5l1.85.65L22 2v20H2V2Z" fill="#fff" />
    </mask>
    <g mask="url(#Radar_5_svg__a)" strokeWidth={2}>
      <circle cx={12} cy={12} r={9} stroke="#555770" />
      <circle cx={12} cy={12} r={5} stroke="currentColor" />
      <circle cx={12} cy={12} r={1} stroke="#555770" />
    </g>
    <path
      d="M12 12V2"
      stroke="#555770"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgRadar5;
