import * as React from "react";

const SvgBrokenArrowDownRight = ({ title, titleId, ...props }) => (
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
    <path d="m18 15-7-7-7 7" stroke="currentColor" strokeWidth={2} />
    <path d="M19 11v5h-5l5-5Z" fill="#555770" />
  </svg>
);

export default SvgBrokenArrowDownRight;
