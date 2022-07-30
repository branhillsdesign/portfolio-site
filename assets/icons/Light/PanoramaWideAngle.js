import * as React from "react";

const SvgPanoramaWideAngle = ({ title, titleId, ...props }) => (
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
      d="m3 5-.19-.57-.3.1-.087.305L3 5Zm1.094-.365-.19-.569.19.57Zm15.812 0 .19-.569-.19.57ZM21 5l.577-.165-.087-.304-.3-.1L21 5ZM3 19l-.577.165.087.304.3.1L3 19Zm1.094.365-.19.569.19-.57Zm15.812 0 .19.569-.19-.57ZM21 19l.19.57.3-.1.087-.305L21 19ZM3.19 5.57l1.094-.366-.38-1.138-1.094.365.38 1.138Zm16.526-.366 1.094.365.38-1.138-1.095-.365-.379 1.138ZM2.81 19.57l1.095.365.38-1.139-1.095-.364-.38 1.138Zm17.286.365 1.094-.365-.38-1.138-1.094.364.38 1.139Zm-16.191 0a25.6 25.6 0 0 0 16.19 0l-.379-1.139a24.4 24.4 0 0 1-15.432 0l-.38 1.139Zm.38-14.73a24.4 24.4 0 0 1 15.431 0l.38-1.138a25.6 25.6 0 0 0-16.191 0l.38 1.138Zm17.292 13.96a26.081 26.081 0 0 0 0-14.329l-1.154.33a24.88 24.88 0 0 1 0 13.67l1.154.33ZM2.423 4.836a26.08 26.08 0 0 0 0 14.33l1.154-.33a24.88 24.88 0 0 1 0-13.67l-1.154-.33Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPanoramaWideAngle;
