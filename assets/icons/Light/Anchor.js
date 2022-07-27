import * as React from "react";

const SvgAnchor = ({ title, titleId, ...props }) => (
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
      d="M12 21V10m0 11a8.003 8.003 0 0 1-7.86-6.5M12 21a8.003 8.003 0 0 0 7.86-6.5M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v3m0 0H9m3 0h3M4.14 14.5a7.987 7.987 0 0 1-.078-.5l-.5.5h.579Zm15.72 0a7.98 7.98 0 0 0 .078-.5l.5.5h-.578Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgAnchor;
