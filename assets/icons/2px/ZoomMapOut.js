import * as React from "react";

const SvgZoomMapOut = ({ title, titleId, ...props }) => (
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
      d="M9 9 5.5 5.5M9 15l-3.5 3.5M15 15l3.5 3.5M15 9l3.5-3.5m0 0L17 4h3v3l-1.5-1.5Zm0 13L20 17v3h-3l1.5-1.5Zm-13 0L7 20H4v-3l1.5 1.5Zm0-13L4 7V4h3L5.5 5.5Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgZoomMapOut;
