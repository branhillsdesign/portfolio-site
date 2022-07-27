import * as React from "react";

const SvgTruck = ({ title, titleId, ...props }) => (
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
      d="M2 16h-.6v.6H2V16ZM16 5h.6v-.6H16V5Zm6 11v.6h.6V16H22Zm0-4h.6v-.217l-.14-.167L22 12Zm-2.5-3 .46-.384-.18-.216h-.28V9ZM1.4 6v10h1.2V6H1.4ZM16 4.4H3v1.2h13V4.4Zm6.46 7.216-2.5-3-.921.768 2.5 3 .922-.768ZM16.6 9V5h-1.2v4h1.2Zm2.9-.6H16v1.2h3.5V8.4Zm3.1 4.6v-1h-1.2v1h1.2Zm-6 0V9h-1.2v4h1.2Zm5.4-.6h-6v1.2h6v-1.2ZM16.6 16v-1.5h-1.2V16h1.2Zm0-1.5V13h-1.2v1.5h1.2ZM7.4 17A1.4 1.4 0 0 1 6 18.4v1.2A2.6 2.6 0 0 0 8.6 17H7.4ZM6 18.4A1.4 1.4 0 0 1 4.6 17H3.4A2.6 2.6 0 0 0 6 19.6v-1.2ZM19.4 17a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6h-1.2ZM18 18.4a1.4 1.4 0 0 1-1.4-1.4h-1.2a2.6 2.6 0 0 0 2.6 2.6v-1.2ZM6 15.6c.517 0 .97.28 1.213.7l1.039-.6A2.6 2.6 0 0 0 6 14.4v1.2Zm1.213.7c.119.206.187.444.187.7h1.2a2.59 2.59 0 0 0-.348-1.3l-1.04.6Zm.52.3H16v-1.2H7.732v1.2ZM2 16.6h2.267v-1.2H2v1.2Zm2.6.4c0-.256.068-.494.187-.7l-1.039-.6A2.59 2.59 0 0 0 3.4 17h1.2Zm.187-.7A1.4 1.4 0 0 1 6 15.6v-1.2a2.6 2.6 0 0 0-2.252 1.3l1.039.6ZM16.6 17c0-.256.068-.494.187-.7l-1.039-.6A2.59 2.59 0 0 0 15.4 17h1.2Zm.187-.7A1.4 1.4 0 0 1 18 15.6v-1.2a2.6 2.6 0 0 0-2.252 1.3l1.039.6Zm-.787.3h.267v-1.2H16v1.2Zm3.732 0H22v-1.2h-2.268v1.2ZM18 15.6c.517 0 .97.28 1.213.7l1.039-.6A2.6 2.6 0 0 0 18 14.4v1.2Zm1.213.7c.119.206.187.444.187.7h1.2a2.59 2.59 0 0 0-.348-1.3l-1.039.6ZM21.4 13v3h1.2v-3h-1.2ZM2.6 6c0-.22.179-.4.4-.4V4.4A1.6 1.6 0 0 0 1.4 6h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTruck;
