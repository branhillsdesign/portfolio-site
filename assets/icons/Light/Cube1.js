import * as React from "react";

const SvgCube1 = ({ title, titleId, ...props }) => (
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
    <rect
      x={4}
      y={4}
      width={16}
      height={16}
      rx={1}
      stroke="#555770"
      strokeWidth={1.2}
    />
    <circle cx={12} cy={12} r={1.5} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgCube1;
