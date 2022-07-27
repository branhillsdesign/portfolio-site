import * as React from "react";

const SvgShoppingCart5 = ({ title, titleId, ...props }) => (
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
      d="m21.928 9.145-.895-.447.895.447Zm-3.9 7.8.894.447-.894-.447Zm-12.056 0-.894.447.894-.447Zm5.945-13.82.832.555-.832-.555Zm.166 0-.832.555.832-.555Zm-10.01 6.02.894-.447-.895.447Zm-.895.447 3.9 7.8 1.789-.895-3.9-7.8-1.79.895ZM6.062 18h11.876v-2H6.062v2Zm12.86-.608 3.9-7.8-1.789-.894-3.9 7.8 1.79.894ZM16 8H8v2h8V8ZM8 8H2.162v2H8V8Zm3.085-5.43L7.168 8.445l1.664 1.11L12.75 3.68l-1.664-1.11ZM21.838 8H16v2h5.838V8ZM11.251 3.68l3.917 5.875 1.664-1.11-3.917-5.875-1.664 1.11Zm11.571 5.912A1.1 1.1 0 0 0 21.838 8v2a.9.9 0 0 1-.805-1.302l1.79.894ZM17.938 18a1.1 1.1 0 0 0 .984-.608l-1.789-.895a.9.9 0 0 1 .805-.497v2Zm-12.86-.608a1.1 1.1 0 0 0 .984.608v-2a.9.9 0 0 1 .805.497l-1.79.895Zm7.67-13.712a.9.9 0 0 1-1.497 0l1.664-1.11a1.1 1.1 0 0 0-1.83 0l1.664 1.11ZM2.968 8.698A.9.9 0 0 1 2.162 10V8a1.1 1.1 0 0 0-.984 1.592l1.789-.894Z"
      fill="#555770"
    />
    <rect x={10} y={11} width={4} height={4} rx={2} fill="currentColor" />
  </svg>
);

export default SvgShoppingCart5;
