import * as React from "react";

const SvgSmallArrowsJoining = ({ title, titleId, ...props }) => (
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
      d="m12 8-.707.707.707.707.707-.707L12 8Zm0 8 .707-.707-.707-.707-.707.707L12 16ZM7.293 4.707l4 4 1.414-1.414-4-4-1.414 1.414Zm5.414 4 4-4-1.414-1.414-4 4 1.414 1.414Zm-4 12 4-4-1.414-1.414-4 4 1.414 1.414Zm2.586-4 4 4 1.414-1.414-4-4-1.414 1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSmallArrowsJoining;
