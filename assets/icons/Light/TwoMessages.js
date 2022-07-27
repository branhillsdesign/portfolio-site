import * as React from "react";

const SvgTwoMessages = ({ title, titleId, ...props }) => (
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
      d="m19.25 19 .375-.468-.165-.132h-.21v.6Zm3.587 2.87-.374.468.374-.468ZM23.6 18V7h-1.2v11h1.2Zm0 3.792V18h-1.2v3.792h1.2Zm-4.725-2.324 3.588 2.87.75-.937-3.588-2.87-.75.938Zm.375-1.068H6v1.2h13.25v-1.2ZM22 5.4h-2.75v1.2H22V5.4ZM4.4 15v3h1.2v-3H4.4Zm18 6.792a.5.5 0 0 1 .812-.39l-.75.936a.7.7 0 0 0 1.138-.546h-1.2ZM23.6 7A1.6 1.6 0 0 0 22 5.4v1.2c.22 0 .4.18.4.4h1.2ZM6 18.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 19.6v-1.2Z"
      fill="#555770"
    />
    <path
      d="m4.75 15-.375-.469.165-.131h.21v.6Zm-3.588 2.87.375.468-.375-.468ZM2 1.4h16v1.2H2V1.4ZM19.6 3v11h-1.2V3h1.2ZM.4 14V3h1.2v11H.4Zm0 3.792V14h1.2v3.792H.4Zm4.725-2.324-3.588 2.87-.75-.937 3.588-2.87.75.938ZM4.75 14.4H18v1.2H4.75v-1.2ZM1.6 17.792a.5.5 0 0 0-.812-.39l.75.936A.7.7 0 0 1 .4 17.793h1.2ZM18 1.4A1.6 1.6 0 0 1 19.6 3h-1.2a.4.4 0 0 0-.4-.4V1.4ZM2 2.6a.4.4 0 0 0-.4.4H.4A1.6 1.6 0 0 1 2 1.4v1.2ZM19.6 14a1.6 1.6 0 0 1-1.6 1.6v-1.2a.4.4 0 0 0 .4-.4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTwoMessages;
