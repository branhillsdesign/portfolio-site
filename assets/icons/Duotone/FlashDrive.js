import * as React from "react";

const SvgFlashDrive = ({ title, titleId, ...props }) => (
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
    <path d="M8 4v5h8V4H8Z" stroke="currentColor" strokeWidth={2} />
    <path
      d="M6 10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11H6V10Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFlashDrive;
