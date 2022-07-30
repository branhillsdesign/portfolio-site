import * as React from "react";

const SvgStopwatch = ({ title, titleId, ...props }) => (
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
      d="M12 7.5V14m9-9-2.156 2.156M10 3h4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgStopwatch;
