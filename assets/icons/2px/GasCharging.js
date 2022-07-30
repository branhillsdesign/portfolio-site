import * as React from "react";

const SvgGasCharging = ({ title, titleId, ...props }) => (
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
      d="M13 20v1h1v-1h-1Zm-8 0H4v1h1v-1ZM6 5h6V3H6v2Zm7 14H5v2h8v-2ZM12 5v6h2V5h-2Zm0 6v9h2v-9h-2Zm-6 9v-9H4v9h2Zm0-9V5H4v6h2Zm7-1H5v2h8v-2Zm-1-5h2a2 2 0 0 0-2-2v2ZM6 3a2 2 0 0 0-2 2h2V3Z"
      fill="#555770"
    />
    <path
      d="M20 9h.75H20Zm-4 0h-.75.75Zm0 9.5h-.75.75Zm2 2v-.75.75Zm2-2h-.75.75ZM16 14h-.75.75Zm2.884-4.116a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0l-1.061-1.06Zm-1.768-1.768a1.25 1.25 0 0 1 1.768 0l1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06Zm2.829-1.06L16.359 3.47l-1.06 1.06 3.585 3.586 1.06-1.06Zm-1.061 1.06c.244.244.366.563.366.884h1.5c0-.703-.269-1.408-.805-1.945l-1.061 1.061ZM19.25 9c0 .321-.122.64-.366.884l1.06 1.06A2.744 2.744 0 0 0 20.75 9h-1.5Zm0 0v9.5h1.5V9h-1.5Zm-2.134.884A1.244 1.244 0 0 1 16.75 9h-1.5c0 .703.269 1.408.805 1.944l1.061-1.06ZM16.75 9c0-.321.122-.64.366-.884l-1.06-1.06A2.744 2.744 0 0 0 15.25 9h1.5ZM15 12.25h-2v1.5h2v-1.5Zm.25 1.75v4.5h1.5V14h-1.5Zm0 4.5A2.75 2.75 0 0 0 18 21.25v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm4 0c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 0 0 2.75-2.75h-1.5ZM15 13.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 15 12.25v1.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgGasCharging;
