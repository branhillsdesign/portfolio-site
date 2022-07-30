import * as React from "react";

const SvgArrowsHorizontal = ({ title, titleId, ...props }) => (
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
    <path d="M4 12h16" stroke="#555770" strokeWidth={1.2} />
    <path d="m20 15 3-3-3-3v6ZM4 15l-3-3 3-3v6Z" fill="#555770" />
  </svg>
);

export default SvgArrowsHorizontal;
