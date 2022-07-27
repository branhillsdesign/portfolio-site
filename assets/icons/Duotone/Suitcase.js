import * as React from "react";

const SvgSuitcase = ({ title, titleId, ...props }) => (
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
      d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 4v4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSuitcase;
